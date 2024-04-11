

let cateNo;
let modal;


// NAV_ITEM_CATE_NAME


function nav_resize_item_width(cateNo) { 

    // nav.html에 cateNo에 달라지는 화면의 사이즈에 따른 item들의 사이즈를 조절해주는 중요한 함수.

    if(cateNo == 0){
        item_length = $('.item').length;
        item_width = $('.item').outerWidth();

        // 설명: 요소 item들마다 자신의 너비만큼 left를 때는데 겹치지 않게 배치하기 위해 요소의 인덱스가 증가할 때마다 left에 인덱스에 비례하는 i값을 곱해주기

        // 각 섹션에 item들을 해당되는 ITEM_LIST[i] 의 길이만큼 left값 주기
        for (let i = 0; i < NAV_ACTION.length; i++) {
            for (let j = 0; j < NAV_ACTION[i].length; j++) {
                $(`#${action_sec_id[i]} .item`).eq(j).css({
                    left: (item_width * j),
                    padding: '0 4px' // item 들 사이 여백 주기
                });
            }
        }

        // 방값 초기화 시켜주기
        for(let i=0; i<action_sec_id.length; i++) {
            sec_bang_arr.fill(0);
        }

        // img 높이를 그 부모 요소인 img_box에 넣어주기
        for (let i = 0; i < action_sec_id.length; i++) {

            // 각 img들의 높이를 담은 변수
            img_height = $(`#${action_sec_id[i]} .item_box img`).height();


            // 설명: img의 높이를 item의 부모인 item_box의 높이에 붙여주기.
            $(`#${action_sec_id[i]} .item_box`).css({
                height: img_height
            })

            // btn의 line-height를 각 섹션 img의 height에 딱 맞게 넣어주기
            $(`#${action_sec_id[i]} .btn`).css({
                lineHeight: img_height + "px"
            })
        }
    }

    if(cateNo == 1){
        item_length = $('.item').length;
        item_width = $('.item').outerWidth();

        // 설명: 요소 item들마다 자신의 너비만큼 left를 때는데 겹치지 않게 배치하기 위해 요소의 인덱스가 증가할 때마다 left에 인덱스에 비례하는 i값을 곱해주기

        // 각 섹션에 item들을 해당되는 ITEM_LIST[i] 의 길이만큼 left값 주기
        for (let i = 0; i < KIDS.length; i++) {
            for (let j = 0; j < KIDS[i].length; j++) {
                $(`#${kids_sec_id[i]} .item`).eq(j).css({
                    left: (item_width * j),
                    padding: '0 4px' // item 들 사이 여백 주기
                });
            }
        }

        // 방값 초기화 시켜주기
        for(let i=0; i<kids_sec_id.length; i++) {
            sec_bang_arr.fill(0);
        }

        // img 높이를 그 부모 요소인 img_box에 넣어주기
        for (let i = 0; i < kids_sec_id.length; i++) {

            // 각 img들의 높이를 담은 변수
            img_height = $(`#${kids_sec_id[i]} .item_box img`).height();


            // 설명: img의 높이를 item의 부모인 item_box의 높이에 붙여주기.
            $(`#${kids_sec_id[i]} .item_box`).css({
                height: img_height
            })

            // btn의 line-height를 각 섹션 img의 height에 딱 맞게 넣어주기
            $(`#${kids_sec_id[i]} .btn`).css({
                lineHeight: img_height + "px"
            })
        }
    }

    if(cateNo == 2){
        item_length = $('.item').length;
        item_width = $('.item').outerWidth();

        // 설명: 요소 item들마다 자신의 너비만큼 left를 때는데 겹치지 않게 배치하기 위해 요소의 인덱스가 증가할 때마다 left에 인덱스에 비례하는 i값을 곱해주기

        // 각 섹션에 item들을 해당되는 ITEM_LIST[i] 의 길이만큼 left값 주기
        for (let i = 0; i < NAV_LOMANCE.length; i++) {
            for (let j = 0; j < NAV_LOMANCE[i].length; j++) {
                $(`#${lomance_sec_id[i]} .item`).eq(j).css({
                    left: (item_width * j),
                    padding: '0 4px' // item 들 사이 여백 주기
                });
            }
        }

        // 방값 초기화 시켜주기
        for(let i=0; i<lomance_sec_id.length; i++) {
            sec_bang_arr.fill(0);
        }

        // img 높이를 그 부모 요소인 img_box에 넣어주기
        for (let i = 0; i < lomance_sec_id.length; i++) {

            // 각 img들의 높이를 담은 변수
            img_height = $(`#${lomance_sec_id[i]} .item_box img`).height();


            // 설명: img의 높이를 item의 부모인 item_box의 높이에 붙여주기.
            $(`#${lomance_sec_id[i]} .item_box`).css({
                height: img_height
            })

            // btn의 line-height를 각 섹션 img의 height에 딱 맞게 넣어주기
            $(`#${lomance_sec_id[i]} .btn`).css({
                lineHeight: img_height + "px"
            })
        }
    }

    if(cateNo == 3){
        item_length = $('.item').length;
        item_width = $('.item').outerWidth();

        // 설명: 요소 item들마다 자신의 너비만큼 left를 때는데 겹치지 않게 배치하기 위해 요소의 인덱스가 증가할 때마다 left에 인덱스에 비례하는 i값을 곱해주기

        // 각 섹션에 item들을 해당되는 ITEM_LIST[i] 의 길이만큼 left값 주기
        for (let i = 0; i < DOCUMENTARY.length; i++) {
            for (let j = 0; j < DOCUMENTARY[i].length; j++) {
                $(`#${documentary_sec_id[i]} .item`).eq(j).css({
                    left: (item_width * j),
                    padding: '0 4px' // item 들 사이 여백 주기
                });
            }
        }

        // 방값 초기화 시켜주기
        for(let i=0; i<documentary_sec_id.length; i++) {
            sec_bang_arr.fill(0);
        }

        // img 높이를 그 부모 요소인 img_box에 넣어주기
        for (let i = 0; i < documentary_sec_id.length; i++) {

            // 각 img들의 높이를 담은 변수
            img_height = $(`#${documentary_sec_id[i]} .item_box img`).height();


            // 설명: img의 높이를 item의 부모인 item_box의 높이에 붙여주기.
            $(`#${documentary_sec_id[i]} .item_box`).css({
                height: img_height
            })

            // btn의 line-height를 각 섹션 img의 height에 딱 맞게 넣어주기
            $(`#${documentary_sec_id[i]} .btn`).css({
                lineHeight: img_height + "px"
            })
        }
    }

    if(cateNo == 4){
        item_length = $('.item').length;
        item_width = $('.item').outerWidth();

        // 설명: 요소 item들마다 자신의 너비만큼 left를 때는데 겹치지 않게 배치하기 위해 요소의 인덱스가 증가할 때마다 left에 인덱스에 비례하는 i값을 곱해주기

        // 각 섹션에 item들을 해당되는 ITEM_LIST[i] 의 길이만큼 left값 주기
        for (let i = 0; i < NAV_ANIMATION.length; i++) {
            for (let j = 0; j < NAV_ANIMATION[i].length; j++) {
                $(`#${animation_sec_id[i]} .item`).eq(j).css({
                    left: (item_width * j),
                    padding: '0 4px' // item 들 사이 여백 주기
                });
            }
        }

        // 방값 초기화 시켜주기
        for(let i=0; i<animation_sec_id.length; i++) {
            sec_bang_arr.fill(0);
        }

        // img 높이를 그 부모 요소인 img_box에 넣어주기
        for (let i = 0; i < animation_sec_id.length; i++) {

            // 각 img들의 높이를 담은 변수
            img_height = $(`#${animation_sec_id[i]} .item_box img`).height();


            // 설명: img의 높이를 item의 부모인 item_box의 높이에 붙여주기.
            $(`#${animation_sec_id[i]} .item_box`).css({
                height: img_height
            })

            // btn의 line-height를 각 섹션 img의 height에 딱 맞게 넣어주기
            $(`#${animation_sec_id[i]} .btn`).css({
                lineHeight: img_height + "px"
            })
        }
    }
}

