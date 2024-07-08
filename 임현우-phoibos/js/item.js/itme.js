// ---------------------item_load

let cateNo = get_info_from_url("cateNo")
let itemNo = get_info_from_url("itemNo")

if (itemNo != null) {
    let item =
    `
    <div class="img_box">
        <img src="./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src}" alt="">
        <div class="magnifier" style="background-image: url(./img/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src}"></div>
    </div>
    <div class="info_box">
        <div class="item_title">
            <div class="item_title_top">${ITEM_TAG_ARR[cateNo]}</div>
            <div class="item_title_bot">PhΦoibos</div>
        </div>

        <table class="item_info">
            <tbody>
                <tr>
                    <td class="tb_title">소비자가</td>
                    <td class="tb_desc"><del>39,000원</del></td>
                </tr>
                <tr>
                    <td class="tb_title">판매가</td>
                    <td class="tb_desc">32,000원</td>
                </tr>
                <tr>
                    <td class="tb_title" rowspan="2">배송비</td>
                    <td class="tb_desc">
                        <select class="tb_order_opt">
                            <option value="">주문 시 결제</option>
                            <option>수령 시 결제</option> 
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="tb_desc">3,500원 <br> <span>(39,900원 이상 구매 시 무료)</span></td>
                </tr>
            </tbody>
        </table> 

        <div class="color_pick">
            <div class="cp_L">색상</div> 
            <div class="cp_R">
                <div class="color_box">
                    <div class="color_opt">
                        <div class="cb_black" data-color="black"></div>
                    </div>
                    <div class="color_opt">
                        <div class="cb_brown" data-color="brown"></div>
                    </div>
                    <div class="color_opt">
                        <div class="cb_gray" data-color="gray"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="selected_opt">
            <div class="so_desc">(최소주문수량 1개 이상)</div>
            <div class="selected_item_box">
            </div>
        </div>

        <div class="total_price_box">
            총액: <span class="final_price">0원</span> (<span class="final_qty">0</span>개)
        </div>

        <div class="btn_item_box">
            <div class="btn_buy"><span>구매하기</span></div>
            <div class="item_boxbtn item_boxbtn_L">
            <div class="btn_addcart"></div>
            </div>
            <div class="item_boxbtn item_boxbtn_R">
            <div class="btn_wishlist"></div>
            </div>
        </div>
    </div>
    `
$('.detail_box').append(item)

// --------------------------magnifier

let magnifier = $('.magnifier');
let target = $('.img_box > img');

$(document).on('mouseenter', '.img_box', function(){
    magnifier.fadeIn(0)
});
$(document).on('mouseleave', '.img_box', function(){
    magnifier.fadeOut(0)
});
$(document).on('mousemove', '.img_box', function(e){
    let mouseX = e.pageX - $('.img_box').offset().left;
    let mouseY = e.pageY - $('.img_box').offset().top;

    let px = mouseX - (magnifier.width() / 2)
    let py = mouseY - (magnifier.height() / 2)

    let rx = -mouseX + (magnifier.width() / 2)
    let ry = -mouseY + (magnifier.height() / 2)

    magnifier.css({
        left: px,
        top: py,
        backgroundPosition: rx+"px " + ry+"px",
        backgroundSize: target.width()+"px " + target.height()+"px"
    })
});

// --------------------------color_change

$(document).on('click','.color_opt', function(){
    let clicked_color = $(this).children().data('color');
    // black, white, gray

    if(!$('.ttt').hasClass(clicked_color)) {
        
        // 없으면
        $('.selected_item_box').append(`
            <div class="selected_item">
                <div class="si_1">
                    <div class="ttt ${clicked_color}">${clicked_color.toUpperCase()}</div>
                </div>
                <div class="si_2">
                    <input type="button" value="-" class="btn_qty_minus">
                    <input type="text" class="txt_qty" value="1">
                    <input type="button" value="+" class="btn_qty_plus">
                    <div class="btn_remove_item">X</div>
                </div>
                <div class="si_3">
                    <div class="each_price">32,000원</div>
                </div> 
            </div>
            `)
            
            total_price()
    }
    else {
        // 있으면
        alert("이미 선택한 항목입니다.")
    }
});

// --------------------------total_price

$(document).on('click', '.btn_remove_item', function(){
    $(this).parents('.selected_item').remove();

    total_price()
});
$(document).on('click', '.btn_qty_minus', function(){

    let tmp = $(this).next('.txt_qty')

    if(+tmp.val() > 1) {
        tmp.val(   +tmp.val()-1    )
        
        $(this).parent().next().children('.each_price').text(comma(tmp.val()*32000) + "원")

        total_price()
    }
    else {
        alert("최소 주문 수량은 1개입니다.")
    }

});
$(document).on('click', '.btn_qty_plus', function(){

    let tmp = $(this).prev('.txt_qty')
    tmp.val(   +tmp.val()+1    )

    $(this).parent().next().children('.each_price').text(comma(tmp.val()*32000) + "원")

    total_price()
});

function total_price() {

    let total_price = 0;
    let total_qty = 0;

    for(let i=0; i<$('.txt_qty').length; i++) {
        total_price += $('.txt_qty').eq(i).val() * 32000;

        total_qty += +$('.txt_qty').eq(i).val();
    }

    $('.final_price').text(comma(total_price) + "원")

    $('.final_qty').text(total_qty)
}
}
else {
    alert("잘못된 접근입니다.")
    location.replace(`phoibos_main.html`)
}

