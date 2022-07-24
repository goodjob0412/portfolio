$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 1200, //몇 밀리초마다 새거가 들어올지 
        }, 
        speed: 1200, // 몇초만에 left 0 에 도착할지
        loop: true,
        direction: 'horizontal',// 'horizontal' or 'vertical' 
    
    
        slidesPerView: 1, // 한번에 몇개 판 보여줄지 결정, 1이상의 정수
        spaceBetween: 0, // 판마다의 거리 px
        slidesPerGroup: 1 // 한번에 몇개씩 넘어갈지 결정, 1이상의 정수 
    
    });

    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 3,
        spaceBetween: 15,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      var swiper = new Swiper('.swiper-container3', {
        slidesPerView: 2,
        spaceBetween: 15,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


})