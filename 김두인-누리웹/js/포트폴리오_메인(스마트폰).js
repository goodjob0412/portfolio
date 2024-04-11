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

    // 게시판
    $('.pan_title').eq(0).addClass('title_active')
    $('.g_pan').eq(1).addClass('pan_active')
    $('.g_pan').eq(2).addClass('pan_active')
    $('.pan_title').click(function(){
        $('.pan_title').removeClass('title_active')
        $('.pan_title').eq($(this).index()).addClass('title_active')
        if($(this).index() == 0){
            pan_dis(1, 2)
        }
        else if($(this).index() == 1){
            pan_dis(0, 2)
        }
        else{
            pan_dis(0, 1)
        }
    })
    function pan_dis(act_on1, act_on2){
        $('.g_pan').removeClass('pan_active')
        $('.g_pan').eq(act_on1).addClass('pan_active')
        $('.g_pan').eq(act_on2).addClass('pan_active')
    }






    let gp_length = $('.g_pan').length;
    for(let i=0; i<gp_length; i++){
        main_info(i, 5, "포트폴리오_상세내용(스마트폰)")
    }
})