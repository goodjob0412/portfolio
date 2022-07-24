$(document).ready(function(){

    // 구매창 누르면 로그인 창 뜨기
    $('.rig_menu_li').click(function(){
        $('.back_pan').css({
            display:'block'
        });

    })
     // X자 누르면 로그인창 없어지기
     $('.login_close').click(function(){
        $('.back_pan').css({
            display:'none'
        });

    })

    // 브랜드 소개 글씨 타자기 
    var string = ['A','C','H','I','O'];

    txt_retype();
    function txt_retype(){
        
        var index = 0;
        var tmp =setInterval(function(){
            var tmp_txt = $('.top_lef_logo').text() + string[index++ % string.length];
            $('.top_lef_logo').text(tmp_txt);

            if(index >= string.length) {
                clearInterval(tmp);

                var tmp2 = setInterval(function(){
                    var tmp_txt2 = $('.top_lef_logo').text().substring(0, index--)
                    $('.top_lef_logo').text(tmp_txt2);

                    if(index < 0) {
                        clearInterval(tmp2);
                        txt_retype();
                    }
                }, 100);
            }
        }, 200)
    }


    // 스크롤 내리면 배너 올라오기
    var s_top;
    $(window).scroll(function(){
    s_top =$(window).scrollTop();
    
    //ahout_us
        if($('.mid_box').offset().top <= s_top + ($(window).height() * 0.8)){
            $('.mid_box .mid_rig_box').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })

            $('.mid_box .mid_left_box').css({
                transform: 'translateX(0)', 
                opacity: '1',
            })
            
        } 
        else {
            $('.mid_box .mid_rig_box').css({
                transform: 'translateX(200px)', 
                opacity: '0'
            })
            
            $('.mid_box .mid_left_box').css({
                transform: 'translateX(-200px)', 
                opacity: '0',
            })
        }

    // 컬렉션 박스
        if($('.bot_box').offset().top <= s_top + ($(window).height() * 0.8)){
            $('.bot_box .bot_lef_box').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })

            $('.bot_box .bot_rig_box').css({
                transform: 'translateX(0)', 
                opacity: '1',
            })
            
        } 
        else {
            $('.bot_box .bot_lef_box').css({
                transform: 'translateX(200px)', 
                opacity: '0'
            })
            
            $('.bot_box .bot_rig_box').css({
                transform: 'translateX(-200px)', 
                opacity: '0',
            })
        }
    });
});