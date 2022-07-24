$(document).ready(function(){
    let page_no = page_info('page_no')
    let item_no = page_info('item_no')

    let jpg = ITEM_LIST[page_no][item_no].src.split(", ")
    let color = ITEM_LIST[page_no][item_no].color.split(", ")
    let nutrient = ITEM_LIST[page_no][item_no].nutrient.split(", ")

$('.item_info').css({
    background: color[0]
})


let tmp_prev = `<a href="item.html?page_no=${page_no}&item_no=${ITEM_LIST[page_no].length - 1}" class="menu_btn prev_btn">
<p>${ITEM_LIST[page_no][ITEM_LIST[page_no].length - 1].title}</p>
</a>`
let tmp_next = ` <a href="item.html?page_no=${page_no}&item_no=0" class="menu_btn next_btn">
<p>${ITEM_LIST[page_no][0].title}</p>
</a>`


    if (ITEM_LIST[page_no][item_no - 1] != null) {
        tmp_prev = `<a href="item.html?page_no=${page_no}&item_no=${item_no - 1}" class="menu_btn prev_btn">
                        <p>${ITEM_LIST[page_no][item_no - 1].title}</p>
                    </a>`

    }

    if (ITEM_LIST[page_no][Number(item_no) + Number(1)] != null) {
        tmp_next = ` <a href="item.html?page_no=${page_no}&item_no=${Number(item_no) + Number(1)}" class="menu_btn next_btn">
                        <p>${ITEM_LIST[page_no][Number(item_no) + Number(1)].title}</p>
                    </a>`

    }

    let list = `<div class="item_name_en">${ITEM_LIST[page_no][item_no].title_en}</div>
                    <div class="item_name_kr">${ITEM_LIST[page_no][item_no].title}</div>

                    <div class="item_box">
                        <div class="item_img">
                            <img src="img/item/${ITEM_LIST[page_no][item_no].type}/${jpg[1]}" alt="" class="item_img_item">
                            <img src="img/item/${menu_array[page_no]}/${jpg[2]}" alt="" class="item_img_tag" style="background:${color[1]}">

                            <div class="btn_box">
                                ${tmp_prev}
                                ${tmp_next}
                            </div>
                        </div>

                        <p class="item_desc">${ITEM_LIST[page_no][item_no].desc}</p>
                    </div>

                    <div class="nutrient_allergy">
                        <div class="nutrient">
                            <div class="nutrient_allergy_title">영양정보
                                <div class="slide_d_btn">

                                </div>
                            </div>
                            <div class="n_a_box nutrient_outer">
                                <table class="nutrient_box">
                                    <tr class="">
                                        <th>영양소</th>              
                                        <th>중량</th>              
                                        <th>열량</th>
                                        <th>당</th>
                                        <th>단백질</th>
                                        <th>포화지방</th>
                                        <th>나트륨</th>
                                    </tr>
                                    <tr class="">
                                        <td>함량</td>             
                                        <td>${nutrient[0]}g</td>
                                        <td>${nutrient[1]}Kcal</td>
                                        <td>${nutrient[2]}g</td>
                                        <td>${nutrient[3]}g</td>
                                        <td>${nutrient[4]}g</td>
                                        <td>${nutrient[5]}mg</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="allergy">
                            <div class="nutrient_allergy_title">알레르기
                                <span class="slide_d_btn"></span>
                            </div>
                            <div class="n_a_box allergy_box">${ITEM_LIST[page_no][item_no].allergy}</div>
                            
                        </div>
                    </div>
                </div>`
                    
        $('.item_info_box').append(list)

////////////////////////////////////////////

let with_item_name = ITEM_LIST[page_no][item_no].with.split(", ")
let with_item = []

    for (let i=0; i<ITEM_LIST.length; i++) {
        for(let j=0; j<ITEM_LIST[i].length; j++) {
            for(let k=0; k<with_item_name.length; k++) {
                if (ITEM_LIST[i][j].title.match(with_item_name[k])) {
                    with_item.push(ITEM_LIST[i][j])
                }
            }
        }
    }

    for (let i=0; i<with_item.length; i++) {
        let jpg = with_item[i].src.split(', ')
        let list2 = `<li class="item_with_li">
                        <a href="item.html?page_no=${with_item[i].page_no}&item_no=${with_item[i].item_no - 1}">
                            <img src="img/item/${with_item[i].type}/${jpg[1]}" alt="">
                            <p>${with_item[i].title}</p>
                        </a>
                    </li>`

        $('.item_with_ul').append(list2)
    }




////////////////////////////////////////////  알레르기 , 영양소 펼침
let n_a_chk = [false, false]
    $('.nutrient_allergy_title').click(function(){

        if (n_a_chk[$(this).parent().index()] != true) {
            n_a_chk = [false, false];
            n_a_chk[$(this).parent().index()] = true;
            $('.n_a_box').removeClass('n_a_box_active')
            $(this).next('.n_a_box').addClass('n_a_box_active')
        }
        else {
            n_a_chk = [false, false];
            $('.n_a_box').removeClass('n_a_box_active')
        }

    })

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// 스크롤
    let s_bot = $(window).scrollTop() + $(window).height();
    // item
    let item = $('.item_info_box').offset().top;
    let item_chk = true;

    // with
    let item_with = $('.item_with').offset().top;
    let item_with_chk = true;

    // 매장, 앱
    let store_app = $('.store_app').offset().top;
    let store_app_chk = true;

    // 목록 버튼
    let list_btn = $('.to_list_btn').offset().top;
    let list_btn_chk = true;

    // item   
    if (item <= s_bot && item_chk) {
        item_chk = false;
        $('.item_info_box').css({transform: 'translateY(0px)'})
        $('.item_img').css({opacity: '1'})

    }
    else if(item  >= s_bot && !item_chk) {
        item_chk = true;
        $('.item_info_box').css({transform: 'translateY(20px)'})
    }
    
////////////////////////////////////////// 스크롤
    $(window).scroll(function(){
        s_bot = $(window).scrollTop() + $(window).height();

// with
        if (item_with + 200 <= s_bot && item_with_chk) {
            item_with_chk = false;
            $('.item_with').css({transform: 'translateY(0px)'})
        }
        else if(item_with +200  >= s_bot && !item_with_chk) {
            item_with_chk = true;
            $('.item_with').css({transform: 'translateY(100px)'})
        }
// 매장, 앱
        if (store_app + 200 <= s_bot && store_app_chk) {
            store_app_chk = false;
            $('.store_app').css({transform: 'translateY(0px)'})
        }
        else if(store_app +200  >= s_bot && !store_app_chk) {
            store_app_chk = true;
            $('.store_app').css({transform: 'translateY(100px)'})
        }
// 목록 버튼
        if (list_btn + 200 <= s_bot && list_btn_chk) {
            list_btn_chk = false;
            $('.to_list_btn').css({transform: 'translateY(0px)'})
        }
        else if(list_btn +200  >= s_bot && !list_btn_chk) {
            list_btn_chk = true;
            $('.to_list_btn').css({transform: 'translateY(100px)'})
        }

    });


    $('.to_list_btn').attr('href', `list.html?page_no=${page_no}`)
////////////////////////////////////////////////////////////////////////////////

})