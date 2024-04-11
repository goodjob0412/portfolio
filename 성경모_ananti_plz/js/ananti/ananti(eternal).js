$(document).ready(function(){
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


   let eternal_h = $(window).height()

   let eternal_w = $(window).width()

   let e_aside_w = $('.e_aside').width()

   console.log(eternal_h)
   console.log(eternal_w)
   console.log(e_aside_w)

   $('.e_aside').css({
        height : eternal_h
   })

   $('.eternal_container').css({
    height : eternal_h
    })

    // $('.eternal_container2').css({
    //     top : eternal_h - 80
    // })

    // $('.eternal_container3').css({
    //     top : 2*(eternal_h - 80)
    // })

    // let eternal_container_length = $('.eternal_container').length

    for(let i = 2; i < 7; i++){
        $(`.eternal_container${i}`).css({
            top : (eternal_h)*(i-1)
        })
    }

    
    let one_page_H = $(window).innerHeight()

    $('.one_page').css({
        height : one_page_H
    })


    $('.eternal_container').on('mousewheel DOMMouseScroll', function(){
        let dir = event.wheelDelta // 음수면 아래, 양수면 위
        let o_top;
        // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
        if(dir < 0) { 
            if($(this).next().length > 0) { 
                o_top = $(this).next().offset().top
            }
        }
        else if(dir > 0) { 
            if($(this).prev().length > 0) {
                o_top = $(this).prev().offset().top
            }
        }
        
        $('html, body').stop(true).animate({
            scrollTop: o_top
        }, 500)
    });

    let eternal_move_top = `<div class="move_top_eternal">
                                <img src="./img/ananti/gangnam/icon-top__gray.svg" alt="">
                            </div>`

    $('.eternal_container').append(eternal_move_top)
    

    $('.move_top_eternal').click(function(){
        $('html').animate({scrollTop : 0},1000)
    })

    $('.e_header_short_nav_items li').hover(function(){

        let e_header_short_nav_items_li_length = $('.e_header_short_nav_items li a').length

        for(let i =0; i<e_header_short_nav_items_li_length; i++){
            $('.e_header_short_nav_items li a').removeClass('nav_item_active')
        }

        $('.e_header_short_nav_items li a').eq($(this).index()).addClass('nav_item_active')

        let plz = ($(this)).hasClass('e_short_img_box')

        if(plz == false){

        $('.e_header_100').css({
            display : 'block'
        })

        $('.divider_L_dn').css({
            display :'block'
        })

        $('.e_header_short_nav').css({
            borderLeft : 'none'
        })

        $('.divider_L_dn').css({display : 'none'})

    }


    },function(){
        $('.e_header_short_nav_items li a').removeClass('nav_item_active')
        $('.e_header_100').css({
            display : 'none'
        })

        
        $('.e_header_short_nav').css({
            borderLeft : '2px solid'
        })

        $('.divider_L_dn').css({display : 'block'})
    })

    $('.e_header_nav_pan').hover(function(){
        $('.e_header_100').css({
            display : 'block'
        })

        $('.e_header_short_nav').css({
            borderLeft : 'none'
        })

        $('.divider_L_dn').css({display : 'none'})


    },function(){
        $('.e_header_100').css({
            display : 'none'
        })

        $('.e_header_short_nav').css({
            borderLeft : '2px solid'
        })

        $('.divider_L_dn').css({display : 'block'})
    })

    
   
})