$(document).ready(function(){

    // 햄버거 누르면 액션
    let chk = true; 
    let timer = 0.3;
    $('.line').css({transition: `all ${timer}s`})
    $('.btn_ham').click(function(){
        // X만들기
        if(chk) {
            tmp('#line_top', 'translateY(8px)', 'translateY(8px) rotate(45deg)', timer * 1000) 
            tmp('#line_mid', '0', 'scale(0)', timer * 1000) 
            tmp('#line_bot', 'translateY(-8px)', 'translateY(-8px) rotate(-45deg)', timer * 1000) 
        }

        // 햄버거 만들기
        else {  
            tmp('#line_top', 'translateY(10px) rotate(0)', 'translateY(0)', timer * 1000) 
            tmp('#line_mid', '0', 'scale(1)', timer / 2 * 1000)  
            tmp('#line_bot', 'translateY(-10px) rotate(0)', 'translateY(0)', timer * 1000) 
        }
    
        chk = !chk;
        $('.ham_pan').toggleClass('ham_pan_active');
    });
    

    function tmp(el, f_trans, s_trans, time) {
        if( el != "line_mid" ) {
            $(el).css({
                transform: f_trans
            })
        }
        setTimeout(()=> {
            $(el).css({
                transform: s_trans
            }) 
        }, time) // 300 = 0.3 * 1000
    }





    $('.menu_sec').click(function(){

        console.log($(this).index());

        // 색추가
        $('.menu_sec span').removeClass('menu_sec_active');
        $('.menu_sec').eq($(this).index()).children('span').addClass('menu_sec_active');

        // 메뉴 클릭시 나타나기
        $('.sub_menu').slideUp(300)
        $(this).find('.sub_menu').stop(true).slideDown(300)
    })



    //////// 헤더 fixed ///////
    let header_height = $('.header').height();
    let tb_height = $('.top_banner').height();
    let header_o_top = $('.header').offset().top;

    
// console.log("0: " + tb_height, header_o_top)


    $(window).scroll(function(){
        // 같거나 크면 fixed

        let s_top = $(window).scrollTop();

// console.log("1: " + s_top, header_o_top)

        if(s_top >= header_o_top) {
            $('.header').css({
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 999999
            });
            // $('.header').addClass('menu_active')
            // $('.wrap').css({
            //     paddingTop: header_height
            // })
        }
        else {
            $('.header').css({
                position: 'relative',
                top: 0,
                left: 0,
                zIndex: 999999
            });
            // $('.header').removeClass('menu_active')
            // $('.wrap').css({
            //     paddingTop: 0
            // })
        }

    });
});