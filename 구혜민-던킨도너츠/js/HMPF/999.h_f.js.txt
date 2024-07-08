$(document).ready(function(){

    // nav에 hover 하면 메뉴100%, 판의 알맹이 나타나게 하기 
    $('.nav_li').hover(function(){
        $('.pan').stop().slideDown(300)
 
        $('.nav_pan').css({display: 'none'})
        $('.nav_pan').eq($(this).index()).css({
            display: 'flex'
        })
    }, function(){
        $('.pan').stop().slideUp(300)
    })

    $('.pan').hover(function(){
        $('.pan').stop().slideDown(300)
    

    }, function(){
        $('.pan').stop().slideUp(300)
    })


    // 스크롤 내려가면 nav바 끌고 다니게 하기
    let nav_o_top = $('.nav_ul').offset().top;
    let th_h = $('#header').height();
    let nav_h = $('.nav_ul').height();
    $(window).scroll(function(){    
        let s_top = $(window).scrollTop() + h_top;

        if(nav_o_top <= s_top) {
            $('.nav_ul').addClass('nav_active')
            $('#wrap').css({
                marginTop: (th_h + nav_h),
            })
            $('.pan').css({
                position: 'fixed',
                top: (th_h + nav_h),
                left: 0
            })
        }
        else {
            $('.nav_ul').removeClass('nav_active')
            $('.pan').css({
                position: 'absolute',
                top: '100%',
                left: '0'
            })
            $('#wrap').css({
                marginTop: th_h,
            })
        }
    })

})

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
});
