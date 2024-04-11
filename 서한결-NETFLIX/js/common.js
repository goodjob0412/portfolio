// 공용으로 쓰는 common.js파일
// header 파트의 동작들과 main_banner의 자동으로 도는 함수 auto_slide
// btn 버튼 이벤트
// window resize 이베늩
// 그리고 item을 클릭했을 때 정보를 띄워주는 modal창 또한 가지고 있다.



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


// item click 이벤트 시 사용
let item_parent_index;
let item_index;


function auto_slide() {
  let bang = 0;
  let bn = $('.banner');
  let bn_length = $('.banner').length;
  
  
  // console.log('bn_length: ' + bn_length)
  
  bn.eq(0).css({ display: 'block'});
  setInterval(function() {
    bn.eq(bang % bn_length).css({zIndex: 1}).delay(1000).fadeOut(1000);

    bang += 1;

    bn.eq(bang % bn_length).css({zIndex: 9}).fadeIn(1000);
  }, 5000)
}


function move_move(direction, item, sbr) {
        
  // 동작 파트 R
  if (direction == 'right') {
      $(`#${item} .item`).animate({
          left: `-=${item_width}`
      }, timer , 'linear')

      $(`#${item} .item`).eq((sbr + 1) % item_length).animate({
        left: 0
      }, 0);

      $(`#${item} .item`).eq((sbr - 1) % item_length).animate({
          left: item_width * (item_length - 2)
      }, 0);

      console.log('오른쪽 sbr', sbr % item_length)
  }

  // 동작 파트 L
  if (direction == 'left') {
      $(`#${item} .item`).eq((sbr - 1) % item_length).animate({
          left: -item_width
      }, 0);

      $(`#${item} .item`).eq((sbr - 2) % item_length).animate({
          left: -item_width * 2
      }, 0);

      $(`#${item} .item`).animate({
          left: `+=${item_width}`
      },timer, 'linear')

      console.log('왼쪽 sbr', sbr % item_length)
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
  let m_search_chk = true;

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

    // 화면 좁아질 때 search 길이 조절(768 이하)
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

    // 화면 좁아질 때 search 길이 조절(440 이하)
    if(w_width <= 440 && m_search_chk != false) {
      $('#search').css({
        width: '70px'
      }).focus()
      m_search_chk = false;
    }
    else if(w_width <= 440 && m_search_chk != true){
      $('.search_icon_box').css({
        border: 'none',
        backgroundColor: 'transparent'
      })
      $('#search').css({
        width: '0'
      })
      m_search_chk = true;
    }
  })




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
  })


  $(document).keydown(function(e) {
    console.log(e.keyCode)
    if(e.keyCode == 27) {
        $('.modal').css({ display: 'none' });
        $('body').css({ overflow: 'auto' });
    }
  })


})
