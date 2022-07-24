$(document).ready(function(){
    let h_o_top = $('.header').offset().top;
    
    $(window).resize(function(){           
        if($(window).width() <= 960) {
            $('.header').removeClass('header_fixed');
            $('.logo_a').removeClass('logo_a_fixed');
            
            $('.nbsp').css({
                display: 'block',  
                height: '10px'             
            })
        };        
    });

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();  
////////////////헤더픽스////////////    
        if($(window).width() > 960) { 

            if(h_o_top > s_top || s_top == 0){
                $('.header').removeClass('header_fixed');
                $('.logo_a').removeClass('logo_a_fixed');
            }
            else if(h_o_top <= s_top){
                $('.header').addClass('header_fixed');
                $('.logo_a').addClass('logo_a_fixed');
            }

        } 
////////////////메인2캐릭터////////////
let m2_ani = $('.header').height() + ($('.main1_video').height() / 2);
    if($(window).width() > 960) {     
        if(m2_ani <= s_top){
        //    console.log(2)
            $('#main2_img2').css({
                bottom: '-4%'
            });
            $('#main2_img1').css({
                left: '41%',
                opacity: '1',
                transitionDelay: '1.5s'
            });
            $('#main2_img3').css({
                top: '0',
                transitionDelay: '.5s'
            });
            $('#main2_img4').css({
                left: '-4%',
                transitionDelay: '.3s'
            });
        }
    }
////////////////메인3기기이미지////////////
let m3_ani = $('.header').height() + $('.main1_video').height() + ($('.main2').height() / 2);
        if($(window).width() > 960) { 
            // console.log(3)
            if(m3_ani <= s_top){

                $('#main3_img1').css({
                    bottom: '15%'
                });            
                $('.main3_img2_box').css({
                    bottom: '-1%'
                });
            }
        }
////////////////메인4 슬라이드업////////////
let m4_ani =$('.header').height() + $('.main1_video').height() + $('.main2').height() +($('.main3').height() / 2);
        if(m4_ani <= s_top){
            // console.log(4)
            // $('.main4').css({
            //     paddingTop: 0,
            //     })
            // $('.box_init').css({
            //     opacity: 1
            // }) 
            for(let i=0; i<=$('.main4 .box_init').length; i++){
                (function(tmp_i) {
                    setTimeout(function() {
                        // console.log("tmp_i: " + tmp_i);
                        $('.main4 .box_init').eq(tmp_i).addClass('box_active');
                    }, i * 100);
                })(i);
            };
        };
    });
    // $(window).resize(function(){
            
    //     if($(window).width() <= 480) {
    //         $('.rd').on('click', function(){
    //             let chkchk = $(this).index();
    //             console.log(chkchk);

    //             $('.big_img').find('.ani_small').css({
    //                 opacity: 0,
    //                 transition: 'none'
    //             });
    //             $('.big_img').find('.ani_small').eq(chkchk).css({
    //                 opacity: 1,
    //                 zIndex: 9999,
    //                 transition: 'none',
    //             });
    //         });
    //     }
    // });
//////////////////메인5 카드클릭//////////////////    

    $('.rd').on('click', function(){
        let chk_rd = $(this).index();
        card_start(chk_rd)             
    });    
    let tmp_timeout="";
    function card_start(chk_rd) {

        $('.sectiondcard').find('.sec_name').css({
            opacity: 0,
            left: 0,
            transition: 'all .1s linear'
        })
        $('.sectiondcard').find('.sec_name').eq(chk_rd).css({
            opacity: "1",
            position: 'absolute',
            top: '300px',
            left: '100px',
            transition: 'all .8s linear'
        });
///////////////
        $('.active_box').find('.ani_gif').css({
            transition: 'none',
            opacity:0,
            left: '13%',
        });
        $('.active_box').find('.ani_gif').eq(chk_rd).stop(true).animate({
            left: '53%',
        }, 3000).css({
            opacity: "1",
            transition: 'opacity: 0.2s',
            // zIndex: 99
        });
///////////////
        $('.big_img').find('.big_card').css({
            opacity: 0,
            transition: 'all 0.2s linear',
            zIndex: 1

        });
        $('.big_img').find('.big_card').eq(chk_rd).css({
            opacity: 1,
            transition: 'all 0.2s linear',
            zIndex: 9
        });
///////////////
        $('.big_img').find('.ani_small').css({
            opacity: 0,
            bottom: '20%',
            transition: 'all .1s linear',
            transitionDelay: '0s',
        });
        
        clearTimeout(tmp_timeout);
        let tmp_timer = 2000;
        if($(window).outerWidth() <= 1100) {
            tmp_timer = 0;
        }

        tmp_timeout=setTimeout(function(){

            $('.big_img').find('.ani_small').eq(chk_rd).css({
                opacity: 1,
                transition: 'all .5s linear',
                // transitionDelay: '2s',
                bottom: '15%',
                zIndex: 99
            });
        }, tmp_timer);
    
    
}

////////////////메인5 라이언재생 바로////////////
    let tmp = true;
    let m5_o_top = $('.main5').offset().top;
    $(window).scroll(function(){

        let s_top = $(window).scrollTop();
        if((m5_o_top - 300) <= s_top && tmp){ 
            card_start(0);
            tmp = false;
        }
        
    });


});