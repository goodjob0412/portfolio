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
    
    
    //어느정도 내려가면 사이드 팝업 나오게 하기
    // var side_btn_top = $('.brand_box').offset().top;
    var side_btn_bot = $('.fot_banner').offset().top;
   
    $(window).scroll(function(){
        // if($(window).scrollTop() >= side_btn_top){
        //     $('.side_popup').css({opacity: '1'})
        // }
        // else{
        //     $('.side_popup').css({opacity: '0'})
        // }
        
        if($(window).scrollTop() >= side_btn_bot){
            $('.side_popup').css({opacity: '0'})
        }
        else{
            $('.side_popup').css({opacity: '1'})
        }
    });
    // 스크롤 내리면 배너 글씨 올라오기
    var s_top;
    $(window).scroll(function(){
    s_top =$(window).scrollTop();
    
    
        if($('.fot_banner').offset().top <= s_top + ($(window).height() * 0.7)){
            $('.fot_banner .fot_banner_txt').css({
                transform: 'translateY(-50%)', 
                opacity: '1'
            })
            
        } 
        else {
            $('.fot_banner .fot_banner_txt').css({
                transform: 'translateY(0%)', 
                opacity: '0'
            })
        }

    });


// 리뷰 상품 슬라이드
    
    var review_width = $('.rev_img_box').outerWidth();
    var review_count = $('.rev_img_box').length;
            
    ///현재 보고 있는거
    var count = 0;

    var time =1000;
    var return_count = (review_width + 10) * (review_count -1)

            
    //박스 옆으로 나열
    for(var i=0; i < review_count; i++){
        console.log("i: " + i +", " + ((i * (review_width+ 10)) ));
        if(i == 0) {                    
            $('.rev_img_box').eq(i).css({left: (i * review_width)})
        }
        else {
            $('.rev_img_box').eq(i).css({left: i * (review_width + 10)})
        }

    }; 

    $(window).resize(function(){
        clearInterval(interval2);
        // 리뷰 상품 슬라이드
        count = 0;
        review_width = $('.rev_img_box').outerWidth(); 
        return_count = (review_width + 10) * (review_count -1);
                
        //박스 옆으로 나열
        for(var i=0; i < review_count; i++){
            console.log("i: " + i +", " + ((i * (review_width+ 10)) ));
            if(i == 0) {                    
                $('.rev_img_box').eq(i).css({left: (i * review_width)})
            }
            else {
                $('.rev_img_box').eq(i).css({left: i * (review_width + 10)})
            }

        }; 

        review_slide()
    });


    //오른쪽 버튼
    $('#right_btn').click(function(){
        //들어오는거
        $('.rev_img_box').animate({
            left:"-="+(review_width + 10)
        }, time)
        //특정번째꺼만 반대방향 끝으로 이동
        $('.rev_img_box').eq(count % review_count).animate({
            left: return_count
        },0)

        count+=1;
    });

    //왼쪽 버튼
    $('#left_btn').click(function(){
        count -=1;
            //특정번째꺼만 오른쪽 끝으로 이동
            $('.rev_img_box').eq(count % review_count).animate({
                left: -1 * (review_width + 10)
            },0)
            //박스 둘다  오른쪽으로 박스의 가로만큼 이동
            $('.rev_img_box').animate({
                left:"+="+(review_width + 10)
            }, time)
    }); 

    //자동으로 슬라이드 시작
        var interval2;
        review_slide()
        function review_slide(){
            // if(window.outerWidth >= 1024) {
                interval2 = setInterval(function(){
                    $('#right_btn').trigger('click');
                },  time * 2);
            // }
        }

    //마우스 올리면 멈추기
        $('.review_box').hover(function(){
            clearInterval(interval2)
        },function(){
            review_slide()
        });
});