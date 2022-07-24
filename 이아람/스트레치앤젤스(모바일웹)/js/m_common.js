$(document).ready(function(){

    // top 버튼
    $('.top_btn').click(function(){
    $('html, body').animate({
        scrollTop: 0
    },800)
    })


    $('.menu_list > li').hover(function(){
        event.preventDefault();
        $(this).parents('.nav_menu').children('a').css({
            fontFamily:'font_B', fontWeight: 600
        })
        }, function(){
        $(this).parents('.nav_menu').children('a').css({
            fontFamily:'font_B', fontWeight: 100
        })
    })

    $('.nav_menu > a').hover(function(){
        $(this).css({fontWeight: 600})
    },function(){
        $(this).css({fontWeight: 100})
    })

    



    //햄버거
    var nav_chk = 1;
    $('.nav_btn').click(function(){
        event.stopPropagation();
        if(nav_chk) {
            $('.nav_btn_line').eq(0).css({
                animation: 'line_top 0.5s forwards'
            })
            $('.nav_btn_line').eq(1).css({
                animation: 'line_center 0.5s forwards'
            })
            $('.nav_btn_line').eq(2).css({
                animation: 'line_bot 0.5s forwards' 
            })
            $('.nav').css({left: 0})
            nav_chk = false;
        }
        else {
            $('.nav_btn_line').eq(0).css({
                animation: 'line_top_rev 0.5s forwards'
            })
            $('.nav_btn_line').eq(1).css({
                animation: 'line_center_rev 0.5s forwards'
            })
            $('.nav_btn_line').eq(2).css({
                animation: 'line_bot_rev 0.5s forwards' 
            })
            $('.nav').css({left: '-320px'})
            nav_chk = true;
        }
    });
    
    //메뉴클릭
    
    $('.nav_menu').click(function(){

            $('.menu_list').css({
                height: 0
            })
            $(this).children('.menu_list').css({
                height: 'auto'
            })
    })

 
   



    // footer
    var select_chk = true;
    $('.select_box').click(function(){ 
        event.stopPropagation();
        if(select_chk) {
            $('.family_list').css({
                display: 'block'
            })
        }
        else {
            $('.family_list').css({
                display: 'none'
            })
            
        } 
        select_chk = !select_chk;
    })

    $('.life, .footer').click(function(){
        if(!select_chk) {
            $('.family_list').css({
                display: 'none'
            })
            select_chk = true;
        }
    }) 



})