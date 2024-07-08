/////////////////메인베너/////////////////////
$('.banner').eq(0).css({ left: 0 })

let bn_length = $('.banner').length

for (let i = 0; i < bn_length; i++) {
    $('.indi').append(`<div class="circle"></div>`)
}
$('.circle').eq(0).addClass('circle_active')

let bang = 0;
let timer = 1000;

$('#btn_L').click(function () {
    btn_slide('100%', (bang - 1) % bn_length, '-100%')
})
$('#btn_R').click(function () {
    btn_slide('-100%', (bang + 1) % bn_length, '100%')
})

function btn_slide(o_pos, c_bang, c_pos) {
    // 버튼막기
    $('.btn_slide').css({ pointerEvents: 'none' })
    setTimeout(function () {
        $('.btn_slide').css({ pointerEvents: 'auto' })
    }, timer)
    // 인디케이터 색 변경
    $('.circle').removeClass('circle_active')
    $('.circle').eq(c_bang).addClass('circle_active')

    // 들어올 배너
    $('.banner').eq(bang % bn_length).animate({
        left: o_pos
    }, timer, 'linear')
    // 나갈 배너
    $('.banner').eq(c_bang).css({
        left: c_pos
    }).animate({
        left: 0
    }, timer, 'linear')
    bang = c_bang
}
// 자동
let auto_interval;
function auto_slide() {
    // 버튼막기
    $('.btn_slide').css({pointerEvents:'none'})
    setTimeout(function(){
        $('.btn_slide').css({pointerEvents:'auto'})
    },timer)

    auto_interval = setInterval(function () {
        $('#btn_R').trigger('click')
    }, timer + 2000)

}
auto_slide();

// 자동 막기
$('.main_banner').hover(function () {
    clearInterval(auto_interval)
}, function () {
    auto_slide()
})

// circle 클릭
$(document).on('click', '.circle', function () {

    $('.circle').css({pointerEvents:'none'})
    setTimeout(function(){
        $('.circle').css({pointerEvents:'auto'})
    },timer)

    if ($('.circle_active').index() < $(this).index()) {
        btn_slide('-100%', $(this).index(), '100%')
    }
    else if ($('.circle_active').index() > $(this).index()) {
        btn_slide('100%', $(this).index(), '-100%')
    }
})

// slide down
let sd_t = $('.slide_down').offset().top
$('.slide_down').click(function () {
    event.preventDefault()

    $('html, body').animate({
        scrollTop: sd_t
    }, 1000)
})

///////////////////////sec1 menu/////////////////////////

//메뉴
let sec_nav_li = document.getElementsByClassName('sec_nav_li')
let sec_nav_li_after = document.getElementsByClassName('sec_nav_li::after')
for (let i = 0; i < sec_nav_li.length; i++) {
    sec_nav_li[i].addEventListener('click', function () {
        for (let j = 0; j < sec_nav_li.length; j++) {
            sec_nav_li[j].classList.remove('clicked', 'li_color')
        }
        this.classList.add('clicked', 'li_color')
    })
}

//스크롤 이벤트
let s_top_chk = true;
$(window).scroll(function () {
    let s_top = $(document).scrollTop();
    let sec1_t = $('.sec1').offset().top;

    if (s_top_chk && s_top +300 >= sec1_t) {
        s_top_chk = false;
        box_slideUp($('.box'));
    }
    else if (!s_top_chk && s_top +300 < sec1_t) {
        s_top_chk = true;
        box_slidedown($('.box'));
    }
});

function box_slideUp(el) {
    for (let i = 0; i < el.length; i++) {
        setTimeout(function () {
            el.eq(i).addClass('box_active_50');
        }, 100 * i);
    }
}

function box_slidedown(el) {
    for (let i = 0; i < el.length; i++) {
        setTimeout(function () {
            el.eq(i).removeClass('box_active_50');
        }, 100 * (el.length - i));
    }
}



///////////////////////sec2 new////////////////////

// 링
let new_ring = document.getElementsByClassName('new_ring')[0];
let angle = 0;

