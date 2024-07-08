$(document).ready(function () {
    let cateNo = get_info_from_url("cateNo")

    if (cateNo != null) {

    // ------------------------------mb_swiper

        let mb_swiper = `
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="#"><img src="./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][0].banner}" alt=""></a>
                    <div class="mb_txt_box">
                    <span class="mb_txt1">${ITEM_TAG_ARR[cateNo]}</span><br>
                    <span class="mb_txt2">PhΦoibos</span><br>
                    </div>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][1].banner}" alt=""></a>
                    <div class="mb_txt_box">
                    <span class="mb_txt1">${ITEM_TAG_ARR[cateNo]}</span><br>
                    <span class="mb_txt2">PhΦoibos</span><br>
                    </div>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][2].banner}" alt=""></a>
                    <div class="mb_txt_box">
                    <span class="mb_txt1">${ITEM_TAG_ARR[cateNo]}</span><br>
                    <span class="mb_txt2">PhΦoibos</span><br>
                    </div>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][3].banner}" alt=""></a>
                    <div class="mb_txt_box">
                    <span class="mb_txt1">${ITEM_TAG_ARR[cateNo]}</span><br>
                    <span class="mb_txt2">PhΦoibos</span><br>
                    </div>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][4].banner}" alt=""></a>
                    <div class="mb_txt_box">
                    <span class="mb_txt1">${ITEM_TAG_ARR[cateNo]}</span><br>
                    <span class="mb_txt2">PhΦoibos</span><br>
                    </div>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][5].banner}" alt=""></a>
                    <div class="mb_txt_box">
                    <span class="mb_txt1">${ITEM_TAG_ARR[cateNo]}</span><br>
                    <span class="mb_txt2">PhΦoibos</span><br>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
    
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>`

        $(`.main_banner`).append(mb_swiper)

        var swiper = new Swiper(".main_banner", {
            slidesPerView: 3, // 한번에 보여줄 칸수
            spaceBetween: 10, // 칸 사이사이마다의 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: 'progressbar', //'progressbar' | 'bullets' | 'fraction' | 'custom'
            },
            autoplay: {
                delay: 3000 // setInterval 같은거
            },
            speed: 1000, // 들어올때까지 걸리는 시간
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                550: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });

        $('.main_banner').hover(function () {
            swiper.autoplay.stop()
        }, function () {
            swiper.autoplay.start()
        })

    // ------------------------------item

        $('.sec').attr('id', `${EL_ARR[cateNo]}`)
        $('.sec_title').text(`${PAGENAME_ARR[cateNo]}`)

        load_item(cateNo, 5)
    }
    else {
        alert("잘못된 접근입니다.")
        location.replace(`phoibos_main.html`)
    }

    // ------------------------------item


    let f_o_top = $('.footer').offset().top
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();

        f_o_top = $('.footer').offset().top

        $(document).resize(function(){
            let item_w = $(`.item`).width()
        })

        if(s_bot + 550 >= f_o_top) {
            load_item(cateNo, 5)
        }
    });

})