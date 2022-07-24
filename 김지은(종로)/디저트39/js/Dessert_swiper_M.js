var swiper = new Swiper(".mySwiper", {
  loop: true,
  // slidesPerView: 5,
  slidesPerView: 'auto',
  spaceBetween: 10,
  // 가운데정렬해주는애
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
      delay: 5000,
  },
 
});