$(document).ready(function(){
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