///스크롤
$(window).scroll(function () {
    let s_top = $(document).scrollTop();
    let sec2_t = $('.sec2').offset().top;
    if((window).innerWidth > 480 ) {
        if (s_top +300 > sec2_t) {
            $('.sec_body_L, .new_img').css({
                transform: 'translateY(0)'
            });
        } else if (s_top +300 <= sec2_t) {
            $('.sec_body_L, .new_img').css({
                transform: 'translateY(220px)'
            });
        }
    }
});

///////////////sec3////////////////
$(window).scroll(function () {
    let s_top = $(document).scrollTop();
    let sec3_t = $('.sec3').offset().top;

        if (s_top +300 > sec3_t) {
            $('.egg_img').css({
                right: '-3%'
            });
            $('.bar_line').css({
                width: '380px'
            })
    
        } else if (s_top +300 <= sec3_t) {
            $('.egg_img').css({
                right: '-100%'
            });
            $('.bar_line').css({
                width: '0'
            })
        }

});


//////////////////////sec4////////////////////////////
$(window).scroll(function () {
    let s_top = $(document).scrollTop();
    let sec4_t = $('.sec4').offset().top;

    if (s_top +300 > sec4_t) {
        $('.makes_img').css({
            left: '-13%'
        });

    } else if (s_top +300 <= sec4_t) {
        $('.makes_img').css({
            left: '-100%'
        });
    }
});

//////////////////sec5///////////////////////

$(window).scroll(function () {
    let s_top = $(document).scrollTop();
    let sec5_t = $('.sec5').offset().top;

    if (s_top +300 > sec5_t) {
        $('.sky').css({
            right: '-12%'
        });

    } else if (s_top +300 <= sec5_t) {
        $('.sky').css({
            right: '-100%'
        });
    }
});

////////////////sec6//////////////////
let sec_body = document.getElementsByClassName('sec6_body_inner')[0]
for (let i = 0; i < 10; i++) {
    // if($(window).innerWidth() > 480) {
        sec_body.innerHTML += `<div class="f_box${i} f_box"></div>`
    // }
    // else if ($(window).innerWidth() <= 480) {
        sec_body.innerHTML += `<div class="f_box${i} f_box_2 swiper-slide swiper-slide2"></div>`
    // }
}

// Swiper2 초기화
// if($(window).innerWidth <= 480 ) {
    var swiper2 = new Swiper (".mySwiper2", {
        slidesPerView: 3, // 한번에 보여줄 칸수
        spaceBetween: 3, // 칸 사이사이마다의 여백
        slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            type: 'bullets', //'progressbar' | 'bullets' | 'fraction' | 'custom'
        },
        // autoplay: {
        //     delay: 1000, // setInterval 같은거
        // },
        // speed: 1000, // 들어올때까지 걸리는 시간
        // centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    });
// }




$(window).scroll(function () {
    let s_top = $(document).scrollTop();
    let sec6_t = $('.sec6').offset().top;

    if((window).innerWidth > 480 ) {
        if (s_top +300 > sec6_t) {
            $('.sec6 .contents_area1700').css({
                transform: 'translateY(0)'
            });

        } else if (s_top +300 <= sec6_t) {
            $('.sec6 .contents_area1700').css({
                transform: 'translateY(80px)'
            });
        }
    }

});


////탑버튼////

$('.top_btn').click(function () {
    event.preventDefault()

    $('html, body').animate({
        scrollTop: 0
    }, 1000)
})

let delivery_bot = $('.delivery').offset().top + $('.delivery').height();
$(window).scroll(function () {
    let footer = $('.footer').offset().top;
    let s_bot = $(window).scrollTop() + $(window).height() ;

    if (footer > s_bot) {
        console.log(11)
        // $('.footer').css({
        //     position: 'static'
        // });
        $('.delivery').css({
            position: 'fixed',
            bottom: '12%',
            // bottom: 0,
            left: '50%'
        });
    } 
    else if((footer <= s_bot)) {
        console.log(22)
    //     $('.footer').css({
    //         position: 'relative'
    //     });
        $('.delivery').css({
            position: 'absolute',
            // bottom: 430 + 150,//'128%',
            bottom: '545px',
            left: '50%'
        });
    }
});




