$(document).ready(function (){

    // -----------nav

    $('.nav_item').hover(function () {
        $('.pan').stop().slideDown(300)
        $(`.h_com`).css({
            backgroundColor: `#fff`,
            color: `#000`
        })
        $(`.serch_img`).css({
            background: `url(./img/main/icon-header-search__black.png) no-repeat center / cover`
        })
        $(`.h_signin`).css({
            background: `url(./img/main/icon-header-signin__black.png) no-repeat center / cover`
        })
        $(`.h_account`).css({
            background: `url(./img/main/icon-header-account__black.png) no-repeat center / cover`
        })
        $(`.h_heart`).css({
            background: `url(./img/main/icon-header-heart__black.png) no-repeat center / cover`
        })
        $(`.h_bag`).css({
            background: `url(./img/main/icon-header-bag__black.png) no-repeat center / cover`
        })
        
        $('.pan_item').css({ display: 'none' })
        $('.pan_item').eq($(this).index()).css({
            display: 'flex'
        })
    }, function () {
        $('.pan').stop().slideUp(300)
        $(`.h_com`).css({
            backgroundColor: `#000`,
            color: `#fff`
        })
        $(`.serch_img`).css({
            background: `url(./img/main/icon-header-search__white.png) no-repeat center / cover`
        })
        $(`.h_signin`).css({
            background: `url(./img/main/icon-header-signin__white.png) no-repeat center / cover`
        })
        $(`.h_account`).css({
            background: `url(./img/main/icon-header-account__white.png) no-repeat center / cover`
        })
        $(`.h_heart`).css({
            background: `url(./img/main/icon-header-heart__white.png) no-repeat center / cover`
        })
        $(`.h_bag`).css({
            background: `url(./img/main/icon-header-bag__white.png) no-repeat center / cover`
        })
    })

    $('.pan').hover(function () {
        $('.pan').stop().slideDown(300)
        $(`.h_com`).css({
            backgroundColor: `#fff`,
            color: `#000`
        })
        $(`.serch_img`).css({
            background: `url(./img/main/icon-header-search__black.png) no-repeat center / cover`
        })
        $(`.h_signin`).css({
            background: `url(./img/main/icon-header-signin__black.png) no-repeat center / cover`
        })
        $(`.h_account`).css({
            background: `url(./img/main/icon-header-account__black.png) no-repeat center / cover`
        })
        $(`.h_heart`).css({
            background: `url(./img/main/icon-header-heart__black.png) no-repeat center / cover`
        })
        $(`.h_bag`).css({
            background: `url(./img/main/icon-header-bag__black.png) no-repeat center / cover`
        })
    }, function () {
        $('.pan').stop().slideUp(300)
        $(`.h_com`).css({
            backgroundColor: `#000`,
            color: `#fff`
        })
        $(`.serch_img`).css({
            background: `url(./img/main/icon-header-search__white.png) no-repeat center / cover`
        })
        $(`.h_signin`).css({
            background: `url(./img/main/icon-header-signin__white.png) no-repeat center / cover`
        })
        $(`.h_account`).css({
            background: `url(./img/main/icon-header-account__white.png) no-repeat center / cover`
        })
        $(`.h_heart`).css({
            background: `url(./img/main/icon-header-heart__white.png) no-repeat center / cover`
        })
        $(`.h_bag`).css({
            background: `url(./img/main/icon-header-bag__white.png) no-repeat center / cover`
        })
    })

    $(`.h_top_menu_box .serch_box .serch_img`).click(function(){
        event.preventDefault();

        let chk = true
        
        if(chk){
            $(`.h_top_menu_box .serch_box input`).fadeIn(300)
            chk = false
        }
        else if(!chk){
            $(`.h_top_menu_box .serch_box input`).fadeOut(300)
        }
    })

        // -----------scroll(header)

    let h_bot_o_top = $('.h_bot').offset().top;
    let h_bot_h = $('.h_bot').height();

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();

        if (h_bot_o_top <= s_top) {
            $('.h_bot').addClass('nav_active')
            $('.pan').css({
                position: 'fixed',
                top: (h_bot_h),
                left: 0
            })
            $('.main_banner').css({
                marginTop: (h_bot_h)
            })
        }
        else {
            $('.h_bot').removeClass('nav_active')
            $('.pan').css({
                position: 'absolute',
                top: 'auto',
                left: '0'
            })
            $('.main_banner').css({
                marginTop: 0,
            })
        }
    })

