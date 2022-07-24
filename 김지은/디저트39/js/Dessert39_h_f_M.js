$(document).ready(function(){

// 햄버거 누르면 액션
    let chk = true; 
    let timer = 0.3;
    $('.line').css({transition: `all ${timer}s`})
    $('.btn_ham').click(function(){
        // X만들기
        if(chk) {
            tmp('#line_top', 'translateY(10px)', 'translateY(10px) rotate(45deg)', timer * 1000) 
            tmp('#line_mid', '0', 'scale(0)', timer * 1000) 
            tmp('#line_bot', 'translateY(-10px)', 'translateY(-10px) rotate(-45deg)', timer * 1000) 
        }

        // 햄버거 만들기
        else {  
            tmp('#line_top', 'translateY(10px) rotate(0)', 'translateY(0)', timer * 1000) 
            tmp('#line_mid', '0', 'scale(1)', timer / 2 * 1000)  
            tmp('#line_bot', 'translateY(-10px) rotate(0)', 'translateY(0)', timer * 1000) 
        }
    
        chk = !chk;
        $('.pan').toggleClass('pan_active');
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


    // 메뉴클릭시 밑에 내려오기
    $('.menu_font').click(function(){

        // $(this).next('.sub_menu').stop().slideDown(300);
        // $('.sub_menu').stop().slideUp(300);

        // $('.sub_menu').removeClass('sub_menu_active')
        // $(this).next('.sub_menu').toggleClass('sub_menu_active')

        $('.sub_menu').slideUp(300)
        $(this).next('.sub_menu').stop(true).slideDown(300)

    })
});