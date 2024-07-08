$(document).ready(function(){
    //정보 받아오기
    // url에서 내가 필요한 정보의 값을 얻어오기
    

    let url = location.href;
    url = url.split("?")[1]
    url = url.split("=")[1]

    let item_length = ITEM_LIST.length
    //이미지 불러온거에서 설정
    main_set(url-1)

    function main_set(num){
        $('.main_img').html(`
        <img src="../독후감/책이미지/책${ITEM_LIST[(num)%item_length].src}" alt="책사진" class="main_front">
        <img src="../독후감/책이미지/책${ITEM_LIST[(num)%item_length].cover_src}" alt="책사진" class="main_back">
        <img src="../독후감/책이미지/책${ITEM_LIST[(num)%item_length].side_src}" alt="책사진" class="main_side">
        `)
        //텍스트 불러온거에서 설정
        $('.main_title').text(`${ITEM_LIST[(num)%item_length].title}`)
        $('.main_name>.main_text2').text(`${ITEM_LIST[(num)%item_length].writer}`)
        $('.main_price>.main_text2').text(`${(ITEM_LIST[(num)%item_length].price).toLocaleString('ko')}원`)
        $('.book_bot').html(`${ITEM_LIST[(num)%item_length].desc}`)
            //이미지css 설정
        setTimeout(()=>{
            $(`.main_front`).css({
                transform:` rotateY(0deg) translate3d(-1px, 0px, ${($('.main_side').width())/2}px)`
            })
            $(`.main_back`).css({
                transform:` rotateY(180deg) translate3d(0px, 0px, ${($('.main_side').width())/2}px)`
            })
            $(`.main_side`).css({
                transform:` rotateY(-90deg) translateZ(${($('.main_side').width())/2}px)`
            })
        },10)
        //링크 연결
            $('.main_box').click(function(){
                location.href=`${ITEM_LIST[(num)%item_length].link}`
        })

        //감상평 연결
        $('.review_bot').html(`${BOOK_REPORT[(num)%item_length]}`)
    }

    //넥스트 버튼
    let next_conunt = 0;
    $('.next_btn').click(function(){
        main_set(url+next_conunt)
        next_conunt++
    })

    //이미지 호버
    $('.main_imgbox').hover(function(){
        $('.main_img').css({transform:'translate(-50%,-50%) rotateY(40deg)'})
    },function(){
        $('.main_img').css({transform:'translate(-50%,-50%) rotateY(0deg)'})
        mb_count= 0;
    })

    //이미지 클릭하면 도는거
    let main_count= 0;
    $('.main_img').click(function(){
        if((main_count)%2==0){
            $('.main_img').css({transform:'translate(-50%,-50%) rotateY(180deg)'})
        }
        else{
            $('.main_img').css({transform:'translate(-50%,-50%) rotateY(40deg)'})
        }
        main_count++
    })

    //구매처 호버 색 변경
    $('.main_box').hover(function(){
        $(this).addClass('main_box_active')
    },function(){
        $(this).removeClass('main_box_active')
    })

})