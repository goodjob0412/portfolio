const ITEM_LIST = [
    // 선글라스 / 전체보기
    [
        { item_no: 1, src: '1.jpg,1-1.jpg,1-2.jpg,1-3.jpg,1-4.jpg,1-5.jpg,1-6.jpg', title: '몬타 01', price: 370000 },
        { item_no: 2, src: '2.jpg,2-1.jpg,2-2.jpg,2-3.jpg,2-4.jpg,2-5.jpg,2-6.jpg', title: '몬타 GC10', price: 380000 },
        { item_no: 3, src: '3.jpg,3-1.jpg,3-2.jpg,3-3.jpg,3-4.jpg,3-5.jpg,3-6.jpg', title: '몬타 RC6', price: 230000 },
        { item_no: 4, src: '4.jpg,4-1.jpg,4-2.jpg,4-3.jpg,4-4.jpg,4-5.jpg,4-6.jpg', title: '몬타 W2', price: 450000 },
        { item_no: 5, src: '5.jpg,5-1.jpg,5-2.jpg,5-3.jpg,5-4.jpg,5-5.jpg,5-6.jpg', title: '논 01', price: 320000 },
        { item_no: 6, src: '6.jpg', title: '논 G12', price: 320000 },
        { item_no: 7, src: '7.jpg', title: '논 GR7', price: 320000 },
        { item_no: 8, src: '8.jpg', title: '논 T1', price: 320000 },
        { item_no: 9, src: '9.jpg', title: '아본 01', price: 320000 },
        { item_no: 10, src: '10.jpg', title: '아본 RC6', price: 320000 },
        { item_no: 11, src: '11.jpg', title: '아본 W2', price: 320000 },
        { item_no: 12, src: '12.jpg', title: '아본 GR8', price: 320000 },
        { item_no: 13, src: '13.jpg', title: '아템포 01', price: 345000 },
        { item_no: 14, src: '14.jpg', title: '아템포 G12', price: 345000 },
        { item_no: 15, src: '15.jpg', title: '아템포 Y5', price: 345000 },
        { item_no: 16, src: '16.jpg', title: '아템포 G13', price: 345000 },
        { item_no: 17, src: '17.jpg', title: '엄버 01', price: 320000 },
        { item_no: 18, src: '18.jpg', title: '엄버 BLC7', price: 320000 },
        { item_no: 19, src: '19.jpg', title: '엄버 PC9', price: 320000 },
        { item_no: 20, src: '20.jpg', title: '엄버 W2', price: 320000 },
        { item_no: 21, src: '21.jpg', title: '누보 01', price: 259000 },
        { item_no: 22, src: '22.jpg', title: '누보 G3', price: 259000 },
        { item_no: 23, src: '23.jpg', title: '누보 GR8', price: 259000 },
        { item_no: 24, src: '24.jpg', title: '누보 01(V)', price: 259000 },
        { item_no: 25, src: '25.jpg', title: '알란 01', price: 280000 },
        { item_no: 26, src: '26.jpg', title: '알란 K2', price: 280000 },
        { item_no: 27, src: '27.jpg', title: '알란 Y9', price: 330000 },
        { item_no: 28, src: '28.jpg', title: '로우 01', price: 259000 },
        { item_no: 29, src: '29.jpg', title: '로우 Y9', price: 259000 },
        { item_no: 30, src: '30.jpg', title: '로우 W2', price: 70000 },
        { item_no: 31, src: '31.jpg', title: '로우 WC7', price: 259000 },
        { item_no: 32, src: '32.jpg', title: '린 01', price: 259000 },
        { item_no: 33, src: '33.jpg', title: '린 GR8', price: 259000 },
        { item_no: 34, src: '34.jpg', title: '린 V3', price: 259000 },
        { item_no: 35, src: '35.jpg', title: '린 G12', price: 259000 },
        { item_no: 36, src: '36.jpg', title: '린 W2', price: 259000 },
        { item_no: 37, src: '37.jpg', title: '피어X 01', price: 360000 },
        { item_no: 38, src: '38.jpg', title: '피어X GR9', price: 360000 },
        { item_no: 39, src: '39.jpg', title: '피어X G13', price: 360000 },
        { item_no: 40, src: '40.jpg', title: '커프 01', price: 370000 },
        { item_no: 41, src: '41.jpg', title: '커프 S01', price: 370000 },
        { item_no: 42, src: '42.jpg', title: '커프 SPC9', price: 370000 },
        { item_no: 43, src: '43.jpg', title: 'Ex S01', price: 420000 },
        { item_no: 44, src: '44.jpg', title: 'Ex SG13', price: 420000 },
        { item_no: 45, src: '45.jpg', title: 'Ex SR13', price: 420000 },
        { item_no: 46, src: '46.jpg', title: '리미트리스 S01', price: 390000 },
        { item_no: 47, src: '47.jpg', title: '리미트리스 SY9', price: 390000 },
        { item_no: 48, src: '48.jpg', title: '리미트리스 SPC9', price: 390000 },
        { item_no: 49, src: '49.jpg', title: 'TTL 01', price: 380000 },
        { item_no: 50, src: '50.jpg', title: 'TTL 02', price: 380000 },
        { item_no: 51, src: '51.jpg', title: 'TTA 01', price: 300000 },
        { item_no: 52, src: '52.jpg', title: 'TTA G3', price: 300000 },
        { item_no: 53, src: '53.jpg', title: 'TTA GR8', price: 300000 },
        { item_no: 54, src: '54.jpg', title: 'TTA 01(V)', price: 300000 },
        { item_no: 55, src: '55.jpg', title: '젤라티 G12', price: 70000 },
        { item_no: 56, src: '56.jpg', title: '젤라티 01', price: 259000 },
        { item_no: 57, src: '57.jpg', title: '젤라티 W3', price: 259000 },
        { item_no: 58, src: '58.jpg', title: '젤라티 MG4', price: 259000 },
        { item_no: 59, src: '59.jpg', title: '다다 01', price: 340000 }
    ],
    [   // 안경 / 전체보기
        { item_no: 1, src: '1.jpg,1-1.jpg,1-2.jpg,1-3.jpg,1-4.jpg,1-5.jpg', title: '에고 01', price: 2370000 },
        { item_no: 2, src: '2.jpg,2-1.jpg,2-2.jpg,2-3.jpg,2-4.jpg,2-5.jpg', title: '본조 RC6', price: 1330000 },
        { item_no: 3, src: '3.jpg,3-1.jpg,3-2.jpg,3-3.jpg,3-4.jpg,3-5.jpg', title: '조디악 GR8', price: 890000 },
        { item_no: 4, src: '4.jpg,4-1.jpg,4-2.jpg,4-3.jpg,4-4.jpg,4-5.jpg', title: '마틴 W2', price: 20000 },
        { item_no: 5, src: '5.jpg,5-1.jpg,5-2.jpg,5-3.jpg,5-4.jpg,5-5.jpg', title: '가타 01', price: 670000 },
        { item_no: 6, src: '6.jpg', title: '가타 G12', price: 320000 },
        { item_no: 7, src: '7.jpg', title: '가타 GR7', price: 320000 },
        { item_no: 8, src: '8.jpg', title: '가타 T1', price: 320000 },
        { item_no: 9, src: '9.jpg', title: '본조 01', price: 320000 },
        { item_no: 10, src: '10.jpg', title: '에고 GC10', price: 320000 },
        { item_no: 11, src: '11.jpg', title: '본조 W2', price: 320000 },
        { item_no: 12, src: '12.jpg', title: '본조 GR8', price: 320000 },
        { item_no: 13, src: '13.jpg', title: '론 01', price: 345000 },
        { item_no: 14, src: '14.jpg', title: '론 G12', price: 345000 },
        { item_no: 15, src: '15.jpg', title: '론 Y5', price: 345000 },
        { item_no: 16, src: '16.jpg', title: '모나코 G13', price: 345000 },
        { item_no: 17, src: '17.jpg', title: '모나코 01', price: 320000 },
        { item_no: 18, src: '18.jpg', title: '모나코 BLC7', price: 320000 },
        { item_no: 19, src: '19.jpg', title: '모나코 PC9', price: 320000 },
        { item_no: 20, src: '20.jpg', title: '멧 W2', price: 320000 },
        { item_no: 21, src: '21.jpg', title: '멧 01', price: 259000 },
        { item_no: 22, src: '22.jpg', title: '멧 G3', price: 259000 },
        { item_no: 23, src: '23.jpg', title: '에고 RC2', price: 259000 },
        { item_no: 24, src: '24.jpg', title: '조디악 01(V)', price: 259000 },
        { item_no: 25, src: '25.jpg', title: '조디악 01', price: 280000 },
        { item_no: 26, src: '26.jpg', title: '조디악 K2', price: 280000 },
        { item_no: 27, src: '27.jpg', title: '마틴 Y9', price: 330000 },
        { item_no: 28, src: '28.jpg', title: '마틴 01', price: 259000 },
        { item_no: 29, src: '29.jpg', title: '마틴 Y9', price: 259000 },
        { item_no: 30, src: '30.jpg', title: '에고 W2', price: 70000 },
        { item_no: 31, src: '31.jpg', title: '로우 WC7', price: 259000 },
        { item_no: 32, src: '32.jpg', title: '아토믹 01', price: 259000 },
        { item_no: 33, src: '33.jpg', title: '아토믹 GR8', price: 259000 },
        { item_no: 34, src: '34.jpg', title: '아토믹 V3', price: 259000 },
        { item_no: 35, src: '35.jpg', title: '아토믹 G12', price: 259000 },
        { item_no: 36, src: '36.jpg', title: '린 틴2', price: 259000 },
        { item_no: 37, src: '37.jpg', title: '피틴X 01', price: 360000 },
        { item_no: 38, src: '38.jpg', title: '피어X GR9', price: 360000 },
        { item_no: 39, src: '39.jpg', title: '피어X G13', price: 360000 },
        { item_no: 40, src: '40.jpg', title: '커프 01', price: 370000 },
        { item_no: 41, src: '41.jpg', title: '커프 S01', price: 370000 },
        { item_no: 42, src: '42.jpg', title: '커프 SPC9', price: 370000 },
        { item_no: 43, src: '43.jpg', title: '무아 S01', price: 420000 },
        { item_no: 44, src: '44.jpg', title: '무아 SG13', price: 420000 },
        { item_no: 45, src: '45.jpg', title: '무아 SR13', price: 420000 },
        { item_no: 46, src: '46.jpg', title: '써드 카인드 S01', price: 390000 },
        { item_no: 47, src: '47.jpg', title: '써드 카인드 SY9', price: 390000 },
        { item_no: 48, src: '48.jpg', title: '써드 카인드 SPC9', price: 390000 },
        { item_no: 49, src: '49.jpg', title: '에반 01', price: 380000 },
        { item_no: 50, src: '50.jpg', title: '에반 02', price: 380000 },
        { item_no: 51, src: '51.jpg', title: '에반 01', price: 300000 },
        { item_no: 52, src: '52.jpg', title: '에반 G3', price: 300000 },
        { item_no: 53, src: '53.jpg', title: '안나 GR8', price: 300000 },
        { item_no: 54, src: '54.jpg', title: '안나 01(V)', price: 300000 },
        { item_no: 55, src: '55.jpg', title: '베카 G12', price: 70000 },
        { item_no: 56, src: '56.jpg', title: '베카 01', price: 259000 },
        { item_no: 57, src: '57.jpg', title: '베카 W3', price: 259000 },
        { item_no: 58, src: '58.jpg', title: '베카 MG4', price: 259000 },
        { item_no: 59, src: '59.jpg', title: '노이저 BRC13', price: 340000 },
        { item_no: 60, src: '60.jpg', title: '레베카 KT1', price: 340000 }
    ]

]

