let cateNo = get_info_from_url("cateNo")
let itemNo = get_info_from_url("itemNo") - 1

console.log(cateNo, itemNo)

let item = `
        <div class="img_box">
            <img class="b_img" src="./img/dunkin/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src}" alt="">

            <img class="s_img" src="./img/dunkin/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src}" alt="">
        </div>
        <div class="right_box">
            <div class="info_box">
                <div class="sec_title">${ITEM_LIST[cateNo][itemNo].section}</div>
                <div class="top_box">
                    <div class="item_name_box">
                        <div class="item_name">${ITEM_LIST[cateNo][itemNo].title}</div>
                        <div class="item_engname">${ITEM_LIST[cateNo][itemNo].engname}</div>
                    </div>
                    <button class="buy_button">구매하기</button>
                </div>
            </div>
            <h4 class="info_desc">"  ${ITEM_LIST[cateNo][itemNo].infodesc}  "</h4>

            <div class="item_nutri_box">
                <div class="item_nutri_title">제품 영양 정보</div>
                <div class="item_nutri_amount">1회 제공량 (${ITEM_LIST[cateNo][itemNo].amount}) g</div>
                <ul class="table_box">
                    <li class="table_li">
                        <table class="item_nutri_info"> 
                            <tbody>
                                <tr>
                                    <td class="tb_title">열량</td>
                                    <td class="tb_desc">${ITEM_LIST[cateNo][itemNo].kcal} kcal</td>
                                </tr>
                                <tr>
                                    <td class="tb_title">당류</td>
                                    <td class="tb_desc">${ITEM_LIST[cateNo][itemNo].sugars} g</td>
                                </tr>
                                <tr>
                                    <td class="tb_title">단백질</td>
                                    <td class="tb_desc">${ITEM_LIST[cateNo][itemNo].protein} g</td>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    </li>
                    <li class="table_li">
                        <table class="item_nutri_info"> 
                            <tbody>
                                <tr>
                                    <td class="tb_title">포화지방</td>
                                    <td class="tb_desc">${ITEM_LIST[cateNo][itemNo].fat} g</td>
                                </tr>
                                <tr>
                                    <td class="tb_title">나트륨</td>
                                    <td class="tb_desc">${ITEM_LIST[cateNo][itemNo].sodium} mg</td>
                                </tr>
                            </tbody>
                        </table> 
                    </li>
                </ul>
                <div class="tabel_desc">*알레르지 유발 식품 : 밀, 대두, 우유</div>
            </div>
        </div>

    `

$('.detail_box').append(item)

