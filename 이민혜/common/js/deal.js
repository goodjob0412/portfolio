let page_no = page_info ('page_no')
let item_no = page_info ('item_no')


let u_agent = window.navigator.userAgent.toLowerCase() // 윈도우 운영체제 정보 소문자로 
// document.write(u_agent+ "<br>");
let phone_list = ['android', 'ipad', 'iphone'];
for (let i=0; i < phone_list.length; i++) {
    //문자열.match() : 괄호 안에 있는 정보가 문자열 안에 있는지 체크
    if (u_agent.match(phone_list[i])) {            
        location.replace('deal_m.html?page_no='+page_no+'&item_no='+item_no);  // 모바일 주소로
    } 
}


$(document).ready(function(){
////////////////////////////////////////////// 태그 넣기 

    let jpg = ITEM_LIST[page_no][item_no].src.split(", ")
    let item_color = ITEM_LIST[page_no][item_no].color_txt.split(", ")
    let size = ITEM_LIST[page_no][item_no].size.split(", ")
    let item = `<div class="item_img_box">
                    <div class="item_big_img">
                        <img src="img/item/${ITEM_LIST[page_no][item_no].type}/${jpg[0]}" alt="">
                    </div>
                    <div class="item_sm_img_box">
       
                    </div>
                </div>
                <div class="item_info">
                    <div class="item_title_en">[${ITEM_LIST[page_no][item_no].type}] ${ITEM_LIST[page_no][item_no].title_en}</div>
                    <div class="item_title">${ITEM_LIST[page_no][item_no].title_kr}</div>
                    <div class="item_desc">
                        <p>${ITEM_LIST[page_no][item_no].desc}</p>

                    </div>
                    <div class="item_option">
                        <table class="item_info_tb">
                            <tbody>
                                <tr>
                                    <td class="item_info_title font_color_ddd">소비자가</td>
                                    <td class="item_info_desc font_color_ddd line_through">${ITEM_LIST[page_no][item_no].o_price.toLocaleString()}원</td>
                                </tr>
                                <tr>
                                    <td class="item_info_title">판매가</td>
                                    <td class="item_info_desc">
                                        <span class="item_info_desc_num">${ITEM_LIST[page_no][item_no].s_price.toLocaleString()}</span>원
                                    </td>
                                </tr>
                                <tr>
                                    <td class="item_info_title">배송비</td>
                                    <td class="item_info_desc">무료</td>
                                </tr>
                                <tr>
                                    <td class="item_info_title">색상</td>
                                    <td class="item_info_desc padding_5">
                                        <select class="sel_del_option sel_del_option_color">
                                            <option selected> = [필수] 옵션을 선택해 주세요 =</option>
                                            <option disabled> -----------------------------</option>
              
                                        </select>
                                    </td>
                                </tr>

          

                            </tbody>
                        </table>
                        <div class="opt_container">
                            

                            

                        </div>
                        <div class="total">
                            <p class="total_qty">총 <span class="total_qty_num">0</span>개</p>
                            <div class="total_price">
                                총 주문금액 <span class="final_price">0</span>원
                            </div>
                            
                        </div>

                        <div class="btn_buy_container">
                            <div class="btn_cart">CART</div>
                            <div class="btn_buy">BUY</div>

                        </div>
                        
                    </div>
                </div>`
    $('.detail_area').append(item)


    // 작은 이미지 숫자만큼 넣기
    for(let i=0; i<jpg.length; i++) {
        let list = `<div class="item_sm_img">
                        <img src="img/item/${ITEM_LIST[page_no][item_no].type}/${jpg[i]}" alt="">
                    </div>`
        $('.item_sm_img_box').append(list)
    }

    // 사이즈 있으면 넣기 
    if (ITEM_LIST[page_no][item_no].size.length > 1) {
        let item_size =`<tr>
                            <td class="item_info_title">사이즈</td>
                                <td class="item_info_desc padding_5">
                                    <select class="sel_del_option sel_del_option_size">
                                        <option selected> = [필수] 옵션을 선택해 주세요 =</option>
                                        <option disabled> -----------------------------</option>

                                    </select>
                                </td>
                            </tr>`
        $('tbody').append(item_size)
    }


// 수량 수만큼 옵션창 넣기 
    let color_chk = []
    for (let i=0; i < item_color.length; i++) {
        let color_op = `<option>${item_color[i]}</option>`
        $('.sel_del_option_color').append(color_op)
    }

// 사이즈 있으면 사이즈 수만큼 
    let size_chk = []
    for (let i=0; i < size.length; i++) {
        let size_op = `<option>${size[i]}</option>`
        $('.sel_del_option_size').append(size_op)
    }
    
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////// 옵션선택시 박스 넣기 
let color="= [필수] 옵션을 선택해 주세요 =";
    $('.sel_del_option_color').change(function(){
        let color_dupl_check = true;
        color = $('.sel_del_option_color').val() // 블랙

        if  (ITEM_LIST[page_no][item_no].size.length == 0 && color != "= [필수] 옵션을 선택해 주세요 =") {

            for(let i=0; i<color_chk.length; i++) {  // 체크박스에 있는 수만큼 돌려서 그안에 있는것고 지금 선택한 것 비교

                if (color_chk[i] == color) {       // 만약 박스i번째 것과지금 선택한 것이 같으면 이거 하고 아니면 다음으로 넘어가
                    alert("이미 선택한 상품 입니다.");
                    color_dupl_check = false;
                    break;
                }
            }

            if (color_dupl_check) { /// 0번과도 안맞고 1번과도 안맞고 2번과도 안맞을때 
                let list = `<div class="opt_box">
                                <div class="opt_txt">
                                    <div class="opt_title">${$('.item_title').text()}</div>
                                    <span class="opt_color">${color}</span> 
                                    <span class="opt_size">( <span>Free</span> )</span>
                                </div>
                                <div class="opt_qty">
                                    <div class="opt_qty_btn opt_qty_btn_sub">-</div>
                                    <input type="text" class="opt_qty_txt" value="1">
                                    <div class="opt_qty_btn opt_qty_btn_add">+</div>
                                </div>
                                <div class="opt_price">
                                    <span class="opt_price_num">${$('.item_info_desc_num').text()}</span>원
                                </div>
                                <div class="opt_box_close">X</div>
                            </div>`
                $('.opt_container').append(list)
                color_chk.push(color)
                final_price()
            }
        }

    })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////// -하던중

    $('.sel_del_option_size').change(function(){
        let size_dupl_check = true;
        let size = $('.sel_del_option_size').val()

        if (color != "= [필수] 옵션을 선택해 주세요 =" && size != "= [필수] 옵션을 선택해 주세요 =") {

            for(let i=0; i<color_chk.length; i++) { 

                if (color_chk[i] == color ) {      
                    if (size_chk[i] == size) {        
                        alert("이미 선택한 상품 입니다.");   
                        size_dupl_check = false;
                        break;
                    }
                }
            }
            if (size_dupl_check) { 

                let list = `<div class="opt_box">
                                <div class="opt_txt">
                                    <div class="opt_title">${$('.item_title').text()}</div>
                                    <span class="opt_color">${color}</span> 
                                    <span class="opt_size">( <span>${size}</span> )</span>
                                </div>
                                <div class="opt_qty">
                                    <div class="opt_qty_btn opt_qty_btn_sub">-</div>
                                    <input type="text" class="opt_qty_txt" value="1">
                                    <div class="opt_qty_btn opt_qty_btn_add">+</div>
                                </div>
                                <div class="opt_price">
                                    <span class="opt_price_num">${$('.item_info_desc_num').text()}</span>원
                                </div>
                                <div class="opt_box_close">X</div>
                            </div>`

                $('.opt_container').append(list)
                color_chk.push(color)
                size_chk.push(size)
                final_price()

            }
        }
    })


    $('.sel_del_option_color').mousedown(function () {
        $('.sel_del_option_color').children('option').eq(0).prop("selected", true);
        //처음 위치로 돌아가기
    });
    $('.sel_del_option_size').mousedown(function () {
        $('.sel_del_option_size').children('option').eq(0).prop("selected", true);
        //처음 위치로 돌아가기
    });

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// x 버튼 누르면 현재 창 지우기 
    $(document).on('click', '.opt_box_close', function(){

        let remove_index = $(this).parents('.opt_box').index()

                color_chk.splice(remove_index, 1);
                size_chk.splice(remove_index, 1);

        $(this).parents('.opt_box').remove()
        final_price()
    });
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// 옵션박스 버튼 클릭시 수량 업 다운
    // 수량 더하기 
    $(document).on('click', '.opt_qty_btn_add', function(){
        if ($(this).prev('.opt_qty_txt').val() >= 1) {
            qty_num = Number($(this).prev('.opt_qty_txt').val().replace(",","")) + 1
            $(this).prev('.opt_qty_txt').val(qty_num)

            let price_1 = $('.item_info_desc_num').text().replace(",","")
            let price = price_1 * qty_num
            $(this).parents('.opt_box').find('.opt_price_num').text(price.toLocaleString())
    
            final_price() 
        }
        else {
            $(this).prev('.qty_text').val("1")
        }
    });
    // 수량 빼기 
    $(document).on('click', '.opt_qty_btn_sub', function(){
        if ($(this).next('.opt_qty_txt').val() > 1) {
            qty_num =  Number($(this).next('.opt_qty_txt').val().replace(",","")) - 1
            $(this).next('.opt_qty_txt').val(qty_num)

            let price_1 = $('.item_info_desc_num').text().replace(",","")
            let price = price_1 * qty_num
            $(this).parents('.opt_box').find('.opt_price_num').text(price.toLocaleString())

            final_price()
        }
        else {
            alert('최소 주문 수량은 1개 입니다.')
        }
    });
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// 토탈 금액 변경 함수
    function final_price() {
        let price_count = $('.opt_price_num').length;
        let total_price = 0;
        let total_qty = 0;

        for(let i =0; i< price_count; i++) {
            total_price += Number($('.opt_price_num').eq(i).text().replace(",",""));
            total_qty +=   Number($('.opt_qty_txt').eq(i).val());
        }

        $('.total_qty_num').text(total_qty)
        $('.final_price').text(total_price.toLocaleString())
    }

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// 작은이미지 클릭시 변경

    $('.item_sm_img img').click(function(){
        let img_src = $(this).attr('src')
        $('.item_big_img > img').attr('src', img_src)

    });


///////////////////////////////////////////////////////////////////////////// 

})
