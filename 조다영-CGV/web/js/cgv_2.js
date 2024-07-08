$(document).ready(function(){ 
//초기화값
    for (let i=0; i<8; i++){
        $('.mo_box').append(`
        <div class="mov_sec">   
        <div class="no">No.${i+1}</div>
        <img src="../web/cgv/포스터/포스터${i+1}.jpg" alt="">
        <div class="mov_bot">
            <div class="title">${ITEM[i+1].title}</div>
            <div class="open">${ITEM[i+1].day}</div>
            <div class="reser">예매하기</div>
        </div>
    </div>
    `)
    if (i==7) {
        $('.mo_box').append(`
        <div class="banner">
        <img src="../web/cgv/배너1.jpg" alt="">
    </div>
    `)} 
    }

    

    let count = 1;
    let num = 9;
    $(window).scroll(function(){
        let bot = $(window).scrollTop()+$(window).height()
        if (count < 3){
            if (bot > $('.footer').offset().top){
                for (let i=0; i<8; i++){
                    $('.mo_box').append(`
                    <div class="mov_sec">   
                    <div class="no">No.${i+num}</div>
                    <img src="../web/cgv/포스터/포스터${i+num}.jpg" alt="">
                    <div class="mov_bot">
                        <div class="title">${ITEM[i+num].title}</div>
                        <div class="open">${ITEM[i+num].day}</div>
                        <div class="reser">예매하기</div>
                    </div>
                </div>
                `)
                if (i==7) {
                    $('.mo_box').append(`
                    <div class="banner">
                    <img src="../web/cgv/배너${count+1}.jpg" alt="">
                </div>
                `)
                count++
                } 
                }
                num += 8
            }
        }
    })
    





//세번째 페이지 넘어가기 <예매하기> 누르기
$('.reser').click(function(){
    location.href="./cgv_reservation.html"
})








})