

// 변수 모음--------
let item_length = $('.item').length; // 클래스 item의 길이 구하기
let item_width = $('.item').outerWidth(); // 요소 item의 너비 구하기
let timer = 300;

let w_width = $(window).innerWidth(); // scroll 이벤트 사용

// btn과 modal 이벤트 때 사용
let item_parent;

// sec의 개수에 비례하는 bang값 만들기
let sec_bang_arr = new Array();

// resize_item_width() 이벤트때 사용
let img_height = 0;



function resize_item_width(){ // cate가 꼭 필요할까?? cate는 sec의 id값들을 달고 있는 배열 EL_ARR을 꺼내다쓰는 용도이다.
  item_length = $('.item').length;
  item_width = $('.item').outerWidth();

  // 설명: 요소 item들마다 자신의 너비만큼 left를 때는데 겹치지 않게 배치하기 위해 요소의 인덱스가 증가할 때마다 left에 인덱스에 비례하는 i값을 곱해주기

  // 각 섹션에 item들을 해당되는 ITEM_LIST[i] 의 길이만큼 left값 주기
  for(let i=0; i<ITEM_LIST.length; i++){
    for(let j=0; j<ITEM_LIST[i].length; j++) {
      $(`#${EL_ARR[i]} .item`).eq(j).css({
        left: (item_width * j), 
        padding: '0 4px' // item 들 사이 여백 주기
      });
    }
  }


  
  // img 높이를 그 부모 요소인 img_box에 넣어주기
  for(let i=0; i<EL_ARR.length; i++){
    
    // 각 img들의 높이를 담은 변수
    img_height = $(`#${EL_ARR[i]} .item_box img`).height();
    

    // 설명: img의 높이를 item의 부모인 item_box의 높이에 붙여주기.
    $(`#${EL_ARR[i]} .item_box`).css({
      height: img_height
    })

    // btn의 line-height를 각 섹션 img의 height에 딱 맞게 넣어주기
    $(`#${EL_ARR[i]} .btn`).css({
      lineHeight: img_height + "px"
    })
  }
}


