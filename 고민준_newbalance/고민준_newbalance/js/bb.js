let cateNo = get_info_from_url("cateNo")
let itemNo = get_info_from_url("itemNo") - 1

console.log(cateNo, itemNo)

let item = `
    <div class="img_box">
        <img src="./newbalance/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src}" alt="">
        <div class="magnifier" style="background-image: url(./newbalance/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src})"></div>
    </div>
    <div class="info_box">
        <div class="item_title">${ITEM_LIST[cateNo][itemNo].title}</div>

        <div class="price_tag">${comma(ITEM_LIST[cateNo][itemNo].s_price)}원</div>
        <div class="info_box_alert">
            <p>해당 상품은 ID당 색상별<br>
            최대<span class="info_box_red"> 2</span>
            pcs까지 구매 가능합니다.
            </p>
        </div>
        <div class="item_info_size">
            <p> SIZE SELECT</p>
            <div class="R_size">
                <div class="item_info_small_box">230</div>
                <div class="item_info_small_box">235</div>
                <div class="item_info_small_box">240</div>

                <div class="item_info_small_box">245</div>
                <div class="item_info_small_box">250</div>
                <div class="item_info_small_box">255</div>
                <div class="item_info_small_box">260</div>

                <div class="item_info_small_box">265</div>
                <div class="item_info_small_box">270</div>
                <div class="item_info_small_box">275</div>
                <div class="item_info_small_box">280</div>

                <div class="item_info_small_box">285</div>
               
                
                
                <div class="item_info_small_box">S</div>
                <div class="item_info_small_box">M</div>
                <div class="item_info_small_box">L</div>


            </div>
        </div>
        

        <div class="color_pick">
            <div class="cp_L">색상</div> 
            <div class="cp_R">
                <div class="color_box">
                    <div class="color_opt">
                        <div class="cb_black" data-color="black"></div>
                    </div>
                    <div class="color_opt">
                        <div class="cb_white" data-color="white"></div>
                    </div>
                    <div class="color_opt">
                        <div class="cb_gray" data-color="gray"></div>
                    </div>
                </div>
                <div class="color_desc">[필수] 옵션을 선택해 주세요</div>
            </div>
        </div>

        <div class="selected_opt">
            <div class="so_desc">(최소주문수량 1개 이상)</div>
            <div class="selected_item_box">
                 
            </div>
        </div>

        <div class="total_price_box">
            TOTAL: <span class="final_price">0원</span> (<span class="final_qty">0</span>개)
        </div>

        <div class="btn_item_box">            
            <div class="btn_add_cart">ADD CART</div>
            <div class="btn_wishlist">BUY</div>
        </div>
        <p class="color_pick">*주문/배송/반품 등 일반 문의는 1:1 문의를 이용해 주시기 바랍니다.</p>
        
        <div class="promotion_info_box">
            <a href="#" class="promo_info_item">혜택안내</a>
            <a href="#" class="promo_info_item">입고 알림 신청하기</a>
        </div>

    </div>
    `
$(document).ready(function(){
    /*사이즈박스 호버*/
    $('.item_info_small_box').hover(function(){
        $('.item_info_small_box').eq($(this).index()).css({
            border:'1px solid #000',
            transition:'all 0.3s'
        })
    }, function(){
        $('.item_info_small_box').eq($(this).index()).css({
            border:'1px solid #eee',
            transition:'all 0.3s'
        })
    })

    $('.item_info_small_box').click(function(){
        $('.item_info_small_box').removeClass('item_info_small_box_active')
        $(this).addClass('item_info_small_box_active')
    }); 
})
    


    
$('.detail_info_box').append(item)

let magnifier = $('.magnifier');
let target = $('.img_box > img');

$(document).on('mouseenter', '.img_box', function(){
    magnifier.fadeIn(0)
});
$(document).on('mouseleave', '.img_box', function(){
    magnifier.fadeOut(0)
});
$(document).on('mousemove', '.img_box', function(e){
    // 부모 기준 위치 잡기
    // let pos_x = $('.img_box').position().left;
    // let pos_y = $('.img_box').position().top;

    // 1 - pageX,Y로 화면 좌상단 기준 마우스 위치 찾고 .img_box의 위치 빼기
    let mouseX = e.pageX - $('.img_box').offset().left;
    let mouseY = e.pageY - $('.img_box').offset().top;

    // 2 - 마우스가 원의 중심에 오게 하기
    let px = mouseX - (magnifier.width() / 2)
    let py = mouseY - (magnifier.height() / 2)

    // 3 - 배경이미지가 원의 가운데 오게 하기
    let rx = -mouseX + (magnifier.width() / 2)
    let ry = -mouseY + (magnifier.height() / 2)


    // 4 - 돋보기 위치 , 배경 이동시키기
    magnifier.css({
        left: px,
        top: py,
        backgroundPosition: rx+"px " + ry+"px",
        backgroundSize: target.width()+"px " + target.height()+"px"
    })

});




$(document).on('click','.color_opt', function(){
    let clicked_color = $(this).children().data('color');
    // black, white, gray

    if(!$('.ttt').hasClass(clicked_color)) {
        
        // 없으면
        $('.selected_item_box').append(`
            <div class="selected_item">
                <div class="si_1">
                    <div>마켓디자인</div>
                    <div class="ttt ${clicked_color}">-${clicked_color.toUpperCase()}</div>
                </div>
                <div class="si_2">
                    <input type="button" value="-" class="btn_qty_minus">
                    <input type="text" class="txt_qty" value="1">
                    <input type="button" value="+" class="btn_qty_plus">
                    <div class="btn_remove_item">X</div>
                </div>
                <div class="si_3">
                    <div class="each_price">${comma(ITEM_LIST[cateNo][itemNo].s_price)}원</div>
                    <div>(적립 10,000원)</div>
                </div> 
            </div>
            `)
            
            total_price()
    }
    else {
        // 있으면
        alert("이미 선택한 옵션입니다.")
    }
});

$(document).on('click', '.btn_remove_item', function(){
    $(this).parents('.selected_item').remove();
    total_price()
});
$(document).on('click', '.btn_qty_minus', function(){

    let tmp = $(this).next('.txt_qty')

    if(+tmp.val() > 1) {
        tmp.val(   +tmp.val()-1    )
        
        $(this).parent().next().children('.each_price').text(comma(tmp.val()*ITEM_LIST[cateNo][itemNo].s_price) + "원")


        total_price()
    }
    else {
        alert("최소 주문수량은 1개 입니다.")
    }

});
$(document).on('click', '.btn_qty_plus', function(){

    let tmp = $(this).prev('.txt_qty')
    tmp.val(   +tmp.val()+1    )
 

    // let tt = $('.txt_qty').val();
    // $('.txt_qty').val(  ++tt  )

    $(this).parent().next().children('.each_price').text(comma(tmp.val()*ITEM_LIST[cateNo][itemNo].s_price) + "원")



    total_price()
});
 
function total_price() {
    let total_price=0;
    let total_qty = 0;

    for(let i=0; i<$('.txt_qty').length; i++) {
        total_price += $('.txt_qty').eq(i).val() * ITEM_LIST[cateNo][itemNo].s_price;

        total_qty += +$('.txt_qty').eq(i).val();
    }
 
    $('.final_price').text(comma(total_price) + "원")

    $('.final_qty').text(total_qty)
}