// console.log('img의 높이', $(`#${action_sec_id[0]} .item_box img`).height())

// 제이쿼리 시작
$(document).ready(function() {
    cateNo = get_info_url();

    nav_load_banner(cateNo);
    // 화면 데이터 불러오기
    nav_load_item(cateNo);

    // 불러오고 0.1초뒤에 화면 바로잡기
    setTimeout(function() {
        nav_resize_item_width(cateNo);
    }, 100)


    // nav.html에 cateNo에 달라지는 화면의 버튼 작동과 modal창의 동작을 도와주는 조건문이다.

    // cateNo = 0
    if(cateNo == 0){

        
        // 각 섹션마다 방값 넣어주기
        for(let i=0; i<action_sec_title.length; i++) {
            sec_bang_arr.push(0);
        }
        console.log("cateNo=0",sec_bang_arr)

        // btn 이벤트 시작
        
        // btn_L 이벤트
        // $(`.sec > .btn_L`).click(function() { 메모리상 맞물리는 타이밍이 어긋나서 btn 동작이 먹질 않았다. 그래서 on 이벤트로 교체
        $(document).on('click', '.sec > .btn_L', function () {
        
            // 선택한 btn_L의 부모 아이디값
            item_parent = $(this).parents('.sec').attr('id');
            // 선택한 btn의 부모 sec의 자식 item의 개수
            item_length = $(`#${item_parent} .item`).length;
        
            // id 값을 뽑기 위해 확인 테스트
            console.log(`#${item_parent}`);
        
            stop_btn();
        
            // $(`#${item_parent} .item`).eq(sec_bang_arr[])
            console.log(action_sec_id.indexOf(`${item_parent}`)) // 0, 1, 2, 3
        
            let proportion_arr = action_sec_id.indexOf(`${item_parent}`); // 부모 sec이 현재 몇번째 index에 위치하는지
        
            // EL_ARR 와 sec_bang_arr 의 값은 언제나 비례하니 EL_ARR의 인덱스 값을 뽑아 sec_bang_arr에 넣어주면 된다.
        
            move_move('left', item_parent, sec_bang_arr[proportion_arr]);

            sec_bang_arr[proportion_arr] -= 1
        })
        
        // .btn_R 이벤트
        $(document).on('click', '.sec > .btn_R', function () {
        
            item_parent = $(this).parents('.sec').attr('id');
            item_length = $(`#${item_parent} .item`).length;
            stop_btn();
        
            let proportion_arr = action_sec_id.indexOf(`${item_parent}`);
        
        
            move_move('right', item_parent, sec_bang_arr[proportion_arr])
        
        sec_bang_arr[proportion_arr] += 1
        })
        
        // 설명: 동작이 완료될때까지 버튼 비활성화
        function stop_btn() {
            $('.btn').css({
                pointerEvents: 'none'
            })
            setTimeout(function () {
                $('.btn').css({
                    pointerEvents: 'auto'
                })
            }, timer)
        }
        
        // btn 동작 함수
        move_move()


        // modal 창 띄우기---------
        
        $(document).on('click','.item', function() {
    
            item_parent = $(this).parents('.sec').attr('id'); // 부모section의 아이디 값 잡기 
            item_parent_index = action_sec_id.indexOf(item_parent); // 부모 section의 인덱스 위치
            item_index = $(this).index(); // 현재 item의 인덱스 위치
    
    
            $('body').css({ overflow: 'hidden' });
    
            modal =
                `<div class="modal">
                    <div class="modal_item_popup">
                        <button class="modal_close">X</button>
    
                        <div class="modal_banner">
                            <div class="modal_banner_box">
                                <div class="modal_banner_title">
                                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${action_sec_id[item_parent_index]}/${NAV_ACTION[item_parent_index][item_index].title_img}" alt="">
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
                            ${NAV_ACTION[item_parent_index][item_index].desc}
                        </div>
                    </div>
                </div>
                `
    
            $('body').append(modal);
    
            $('.modal_banner_box').css({
                background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${action_sec_id[item_parent_index]}/${NAV_ACTION[item_parent_index][item_index].banner_img}) no-repeat center / cover`
            })
            $('.modal').css({ display: 'block' }); // 순서 중요
    
            console.log(`linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${action_sec_id[item_parent_index]}/${NAV_ACTION[item_parent_index][item_index].banner_img}) no-repeat center / cover`)
        }) // $('.item').click의 끝
    
        // modal 안의 X(modal_close)를 눌렀을 때 modal 화면 지우기
        $(document).on('click', '.modal_close', function () {
            console.log('modal_close 확인!');
            $('.modal').css({ display: 'none' });
            $('body').css({ overflow: 'auto' });
        })

    } // if(cateNo == 0)
    
    if(cateNo == 1){
        
        // 각 섹션마다 방값 넣어주기
        for(let i=0; i<kids_sec_title.length; i++) {
            sec_bang_arr.push(0);
        }
        console.log("cateNo=1",sec_bang_arr)


        // btn 이벤트 시작
        // btn_L 이벤트
        // $(`.sec > .btn_L`).click(function() { 메모리상 맞물리는 타이밍이 어긋나서 btn 동작이 먹질 않았다. 그래서 on 이벤트로 교체
        $(document).on('click', '.sec > .btn_L', function () {
        
            // 선택한 btn_L의 부모 아이디값
            item_parent = $(this).parents('.sec').attr('id');
            // 선택한 btn의 부모 sec의 자식 item의 개수
            item_length = $(`#${item_parent} .item`).length;
        
            // id 값을 뽑기 위해 확인 테스트
            console.log(`#${item_parent}`);
        
            stop_btn();
        
            // $(`#${item_parent} .item`).eq(sec_bang_arr[])
            console.log(kids_sec_id.indexOf(`${item_parent}`)) // 0, 1, 2, 3
        
            let proportion_arr = kids_sec_id.indexOf(`${item_parent}`);
        
            // EL_ARR 와 sec_bang_arr 의 값은 언제나 비례하니 EL_ARR의 인덱스 값을 뽑아 sec_bang_arr에 넣어주면 된다.
        
            move_move('left', item_parent, sec_bang_arr[proportion_arr]);

            sec_bang_arr[proportion_arr] -= 1
        })
        
        // .btn_R 이벤트
        $(document).on('click', '.sec > .btn_R', function () {
        
            item_parent = $(this).parents('.sec').attr('id');
            item_length = $(`#${item_parent} .item`).length;
            stop_btn();
        
            let proportion_arr = kids_sec_id.indexOf(`${item_parent}`);
        
        
            move_move('right', item_parent, sec_bang_arr[proportion_arr])
        
            sec_bang_arr[proportion_arr] += 1
        })
        
        // 설명: 동작이 완료될때까지 버튼 비활성화
        function stop_btn() {
            $('.btn').css({
                pointerEvents: 'none'
            })
            setTimeout(function () {
                $('.btn').css({
                    pointerEvents: 'auto'
                })
            }, timer)
        }
        
        // btn 동작 함수
        move_move()


        // modal 창 띄우기---------
        
        $(document).on('click','.item', function() {
    
            item_parent = $(this).parents('.sec').attr('id'); // 부모section의 아이디 값 잡기 
            item_parent_index = kids_sec_id.indexOf(item_parent); // 부모 section의 인덱스 위치
            item_index = $(this).index(); // 현재 item의 인덱스 위치
    
    
            $('body').css({ overflow: 'hidden' });
    
            modal =
                `<div class="modal">
                    <div class="modal_item_popup">
                        <button class="modal_close">X</button>
    
                        <div class="modal_banner">
                            <div class="modal_banner_box">
                                <div class="modal_banner_title">
                                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${kids_sec_id[item_parent_index]}/${KIDS[item_parent_index][item_index].title_img}" alt="">
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
                            ${KIDS[item_parent_index][item_index].desc}
                        </div>
                    </div>
                </div>
                `
    
            $('body').append(modal);
    
            $('.modal_banner_box').css({
                background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${kids_sec_id[item_parent_index]}/${KIDS[item_parent_index][item_index].banner_img}) no-repeat center / cover`
            })
            $('.modal').css({ display: 'block' }); // 순서 중요
    
            console.log(`linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${kids_sec_id[item_parent_index]}/${KIDS[item_parent_index][item_index].banner_img}) no-repeat center / cover`)
        }) // $('.item').click의 끝
    
        // modal 안의 X(modal_close)를 눌렀을 때 modal 화면 지우기
        $(document).on('click', '.modal_close', function () {
            console.log('modal_close 확인!');
            $('.modal').css({ display: 'none' });
            $('body').css({ overflow: 'auto' });
        })


    } // if(cateNo == 1)
    
    if(cateNo == 2){
        console.log('cateNo =', cateNo);

        // 각 섹션마다 방값 넣어주기
        for(let i=0; i<lomance_sec_id.length; i++) {
            sec_bang_arr.push(0);
        }
        console.log("cateNo=2",sec_bang_arr)
        // btn 이벤트 시작
        
        // btn_L 이벤트
        // $(`.sec > .btn_L`).click(function() { 메모리상 맞물리는 타이밍이 어긋나서 btn 동작이 먹질 않았다. 그래서 on 이벤트로 교체
        $(document).on('click', '.sec > .btn_L', function () {
            

            // 선택한 btn_L의 부모 아이디값
            item_parent = $(this).parents('.sec').attr('id');
            // 선택한 btn의 부모 sec의 자식 item의 개수
            item_length = $(`#${item_parent} .item`).length;
        
            // id 값을 뽑기 위해 확인 테스트
            console.log(`#${item_parent}`);
        
            stop_btn();
        
            // $(`#${item_parent} .item`).eq(sec_bang_arr[])
            console.log(lomance_sec_id.indexOf(`${item_parent}`)) // 0, 1, 2, 3
        
            let proportion_arr = lomance_sec_id.indexOf(`${item_parent}`);
        
            // EL_ARR 와 sec_bang_arr 의 값은 언제나 비례하니 EL_ARR의 인덱스 값을 뽑아 sec_bang_arr에 넣어주면 된다.
        
            move_move('left', item_parent, sec_bang_arr[proportion_arr]);

            sec_bang_arr[proportion_arr] -= 1
            console.log('로맨스 sec_bang_arr[proportion_arr] 왼쪽', sec_bang_arr[proportion_arr]);
        })
        
        // .btn_R 이벤트
        $(document).on('click', '.sec > .btn_R', function () {

        
            item_parent = $(this).parents('.sec').attr('id');
            item_length = $(`#${item_parent} .item`).length;
            stop_btn();
        
            let proportion_arr = lomance_sec_id.indexOf(`${item_parent}`);
        
        
            move_move('right', item_parent, sec_bang_arr[proportion_arr])
        
            sec_bang_arr[proportion_arr] += 1
            console.log('로맨스 sec_bang_arr[proportion_arr] 오른쪽', sec_bang_arr[proportion_arr]);
        })
        
        // 설명: 동작이 완료될때까지 버튼 비활성화
        function stop_btn() {
            $('.btn').css({
                pointerEvents: 'none'
            })
            setTimeout(function () {
                $('.btn').css({
                    pointerEvents: 'auto'
                })
            }, timer)
        }
        
        // btn 동작 함수
        move_move()


        // modal 창 띄우기---------
        
        $(document).on('click','.item', function() {
    
            item_parent = $(this).parents('.sec').attr('id'); // 부모section의 아이디 값 잡기 
            item_parent_index = lomance_sec_id.indexOf(item_parent); // 부모 section의 인덱스 위치
            item_index = $(this).index(); // 현재 item의 인덱스 위치
    
    
            $('body').css({ overflow: 'hidden' });
    
            modal =
                `<div class="modal">
                    <div class="modal_item_popup">
                        <button class="modal_close">X</button>
    
                        <div class="modal_banner">
                            <div class="modal_banner_box">
                                <div class="modal_banner_title">
                                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${lomance_sec_id[item_parent_index]}/${NAV_LOMANCE[item_parent_index][item_index].title_img}" alt="">
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
                            ${NAV_LOMANCE[item_parent_index][item_index].desc}
                        </div>
                    </div>
                </div>
                `
    
            $('body').append(modal);
    
            $('.modal_banner_box').css({
                background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${lomance_sec_id[item_parent_index]}/${NAV_LOMANCE[item_parent_index][item_index].banner_img}) no-repeat center / cover`
            })
            $('.modal').css({ display: 'block' }); // 순서 중요
    
            console.log(`linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${lomance_sec_id[item_parent_index]}/${NAV_LOMANCE[item_parent_index][item_index].banner_img}) no-repeat center / cover`)
        }) // $('.item').click의 끝
    
        // modal 안의 X(modal_close)를 눌렀을 때 modal 화면 지우기
        $(document).on('click', '.modal_close', function () {
            console.log('modal_close 확인!');
            $('.modal').css({ display: 'none' });
            $('body').css({ overflow: 'auto' });
        })


    } // if(cateNo == 2)

    if(cateNo == 3){

        // 각 섹션마다 방값 넣어주기
        for(let i=0; i<animation_sec_id.length; i++) {
            sec_bang_arr.push(0);
        }
        console.log("cateNo=3",sec_bang_arr)
    
        // btn 이벤트 시작
        
        // btn_L 이벤트
        // $(`.sec > .btn_L`).click(function() { 메모리상 맞물리는 타이밍이 어긋나서 btn 동작이 먹질 않았다. 그래서 on 이벤트로 교체
        $(document).on('click', '.sec > .btn_L', function () {
        
            // 선택한 btn_L의 부모 아이디값
            item_parent = $(this).parents('.sec').attr('id');
            // 선택한 btn의 부모 sec의 자식 item의 개수
            item_length = $(`#${item_parent} .item`).length;
        
            // id 값을 뽑기 위해 확인 테스트
            console.log(`#${item_parent}`);
        
            stop_btn();
        
            // $(`#${item_parent} .item`).eq(sec_bang_arr[])
            console.log(documentary_sec_id.indexOf(`${item_parent}`)) // 0, 1, 2, 3
        
            let proportion_arr = documentary_sec_id.indexOf(`${item_parent}`);
        
            // EL_ARR 와 sec_bang_arr 의 값은 언제나 비례하니 EL_ARR의 인덱스 값을 뽑아 sec_bang_arr에 넣어주면 된다.
        
            move_move('left', item_parent, sec_bang_arr[proportion_arr]);

            sec_bang_arr[proportion_arr] -= 1
        })
        
        // .btn_R 이벤트
        $(document).on('click', '.sec > .btn_R', function () {
        
            item_parent = $(this).parents('.sec').attr('id');
            item_length = $(`#${item_parent} .item`).length;
            stop_btn();
        
            let proportion_arr = documentary_sec_id.indexOf(`${item_parent}`);
        
        
            move_move('right', item_parent, sec_bang_arr[proportion_arr])
        
            sec_bang_arr[proportion_arr] += 1
        })
        
        // 설명: 동작이 완료될때까지 버튼 비활성화
        function stop_btn() {
            $('.btn').css({
                pointerEvents: 'none'
            })
            setTimeout(function () {
                $('.btn').css({
                    pointerEvents: 'auto'
                })
            }, timer)
        }
        
        // btn 동작 함수
        move_move()


        // modal 창 띄우기---------
        
        $(document).on('click','.item', function() {
    
            item_parent = $(this).parents('.sec').attr('id'); // 부모section의 아이디 값 잡기 
            item_parent_index = documentary_sec_id.indexOf(item_parent); // 부모 section의 인덱스 위치
            item_index = $(this).index(); // 현재 item의 인덱스 위치
    
    
            $('body').css({ overflow: 'hidden' });
    
            modal =
                `<div class="modal">
                    <div class="modal_item_popup">
                        <button class="modal_close">X</button>
    
                        <div class="modal_banner">
                            <div class="modal_banner_box">
                                <div class="modal_banner_title">
                                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${documentary_sec_id[item_parent_index]}/${DOCUMENTARY[item_parent_index][item_index].title_img}" alt="">
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
                            ${DOCUMENTARY[item_parent_index][item_index].desc}
                        </div>
                    </div>
                </div>
                `
    
            $('body').append(modal);
    
            $('.modal_banner_box').css({
                background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${documentary_sec_id[item_parent_index]}/${DOCUMENTARY[item_parent_index][item_index].banner_img}) no-repeat center / cover`
            })
            $('.modal').css({ display: 'block' }); // 순서 중요
    
            console.log(`linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${documentary_sec_id[item_parent_index]}/${DOCUMENTARY[item_parent_index][item_index].banner_img}) no-repeat center / cover`)
        }) // $('.item').click의 끝
    
        // modal 안의 X(modal_close)를 눌렀을 때 modal 화면 지우기
        $(document).on('click', '.modal_close', function () {
            console.log('modal_close 확인!');
            $('.modal').css({ display: 'none' });
            $('body').css({ overflow: 'auto' });
        })


    } // if(cateNo == 3)

    if(cateNo == 4){
        console.log('cateNo =', cateNo);

        // 각 섹션마다 방값 넣어주기
        for(let i=0; i<animation_sec_title.length; i++) {
            sec_bang_arr.push(0);
        }
        console.log("cateNo=4",sec_bang_arr)

        // btn 이벤트 시작
        
        // btn_L 이벤트
        // $(`.sec > .btn_L`).click(function() { 메모리상 맞물리는 타이밍이 어긋나서 btn 동작이 먹질 않았다. 그래서 on 이벤트로 교체
        $(document).on('click', '.sec > .btn_L', function () {
        
            // 선택한 btn_L의 부모 아이디값
            item_parent = $(this).parents('.sec').attr('id');
            // 선택한 btn의 부모 sec의 자식 item의 개수
            item_length = $(`#${item_parent} .item`).length;
        
            // id 값을 뽑기 위해 확인 테스트
            console.log(`#${item_parent}`);
        
            stop_btn();
        
            // $(`#${item_parent} .item`).eq(sec_bang_arr[])
            console.log(animation_sec_id.indexOf(`${item_parent}`)) // 0, 1, 2, 3
        
            let proportion_arr = animation_sec_id.indexOf(`${item_parent}`);
        
            // EL_ARR 와 sec_bang_arr 의 값은 언제나 비례하니 EL_ARR의 인덱스 값을 뽑아 sec_bang_arr에 넣어주면 된다.
        
            move_move('left', item_parent, sec_bang_arr[proportion_arr]);

            sec_bang_arr[proportion_arr] -= 1
        })
        
        // .btn_R 이벤트
        $(document).on('click', '.sec > .btn_R', function () {
        
            item_parent = $(this).parents('.sec').attr('id');
            item_length = $(`#${item_parent} .item`).length;
            stop_btn();
        
            let proportion_arr = animation_sec_id.indexOf(`${item_parent}`);
        
        
            move_move('right', item_parent, sec_bang_arr[proportion_arr])
        
            sec_bang_arr[proportion_arr] += 1
        })
        
        // 설명: 동작이 완료될때까지 버튼 비활성화
        function stop_btn() {
            $('.btn').css({
                pointerEvents: 'none'
            })
            setTimeout(function () {
                $('.btn').css({
                    pointerEvents: 'auto'
                })
            }, timer)
        }
        
        // btn 동작 함수
        move_move()


        // modal 창 띄우기---------
        
        $(document).on('click','.item', function() {
    
            item_parent = $(this).parents('.sec').attr('id'); // 부모section의 아이디 값 잡기 
            item_parent_index = animation_sec_id.indexOf(item_parent); // 부모 section의 인덱스 위치
            item_index = $(this).index(); // 현재 item의 인덱스 위치
    
    
            $('body').css({ overflow: 'hidden' });
    
            modal =
                `<div class="modal">
                    <div class="modal_item_popup">
                        <button class="modal_close">X</button>
    
                        <div class="modal_banner">
                            <div class="modal_banner_box">
                                <div class="modal_banner_title">
                                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${animation_sec_id[item_parent_index]}/${NAV_ANIMATION[item_parent_index][item_index].title_img}" alt="">
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
                            ${NAV_ANIMATION[item_parent_index][item_index].desc}
                        </div>
                    </div>
                </div>
                `
    
            $('body').append(modal);
    
            $('.modal_banner_box').css({
                background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${animation_sec_id[item_parent_index]}/${NAV_ANIMATION[item_parent_index][item_index].banner_img}) no-repeat center / cover`
            })
            $('.modal').css({ display: 'block' }); // 순서 중요
    
            console.log(`linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${animation_sec_id[item_parent_index]}/${NAV_ANIMATION[item_parent_index][item_index].banner_img}) no-repeat center / cover`)
        }) // $('.item').click의 끝
    
        // modal 안의 X(modal_close)를 눌렀을 때 modal 화면 지우기
        $(document).on('click', '.modal_close', function () {
            console.log('modal_close 확인!');
            $('.modal').css({ display: 'none' });
            $('body').css({ overflow: 'auto' });
        })


    } // if(cateNo == 4)





    // banner 움직이는 common.js 의 함수
    auto_slide()
    
    // nav 화면의 resize 이벤트
    $(window).resize(function () {

        item_length = $('.item').length; // item_length를 resize 이벤트 뒤에 다시 새로고침.

        item_width = $('.item').outerWidth(); // item_width값이 화면의 너비에 따라 작아지고 커지길 반복하니 resize 이벤트 될 때마다 새로고침
        console.log('item_width', item_width);

        img_height = $('.item').height();
        console.log('img_height: ' + img_height)

        nav_resize_item_width(cateNo);

        w_width = $(window).innerWidth();
        // 반응형 h_menu_pan에 h_nav_ul 넣기(1024일때 h_nav_pan은 display:none 이니까 그냥 똑같은거 하나 더 만들어서 따로 넣어줘야지.)
    })



    
}) // ready()

