let toast_btn = document.getElementsByClassName('toast_btn')[0]
let waffle_btn = document.getElementsByClassName('waffle_btn')[0]
let drink_btn = document.getElementsByClassName('drink_btn')[0]

let toast_menu = document.getElementsByClassName("toast_menu")[0]
let waffle_menu = document.getElementsByClassName("waffle_menu")[0]
let drink_menu = document.getElementsByClassName("drink_menu")[0]

let plus_btn =document.getElementsByClassName('plus_btn')[0]

toast_btn.addEventListener("click" , function(){
    toast_btn.style.color="black";
    waffle_btn.style.color="rgba(0, 0, 0, 0.5)";
    drink_btn.style.color="rgba(0, 0, 0, 0.5)";
    toast_menu.style.display = "block"; 
    waffle_menu.style.display = "none";
    drink_menu.style.display = "none";
})
waffle_btn.addEventListener("click" , function(){
    toast_btn.style.color="rgba(0, 0, 0, 0.5)";
    waffle_btn.style.color="black";
    drink_btn.style.color="rgba(0, 0, 0, 0.5)";
    toast_menu.style.display = "none"; 
    waffle_menu.style.display = "block";
    drink_menu.style.display = "none";
})
drink_btn.addEventListener("click" , function(){
    toast_btn.style.color="rgba(0, 0, 0, 0.5)";
    waffle_btn.style.color="rgba(0, 0, 0, 0.5)";
    drink_btn.style.color="black";
    toast_menu.style.display = "none"; 
    waffle_menu.style.display = "none";
    drink_menu.style.display = "block";
})

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
    ["toast_14.png","햄 앤 치즈<br>길거리 토스트"],
    ["toast_15.png","프렌치<br>토스트"],
    ["toast_16.png","달콤 프렌치<br>토스트"],
    ["toast_17.png","브라오슈<br>토스트"],
    ["toast_18.png","갈릭 버터<br>토스트"],
    ["toast_19.png","콘 치즈<br>토스트"],
    ["toast_20.png","갈릭 버터 햄 치즈<br>토스트"]]

    for(let i=0; i<toast_arr.length - 10; i++){
        toast_menu.innerHTML +=
        `<div class="toast_menu_opt opt">
            <div class="t_menu"></div>
            <span class="t_title"></span>
        </div>`

        document.getElementsByClassName("t_menu")[i].style.background=`url(./img/toast/${toast_arr[i][0]}) no-repeat center center / cover`

        document.getElementsByClassName("t_title")[i].innerHTML=`${toast_arr[i][1]}`
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

    for(let i=0; i<waffle_arr.length - 10; i++){
        waffle_menu.innerHTML +=
        `<div class="waffle_menu_opt opt">
            <div class="w_menu"></div>
            <span class="w_title"></span>
        </div>`

        document.getElementsByClassName("w_menu")[i].style.background=`url(./img/waffle/${waffle_arr[i][0]}) no-repeat center center / cover`

        document.getElementsByClassName("w_title")[i].innerHTML=`${waffle_arr[i][1]}`
        
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
    ["drink13.png","홍차 아인슈페너<br> 라떼"],
    ["drink14.png","초코 바나나<br>라떼"],
    ["drink15.png","민트 초코<br>라떼 JMT"],
    ["drink16.png","치즈 프로마쥬<br>흑당 밀크티"],
    ["drink17.png","프리미얼 로얄<br>밀크 버블티"],
    ["drink18.png","파인레몬<br>블랙티"],
    ["drink19.png","흑당<br>밀크티"],
    ["drink20.png","리얼<br>생초코라떼"]]

    for(let i=0; i<drink_arr.length - 10; i++){
        drink_menu.innerHTML +=
        `<div class="drink_menu_opt opt">
            <div class="d_menu"></div>
            <span class="d_title"></span>
        </div>`

        document.getElementsByClassName("d_menu")[i].style.background=`url(./img/drink/${drink_arr[i][0]}) no-repeat center center / cover`

        document.getElementsByClassName("d_title")[i].innerHTML=`${drink_arr[i][1]}`
        
    }






$(document).ready(function(){
    let t_count=2
    $('.t_plus_btn').click(function(){
        for(let i=t_count*5; i<t_count*5 + 5; i++){
            $('.toast_menu').append(`
                <div class="toast_menu_opt opt">
                    <div class="t_menu"></div>
                    <span class="t_title"></span>
                </div>`)
            $('.t_menu').eq(i).css({
                background: `url(./img/toast/${toast_arr[i][0]}) no-repeat center center / cover`
            })
            $('.t_title').eq(i).append(
                `${toast_arr[i][1]}`
            )
        }
        t_count +=1

        if(t_count*4 == toast_arr.length - 4){
            $('.t_plus_btn').css({
                display:"none"
            })
        }
    })


    let w_count=2
    $('.w_plus_btn').click(function(){
        for(let i=w_count*5; i<w_count*5 + 5; i++){
            $('.waffle_menu').append(`
            <div class="waffle_menu_opt opt">
                <div class="w_menu"></div>
                <span class="w_title"></span>
            </div>`)
            $('.w_menu').eq(i).css({
                background: `url(./img/waffle/${waffle_arr[i][0]}) no-repeat center center / cover`
            })
            $('.w_title').eq(i).append(
                `${waffle_arr[i][1]}`
            )
        }
        w_count +=1

        if(w_count*4 == waffle_arr.length - 4){
            $('.w_plus_btn').css({
                display:"none"
            })
        }
    })

    let d_count=2
    $('.d_plus_btn').click(function(){
        for(let i=d_count*5; i<d_count*5 + 5; i++){
            $('.drink_menu').append(`
            <div class="drink_menu_opt opt">
                <div class="d_menu"></div>
                <span class="d_title"></span>
            </div>`)
            $('.d_menu').eq(i).css({
                background: `url(./img/drink/${drink_arr[i][0]}) no-repeat center center / cover`
            })
            $('.d_title').eq(i).append(
                `${drink_arr[i][1]}`
            )
        }
        d_count +=1

        if(d_count*4 == drink_arr.length - 4){
            $('.d_plus_btn').css({
                display:"none"
            })
        }
    })
})
