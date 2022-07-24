$(document).ready(function(){
    let h_o_top = $('.header').offset().top;
    
    $(window).resize(function(){           
        if($(window).width() <= 960) {
            $('.header').removeClass('header_fixed');
            $('.logo_a').removeClass('logo_a_fixed');
            
            $('.nbsp').css({
                display: 'block',  
                height: '10px'             
            })
        };        
    });

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();  
////////////////헤더픽스////////////    
        if($(window).width() > 960) { 
            if(h_o_top > s_top || s_top == 0){
                $('.header').removeClass('header_fixed');
                $('.logo').removeClass('logo_fixed');
                $('.h_ul').removeClass('h_ul_fixed');
                
            }
            else if(h_o_top <= s_top){
                $('.header').addClass('header_fixed');
                $('.logo').addClass('logo_fixed');
                $('.h_ul').addClass('h_ul_fixed');
            }

        } 
    });
        let chk = 0; 
        $('.color_box').on('click', function(event){            
                
            event.preventDefault();
            event.stopPropagation();
            if(chk % 2 == 0){
                $('.color_box').css({
                    border: '1px solid #0b0b0b',
                    background: 'rgba(0,0,0,0.2)',
                   
                });
            }
            else{
                $('.color_box').css({
                    border: '1px solid #ddd',
                    background: 'none',
                });
            }
            chk += 1;
        });



    /////////////////////////////////////////////
    ///// 돋보기 /////
    let magnifier = $('.magnifier');
    let target = $('.item_big_img img');
    let target_w = target.width();
    let target_h = target.height();

    $('.item_big_img img').on({
        mouseenter: function(){
            target_w = target.width();
            target_h = target.height();
    
            magnifier.fadeIn(0)
        },
        mouseleave: function(){
            magnifier.fadeOut(0)
        },
        mousemove: function(){
            // 현재 마우스가 item_big_img를 기준으로 어디에 있는 찾기
            // 화면의 좌상단 0 0 지점을 기준으로 마우스 위치 - item_big_img의 위치값
            let mouseX = event.pageX - target.offset().left;
            let mouseY = event.pageY - target.offset().top;

            // 마우스가 원의 중심에 오게 하기
            let pos_X = mouseX - (magnifier.width() / 2);
            let pos_Y = mouseY - (magnifier.height() / 2);

            // 돋보기 안의 배경이미지 이동(이미지 위치 이동)
            let bg_X = -mouseX + (magnifier.width() / 2);
            let bg_y = -mouseY + (magnifier.height() / 2);

            // maginifier를 마우스 있는 곳으로 이동
            magnifier.css({
                left: pos_X,
                top: pos_Y,
                
                // 배경 이미지 원본이 target보다 더 크기때문에 target이랑 크기 맞추기
                backgroundSize: target_w + "px " + target_h + "px",  
                // 배경의 위치를 마우스가 이동한 반대로 이동
                backgroundPosition: bg_X + "px " + bg_y + "px",
    
            })
        }
    });    

    // 수량체크
    $(document).on('click', '.btn_minus', function(){
        let minus_qty = Number($(this).next('.txt_qty').val()) - 1;
        if(minus_qty > 0) {
            $(this).next('.txt_qty').attr('value', minus_qty);
            total_price();
        }
        else {
            alert("최소 주문 수량은 1개 입니다.");
        }
    })
    $(document).on('click', '.btn_plus', function(){
        let plus_qty = Number($(this).prev('.txt_qty').val()) + 1;
        if(plus_qty > 0) {
            $(this).prev('.txt_qty').attr('value', plus_qty);
            total_price();
        }
        else {
            alert("최소 주문 수량은 1개 입니다.");
        }
    })
    $(document).on('click', '.btn_price_del', function(){
        let tmp_index_no = $(this).next('.chk_item_order').val();
        color_opt_chk[tmp_index_no ] = true; 
        
        // console.log(color_opt_chk);
        
        // 선택자.remove() - 선택자의 안에 있는 내용을 없앰 
        $(this).parent().parent('tr').parent('tbody').remove();
        total_price();
    });

    function total_price() {
        let total_price = 0;
        // let total_qty = 0;

        for(let i=0; i< $('.txt_qty').length; i++) {
            total_price += $('.txt_qty').eq(i).val() * 35000;
            // total_qty += Number($('.txt_qty').eq(i).val());
        }
         
        $('#final_price').text(comma(total_price) + "원");
        // $('#final_qty').text(total_qty)
    }

    function comma(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }
});