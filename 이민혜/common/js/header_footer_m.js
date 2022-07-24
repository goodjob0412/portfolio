document.oncontextmenu=new Function('return false');   
document.ondragstart=new Function('return false');       
document.onselectstart=new Function('return false');  


$(document).ready(function(){
//////////////////////////////////////////////  탑배너
// 슬라이드
    $('.top_banner_txt').eq(0).css({
        top: 0
    })
    let t_b_index = 1;
    let count = $('.top_banner_txt').length;
    let t_b_timer = 1500;

    setInterval(() => {
        $('.top_banner_txt').eq(t_b_index % count).css({
            top: '100%'
        }).animate({
            top: 0
        }, t_b_timer)

        $('.top_banner_txt').eq((t_b_index - 1) % count).animate({
            top: '-100%'
        }, t_b_timer)

        t_b_index += 1;
    }, t_b_timer + 500);

// close 클릭
    $('.top_banner_close').click(function(){
        $('.top_banner').css({
            display: 'none'
        })
        h_top = $('.header').offset().top; 
    });


///////////////////////////////////////////////////////////////////////////// 헴버거

    $('.hamburger').click(function(){
        $('.ham_pan').addClass('ham_pan_active')
        $('.ham_menu').addClass('ham_menu_active')
        $('.ham_close').css({display:'block'})
    })

    $('.ham_close').click(function(){
        $('.ham_pan').removeClass('ham_pan_active')
        $('.ham_menu').removeClass('ham_menu_active')
        $('.ham_close').css({display:'none'})

    })

// 안에 메뉴 클릭
    let slide_btn_chk = [false, false, false, false, false]
    $('.h_add_sub_btn').click(function(){

        if(slide_btn_chk[$(this).parent().index()] != true) { 
            slide_btn_chk = [false, false, false, false, false]
            slide_btn_chk[$(this).parent().index()] = true; 
            $('.menu_box').slideUp(100)
            $(this).parent('.nav_li').find('.menu_box').slideDown(100);

            $('.h_add_sub_btn').removeClass('h_add_sub_btn_active')
            $(this).addClass('h_add_sub_btn_active')
        }
        
        else  {
            slide_btn_chk = [false, false, false, false, false]
            $('.menu_box').slideUp(100)

            $('.h_add_sub_btn').removeClass('h_add_sub_btn_active')
        }

    })

// close 버튼 
    if ($(window).width() < 360) {
        $('.ham_close').css({
            left: 'calc(100% - 40px)',

            top: 0,
        })
    }


/////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////// 스크롤 
    let h_top = $('.header').offset().top; 
    let window_h= $(window).height() 
    $(window).scroll(function(){
    // 네비 따라다니기
        let s_top = $(window).scrollTop(); 
        if (s_top >= h_top) {
            $('.header').addClass('header_move');

            $('.wrap').css({
                paddingTop: $('.header').height()
            })
        } 
        else {
            $('.header').removeClass('header_move');
            
            $('.wrap').css({
                paddingTop: 0
            })
        }



    // 탑버튼 나오기 
        if (s_top >= window_h -70) {
            $('.top_btn').css({
                display: 'block'
            })
        } 
        else {
            $('.top_btn').css({
                display: 'none'
            })
        }

    });

///////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////// 탑버튼 부드럽게 올라가기
    
    $('.top_btn').click(function(){
        event.preventDefault()
        $('html').animate({
            scrollTop: 0
        }, 500)
    })



///////////////////////////////////////////////////////////////////////////// 

});