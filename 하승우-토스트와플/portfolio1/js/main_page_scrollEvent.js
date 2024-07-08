$(document).ready(function(){
    let toast_h = $('.toast_menu_box').offset().top
    let waffle_h = $('.waffle_menu_box').offset().top
    let drink_h = $('.drink_menu_box').offset().top
    
    let text_h = $('.text_area').offset().top
    let event_area= $('.event_area').offset().top
    
    $(window).scroll(function(){
        let window_h = $(window).scrollTop()+700

        //메뉴판스크롤 이벤트
        if(window_h >= toast_h){
            $('.toast_menu_box').css({
                left:"0%",
                opacity:1
            })
        }
        else{
            $('.toast_menu_box').css({
                left:"-150%",
                opacity:0
            })
        }
        if(window_h >= waffle_h){
            $('.waffle_menu_box').css({
                left: "0%",
                opacity:"1"
            })
        }
        else{
            $('.waffle_menu_box').css({
                left:"150%",
                opacity:"0"
            })
        }
        if(window_h >= drink_h){
            $('.drink_menu_box').css({
                left:"0px",
                opacity:"1"
            })
        }
        else{
            $('.drink_menu_box').css({
                left:"-150%",
                opacity:"0"
            })
        }
        

        //이벤트영역 이벤트
        if(window_h >= event_area){

            for(let i=0; i< $('.event_outer').length; i++){
                $('.event_outer').eq(i).css({
                    left: "0px",
                    transition: `1s`,
                    transitionDelay: `${0.4 * i}s`
                })
            }
        }
        //텍스트스크롤 이벤트
        if(window_h >= text_h){
            $('.text_box_title').css({
                transform: "translateY(0)",
                opacity: 1
            })
            $('.text_box span').css({
                transform: "translateY(0)",
                opacity: 1
            })
            $('.btn_box').css({
                opacity: 1
            })
            $('.text_area_img1').css({
                transform: "rotateZ(1080deg)",
                left: "5%",
                opacity: 1,
            })
        
            $('.text_area_img2').animate({
                bottom:"0%"
            }, 400).animate({
                bottom:"70%"
            }, 400).animate({
                bottom:"0%"
            }, 400).animate({
                bottom:"40%"
            }, 400).animate({
                bottom:"0%"
            }, 400).animate({
                bottom:"20%"
            }, 400).animate({
                bottom:"0%"
            }, 400)   
        }
        else{
            $('.text_box_title').css({
                transform: "translateY(80)",
                opacity: 0
            })
            $('.text_box span').css({
                transform: "translateY(80)",
                opacity: 0
            })
            $('.btn_box').css({
                opacity: 0
            })
            $('.text_area_img1').css({
                transform: "rotateZ(-1080deg)",
                left: "100%",
                opacity: 0,
            })
            $('.text_area_img2').css({

            })
        }
        
    })

})