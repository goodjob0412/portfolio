$(document).ready(function(){
    // common_hover_circle
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
    ////////////
    // wallpaper
    const video = $('.video');
    const video_txt = $('.wallpaper_txt_box');
    let video_index = 1;
    video.eq(0).css({zIndex: 5, display: 'block'});
    $('.wallpaper .ani_circle g').eq(0).css({display: 'block'});
    $('.wallpaper .navi_circle_back').eq(0).css({display: 'none'});
    $('.wallpaper .navi_circle').eq(0).find('.bullet-progress-circle').addClass('bullet-progress-circle-act');
    $('.wallpaper .navi_circle').eq(0).addClass('indi_chk');
    video_txt.eq(0).css({zIndex: 100, display: 'block'});
    setTimeout(() => {
        video_txt.eq(0).children('p').css({
            opacity: 1
        })
        video_txt.eq(0).children('.wallpaper_txt_more_box').css({
            opacity: 1
        })
    }, 500);
    for (let i = 0; i < $('.wallpaper_txt_box').eq(0).find('span').length; i++) {
        j = 0;
        setTimeout(() => {
            $('.wallpaper_txt_box').eq(0).find('span').eq(i).css({transform: 'translateY(0%)', opacity: 1})
            if ($('.wallpaper_txt_box').eq(0).find('span').length == 2) {
                j = 1;
            }
        }, 250 * (i + j));
    }
    // wallpaper_slide
    function video_limit() {
        $('.wallpaper .navi_circle').css({
            pointerEvents: 'none'
        })
        setTimeout(function() {
            $('.wallpaper .navi_circle').css({
                pointerEvents: 'auto'
            })
        }, 550);
    }
    function video_slide(i_index, o_index) {
        $(`#video${i_index+1}`)[0].currentTime = 0;
        video.eq(i_index).css({
            zIndex: 10,
        }).fadeIn(500);
        video_txt.eq(i_index).css({
            zIndex: 100,
        }).fadeIn(500);
        for (let i = 0; i < $('.wallpaper_txt_box').eq(i_index).find('span').length; i++) {
            j = 0;
            setTimeout(() => {
                $('.wallpaper_txt_box').eq(i_index).find('span').eq(i).css({transform: 'translateY(0%)', opacity: 1})
                if ($('.wallpaper_txt_box').eq(i_index).find('span').length == 2) {
                    j = 1;
                }
            }, 250 * (i + j));
        }
        setTimeout(() => {
            video_txt.eq(i_index).children('p').css({
                opacity: 1
            })
            video_txt.eq(i_index).children('.wallpaper_txt_more_box').css({
                opacity: 1
            })
        }, 500);

        video.eq(o_index).css({
            zIndex: 1,
        }).delay(500).fadeOut(0)
        video_txt.eq(o_index).css({
            zIndex: 1,
        }).delay(500).fadeOut(0)
        $('.wallpaper_txt_box').eq(o_index).find('span').css({transform: 'translateY(100%)', opacity: 0})
        video_txt.eq(o_index).children('p').css({
            opacity: 0
        })
        video_txt.eq(o_index).children('.wallpaper_txt_more_box').css({
            opacity: 0
        })

        $('.wallpaper .ani_circle g').css({display: 'none'});
        $('.wallpaper .ani_circle g').eq(i_index).css({display: 'block'});
        $('.wallpaper .navi_circle_back').css({display: 'block'});
        $('.wallpaper .navi_circle_back').eq(i_index).css({display: 'none'});
        $('.bullet-progress-circle').removeClass('bullet-progress-circle-act');
        $('.wallpaper .navi_circle').eq(i_index).find('.bullet-progress-circle').addClass('bullet-progress-circle-act');
        $('.wallpaper .navi_circle').removeClass('indi_chk');
        $('.wallpaper .navi_circle').eq(i_index).addClass('indi_chk');
    }
    let video_interval;
    function video_auto_slide() {
        clearInterval(video_interval);
        video_interval = setInterval(function() {
            video_limit();

            video_slide(video_index % video.length, (video_index - 1) % video.length)

            video_index++;
        }, 7000);
    }
    // wall_auto_slide
    video_auto_slide();
    // indi_move
    $('.wallpaper .navi_circle').click(function(){
        video_limit();
        if ($(this).index() != $('.indi_chk').index()) {
            clearInterval(video_interval);
            $(`#video${$(this).index()+1}`)[0].currentTime = 0;
            video_slide($(this).index(), $('.indi_chk').index());
            video_index= $(this).index() + 1;
            video_auto_slide();
        }
    })

    // news_slide_box
    const news_txt_box = $('.n_s_txt_box');
    const news_img_box = $('.n_s_img_box');
    let news_index = 1;
    news_txt_box.eq(0).css({zIndex: 10, display: 'block'});
    $('.news_slide_box .ani_circle g').eq(0).css({display: 'block'});
    $('.news_slide_box .navi_circle_back').eq(0).css({display: 'none'});
    $('.news_slide_box .navi_circle').eq(0).find('.bullet-progress-circle').addClass('bullet-progress-circle-act2');
    $('.news_slide_box .navi_circle').eq(0).addClass('news_indi_chk');
    news_img_box.eq(0).css({zIndex: 10, display: 'block'});
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            news_txt_box.eq(0).children('.n_s_txt_box_title').find('span').eq(i).css({
                transform: 'translateY(0)',
                opacity: 1
            })
        }, 500 * i);
    }
    setTimeout(() => {
        news_txt_box.eq(0).find('.n_s_txt_box_ex').css({
            transform: 'translateY(0)',
            opacity: 1
        })
    }, 750);
    setTimeout(() => {
        news_txt_box.eq(0).children('.n_s_txt_box_more').css({
            transform: 'translateY(0)',
            opacity: 1
        })
    }, 1000);
    setTimeout(() => {
        $('.n_s_img_box').eq(0).css({
            transform: 'translate(0, -50%)'
        })
    }, 750);
    setTimeout(() => {
        $('.n_s_img_box').eq(0).css({
            background: '#fff'
        })
        $('.n_s_box_size').eq(0).css({
            opacity: 1
        })
    }, 1300);
    // news_limit
    function news_limit() {
        $('.news_slide_box .navi_circle').css({
            pointerEvents: 'none'
        })
        setTimeout(function() {
            $('.news_slide_box .navi_circle').css({
                pointerEvents: 'auto'
            })
        }, 550);
    }
    $('.news_slide_btn_R').click(function(){
        clearInterval(news_interval);
        news_limit();

        news_slide(news_index % news_txt_box.length, (news_index - 1) % news_txt_box.length);

        news_index++;

        news_auto_slide();
    })
    $('.news_slide_btn_L').click(function(){
        clearInterval(news_interval);
        news_limit();

        news_index--;

        news_slide((news_index - 1) % news_txt_box.length, news_index % news_txt_box.length);

        news_auto_slide();
    })
    function news_slide(i_index, o_index) {
        news_txt_box.eq(i_index).css({
            zIndex: 10,
        }).fadeIn(500);
        news_img_box.eq(i_index).css({
            zIndex: 10,
        }).fadeIn(500);
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                news_txt_box.eq(i_index).children('.n_s_txt_box_title').find('span').eq(i).css({
                    transform: 'translateY(0)',
                    opacity: 1
                })
            }, 500 * i);
        }
        setTimeout(() => {
            news_txt_box.eq(i_index).find('.n_s_txt_box_ex').css({
                transform: 'translateY(0)',
                opacity: 1
            })
        }, 750);
        setTimeout(() => {
            news_txt_box.eq(i_index).children('.n_s_txt_box_more').css({
                transform: 'translateY(0)',
                opacity: 1
            })
        }, 1000);
        setTimeout(() => {
            $('.n_s_img_box').eq(i_index).css({
                transform: 'translate(0, -50%)'
            })
        }, 750);
        setTimeout(() => {
            $('.n_s_img_box').eq(i_index).css({
                background: '#fff'
            })
            $('.n_s_box_size').eq(i_index).css({
                opacity: 1
            })
        }, 1300);

        news_txt_box.eq(o_index).css({
            zIndex: 1,
        }).delay(500).fadeOut(0);
        news_img_box.eq(o_index).css({
            zIndex: 1,
        }).delay(500).fadeOut(0);
        news_txt_box.children('.n_s_txt_box_title').find('span').css({
            transform: 'translateY(20px)',
            opacity: 0
        })
        news_txt_box.find('.n_s_txt_box_ex').css({
            transform: 'translateY(20px)',
            opacity: 0
        })
        news_txt_box.children('.n_s_txt_box_more').css({
            transform: 'translateY(20px)',
            opacity: 0
        })
        $('.n_s_img_box').css({
            background: '#ddd',
            transform: 'translate(-101%, -50%)'
        })
        $('.n_s_box_size').css({
            opacity: 0
        })

    $('.news_slide_box .ani_circle g').css({display: 'none'});
    $('.news_slide_box .ani_circle g').eq(i_index).css({display: 'block'});
    $('.news_slide_box .navi_circle_back').css({display: 'block'});
    $('.news_slide_box .navi_circle_back').eq(i_index).css({display: 'none'});
    $('.news_slide_box .navi_circle').find('.bullet-progress-circle').removeClass('bullet-progress-circle-act2');
    $('.news_slide_box .navi_circle').eq(i_index).find('.bullet-progress-circle').addClass('bullet-progress-circle-act2');
    $('.news_slide_box .navi_circle').removeClass('news_indi_chk');
    $('.news_slide_box .navi_circle').eq(i_index).addClass('news_indi_chk');
    }

    let news_interval;
    function news_auto_slide() {
        clearInterval(news_interval);
        news_interval = setInterval(() => {
            news_limit();

            news_slide(news_index % news_txt_box.length, (news_index - 1) % news_txt_box.length);

            news_index++;
        }, 7000);
    }

    news_auto_slide();

    // new_indi_move
    $('.news_slide_box .navi_circle').click(function(){
        news_limit();
        if ($(this).index() != $('.news_indi_chk').index()) {
            clearInterval(news_interval);
            news_slide($(this).index(), $('.news_indi_chk').index());
            news_index= $(this).index() + 1;
            news_auto_slide();
        }
    })
    ////////////////
    // rotate_box
    $('.rotate_loading').click(function(){
        $('.loader-path').addClass('loader-path-act');
        setTimeout(() => {
            $('.rotate_loading').css({display: 'none'})
        }, 1500);
    })
})



// loaction
$('.gallery_inner, .etc_box_inner_L').click(function(){
    location.href = './auto.html';
})
$('.wish_design_hover_box, .etc_box_inner_R').click(function(){
    location.href = './quote.html';
})