// -----------float_button

    $(`.float_top_button`).click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        
        if(s_top == 0){
            $(`.float_top_button`).fadeOut(300)
        }
        else{
            $(`.float_top_button`).fadeIn(300)
        }
    })
})

//-----------ITEM_LIST

const ITEM_LIST = [
    [
        {item_no: 0, src: '0.jpg', banner: `mb_0.jpg`}, 
        {item_no: 1, src: '1.jpg', banner: `mb_1.jpg`}, 
        {item_no: 2, src: '2.jpg', banner: `mb_2.jpg`}, 
        {item_no: 3, src: '3.jpg', banner: `mb_3.jpg`}, 
        {item_no: 4, src: '4.jpg', banner: `mb_4.jpg`}, 
        {item_no: 5, src: '5.jpg', banner: `mb_5.jpg`}, 
        {item_no: 6, src: '6.jpg', banner: `mb_6.jpg`}, 
        {item_no: 7, src: '7.jpg', banner: `mb_7.jpg`}, 
        {item_no: 8, src: '8.jpg', banner: `mb_8.jpg`}, 
        {item_no: 9, src: '9.jpg', banner: `mb_9.jpg`}, 
        {item_no: 10, src: '10.jpg', banner: `mb_10.jpg`}, 
        {item_no: 11, src: '11.jpg', banner: `mb_11.jpg`}, 
        {item_no: 12, src: '12.jpg', banner: `mb_12.jpg`}, 
        {item_no: 13, src: '13.jpg', banner: `mb_13.jpg`}, 
        {item_no: 14, src: '14.jpg', banner: `mb_14.jpg`}, 
        {item_no: 15, src: '15.jpg', banner: `mb_15.jpg`}, 
        {item_no: 16, src: '16.jpg', banner: `mb_16.jpg`}, 
        {item_no: 17, src: '17.jpg', banner: `mb_17.jpg`}, 
        {item_no: 18, src: '18.jpg', banner: `mb_18.jpg`}, 
        {item_no: 19, src: '19.jpg', banner: `mb_19.jpg`}, 
        {item_no: 20, src: '20.jpg', banner: `mb_20.jpg`}, 
        {item_no: 21, src: '21.jpg', banner: `mb_21.jpg`}, 
        {item_no: 22, src: '22.jpg', banner: `mb_22.jpg`}, 
        {item_no: 23, src: '23.jpg', banner: `mb_23.jpg`}, 
        {item_no: 24, src: '24.jpg', banner: `mb_24.jpg`}, 
        {item_no: 25, src: '25.jpg', banner: `mb_25.jpg`}, 
        {item_no: 26, src: '26.jpg', banner: `mb_26.jpg`}, 
        {item_no: 27, src: '27.jpg', banner: `mb_27.jpg`}, 
        {item_no: 28, src: '28.jpg', banner: `mb_28.jpg`}, 
        {item_no: 29, src: '29.jpg', banner: `mb_29.jpg`}, 
        {item_no: 30, src: '30.jpg', banner: `mb_30.jpg`}, 
        {item_no: 31, src: '31.jpg', banner: `mb_31.jpg`}, 
        {item_no: 32, src: '32.jpg', banner: `mb_32.jpg`}, 
        {item_no: 33, src: '33.jpg', banner: `mb_33.jpg`}, 
        {item_no: 34, src: '34.jpg', banner: `mb_34.jpg`}, 
        {item_no: 35, src: '35.jpg', banner: `mb_35.jpg`}, 
        {item_no: 36, src: '36.jpg', banner: `mb_36.jpg`}, 
        {item_no: 37, src: '37.jpg', banner: `mb_37.jpg`}, 
        {item_no: 38, src: '38.jpg', banner: `mb_38.jpg`}, 
        {item_no: 39, src: '39.jpg', banner: `mb_39.jpg`}, 
        {item_no: 40, src: '40.jpg', banner: `mb_40.jpg`}, 
        {item_no: 41, src: '41.jpg', banner: `mb_41.jpg`}, 
        {item_no: 42, src: '42.jpg', banner: `mb_42.jpg`}, 
        {item_no: 43, src: '43.jpg', banner: `mb_43.jpg`}, 
        {item_no: 44, src: '44.jpg', banner: `mb_44.jpg`}, 
        {item_no: 45, src: '45.jpg', banner: `mb_45.jpg`}, 
        {item_no: 46, src: '46.jpg', banner: `mb_46.jpg`}, 
        {item_no: 47, src: '47.jpg', banner: `mb_47.jpg`}, 
        {item_no: 48, src: '48.jpg', banner: `mb_48.jpg`}, 
        {item_no: 49, src: '49.jpg', banner: `mb_49.jpg`}
    ]
    ,
    [
        {item_no: 0, src: '0.jpg', banner: `mb_0.jpg`}, 
        {item_no: 1, src: '1.jpg', banner: `mb_1.jpg`}, 
        {item_no: 2, src: '2.jpg', banner: `mb_2.jpg`}, 
        {item_no: 3, src: '3.jpg', banner: `mb_3.jpg`}, 
        {item_no: 4, src: '4.jpg', banner: `mb_4.jpg`}, 
        {item_no: 5, src: '5.jpg', banner: `mb_5.jpg`}, 
        {item_no: 6, src: '6.jpg', banner: `mb_6.jpg`}, 
        {item_no: 7, src: '7.jpg', banner: `mb_7.jpg`}, 
        {item_no: 8, src: '8.jpg', banner: `mb_8.jpg`}, 
        {item_no: 9, src: '9.jpg', banner: `mb_9.jpg`}, 
        {item_no: 10, src: '10.jpg', banner: `mb_10.jpg`}, 
        {item_no: 11, src: '11.jpg', banner: `mb_11.jpg`}, 
        {item_no: 12, src: '12.jpg', banner: `mb_12.jpg`}, 
        {item_no: 13, src: '13.jpg', banner: `mb_13.jpg`}, 
        {item_no: 14, src: '14.jpg', banner: `mb_14.jpg`}, 
        {item_no: 15, src: '15.jpg', banner: `mb_15.jpg`}, 
        {item_no: 16, src: '16.jpg', banner: `mb_16.jpg`}, 
        {item_no: 17, src: '17.jpg', banner: `mb_17.jpg`}, 
        {item_no: 18, src: '18.jpg', banner: `mb_18.jpg`}, 
        {item_no: 19, src: '19.jpg', banner: `mb_19.jpg`}, 
        {item_no: 20, src: '20.jpg', banner: `mb_20.jpg`}, 
        {item_no: 21, src: '21.jpg', banner: `mb_21.jpg`}, 
        {item_no: 22, src: '22.jpg', banner: `mb_22.jpg`}, 
        {item_no: 23, src: '23.jpg', banner: `mb_23.jpg`}, 
        {item_no: 24, src: '24.jpg', banner: `mb_24.jpg`}, 
        {item_no: 25, src: '25.jpg', banner: `mb_25.jpg`}, 
        {item_no: 26, src: '26.jpg', banner: `mb_26.jpg`}, 
        {item_no: 27, src: '27.jpg', banner: `mb_27.jpg`}, 
        {item_no: 28, src: '28.jpg', banner: `mb_28.jpg`}, 
        {item_no: 29, src: '29.jpg', banner: `mb_29.jpg`}, 
        {item_no: 30, src: '30.jpg', banner: `mb_30.jpg`}, 
        {item_no: 31, src: '31.jpg', banner: `mb_31.jpg`}, 
        {item_no: 32, src: '32.jpg', banner: `mb_32.jpg`}, 
        {item_no: 33, src: '33.jpg', banner: `mb_33.jpg`}, 
        {item_no: 34, src: '34.jpg', banner: `mb_34.jpg`}, 
        {item_no: 35, src: '35.jpg', banner: `mb_35.jpg`}, 
        {item_no: 36, src: '36.jpg', banner: `mb_36.jpg`}, 
        {item_no: 37, src: '37.jpg', banner: `mb_37.jpg`}, 
        {item_no: 38, src: '38.jpg', banner: `mb_38.jpg`}, 
        {item_no: 39, src: '39.jpg', banner: `mb_39.jpg`}, 
        {item_no: 40, src: '40.jpg', banner: `mb_40.jpg`}, 
        {item_no: 41, src: '41.jpg', banner: `mb_41.jpg`}, 
        {item_no: 42, src: '42.jpg', banner: `mb_42.jpg`}, 
        {item_no: 43, src: '43.jpg', banner: `mb_43.jpg`}, 
        {item_no: 44, src: '44.jpg', banner: `mb_44.jpg`}, 
        {item_no: 45, src: '45.jpg', banner: `mb_45.jpg`}, 
        {item_no: 46, src: '46.jpg', banner: `mb_46.jpg`}, 
        {item_no: 47, src: '47.jpg', banner: `mb_47.jpg`}, 
        {item_no: 48, src: '48.jpg', banner: `mb_48.jpg`}, 
        {item_no: 49, src: '49.jpg', banner: `mb_49.jpg`}
    ]
    ,
    [
        {item_no: 0, src: '0.jpg', banner: `mb_0.jpg`}, 
        {item_no: 1, src: '1.jpg', banner: `mb_1.jpg`}, 
        {item_no: 2, src: '2.jpg', banner: `mb_2.jpg`}, 
        {item_no: 3, src: '3.jpg', banner: `mb_3.jpg`}, 
        {item_no: 4, src: '4.jpg', banner: `mb_4.jpg`}, 
        {item_no: 5, src: '5.jpg', banner: `mb_5.jpg`}, 
        {item_no: 6, src: '6.jpg', banner: `mb_6.jpg`}, 
        {item_no: 7, src: '7.jpg', banner: `mb_7.jpg`}, 
        {item_no: 8, src: '8.jpg', banner: `mb_8.jpg`}, 
        {item_no: 9, src: '9.jpg', banner: `mb_9.jpg`}, 
        {item_no: 10, src: '10.jpg', banner: `mb_10.jpg`}, 
        {item_no: 11, src: '11.jpg', banner: `mb_11.jpg`}, 
        {item_no: 12, src: '12.jpg', banner: `mb_12.jpg`}, 
        {item_no: 13, src: '13.jpg', banner: `mb_13.jpg`}, 
        {item_no: 14, src: '14.jpg', banner: `mb_14.jpg`}, 
        {item_no: 15, src: '15.jpg', banner: `mb_15.jpg`}, 
        {item_no: 16, src: '16.jpg', banner: `mb_16.jpg`}, 
        {item_no: 17, src: '17.jpg', banner: `mb_17.jpg`}, 
        {item_no: 18, src: '18.jpg', banner: `mb_18.jpg`}, 
        {item_no: 19, src: '19.jpg', banner: `mb_19.jpg`}, 
        {item_no: 20, src: '20.jpg', banner: `mb_20.jpg`}, 
        {item_no: 21, src: '21.jpg', banner: `mb_21.jpg`}, 
        {item_no: 22, src: '22.jpg', banner: `mb_22.jpg`}, 
        {item_no: 23, src: '23.jpg', banner: `mb_23.jpg`}, 
        {item_no: 24, src: '24.jpg', banner: `mb_24.jpg`}, 
        {item_no: 25, src: '25.jpg', banner: `mb_25.jpg`}, 
        {item_no: 26, src: '26.jpg', banner: `mb_26.jpg`}, 
        {item_no: 27, src: '27.jpg', banner: `mb_27.jpg`}, 
        {item_no: 28, src: '28.jpg', banner: `mb_28.jpg`}, 
        {item_no: 29, src: '29.jpg', banner: `mb_29.jpg`}, 
        {item_no: 30, src: '30.jpg', banner: `mb_30.jpg`}, 
        {item_no: 31, src: '31.jpg', banner: `mb_31.jpg`}, 
        {item_no: 32, src: '32.jpg', banner: `mb_32.jpg`}, 
        {item_no: 33, src: '33.jpg', banner: `mb_33.jpg`}, 
        {item_no: 34, src: '34.jpg', banner: `mb_34.jpg`}, 
        {item_no: 35, src: '35.jpg', banner: `mb_35.jpg`}, 
        {item_no: 36, src: '36.jpg', banner: `mb_36.jpg`}, 
        {item_no: 37, src: '37.jpg', banner: `mb_37.jpg`}, 
        {item_no: 38, src: '38.jpg', banner: `mb_38.jpg`}, 
        {item_no: 39, src: '39.jpg', banner: `mb_39.jpg`}, 
        {item_no: 40, src: '40.jpg', banner: `mb_40.jpg`}, 
        {item_no: 41, src: '41.jpg', banner: `mb_41.jpg`}, 
        {item_no: 42, src: '42.jpg', banner: `mb_42.jpg`}, 
        {item_no: 43, src: '43.jpg', banner: `mb_43.jpg`}, 
        {item_no: 44, src: '44.jpg', banner: `mb_44.jpg`}, 
        {item_no: 45, src: '45.jpg', banner: `mb_45.jpg`}, 
        {item_no: 46, src: '46.jpg', banner: `mb_46.jpg`}, 
        {item_no: 47, src: '47.jpg', banner: `mb_47.jpg`}, 
        {item_no: 48, src: '48.jpg', banner: `mb_48.jpg`}, 
        {item_no: 49, src: '49.jpg', banner: `mb_49.jpg`}
    ]
    ,
    [
        {item_no: 0, src: '0.jpg', banner: `mb_0.jpg`}, 
        {item_no: 1, src: '1.jpg', banner: `mb_1.jpg`}, 
        {item_no: 2, src: '2.jpg', banner: `mb_2.jpg`}, 
        {item_no: 3, src: '3.jpg', banner: `mb_3.jpg`}, 
        {item_no: 4, src: '4.jpg', banner: `mb_4.jpg`}, 
        {item_no: 5, src: '5.jpg', banner: `mb_5.jpg`}, 
        {item_no: 6, src: '6.jpg', banner: `mb_6.jpg`}, 
        {item_no: 7, src: '7.jpg', banner: `mb_7.jpg`}, 
        {item_no: 8, src: '8.jpg', banner: `mb_8.jpg`}, 
        {item_no: 9, src: '9.jpg', banner: `mb_9.jpg`}, 
        {item_no: 10, src: '10.jpg', banner: `mb_10.jpg`}, 
        {item_no: 11, src: '11.jpg', banner: `mb_11.jpg`}, 
        {item_no: 12, src: '12.jpg', banner: `mb_12.jpg`}, 
        {item_no: 13, src: '13.jpg', banner: `mb_13.jpg`}, 
        {item_no: 14, src: '14.jpg', banner: `mb_14.jpg`}, 
        {item_no: 15, src: '15.jpg', banner: `mb_15.jpg`}, 
        {item_no: 16, src: '16.jpg', banner: `mb_16.jpg`}, 
        {item_no: 17, src: '17.jpg', banner: `mb_17.jpg`}, 
        {item_no: 18, src: '18.jpg', banner: `mb_18.jpg`}, 
        {item_no: 19, src: '19.jpg', banner: `mb_19.jpg`}, 
        {item_no: 20, src: '20.jpg', banner: `mb_20.jpg`}, 
        {item_no: 21, src: '21.jpg', banner: `mb_21.jpg`}, 
        {item_no: 22, src: '22.jpg', banner: `mb_22.jpg`}, 
        {item_no: 23, src: '23.jpg', banner: `mb_23.jpg`}, 
        {item_no: 24, src: '24.jpg', banner: `mb_24.jpg`}, 
        {item_no: 25, src: '25.jpg', banner: `mb_25.jpg`}, 
        {item_no: 26, src: '26.jpg', banner: `mb_26.jpg`}, 
        {item_no: 27, src: '27.jpg', banner: `mb_27.jpg`}, 
        {item_no: 28, src: '28.jpg', banner: `mb_28.jpg`}, 
        {item_no: 29, src: '29.jpg', banner: `mb_29.jpg`}, 
        {item_no: 30, src: '30.jpg', banner: `mb_30.jpg`}, 
        {item_no: 31, src: '31.jpg', banner: `mb_31.jpg`}, 
        {item_no: 32, src: '32.jpg', banner: `mb_32.jpg`}, 
        {item_no: 33, src: '33.jpg', banner: `mb_33.jpg`}, 
        {item_no: 34, src: '34.jpg', banner: `mb_34.jpg`}, 
        {item_no: 35, src: '35.jpg', banner: `mb_35.jpg`}, 
        {item_no: 36, src: '36.jpg', banner: `mb_36.jpg`}, 
        {item_no: 37, src: '37.jpg', banner: `mb_37.jpg`}, 
        {item_no: 38, src: '38.jpg', banner: `mb_38.jpg`}, 
        {item_no: 39, src: '39.jpg', banner: `mb_39.jpg`}, 
        {item_no: 40, src: '40.jpg', banner: `mb_40.jpg`}, 
        {item_no: 41, src: '41.jpg', banner: `mb_41.jpg`}, 
        {item_no: 42, src: '42.jpg', banner: `mb_42.jpg`}, 
        {item_no: 43, src: '43.jpg', banner: `mb_43.jpg`}, 
        {item_no: 44, src: '44.jpg', banner: `mb_44.jpg`}, 
        {item_no: 45, src: '45.jpg', banner: `mb_45.jpg`}, 
        {item_no: 46, src: '46.jpg', banner: `mb_46.jpg`}, 
        {item_no: 47, src: '47.jpg', banner: `mb_47.jpg`}, 
        {item_no: 48, src: '48.jpg', banner: `mb_48.jpg`}, 
        {item_no: 49, src: '49.jpg', banner: `mb_49.jpg`}
    ]
    ,
    [
        {item_no: 0, src: '0.jpg', banner: `mb_0.jpg`}, 
        {item_no: 1, src: '1.jpg', banner: `mb_1.jpg`}, 
        {item_no: 2, src: '2.jpg', banner: `mb_2.jpg`}, 
        {item_no: 3, src: '3.jpg', banner: `mb_3.jpg`}, 
        {item_no: 4, src: '4.jpg', banner: `mb_4.jpg`}, 
        {item_no: 5, src: '5.jpg', banner: `mb_5.jpg`}, 
        {item_no: 6, src: '6.jpg', banner: `mb_6.jpg`}, 
        {item_no: 7, src: '7.jpg', banner: `mb_7.jpg`}, 
        {item_no: 8, src: '8.jpg', banner: `mb_8.jpg`}, 
        {item_no: 9, src: '9.jpg', banner: `mb_9.jpg`}, 
        {item_no: 10, src: '10.jpg', banner: `mb_10.jpg`}, 
        {item_no: 11, src: '11.jpg', banner: `mb_11.jpg`}, 
        {item_no: 12, src: '12.jpg', banner: `mb_12.jpg`}, 
        {item_no: 13, src: '13.jpg', banner: `mb_13.jpg`}, 
        {item_no: 14, src: '14.jpg', banner: `mb_14.jpg`}, 
        {item_no: 15, src: '15.jpg', banner: `mb_15.jpg`}, 
        {item_no: 16, src: '16.jpg', banner: `mb_16.jpg`}, 
        {item_no: 17, src: '17.jpg', banner: `mb_17.jpg`}, 
        {item_no: 18, src: '18.jpg', banner: `mb_18.jpg`}, 
        {item_no: 19, src: '19.jpg', banner: `mb_19.jpg`}, 
        {item_no: 20, src: '20.jpg', banner: `mb_20.jpg`}, 
        {item_no: 21, src: '21.jpg', banner: `mb_21.jpg`}, 
        {item_no: 22, src: '22.jpg', banner: `mb_22.jpg`}, 
        {item_no: 23, src: '23.jpg', banner: `mb_23.jpg`}, 
        {item_no: 24, src: '24.jpg', banner: `mb_24.jpg`}, 
        {item_no: 25, src: '25.jpg', banner: `mb_25.jpg`}, 
        {item_no: 26, src: '26.jpg', banner: `mb_26.jpg`}, 
        {item_no: 27, src: '27.jpg', banner: `mb_27.jpg`}, 
        {item_no: 28, src: '28.jpg', banner: `mb_28.jpg`}, 
        {item_no: 29, src: '29.jpg', banner: `mb_29.jpg`}, 
        {item_no: 30, src: '30.jpg', banner: `mb_30.jpg`}, 
        {item_no: 31, src: '31.jpg', banner: `mb_31.jpg`}, 
        {item_no: 32, src: '32.jpg', banner: `mb_32.jpg`}, 
        {item_no: 33, src: '33.jpg', banner: `mb_33.jpg`}, 
        {item_no: 34, src: '34.jpg', banner: `mb_34.jpg`}, 
        {item_no: 35, src: '35.jpg', banner: `mb_35.jpg`}, 
        {item_no: 36, src: '36.jpg', banner: `mb_36.jpg`}, 
        {item_no: 37, src: '37.jpg', banner: `mb_37.jpg`}, 
        {item_no: 38, src: '38.jpg', banner: `mb_38.jpg`}, 
        {item_no: 39, src: '39.jpg', banner: `mb_39.jpg`}, 
        {item_no: 40, src: '40.jpg', banner: `mb_40.jpg`}, 
        {item_no: 41, src: '41.jpg', banner: `mb_41.jpg`}, 
        {item_no: 42, src: '42.jpg', banner: `mb_42.jpg`}, 
        {item_no: 43, src: '43.jpg', banner: `mb_43.jpg`}, 
        {item_no: 44, src: '44.jpg', banner: `mb_44.jpg`}, 
        {item_no: 45, src: '45.jpg', banner: `mb_45.jpg`}, 
        {item_no: 46, src: '46.jpg', banner: `mb_46.jpg`}, 
        {item_no: 47, src: '47.jpg', banner: `mb_47.jpg`}, 
        {item_no: 48, src: '48.jpg', banner: `mb_48.jpg`}, 
        {item_no: 49, src: '49.jpg', banner: `mb_49.jpg`}
    ]
    ,
    [
        {item_no: 0, src: '0.jpg', banner: `mb_0.jpg`}, 
        {item_no: 1, src: '1.jpg', banner: `mb_1.jpg`}, 
        {item_no: 2, src: '2.jpg', banner: `mb_2.jpg`}, 
        {item_no: 3, src: '3.jpg', banner: `mb_3.jpg`}, 
        {item_no: 4, src: '4.jpg', banner: `mb_4.jpg`}, 
        {item_no: 5, src: '5.jpg', banner: `mb_5.jpg`}, 
        {item_no: 6, src: '6.jpg', banner: `mb_6.jpg`}, 
        {item_no: 7, src: '7.jpg', banner: `mb_7.jpg`}, 
        {item_no: 8, src: '8.jpg', banner: `mb_8.jpg`}, 
        {item_no: 9, src: '9.jpg', banner: `mb_9.jpg`}, 
        {item_no: 10, src: '10.jpg', banner: `mb_10.jpg`}, 
        {item_no: 11, src: '11.jpg', banner: `mb_11.jpg`}, 
        {item_no: 12, src: '12.jpg', banner: `mb_12.jpg`}, 
        {item_no: 13, src: '13.jpg', banner: `mb_13.jpg`}, 
        {item_no: 14, src: '14.jpg', banner: `mb_14.jpg`}, 
        {item_no: 15, src: '15.jpg', banner: `mb_15.jpg`}, 
        {item_no: 16, src: '16.jpg', banner: `mb_16.jpg`}, 
        {item_no: 17, src: '17.jpg', banner: `mb_17.jpg`}, 
        {item_no: 18, src: '18.jpg', banner: `mb_18.jpg`}, 
        {item_no: 19, src: '19.jpg', banner: `mb_19.jpg`}, 
        {item_no: 20, src: '20.jpg', banner: `mb_20.jpg`}, 
        {item_no: 21, src: '21.jpg', banner: `mb_21.jpg`}, 
        {item_no: 22, src: '22.jpg', banner: `mb_22.jpg`}, 
        {item_no: 23, src: '23.jpg', banner: `mb_23.jpg`}, 
        {item_no: 24, src: '24.jpg', banner: `mb_24.jpg`}, 
        {item_no: 25, src: '25.jpg', banner: `mb_25.jpg`}, 
        {item_no: 26, src: '26.jpg', banner: `mb_26.jpg`}, 
        {item_no: 27, src: '27.jpg', banner: `mb_27.jpg`}, 
        {item_no: 28, src: '28.jpg', banner: `mb_28.jpg`}, 
        {item_no: 29, src: '29.jpg', banner: `mb_29.jpg`}, 
        {item_no: 30, src: '30.jpg', banner: `mb_30.jpg`}, 
        {item_no: 31, src: '31.jpg', banner: `mb_31.jpg`}, 
        {item_no: 32, src: '32.jpg', banner: `mb_32.jpg`}, 
        {item_no: 33, src: '33.jpg', banner: `mb_33.jpg`}, 
        {item_no: 34, src: '34.jpg', banner: `mb_34.jpg`}, 
        {item_no: 35, src: '35.jpg', banner: `mb_35.jpg`}, 
        {item_no: 36, src: '36.jpg', banner: `mb_36.jpg`}, 
        {item_no: 37, src: '37.jpg', banner: `mb_37.jpg`}, 
        {item_no: 38, src: '38.jpg', banner: `mb_38.jpg`}, 
        {item_no: 39, src: '39.jpg', banner: `mb_39.jpg`}, 
        {item_no: 40, src: '40.jpg', banner: `mb_40.jpg`}, 
        {item_no: 41, src: '41.jpg', banner: `mb_41.jpg`}, 
        {item_no: 42, src: '42.jpg', banner: `mb_42.jpg`}, 
        {item_no: 43, src: '43.jpg', banner: `mb_43.jpg`}, 
        {item_no: 44, src: '44.jpg', banner: `mb_44.jpg`}, 
        {item_no: 45, src: '45.jpg', banner: `mb_45.jpg`}, 
        {item_no: 46, src: '46.jpg', banner: `mb_46.jpg`}, 
        {item_no: 47, src: '47.jpg', banner: `mb_47.jpg`}, 
        {item_no: 48, src: '48.jpg', banner: `mb_48.jpg`}, 
        {item_no: 49, src: '49.jpg', banner: `mb_49.jpg`}
    ]
]

