var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets' , //'progressbar' | 'bullets' | 'fraction' | 'custom'
    },
    autoplay: {
        delay: 1000 // setInterval 같은거
    },
    speed: 1000, // 들어올때까지 걸리는 시간
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('.mySwiper').hover(function(){
    swiper.autoplay.stop()
}, function(){
    swiper.autoplay.start()
})