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

    


    var nav_chk = true;
    var tmp_timer;
    //내비
    $('.nav_outer, .nav_pan').hover(function(){ 
console.log(nav_chk, $(window).scrollTop());
        if(nav_chk) {
            clearTimeout(tmp_timer);
            $('.nav_pan').css({height: '240px'});
            $('.nav').css({height: 40+'px', overflow: 'visible'})
            $('.menu_list').css({height: '240px'});
        }
    },function(){
        if(nav_chk) {
            $('.nav_pan').css({ height: '0'})
            $('.menu_list').css({height: '0'});
            tmp_timer=setTimeout(function(){
                clearTimeout(tmp_timer);
                $('.nav').css({ height: 40, overflow: 'hidden'})
            }, 500)
        }
    }); 
    //햄버거
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
            $('.nav_pan').css({height: '240px'});
            $('.menu_list').css({height: '240px'});
            $('.nav').css({height: 40+'px', overflow: 'visible'})
            $('.container').css({marginTop: 90+'px'})
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
            $('.nav_pan').css({ height: '0'})
            $('.menu_list').css({height: '0'});
            if($(window).scrollTop() >= 50) {
                setTimeout(function(){
                    $('.nav').css({ height: 0, overflow: 'hidden'})
                }, 500)
            }
            else {
                $('.nav').css({ height: 40})
            }
            nav_chk = true;
        }
    });
    


    
    //내비고정
    $(window).scroll(function(){
        if($(window).scrollTop() >= 50) {
            $('.top_btn').css({display: 'block'})
            $('.head').css({height: 50+'px'})
            $('.nav').css({height: 0, overflow: 'hidden'})
            if(nav_chk==false) {
                $('.nav_outer').css({display:'block'})
                $('.container').css({marginTop: 90+'px'})

                $('.nav').css({ height: 0, overflow: 'hidden'})
                $('.nav_btn_line').eq(0).css({
                    animation: 'line_top_rev 0.5s forwards'
                })
                $('.nav_btn_line').eq(1).css({
                    animation: 'line_center_rev 0.5s forwards'
                })
                $('.nav_btn_line').eq(2).css({
                    animation: 'line_bot_rev 0.5s forwards' 
                })
                nav_chk = true;

                
                $('.nav_pan').css({ height: '0'})
                $('.menu_list').css({height: '0'});
            }
        }
        else {
            $('.top_btn').css({display: 'none'})
            $('.head').css({height: 90+'px'})
            $('.nav').css({height: 40+'px'})
            $('.container').css({marginTop: 90+'px'})
        }
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