// --------------------------item_boxbtn

$(`.btn_addcart`).hover(function(){
    $(`.item_boxbtn_L`).css({
        backgroundColor: `#000`
    })
    $(`.btn_addcart`).css({
        background: `url(./img/main/icon-header-bag__white.png) no-repeat center / cover`
    })
}, 
function(){
    $(`.item_boxbtn_L`).css({
        backgroundColor: `#fff`
    })
    $(`.btn_addcart`).css({
        background: `url(./img/main/icon-header-bag__black.png) no-repeat center / cover`
    })
})

$(`.btn_wishlist`).hover(function(){
    $(`.item_boxbtn_R`).css({
        backgroundColor: `#000`
    })
    $(`.btn_wishlist`).css({
        background: `url(./img/main/icon-header-heart__white.png) no-repeat center / cover`
    })
}, 
function(){
    $(`.item_boxbtn_R`).css({
        backgroundColor: `#fff`
    })
    $(`.btn_wishlist`).css({
        background: `url(./img/main/icon-header-heart__black.png) no-repeat center / cover`
    })
})

// --------------------------product_info

let nav_h = + $(`.nav`).height()
let fixed_info_tab_box_h = $(`.fixed_info_tab_box`).height()

let product_detail_top = $(`.product_detail`).offset().top - (nav_h + fixed_info_tab_box_h)
let size_top = $(`.size`).offset().top - (nav_h + fixed_info_tab_box_h)
let review_top = $(`.review`).offset().top - (nav_h + fixed_info_tab_box_h)
let qna_top = $(`.qna`).offset().top - (nav_h + fixed_info_tab_box_h)

$(window).scroll(function(){
    let s_top = $(window).scrollTop()
    let s_bot = s_top + $(window).height()

    let nav_top = $(`.nav`).offset().top
    let nav_bot = nav_top + $(`.nav`).height()

    let info_tab_box_top = $(`.fixed_info_tab_box`).offset().top
    let info_tab_box_bot = info_tab_box_top + $(`.fixed_info_tab_box`).height()

    let info_tab_box_bot_window = nav_bot + $(`.fixed_info_tab_box`).height()

    if(nav_bot >= info_tab_box_top){
        $(`.info_tab_box`).css({
            position: `fixed`,
            top: `50px`
        })
    }
    else{
        $(`.info_tab_box`).css({
            position: `static`
        })
    }

    $(`.info_tab`).css({
        borderBottom: `5px solid #7b7b7b`
    })
    
    if(info_tab_box_bot_window >= product_detail_top){
        $(`.info_tab`).css({
            borderBottom: `5px solid #7b7b7b`
        })

        $(`.info_tab:nth-child(1)`).css({
            borderBottom: `5px solid #000`
        })
        
    }
    if(info_tab_box_bot_window >= size_top + 5){
        $(`.info_tab`).css({
            borderBottom: `5px solid #7b7b7b`
        })

        $(`.info_tab:nth-child(2)`).css({
            borderBottom: `5px solid #000`
        })
    }
    if(info_tab_box_bot_window >= review_top + 8){
        $(`.info_tab`).css({
            borderBottom: `5px solid #7b7b7b`
        })

        $(`.info_tab:nth-child(3)`).css({
            borderBottom: `5px solid #000`
        })
    }
    if(info_tab_box_bot_window >= qna_top + 14){
        $(`.info_tab`).css({
            borderBottom: `5px solid #7b7b7b`
        })
        
        $(`.info_tab:nth-child(4)`).css({
            borderBottom: `5px solid #000`
        })
    }
})

$(`.info_tab1`).click(function(){
    $(`html, body`).animate({ 
        scrollTop: product_detail_top
    }, 1000)
})

$(`.info_tab2`).click(function(){
    $(`html, body`).animate({ 
        scrollTop: size_top + 5
    }, 1000)
})

$(`.info_tab3`).click(function(){
    $(`html, body`).animate({ 
        scrollTop: review_top + 8
    }, 1000)
})

$(`.info_tab4`).click(function(){
    $(`html, body`).animate({ 
        scrollTop: qna_top + 14
    }, 1000)
})