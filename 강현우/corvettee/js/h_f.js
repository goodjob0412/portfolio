$(document).ready(function(){
    $('.slide_menu_open').click(function(){
        $('body').css({overflow: 'hidden'});
        $('.slide_menu').css({transition: 'all 0.5s', opacity: 1, transform: 'translateY(0)'});
        $('.slide_video9').css({display: 'block'});
        $('#slide_video9')[0].currentTime = 0;
    })
    $('.slide_menu_close_btn').click(function(){
        $('.slide_menu').css({transition: 'all 0.5s', transform: 'translateY(100%)', opacity: 0})
        $('body').css({overflow: 'auto'})
        setTimeout(() => {
            $('.slide_video').css({display: 'none'});
            $('.slide_img').css({display: 'none'})
        }, 500);
        $('.slide_menu_li').css({color: '#8f8f8f'});
        $('.slide_menu_li2').css({color: '#8f8f8f'});
    })
    $('.slide_menu_close_btn').hover(function(){
        $('.slide_menu_svg_act').css({
            transition: 'all 0.3s',
            strokeDashoffset: '0'
        })    
    }, function(){
        $('.slide_menu_svg_act').css({
            transition: 'none',
            strokeDashoffset: '70'
        })    
    })
    
    let slide_bar_val = 0;
    let slide_ul_val = 0;
    let slide_wheel_count = 1;
    $('.slide_menu_inner_txt_bot').hover(function(){
        if (slide_wheel_count == 1) {
            $(this).on('mousewheel DOMMouseScroll', function(e){
                if(e.originalEvent.wheelDelta /120 > 0) {
                    if (slide_bar_val > 0 && slide_bar_val <= 44) {
                        slide_bar_val -= 11;
                        $('.slide_menu_inner_txt_bot_bar_line').css({top: slide_bar_val+'%'})
                        slide_ul_val += 5.5;
                        $('.slide_menu_inner_txt_bot > ul').css({transform: `translateY(${slide_ul_val}%)`})
                    }
                }
                else{
                    if (slide_bar_val >= 0 && slide_bar_val < 44) {
                        slide_bar_val += 11;
                        $('.slide_menu_inner_txt_bot_bar_line').css({top: slide_bar_val+'%'})
                        slide_ul_val -= 5.5;
                        $('.slide_menu_inner_txt_bot > ul').css({transform: `translateY(${slide_ul_val}%)`})
                    }
                }
            })
            return false;
        }
    }, function(){
        slide_wheel_count = 0;
    })

    $('.slide_video').eq(8).css({display: 'block'});
    $('.slide_video').eq(8).children('video').attr('loop', true);

    let hover_index_chk;
    let hover_li1_chk = false;
    $('.slide_menu_li > span').mouseenter(function(){
        hover_li1_chk = true;
        $('.slide_menu_li > span').css({
            pointerEvents: 'none'
        })
        $('.slide_menu_li_inner_display').css({display: 'none'});
        $('.slide_menu_li').eq($(this).parent().index()).children('.slide_menu_li_inner_display').css({display: 'block'});
        hover_index_chk = $(this).parent().index();

        $('.slide_menu_li2').css({color: '#8f8f8f'});
        $('.slide_menu_li').css({color: '#8f8f8f'});
        $(this).parent().css({color: '#222'});
        $('.slide_img').css({zIndex: 0}).stop().delay(500).fadeOut(0);
        $('.slide_video').css({zIndex: 0}).stop().delay(500).fadeOut(0);
        $('.slide_video').children('video').attr('loop', false);
        $('.slide_video').eq(8).children('video').attr('loop', true);

        
        $('.slide_logo').css({display: 'none', opacity: 0});
        $('.slide_logo').eq($(this).parent().index()).css({display: 'block'});
        setTimeout(() => {
            $('.slide_logo').eq($(this).parent().index()).css({opacity: 1});
            $('.slide_logo').children().removeClass('slide_logo_act');
        }, 20);
        setTimeout(() => {
            $('.slide_logo').css({transition: 'all 0.5s'});
            $('.slide_logo').eq($(this).parent().index()).children().addClass('slide_logo_act');
        }, 300);
        setTimeout(() => {
            $('.slide_logo').css({transition: 'all 0.3s'});
            $('.slide_logo').css({opacity: 0});
        }, 800);
        setTimeout(() => {
            $('.slide_video').eq($(this).parent().index()).css({display: 'block'});
            $('.slide_video').eq($(this).parent().index()).children('video').attr('loop', true);
            $(`#slide_video${$(this).parent().index()+1}`)[0].currentTime = 0;
            $('.slide_logo').css({display: 'none'});
            $('.slide_logo').children().removeClass('slide_logo_act');
        }, 820);
    })
    $('.slide_menu_li > span').mouseleave(function(){
        setTimeout(() => {
            $('.slide_menu_li > span').css({
                pointerEvents: 'auto'
            })
            $('.slide_menu_li > span').eq(hover_index_chk).css({
                pointerEvents: 'none'
            })
        }, 850);
    })
    $('.slide_menu_li2').mouseenter(function(){
        $('.slide_menu_li_inner_display').css({display: 'none'});
        $('.slide_menu_li').css({color: '#8f8f8f'});
        $('.slide_menu_li2').css({color: '#8f8f8f'});
        $(this).css({color: '#222'});
        $('.slide_video').css({display: 'none'});
        $('.slide_img').css({display: 'none'})
        $('.slide_img').eq($(this).index()-9).css({display: 'block'});
    })
    $('.slide_menu_li2').mouseleave(function(){
        if (hover_li1_chk == true) {
            $('.slide_menu_li > span').css({
                pointerEvents: 'none'
            })
            setTimeout(() => {
                $('.slide_menu_li > span').css({
                    pointerEvents: 'auto'
                })
                hover_li1_chk = false;
            }, 850);
        }
    })
})