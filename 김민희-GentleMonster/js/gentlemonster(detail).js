let cateNo = get_info_from_url("cateNo")
let itemNo = get_info_from_url("itemNo") - 1


$(document).ready(function () {
    // 로고 SVG -> PRODUCT 화면에서 BLACK으로 색상변경
    $('.h_svg').attr('fill', 'black')
    // 검색 SVG -> PRODUCT 화면에서 BLACK으로 색상변경
    $('.search_svg').attr('style', 'fill:#000')

    $(".d_sec_desc").first().show()
    // 제품세부 등등 클릭하면 열리도록
    $(".d_sec_top").click(function () {
        $(".d_sec_desc").slideUp();
        $(this).next(".d_sec_desc").stop().toggle(0);
    });

    function load_img(qty) {
        let img_list = '';

        for (let i = 1; i <= qty; i++) {
            img_list += `<div class="d_img_box">
                            <img class="d_img_item" src="./img/items/${EL_ARR[cateNo]}/${(ITEM_LIST[cateNo][itemNo].src).split(",")[i]}" alt="">
                        </div>`;
        }
        return img_list;
    }



    function load_img_768(qty) {
        let img_list = '';

        for (let i = 1; i <= qty; i++) {
            img_list += `<div class="d_img_box swiper-slide">
            <img class="d_img_item" src="./img/items/${EL_ARR[cateNo]}/${(ITEM_LIST[cateNo][itemNo].src).split(",")[i]}" alt="">
        </div>`;
        }
        return img_list;
    }


    if (cateNo == 0) {
        $('.detail_container').find('.d_img_wrap').append(load_img(6));
        $('.detail_container_768').find('.d_img_wrap').append(load_img_768(6));
    }
    else if (cateNo == 1) {
        $('.detail_container').find('.d_img_wrap').append(load_img(5));
        $('.detail_container_768').find('.d_img_wrap').append(load_img_768(5));
    }



    let desc = `<span>젠틀몬스터의 2024년 컬렉션을 통해 선보이는 ${ITEM_LIST[cateNo][itemNo].title} 선글라스를 소개합니다. 현대적인 터치를 담은 스퀘어 실루엣에 솔리드한 화이트 컬러와 그레이 미러
    렌즈의 조화가 세련된 무드를 선사하며, 템플에 결합된 메탈 아이콘 디테일이 돋보이는 아이템입니다.</span>`

    $('.d_info_desc').append(desc)

    let detail_name = `<h2>${ITEM_LIST[cateNo][itemNo].title}</h2>
    <h4>&#8361;&nbsp;${comma(ITEM_LIST[cateNo][itemNo].price)}원</h4>`

    $('.d_info_title').append(detail_name)
})


