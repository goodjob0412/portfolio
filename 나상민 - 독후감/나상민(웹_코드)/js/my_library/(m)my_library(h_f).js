$(document).ready(function(){
    //헤더
    $('.header_logo').click(function(){
        location.href='./my_library(m).html'
    })

    // 탑배너
    let tb_bang =0;
    let tb_length = $('.top_bn_text').length
    let tb_interval;
    //초기값
    $('.top_bn_text').eq(0).css({
        top:0
    })
    // 탑배너 돌리기
    tb_interval=setInterval(function(){
        $('.top_bn_text').eq((tb_bang)%tb_length).animate({
            top:'-100%'
        },1000)
        $('.top_bn_text').eq((tb_bang+1)%tb_length).css({
            top:'100%'
        }).animate({
            top:'0'
        },1000)
        tb_bang++
    },2000)

    //햄버거 관련
    //열기
    $('.header_hambtn').click(function(){
        $('.ham_pan').animate({
            left:0
        },300)
    })
    //닫기
    $('.ham_close').click(function(){
        $('.ham_pan').animate({
            left:'-150%'
        },300)
    })

        // 네비
    
        let hd_top = $('.header').offset().top;
        $(window).scroll(function(){
            // 네비 따라다니기
            if($(window).scrollTop()>=hd_top){
                $('.header').css({
                    position:'fixed',
                    left:0,
                    top:0,
                })
            }
            if($(window).scrollTop()<hd_top){
                    $('.header').css({
                    position:'absolute',
                    left:0,
                    top:'50px',
                })
            }
        })
})