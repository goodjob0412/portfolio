$(document).ready(function(){

      

    $(window).scroll(function(){
        let banner_off_top = $('.main_banner').offset().top;

        let package_off_top = $('.package').offset().top;
        let banner_s_top = $(window).scrollTop();

        if(banner_off_top = banner_s_top + 120){
            $('.banner_title').animate({
                top : '150px'
            },1000)

            $('.banner_desc').delay(500).animate({
                top : '300px'
            },1000)
        }

        console.log(package_off_top , banner_s_top)

        if(package_off_top = banner_s_top + 200){

            $('.swiper-wrapper .sroll_r').animate({
                right : 0
            },1000)
        }

    })
    
    // const $body = document.querySelector('body');
    // function preventScroll(e) {
    //     e.preventDefault();
    // }
    // // 'wheel' 이벤트를 사용하여 스크롤 감지 후 방지
    // $body.addEventListener('wheel', preventScroll, { passive: false });
    // $body.addEventListener('click', function() { // body 를 다시 클릭하면 스크롤 재개
    //     $body.removeEventListener('wheel', preventScroll, { passive: false });
    // });


    // const $body = document.querySelector('.blur_box');
    // function preventScroll(e) {
    //     e.preventDefault();
    // }
    // // 'wheel' 이벤트를 사용하여 스크롤 감지 후 방지
    // $body.addEventListener('wheel', preventScroll, { passive: false });
    // $body.addEventListener('click', function() { // body 를 다시 클릭하면 스크롤 재개
    //     $body.removeEventListener('wheel', preventScroll, { passive: false });
    // });



    $('.ham_btn').click(function(){
        const $body = document.querySelector('.blur_box');
        function preventScroll(e) {
            e.preventDefault();
        }
        // 'wheel' 이벤트를 사용하여 스크롤 감지 후 방지
        $body.addEventListener('wheel', preventScroll, { passive: false });
        $body.addEventListener('click', function() { // body 를 다시 클릭하면 스크롤 재개
            $body.removeEventListener('wheel', preventScroll, { passive: false });
        });

        

        $('.ham_box').css({
            right : '-402px'
        }).animate({
            top : 0,
            right : 0
        },500, 'linear')

        $('.platform div').addClass('ham_line_act')

        $('.blur_box').css({
            display : 'block',
            zIndex : '999999999999999999999999999999999999999999999999999999999'
        })

        
    })

    $('.sm_menu_ham').click(function(){
        $('.blur_box').css({display:'block'})
        const $body = document.querySelector('.blur_box');
        function preventScroll(e) {
            e.preventDefault();
        }
        // 'wheel' 이벤트를 사용하여 스크롤 감지 후 방지
        $body.addEventListener('wheel', preventScroll, { passive: false });
        $body.addEventListener('click', function() { // body 를 다시 클릭하면 스크롤 재개
            $body.removeEventListener('wheel', preventScroll, { passive: false });
        });

        

        $('.ham_box').css({
            right : '-402px'
        }).animate({
            top : 0,
            right : 0
        },500, 'linear')

        $('.platform div').addClass('ham_line_act')

        $('.blur_box').css({
            display : 'block',
            zIndex : '999999999999999999999999999999999999999999999999999999999'
        })

        
    })
    
    $('.x_btn').click(function(){

        $('.blur_box').animate({
            background : '#fff',
            display : 'none',
            zIndex : -9999999999999999999,
        },500)



        $('.ham_box').animate({
            right : '-402px'
        },500 , 'linear')

        $('.blur_box').css({display:'none'})
    
    })

    $('.platform').click(function(){

    
        for(let i = 0; i < 2; i++){
            $('.ham_cate div').removeClass('ham_line_act')
        }

        $('.ham_btm_pan_1').css({
            display : 'block',
            zIndex : 99
        })

        $('.ham_box').css({
            top : 0,
            right : 0
        })

        $('.ham_btm_pan_2').css({
            zIndex : 0
        })

    
        $('.platform div').addClass('ham_line_act')

    })

    

    $('.ham_cate').click(function(){
        for(let i = 0; i < 2; i++){
            $('.platform div').removeClass('ham_line_act')
        }
        $('.ham_btm_pan_2').css({
            zIndex : 99
        })

        $('.ham_btm_pan_1').css({
            zIndex : 0,
            display : 'none'
        })

        
    
        $('.ham_cate div').addClass('ham_line_act')

    })






$('.banner').eq(0).css({left: '-2px'})

    let bn_length = $('.banner').length;
    let bn_idx = 0;
    let bn_interval =""
    let bn_timer = 1000;

    $('.main_banner').click(function(){
        let aaa = $('.banner').eq($(this).index()).attr('class')
    })

    $('.btn_slide_R').click(function(){
        
        bn_slide(bn_idx % bn_length, '100%', (bn_idx + 1) % bn_length, '-100%', (bn_idx + 1) % bn_length)

        let ttt = $('.banner').attr('class')

        console.log(ttt)
    })

    $('.btn_slide_L').click(function(){

        bn_slide(bn_idx % bn_length, '-100%', (bn_idx - 1) % bn_length, '100%', (bn_idx - 1) % bn_length)

        let ttt = $('.banner').attr('slide_no')

        console.log(ttt)

    })

    function auto_slide(){
        bn_interval = setInterval(function(){
            $('.btn_slide_R').trigger('click')
        }, bn_timer + 2000);
    }

    // auto_slide()

    // $('.main_banner').hover(function(){
    //     clearInterval(bn_interval)
    // },function(){
    //     auto_slide()
    // })


    function bn_slide(o_bang, o_pos, in_bang, in_pos, new_bang){

        $('.slide').css({pointerEvents : 'none'})

        setTimeout(function(){
            $('.slide').css({pointerEvents : 'auto'})
        },bn_timer)

        //나갈방
          $('.banner').eq(o_bang).animate({
            left : o_pos
        },bn_timer,'linear')

        //들어올방
        $('.banner').eq(in_bang).css({
            left : in_pos
        }).animate({
            left : 0
        },bn_timer,'linear')

        bn_idx = new_bang
    }



    // hover
    $('.e_o_sec_main').hover(function(){
        $('.e_o_sec_main img').css({
            scale : 1.2
        })
    },function(){
        $('.e_o_sec_main img').css({
            scale : 1
        })
    })

    $('.e_o_sec_item_img').hover(function(){
        $('.e_o_sec_item_img img').css({
            scale : 1.2
        })
    },function(){
        $('.e_o_sec_item_img img').css({
            scale : 1
        })
    })

    // $('.e_o_sec_main').mouseenter(function(){
    //     $('.e_o_sec_main img').css({
    //         scale : 1.2
    //     })
    // })



    // AT scroll 
    // $(window).resize(function(){
    
    //     etc_top1 = $('.etc_sec1_top').offset().top;
    //     etc_btm1 = $('.etc_sec1_top').offset().top;

    //     etc_top2 = $('.etc_sec1_btm').offset().top;
    //     etc_btm2 = $('.etc_sec1_btm').offset().top;
    // })

    // let etc_top1 = $('.etc_sec1_top').offset().top;
    // let etc_btm1 = $('.etc_sec1_top').offset().top;
    // let etc_s_top1 = $('.sm_long_top').offset().top;
    // let etc_s_btm1 = $('.sm_long_top').offset().top;


    // let etc_top2 = $('.etc_sec1_btm').offset().top;
    // let etc_btm2 = $('.etc_sec1_btm').offset().top;


    

    // $('.sm_short_top > .sm_short_top_items').eq(3).css({
    //     border : "3px solid red"
    // })

    $(window).scroll(function(){

        // 큰화면 세줄 보여줄때
        let etc_top1 = $('.etc_sec1_top').offset().top;
        let etc_btm1 = $('.etc_sec1_top').offset().top;

        // 반응형 두줄 보여줄때
        let etc_s_top1 = $('.sm_long_top').offset().top;
        let etc_s_btm1 = $('.sm_long_top').offset().top;
        let etc_sb_top1 = $('.sm_long_btm').offset().top;
        let etc_sb_btm1 = $('.sm_long_btm').offset().top;
    
        //윈도우탑
        let etc_s_top = $(window).scrollTop();


        let etc_top2 = $('.etc_sec1_btm').offset().top;
        let etc_btm2 = $('.etc_sec1_btm').offset().top;

        let tmp1 = $('.sm_short_top > .sm_short_top_items').eq(3).position().top + $('.sm_short_top > .sm_short_top_items').eq(3).height() - $('.sm_long_top').height();

        let tmp2 = $('.sm_short_btm > .sm_short_btm_items').eq(3).position().top + $('.sm_short_btm > .sm_short_btm_items').eq(3).height() - $('.sm_long_btm').height();

  

       if(etc_top1 <= etc_s_top){

        let tmp = $('.etc_sec2 > .etc_sec_item').eq(1).position().top + $('.etc_sec2 > .etc_sec_item').eq(1).height() - $('.etc_sec_long_top').height();


        $('.etc_sec_long_top').stop(true).animate({
            top : tmp
        },1000 ,'linear')

       }

       if(etc_btm1  >= etc_s_top){
        $('.etc_sec_long_top').stop(true).animate({
            top : '0px'
        },1000 ,'linear')
       }

/////////////////////////////////////////////////////////////////////////

        if(etc_s_top1 <= etc_s_top){

            $('.sm_long_top').stop(true).animate({
            top : tmp1
        },1000 ,'linear')
        }   

        if(etc_s_top1 >= etc_s_top){

            $('.sm_long_top').stop(true).animate({
            top : 0
        },1000 ,'linear')
        }   




        if(etc_sb_top1 <= etc_s_top){

            $('.sm_long_btm').stop(true).animate({
            top : tmp2
        },1000 ,'linear')
        }   

        if(etc_sb_top1 >= etc_s_top){

            $('.sm_long_btm').stop(true).animate({
            top : 0
        },1000 ,'linear')
        }  




       if(etc_top2 <= etc_s_top){
        let tmp1 = $('.etc_sec2 > .etc_sec_item').eq(1).position().top + $('.etc_sec2 > .etc_sec_item').eq(1).height() - $('.etc_sec_long_btm').height();


        $('.etc_sec_long_btm').stop(true).animate({
            top : '500px'
        },1000 ,'linear')
       }

       if(etc_btm2 >= etc_s_top){
        $('.etc_sec_long_btm').stop(true).animate({
            top : '0px'
        },1000 ,'linear')
       }

     })



     let last_scroll = 0;

     $(window).scroll(function(){

         let s_top = $(this).scrollTop()
 
         // console.log("최근 스크롤값 : ", last_scroll, ",스크롤탑값 : ",s_top)
 
     
         //내려갈때
         if(s_top > last_scroll){
 
             $('.sm_menu').css({
                 opacity : 0,
                 transition : "all 0.05s" 
             })


 
         }
 
         //올라갈때
         else if(s_top < last_scroll){
 
             $('.sm_menu').css({
                 opacity : 1,
                 display : 'flex',
                 position : 'fixed',
                 marginTop : 0,
                 transition : "all 0.5s" 
             })

            //  var scale = 1;
            //  beat = setInterval(function(){
            //  scale = scale == 1 ? 1.1 : 1
            //  $('.sm_eternal').css('transform', 'scale('+scale+')')
            //  }, 400, 'linear')

         }
         
         last_scroll = s_top;
         
     })

     $('.sm_menu_go_top').click(function(){
        $('html').animate({scrollTop : 0},1000)
     })



})