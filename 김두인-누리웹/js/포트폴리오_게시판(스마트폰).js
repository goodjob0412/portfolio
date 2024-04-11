$(document).ready(function(){
    $('.banner').eq(0).css({left: 0})

    let bn_length = $('.banner').length;
    let bn_idx = 0;
    let bn_timer = 1000;

    // 인디 추가
    for(let i=0; i<bn_length; i++){
        $('.indi_box').append(`<div class="indi ${i==0?'indi_active':''}"></div>`)
    }

    // 버튼 클릭시 배너 움직임
    $('#btn_R').click(function(){
        slide('-100%', '100%', (bn_idx + 1) % bn_length)
    })
    $('#btn_L').click(function(){
        slide('100%', '-100%', (bn_idx - 1) % bn_length)
    })

    function slide(o_pos, i_pos, i_bang){
        $('.btn_slide').css({pointerEvents:'none'})
            setTimeout(function(){
                $('.btn_slide').css({pointerEvents:'auto'})
            }, bn_timer)

        $('.banner').eq(bn_idx % bn_length).animate({
            left: o_pos
        }, bn_timer).animate({
            left: i_pos
        }, 0)

        $('.banner').eq(i_bang).animate({
            left: i_pos
        }, 0).animate({
            left: 0
        }, bn_timer)

        bn_idx = i_bang

        $('.indi').removeClass('indi_active')
        $('.indi').eq(bn_idx).addClass('indi_active')
    }

    // 배너 오토 슬라이드
    let auto_interval;
    function auto_slide(){
        auto_interval = setInterval(function(){
            $('#btn_R').trigger('click')
        }, bn_timer + 1000)
    }
    auto_slide()

    $('.main_banner').hover(function(){
        clearInterval(auto_interval)
    }, function(){
        auto_slide()
    })

    // 배너 없애기
    $('.bn_del').click(function(){
        $('.main_banner').css({display: 'none'})
    })

    let cateNo = get_info_from_url("cateNo")
    load_item_m(cateNo)

    let page = get_info_from_url("page")
    $('.page_num').removeClass('num_active')
    $('.page_num').eq((page-1) % 10).addClass('num_active')
})