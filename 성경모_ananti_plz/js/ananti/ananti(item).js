
$(document).ready(function(){

    let tmp_url = location.href;
    tmp_url = tmp_url.split("?")[1]
    let cate_no = tmp_url.split("&")[0].split("=")[1]
    let item_no = tmp_url.split("&")[1].split("=")[1] - 1
    

    console.log(tmp_url)

    console.log(cate_no)

    console.log(item_no)

    let aaa = ITEM_LIST[cate_no][item_no].title

    console.log(aaa)

    let category = `<div class="category">
    ${ITEM_LIST[cate_no][item_no].one}&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp${ITEM_LIST[cate_no][item_no].two}&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp${ITEM_LIST[cate_no][item_no].three}&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp${ITEM_LIST[cate_no][item_no].four}
                    </div>`

    $('.category_box').append(category)



    // let item_img = `<img src="${ITEM_LIST[cate_no][item_no].src}" alt="">`

    let item_slide = ` <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2 position_move">
                          <div class="swiper-wrapper">

                            <div class="swiper-slide">
                              <img src="${ITEM_LIST[cate_no][item_no].src}"onerror="this.style.display='none'" />
                            </div>

                            <div class="swiper-slide">
                              <img src="${ITEM_LIST[cate_no][item_no].src_a}"onerror="this.style.display='none'" />
                            </div>

                            <div class="swiper-slide">
                              <img src="${ITEM_LIST[cate_no][item_no].src_b}"onerror="this.style.display='none'" />
                            </div>

                            
                          </div>
                          <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                        </div>
                        
                        <div thumbsSlider="" class="swiper mySwiper use_mb">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <img src="${ITEM_LIST[cate_no][item_no].src}" onerror="this.style.display='none'"  />
                            </div>
                            <div class="swiper-slide">
                              <img src="${ITEM_LIST[cate_no][item_no].src_a}" onerror="this.style.display='none'"  />
                            </div>
                            <div class="swiper-slide qwe">
                              <img src="${ITEM_LIST[cate_no][item_no].src_b}" onerror="this.style.display='none'" />
                            </div>
                            
                          </div>
                        </div>
                        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
                        
                        <script>
        var swiper = new Swiper(".mySwiper", {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mySwiper2", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
        });
      </script>`

    $('.list_bottom_L_img').append(item_slide)

let abc = ITEM_LIST[0][2].src_b
    console.log(abc)

if(abc ==' NULL'){
  $('.qwe').css({
    display : 'none'
  })
}


    let info = `<div class="list_bottom_R_brand">${ITEM_LIST[cate_no][item_no].brand}</div>
    <div class="list_bottom_R_brand_share"></div>
    <div class="list_bottom_R_brand_mark"></div>
    <div class="list_bottom_R_top">
        <div class="list_bottom_R_top_title">${ITEM_LIST[cate_no][item_no].title}</div>
        <table class="item_info">
            <tbody>
                <tr>
                    <td class="tb_title">판매가</td>
                    <td class="tb_desc">${comma(ITEM_LIST[cate_no][item_no].o_price)}원</td>
                </tr>
                <tr>
                    <td class="tb_title border_bot">RIM</td>
                    <td class="tb_desc">${ITEM_LIST[cate_no][item_no].o_price * 0.002}RIM 적립 예정</td>
                </tr>
            </tbody>
        </table> 
    </div>
    <div class="list_bottom_R_btm">
        <table class="item_info">
            <tbody>
                <tr>
                    <td class="tb_title">상품유형</td>
                    <td class="tb_desc">${ITEM_LIST[cate_no][item_no].kind}</td>
                </tr>
                <tr>
                    <td class="tb_title">주문제작</td>
                    <td class="tb_desc">결제완료 후 취소/교환/반품 불가</td>
                </tr>
                <tr>
                    <td class="tb_title">배송정보</td>
                    <td class="tb_desc">주문 후 3일 이내 출고(주말 및 공휴일 제외)</td>
                </tr>
                <tr>
                    <td class="tb_title">배송비</td>
                    <td class="tb_desc">3,500원</td>
                </tr>
                <tr>
                    <td class="tb_title">상품코드</td>
                    <td class="tb_desc">${ITEM_LIST[cate_no][item_no].code}</td>
                </tr>
            </tbody>
        </table>

        <div class="product_count">
                <div class="count_num">
                    <input type="button" value="-" class="btn_qty_minus rrr">
                    <input type="text" class="txt_qty rrr" value="1">
                    <input type="button" value="+" class="btn_qty_plus rrr">
                </div>
        </div>

        <div class="total_price_box">
        <div class="total_txt">총 상품금액 : </div>
        <span class="final_price">${comma(ITEM_LIST[cate_no][item_no].o_price)}원</span>
    </div>

    <div class="point_box">
        <span class="point">[ 예상 적립 RIM : ${comma(ITEM_LIST[cate_no][item_no].o_price * 0.002)}RIM ]</span>
    </div>
       `




  $('.list_bottom_R').append(info)
  $(document).on('click', '.btn_qty_plus', function(){

    let tmp = $(this).prev('.txt_qty')
    console.log(tmp)
    tmp.val(   +tmp.val()+1    )

    $(this).parent().next().children('.each_price').text(comma(tmp.val()*ITEM_LIST[cate_no][item_no].o_price) + "원")

    total_price()
});

$(document).on('click', '.btn_qty_minus', function(){

  let tmp = $(this).next('.txt_qty')

  if(+tmp.val() > 1) {
      tmp.val(   +tmp.val()-1    )
      
      $(this).parent().next().children('.each_price').text(comma(tmp.val()*ITEM_LIST[cate_no][item_no].o_price) + "원")


      total_price()
  }
  else {
      alert("최소 주문수량은 1개 입니다.")
  }

});


function total_price() {
  let total_price=0;
  let total_qty = 0;
  let real_point = 0;

  for(let i=0; i<$('.txt_qty').length; i++) {
      total_price += $('.txt_qty').eq(i).val() * ITEM_LIST[cate_no][item_no].o_price;

      total_qty += +$('.txt_qty').eq(i).val();

      function point(){
        let before_point = total_price
      
        console.log(before_point)

        real_point = before_point * 0.002

        console.log(real_point)
      }
       
      point()
  }


  $('.final_price').text(comma(total_price) + "원")

  $('.final_qty').text(total_qty)

  $('.point').text("[ 예상 적립 RIM : " + comma(real_point) + "RIM ]")
}



})