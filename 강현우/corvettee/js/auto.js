$(document).ready(function(){
    // scroll_btn
    $('.global_scroll_btn_logo').click(function(){
        $('.global_scroll_btn_logo').css({animation: 'global_btn2 1s'});
        $('.glboal_hover_btn1').css({opacity: 1, transform: 'rotate(252deg)'});
        setTimeout(() => {
            $('.glboal_hover_btn2').css({opacity: 1, transform: 'rotate(222deg)'});
        }, 100);
        setTimeout(() => {
            $('.glboal_hover_btn3').css({opacity: 1, transform: 'rotate(192deg)'});
        }, 200);
        setTimeout(() => {
            $('.glboal_hover_btn4').css({opacity: 1, transform: 'rotate(162deg)'});
        }, 300);
        setTimeout(() => {
            $('.glboal_hover_btn5').css({opacity: 1, transform: 'rotate(132deg)'});
        }, 400);
        setTimeout(() => {
            $('.glboal_hover_btn6').css({opacity: 1, transform: 'rotate(102deg)'});
        }, 500);
    })
    $('.global_scroll_btn').mouseleave(function(){
        $('.global_scroll_btn_logo').css({animation: 'global_btn 5s linear infinite'});
        $('.glboal_hover_btn1').css({opacity: 0, transform: 'rotate(0deg)'});
        setTimeout(() => {
            $('.glboal_hover_btn2').css({opacity: 0, transform: 'rotate(0deg)'});
        }, 100);
        setTimeout(() => {
            $('.glboal_hover_btn3').css({opacity: 0, transform: 'rotate(0deg)'});
        }, 200);
        setTimeout(() => {
            $('.glboal_hover_btn4').css({opacity: 0, transform: 'rotate(0deg)'});
        }, 300);
        setTimeout(() => {
            $('.glboal_hover_btn5').css({opacity: 0, transform: 'rotate(0deg)'});
        }, 400);
        setTimeout(() => {
            $('.glboal_hover_btn6').css({opacity: 0, transform: 'rotate(0deg)'});
        }, 500);
    })
    $('.glboal_hover_btn1').click(function(){
        $('html, body').animate({
            scrollTop: main_top-$('.header').innerHeight()+1
        }, 500, 'linear');
    })
    $('.glboal_hover_btn2').click(function(){
        $('html, body').animate({
            scrollTop: engine_ani_box_top-$('.header').innerHeight()-20
        }, 500, 'linear');
    })
    $('.glboal_hover_btn3').click(function(){
        $('html, body').animate({
            scrollTop: video_rotate_top-$('.header').innerHeight()+1
        }, 500, 'linear');
    })
    $('.glboal_hover_btn4').click(function(){
        $('html, body').animate({
            scrollTop: air_box_top-$('.header').innerHeight()+1
        }, 500, 'linear');
    })
    $('.glboal_hover_btn5').click(function(){
        $('html, body').animate({
            scrollTop: detail_box_top-$('.header').innerHeight()+1
        }, 500, 'linear');
    })
    $('.glboal_hover_btn6').click(function(){
        $('html, body').animate({
            scrollTop: dealer_box_top-$('.header').innerHeight()+1
        }, 500, 'linear');
    })
    // wallpaper
    $('.wallpaper_btn').hover(function(){
        $(this).removeClass('wallpaper_btn_tmp');
        $(this).children('.wallpaper_btn_bg').css({
            transform: 'translate(-50%, -50%)',
            transition: 'all 1s'
        })
        setTimeout(() => {
            $(this).css({
                color: '#000' 
            })
        }, 300);
    }, function(){
        $(this).children('.wallpaper_btn_bg').css({
            transition: 'none',
            transform: 'translate(-150%, -50%)',
        })
        $(this).addClass('wallpaper_btn_tmp');
    })
    
    $('.wallpaper_indi').hover(function(){
        $(this).prev().css({
            opacity: 1
        })
    }, function(){
        $(this).prev().css({
            opacity: 0
        })
    })

    // scroll_navi
    $('.wallpaper_indi').click(function(){
        let wallpaper_indi_index = $(this).parent().index();
        if (wallpaper_indi_index == 0) {
            $('html, body').animate({
                scrollTop: main_top-$('.header').innerHeight()+1
            }, 500, 'linear');
        }
        else if (wallpaper_indi_index == 1) {
            $('html, body').animate({
                scrollTop: engine_ani_box_top-$('.header').innerHeight()-20
            }, 500, 'linear');
        }
        else if (wallpaper_indi_index == 2) {
            $('html, body').animate({
                scrollTop: video_rotate_top -$('.header').innerHeight()
            }, 500, 'linear');
        }
        else if (wallpaper_indi_index == 3) {
            $('html, body').animate({
                scrollTop: air_box_top -$('.header').innerHeight()
            }, 500, 'linear');
        }
        else if (wallpaper_indi_index == 4) {
            $('html, body').animate({
                scrollTop: detail_box_top -$('.header').innerHeight()
            }, 500, 'linear');
        }
        else if (wallpaper_indi_index == 5) {
            $('html, body').animate({
                scrollTop: dealer_box_top -$('.header').innerHeight()
            }, 500, 'linear');
        }
    })

    // engine_box
    let engine_middle_hover_chk = false;
    $('.engine_middle_drag_box').hover(function(){
        if (engine_middle_hover_chk == false) {
            $('.engine_middle_drag_L').css({
                background: 'url(./corvette_img/auto/engine/handle_left_act.svg) no-repeat center / cover'
            })
            $('.engine_middle_drag_R').css({
                background: 'url(./corvette_img/auto/engine/handle_right_act.svg) no-repeat center / cover'
            })
        }
    }, function(){
        if (engine_middle_hover_chk == false) {
            $('.engine_middle_drag_L').css({
                background: 'url(./corvette_img/auto/engine/handle_left.svg) no-repeat center / cover'
            })
            $('.engine_middle_drag_R').css({
                background: 'url(./corvette_img/auto/engine/handle_right.svg) no-repeat center / cover'
            })
        }
    })

    let engine_mouse_chk = false;
    $('.engine_middle_drag_box_tmp').mousedown(function(){
        engine_middle_hover_chk = true;
        $(this).css({display: 'none'});
        $('.engine_middle_box').css({pointerEvents: 'none'});
        engine_mouse_chk = true;
        $('.engine_middle_drag_L').css({
            background: 'url(./corvette_img/auto/engine/handle_left_act.svg) no-repeat center / cover'
        })
        $('.engine_middle_drag_R').css({
            background: 'url(./corvette_img/auto/engine/handle_right_act.svg) no-repeat center / cover'
        })
    })
    $(window).mousemove(function(e){
        if (engine_mouse_chk == true) {
            let mouse_move_val = e.offsetX;
            if (mouse_move_val <= 0) {
                mouse_move_val = 0;
            }
            if (mouse_move_val >= $('.engine_img_box').innerWidth()){
                mouse_move_val = $('.engine_img_box').innerWidth();
            }
            $('.engine_middle_box').css({
                left: (mouse_move_val / $('.engine_img_box').innerWidth() * 100) + '%'
            })
            $('.engine_img1').css({
                width: (mouse_move_val / $('.engine_img_box').innerWidth() * 100) + '%'
            })
        }
    })
    $(window).mouseup(function(){
        engine_middle_hover_chk = false;
        engine_mouse_chk = false;
        $(this).css({display: 'block'})
        $('.engine_middle_box').css({pointerEvents: 'auto'})
        $('.engine_middle_drag_box_tmp').css({display: 'block'});
        $('.engine_middle_drag_L').css({
            background: 'url(./corvette_img/auto/engine/handle_left.svg) no-repeat center / cover'
        })
        $('.engine_middle_drag_R').css({
            background: 'url(./corvette_img/auto/engine/handle_right.svg) no-repeat center / cover'
        })
    })

    /////////////touch /////////////
    let engine_touch_chk = false;
    $('.engine_middle_drag_box_tmp').bind('touchstart', function(){
        engine_middle_hover_chk = true;
        $(this).css({display: 'none'});
        $('.engine_middle_box').css({pointerEvents: 'none'});
        engine_touch_chk = true;
        $('.engine_middle_drag_L').css({
            background: 'url(./corvette_img/auto/engine/handle_left_act.svg) no-repeat center / cover'
        })
        $('.engine_middle_drag_R').css({
            background: 'url(./corvette_img/auto/engine/handle_right_act.svg) no-repeat center / cover'
        })
    })
    $(window).bind('touchmove', function(e){
        if (engine_touch_chk == true) {
            let mouse_touch_val = event.touches[0].clientX;
            if (mouse_touch_val <= 0) {
                mouse_touch_val = 0;
            }
            if (mouse_touch_val >= $('.engine_img_box').innerWidth()){
                mouse_touch_val = $('.engine_img_box').innerWidth();
            }
            $('.engine_middle_box').css({
                left: (mouse_touch_val / $('.engine_img_box').innerWidth() * 100) + '%'
            })
            $('.engine_img1').css({
                width: (mouse_touch_val / $('.engine_img_box').innerWidth() * 100) + '%'
            })
        }
    })
    $(window).bind('touchend', function(){
        engine_middle_hover_chk = false;
        engine_touch_chk = false;
        $(this).css({display: 'block'})
        $('.engine_middle_box').css({pointerEvents: 'auto'})
        $('.engine_middle_drag_box_tmp').css({display: 'block'});
        $('.engine_middle_drag_L').css({
            background: 'url(./corvette_img/auto/engine/handle_left.svg) no-repeat center / cover'
        })
        $('.engine_middle_drag_R').css({
            background: 'url(./corvette_img/auto/engine/handle_right.svg) no-repeat center / cover'
        })
    })
    ////////////////////////////////////

    // engine_ani_box
    let engine_ani_act_index = 0;
    // engine_ani_box_first_set
    $('.engine_ani_navi').eq(0).addClass('engine_ani_tmptmp');
    $('#engine_ani_video0').css({display: 'block'});
    $('.engine_ani_navi').eq(0).children('.engine_ani_navi_circle').css({
        border: '2px solid #fff',
        background: 'transparent'
    });
    $('.engine_ani_navi').eq(0).children('.engine_ani_navi_txt').css({color: '#fff'});
    $('.engine_ani_txt_box_inner').eq(0).css({display: 'block'});
    $('.engine_ani_txt_box_inner > h1').css({
        opacity: 1, transform: 'translateY(0)'
    });
    $('.engine_ani_txt_box_inner > h4').css({
        opacity: 1, transform: 'translateY(0)'
    });
    $('.engine_ani_navi').hover(function(){
        if ($(this).index() !== engine_ani_act_index) {
            $(this).children('.engine_ani_navi_txt').css({color: '#fff'});
        }
    }, function(){
        if ($(this).index() !== engine_ani_act_index) {
            $(this).children('.engine_ani_navi_txt').css({color: '#4b4b4b'});
        }
    })

    // engine_ani_box_click
    $('.engine_ani_navi').click(function(){
        let engine_ani_tmp_index = $('.engine_ani_tmptmp').index();
        engine_ani_act_index = $(this).index();
        $('.engine_ani_navi').removeClass('engine_ani_tmptmp');
        $(this).addClass('engine_ani_tmptmp');
        $('.engine_ani_navi_circle').css({
            border: '2px solid transparent',
            background: '#4b4b4b'
        });
        $(this).children('.engine_ani_navi_circle').css({
            border: '2px solid #fff',
            background: 'transparent'
        });
        $('.engine_ani_navi_txt').css({color: '#4b4b4b'});
        $(this).children('.engine_ani_navi_txt').css({color: '#fff'});
        $('.engine_ani_navi').css({pointerEvents: 'none'});
        $('.engine_ani_txt_box_inner').css({display: 'none'});
        $('.engine_ani_txt_box_inner > *').css({
            opacity: 0, transform: 'translateY(20px)', transition: 'none'
        });
        if ($(this).index() == 0) {
            $('.engine_ani_txt_box_inner').eq(0).css({display: 'block'});
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h4').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > p').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2500);
        }
        if ($(this).index() == 2) {
            $('.engine_ani_txt_box_inner').eq(1).css({display: 'block'});
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h4').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
        }
        if ($(this).index() == 4) {
            $('.engine_ani_txt_box_inner').eq(2).css({display: 'block'});
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h4').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
        }
        if ($(this).index() == 6) {
            $('.engine_ani_txt_box_inner').eq(3).css({display: 'block'});
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.engine_ani_txt_box_inner > h4').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
        }

        if (engine_ani_tmp_index == $(this).index()) {
            $('.engine_ani_navi').css({pointerEvents: 'auto'});
        }

        // video0
        if (engine_ani_tmp_index == 0 && $(this).index() == 2) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video12`).css({display: 'block'});
            $(`#engine_ani_video12`)[0].currentTime = 0;
            $('.engine_ani_navi_bar1').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video2`).css({display: 'block'});
                $(`#engine_ani_video2`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4000);
        }
        if (engine_ani_tmp_index == 0 && $(this).index() == 4) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video13`).css({display: 'block'});
            $(`#engine_ani_video13`)[0].currentTime = 0;
            $('.engine_ani_navi_bar1').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_navi_bar2').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video4`).css({display: 'block'});
                $(`#engine_ani_video4`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4500);
        }
        if (engine_ani_tmp_index == 0 && $(this).index() == 6) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video14`).css({display: 'block'});
            $(`#engine_ani_video14`)[0].currentTime = 0;
            $('.engine_ani_navi_bar1').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_navi_bar2').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.engine_ani_navi_bar3').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 1000);
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video6`).css({display: 'block'});
                $(`#engine_ani_video6`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 3000);
        }
        // video2
        if (engine_ani_tmp_index == 2 && $(this).index() == 0) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video21`).css({display: 'block'});
            $(`#engine_ani_video21`)[0].currentTime = 0;
            $('.engine_ani_navi_bar1').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video0`).css({display: 'block'});
                $(`#engine_ani_video0`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4300);
        }
        if (engine_ani_tmp_index == 2 && $(this).index() == 4) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video23`).css({display: 'block'});
            $(`#engine_ani_video23`)[0].currentTime = 0;
            $('.engine_ani_navi_bar2').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video4`).css({display: 'block'});
                $(`#engine_ani_video4`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4200);
        }
        if (engine_ani_tmp_index == 2 && $(this).index() == 6) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video24`).css({display: 'block'});
            $(`#engine_ani_video24`)[0].currentTime = 0;
            $('.engine_ani_navi_bar2').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_navi_bar3').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video6`).css({display: 'block'});
                $(`#engine_ani_video6`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4200);
        }
        // video4
        if (engine_ani_tmp_index == 4 && $(this).index() == 0) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video31`).css({display: 'block'});
            $(`#engine_ani_video31`)[0].currentTime = 0;
            $('.engine_ani_navi_bar2').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_navi_bar1').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video0`).css({display: 'block'});
                $(`#engine_ani_video0`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4300);
        }
        if (engine_ani_tmp_index == 4 && $(this).index() == 2) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video32`).css({display: 'block'});
            $(`#engine_ani_video32`)[0].currentTime = 0;
            $('.engine_ani_navi_bar2').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video2`).css({display: 'block'});
                $(`#engine_ani_video2`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4200);
        }
        if (engine_ani_tmp_index == 4 && $(this).index() == 6) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video34`).css({display: 'block'});
            $(`#engine_ani_video34`)[0].currentTime = 0;
            $('.engine_ani_navi_bar3').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video6`).css({display: 'block'});
                $(`#engine_ani_video6`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 4500);
        }
        // videoe6
        if (engine_ani_tmp_index == 6 && $(this).index() == 0) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video41`).css({display: 'block'});
            $(`#engine_ani_video41`)[0].currentTime = 0;
            $('.engine_ani_navi_bar3').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_navi_bar2').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.engine_ani_navi_bar1').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 1000);
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video0`).css({display: 'block'});
                $(`#engine_ani_video0`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 3300);
        }
        if (engine_ani_tmp_index == 6 && $(this).index() == 2) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video42`).css({display: 'block'});
            $(`#engine_ani_video42`)[0].currentTime = 0;
            $('.engine_ani_navi_bar3').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_navi_bar2').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video2`).css({display: 'block'});
                $(`#engine_ani_video2`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 5000);
        }
        if (engine_ani_tmp_index == 6 && $(this).index() == 4) {
            $('.engine_ani_video').css({display: 'none'});
            $(`#engine_ani_video43`).css({display: 'block'});
            $(`#engine_ani_video43`)[0].currentTime = 0;
            $('.engine_ani_navi_bar3').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.engine_ani_video').css({display: 'none'});
                $(`#engine_ani_video4`).css({display: 'block'});
                $(`#engine_ani_video4`)[0].currentTime = 0;
                $('.engine_ani_navi').css({pointerEvents: 'auto'});
            }, 5000);
        }
    })

    // video_rotate
    let video_rotate_act_index = 0;
    // video_rotate_first_set
    if (resize_width > 1024) {
        $('.video_rotate_navi').eq(0).addClass('video_rotate_tmptmp');
        $('.video_rotate_navi').eq(0).children('.video_rotate_navi_circle').css({
            border: '2px solid #fff',
            background: 'transparent'
        });
        $('.video_rotate_navi').eq(0).children('.video_rotate_navi_circle').css({color: '#fff'});
        $('.video_rotate_txt_box').eq(0).css({display: 'block'});
        $('.video_rotate_txt_box > h1').css({
            opacity: 1, transform: 'translateY(0)'
        });
        $('.video_rotate_txt_box > p').css({
            opacity: 1, transform: 'translateY(0)'
        });
        $('.video_rotate_navi').hover(function(){
            if ($(this).index() !== video_rotate_act_index) {
                $(this).children('.video_rotate_navi_txt').css({color: '#fff'});
            }
        }, function(){
            if ($(this).index() !== video_rotate_act_index) {
                $(this).children('.video_rotate_navi_txt').css({color: '#cdcdcd'});
            }
        })
    }
    else if (resize_width <= 1024) {
        $('.video_rotate_navi').eq(0).addClass('video_rotate_tmptmp');
        $('.video_rotate_navi').eq(0).children('.video_rotate_navi_circle').css({
            border: '2px solid #555',
            background: 'transparent'
        });
        $('.video_rotate_navi').eq(0).children('.video_rotate_navi_circle').css({color: '#555'});
        $('.video_rotate_txt_box').eq(0).css({display: 'block'});
        $('.video_rotate_txt_box > h1').css({
            opacity: 1, transform: 'translateY(0)'
        });
        $('.video_rotate_txt_box > p').css({
            opacity: 1, transform: 'translateY(0)'
        });
        $('.video_rotate_navi').hover(function(){
            if ($(this).index() !== video_rotate_act_index) {
                $(this).children('.video_rotate_navi_txt').css({color: '#000'});
            }
        }, function(){
            if ($(this).index() !== video_rotate_act_index) {
                $(this).children('.video_rotate_navi_txt').css({color: '#555'});
            }
        })
    }

    $('.video_rotate_navi').click(function(){
        let video_rotate_tmp_index = $('.video_rotate_tmptmp').index();
        video_rotate_act_index = $(this).index();
        $('.video_rotate_navi').removeClass('video_rotate_tmptmp');
        $(this).addClass('video_rotate_tmptmp');
        if (resize_width > 1024) {
            $('.video_rotate_navi_circle').css({
                border: '2px solid transparent',
                background: '#cdcdcd'
            });
            $(this).children('.video_rotate_navi_circle').css({
                border: '2px solid #fff',
                background: 'transparent'
            });
            $('.video_rotate_navi_txt').css({color: '#cdcdcd'});
            $(this).children('.video_rotate_navi_txt').css({color: '#fff'});
        }
        else if (resize_width <= 1024) {
            $('.video_rotate_navi_circle').css({
                border: '2px solid transparent',
                background: '#555'
            });
            $(this).children('.video_rotate_navi_circle').css({
                border: '2px solid #555',
                background: 'transparent'
            });
            $('.video_rotate_navi_txt').css({color: '#555'});
            $(this).children('.video_rotate_navi_txt').css({color: '#555'});
        }
        $('.video_rotate_navi').css({pointerEvents: 'none'});
        $('.video_rotate_txt_box').css({display: 'none'});
        $('.video_rotate_txt_box > *').css({
            opacity: 0, transform: 'translateY(20px)', transition: 'none'
        });
        if ($(this).index() == 0) {
            $('.video_rotate_txt_box').eq(0).css({display: 'block'});
            setTimeout(() => {
                $('.video_rotate_txt_box > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.video_rotate_txt_box > p').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
        }
        if ($(this).index() == 2) {
            $('.video_rotate_txt_box').eq(1).css({display: 'block'});
            setTimeout(() => {
                $('.video_rotate_txt_box > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.video_rotate_txt_box > i').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                })
                $('.video_rotate_txt_box > p').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
        }
        if ($(this).index() == 4) {
            $('.video_rotate_txt_box').eq(2).css({display: 'block'});
            setTimeout(() => {
                $('.video_rotate_txt_box > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.video_rotate_txt_box > p').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
        }
        if ($(this).index() == 6) {
            $('.video_rotate_txt_box').eq(3).css({display: 'block'});
            setTimeout(() => {
                $('.video_rotate_txt_box > h1').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 1500);
            setTimeout(() => {
                $('.video_rotate_txt_box > p').css({
                    opacity: 1, transform: 'translateY(0)', transition: 'all 1s'
                });
            }, 2000);
        }

        if (video_rotate_tmp_index == $(this).index()) {
            $('.video_rotate_navi').css({pointerEvents: 'auto'});
        }

        // video0
        if (video_rotate_tmp_index == 0 && $(this).index() == 2) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 0.5;
            $('.video_rotate_navi_bar1').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 0 && $(this).index() == 4) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 5.2;
            $('.video_rotate_navi_bar1').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.video_rotate_navi_bar2').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 0 && $(this).index() == 6) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 10.2;
            $('.video_rotate_navi_bar1').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.video_rotate_navi_bar2').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.video_rotate_navi_bar3').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 1000);
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        // video2
        if (video_rotate_tmp_index == 2 && $(this).index() == 0) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 3;
            $('.video_rotate_navi_bar1').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 2 && $(this).index() == 4) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 18;
            $('.video_rotate_navi_bar2').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 2 && $(this).index() == 6) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 22.6;
            $('.video_rotate_navi_bar2').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $('.video_rotate_navi_bar3').children().css({left: '-100%'}).animate({
                    left: '100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        // video4
        if (video_rotate_tmp_index == 4 && $(this).index() == 0) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 7.8;
            $('.video_rotate_navi_bar2').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.video_rotate_navi_bar1').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 4 && $(this).index() == 2) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 20.8;
            $('.video_rotate_navi_bar2').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 4 && $(this).index() == 6) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 30.3;
            $('.video_rotate_navi_bar3').children().css({left: '-100%'}).animate({
                left: '100%'
            }, 500)
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        // videoe6
        if (video_rotate_tmp_index == 6 && $(this).index() == 0) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 12.5;
            $('.video_rotate_navi_bar3').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.video_rotate_navi_bar2').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $('.video_rotate_navi_bar1').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 1000);
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 6 && $(this).index() == 2) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 25;
            $('.video_rotate_navi_bar3').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $('.video_rotate_navi_bar2').children().css({left: '100%'}).animate({
                    left: '-100%'
                }, 500)
            }, 500);
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
        if (video_rotate_tmp_index == 6 && $(this).index() == 4) {
            $(`#rotate_video`)[0].play();
            $(`#rotate_video`)[0].currentTime = 33;
            $('.video_rotate_navi_bar3').children().css({left: '100%'}).animate({
                left: '-100%'
            }, 500)
            setTimeout(() => {
                $(`#rotate_video`)[0].pause();
                $('.video_rotate_navi').css({pointerEvents: 'auto'});
            }, 2200);
        }
    })

    // air_box
    let air_box_spot_click_chk = false;
    $('.air_box_spot').hover(function(){
        if (air_box_spot_click_chk == false) {
            $(this).addClass('air_box_spot_hover');
        }
    }, function(){
        $(this).removeClass('air_box_spot_hover');
    })
    $('.air_box_spot').click(function(){
        if (air_box_spot_click_chk == false) {
            air_box_spot_click_chk = true;

            $('html, body').animate({
                scrollTop: air_box_top-$('.header').innerHeight()
            }, 500, 'linear');

            setTimeout(() => {
                $('.air_box_spot, .air_box_spot_tmp').css({pointerEvents: 'none'});
    
                $('body').css({overflow: 'hidden'});
                $('.air_box_spot').removeClass('air_box_spot_click');
                $(this).addClass('air_box_spot_click');
                $('.air_box_spot').children('.air_box_spot_close').css({display: 'none'});
                $(this).children('.air_box_spot_close').css({display: 'block'});
                $('.air_box_spot').children('.air_box_spot_inner').css({display: 'block'});
                $(this).children('.air_box_spot_inner').css({display: 'none'});
                $('.air_box_spot_tmp').css({transform: 'scale(2)', zIndex: 999999})
                $('.air_txt_inner').css({display: 'none'});

                if (resize_width >= 1380) {
                    if ($(this).index() == 0) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(37%, 0%) scale(2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt1').css({display: 'block'});
                        $('.air_box_ex').css({
                            right: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 2) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-26%, -2%) scale(2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt2').css({display: 'block'});
                        $('.air_box_ex').css({
                            right: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 4) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-49%, 25%) scale(2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt3').css({display: 'block'});
                        $('.air_box_ex').css({
                            right: 'auto',
                            left: '-40%',
                            transition: 'all 0.5s'
                        })
                        setTimeout(() => {
                            $('.air_box_ex').css({
                                left: '0',
                            })
                        }, 50);
                    }
                }
                else if (resize_width < 1380 && resize_width > 1024) {
                    if ($(this).index() == 0) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(44%, 40%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt1').css({display: 'block'});
                        $('.air_box_ex').css({
                            right: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 2) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-26%, 40%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt2').css({display: 'block'});
                        $('.air_box_ex').css({
                            right: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 4) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-49%, 44%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt3').css({display: 'block'});
                        $('.air_box_ex').css({
                            right: 'auto',
                            left: '-40%',
                            transition: 'all 0.5s'
                        })
                        setTimeout(() => {
                            $('.air_box_ex').css({
                                left: '0',
                            })
                        }, 50);
                    }
                }
                else if (resize_width <= 1024 && resize_width > 780) {
                    if ($(this).index() == 0) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(55%, -10%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt1').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 2) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-6%, -10%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt2').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 4) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-60%, 44%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt3').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                }
                else if (resize_width <= 780 && resize_width > 640) {
                    if ($(this).index() == 0) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(55%, 35%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt1').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 2) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-6%, 35%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt2').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 4) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-60%, 44%) scale(2.2)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt3').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                }
                else if (resize_width <= 640) {
                    if ($(this).index() == 0) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(55%, 60%) scale(2.3)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt1').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 2) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-6%, 60%) scale(2.3)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt2').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                    if ($(this).index() == 4) {
                        $('.air_box').css({
                            position: 'fixed',
                            left: '0',
                            top: '0%',
                            zIndex: 99999,
                            transform: 'translate(-65%, 54%) scale(2.3)',
                            transition: 'all 1s',
                        })
                        $('.air_box_ex_txt3').css({display: 'block'});
                        $('.air_box_ex').css({
                            bottom: 0,
                            transition: 'all 0.5s'
                        })
                    }
                }
        
    
                setTimeout(() => {
                    $('.air_box_spot, .air_box_spot_tmp').css({pointerEvents: 'auto'});
                }, 1000);
            }, 500);
        }
    })
    $('.air_box_spot_tmp').click(function(){
        if (air_box_spot_click_chk == true) {
            air_box_spot_click_chk = false;

            $('.air_box_spot, .air_box_spot_tmp').css({pointerEvents: 'none'});

            $('body').css({overflow: 'auto'});
            $('.air_box_spot').removeClass('air_box_spot_click');
            $('.air_box_spot_tmp').css({transform: 'none', zIndex: 0});
            $('.air_box_spot').children('.air_box_spot_close').css({display: 'none'});
            $('.air_box_spot').children('.air_box_spot_inner').css({display: 'block'});
            $('.air_txt_inner').css({display: 'flex'});

            if (resize_width > 1024) {
                if ($(this).index() == 1) {
                    $('body').css({overflowX: 'hidden'});
                    $('.air_box').css({
                        position: 'relative',
                        left: '0',
                        top: '0',
                        zIndex: 99999,
                        transform: 'translate(0%, 0%) scale(1)',
                        transition: 'all 1s',
                    })
                    $('.air_box_ex').css({
                        right: '-40%',
                        transition: 'all 0.5s'
                    })
                    setTimeout(() => {
                        $('.air_box').css({zIndex: 0});
                        $('body').css({overflowX: 'auto'});
                        $('.air_box_ex_txt1').css({display: 'none'});
                    }, 1000);
                }
                if ($(this).index() == 3) {
                    $('body').css({overflowX: 'hidden'});
                    $('.air_box').css({
                        position: 'relative',
                        left: '0',
                        top: '0',
                        zIndex: 99999,
                        transform: 'translate(0%, 0%) scale(1)',
                        transition: 'all 1s',
                    })
                    $('.air_box_ex').css({
                        right: '-40%',
                        transition: 'all 0.5s'
                    })
                    setTimeout(() => {
                        $('.air_box').css({zIndex: 0});
                        $('body').css({overflowX: 'auto'});
                        $('.air_box_ex_txt2').css({display: 'none'});
                    }, 1000);
                }
                if ($(this).index() == 5) {
                    $('body').css({overflowX: 'hidden'});
                    $('.air_box').css({
                        position: 'relative',
                        left: '0',
                        top: '0',
                        zIndex: 99999,
                        transform: 'translate(0%, 0%) scale(1)',
                        transition: 'all 1s',
                    })
                    $('.air_box_ex').css({
                        right: 'auto',
                        left: '-40%',
                        transition: 'all 0.5s'
                    })
                    setTimeout(() => {
                        $('.air_box_ex').css({
                            left: 'auto',
                            right: '-40%'
                        })
                    }, 500);
                    setTimeout(() => {
                        $('.air_box').css({zIndex: 0});
                        $('body').css({overflowX: 'auto'});
                        $('.air_box_ex_txt3').css({display: 'none'});
                    }, 1000);
                }
            }
            else if (resize_width <= 1024) {
                if ($(this).index() == 1) {
                    $('body').css({overflowX: 'hidden'});
                    $('.air_box').css({
                        position: 'relative',
                        left: '0',
                        top: '0',
                        zIndex: 99999,
                        transform: 'translate(0%, 0%) scale(1)',
                        transition: 'all 1s',
                    })
                    $('.air_box_ex').css({
                        bottom: '-40%',
                        transition: 'all 0.5s'
                    })
                    setTimeout(() => {
                        $('.air_box').css({zIndex: 0});
                        $('body').css({overflowX: 'auto'});
                        $('.air_box_ex_txt1').css({display: 'none'});
                    }, 1000);
                }
                if ($(this).index() == 3) {
                    $('body').css({overflowX: 'hidden'});
                    $('.air_box').css({
                        position: 'relative',
                        left: '0',
                        top: '0',
                        zIndex: 99999,
                        transform: 'translate(0%, 0%) scale(1)',
                        transition: 'all 1s',
                    })
                    $('.air_box_ex').css({
                        bottom: '-40%',
                        transition: 'all 0.5s'
                    })
                    setTimeout(() => {
                        $('.air_box').css({zIndex: 0});
                        $('body').css({overflowX: 'auto'});
                        $('.air_box_ex_txt2').css({display: 'none'});
                    }, 1000);
                }
                if ($(this).index() == 5) {
                    $('body').css({overflowX: 'hidden'});
                    $('.air_box').css({
                        position: 'relative',
                        left: '0',
                        top: '0',
                        zIndex: 99999,
                        transform: 'translate(0%, 0%) scale(1)',
                        transition: 'all 1s',
                    })
                    $('.air_box_ex').css({
                        right: 'auto',
                        transition: 'all 0.5s'
                    })
                    setTimeout(() => {
                        $('.air_box_ex').css({
                            bottom: '-40%'
                        })
                    }, 500);
                    setTimeout(() => {
                        $('.air_box').css({zIndex: 0});
                        $('body').css({overflowX: 'auto'});
                        $('.air_box_ex_txt3').css({display: 'none'});
                    }, 1000);
                }
            }

            setTimeout(() => {
                $('.air_box_spot, .air_box_spot_tmp').css({pointerEvents: 'auto'});
            }, 1000);
        }
    })

    // detail_canvas
    const canvas = document.getElementById('detail_interi_canvas');
    const context = canvas.getContext('2d');
    let cw = canvas.width;
    let ch = canvas.height;

    const imgs = [];
    let total_img_count = 60;
    let progress;
    let current_frame;

    function set_img() {
        for (let i = 0; i < total_img_count; i++) {
            let img_el = new Image();
            img_el.src = `./corvette_img/auto/detail/interi/${1+i}.jpg`

            imgs.push(img_el)
        }
    }

    function loop() {
        progress = (pageYOffset - $('.detail_box').offset().top) / ($('.detail_box').innerHeight() - (canvas.height / 1.8))

        if(progress < 0) {
            progress = 0;
        }
        else if(progress > 1) {
            progress = 1;
        }
        current_frame = Math.round((total_img_count - 1) * progress)
        context.drawImage(imgs[current_frame], 0,0,cw,ch);

        requestAnimationFrame(loop);
    }

    function init() {
        context.drawImage(imgs[0], 0,0,cw,ch);
        loop();
    }
    window.addEventListener('load', init)

    set_img()

    // dealer_box
    $('.hover_circle').hover(function(){
        $(this).find('.hover_circle_act').css({
            transition: 'all 0.3s',
            strokeDashoffset: '0'
        })
    }, function(){
        $(this).find('.hover_circle_act').css({
            transition: 'none',
            strokeDashoffset: '70'
        })
    })
    $('.hover_circle_txt').hover(function(){
        $(this).next().find('.hover_circle_act').css({
            transition: 'all 0.3s',
            strokeDashoffset: '0'
        })
    }, function(){
        $(this).next().find('.hover_circle_act').css({
            transition: 'none',
            strokeDashoffset: '70'
        })
    })
})


// loaction
$('.wallpaper_btn, .engine_ani_box_plus_btn').click(function(){
    location.href = './quote.html';
})