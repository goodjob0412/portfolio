$(document).ready(function(){
    if($(window).width()<=480){
        location.href='./cgv_main(m).html'
    }
    // 탑배너

    //x 버튼
    $('.img_x').click(function(){
        $('.top_banner').remove()
    })
    $('.tb_item').eq(0).css({top: 0});
    
    let tb_idx = 0;
    let tb_count = $('.tb_item').length;
    let tb_timer = 1500;
    
    $('.tb_item').eq(0).css({
        zIndex:99,
        top:0
    })
    setInterval(function(){
        // 나갈판
        $('.tb_item').eq(tb_idx % tb_count).css({
            zIndex:9
        }).animate({
            top: '-100%'
        }, tb_timer)

        // 들어올판
        $('.tb_item').eq((tb_idx+1) % tb_count).css({
            zIndex: 99,
            top: '100%'
        }).animate({
            top: '0'
        }, tb_timer)
        tb_idx+=1;
    }, tb_timer + 1500);


    
    // 메뉴판
    $('.nav_ul').hover(function(){
        $('.menu_pan').addClass('pan_active')
    }, function(){
        $('.menu_pan').removeClass('pan_active')
    })

    $('.menu_pan').hover(function(){
        $('.menu_pan').addClass('pan_active')
    }, function(){
        $('.menu_pan').removeClass('pan_active')
    })

})

