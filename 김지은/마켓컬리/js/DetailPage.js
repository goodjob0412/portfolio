$(document).ready(function(){

    // 정보 불러오기
    let cate_no = get_url_info('cate_no') //스프폴더
    let sec_no = get_url_info('sec_no')  //스프폴더 안애들
    let item_no = get_url_info('item_no') //스프폴더 안애들안에 있는 애들
    // 

    



    console.log(cate_no, sec_no, item_no)
    // console.log(ITEM_LIST[cate_no][sec_no])

    // for(let i=0; i < ITEM_LIST[cate_no][sec_no].length; i++) {

    // 할인가
    let ttt = ITEM_LIST[cate_no][sec_no][item_no].price - (ITEM_LIST[cate_no][sec_no][item_no].price * (ITEM_LIST[cate_no][sec_no][item_no].sale / 100));

    // 계산할때 사용되는 가격
    // 평소에는 원래 가격, sale이 0보다 크면 계산된 세일가로 price 변수 덮어씀.
    let price = ITEM_LIST[cate_no][sec_no][item_no].price;
    if(ITEM_LIST[cate_no][sec_no][item_no].sale > 0) {
        price = ttt
    }
 // 한번만 찍어줘도 되는거니까 for문 필요없음
        let list = '<div class="item_big_img">';
        list += '<img src="img/item/'+cate_title[cate_no]+'/'+ sec_title[sec_no]+'/'+ITEM_LIST[cate_no][sec_no][item_no].src+'" alt="">'
        list +=  '</div>';

        list +=  '<div class="item_info">';
        list +=  '<div class="B_title">[ '+ITEM_LIST[cate_no][sec_no][item_no].brand+' ]</div>';
        list +=  '<img src="img/icon/free-icon-share-1828960.png" alt="" class="I_img">';
        list += '<div class="I_title">'+ITEM_LIST[cate_no][sec_no][item_no].title +'</div>';
        list +=  '<div class="desc">'+ITEM_LIST[cate_no][sec_no][item_no].desc +
        '</div>'
        list += '<div class="item_option">'
        list += '<div class ="item_ep1">'
        list +=  '<div class="item_ep">'
        list +=  '<div class="item_info_title">소비자가</div>'


        // 세일가가 0일때는 표시안함
        if(ITEM_LIST[cate_no][sec_no][item_no].sale > 0) {
            list +=  '<div class="item_desc item_desc_del">'+(Number((ITEM_LIST[cate_no][sec_no][item_no].price)).toLocaleString('ko-KR')) +'원</div>'
        }
        else {
            list +=  '<div class="item_desc ">'+(Number((ITEM_LIST[cate_no][sec_no][item_no].price)).toLocaleString('ko-KR')) +'원</div>'
        }
        
        // 세일가가 0일때는 표시안함
        list +=  '</div>'
        list +=  '<div class="item_ep item_ep_tt">'
        if(ITEM_LIST[cate_no][sec_no][item_no].sale > 0) {
            list +=  '<div class="item_info_title">할인가</div>'
            list +=  '<div class="item_desc1">'+ttt.toLocaleString('ko-KR') +'원</div>';

            list +=  '<div class="sale_n">'+ITEM_LIST[cate_no][sec_no][item_no].sale +'%</div>'
        }
        list += '</div>'

        // 정보아닌거
        list +=  '<ul class="item_ep">'
        list +=  '<li class="item_info_title">판매단위</li>'
        list += '<li class="item_info_desc">1팩</li>'
        list +=  '</ul>'
        list +=  '<ul class="item_ep">'
        list +=  '<li class="item_info_title">중량/용량</li>'
        list += '<li class="item_info_desc">450g</li>'
        list += '</ul>'
        list +=  '<ul class="item_ep item_ep2">'
        list +=  '<li class="item_info_title"><span>배송관련</span> </li>'
        list +=  '<li class="item_info_exp">'
        list +=  '<div class="item_IF"><span class="s_color">샛별배송</span> 오늘밤 주문해도 새벽이면 도착!</div>'
        list +=  '<div class="item_IF"><span class="s_color">택배배송 </span> 오늘 주문하면 내일 도착! <br> <span class="s_color_s">샛별배송 불가 지역은 택배로 배송해드려요.</span> </div>'
        list +=   '</li>'
                                    
        list +=   '</ul>'
        list +=   '<ul class="item_ep">'
        list +=   '<li class="item_info_title">포장타입</li>'
        list +=   '<li class="item_info_desc">냉장/종이포장</li>'
        list +=   '</ul>'
        list +=  '<ul class="item_ep">'
        list +=   '<li class="item_info_title">알레르기정보</li>'
        list +=   '<li class="item_info_desc">- 우유, 대두, 밀, 닭고기, 쇠고기, 조개류,(바지락, 모시조개) 함유'
        list +=   '<br>'
                                        
        list +=  '- 본 제품은 알류, 메밀, 땅콩, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류, 호두, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조하고 있습니다. '
        list += '</li>'
        list +=  '</ul>'
        list +=  '<ul class="item_ep">'
        list += ' <li class="item_info_title">안내사항</li>'
        list +=   '<li class="item_info_desc">-수령일 포함 165일 이상 남은 상품을 보내드립니다. (유통기한: 제조일로부터 1년)</li>'
        list +=  '</ul>'
        list +=  '<ul class="item_ep">'
        list += ' <li class="item_info_title">구매수량</li>'
        list +=  '<li class="item_info_desc">'
        list +=  '<div class="opt_qty">'
        list +=   '<input type="button" class="btn_qty btn_minus" value="-">'
        list +=  '<input type="text" class="txt_qty" value="1">'
        list +=  '<input type="button" class="btn_qty btn_plus" value="+">'
        list +=  '</div>'
        list += '</li>'
        list +=  '</ul>'
        list +=  '</div>'
        
        list += '<div class="total_sec">'
        list += '<div class="total_price">'
        // 총상품은 계산
        list +=  '총 상품 금액: <span class="final_price">'+ttt.toLocaleString('ko-KR')+'원</span>'
        list +=  '</div>'
        list +=  '<div>'
        list += '<span class="point">적립</span>'
        list +=  '로그인 후, 적립혜택 제공'
        list += '</div>'
        list += '</div>'

        list += '<div class="btn_buy_container">'
        list += '<div class="btn_add_cart">재입고 알림</div>'
        list +=  '<div class="btn_wish_list">장바구니 담기</div>'
        list += '<div class="btn_buy">구매하기</div>'
        list += '</div>'
        list += '</div>'
        list += '</div>'
    
        $('.detail_area').append( list )
    // }


 
    // 버튼 누르면 총액 바뀌기
    $(document).on('click', '.btn_plus', function(){   
        let tmp_qty = Number($(this).prev('.txt_qty').val()) + 1;
        $(this).prev('.txt_qty').val(tmp_qty)
        let total_price= Number($('.txt_qty').val()) * price;
        $('.final_price').text(total_price.toLocaleString('ko-KR')+"원")
        
    });

    $(document).on('click', '.btn_minus', function(){   
        let tmp_qty = Number($(this).next('.txt_qty').val()) - 1;

        if($(this).next('.txt_qty').val() > 1) {
            $(this).next('.txt_qty').val(tmp_qty)
            let total_price= Number($('.txt_qty').val()) * price
            $('.final_price').text(total_price.toLocaleString('ko-KR')+"원")
        } 
        else {
            alert("최소 주문 수량은 1개 입니다.")
        }
    });

// 헤더 메뉴 클릭하면 스크롤 이동
    // $(document).on('click', '.menu_ul a', function() {
    $('.act').click(function(event){
        // // 스크롤 이동
        // event.preventDefault();
        // let href = $(this).attr('href');
        // let o_top=$(href).offset().top;
        // $('html, body').animate({
        //     scrollTop: o_top
        // }, 1500)

        // // 메뉴 색변경
        // $('.detail_menu li').removeClass('active')
        // $(this).addClass('active')

    });




    //////// detail_menu_box 따라다니기 ///////
    // let dmb_height = $('.detail_menu_box').height();
    // let dmb_o_top = $('.detail_menu_box').offset().top;
    // let pd_height = $('.product_detail').height();
    // $(window).scroll(function(){

    //     let s_top = $(window).scrollTop() + pd_height;

    //     if(s_top >= dmb_o_top) {
    //         $('.detail_menu_box').css({
    //         //     position: 'fixed',
    //             // top: pd_height,
    //         //     left: 0,
    //         //     zIndex: 99999999
    //         });
    //         $('.detail_menu_box').addClass('pd_active')
    //         $('.wrap').css({
    //             paddingTop: dmb_height
    //         })
    //     }
    //     else {
    //         // $('.detail_menu_box').css({
    //         //     position: 'relative',
    //         //     top: 0,
    //         //     left: 0,
    //         //     zIndex: 99999999
    //         // });
    //         $('.detail_menu_box').removeClass('pd_active')
    //         $('.wrap').css({
    //             paddingTop: 0
    //         })
    //     }

    // });
});