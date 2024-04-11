

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
    $('.h_menu_pan').css({ display: 'block'});
  }, function() {
    $('.h_menu_pan').stop().fadeOut(300);
  })





// head_R search_icon click 이벤트!

  let search_chk = true; // head_menu를 위한 chk 변수
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
  })


  let item_length = $('.item').length; // 클래스 item의 길이 구하기
  let item_width = $('.item').outerWidth(); // 요소 item의 너비 구하기
  let timer = 300;

  let w_width = $(window).innerWidth(); // scroll 이벤트 사용

  // sec의 개수에 비례하는 bang값 만들기
  let sec_bang_arr = new Array();
  console.log(sec_bang_arr);
  
  for(let i=0; i<EL_ARR.length; i++) {
    console.log('sec_bang_arr의 반복문 확인 i:', i)
    sec_bang_arr.push(0);
  }
  console.log(sec_bang_arr.length)
  console.log('sec_bang_arr: ' + sec_bang_arr);
  


  function resize_item_width() { // cate가 꼭 필요할까?? cate는 sec의 id값들을 달고 있는 배열 EL_ARR을 꺼내다쓰는 용도이다.
    item_length = $('.item').length;
    item_width = $('.item').outerWidth();
    //console.log("item_width", item_width); // item의 너비 확인
    console.log("item_length: " + item_length);

    // 설명: 요소 item들마다 자신의 너비만큼 left를 때는데 겹치지 않게 배치하기 위해 요소의 인덱스가 증가할 때마다 left에 인덱스에 비례하는 i값을 곱해주기


    for(let i=0; i<ITEM_LIST.length; i++){
      console.log('i:', i);
      console.log('ITEM_LIST.length, ITEM_LIST[i].length:', ITEM_LIST.length, ITEM_LIST[i].length);

      for(let j=0; j<ITEM_LIST[i].length; j++) {


        // 테스트용도
        // if(EL_ARR[cate] == 'top_ten') {
        //   console.log("top_ten!");
        //   console.log(i++)
        // }
        // console.log('j:',j)

        $(`#${EL_ARR[i]} .item`).eq(j).css({
          left: (item_width * j), 
          padding: '0 4px' // item 들 사이 여백 주기
        });

        
      }
      // 설명: 한줄에 img를 전부 다 보여줄 수 있게 li들이 배치되었을 때 맨 마지막 li을 첫번째 박스 뒤에 붙여준 것.
      // $(`#${EL_ARR[i]} .item`).eq((bang - 1) % item_length).animate({
      //   left: -item_width,
      //   zIndex: 99
      // }, 0)

    }


    

    for(let i=0; i<EL_ARR.length; i++){
      
      // 각 img들의 높이를 담은 변수
      let img_height = $(`#${EL_ARR[i]} .item_box img`).height();
      console.log(img_height)

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

  setTimeout(function () {
    resize_item_width(); // item 배치 후 바로 함수 돌리기
    // w_wdith_event()
  }, 100)


// window resize 이벤트!
// resize-설명: window 너비 변할 시 item들도 화면에 맞춰 변하기()
  $(window).resize(function (){

    item_length = $('.item').length; // item_length를 resize 이벤트 뒤에 다시 새로고침.
    console.log('item_length:', item_length) // 새로고침한 item_length 확인

    item_width = $('.item').outerWidth(); // item_width값이 화면의 너비에 따라 작아지고 커지길 반복하니 resize 이벤트 될 때마다 새로고침
    console.log('item_width', item_width);
    
    console.log($(window).scrollTop());

    // 이상하게 화면을 켰을 때 안되고 꼭 이렇게 resize 이벤트를 실행시킨 뒤에야 이미지들이 배치가 된다. 왜인지 모르겠어
    resize_item_width();
    

    // 미리 화면 사이즈 확인
    // console.log('$(window).innerWidth(): ', $(window).innerWidth())

    w_width = $(window).innerWidth();
    // 반응형 h_menu_pan에 h_nav_ul 넣기(1024일때 h_nav_pan은 display:none 이니까 그냥 똑같은거 하나 더 만들어서 따로 넣어줘야지.)

    w_wdith_event()

    
    
  })


  function w_wdith_event() {
    console.log('w_width:',w_width);
    if(w_width <= 900 && w_width >= 500) {
      $('.modal_item_popup').css({
        width: '80%'
      }) 
    }
    
    if(w_width >= 1024) {
      $('.modal_item_popup').css({
        width: '916px'
      }) 
    }

    if(w_width <= 480) {
      $('.modal_item_popup').css({
        width: '400px'
      }) 
    }
    else {
      $('.modal_item_popup').css({
        width: '80%'
      }) 
    }
  }




// item 슬라이드!!
// 현재 각 섹션 마다 btn 이벤트 걸어주는 중. 시간 봐서 전부 합쳐야겠다. 함수 쓰고 매개변수를 사용하면 되지 않을까? => 반복문 걸어주니 돌아간다.



  // 각 sec의 방에 사용될 bang 변수들을 배열로

    for(let i=0; i<ITEM_LIST.length; i++) {

      $(`#${EL_ARR[i]} > .btn_L`).click(function() {
        
        item_length = $(`#${EL_ARR[i]} .item`).length; // 설명: 새로고침 안해주면 처음 값 0으로 고정되 새로고침을 안해줄수가 없었다.
        item_width = $(`#${EL_ARR[i]} .item`).outerWidth(); // 설명: 이것또한 item_length와 마찬가지.

        console.log(`#${EL_ARR[i]}의 length ` + item_length)
    
        stop_btn(); // 설명: 동작이 완료될때까지 버튼 비활성화
    
        // 확인 테스트
        console.log('item_length', item_length);
        console.log('item_width', item_width);
    
      
        // btn_L 클릭시 bang - 1 번째 것은 -item_width 위치에 미리 가져다 놓기
        $(`#${EL_ARR[i]} .item`).eq((sec_bang_arr[i] - 1) % item_length).animate({
          left: -item_width
        }, 0);
        // btn_L 클릭시 bang - 2 번째 것도 미리 -item_width * 2 위치에 미리 가져다 놓기 그럼 화면이 전부 연결된 것처럼 보이게 된다.
        
        $(`#${EL_ARR[i]} .item`).eq((sec_bang_arr[i] - 2) % item_length).animate({
          left: -item_width * 2
        }, 0);
        $(`#${EL_ARR[i]} .item`).animate({
          left: `+=${item_width}`
        },timer, 'linear')
        
        sec_bang_arr[i] -= 1

        // 방번호를 못잡아
        console.log(sec_bang_arr[i])
      })

      // .btn_R 이벤트
      $(`#${EL_ARR[i]} > .btn_R`).click(function() {
        item_length = $(`#${EL_ARR[i]} .item`).length; // 설명: btn_L과 같은 이유
        
        item_width = $(`#${EL_ARR[i]} .item`).outerWidth(); // 설명: btn_L과 같은 이유
    
        // 확인 테스트
        console.log('item_length', item_length);
        console.log('item_width', item_width);
        console.log(`#${EL_ARR[i]}의 length ` + item_length)
    
        stop_btn()
        

        
        $(`#${EL_ARR[i]} .item`).animate({
          left: `-=${item_width}`
        },timer)

        // 이동하면서 bang은 -item_width 위치에
        $(`#${EL_ARR[i]} .item`).eq(sec_bang_arr[i] % item_length).animate({
          left: -item_width
        },0)

        // 이동하면서 bang-1 번째 것은 맨 끝의 위치에
        $(`#${EL_ARR[i]} .item`).eq((sec_bang_arr[i] - 1) % item_length).animate({
          left: item_width * (item_length - 2)
        },0)
        

        // 
        sec_bang_arr[i] += 1;
    
      })
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

  load_item(); // 설명: item 들 생성!!

// test, item 클릭했을 때 modal가 display: block이 되고 body의 overflow 속성이 hidden, 그리고 modal_banner_box의 background img가 item의 banner_img로, modal_banner_title은 속성의 title_img로


  $('.item').click(function() {

    let item_parent = $(this).parents('.sec').attr('id'); // 부모section의 아이디 값 잡기 
    console.log('item_parent:',item_parent);
    let item_parent_index =  EL_ARR.indexOf(item_parent); // 부모 section의 인덱스 위치
    console.log('item_parent_index:',item_parent_index)
    let item_index = $(this).index(); // 현재 item의 인덱스 위치
    console.log('item_index:',$(this).index())

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


  $(window).scroll(function() {
    let s_top = $(document).scrollTop()
    
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

// main_banner 슬라이드 이벤트-----------------------------
  


}) // $(document).ready(function() {})의 끝!












