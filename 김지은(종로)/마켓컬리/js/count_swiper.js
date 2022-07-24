var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    // slidesPerView: 'auto',
    spaceBetween: 10,
    // 가운데정렬해주는애
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    autoplay: {
        delay: 3000,
    },
  });

  $('.mySwiper').hover(function(){
    // console.log(1);

    swiper.autoplay.stop()
  }, function(){
    // console.log(2);
    swiper.autoplay.start()
  })