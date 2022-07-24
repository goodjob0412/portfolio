$(document).ready(function(){
      //색상 누르면 사진 변경
      $('.color_chip2').click(function(){
        $('big_buy_img').css({
            background:'url(../../img/page4/main_img2.jpg)'
        });

    })
// 오른쪽 팝업 이미지 슬라이드
    
        $('.popup').eq(0).css({
            left:'0px'
        })

        // 인디케이터 판 개수만큼 생성
        var banner_count = $('.popup').length;

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
            $('.popup').eq(slide_in).css({
                left: a
            }).animate({
                left:'0px'
            },time)
            // 나가는판
            $('.popup').eq(slide_out).animate({
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
        $('.right_popup').hover(function(){
            clearInterval(interval1)
        },function(){
            auto_slide()
        });

        //탑 부드럽게 보내는거
    $('.page4_top_btn').click(function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);

    })
     //어느정도 내려가면 
    var side_btn_top = $('.banner').offset().top;
   
    $(window).scroll(function(){
        if($(window).scrollTop() >= side_btn_top){
            $('.page4_top_btn').css({opacity: '1'})
        }
        else{
            $('.page4_top_btn').css({opacity: '0'})
        }
        
    });

    //메뉴 클릭시 부드럽게 이동
    $('.move_menu').click(function(){

        var href= $(this).attr('href');
        var o_ops = $(href).offset().top
       
         $('html, body').animate({
             scrollTop:o_ops
         },1000);
    });
    // 구매창 누르면 로그인 창 뜨기
    $('.buy_btn , .mini_btn , .rig_menu_li').click(function(){
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

    // 색상 변경
    $('.buy_color').click(function(){
        $('.bot_name').css({
            display:'block'
        });
    })

    $('.buy_color').click(function(){
        $('.color_btn').removeClass('chip_active');
        $('.color_btn').eq($(this).index()).addClass('chip_active');
    })

});
    // 클릭하면 갯수 변경
    function minus(){
        document.getElementById('txt_price').value = Number(document.getElementById('txt_price').value) + 1;

        document.getElementsByClassName('num_pri')[0].innerHTML = numberWithCommas(txt_price.value * 78500) +"원";

        document.getElementsByClassName('last_price')[0].innerText = "총 상품금액(수량): "+numberWithCommas(txt_price.value * 78500)+"원 ("+Number(document.getElementById('txt_price').value) +"개)";
        
    }
    function plus(){ 
        var txt_price= document.getElementById('txt_price');

        if(txt_price.value > 1) {


            txt_price.value= Number(txt_price.value) - 1;
            
            document.getElementsByClassName('num_pri')[0].innerHTML =numberWithCommas(txt_price.value * 78500) +"원";
            
            document.getElementsByClassName('last_price')[0].innerText = "총 상품금액(수량): "+numberWithCommas(txt_price.value * 78500)+"원 ("+Number(document.getElementById('txt_price').value) +"개)";
            
        }
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
