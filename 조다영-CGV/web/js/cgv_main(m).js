$(document).ready(function(){
    //////////햄버거///////////////
    
    $('.btn_ham').click(function(){ 
        $('.ham_pan').css({
            left: 0
        })
    })
    $('.img_x').click(function(){ 
        $('.ham_pan').css({
            left: '-100%'
        })
    })

    function ham(leftt, a, b, c, d) {
        $('.ham_pan').animate({
            left: leftt
        }, 500)

        // 버튼 X로 하기
        $('.line_top').toggleClass(a)
        setTimeout(function(){
            $('.line_top').toggleClass(b)
        }, 500)
        
        $('.line_mid').toggleClass('opa_0')

        $('.line_bot').toggleClass(c)
        setTimeout(function(){
            $('.line_bot').toggleClass(d)
        }, 500)

    }



    // ///////메인/////////////
    //초기값 설정
    $('.banner').eq(0).css({
        left: 0
    })

    let ban_bang = 0;
    let ban_length = $('.banner').length
    setInterval(function(){
    $('.banner').eq((ban_bang) % ban_length).animate({
        left: '-100%'
    },2000)


    $('.banner').eq((ban_bang+1) % ban_length).animate({
        left: '100%'
    },0)


    $('.banner').eq((ban_bang+1) % ban_length).animate({
        left: 0
    },2000)

    ban_bang = ban_bang+1 
    },3000)


















})