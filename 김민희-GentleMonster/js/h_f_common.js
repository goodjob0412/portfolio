$(document).ready(function () {

    //탑배너
    $('.tb_item').eq(0).css({ left: 0 });

    let tb_idx = 0;
    let tb_count = $('.tb_item').length;
    let tb_timer = 1000;


    // 시간마다 탑배너 돌아가게
    setInterval(function () {
        // 나갈판
        $('.tb_item').eq(tb_idx % tb_count).animate({
            left: '-100%'
        }, tb_timer)

        // 들어올판
        $('.tb_item').eq((tb_idx + 1) % tb_count).css({
            left: '100%'
        }).animate({
            left: '0'
        }, tb_timer)
        tb_idx += 1;
    }, tb_timer + 2000);


    // top버튼 footer만나면 검은색으로 색깔 변경
    $(window).scroll(function () {
        let s_top;
        let top_bot;
        let f_top;
        s_top = $(window).scrollTop();
        top_bot = ($('.top_btn').offset().top) + ($('.top_btn').height())
        f_top = $('.footer_container').offset().top

        if (top_bot >= f_top) {
            $('.top_btn').addClass('ch_black');
        }
        else {
            $('.top_btn').removeClass('ch_black');
        }

    })


    // 탑버튼 누르면 위로 올라가게
    $('.top_btn').click(function () {
        //큰 화면 일때
        let o_top = $('#wrap').offset().top
        //반응형일때
        /* let s_o_top = $('.main_container').offset().top */

        //큰 화면 일때
        $('html, body').animate({
            scrollTop: o_top
        }, 500)
        //반응형일때
        /* $('html, body').animate({
            scrollTop: s_o_top
        }, 500) */
    })


    // sub_nav 슬라이드
    $('.h_nav_li').hover(function () {

        if ($(this).index() < 2) {

            // $('.sub_nav_box').slideDown(300);
            $('.sub_nav_box').stop().slideDown(300);


            // $('.sub_nav_box').stop().slideDown(300);

            $('.sub_nav').css({ display: 'none' })
            $('.sub_nav').eq($(this).index()).css({
                display: 'block'
            })
        }
    }, function () {
        $('.sub_nav_box').stop().slideUp(300);
        // $('.sub_nav_box').stop().slideUp(300);
    })

    $('.sub_nav_box').hover(function () {

        $('.sub_nav_box').stop().slideDown(300);

        // $('.sub_nav_box').stop().show()

    }, function () {
        $('.sub_nav_box').stop().slideUp(300)
        // $('.sub_nav_box').stop().slideUp(300)
    })



    // 햄버거 버튼 클릭하면 판 나오도록
    let chk = false;
    $('.btn_ham').click(function () {
        //버튼 막기
        $('.btn_ham').css({ pointerEvents: 'none' })
        setTimeout(function () {
            $('.btn_ham').css({ pointerEvents: 'auto' })
        }, 500)
        //버튼 눌렀을 때 동작
        if (chk) {
            $('.ham_pan').animate({
                right: '-300px'
            }, 500)

            // 버튼 원래대로 하기
            $('.line_top').removeClass('rotate45')
            setTimeout(function () {
                $('.line_top').removeClass('mid_setting')
            }, 500)

            $('.line_mid').delay(100).animate({
                opacity: 1
            }, 0)
            $('.line_bot').removeClass('rotate_45')
            setTimeout(function () {
                $('.line_bot').removeClass('mid_setting')
            }, 500)
        }
        else {
            $('.ham_pan').animate({
                right: 0
            }, 500)

            // 버튼 X로 하기
            $('.line_top').addClass('mid_setting')
            setTimeout(function () {
                $('.line_top').addClass('rotate45')
            }, 500)

            $('.line_mid').delay(500).animate({
                opacity: 0
            }, 0)

            $('.line_bot').addClass('mid_setting')
            setTimeout(function () {
                $('.line_bot').addClass('rotate_45')
            }, 500)

        }
        chk = !chk;
    })
    
    

    //푸터(반응형) 고객서비스,법적고지,소셜미디어 클릭하면 열고, 닫기
    toggleContent();
    //화면 사이즈 바뀔때마다 함수 실행
    $(window).resize(function () {
        toggleContent();
        ham_pan_resize();
    });
    //768px 이하 토글 함수 실행해서 열고닫기 , 그 외 실행X 
    function toggleContent() {
        if (window.innerWidth <= 768) {
            $('.footer_sec_title').off('click')
            $('.footer_group').hide()
            $('.footer_sec_title').click(function (e) {
                $(this).next('.footer_group').stop().slideToggle();
            })
        }
        else {
            $('.footer_sec_title').off('click')
            $('.footer_group').show()
        }
    }

    //화면 사이즈 바뀔때마다 1024이상이면 사이드메뉴판 안보이게
    function ham_pan_resize() {
        if (window.innerWidth >= 1024) {
            $('.ham_pan').css('right', '-300px')
            //사이즈 작아지면 무조건 햄버거버튼 나오게
            $('.line_top').removeClass('rotate45')
            setTimeout(function () {
                $('.line_top').removeClass('mid_setting')
            }, 500)
            $('.line_mid').delay(500).animate({
                opacity: 1
            }, 0)
            $('.line_bot').removeClass('rotate_45')
            setTimeout(function () {
                $('.line_bot').removeClass('mid_setting')
            }, 500)
        }
    }



})