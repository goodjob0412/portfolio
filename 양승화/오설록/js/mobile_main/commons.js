$(document).ready(function(){
     //top버튼 자연스럽게
     $('.top_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },1000);
   });

});