$(document).ready(function () {

  /*
    - head_R 의 search 아이콘 누르면 input:text가 등장!
      1. input의 width 평소엔 0으로
         border도 아예 없이
         background도 transparent로
      2. 돋보기 누르면 search 아이콘의 너비가 늘어남

    - main_banner 
      1. banner들 이미지 pade in out 만들기


    - section
      1. sec에 item들 넣고 서로 겹치지 않게 가로로 배치하기 (O)
      2. 좌, 우 화살표 버튼을 누르면 그 방향에 따라 item들이 움직임.
        대신 각 화면에 들어있는 li들의 개수만큼 움직여야 한다.
        (li가 화면에 5개면 5칸 움직이기)
      3. indi게이트 버튼 만들기

    - item
      1. 옆에 공간주기
  */


// head_L의 메뉴 hover
  $('.head_menu').hover(function() {
    $('.h_menu_pan').stop().fadeIn(300);
    
  }, function() {
    $('.h_menu_pan').stop().fadeOut(300);
  })

// head_R의 alarm_btn 아이콘 hover
  $('.alarm_btn').hover(function() {
    $('.alarm_pan_box').stop().fadeIn(300);
  }, function() {
    $('.alarm_pan_box').stop().fadeOut(300);
  })





// head_R search_icon click 이벤트!

  let search_chk = true; // head_menu를 위한 chk 변수
  let f_search_chk = true;
  $('.search_btn').click(function() {
    if(search_chk != false){
      $('.search_icon_box').css({
        border: '0.5px solid #fff',
        backgroundColor: 'black'
      })
      $('#search').css({
        width: '200px'
      }).focus()
      search_chk = false;
    }
    else if(search_chk != true){
      $('.search_icon_box').css({
        border: 'none',
        backgroundColor: 'transparent'
      })
      $('#search').css({
        width: '0'
      })
      search_chk = true;
    }
    

    w_width = $(window).innerWidth();
    console.log('130', w_width, search_chk);

    // 화면 좁아질 때 search 길이 조절
    if(w_width <= 768 && f_search_chk != false) {
      $('#search').css({
        width: '130px'
      }).focus()
      f_search_chk = false;
    }
    else if(w_width <= 768 && f_search_chk != true){
      $('.search_icon_box').css({
        border: 'none',
        backgroundColor: 'transparent'
      })
      $('#search').css({
        width: '0'
      })
      f_search_chk = true;
    }
  })


  
  for(let i=0; i<EL_ARR.length; i++) {
    sec_bang_arr.push(0);
  }
  

// item 배치 후 바로 함수 돌리기
  setTimeout(function () {
    resize_item_width();

    // for(let i=0; i<$('.sec').length; i++){
    //   console.log('135 i', i);
    //   img_height = $(`#${EL_ARR[i]} img`).height();
    //   console.log(img_height);

    //   $(`#${EL_ARR[i]} item_box`).css({
    //     height: img_height
    //   })
    // }


  }, 100)



// window resize 이벤트!
// resize-설명: window 너비 변할 시 item들도 화면에 맞춰 변하기()
  $(window).resize(function (){

    item_length = $('.item').length; // item_length를 resize 이벤트 뒤에 다시 새로고침.

    item_width = $('.item').outerWidth(); // item_width값이 화면의 너비에 따라 작아지고 커지길 반복하니 resize 이벤트 될 때마다 새로고침
    console.log('item_width', item_width);
    
    img_height = $('.item').height();
    console.log('img_height: ' + img_height)

    resize_item_width();
    

    w_width = $(window).innerWidth();
    // 반응형 h_menu_pan에 h_nav_ul 넣기(1024일때 h_nav_pan은 display:none 이니까 그냥 똑같은거 하나 더 만들어서 따로 넣어줘야지.)


  })

// 반응형 구현
  




// item 슬라이드!!

/*
  const EL_ARR = ['top_ten','action', 'click_contents', 'new_contents']
  sec_bang_arr = [0, 0, 0, 0]
*/

  // btn_L 이벤트
  // $(`.sec > .btn_L`).click(function() { 메모리상 맞물리는 타이밍이 어긋나서 btn 동작이 먹질 않았다. 그래서 on 이벤트로 교체

  $(document).on('click','.sec > .btn_L', function(){


    // 선택한 btn_L의 부모 아이디값
    item_parent = $(this).parents('.sec').attr('id');
    // 선택한 btn의 부모 sec의 자식 item의 개수
    item_length = $(`#${item_parent} .item`).length;
    
    // id 값을 뽑기 위해 확인 테스트
    console.log(`#${item_parent}`);

    stop_btn();
    
    // $(`#${item_parent} .item`).eq(sec_bang_arr[])
    console.log(EL_ARR.indexOf(`${item_parent}`)) // 0, 1, 2, 3

    let proportion_arr = EL_ARR.indexOf(`${item_parent}`);

    // EL_ARR 와 sec_bang_arr 의 값은 언제나 비례하니 EL_ARR의 인덱스 값을 뽑아 sec_bang_arr에 넣어주면 된다.


    // for(let i=0; i<5; i++) {
      
    // }
    for(let i=0; i<5; i++) {
      move_move('left', item_parent, sec_bang_arr[proportion_arr])
      
      sec_bang_arr[proportion_arr] -= 1
    }
  })

  // .btn_R 이벤트
  $(document).on('click','.sec > .btn_R', function(){


    item_parent = $(this).parents('.sec').attr('id');
    item_length = $(`#${item_parent} .item`).length;
    stop_btn();

    let proportion_arr = EL_ARR.indexOf(`${item_parent}`);

    
    move_move('right', item_parent, sec_bang_arr[proportion_arr])

    sec_bang_arr[proportion_arr] += 1

  })

  // btn 동작 함수
  function move_move(direction ,item, sbr) {
    
    // 동작 파트 R
    if(direction == 'right'){
      $(`#${item} .item`).animate({
        left: `-=${item_width}`
      }, 'linear')
  
      $(`#${item} .item`).eq(sbr % item_length).animate({
        left: -item_width
      }, 0);
  
      $(`#${item} .item`).eq((sbr - 1) % item_length).animate({
        left: item_width * (item_length - 2)
      }, 0);
    }

    // 동작 파트 L
    if(direction == 'left'){
      $(`#${item} .item`).eq((sbr - 1) % item_length).animate({
        left: -item_width
      }, 0);

      $(`#${item} .item`).eq((sbr - 2) % item_length).animate({
        left: -item_width * 2
      }, 0);
      
      $(`#${item} .item`).animate({
        left: `+=${item_width}`
      }, 'linear')

    }


  }  

      




  // 설명: 동작이 완료될때까지 버튼 비활성화
  function stop_btn() {
    $('.btn').css({
      pointerEvents: 'none'
    })
    setTimeout(function() {
      $('.btn').css({
        pointerEvents: 'auto'
      })
    }, timer)

  }

  // 설명: section 들을 생성!!
  for(let i=0; i< EL_ARR.length; i++) {
    load_item(i);
  }

// test, item 클릭했을 때 modal가 display: block이 되고 body의 overflow 속성이 hidden, 그리고 modal_banner_box의 background img가 item의 banner_img로, modal_banner_title은 속성의 title_img로



  $('.item').click(function() {

    item_parent = $(this).parents('.sec').attr('id'); // 부모section의 아이디 값 잡기 
    console.log('item_parent:',item_parent);
    let item_parent_index =  EL_ARR.indexOf(item_parent); // 부모 section의 인덱스 위치
    console.log('item_parent_index:',item_parent_index)
    let item_index = $(this).index(); // 현재 item의 인덱스 위치
    console.log('item_index:', $(this).index())

    console.log(`${ITEM_LIST[item_parent_index][item_index].banner_img}`);

    $('body').css({ overflow: 'hidden'});
    

    let modal = 
    `<div class="modal">
        <div class="modal_item_popup">
            <button class="modal_close">X</button>

            <div class="modal_banner">
                <div class="modal_banner_box">
                    <div class="modal_banner_title">
                        <img src="../img/NETFLEX/${item_parent}/${ITEM_LIST[item_parent_index][item_index].title_img}" alt="">
                    </div>
                    <div class="play_btn_box">
                        <div class="play_btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
                        </div>
                        <div class="play_txt">재생</div> 
                    </div>
                </div>
            </div>
            
            <div class="modal_desc">
              ${ITEM_LIST[item_parent_index][item_index].desc}
            </div>
        </div>
    </div>
    `

    
    $('body').append(modal);
    
    $('.modal_banner_box').css({
    background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${item_parent}/${ITEM_LIST[item_parent_index][item_index].banner_img}) no-repeat center / cover`
    })
    $('.modal').css({ display: 'block'}); // 순서 중요
    
    console.log(`linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${item_parent}/${ITEM_LIST[item_parent_index][item_index].banner_img}) no-repeat center / cover`)
  }) // $('.item').click의 끝

  // modal 안의 X(modal_close)를 눌렀을 때 modal 화면 지우기
  $(document).on('click','.modal_close', function() {
    console.log('modal_close 확인!');
    $('.modal').css({display: 'none'});
    $('body').css({ overflow: 'auto' });
  })




  // 맨 마지막 번째 sec 잡기
  console.log($('.container > .sec').last().attr('id'));
  console.log($('.container > .sec').last().attr('id'));

  console.log($('#top_ten').index());
  console.log($('#new_contents').index());

// scroll 이벤트
  $(window).scroll(function() {


    let s_top = $(document).scrollTop();
    // 설명: header의 offset().top이 100 이하로 내려갈때 background: black으로
    if($('header').offset().top >= 100) {
      $('.header').css({
        background: 'black'
      })
    }
    else {
      $('.header').css({
        background: 'transparent'
      })
    }
    
    
    let d_height = $(document).height();
    let s_bot = $(window).scrollTop() + $(window).height();
    
    
    // console.log('d_height, s_bot:' + d_height, s_bot);
    // 새로고침 했을 때 스크롤 바가 고무줄처럼 늘어났다 줄어듬

    // 무한 스크롤 파트
    

    

  })

// main_banner 슬라이드 이벤트-----------------------------
  


}) // $(document).ready(function() {})의 끝!












