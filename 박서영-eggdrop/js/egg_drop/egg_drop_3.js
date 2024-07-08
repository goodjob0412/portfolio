
let cateNo = get_info_from_url("cateNo")
let itemNo = get_info_from_url("itemNo") - 1


let cover = ""; //화살 왼쪽
let cover2 = ""; //화살 오른쪽
let cover3 = "";  //img3 (위 방향 사진)
let cover4 = ""; //img2 (측면 방향 사진)


console.log (cateNo,itemNo )
if ( ITEM_LIST[cateNo][itemNo].item_no > 1 ) {
    cover += `
        <a href= "egg_drop_3.html?cateNo=${cateNo}&itemNo=${ITEM_LIST[cateNo][itemNo].item_no - 1}" class="left">
            <span >${ITEM_LIST[cateNo][itemNo - 1].name}</span>
        </a>
    `
}
if ( ITEM_LIST[cateNo][itemNo].item_no < ITEM_LIST[cateNo].length ) {
    cover2 += `
        <a href= "egg_drop_3.html?cateNo=${cateNo}&itemNo=${ITEM_LIST[cateNo][itemNo].item_no + 1}" class="right">
            <span >${ITEM_LIST[cateNo][itemNo + 1].name}</span>
        </a>
    `
}
if (ITEM_LIST[cateNo][itemNo].img3 !== undefined) {
    cover3 += `
        <div class="img">
            <img class="img3" src="./img/egg_drop/menu_page/${EL_ARR[cateNo]}/img3/${ITEM_LIST[cateNo][itemNo].img3}" alt="">
        </div>
    `
}
if (ITEM_LIST[cateNo][itemNo].img2 !== undefined) {
    cover4 += `
    <div class="img">
        <img class="img2" src="./img/egg_drop/menu_page/${EL_ARR[cateNo]}/img2/${ITEM_LIST[cateNo][itemNo].img2}" alt="">
    </div>
    `
}


let item = `
    <div class="title">
        <h1>${ITEM_LIST[cateNo][itemNo].en_name}</h1>
        <P>${ITEM_LIST[cateNo][itemNo].name}</P>
    </div>
        ${cover}
    <div class="img_banner">
        <div class="img"><img class="img1" src="./img/egg_drop/menu_page/${EL_ARR[cateNo]}/img/${ITEM_LIST[cateNo][itemNo].img}" alt=""></div>
        ${cover4}
        ${cover3}
        <img class="mark" src="./img/egg_drop/menu_page/${EL_ARR[cateNo]}/mark/${ITEM_LIST[cateNo][itemNo].mark}" alt="">
    </div>
        ${cover2}
    <div class="indi"></div>
    <p class="title_b">${ITEM_LIST[cateNo][itemNo].sec}</p>
    </div>
    `;

    $('.container .contents_area1300').append(item)

    $('.container').css({
        background: `${ITEM_LIST[cateNo][itemNo].color}`
    })



// 인디케이터 클릭
$(document).on('click', '.circle', function () {
    if ($('.circle_active').index() < $(this).index()) {
        btn_slide('-100%', $(this).index(), '100%')
    }
    else if ($('.circle_active').index() > $(this).index()) {
        btn_slide('100%', $(this).index(), '-100%')
    }
})

//초기 설정
$('.img').eq(0).css({ left: 0 })

let img_length = $('.img').length

//인디케이터 추가
for (let i = 0; i < img_length; i++) {
    $('.indi').append(`<div class="circle"></div>`)
}
$('.circle').eq(0).addClass('circle_active')

let bang = 0;
let timer = 200;

function btn_slide(o_pos, c_bang, c_pos) {

    $('.circle').removeClass('circle_active')
    $('.circle').eq(c_bang).addClass('circle_active')


    $('.img').eq(bang % img_length).animate({
        left: o_pos,
        opacity: 0
    }, timer, 'linear')


    $('.img').eq(c_bang).css({
        left: c_pos
    }).animate({
        left: 0,
        opacity: 1
    }, timer, 'linear')
    bang = c_bang
}



////////////////top_btn2
$(window).scroll(function(){
    let top_btn2_b = $('.top_btn2').offset().top + $('.top_btn2').height(); 
    let f_t = $('.footer').offset().top;
    if(top_btn2_b >= f_t ){
        $('.top_btn2').css({
            border: '1px solid #fff', 
            color: '#fff'
        });
    }
    else if(top_btn2_b < f_t ){
        $('.top_btn2').css({
            border: '1px solid #000', 
            color: '#000'
        });
    }
});

$('.top_btn2').click(function () {
    event.preventDefault()

    $('html, body').animate({
        scrollTop: 0
    }, 1000)
})
