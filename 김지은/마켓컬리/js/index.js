$(document).ready(function(){
    
    let top_banner_o_top = $('.top_banner').innerHeight();

    let black_week_box_o_bot = $('.black_week_box').offset().top + $('.black_week_box').innerHeight();
     
    setTimeout(() => { 
        black_week_box_o_bot = $('.black_week_box').offset().top + $('.black_week_box').innerHeight();

        scroll_chk(); 
    }, 300);


    
    let c_make_o_top = $('.c_make').offset().top + 400;
    let delivery_o_top = $('.delivery').offset().top + 200;
    let insta_o_top = $('.insta').offset().top + 300;
    // let delivery_chk = true;
let purple_chk = true;
    $(window).scroll(function(){ 
        scroll_chk(); 

        ////// 스르륵 올라오는 기능/////////
        //c_make////

        let s_bott = $(window).scrollTop() + $(window).height() ;
        // let이걸 안에다 넣는이유는 할때맏 계속 값을 구해줘야하기 때문
        if(c_make_o_top <= s_bott && s_bott-300 < delivery_o_top) {

            for(let i=0; i < $('.c_make .item_init').length; i++) {
                setTimeout(() => {
                    $('.c_make .item_init').eq(i).addClass('item_init_active')
                }, 200 * i  );
            }
        }
        else {
            $('.c_make .item_init').removeClass('item_init_active')
        }
// console.log(delivery_o_top , s_bott);
        // delivery/////
        if(delivery_o_top <= s_bott && s_bott-200 < insta_o_top) {
            // s_bott < insta_o_top없애야지 투명안됨 s_bott뒤에 -픽셀 빼줘야지 밑으로 내렸을때 안사라짐, 맞는 값을 찾아야함
// console.log("delivery_o_top:" + delivery_o_top)
            for(let i=0; i < $('.delivery .item_init').length; i++) {
                setTimeout(() => {
                    $('.delivery .item_init').eq(i).addClass('item_init_active')
                }, 200 * i  );
            }

            // 레시피 박스 나타났다 사라졌다
            if(purple_chk) {
                purple_chk = false;
                setTimeout(()=> {
                    $('.purple ').animate({
                        right: '0'
                    }, 400).delay(200).animate({
                        right: '100%'
                    }, 400); 

                    $('.rec_img').css({
                        opacity: 1,
                        transition: 'all 0.4s 0.8s'
                    })

                    $('.box_gray ').delay(200).animate({
                        left: '0'
                    }, 400)

                    $('.r_sec').delay(600).animate({
                        left: '0',
                        opacity: 1
                    }, 400)

                    $('.more').delay(600).animate({
                        left: '0',
                        opacity: 1
                    }, 400)
                }, 500)
            }


        }
        else {
            $('.delivery .item_init').removeClass('item_init_active')
        }

        // insta
        if(insta_o_top <= s_bott) {

            for(let i=0; i < $('.insta .item_init').length; i++) {
                setTimeout(() => {
                    $('.insta .item_init').eq(i).addClass('item_init_active')
                }, 200 * i  );
            }
        }
        else {
            $('.insta .item_init').removeClass('item_init_active')
        }

    });



    $(window).resize(function(){
        black_week_box_o_bot = $('.black_week_box').offset().top + $('.black_week_box').innerHeight();
    })

    function scroll_chk() {
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).innerHeight();

// console.log("s_top: " + s_top +", " + top_banner_o_top)

        // 위쪽에 닿았는지 체크
        if(s_top >= top_banner_o_top) {
            $('.swiper ').css({
                position: 'fixed',
                top: 0
            })
        }
        else {
            $('.swiper ').css({
                position: 'absolute',
                top: top_banner_o_top
            })
        }

        // 아래쪽에 닿았는지 체크
        if(s_bot >= black_week_box_o_bot) {
            $('.swiper ').css({
                position: 'absolute',
                top: black_week_box_o_bot - $('.swiper ').innerHeight()
            })
        }
    }


    // // 레시피 박스 나타났다 사라졌다
    // setTimeout(()=> {
        
    //     $('.purple ').animate({
    //         right: '0'
    //     }, 400).delay(200).animate({
    //         right: '100%'
    //     }, 400);
    //     // $('.rec_img').delay(800).fadeIn(400)

    //     // setTimeout(() => {
    //         $('.rec_img').css({
    //             opacity: 1,
    //             transition: 'all 0.4s 0.8s'
    //         })

            
    //     // }, 800);
 
    //     // $('.box_purple ').delay(200).animate({
    //     //     left: '0'
    //     // }, 400)

    //     // $('.R_content').delay(600).animate({
    //     //     left: '0',
    //     //     opacity: 1
    //     // }, 400)
            
    //     // // $('.box_gray').css({
    //     // //     opacity: 1,
    //     // // })
    //     // // 트렌지션 먹여줘야함


    //     // $('.box_gray').animate({
    //     //     right: '0'
    //     // }, 400).delay(200).animate({
    //     //     right: '-100%'
    //     // }, 400);

    //     $('.box_gray ').delay(200).animate({
    //         left: '0'
    //     }, 400)

    //     $('.r_sec').delay(600).animate({
    //         left: '0',
    //         opacity: 1
    //     }, 400)

    //     $('.more').delay(600).animate({
    //         left: '0',
    //         opacity: 1
    //     }, 400)
    // }, 500)
});