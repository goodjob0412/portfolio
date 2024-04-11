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

    $('.ul_top10').eq(0).addClass('ul_active');

    $('.hot_title').click(function(){
        $('.ul_top10').removeClass('ul_active')
        $('.ul_top10').eq($(this).index()).addClass('ul_active')
    })

    let sb_top = $('.side_box').offset().top;
    let sb_left = $('.side_box').position().left;
    let sb_height = $('.side_box').height();
    let tb_height = $('.top_banner').height();
    let f_top = $('.footer').offset().top;
    let best_height = $('.best_box').height();

    $(window).scroll(function(){
        let s_top = $(window).scrollTop() + tb_height + 20;
        if(sb_top > s_top){
            $('.side_box').css({
                position: 'absolute',
                top: 0,
                left: sb_left
            })
        }
        else if(sb_top <= s_top && s_top < f_top - 100 - sb_height){
            $('.side_box').css({
                position: 'absolute',
                top: s_top - sb_top,
                left: sb_left
            })
        }
        else{
            $('.side_box').css({
                position: 'absolute',
                top: f_top - 100 - sb_height - sb_top + 3,
                left: sb_left
            })
        }
    })
    let gp_length = $('.g_pan').length;
    for(let i=0; i<gp_length; i++){
        main_info(i, 10, "포트폴리오_상세내용")
    }
})