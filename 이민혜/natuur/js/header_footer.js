$(document).ready(function(){
////////////////////////////////////////////네비 호버시 아래 라인 가로사이즈 잡기
    let nav_li_w = []   ;
    let nav_li_count = $('.header .nav_li').length

function nav_lien_set() {
    for (let i=0; i<nav_li_count; i++  ) {
    nav_li_w[i] = $('.header .nav_li').eq(i).children('a').width()
    }
    for (let i=0; i<nav_li_count; i++  ) {
        $('.header .nav_li').eq(i).find('.menu_under_line').css({
            width: nav_li_w[i]
        })
    }
}
nav_lien_set()

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 네비 호버시 하위메뉴 펼쳐짐
let window_w = window.innerWidth; // 스크롤 포함

// 리사이즈 
    $(window).resize(function(){
        footer_top = $('.footer').offset().top - 50;
        s_bot = $(window).scrollTop() + $(window).height();
        nav_lien_set()

        window_w = window.innerWidth; // 스크롤 포함

        if (window_w > 768) { 
            $('.a_rink').attr('href', 'list.html?page_no=0'); 
            $('.nav_inner_li').css({
                transform: 'translateX(0)',
                opacity: '1'
            })

            $('.nav_inner_ul').removeClass('nav_inner_ul_active2')
            $('.nav_li').find('.nav_li_txt').addClass('nav_li_txt_atcive')
            $('.nav_inner_li').addClass('nav_li_txt_atcive')
        }

        else if (window_w <= 768) { 
            $('.a_rink').attr('href', '#'); 
            $('.nav_inner_li').css({
                transform: 'translateX(300px)',
                opacity: '0'
            })

            $('.nav_inner_ul').removeClass('nav_inner_ul_active2')
            $('.nav_li').find('.nav_li_txt').removeClass('nav_li_txt_atcive')
            $('.nav_inner_li').removeClass('nav_li_txt_atcive')
        }


        $('body').css({overflowY: 'auto'})
        // 햄판 위치 밖으로
        $('.ham_pan').css({ left: '100%' })

        // 햄판 안 x  
        $('.ham_close_line_top').removeClass('ham_close_line_top_active')
        $('.ham_close_line_btm').removeClass('ham_close_line_btm_active')
    })



    if (window_w > 768) { 
        $('.a_rink').attr('href', 'list.html?page_no=0'); 
    }
    else { 
        $('.a_rink').attr('href', '#'); 
    }
/////////////////////////////////////////////////////////

    // 큰 화면 메뉴 호버
    $('.nav_ul, .nav_menu').hover(function(){
        if (window_w > 768) {
            $('.nav_menu').addClass('nav_menu_active')
            $('.nav_inner_ul').addClass('nav_inner_ul_active')
        }
    },
    function(){
        if (window_w > 768) {
            $('.nav_menu').removeClass('nav_menu_active')
            $('.nav_inner_ul').removeClass('nav_inner_ul_active')
        }
    })

    // 작은화면 햄판 안 메뉴 클릭
    let nav_chk = [false, false, false, false, false]
    $('.nav_li').click(function() {
        if (window_w <= 768) {
            if ( nav_chk[$(this).index()] != true) {
                nav_chk = [false, false, false, false, false]
                nav_chk[$(this).index()] = true;
                $('.nav_inner_ul').removeClass('nav_inner_ul_active2')
                $(this).children('.nav_inner_ul').addClass('nav_inner_ul_active2')

                let count = $(this).find('.nav_inner_li').length;
                $('.nav_inner_li').css({
                    transform: 'translateX(300px)',
                    opacity: '0'
                })
                for (let i =0; i<count; i++) {
                    setTimeout(() => {
                        $(this).find('.nav_inner_li').eq(i).css({
                            transform: 'translateX(0)',
                            opacity: '1'
                        })
                    }, 50 * i);
                }

            }
            else  {
                nav_chk = [false, false, false, false, false]
                $('.nav_inner_ul').removeClass('nav_inner_ul_active2')
                $('.nav_inner_li').css({
                    transform: 'translateX(300px)',
                    opacity: '0'
                })
            }
        }

    })
    



////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 햄버거 버튼
// 햄버거 클릭
    $('.hamburger').click(function(){
        $('.ham_pan').css({ left: 0 })
        $('body').css({ overflowY: 'hidden' })

        // 햄판 안 x 
        $('.ham_close_line_top').addClass('ham_close_line_top_active')
        $('.ham_close_line_btm').addClass('ham_close_line_btm_active')
    });

    $('.ham_close').click(function(){
        $('.ham_pan').css({ left: '100%' })
        $('body').css({ overflowY: 'auto' })
        
        // 햄판 안 x 
        $('.ham_close_line_top').removeClass('ham_close_line_top_active')
        $('.ham_close_line_btm').removeClass('ham_close_line_btm_active')

        // 햄판 안 메뉴 
        $('.nav_inner_ul').removeClass('nav_inner_ul_active2')
        $('.nav_li').find('.nav_li_txt').removeClass('nav_li_txt_atcive')
        $('.nav_inner_li').css({
            transform: 'translateX(300px)',
            opacity: '0'
        })
    });


////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 탑버튼 
    $('.btn_top').click(function(){
        event.preventDefault()
        $('html').animate({
            scrollTop: 0
        }, 500)
    })

    //// 스크롤
    let footer_top = $('.footer').offset().top;
    let s_bot = $(window).scrollTop() + $(window).height();

        $(window).scroll(function(){
            s_bot = $(window).scrollTop() + $(window).height();
            footer_top = $('.footer').offset().top - 50;

            if (s_bot >= footer_top + 50 ) {
                $('.btn_top').css({
                    bottom: s_bot - footer_top
                })
            }

            else {
                $('.btn_top').css({
                bottom: '50px'
                })
            }

        })

////////////////////////////////////////////////////////////////////////////////
})