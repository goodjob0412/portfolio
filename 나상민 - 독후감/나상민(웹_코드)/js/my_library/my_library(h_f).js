$(document).ready(function(){
    // 탑배너
    let tb_bang =0;
    let tb_length = $('.top_bn_text').length
    let tb_interval;
    //초기값
    $('.top_bn_text').eq(0).css({
        top:0
    })
    
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

    // 네비
    
    let nav_top = $('.nav').offset().top;
    $(window).scroll(function(){
        // 네비 따라다니기
        if($(window).scrollTop()>=nav_top){
            $('.nav').css({
                position:'fixed',
                left:0,
                top:0,
            })
        }
        if($(window).scrollTop()<nav_top){
                $('.nav').css({
                position:'absolute',
                left:0,
                top:'200px',
            })
        }
    })
    

})