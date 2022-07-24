$(document).ready(function(){
    // 메뉴판 고정
    

        // //메뉴바 고정시키는거  
        var h_o_top =$('.bot_header').offset().top; 

        var s_top;
          $(window).scroll(function(){
              s_top =$(window).scrollTop();
              // 스크롤 될때 헤더 고정했다가 풀었다가
              if(s_top >= h_o_top){
                 $('.bot_header').addClass('header_fixed')
                 $('.bot_logo').css({
                        display:"block"    
                    });
              }
              else{
                  $('.bot_header').removeClass('header_fixed')
                  $('.bot_logo').css({
                        display:"none"    
                    });
              }
    
            });

    //탑 부드럽게 보내는거
    $('.top_btn').click(function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);

    })

   $(window).resize(function(){
       $('.brand_box').css({
        display: 'none'
       })
   });

   $('.side_popup').click(function(){
    $('.side_popup').css({
        display: 'none'
    })

})

    // 햄버거 버튼
    var chk= true;
    $('.hamberger').click(function(){
    //X자 만들기
    if(chk){
        chk= false;
        $('#line_top').removeClass('line_top_comeback')
        $('#line_mid').removeClass('line_mid_comeback')
        $('#line_bot').removeClass('line_bot_comeback')
        
        $('#line_top').addClass('line_top')
        $('#line_mid').addClass('line_mid')
        $('#line_bot').addClass('line_bot')

        $('.ham_menu_pan').addClass('ham_menu_comein');
    }
    else{
        chk= true;
        $('#line_top').removeClass('line_top')
        $('#line_mid').removeClass('line_mid')
        $('#line_bot').removeClass('line_bot')


        $('#line_top').addClass('line_top_comeback')
        $('#line_mid').addClass('line_mid_comeback')
        $('#line_bot').addClass('line_bot_comeback')

        $('.ham_menu_pan').removeClass('ham_menu_comein');
    }

    });
});