//-----------get_info

    function get_info_from_url(keyword) { // cateNo, itemNo
        let url = location.href; // 302.theComma(item).html?cateNo=0&itemNo=3#with_item
        
        url = url.split("?") // [302.theComma(item).html , cateNo=0&itemNo=3#with_item]

        if(url.length > 1) {
            url = url[1].split("&") // [cateNo=0  , itemNo=3#with_item]

            for(let i=0; i<url.length; i++) {
                let tmp_url = url[i].split("=");// [cateNo  , 0 ]
                                                // [itemNo  , 3#with_item]

                if(tmp_url[0] == keyword) {
                    return tmp_url[1].split("#")[0] // 3#with_item
                }
            }
        }
        return null;
    }

//-----------load_item

    const EL_ARR = ['female', 'male', 'kids', 'goods', 'balance', 'outlet'];
    const PAGENAME_ARR = ['여성', '남성', '키즈', '잡화', '밸런스', '아울렛']
    const ITEM_TAG_ARR = ['Female', 'Male', 'Kids', 'Goods', 'Balance', 'Outlet']

    function load_item (cate, qty){
        let curr_count = $(`#${EL_ARR[cate]} .sec_body .item_box .item`).length;
        let last_no = curr_count + qty;

        let limitNo = ITEM_LIST[cate].length;

        if(last_no > limitNo) {
            last_no = limitNo;
        }

        for(let i=curr_count; i<last_no; i++) {

            let tmp = ITEM_LIST[cate][i];
            
            let tmp_list = `
                    <div class="item pos_init">
                        <div class="item_img">
                            <a href="phoibos_item.html?cateNo=${cate}&itemNo=${tmp.item_no}">
                                <img src="./img/${EL_ARR[cate]}/${tmp.src}" alt=""> 
                            </a>
                        </div>
                        <div class="item_info">
                            <div class="item_info_title">${ITEM_TAG_ARR[cate]}</div>
                            <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
                            <div class="txt_r o_price">39,000원</div>
                            <div class="txt_r s_price">32,000원</div>
                        </div>
                    </div>
                `
            
            $(`#${EL_ARR[cate]} .sec_body .item_box`).append(tmp_list)
        }
    }

//-----------bottom_logo

        $(window).scroll(function(){

            let f_o_top = $(`.footer`).offset().top
            let s_bot = $(window).scrollTop() + $(window).height();

            if(f_o_top <= s_bot - 10){
                $(`.bottom_logo`).addClass(`bottom_logo_active`)
            }
            else{
                $(`.bottom_logo`).removeClass(`bottom_logo_active`)
            }
        })
//-----------comma

    function comma(num) {
        return num.toLocaleString("KO")
        }


