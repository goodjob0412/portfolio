$(document).ready(function(){

    // 메인 배너 backgournd 랜덤선택


    let rand_cnt = Math.floor(Math.random()*4);


    $('.banner').append(`<img src="../img/${rand_cnt}_Kv_PC_Light.webp" alt="11" class="banner_img">`)



    const $form = document.querySelector('form');

    $form.addEventListener("submit", (event) => {
    // 시작일 종료일 비교하여 종료일이 같거나 뒤에 있을 경우 전송 막기
        let start_date = $('#start_date').val();
        let end_date = $('#end_date').val();
        let str_locate = $('#location').val();


        chk_null(str_locate, "지역을 입력해주세요", event)

        chk_date_vaild(start_date, end_date, "시작일이 종료일 보다 늦습니다", event)


    });

    

    // 해당 값 널 체크 -> null일 경우 버튼 클릭 못하게
      function chk_null(str_target , message, event){

        if(str_target == ""  || str_target == null){
            alert(message)
            event.preventDefault();
        }
      }

      // 날짜를 확인해서 시작일이 종료일보다 늦을 경우에는 form이동 x
      function chk_date_vaild(start_date, end_date , message, event){
        let start = new Date(start_date)
        let end = new Date(end_date)
        if(start > end){
            alert(message);
            event.preventDefault();
        }
      }




    // 이벤트 배너 넣기
    envent_list = ['광고0','광고1','광고2','광고3','광고4','광고5','광고6','광고7','광고8']



    // 이벤트 방  첫번째 방
    let event_bang = 0;
    // 총 이벤트 개수
    let event_bant_cnt = envent_list.length;
    // 한번에 보내줄 개수
    let one_view_cnt = 1;
    // 총 인티 카운트
    let indi_cnt = event_bant_cnt / one_view_cnt;

    // 배너가 자동으로 변하는 시간 1초
    let int_bn_timer = 1000






    //이벤트 광고 한개의 방당 3개 추가
    for(let i = 0; i < event_bant_cnt; i++){
        // div 생선
        let add_html = `<div class="event_inner">`
            // 내부 값 추가
            add_html += `
                <a href="#" class="event_img_box">
                <img class="event_img" src="../img/광고${i}.jpg" alt="광고${i}">
                </a>
            `
        // 닫을 div 생성
        add_html += `</div>`
        $('.event_banner').append(add_html)
    }
    
    // 이벤트 첫번째 방 보이게
    $('.event_inner').eq(0).css({left:'0'})

    // 버튼 추가
    $('.event_box').append('<div class="btn_backgrond backgrond_L"><div class="btn_slide" id="btn_L"></div></div>')
    $('.event_box').append('<div class="btn_backgrond backgrond_R"><div class="btn_slide" id="btn_R"></div></div>')

    // .event_banner에 호버시 opactiy 0.6로 변경
    // btn_backgrond에 호버될 때 ㅐ역시 추가
    $('.event_banner').on('mouseenter', function(){
        $('.btn_backgrond').css({opacity:'0.6'})
    }).on('mouseleave', function(){
        $('.btn_backgrond').css({opacity:'0'})
    })
    $('.btn_backgrond').on('mouseenter', function(){
        $('.btn_backgrond').css({opacity:'0.6'})
    }).on('mouseleave', function(){
        $('.btn_backgrond').css({opacity:'0'})
    })


    // 인디케이트 추가
    $('.event_box').append(`<div class="indi"></div>`)

    // 인디케이트 넣기
    for(let i = 0; i < indi_cnt; i++){
        $('.indi').append(`<div class="line"></div>`)
    }
    $('.line').eq(0).addClass('line_active')

    // 인티케이터 페이지 색상변경

    function indi_page(){
        $('.line').removeClass('line_active')
        $('.line').eq(event_bang % event_bant_cnt).addClass('line_active')
    }

    // 슬라이드 생성
    function slide(o_pos, c_idx,c_pos){
        btn_init();

        // 내보낼판
        $('.event_inner').eq(event_bang % event_bant_cnt).animate({
            left:o_pos
        },int_bn_timer, 'linear')

        // 들어올판
        $('.event_inner').eq(c_idx).css({
            left: c_pos
        }).animate({
            left: 0
        }, int_bn_timer , 'linear')

        event_bang = c_idx
        indi_page()
    }

    //     $('.event_inner').eq(0).css({left:'0'})

    $('.backgrond_R').on('click', function(){
        clearInterval(auto_ivterval); 
        slide('-100%', (event_bang+1) % event_bant_cnt, '100%')
    })

    $('.backgrond_L').on('click', function(){
        clearInterval(auto_ivterval); 
        slide('100%', (event_bang-1) % event_bant_cnt, '-100%')
    })


    
    let auto_ivterval;
    function auto_slide(){
        auto_ivterval = setInterval(function(){
            $('.backgrond_R').trigger('click')
        },int_bn_timer + 2000)
    }

    auto_slide();

    // 호버시 오토 슬라이드 중지
    $(document).on('mouseover','.event_box', function(){
        clearInterval(auto_ivterval); 
    })
    $(document).on('mouseleave','.event_box', function(){
        auto_slide();
    })

    // 버튼 클릭 막는 기본 설정
    function btn_init(){
        $('.btn_slide').css({PointerEvent:'none'})
        setTimeout(() => {
           $('.btn_slide').css({PointerEvent:'auto'}) 
        }, int_bn_timer);
    }

     // 배너





    // 한번에 보여줄 개수 
    let int_event_view_cnt = 3


    // 사진을 랜덤으로 넣기 위해 랜덤 숫자 뽑기
    function make_rand_cnt(make_cnt, list_cnt){
        let arr_list = [list_cnt]
        

        let while_cnt = 0;
        while(true){
            let rand_cnt2 = Math.floor(Math.random()*make_cnt);

            if(arr_list.indexOf(rand_cnt2) == -1){
                arr_list[while_cnt] = rand_cnt2;
                while_cnt++;
            }
            if(while_cnt == list_cnt)break;

        }

        return arr_list
    }

    let arr_img_domesitc =  make_rand_cnt(arr_domestic_list.length,int_event_view_cnt)
    console.log("국내 보여줄 번호 :: " + arr_img_domesitc)

    // 국내이미지 추가!


    for(let i = 0; i < arr_img_domesitc.length; i++){
        let add_bang = arr_domestic_list[arr_img_domesitc[i]]
        $('#domestic').append(`<div class="travel_img_box domestic_box">
        <a href="../html/travel_detail.html?location=${add_bang}">
            <img class="travel_img domestic_img" src="../img/${add_bang}.jpg" alt="${add_bang}">
            <p>${arr_domestic_korean[arr_img_domesitc[i]]}</p>
        </a>
    </div>`)
    }
    

    // 해외
    console.log(arr_oversea_list.length,int_event_view_cnt)
    let arr_img_overseas = make_rand_cnt(arr_oversea_list.length,int_event_view_cnt)
    console.log("overseas img list :: "+arr_img_overseas)

    for(let i = 0; i < arr_img_overseas.length; i++){
        let add_bang = arr_oversea_list[arr_img_overseas[i]]

        $('#oversea').append(`<div class="travel_img_box oversea_box">
        <a href="../html/travel_detail.html?location=${arr_oversea_list[arr_img_domesitc[i]]}">
            <img class="travel_img oversea_img" src="../img/${add_bang}.jpg" alt="${add_bang}">
            <p>${arr_oversea_koean[arr_img_domesitc[i]]}</p>
        </a>
    </div>`)
    }

    // 인기 여행지에 마우스가 호버 될 경우 
    // 국내 
 
    $('.domestic_box').on("mouseenter", function(){
        let idx = $(this).index();
        $('.domestic_img').eq(idx).addClass("travel_active")
    })    
    $('.domestic_box').on("mouseleave", function(){
        let idx = $(this).index();
        $('.domestic_img').eq(idx).removeClass("travel_active")
    })    

    $('.oversea_box').on("mouseenter", function(){
        let idx = $(this).index();
        $('.oversea_img').eq(idx).addClass("travel_active")
    })    
    $('.oversea_box').on("mouseleave", function(){
        let idx = $(this).index();
        $('.oversea_img').eq(idx).removeClass("travel_active")
    })    


    // 스크롤 위치에 따른 화면 위로 올리기
    
    // 필요한 거의 스크롤 위치 잡기
    let travel_dome_o_top = $('#travel_domestic').offset().top
    let travel_over_o_top = $('#travel_oversea').offset().top
    let w_top = $(window).height();
    console.log("탑 :; " + w_top)
    console.log("탑 2 :: " + travel_dome_o_top)

    let pos_check = new Array($('.pos_chk').length);
    for(let i = 0; i < pos_check.length; i++){
        pos_check[i] = true;
    }

    if(w_top > travel_dome_o_top){
        item_slide_up($('.domestic_box'))
            pos_check[0] = false;
            travel_over_o_top = $('#travel_oversea').offset().top
    }


    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();


        if((pos_check[0] && s_bot >= travel_dome_o_top)){
            item_slide_up($('.domestic_box'))
            pos_check[0] = false;
            travel_over_o_top = $('#travel_oversea').offset().top
        }
        

        if(pos_check[1] && s_bot - 100 >= travel_over_o_top){
            item_slide_up($('.oversea_box'))
            pos_check[1] = false;
            travel_over_o_top = $('#travel_oversea').offset().top
        }


    })

    function item_slide_up(el){
        console.log("el count :: " + el.length)
        for(let i = 0; i < el.length; i++){
            setTimeout(() => {
                el.eq(i).toggleClass('pos_init_active')
            }, 100*i);
        }
    }

})