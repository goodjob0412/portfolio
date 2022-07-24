$(document).ready(function(){
     //어느정도 내려가면 top버튼 나오게 하기 
        var tea_box_o_top = $('.tea_box').offset().top;
        $(window).scroll(function(){
            if($(window).scrollTop() >= tea_box_o_top){
                $('.top_btn').css({display: 'block'})
            }
            else{
                $('.top_btn').css({display: 'none'})
            }
        });

        $(window).resize(function(){
            $('.tea_box').css({
                height: $('.tea_box tea_ul').height()
            })
        });

    // 메인배너 이미지 슬라이드
    
    $('.banner_img').eq(0).css({
        left:'0px'
    })

    // 인디케이터 판 개수만큼 생성
    var banner_count = $('.banner_img').length;

    for(var i=0; i < banner_count; i++){
        $('.indicator').append('<div class="circle"></div>')
    }
    $('.circle').eq(0).addClass('indi_active')

    var count = 1;
    var time = 1000;
    // 이미지 슬라이드
    $('#btn_R').click(function(){
        slide(count % 3, "100%", (count % 3) - 1, "-100%")
        count++;
    });
    $('#btn_L').click(function(){
        count--;
        slide((count % 3) - 1, "-100%", count % 3, "100%")
    });
    function slide(slide_in,a,slide_out,b){
         //들어오는판
         $('.banner_img').eq(slide_in).css({
            left: a
        }).animate({
            left:'0px'
        },time)
        // 나가는판
        $('.banner_img').eq(slide_out).animate({
            left: b
        },time)

          //인디케이터
        $('.circle').eq(slide_out).removeClass('indi_active');
        $('.circle').eq(slide_in).addClass('indi_active');

        
    }

    //자동으로 슬라이드 시작
    var interval;
    auto_slide()
    function auto_slide(){
        interval = setInterval(function(){
                 $('#btn_R').trigger('click');
               },  time * 3);
    }

    //마우스 올리면 멈추기
    $('.main_banner').hover(function(){
        clearInterval(interval)
    },function(){
        auto_slide()
    });

    // circle누르면 이미지 이동
    $('.circle').click(function(){
        if($(this).index() > $('.indi_active').index()){
            slide($(this).index(),"100%",(count -1) % banner_count, "-100%")
        }

        else if($(this).index() < $('.indi_active').index()){
            slide($(this).index(),"-100%",(count -1) % banner_count, "100%")
        }
        count= $(this).index() + 1;
    });

    $('.btn_arrow').click(function(){
                    //버튼 비활성화
                    $('.btn_arrow').attr('disabled', true);

                    //버튼 활성화
                    setTimeout(function(){
                        $('.btn_arrow').attr('disabled',false);
                    }, time)
                });

});


// 배너 글씨 올라오기
var s_top;
$(window).scroll(function(){
s_top =$(window).scrollTop();

    if($('.mini_banner1').offset().top <= s_top && s_top < $('.mini_banner1').offset().top+ $(window).height()){
        $('.banner_slide').css({
            transform: 'translateY(-50%)', 
            opacity: '1'
        })
    }
    else{
        $('.banner_slide').css({
            transform: 'translateY(100%)', 
            opacity: '0'
        })
    }

});