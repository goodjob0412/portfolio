$(document).ready(function(){
        
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
        slide(count % 4, "100%", (count % 4) - 1, "-100%")
        count++;
    });
    $('#btn_L').click(function(){
        count--;
        slide((count % 4) - 1, "-100%", count % 4, "100%")
    });
    function slide(slide_in,a,slide_out,b){
        //들어오는판
        $('.banner_img').eq(slide_in).css({
            left: a
        }).animate({
            left:'0px'
        },time )
        // 나가는판
        $('.banner_img').eq(slide_out).animate({
            left: b
        },time )

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
                
    $('.indicator').click(function(){
                    $('.circle .indi_active').attr('disabled', true);

                    setTimeout(function(){
                        $('.circle .indi_active').attr('disabled',false);
                    }, time)
                });

    // 스크롤 내리면 이미지 올라오기
    var s_top;
    $(window).scroll(function(){
    s_top =$(window).scrollTop();
    
        if($('.banner1').offset().top <= s_top + ($(window).height() * 0.7)){
            $('.banner_txt').css({
                transform: 'translateX(0)', 
                opacity: '1'
            })
        } 
        else {
            $('.banner_txt').css({
                transform: 'translateX(100px)', 
                opacity: '0'
            })
        } 
        
    });  

    // 의료진 누르면  상세창 뜨기
    $('.hover_box1').click(function(){
        $('.doc_clik_Box1').css({
            display:'block'
        });

    })
    $('.hover_box2').click(function(){
        $('.doc_clik_Box2').css({
            display:'block'
        });

    })
    $('.hover_box3').click(function(){
        $('.doc_clik_Box3').css({
            display:'block'
        });

    })

     // X자 누르면 상세창 없어지기
     $('.doc_click_close').click(function(){
        $('.doc_clik_Box1').css({
            display:'none'
        });

    })
    $('.doc_click_close').click(function(){
        $('.doc_clik_Box2').css({
            display:'none'
        });

    })
    $('.doc_click_close').click(function(){
        $('.doc_clik_Box3').css({
            display:'none'
        });

    })

       // page5 상세창 
       $('.sick_hover_inner').click(function(){
        $('.doc_clik_Box').css({
            display:'block'
        });
    })

    $('.doc_click_close').click(function(){
        $('.doc_clik_Box').css({
            display:'none'
        });

    })

    $('.menu_li, .menu_pan').hover(function(){
        $('.menu_pan').css({
            height: 180,
            transition: "all 0.5s"
        })
    }, function(){
        $('.menu_pan').css({
            height: 0, 
        })
    }); 
    $('.menu_li').hover(function(){
        $('.hover_menu_ul').css({
            height: 180,
            transition: "all 0.5s"
        })
    }, function(){
        $('.hover_menu_ul').css({
            height: 0,
            transition: "all 0.5s"
        })
    });
});


