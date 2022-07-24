$(document).ready(function(){
// //////////메뉴//////////
    $('.menu_sec').click(function(){

        // 같은거 누르면 판 들어가게 하기
        if($(this).hasClass('menu_sec_active')) {
            // 판 들어가기
            $('.pan').removeClass('pan_active');

            // 메뉴의 글씨 색 초기화
            $('.menu_sec').removeClass('menu_sec_active');
        }
        else {
            // 메뉴 글씨 색 변경
            $('.menu_sec').removeClass('menu_sec_active');
            $('.menu_sec').eq($(this).index()).addClass('menu_sec_active');
            // $('.menu_sec').eq($(this).index()-1).addClass('menu_sec_active');
            //-1해준건 0번방에 아무것도 없어서 다음방을 잡기땜에 빼준거


            // 판 나타나기
            $('.pan').addClass('pan_active')
            
            // 판 안의 ul 나타나기
            $('.pan > ul').css({
                display: 'none'
            })
            $('.pan > ul').eq($(this).index()).css({
                display: 'block'
            })
        }

    })



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

    // $('.ham_menu_sec').click(function(){

    //     $('.ham_sub_menu').slideUp(300)
    //     $(this).next('.ham_sub_menu').stop(true).slideDown(300)

    // })
})