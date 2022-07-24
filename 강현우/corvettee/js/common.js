let s_top = $(window).scrollTop();
let h_bot = $('.header').offset().top + $('.header').innerHeight();
let main_top = $('.main').offset().top;
let main_bot = $('.main').offset().top + $('.main').innerHeight();

let location_href = location.href
location_href = location_href.split('/');  
location_href = location_href[location_href.length-1].split('.html')
// location_href = location_href.split('5500/'); //live_server
// location_href = location_href.split('cafe24.com/'); //cafe24
// location_href = location_href[1].split('.html');

var wallpaper_indi_box_top;
var engine_ani_box_top;
var air_box_top;
var video_rotate_top;
var detail_box_top;
var dealer_box_top;
var resize_width = $(window).innerWidth();


if (location_href[0] == 'auto') {
    // import auto.js
    wallpaper_indi_box_top = $('.wallpaper_indi_box').offset().top;
    engine_ani_box_top  = $('.engine_ani_box').offset().top;
    air_box_top = $('.air_box').offset().top;
    video_rotate_top = $('.video_rotate').offset().top;
    detail_box_top = $('.detail_box').offset().top;
    dealer_box_top = $('.dealer_box').offset().top;
}
$(window).scroll(function(){
    s_top = $(window).scrollTop();
    if (s_top >= h_bot) {
        $('.header').css({
            position: 'fixed'
        })
        $('.h_bg_pan').css({
            background: '#000'
        })
        if (s_top + $('.header').innerHeight() >= main_top && s_top <= main_bot) {
            $('.header').css({
                color: '#000'
            })
            $('.h_bg_pan').css({
                background: '#fff'
            })
            $('.h_act_line').css({
                background: '#000'
            })
            $('.logo > a').css({
                background: 'url(./corvette_img/h_f/header/logo_bg_w.png) no-repeat center / 85%'
            })
        }
        else {
            $('.header').css({
                color: '#fff'
            })
            $('.h_bg_pan').css({
                background: '#000'
            })
            $('.h_act_line').css({
                background: '#fff'
            })
            $('.logo > a').css({
                background: 'url(./corvette_img/h_f/header/logo_bg_b.png) no-repeat center / 85%'
            })
        }
    }
    else {
        $('.header').css({
            position: 'absolute'
        })
        $('.h_bg_pan').css({
            background: 'transparent'
        })
    }

    if (location_href[0] == 'auto') {
        if (s_top > wallpaper_indi_box_top) {
            $('.wallpaper_indi_box').stop().animate({opacity: 0}, 500);
            $('.global_scroll_btn').css({pointerEvents: 'auto'}).stop().animate({opacity: 1}, 500);
        }
        else {
            $('.wallpaper_indi_box').stop().animate({opacity: 1}, 500);
            $('.global_scroll_btn').css({pointerEvents: 'none'}).stop().animate({opacity: 0}, 500);
        }
    }
})
$(window).resize(function(){
    resize_width = $(window).innerWidth();
    main_top = $('.main').offset().top;
    main_bot = $('.main').offset().top + $('.main').innerHeight();
    
    if (location_href[0] == 'auto') {
        wallpaper_indi_box_top = $('.wallpaper_indi_box').offset().top;
        air_box_top = $('.air_box').offset().top;
        engine_ani_box_top  = $('.engine_ani_box').offset().top;
        video_rotate_top = $('.video_rotate').offset().top;
        detail_box_top = $('.detail_box').offset().top;
        dealer_box_top = $('.dealer_box').offset().top;
    }
})

$(document).ready(function(){
    setTimeout(() => {
        s_top = $(window).scrollTop();
        h_bot = 90;
        main_top = $('.main').offset().top;
        main_bot = $('.main').offset().top + $('.main').innerHeight();
        
        if (location_href[0] == 'auto') {
            wallpaper_indi_box_top = $('.wallpaper_indi_box').offset().top;
            air_box_top = $('.air_box').offset().top;
            engine_ani_box_top  = $('.engine_ani_box').offset().top;
            video_rotate_top = $('.video_rotate').offset().top;
            detail_box_top = $('.detail_box').offset().top;
            dealer_box_top = $('.dealer_box').offset().top;
        }

        $('html, body').animate({
            scrollTop: s_top - 1
        }, 300, 'linear');
    }, 500);
    setTimeout(() => {
        s_top = $(window).scrollTop();
        h_bot = 90;
        main_top = $('.main').offset().top;
        main_bot = $('.main').offset().top + $('.main').innerHeight();
        
        if (location_href[0] == 'auto') {
            wallpaper_indi_box_top = $('.wallpaper_indi_box').offset().top;
            air_box_top = $('.air_box').offset().top;
            engine_ani_box_top  = $('.engine_ani_box').offset().top;
            video_rotate_top = $('.video_rotate').offset().top;
            detail_box_top = $('.detail_box').offset().top;
            dealer_box_top = $('.dealer_box').offset().top;
        }
        $('html, body').animate({
            scrollTop: s_top - 1
        }, 300, 'linear');
    }, 1000);
})