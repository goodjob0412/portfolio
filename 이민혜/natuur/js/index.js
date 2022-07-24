
$(document).ready(function(){
//////////////////////////////////////////// 메인배너
    let m_b_index = 1;
    let m_b_count = $('.banner').length;
    let m_b_timer = 300;

    let banner_box_w = $('.banner_box').width()
    // 배너자리 자리초기화
    $('.banner').eq(0).css({left:0})

    //  인디 삽입 및 초기화
    for(let i=1; i<= m_b_count; i++) {
        $('.indicater').append(`<div class="indi"></div>`);
    }
    $('.indi').eq(0).addClass('indi_active');

    // 배너 슬라이드 함수
    function banner_slide(c_index, c_pos, o_index, o_pos ) {
        btn_stop()
        $('.banner').css({
            transition: 'none'
        })
    // 들어올판
        $('.banner').eq(c_index).css({
            left: c_pos,
        }).animate({
            left: '0'
        }, m_b_timer)
    // 나갈판
        $('.banner').eq(o_index).animate({
            left: o_pos,
        }, m_b_timer)

    // 인디배경 변경
        $('.indi').eq(o_index).removeClass('indi_active')
        $('.indi').eq(c_index).addClass('indi_active')
    }


    // 인디케이터 클릭시 
    $('.indi').click(function(){
        if ($('.indi_active').index() < $(this).index()) { //  오른쪽
            banner_slide($(this).index(), '100%', $('.indi_active').index(), '-100%')
        }
        else if ($('.indi_active').index() > $(this).index()) { // 왼쪽 
            banner_slide($(this).index(), '-100%',$('.indi_active').index(), '100%')
        }
        m_b_index = $(this).index() + 1; 
    })

    // 자동슬라이드
    let m_b_interval ;
    function m_b_slide_auto() {

        clearInterval(m_b_interval);
        m_b_interval = setInterval(function(){
            banner_slide(m_b_index % m_b_count, '100%', (m_b_index - 1) % m_b_count, '-100%')
            m_b_index += 1;
        }, m_b_timer + 3000) 
    }
    m_b_slide_auto();

    // 호버시 인터벌 멈춤
    $('.main_banner').hover(function(){
        clearInterval(m_b_interval);
    },function(){
        m_b_slide_auto();
    });

    ///////////////////버튼 막기 슬라이드
    function btn_stop() {
        $('.indi').css({        
            pointerEvents: 'none'
        });
        setTimeout(() => {
            $('.indi').css({
            pointerEvents: 'auto'
            })
        }, m_b_timer);
        
    }

////////////////////////////////////////////////////////
    let mouse_chk = false; // 마우스가 클릭된 상태
    let mouse_banner_chk = false;  // 마우스가 배너안에서 작동

    let start_pos = 0
    let end_pos = 0

    $('.banner').mousedown(function(e){
        document.ondragstart=new Function('return false');       
        
        mouse_chk = true;
        mouse_banner_chk = true;

        start_pos= e.clientX;  

        $('.banner').css({
            transition: 'none'
        });
    })
//////////////////////////////////////////////////////////////////////////
///////////////// 드래그 하는 동안 a태그 막기 ----------------------- 
let m_move = false;
$('.banner a').click(function(){
    if(m_move) {
        event.preventDefault();
    }
})

///////////////////////////////////////////////////////////////////////////
let mouse_move;
    $('.banner').mousemove(function(e){
        if(mouse_chk) { // 클릭한 상태에서 
            m_move = true;
            end_pos = e.clientX - start_pos; 

            if (end_pos < 0) { // 오른쪽에서 들어옴
                mouse_move =  1

                $('.banner').eq((m_b_index - 1 ) % m_b_count).css({
                    left: end_pos +'px'
                })
                $('.banner').eq((m_b_index) % m_b_count).css({
                    left:  (banner_box_w + end_pos) +'px'
                })
            }

            else if (end_pos > 0) { // 왼쪽에서 들어옴
                mouse_move = -1

                $('.banner').eq((m_b_index -1 ) % m_b_count).css({
                    left: end_pos +'px'
                })
                $('.banner').eq((m_b_index - 2) % m_b_count).css({
                    left:  ( -banner_box_w + end_pos) +'px'
                })
            }

        }
    })
////////////////////////////////////////////////////////////////////////////////
    $(window).mouseup(function(e){
        if (mouse_banner_chk == true) { 
            setTimeout(() => {
                m_move = false;
            }, 10);

            mouse_banner_chk = false;
            mouse_chk = false;

            $('.banner').css({
                transition: "all 0.3s"
            });

            if (mouse_move == 1) { // 오른쪽에서 들어옴
                // 나가는판
                $('.banner').eq((m_b_index - 1) % m_b_count).css({
                    left: '-100%'
                })

                // 들어올판
                $('.banner').eq((m_b_index) % m_b_count).css({
                    left: 0 + 'px'
                })

                $('.indi').removeClass('indi_active')
                $('.indi').eq((m_b_index) % m_b_count).addClass('indi_active')
                m_b_index += 1 
            }

            else if (mouse_move == -1) { // 왼쪽에서 들어옴
                // 나가는판
                $('.banner').eq((m_b_index - 1) % m_b_count).css({
                    left: '100%'
                })
                
                // 들어올판
                $('.banner').eq((m_b_index - 2 )% m_b_count).css({
                    left: 0 + 'px'
                })

                $('.indi').removeClass('indi_active')
                $('.indi').eq((m_b_index - 2) % m_b_count).addClass('indi_active')
                m_b_index -= 1 
            }
            mouse_move = 0;

        } 
        document.ondragstart=new Function('return true');       
    })
///////////////////------------------------------//////////////////////// 터치
////////////////////////////////////////////////////////
    $('.banner').on('touchstart', function(){
        clearInterval(m_b_interval);
    mouse_chk = true;
    mouse_banner_chk = true;

    start_pos= event.touches[0].pageX;  
    $('.banner').css({
        transition: 'none'
    });
})
///////////////////////////////////////////////////////////////////////////
$('.banner').on('touchmove', function(){
    if(mouse_chk) { // 클릭한 상태에서 
        m_move = true;
        end_pos = event.touches[0].pageX - start_pos; 

        if (end_pos < 0) { // 오른쪽에서 들어옴
            mouse_move =  1

            $('.banner').eq((m_b_index - 1 ) % m_b_count).css({
                left: end_pos +'px'
            })
            $('.banner').eq((m_b_index) % m_b_count).css({
                left:  (banner_box_w + end_pos) +'px'
            })
        }

        else if (end_pos > 0) { // 왼쪽에서 들어옴
            mouse_move = -1

            $('.banner').eq((m_b_index -1 ) % m_b_count).css({
                left: end_pos +'px'
            })
            $('.banner').eq((m_b_index - 2) % m_b_count).css({
                left:  ( -banner_box_w + end_pos) +'px'
            })
        }

    }
})
////////////////////////////////////////////////////////////////////////////////
$(window).on('touchend', function(e){
    if (mouse_banner_chk == true) { 
        setTimeout(() => {
            m_move = false;
        }, 10);

        mouse_banner_chk = false;
        mouse_chk = false;

        $('.banner').css({
            transition: "all 0.3s"
        });

        if (mouse_move == 1) { // 오른쪽에서 들어옴
            // 나가는판
            $('.banner').eq((m_b_index - 1) % m_b_count).css({
                left: '-100%'
            })

            // 들어올판
            $('.banner').eq((m_b_index) % m_b_count).css({
                left: 0 + 'px'
            })

            $('.indi').removeClass('indi_active')
            $('.indi').eq((m_b_index) % m_b_count).addClass('indi_active')
            m_b_index += 1 
        }

        else if (mouse_move == -1) { // 왼쪽에서 들어옴
            // 나가는판
            $('.banner').eq((m_b_index - 1) % m_b_count).css({
                left: '100%'
            })
            
            // 들어올판
            $('.banner').eq((m_b_index - 2 )% m_b_count).css({
                left: 0 + 'px'
            })

            $('.indi').removeClass('indi_active')
            $('.indi').eq((m_b_index - 2) % m_b_count).addClass('indi_active')
            m_b_index -= 1 
        }
        mouse_move = 0;
    }
    m_b_slide_auto();
})
/////////////////----------------------------------//////////////////////////////////

//////////////////////////////////////  메인배너 스크롤 클릭시 
let menu_top = ($('.sec_menu').offset().top) - ($('.header').height());

    // if 
    $('.scroll_on_btn').click(function(){
        $('html').animate({
            scrollTop: menu_top 
        }, 300, 'linear');
    })

///////////////////////////////////////////////////////////////////////////////
let swiper_array=[];
menu_list()
function menu_list() { 
    for(let j=0; j<ITEM_LIST.length; j++) {

        let list_outer = `<div class="menu_slide menu_slide_${menu_array[j]}">
                <div class="swiper mySwiper_${j}">
                    <div class="swiper-wrapper"></div>
                    </div>
                </div>
            </div>`;
        $(`.menu_slide_box`).append(list_outer)

        for (let i=0; i<ITEM_LIST[j].length; i++) {
    

            let jpg = ITEM_LIST[j][i].src.split(', ')
            let color = ITEM_LIST[j][i].color.split(", ")

            let list =`<div class="swiper-slide sec_menu_li">
                            <a href="item.html?page_no=${j}&item_no=${i}">
                                <div class="img_box" style="background:${color[0]}">
                                    <p class="menu_title">${ITEM_LIST[j][i].title}</p>

                                    <img src="img/item/${menu_array[j]}/${jpg[0]}" alt="" class="menu_name_img">

                                    <img src="img/item/${menu_array[j]}/${jpg[1]}" alt="" class="menu_item_img"></img>
                                    <img src="img/item/${menu_array[j]}/${jpg[2]}" alt="" class="item_img_tag" style="background:${color[1]}">
                                </div>
                            </a>
                        </div>`

            $(`.menu_slide_${menu_array[j]} > .mySwiper_${j} > .swiper-wrapper`).append(list)

        }

        
        swiper_array[j] = new Swiper(`.mySwiper_${j}`, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            freeMode: {
                momentumRatio: 0.3,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 1000,
            },
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            
        }); 

        document.getElementsByClassName(`mySwiper_${j}`)[0].addEventListener('mouseenter', function(){
            swiper_array[j].autoplay.stop();
        })
        document.getElementsByClassName(`mySwiper_${j}`)[0].addEventListener('mouseleave', function(){
            swiper_array[j].autoplay.start();
        }) 
        document.getElementsByClassName(`mySwiper_${j}`)[0].addEventListener('touchend', function(){
            swiper_array[j].autoplay.start();
        }) 

    }
}

///////////////////////////////////////////////////////////// 슬라이드 
////////////////////////////////////////////////////  메뉴 
//  메뉴 클릭시 하위메뉴 변경 및 메뉴 색 변경
    $('.menu_list_li').click(function(){
        $('.menu_slide').css({
            display: 'none'
        })
        $('.menu_slide').eq($(this).index()).css({
            display: 'block'
        })

        // // 메뉴 오토 슬라이드 다시 돌리기
            for(let i=0; i<swiper_array.length; i++) {
                swiper_array[i].autoplay.stop();
            }
            swiper_array[$(this).index()].autoplay.start();


        $('.menu_under_line1').removeClass('menu_under_line1_active')
        $(this).children('.menu_under_line1').addClass('menu_under_line1_active')

        $('.menu_list_li').removeClass('menu_list_li_active')
        $(this).addClass('menu_list_li_active')

    })


////////////////////////////////////////////////////  sns 자동 스크롤

let sns_interval ;
let sns_index = 0;
let sns_count = $('.sns_list_li').length;
let sns_width = $('.sns_list_li').outerWidth() + 10;

    for (let i=0; i<sns_count; i++) {
        $('.sns_list_li').eq(i).css({
            left: sns_width * i
        })
    }

function sns_slide_auto() {
    clearInterval(sns_interval);
    sns_interval = setInterval(function(){

        $('.sns_list_li').animate({
            left: '-='+ sns_width
        }, 500)
        
        $('.sns_list_li').eq(sns_index % sns_count).animate({
            left: sns_width * (sns_count - 1)
        }, 0)
        sns_index += 1;
    }, 2000) 
}

let window_w = $(window).width()
    if (window_w < 768) {
        sns_slide_auto()
    }


////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 스크롤 
let s_bot = $(window).scrollTop() + $(window).height();

// menu 
let meue_box = $('.meue_box').offset().top - 50;
let menu_slide_box =  $('.menu_slide_box').offset().top ;
let menu_chk = true;

let swiper_li_ice = $('.menu_slide_ice_cream .swiper-slide')  /// 각각 색션마다 
let swiper_li_des = $('.menu_slide_dessert .swiper-slide')
let swiper_li_dri = $('.menu_slide_drink .swiper-slide')
let swiper_li_cof = $('.menu_slide_coffee .swiper-slide')
let swiper_chk = true;
let swiper_chk2 = true;


function swiper_left_up (length, el) {
    for(let i=0; i< length; i++) {
        setTimeout(() => {
            el.eq(i).css({transition: 'all 0.3s', transform: 'translateY(0px)'})

            setTimeout(() => {
                el.eq(i).css({transition: 'none'})
            }, 100 * i);

        }, 100 * i);
    }
}

function swiper_left_down (length, el) {
    for(let i=length; i> 0; --i) {
        setTimeout(() => {
            el.eq(i).css({transition: 'all 0.3s', transform: 'translateY(100px)'})

            setTimeout(() => {
                el.eq(i).css({transition: 'none'})
            }, 100 * i);

        }, 100 * (8 - i));
    }
}

function swiper_right_up (length, el) {
    for(let i=0; i< length; i++) {
        setTimeout(() => {
            el.eq(i).css({transition: 'all 0.3s', transform: 'translateY(-50px)'})

            setTimeout(() => {
                el.eq(i).css({transition: 'none'})
            }, 100 * i);
            
        }, 100 * (8 - i));
    }
}

function swiper_right_down (length, el) {
    for(let i=length; i> 0; --i) {
        setTimeout(() => {
            el.eq(i).css({transition: 'all 0.3s', transform: 'translateY(0)'})

            setTimeout(() => {
                el.eq(i).css({transition: 'none'})
            }, 100 * i);

        }, 100 * i);
    }
}


// 뉴 
let new_top = $('.new_sec').offset().top;
let new_chk = true;

// 매장
let store_top = $('.store_sec').offset().top;
let store_chk = true;

// 브랜드 
let brand_top = $('.brand_story_sec').offset().top;
let brand_chk = true;

// 공지
let notice_top = $('.notice_sec').offset().top;
let notice_chk = true;

// sns
let sns_top = $('.sns_sec').offset().top;
let sns_chk = true;




//메뉴 타이틀 초기에 올라오게
$('.meue_box').css({transform: 'translateY(0px)'})


////////////////// 스크롤 
    $(window).scroll(function(){
        s_bot = $(window).scrollTop() + $(window).height();
        // 뉴 
        new_top = $('.new_sec').offset().top;

        // 매장
        store_top = $('.store_sec').offset().top;

        // 브랜드 
        brand_top = $('.brand_story_sec').offset().top;

        // 공지
        notice_top = $('.notice_sec').offset().top;

        // sns
        sns_top = $('.sns_sec').offset().top;

//메뉴 타이틀 
        if (meue_box + 100 <= s_bot && menu_chk) {
            menu_chk = false;
            $('.meue_box').css({transform: 'translateY(0px)'})
        }
        else if(meue_box + 100 >= s_bot && !menu_chk) {
            menu_chk = true;
            $('.meue_box').css({transform: 'translateY(100px)'})
        }

// 메뉴 슬라이드 리스트 
        if (menu_slide_box + 300 <= s_bot && swiper_chk) {
            swiper_chk = false;
            swiper_left_up(swiper_li_ice.length, swiper_li_ice)
            swiper_left_up(swiper_li_des.length, swiper_li_des)
            swiper_left_up(swiper_li_dri.length, swiper_li_dri)
            swiper_left_up(swiper_li_cof.length, swiper_li_cof)
        }

        else if (menu_slide_box + 300 >= s_bot && !swiper_chk) {
            swiper_chk = true;
            swiper_left_down(swiper_li_ice.length, swiper_li_ice)
            swiper_left_down(swiper_li_des.length, swiper_li_des)
            swiper_left_down(swiper_li_dri.length, swiper_li_dri)
            swiper_left_down(swiper_li_cof.length, swiper_li_cof)
        }
        
        if (menu_slide_box + 1000 <= s_bot && swiper_chk2) {
            swiper_chk2 = false;
            swiper_right_up(swiper_li_ice.length, swiper_li_ice)
            swiper_right_up(swiper_li_des.length, swiper_li_des)
            swiper_right_up(swiper_li_dri.length, swiper_li_dri)
            swiper_right_up(swiper_li_cof.length, swiper_li_cof)
        }
        else if (menu_slide_box + 1000 >= s_bot && !swiper_chk2) {
            swiper_chk2 = true;
            swiper_right_down(swiper_li_ice.length, swiper_li_ice)
            swiper_right_down(swiper_li_des.length, swiper_li_des)
            swiper_right_down(swiper_li_dri.length, swiper_li_dri)
            swiper_right_down(swiper_li_cof.length, swiper_li_cof)
        }

// 신메뉴
        if (new_top + 300 <= s_bot && new_chk) {
            new_chk = false;
            $('.new_area').css({transform: 'translateY(0px)'})
        }
        else if(new_top + 300 >= s_bot && !new_chk) {
            new_chk = true;
            $('.new_area').css({transform: 'translateY(100px)'})
        }

// 매장 
        if (store_top + 400 <= s_bot && store_chk) {
            store_chk = false;
            $('.store_place_line').css({width: '100%'})
            $('.store_address').css({opacity: '1', transitionDelay: '0.5s'})
            $('.store_app').css({
                transform: 'translateY(0)',
                opacity: '1',
                transitionDelay: '0.5s'
            })
        }

        else if(store_top + 400 >= s_bot && !store_chk) {
            store_chk = true;
            $('.store_place_line').css({width: '0'})
            $('.store_address').css({opacity: '0', transitionDelay: '0'})
            $('.store_app').css({
                transform: 'translateY(50px)',
                opacity: '0', transitionDelay: '0'
            })
        }

// 신메뉴
        if (brand_top + 300 <= s_bot && brand_chk) {
            brand_chk = false;
            $('.brand_txt').css({transform: 'translateY(0px)'})
            $('.brand_img').css({left: '0'})
        }

        else if(brand_top + 300 >= s_bot && !brand_chk) {
            brand_chk = true;
            $('.brand_txt').css({transform: 'translateY(100px)'})
            $('.brand_img').css({left: '-100%'})
        }

// 공지
        if (notice_top + 200 <= s_bot && notice_chk) {
            notice_chk = false;
            $('.notice_bg_box').css({transform: 'translateY(0px)'})
            $('.notice_box').css({transform: 'translate(-50%, -50%)'})
            $('.notice_bg_inner_box').css({right: '0'})
        }

        else if(notice_top + 200 >= s_bot && !notice_chk) {
            notice_chk = true;
            $('.notice_bg_box').css({transform: 'translateY(50px)'})
            $('.notice_box').css({transform: 'translate(-50%, -30%)'})
            $('.notice_bg_inner_box').css({right: '-100%'})
        }

// sns
        if (sns_top + 200 <= s_bot && sns_chk) {
            sns_chk = false;
            $('.sns_area').css({transform: 'translateY(0px)'})
        }
        
        else if(sns_top + 200 >= s_bot && !sns_chk) {
            sns_chk = true;
            $('.sns_area').css({transform: 'translateY(100px)'})
        }
    });

////////////////////////////////////////////////////////////////////////////////
    $(window).resize(function(){
        window_w = $(window).width()

        if (window_w < 768) {
            setTimeout(() => {
                sns_slide_auto()
            }, 50);
        }
        else if (window_w >= 768) {
            clearInterval(sns_interval);
        }

        menu_top = ($('.sec_menu').offset().top) - ($('.header').height());

        s_bot = $(window).scrollTop() + $(window).height();
        // 뉴 
        new_top = $('.new_sec').offset().top;
        
        // 매장
        store_top = $('.store_sec').offset().top;
        
        // 브랜드 
        brand_top = $('.brand_story_sec').offset().top;
        
        // 공지
        notice_top = $('.notice_sec').offset().top;
        
        // sns
        sns_top = $('.sns_sec').offset().top;
        sns_width = $('.sns_list_li').outerWidth() + 10;


    })
////////////////////////////////////////////////////////////////////////////////
});