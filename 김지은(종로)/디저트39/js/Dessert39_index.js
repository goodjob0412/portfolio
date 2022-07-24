$(document).ready(function(){

// ////////배너 슬라이드//////////

    //메인베너

    $('.banner').eq(0).css({
        left: 0
    });
    //인디삽입
    let count = $('.banner').length; 
    for(let i=0; i<count; i++) {
        $('.indicator').append('<div class="indi"></div>');
    }
    $('.indi').eq(0).addClass('indi_active');

    $('.indi').click(function(){

        if($('.indi_active').index() < $(this).index()) {

            slide($(this).index(), '100%', $('.indi_active').index(), '-100%');
            console.log("오른쪽")
        }

        else if($('.indi_active').index() > $(this).index()) {

            slide($(this).index(), '-100%', $('.indi_active').index(), '100%'); 
            console.log("왼쪽")
        }
        bang=$(this).index() + 1;

    });

    let bang = 1;
    let timer = 1000;
    
    $('.btn_R').click(function(){ 
        slide(bang % count, '100%', (bang - 1) % count, '-100%');
        bang+=1; 
    });
    $('.btn_L').click(function(){
        bang-=1; 
        slide((bang - 1) % count, '-100%', bang % count, '100%') 
    });

    function slide(a_bang, c_pos, b_bang, d_pos) { 
        btn_init();

        console.log("a_bang:" +a_bang)

        // 들어오는판
        $('.banner').eq(a_bang).css({
            left: c_pos
        }).animate({
            left: 0
        }, timer);

        // 나가는판
        $('.banner').eq(b_bang).animate({
            left: d_pos
        }, timer);

        $('.indi').eq(b_bang).removeClass('indi_active');
        $('.indi').eq(a_bang).addClass('indi_active');
    }
//////// 버튼박기

    // function btn_init() {
    //     $('.btn').attr('disabled', true)

    //     setTimeout(() => {
    //         $('.btn').attr('disabled', false)
    //     }, timer);
    // }

    function btn_init() {
        $('.btn').css({pointerEvents: 'none'});

        setTimeout(() => {
            $('.btn').css({pointerEvents: 'auto'})
        }, timer);
    }

    let interval;

    function auto_slide() {
        interval = setInterval(() => {
            $('.btn_R').trigger('click')
        }, timer + 2000);
    }
    auto_slide();

    $('.m_box').hover(function(){
        clearInterval(interval)
    } , function(){
        auto_slide();
    })
    


    // /////preview_menu_c 체크해서 바뀌기////////
    $('.dessert').click(function(){
        $(this).css({
            color: 'cadetblue'
        })
        $('.beverage').css({
            color: '#000'
        })

        $('.preview_menu_in1').css({
            display: 'block'
        })
        $('.preview_menu_in2').css({
            display: 'none'
        })

        // $(this).css({
        //     color: 'cadetblue'
        // })
        // $('.beverage').css({
        //     color: '#000'
        // })
        
        // $('.preview_menu_m1').css({
        //     display: 'block'
        // })
        // $('.preview_menu_m2').css({
        //     display: 'none'
        // })
    })



    $('.beverage').click(function(){
        $(this).css({
            color: 'cadetblue'
        })
        $('.dessert').css({
            color: '#000'
        })

        $('.preview_menu_in2').css({
            display: 'block'
        })
        $('.preview_menu_in1').css({
            display: 'none'
        })
    })

    /////////////////////////////////////
    ///////store_L 버튼클릭시 같이 사라지기//////

    //초기화
    $('.inner_img').eq(0).css({
        left: 0
    });

    let bang_s = 1;
    let timer_s = 1000;
    let count_s = $('.inner_img').length;

    $('.S_BTN_R').click(function(){ 
        S_slide(bang_s % count_s, '100%', (bang_s - 1) % count_s, '-100%');
        bang_s+=1; 
    });
    $('.S_BTN_L').click(function(){
        bang_s-=1; 
        S_slide((bang_s - 1) % count_s, '-100%', bang_s % count_s, '100%') 
    });

    function S_btn_init() {
        $('.S_BTN').css({pointerEvents: 'none'});

        setTimeout(() => {
            $('.S_BTN').css({pointerEvents: 'auto'})
        }, timer);
    }
    
    // function slide(e_bang, g_pos, f_bang, h_pos)
    function S_slide(e_bang, g_pos, f_bang, h_pos) { 
        S_btn_init();

        console.log("e_bang:" +e_bang)
        // console.log("inner_img-"+inner_img)
        

        // 들어오는판
        $('.inner_img').eq(e_bang).css({
            left: g_pos
        }).animate({
            left: 0
        }, timer_s);

        $('.store_L').eq(e_bang).css({
            left: g_pos
        }).animate({
            left: 0
        }, timer_s);

        // 나가는판
        $('.inner_img').eq(f_bang).animate({
            left: h_pos
        }, timer_s);

        $('.store_L').eq(f_bang).animate({
            left: h_pos
        }, timer_s);

        // $('.inner_img').eq(f_bang).animate({
        //     left: e_bang
        // }, timer);

        // $('.store_L').eq(f_bang).animate({
        //     left: e_bang
        // }, timer);
    }

    /////////////////////////////////////////
    // /////////////brand_box 색이 가렸다 나타났다/////////


    // setTimeout(()=> {
    //     $('.darkcyan ').animate({
    //         right: '0'
    //     }, 400).delay(200).animate({
    //         right: '100%'
    //     }, 400);
    //     $('.img1').delay(800).fadeIn(400)
 
    //     $('.box_gray ').delay(200).animate({
    //         left: '0'
    //     }, 400)

    //     $('.b_co').delay(600).animate({
    //         left: '0',
    //         opacity: 1
    //     }, 400)

    //     $('.BTN_b').delay(600).animate({
    //         left: '20px',
    //         opacity: 1
    //     }, 400)

    // }, 500)


    // 스크롤 관련
    let best_food = $('.BEST_FOOD').offset().top + 200;
    let p_menu_o_top = $('#preview_menu').offset().top + 200;
    let brand_o_top = $('.BRAND').offset().top + 500;
    let store_o_top = $('#SE').offset().top + 200;
    let brand_chk = true;


    $(window).scroll(function(){
        
        // 스크롤 내리면 아이템들 나타나면서 올라오게 하기
        // MENU
        let s_bot = $(window).scrollTop() + $(window).height() ;
        if(p_menu_o_top <= s_bot && s_bot < best_food) {

            for(let i=0; i < $('#preview_menu .item_init').length; i++) {
                setTimeout(() => {
                    $('#preview_menu .item_init').eq(i).addClass('item_init_active')
                }, 100 * i  );
            }
        }
        else {
            $('#preview_menu .item_init').removeClass('item_init_active')
        }

        //STORE
        if(store_o_top <= s_bot && s_bot < brand_o_top) {
console.log("store_o_top:" + store_o_top)
            for(let i=0; i < $('#SE .item_init').length; i++) {
                setTimeout(() => {
                    $('#SE .item_init').eq(i).addClass('item_init_active')
                }, 100 * i);
            }
        }
        else {
            $('#SE .item_init').removeClass('item_init_active')
        }

        //BRAND
        if(brand_o_top <= s_bot) {

            for(let i=0; i < $('#B_D .item_init').length; i++) {
                setTimeout(() => {
                    $('#B_D .item_init').eq(i).addClass('item_init_active')
                });
            }
        }
        else {
            $('#B_D .item_init').removeClass('item_init_active')
        }

        // if(brand_o_top <= s_bot) {

        //     $('#B_D .item_init').eq(i).addClass('item_init_active')
        // }

// console.log(s_bot , brand_o_top);

// 스크롤 내려갔을때 박스 나타났다 사라지게
        if(s_bot >= brand_o_top && brand_chk) {
            brand_chk=false;
            $('.darkcyan ').animate({
                right: '0'
            }, 400).delay(200).animate({
                right: '100%'
            }, 400);
            $('.img1').delay(800).fadeIn(400)
     
            $('.box_gray ').delay(200).animate({
                left: '0'
            }, 400)
    
            $('.b_co').delay(600).animate({
                left: '0',
                opacity: 1
            }, 400)
    
            $('.BTN_b').delay(600).animate({
                left: '20px',
                opacity: 1
            }, 400)
    
        }
    
    })

    function item_addClass(el, class_name) {
        el.addClass(class_name)
    }

    
});