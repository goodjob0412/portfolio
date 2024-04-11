$(document).ready(function(){
    let banner_bang = 0;
    let bn_length = $('.banner').length;
    let bang_timer = 1000;
    $('.banner').eq(0).css({left: 0});

    for(let i=0; i<bn_length; i++){
        $('.indi_box').append(`<div class="indi ${i==0?'indi_active':''}"></div>`)
    }

    $('#slide_btn_R').click(function(){
        slide('-100%', (banner_bang + 1) % bn_length, '100%')
    })

    $('#slide_btn_L').click(function(){
        slide('100%', (banner_bang - 1) % bn_length, '-100%')
    })

    function slide(o_pos, i_bang, i_pos){
        $('.slide_btn').css({pointerEvents:'none'})
            setTimeout(function(){
                $('.slide_btn').css({pointerEvents:'auto'})
            }, bang_timer)

        $('.banner').eq(banner_bang % bn_length).animate({
            left: o_pos
        }, bang_timer).animate({
            left: i_pos
        }, 0)

        $('.banner').eq(i_bang).animate({
            left: i_pos
        }, 0).animate({
            left: '0'
        }, bang_timer)

        $('.indi').removeClass('indi_active');
        $('.indi').eq(i_bang).addClass('indi_active');

        banner_bang = i_bang
    }

    // 메인배너 오토 슬라이드
    let auto_interval;
    function auto_slide() {
        auto_interval=setInterval(function(){
            $('#slide_btn_R').trigger('click')
        }, bang_timer + 3000);
    }
    auto_slide()

    $('.main_banner').hover(function(){
        clearInterval(auto_interval)
    }, function(){
        auto_slide()
    })
    
    $('.banner_close').click(function(){
        $('.main_banner').css({display: 'none'})
    })

    let cateNo = get_info_from_url("cateNo")
    load_item(cateNo)

    let page = get_info_from_url("page")
    $('.page_num').removeClass('num_active')
    $('.page_num').eq((page-1) % 10).addClass('num_active')
})

