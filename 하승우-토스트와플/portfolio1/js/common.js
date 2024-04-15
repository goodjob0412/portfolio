$(document).ready(function(){ 
    //헤더 메뉴바
    $('.h_bot').mouseenter(function(){
        $('.pan').css({
            height: '250px'
        })
        $('.sub_nav').css({
            height: '250px'
        })
    })
    $('.h_bot').mouseleave(function(){
        $('.pan').css({
            height: '0px',
        })
        $('.sub_nav').css({
            height: '0px',
            border: '0px'
        })
    })
    
    //해버거버튼
    let chk = false;
    $('.Responsive_hem').click(function(){ 
        
        if(chk) {
            $('.Responsive_pan').animate({
                left:"100%"
            }, 500)   
            // 버튼 원래대로 하기
            $('.line_top').removeClass('rotate45')
            setTimeout(function(){
                $('.line_top').removeClass('mid_setting')
            }, 250)
            
            $('.line_mid').delay(250).animate({
                opacity: 1
            }, 0)
            $('.line_bot').removeClass('rotate_45')
            setTimeout(function(){
                $('.line_bot').removeClass('mid_setting')
            }, 250)
        }
        else {       
            $('.Responsive_pan').animate({
                left:0
            }, 500)     
            // 버튼 X로 하기
            $('.line_top').addClass('mid_setting')
            setTimeout(function(){
                $('.line_top').addClass('rotate45')
            }, 250)
            
            $('.line_mid').delay(250).animate({
                opacity: 0
            }, 0)

            $('.line_bot').addClass('mid_setting')
            setTimeout(function(){
                $('.line_bot').addClass('rotate_45')
            }, 250)

        }
        chk = !chk;
    })

    $('.R_nav_li').mouseenter(function(){
        $(this).css({
            height: `${51 + $(this).find('li').length * 51}px`
        })
    })
    $('.R_nav_li').mouseleave(function(){
        $(this).css({
            height: `50px`
        })
    })
    
})