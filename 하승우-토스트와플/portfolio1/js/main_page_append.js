$(document).ready(function(){
    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ토스트 파트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let toast_arr = [
        ["toast_1.png","핑크베리블라썸<br>(시즌한정)"],
        ["toast_2.png","미스터에그<br>토스트"],
        ["toast_3.png","베이컨 더블 치즈<br>토스트"],
        ["toast_4.png","데리야끼 바베큐<br>토스트"],
        ["toast_5.png","갈릭 베이컨 치즈<br>토스트"],
        ["toast_6.png","햄 앤 치즈<br>프렌치토스트"],
        ["toast_7.png","아보홀릭<br>토스트"],
        ["toast_8.png","베이컨 딥 치즈 번<br>토스트"],
        ["toast_9.png","아메리칸 햄 치즈<br>토스트"],
        ["toast_10.png","치킨 클럽<br>샌드위치"],
        ["toast_11.png","클럽<br>샌드위치"],
        ["toast_12.png","치즈 불고기<br>길거리 토스트"],
        ["toast_13.png","아보 베이컨<br>길거리 토스트"],
        ["toast_14.png","햄 앤 치즈<br>길거리 토스트"]]

    for(let i=0; i<toast_arr.length; i++){
        $('.toast_menu_pan').append(`
        <div class="food_menu toast_menu">
            <div class="food_pan">
                <div class="food_img t_img"></div>
                <div class="food_title t_title"></div>
            </div>
        </div>     
        `)
        $('.t_img').eq(i).css({
            background:`url(./img/toast/${toast_arr[i][0]})no-repeat center center /cover`
        })
        $('.t_title').eq(i).append(`${toast_arr[i][1]}`)
    }

    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ와플 파트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let waffle_arr=[
        ["waffle_1.png","싸만코<br>젤라또 와플"],
        ["waffle_2.png","초코범벅<br>젤라또 와플"],
        ["waffle_6.png","딸기 생크림<br>와플"],
        ["waffle_4.png","망고범벅<br>와플"],
        ["waffle_5.png","딸기범벅<br>젤라또 와플"],
        ["waffle_9.png","티라미수<br>와플"],
        ["waffle_10.png","팥 스노우<br>와플"],
        ["waffle_7.png","딸기 케이크<br>와플"],
        ["waffle_11.png","호두 고구마<br>와플"],
        ["waffle_12.png","크림<br>와플"],
        ["waffle_8.png","딸기 듬뿍<br>와플"],
        ["waffle_13.png","오레오 누텔라<br>젤라또 와플"],
        ["waffle_3.png","딸기 누텔라<br>젤라또 와플"],
        ["waffle_14.png","메이플 시나몬<br>와플"],
        ["waffle_15.png","딸기 누텔라<br>와플"],
        ["waffle_16.png","누텔라에 빠진 마시멜로<br>젤라또 와플"],
        ["waffle_17.png","누텔라에 빠진<br>젤라또 와플"],
        ["waffle_18.png","스노우<br>와플"],
        ["waffle_19.png","추억의 사과잼<br>와플"],
        ["waffle_20.png","추억의 딸기잼<br>와플"]]
        
    for(let i=0; i<waffle_arr.length; i++){
        $('.waffle_menu_pan').append(`
        <div class="food_menu waffle_menu">
            <div class="food_pan">
                <div class="food_img w_img"></div>
                <div class="food_title w_title"></div>
            </div>
        </div>     
        `)
        $('.w_img').eq(i).css({
            background:`url(./img/waffle/${waffle_arr[i][0]})no-repeat center center /cover`
        })
        $('.w_title').eq(i).append(`${waffle_arr[i][1]}`)
    }




    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ음료수 파트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let drink_arr=[
        ["drink1.png","피치자몽<br>아이스티"],
        ["drink2.png","슈크림<br>아인슈페너 라떼"],
        ["drink3.png","프리미엄<br>로얄 밀크티"],
        ["drink4.png","파인레몬<br>하비스커스티"],
        ["drink5.png","복숭아아이스티<br>코코넛젤리"],
        ["drink6.png","블루베리<br>JMT"],
        ["drink7.png","피치오렌지<br>아이스티"],
        ["drink8.png","파인레몬<br>케모마일티"],
        ["drink9.png","초코 퐁<br>라떼"],
        ["drink10.png","흑당 퐁<br>라떼"],
        ["drink11.png","바나나우유<br>라떼"],
        ["drink12.png","허니바닐라<br>라떼"],
        ["drink13.png","홍차<br>아인슈페너 라떼"],
        ["drink14.png","초코 바나나<br>라떼"],
        ["drink15.png","민트 초코<br>라떼 JMT"],
        ["drink16.png","치즈 프로마쥬<br>흑당 밀크티"],
        ["drink17.png","프리미얼 로얄<br>밀크 버블티"],
        ["drink18.png","파인레몬<br>블랙티"],
        ["drink19.png","흑당<br>밀크티"],
        ["drink20.png","리얼<br>생초코라떼"]]


    //음료수 정보
    for(let i=0; i<drink_arr.length; i++){
        $('.drink_menu_pan').append(`
        <div class="food_menu drink_menu">
            <div class="food_pan">
                <div class="food_img d_img"></div>
                <div class="food_title d_title"></div>
            </div>
        </div>     
        `)
        $('.d_img').eq(i).css({
            background:`url(./img/drink/${drink_arr[i][0]})no-repeat center center /cover`
        })
        $('.d_title').eq(i).append(`${drink_arr[i][1]}`)
    }



    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡeventㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let event_arr =[
        "https://www.waffleuniv.com/upload/event/65f2534128498.jpg",
        "https://www.waffleuniv.com/upload/event/65ba0a9b14c86.jpg",
        "https://www.waffleuniv.com/upload/event/6596703f58fd7.jpg",
        "https://www.waffleuniv.com/upload/event/655c755ef17e7.jpg"
    ]    
    
    for(let i=0; i<event_arr.length; i++){
        $(".event_box").append(`
            <div class="event_outer">
                <div class="event_inner"></div>
            </div>`)
        $('.event_outer').eq(i).css({
        background: `url(${event_arr[i]}) no-repeat center center /cover`
    })
    }


    

    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡfollowㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let follow_bg_arr =[
        "https://www.eggdrop.co.kr/upload/main/1704415800.jpg",
        "https://www.eggdrop.co.kr/upload/main/1667631169.jpg",
        "https://www.eggdrop.co.kr/upload/main/1628728613.jpg",
        "https://www.eggdrop.co.kr/upload/main/1628729485.jpg",
        "https://www.eggdrop.co.kr/upload/main/1715130961.jpg",
        "https://www.eggdrop.co.kr/upload/main/1715131007.jpg",
        "https://www.eggdrop.co.kr/upload/main/1667631419.jpg",
        "https://www.eggdrop.co.kr/upload/main/1715131065.jpg",
        "https://www.eggdrop.co.kr/upload/main/1696554868.jpg",
        "https://www.eggdrop.co.kr/upload/main/1636077460.png"
    ]

    //follow 이벤트 부분
    for(let i=0; i<follow_bg_arr.length; i++){
        $('.follow_box').append(`
            <div class="follow_outer">    
                <div class="bg_pan"></div>
            </div>`)
        $('.bg_pan').eq(i).css({
            background: `url(${follow_bg_arr[i]}) no-repeat center center /cover`
        })
    }
})