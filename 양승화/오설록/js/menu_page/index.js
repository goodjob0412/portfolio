$(document).ready(function(){
    
    //모바일웹 
    var a = ["android", "ipad", "iphone"]; 
    for(var i = 0; i < 3; i++) {
        if(navigator.userAgent.toLowerCase().match(a[i])) {
            location.replace("mobile_menu_page.html");
        }
    }
    //어느정도 내려가면 top버튼 나오게 하기 
        var tea_box1_o_top = $('.tea_box1').offset().top;
        $(window).scroll(function(){
            if($(window).scrollTop() >= tea_box1_o_top){
                $('.top_btn').css({display: 'block'})
            }
            else{
                $('.top_btn').css({display: 'none'})
            }
        });

    $(window).resize(function(){
        $('.tea_box1').css({
            height: $('.tea_box1 tea_left_img').height()
        })
    });

    // 메뉴판 고정
    $(window).scroll(function(){
        if($(window).scrollTop() >=100){
            $('.header').css({
                position:"fixed",
                top:"0" , 
                background: "#fff"    
            });
        }
        else{
            $('.header').css({
                position:"absolote",
                top:"0"
            });
        }
    });

    // 스크롤 내리면 이미지 올라오기
    var s_top;
    $(window).scroll(function(){
    s_top =$(window).scrollTop();
    
        // 첫번째(딸기)
        if($('.tea_box1').offset().top <= s_top + ($(window).height() * 0.7)){
            $('.tea_box1 .tea_left_img').css({
                transform: 'translateY(-0)', 
                opacity: '1'
            })

            $('.tea_box1 .tea_rig_img').css({
                transform: 'translateY(-0)', 
                opacity: '1',
                transitionDelay: '0.15s'
            })
            
        } 
        else {
            $('.tea_box1 .tea_left_img').css({
                transform: 'translateY(100px)', 
                opacity: '0'
            })
            
            $('.tea_box1 .tea_rig_img').css({
                transform: 'translateY(100px)', 
                opacity: '0',
                transitionDelay: '0s'
            })
        }

        // 두번째(망고)
        if($('.tea_box2').offset().top <= s_top + ($(window).height() * 0.7)){
            $('.tea_box2 .mang_left_img').css({
                transform: 'translateY(-0)', 
                opacity: '1',
                transitionDelay: '0.15s'
            })

            $('.tea_box2 .mang_rig_img_box').css({
                transform: 'translateY(-0)', 
                opacity: '1'
            })
            
        } 
        else {
            $('.tea_box2 .mang_left_img').css({
                transform: 'translateY(100px)', 
                opacity: '0',
                transitionDelay: '0s'
            })
            
            $('.tea_box2 .mang_rig_img_box').css({
                transform: 'translateY(100px)', 
                opacity: '0'
            })
        }

        // 세번째(블루베리)
        if($('.tea_box3').offset().top <= s_top + ($(window).height() * 0.7)){
            $('.tea_box3 .tea_left_img').css({
                transform: 'translateY(-0)', 
                opacity: '1'
            })

            $('.tea_box3 .tea_rig_img').css({
                transform: 'translateY(-0)', 
                opacity: '1',
                transitionDelay: '0.15s'
            })
            
        } 
        else {
            $('.tea_box3 .tea_left_img').css({
                transform: 'translateY(100px)', 
                opacity: '0'
            })
            
            $('.tea_box3 .tea_rig_img').css({
                transform: 'translateY(100px)', 
                opacity: '0',
                transitionDelay: '0s'
            })
        }
    });

});