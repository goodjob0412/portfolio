$(document).ready(function () {

    // ----------------------------------------main_banner

    var swiper = new Swiper(".main_banner", {
        slidesPerView: 5, // 한번에 보여줄 칸수
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
            485: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    $('.main_banner').hover(function () {
        swiper.autoplay.stop()
    }, function () {
        swiper.autoplay.start()
    })

    // ----------------------------------------MD_PICK

    var swiper2 = new Swiper(".MD_PICK", {
        slidesPerView: 5, // 한번에 보여줄 칸수
        spaceBetween: 10, // 칸 사이사이마다의 여백
        slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'custom', //'progressbar' | 'bullets' | 'fraction' | 'custom'
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
            485: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    $(".MD_PICK").hover(function () {
        swiper2.autoplay.stop()
    }, function () {
        swiper2.autoplay.start()
    })

    // ----------------------------------------item_load

    item_load()

    function item_load(){
        for (let i = 0; i < 3; i++) {

            // ------------female
    
            let female =
                `<div class="item pos_init">
                    <div class="item_img">
                        <a href="phoibos_cate.html?cateNo=0">
                        <img src="./img/${EL_ARR[0]}/${ITEM_LIST[0][i].banner}" alt="">
                        </a>
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${ITEM_TAG_ARR[0]}</div>
                        <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
                        <div class="txt_r o_price">39,000원</div>
                        <div class="txt_r s_price">32,000원</div>
                    </div>
                </div>`
    
            $(`#female .sec_body .item_box`).append(female)
    
            // ------------male
    
            let male =
                `<div class="item pos_init">
                    <div class="item_img">
                        <a href="phoibos_cate.html?cateNo=1">
                        <img src="./img/${EL_ARR[1]}/${ITEM_LIST[1][i].banner}" alt="">
                        </a>
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${ITEM_TAG_ARR[1]}</div>
                        <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
                        <div class="txt_r o_price">39,000원</div>
                        <div class="txt_r s_price">32,000원</div>
                    </div>
                </div>`
    
            $(`#male .sec_body .item_box`).append(male)
    
            // ------------kids
    
            let kids =
                `<div class="item pos_init">
                    <div class="item_img">
                        <a href="phoibos_cate.html?cateNo=2">
                        <img src="./img/${EL_ARR[2]}/${ITEM_LIST[2][i].banner}" alt="">
                        </a>
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${ITEM_TAG_ARR[2]}</div>
                        <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
                        <div class="txt_r o_price">39,000원</div>
                        <div class="txt_r s_price">32,000원</div>
                    </div>
                </div>`
    
            $(`#kids .sec_body .item_box`).append(kids)
    
            // ------------goods
    
            let goods =
                `<div class="item pos_init">
                <div class="item_img">
                    <a href="phoibos_cate.html?cateNo=3">
                    <img src="./img/${EL_ARR[3]}/${ITEM_LIST[3][i].banner}" alt="">
                    </a>
                </div>
                <div class="item_info">
                    <div class="item_info_title">${ITEM_TAG_ARR[3]}</div>
                    <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
                    <div class="txt_r o_price">39,000원</div>
                    <div class="txt_r s_price">32,000원</div>
                </div>
            </div>`
    
            $(`#goods .sec_body .item_box`).append(goods)
    
            // ------------balance
    
            let balance =
                `<div class="item pos_init">
                <div class="item_img">
                    <a href="phoibos_cate.html?cateNo=4">
                    <img src="./img/${EL_ARR[4]}/${ITEM_LIST[4][i].banner}" alt="">
                    </a>
                </div>
                <div class="item_info">
                    <div class="item_info_title">${ITEM_TAG_ARR[4]}</div>
                    <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
                    <div class="txt_r o_price">39,000원</div>
                    <div class="txt_r s_price">32,000원</div>
                </div>
            </div>`
    
            $(`#balance .sec_body .item_box`).append(balance)
    
            // ------------balance
    
            let outlet =
                `<div class="item pos_init">
                <div class="item_img">
                    <a href="phoibos_cate.html?cateNo=5">
                    <img src="./img/${EL_ARR[5]}/${ITEM_LIST[5][i].banner}" alt="">
                    </a>
                </div>
                <div class="item_info">
                    <div class="item_info_title">${ITEM_TAG_ARR[5]}</div>
                    <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
                    <div class="txt_r o_price">39,000원</div>
                    <div class="txt_r s_price">32,000원</div>
                </div>
            </div>`
    
            $(`#outlet .sec_body .item_box`).append(outlet)
        }
    }

    // ----------------------------------------item_up

    let toChk_arr = new Array($('.toChk').length)

    for (let i = 0; i < toChk_arr.length; i++) {
        toChk_arr[i] = true
    }

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();

        let female_o_top = $(`#female`).offset().top
        let male_o_top = $(`#male`).offset().top
        let kids_o_top = $(`#kids`).offset().top
        let goods_o_top = $(`#goods`).offset().top
        let balance_o_top = $(`#balance`).offset().top
        let outlet_o_top = $(`#outlet`).offset().top

        if (toChk_arr[0] && s_bot - 200 >= female_o_top) {
            item_slideUp($('#female .pos_init'));
            toChk_arr[0] = false;
        }
        if (toChk_arr[1] && s_bot - 200 >= male_o_top) {
            item_slideUp($('#male .pos_init'));
            toChk_arr[1] = false;
        }
        if (toChk_arr[2] && s_bot - 200 >= kids_o_top) {
            item_slideUp($('#kids .pos_init'));
            toChk_arr[2] = false;
        }
        if (toChk_arr[3] && s_bot - 200 >= goods_o_top) {
            item_slideUp($('#goods .pos_init'));
            toChk_arr[3] = false;
        }
        if (toChk_arr[4] && s_bot - 200 >= balance_o_top) {
            item_slideUp($('#balance .pos_init'));
            toChk_arr[4] = false;
        }
        if (toChk_arr[5] && s_bot - 200 >= outlet_o_top) {
            item_slideUp($('#outlet .pos_init'));
            toChk_arr[5] = false;
        }
    })

    function item_slideUp(el) {
        for (let i = 0; i < el.length; i++) {
            setTimeout(function () {
                el.eq(i).toggleClass('pos_init_active')
            }, 100 * i)
        }
    }
})