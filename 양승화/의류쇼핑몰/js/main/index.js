$(document).ready(function(){
    // 구매창 누르면 로그인 창 뜨기
    $('.rig_menu_li .ham_icon3').click(function(){
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

var main_count = 1;
var time = 1000;
// 이미지 슬라이드
$('#btn_R').click(function(){
    slide(main_count % 3, "100%", (main_count % 3) - 1, "-100%")
    main_count++;
});
$('#btn_L').click(function(){
    main_count--;
    slide((main_count % 3) - 1, "-100%", main_count % 3, "100%")
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
var interval1;
auto_slide()
function auto_slide(){
    interval1 = setInterval(function(){
             $('#btn_R').trigger('click');
           },  time * 4);
}


//마우스 올리면 멈추기
$('.main_banner').hover(function(){
    clearInterval(interval1)
},function(){
    auto_slide()
});

// circle누르면 이미지 이동
$('.circle').click(function(){
    if($(this).index() > $('.indi_active').index()){
        slide($(this).index(),"100%",(main_count -1) % banner_count, "-100%")
    }

    else if($(this).index() < $('.indi_active').index()){
        slide($(this).index(),"-100%",(main_count -1) % banner_count, "100%")
    }
    main_count= $(this).index() + 1;
});

$('.btn_arrow').click(function(){
                //버튼 비활성화
                $('.btn_arrow').attr('disabled', true);

                //버튼 활성화
                setTimeout(function(){
                    $('.btn_arrow').attr('disabled',false);
                }, time)
            });
            
$('.indicator').click(function(){
                $('.circle .indi_active').attr('disabled', true);

                setTimeout(function(){
                    $('.circle .indi_active').attr('disabled',false);
                }, time)
            });

// 브랜드 소개 글씨 타자기 
    var string = ['A','C','H','I','O'];

    txt_retype();
    function txt_retype(){
        
        var index = 0;
        var tmp =setInterval(function(){
            var tmp_txt = $('.brand_h2').text() + string[index++ % string.length];
            $('.brand_h2').text(tmp_txt);

            if(index >= string.length) {
                clearInterval(tmp);

                var tmp2 = setInterval(function(){
                    var tmp_txt2 = $('.brand_h2').text().substring(0, index--)
                    $('.brand_h2').text(tmp_txt2);

                    if(index < 0) {
                        clearInterval(tmp2);
                        txt_retype();
                    }
                }, 100);
            }
        }, 300)
    }

// 스크롤 내리면 브랜드 소개 들어오기
    var s_top;
    $(window).scroll(function(){
    s_top =$(window).scrollTop();
    
    
        if($('.brand_box').offset().top <= s_top + ($(window).height() * 0.7)){
            $('.brand_box .left_brand').css({
                transform: 'translateX(-0)', 
                opacity: '1'
            })

            $('.brand_box .rig_brand').css({
                transform: 'translateX(-0)', 
                opacity: '1',
                transitionDelay: '0.15s'
            })
            
        } 
        else {
            $('.brand_box .left_brand').css({
                transform: 'translateX(-100px)', 
                opacity: '0'
            })
            
            $('.brand_box .rig_brand').css({
                transform: 'translateX(100px)', 
                opacity: '0',
                transitionDelay: '0s'
            })
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
            }, time )
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