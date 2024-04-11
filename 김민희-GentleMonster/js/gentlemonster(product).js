$(document).ready(function () {

  // 로고 SVG -> PRODUCT 화면에서 BLACK으로 색상변경
  $('.h_svg').attr('fill', 'black')
  // 검색 SVG -> PRODUCT 화면에서 BLACK으로 색상변경
  $('.search_svg').attr('style', 'fill:#000')


  // SWIPER 버튼 눌러서 옆으로 넘기기
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // SWIPER 무한루프
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    spaceBetween: 8,
    // centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 4,
          spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 5,
          spaceBetween: 6
      },
      // when window width is >= 640px
      768: {
          slidesPerView: 7,
          spaceBetween: 8
      },
      // when window width is >= 1600
      1024: {
          slidesPerView: 8,
          spaceBetween: 8
      }
    }
  });


  // ITEM LIST LOAD
  let cateNo = get_info_from_url("cateNo")

  $('.sec').attr('id', `${EL_ARR[cateNo]}`)
  $('.sec_title').text(`${PAGENAME_ARR[cateNo]}`)

  load_item(cateNo, 10)

  // 무한스크롤
  let f_o_top = $('.footer_container').offset().top;
  $(window).scroll(() => {
    let sc_top = $(window).scrollTop();
    let sc_bot = sc_top + $(window).height();
    f_o_top = $('.footer_container').offset().top;

    if (sc_bot - 200 >= f_o_top) {
      load_item(cateNo, 10);
    }

  });

  // 제품명 옆 하트 버튼 누르면 빨간색하트로 바뀜, 다시누르면 빨간색 빠짐
  // $('.heart_svg').click(function(){
  $(document).on('click','.heart_svg', function(){
    console.log($(this))
    if($(this).children('.heart_color').attr('fill')=="none") {
      $(this).children('.heart_color').attr('fill','red')
    }
    else {
      $(this).children('.heart_color').attr('fill','none')
    }

})


})