// 배열로 정리
const EL_ARR = ['sunglasses', 'glasses', 'collaboration', 'style', 'brand', 'store', 'service'];
const PAGENAME_ARR = ['SUNGLASSES', 'GLASSES', 'COLLABORATION', 'STYLE', 'BRAND', 'STORE', 'SERVICE']

// 특정 위치에 특정 개수만큼 li(item)들 넣어주기
function load_item(cate, qty) {
    let curr_count = $(`#${EL_ARR[cate]} .item_box > li.item`).length;
    let last_no = curr_count + qty;

    let limitNo = ITEM_LIST[cate].length;
    if (last_no > limitNo) {
        last_no = limitNo;
    }

    for (let i = curr_count; i < last_no; i++) {
        let tmp = ITEM_LIST[cate][i];

        let tmp_list = `
                <li class="item pos_init">
                    <div class="item_img">
                        <a href="gentlemonster(detail).html?cateNo=${cate}&itemNo=${ITEM_LIST[cate][i].item_no}">
                            <img src="./img/items/${EL_ARR[cate]}/${tmp.src.split(",")[0]}" alt=""> 
                        </a>
                    </div>
                    <div class="item_info">
                        <a href="gentlemonster(detail).html?cateNo=${cate}&itemNo=${ITEM_LIST[cate][i].item_no}">
                            <div class="item_info_L">
                                <div class="item_info_title">${tmp.title}</div>
                                <div class="price">${comma(tmp.price)}원</div>
                            </div>
                        </a>
                        <div class="item_info_R">
                            <div class="heart">
                                <svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" xml:space="preserve" class="heart_svg">
                                <path fill="none" stroke-miterlimit="10" d="M27.4,9.4c-0.4-3.3-3.2-5.9-6.6-5.9c-2.5,0-4.6,1.3-5.8,3.3
                                     c-1.2-2-3.3-3.3-5.8-3.3C5.8,3.5,3,6.1,2.6,9.4c-0.1,0.2-0.1,0.5-0.1,0.8C2.5,18,15,25.6,15,25.6S27.5,18,27.5,10.2
                                    C27.5,9.9,27.4,9.6,27.4,9.4z" class="heart_color"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </li>
            `
        $(`#${EL_ARR[cate]} .item_box`).append(tmp_list)
    }
}
// url에서 내가 필요한 정보의 값을 얻어오기
function get_info_from_url(keyword) { // cateNo, itemNo
    let url = location.href; // 302.theComma(item).html?cateNo=0&itemNo=3#with_item

    url = url.split("?") // [302.theComma(item).html , cateNo=0&itemNo=3#with_item]
    if (url.length > 1) {

        url = url[1].split("&") // [cateNo=0  , itemNo=3#with_item]

        for (let i = 0; i < url.length; i++) {
            let tmp_url = url[i].split("=");// [cateNo  , 0 ]
            // [itemNo  , 3#with_item]

            if (tmp_url[0] == keyword) {
                return tmp_url[1].split("#")[0] // 3#with_item
            }
        }
    }
    return null;
}

function comma(num) {
    return num.toLocaleString("KO")
}



