$(document).ready(function(){
    // 스크롤 내리면 안으로 들어오기
    var map_sc_top;
    $(window).scroll(function(){
    map_sc_top =$(window).scrollTop();
        //오른쪽에서 들어오는거
        if($('.come_box').offset().top <= map_sc_top + ($(window).height() * 0.5)){
            $('.sub_rig').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })
        } 
        else {
            $('.sub_rig').css({
                transform: 'translateX(100px)', 
                opacity: '0'
            })
        } 
        if($('.come_box').offset().top <= map_sc_top + ($(window).height() * 0.2)){
            $('.bus_rig').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })
        } 
        else {
            $('.bus_rig').css({
                transform: 'translateX(100px)', 
                opacity: '0'
            })
        }
        if($('.bus').offset().top <= map_sc_top + ($(window).height() * 0.2)){
            $('.car_rig').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })
        } 
        else {
            $('.car_rig').css({
                transform: 'translateX(100px)', 
                opacity: '0'
            })
        }
        
        //왼쪽에서 들어오는거
        if($('.come_box').offset().top <= map_sc_top + ($(window).height() * 0.5)){
            $('.sub_left').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })
        } 
        else {
            $('.sub_left').css({
                transform: 'translateX(-100px)', 
                opacity: '0'
            })
        } 
        if($('.come_box').offset().top <= map_sc_top + ($(window).height() * 0.2)){
            $('.bus_left').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })
        } 
        else {
            $('.bus_left').css({
                transform: 'translateX(-100px)', 
                opacity: '0'
            })
        }
        if($('.bus').offset().top <= map_sc_top + ($(window).height() * 0.2)){
            $('.car_left').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })
        } 
        else {
            $('.car_left').css({
                transform: 'translateX(-100px)', 
                opacity: '0'
            })
        }
    }); 

    $('.menu_li, .menu_pan').hover(function(){
        $('.menu_pan').css({
            height: 180,
            transition: "all 0.5s"
        })
    }, function(){
        $('.menu_pan').css({
            height: 0, 
        })
    }); 
    $('.menu_li').hover(function(){
        $('.hover_menu_ul').css({
            height: 180,
            transition: "all 0.5s"
        })
    }, function(){
        $('.hover_menu_ul').css({
            height: 0,
            transition: "all 0.5s"
        })
    });
});