document.oncontextmenu=new Function('return false');   // 우클릭
document.ondragstart=new Function('return false');     // 드래그 
document.onselectstart=new Function('return false');  // 블럭선택 (더블클릭)

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
        h_top = $('.header_bottom').offset().top;
    });

///////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////// 네비
    $('.nav_li, .menu').hover(function(){
        $('.menu').addClass('menu_active');

        if (!$(this).hasClass('menu')) {
            $('.menu_li').removeClass('menu_li_active');
            $('.menu_li').eq($(this).index()).addClass('menu_li_active');
        }

    },
    function(){
        $('.menu').removeClass('menu_active')
    });
///////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////  메뉴 안 쪽 라인 맞추기 
    let menu_left = []
    setTimeout(() => {
        for(let i=0; i<$('.nav_li').length; i++) {
            menu_left[i] = $('.nav_li').eq(i).position().left;
        }
        
        let padding=20;
        for(let i=0; i<$('.nav_li').length; i++) {
            if(i==1) {
                padding=0
            }
            else {
                padding=20;
            }
            $('.menu_li').eq(i).css({
                left : menu_left[i] + padding
            })
        }
    }, 600);


///////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////// 스크롤 
    let h_top = $('.header_bottom').offset().top; 
    let window_h= $(window).height() 
    $(window).scroll(function(){
    // 네비 따라다니기
        let s_top = $(window).scrollTop(); 
        if (s_top >= h_top) {
            $('.header_bottom').addClass('header_bottom_move');

            $('.wrap').css({
                paddingTop: $('.header_bottom').height()
            })
        } 
        else {
            $('.header_bottom').removeClass('header_bottom_move');
            
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