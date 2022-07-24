$(document).ready(function(){

     //모바일웹 
     var a = ["android", "ipad", "iphone"]; 
     for(var i = 0; i < 3; i++) {
         if(navigator.userAgent.toLowerCase().match(a[i])) {
             location.replace("mobile_shop_page.html");
         }
     }

     //어느정도 내려가면 top버튼 나오게 하기 
     var shop_box_o_top = $('.shop_box').offset().top;
     $(window).scroll(function(){
         if($(window).scrollTop() >= shop_box_o_top){
             $('.top_btn').css({display: 'block'})
         }
         else{
             $('.top_btn').css({display: 'none'})
         }
     });

    $(window).resize(function(){
        $('.shop_box').css({
            height: $('.shop_box shop_box_text').height()
        })
    });

// 더보기 버튼 누르면 사진들 나오는거
    $('.shop_box').eq(0).css({display: 'block'});
    var shop_box_count = $('.shop_box').length;

    console.log(shop_box_count);

    var tmp_count = 1;
    $('.plus_btn').click(function(){
        $('.shop_box').eq(tmp_count).css({display: "block"})
        tmp_count+=1;

        if(tmp_count >= shop_box_count) { 
            $('.plus_btn').css({display: 'none'})
        }
    });

     // 베스트 상품 슬라이드
     var box_width = $('.best_menu_box').outerWidth();
     var box_count = $('.best_menu_box').length;
     
     ///현재 보고 있는거
     var count = 0;
 
     var time =1000;
     var return_count = box_width * (box_count -1)
 
     
     //박스 옆으로 나열
     for(var i=0; i < box_count; i++){
         $('.best_menu_box').eq(i).css({left: i * box_width})
     }; 
 
 
     //오른쪽 버튼
     $('#right_btn2').click(function(){
         //들어오는거
         $('.best_menu_box').animate({
             left:"-="+box_width
         }, time * 2)
         //특정번째꺼만 반대방향 끝으로 이동
         $('.best_menu_box').eq(count % box_count).animate({
             left: return_count
         },0)
 
         count+=1;
     });
 
     //왼쪽 버튼
     $('#left_btn2').click(function(){
         count -=1;
         //특정번째꺼만 오른쪽 끝으로 이동
         $('.best_menu_box').eq(count % box_count).animate({
             left: -1 * box_width
         },0)
         //box둘다 오른쪾으로 box의 가로만큼 이동
         $('.best_menu_box').animate({
             left:"+="+box_width
         }, time * 2)
     });  
 
     //자동으로 슬라이드 시작
    var interval;
     auto_slide()
     function auto_slide(){
         interval = setInterval(function(){
                $('#right_btn2').trigger('click');
            },  time *2);
     }
 
     //마우스 올리면 멈추기
     $('.rig_bot_menu_box').hover(function(){ 
        clearInterval(interval);
         
     },function(){
         auto_slide()
     });
})