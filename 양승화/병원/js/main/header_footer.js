$(document).ready(function(){
     
    //어느정도 내려가면 top버튼 나오게 하기 
    var shop_box_o_top = $('.main_banner').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() >= shop_box_o_top){
            $('.side_btn').css({display: 'block'})
        }
        else{
            $('.side_btn').css({display: 'none'})
        }
    });

   $(window).resize(function(){
       $('.contents1').css({
           height: $('.contents1').height()
       })
   });



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
      
