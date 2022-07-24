$(document).ready(function(){
       let h_o_top = $('.header').offset().top;
    
    $(window).resize(function(){
        if($(window).width() <= 960) { 
            $('.header').removeClass('header_fixed');
            $('.logo_a').removeClass('logo_a_fixed');
        }
    })
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

////////////////메인2 슬라이드업////////////
let m3_harf = $('.box').height() -200;
        // console.log(m3_harf)
        if(s_top >= m3_harf){
            // console.log(4);

            // $('.main2').css({
            //     paddingTop: 0,
            //     })
            // $('.box_init').css({
            //     opacity: 1
            // }) 
            for(let i=0; i<=$('.box_init').length; i++){
                (function(tmp_i) {
                    setTimeout(function() {
                        // console.log("tmp_i: " + tmp_i);
                        $('.box_init').eq(tmp_i).addClass('box_active');                
                    }, i * 100);
                })(i);
            };
        };
    


    });
    
// 메인2 Comma버전
/////////////// 메인배너 이미지 슬라이드 ///////////////
    // 기본 첫번째 판에 left: 0 적용
    $('.box').eq(0).css({left: 0});
    
    // 인디케이터 버튼 삽입
    let mb_count = $('.box').length;
    for(let i=0; i<mb_count; i++) {
        $('.indicator').append('<div class="circle"></div>')
    }
    $('.circle').eq(0).addClass('indi_active');
    // 인디케이터 선택시 해당 이미지 슬라이드
    $('.circle').on('click', function(){
        let curr_circle = $(this).index();
        
        if(!$(this).hasClass('indi_active')) {
            slide(curr_circle, '100%', (mb_index - 1) % mb_count, '-100%');
            mb_index = curr_circle + 1;
        }
    });


    // 좌우버튼 누르면 슬라이드 동작
    let mb_timer = 500;
    let mb_index = 1;
    $('#btn_R').on('click', function(){
        slide(mb_index % mb_count, '100%', (mb_index - 1) % mb_count, '-100%');
        mb_index+=1;
    });
    $('#btn_L').on('click', function(){
        mb_index-=1;
        slide((mb_index - 1) % mb_count, '-100%', mb_index % mb_count, '100%')
    });
    
    function slide(coming, c_pos, outing, o_pos) {
        // 들어올판
        $('.box').eq(coming).css({
            left: c_pos
        }).animate({
            left: 0
        }, mb_timer)
        // 나갈판
        $('.box').eq(outing).animate({
            left: o_pos
        }, mb_timer);

        // 인디케이터 색변경
        $('.circle').eq(coming).addClass('indi_active')
        $('.circle').eq(outing).removeClass('indi_active')
        // 버튼 초기화
        $('.btn_slide').css({pointerEvents: 'none'}) 
        setTimeout(function() {
            $('.btn_slide').css({pointerEvents: 'auto'})
        }, mb_timer);
    }

    // 자동으로 슬라이드
    let mb_interval;
    auto_slide();

    function auto_slide() {
        mb_interval = setInterval(function() {
            $('#btn_R').trigger('click')
        }, mb_timer + 2000);
    }
    // main_banner 영역에 마우스 들어가면 인터벌 멈췄다가 빠지면 다시 동작시키기
    // $('.main_banner').hover(function(){
    //     clearInterval(mb_interval);
    // }, function(){
    //     auto_slide();
    // })
});