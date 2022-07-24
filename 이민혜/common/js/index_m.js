$(document).ready(function(){
//////////////////////////////////////////////  메인배너
// 배너자리 자리초기화
    $('.banner').eq(0).css({
        display: 'block'
    })
    let m_b_index = 1;
    let m_b_count = $('.banner').length;
    let m_b_timer = 1000;

//  인디 삽입 및 초기화
    for(let i=1; i<= m_b_count; i++) {
        $('.indi_box').append(`<div class="indi"></div>`);
    }
    $('.indi').eq(0).addClass('indi_active');

// 메인배너 슬라이드 함수
    function slide(c_index, o_index) { 
        btn_stop('.btn_slide, .indi', m_b_timer);

    // 나타나는
        $('.banner').eq(c_index).css({zIndex: 99}).fadeIn(700)
    // 사라지는
        $('.banner').eq(o_index).css({zIndex: 1}).delay(700).fadeOut(0);


    //인디 변경
        $('.indi').removeClass('indi_active');
        $('.indi').eq(c_index).addClass('indi_active');
    }


// 좌우 버튼 클릭시 
    $('#btn_R').click(function(){
        banner_m_click = true;
        slide(m_b_index % m_b_count, (m_b_index - 1) % m_b_count);
        m_b_index +=1;
        setTimeout(() => {
            banner_m_click = false;
        }, m_b_timer);
    })
    $('#btn_L').click(function(){
        banner_m_click = true;
        m_b_index -=1;
        slide((m_b_index - 1) % m_b_count, m_b_index % m_b_count);
        setTimeout(() => {
            banner_m_click = false;
        }, m_b_timer);
    })

// 인디케이터 클릭시 
    $('.indi').click(function(){
        if( !$(this).hasClass('indi_active') ) {
            slide($(this).index(),  (m_b_index - 1) % m_b_count);
            m_b_index = $(this).index() + 1
        }
    })

// 자동슬라이드
    let m_b_interval ;
    function m_b_slide_auto() {
        clearInterval(m_b_interval);
        m_b_interval = setInterval(function(){
            $('#btn_R').trigger('click')
        }, m_b_timer + 1000) 
    }
    m_b_slide_auto();

// 호버시 인터벌 멈춤
    $('.main_banner').hover(function(){
        $('.btn_slide').addClass('btn_slide_active')
        clearInterval(m_b_interval);

    },function(){
        $('.btn_slide').removeClass('btn_slide_active')
        if(!$('.stop_btn').hasClass('btn_none')) {
            m_b_slide_auto();
        }
    });

// 스탑, 플레이버튼 클릭
    $('.stop_btn').click(function(){
        clearInterval(m_b_interval);
        $('.stop_play_btn').toggleClass('btn_none');

    })
    $('.play_btn').click(function(){
        m_b_slide_auto();
        $('.stop_play_btn').toggleClass('btn_none');
    })

///////////////////////////////////////////////좌우버튼, 인디 클릭 시 배너 a 막기


    let banner_m_click = false;
    $('.banner a').click(function(){
        if(banner_m_click) {
            event.preventDefault();
        }
    })


// /////////////////버튼 막기 슬라이드
    function btn_stop(btn_mane, time) {
        $(btn_mane).css({        
            pointerEvents: 'none'
        });
        setTimeout(() => {
            $(btn_mane).css({
            pointerEvents: 'auto'
            })
        }, time);
        
    }
///////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////// 뉴 리스트 부르기

    for(let i=0; i<ITEM_LIST[0].length; i++) {
        let jpg = ITEM_LIST[0][i].src.split(",")

        let new_list = `<li class="item_li" >
                            <div class="item_box">
                                <a href="deal_m.html?page_no=0&item_no=${i}">
                                    <div class="item_img new_img">
                                        <img src="img/item/${ITEM_LIST[0][i].type}/${jpg[0]}" alt="">
                                    </div>
                                </a>
                                <div class="item_sub new_sub">
                                    <a href="deal_m.html?page_no=0&item_no=${i}">
                                        <div class="item_title_kr">${ITEM_LIST[0][i].title_kr}</div>
                                    </a>
                                    <div class="item_desc">${ITEM_LIST[0][i].desc}</div>
                                </div>
                            </div>
                        </li>`

            $('.new_sec .item_ul').append(new_list);
        }


////////////////////////////////////////////// 뉴 메뉴 자리 잡기

    let new_li = $('.new_sec .item_li'); 
    let new_count = new_li.length;
    let new_li_width = $('.new_sec .item_li').outerWidth() +15;

// 자리초기화 함수 및 자리 초기화
    function sec_pos(count, c_name, left_value) {
        for (let i=0; i<count; i++) {
            $(c_name).eq(i).css({
                left: left_value * i
            })
        }
    }
    sec_pos(new_count, new_li, new_li_width)


///////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////// md 메뉴 
//////////////////////////// md 리스트 부르기
let tag_winter_item = []
let tag_season_item = []
let tag_price_10000_item = []
let tag_lovely_item = []

for (let i=0; i<ITEM_LIST.length; i++) {
    for(let j=0; j<ITEM_LIST[i].length; j++) {
        let tag = ITEM_LIST[i][j].tag.split(", ")
        let price = ITEM_LIST[i][j].s_price
        if (tag == "겨울") {
            tag_winter_item.push(ITEM_LIST[i][j])
        }
        if (tag == "사계절") {
            tag_season_item.push(ITEM_LIST[i][j])
        }
        if ( price <= 10000 ) {
            tag_price_10000_item.push(ITEM_LIST[i][j])
        }
        if (tag == "러블리") {
            tag_lovely_item.push(ITEM_LIST[i][j])
        }
    }
}

function md_list(tag, md_name ) {
    let md_ul_box = `<ul class="item_ul hash_${md_name}"></div>`
    $(`.md_sec .item_list`).append(md_ul_box);

    for(let i=0; i<4; i++) {
    let jpg = tag[i].src.split(",")
    
    let new_list = ` <li class="item_li">
                        <div class="item_box">
                            <a href="deal_m.html?page_no=${tag[i].page_no}&item_no=${tag[i].item_no - 1}">  
                                <div class="item_img">
                                    <img src="img/item/${tag[i].type}/${jpg[0]}">
                                </div>
                            </a>
                            <div class="item_sub">
                                <div class="item_title_en">[${tag[i].type}]${tag[i].title_en}</div>
                                <a href="deal_m.html?page_no=${tag[i].page_no}&item_no=${tag[i].item_no - 1}">
                                    <div class="item_title_kr">${tag[i].title_kr}</div>
                                </a>

                                <div class="item_s_price"> ${tag[i].s_price.toLocaleString()}원</div>
                            </div>
                        </div>
                    </li>`

        $(`.md_sec .hash_${md_name}`).append(new_list);
    }
}

md_list(tag_winter_item,'winter');
md_list(tag_season_item,'season');
md_list(tag_price_10000_item,'price');
md_list(tag_lovely_item,'lovely');

////////////////////// md 리스트 태그 누르면 페이드 인  / 아웃


    let md_index = 0;
    $('.ietm_tag_li').click(function(){
        btn_stop('.ietm_tag_li', 500) 
        if( $(this).index() !=  md_index) {
            $('.ietm_tag_li').removeClass('item_tag_active')
            $('.ietm_tag_li').eq($(this).index()).addClass('item_tag_active')
        // 나타나는
            $('.md_sec .item_ul').eq($(this).index()).css({zIndex: 99}).fadeIn(500)
        // 사라지는
            $('.md_sec .item_ul').eq(md_index).css({zIndex: 1}).delay(500).fadeOut(0);
            md_index = $(this).index();
        }
    });



/////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////  중간
    let m_banner = $('.m_banner').offset().top;
    let d_bottom = $(document).height()
    let s_top;
    $(window).scroll(function(){
        s_top= $(window).scrollTop(); 

        if ( m_banner -300 <= s_top || s_top >= d_bottom) {
            $('.m_banner').css({
                background: 'url(./img/banner/m_banner01.jpg)no-repeat center / cover'
            })
        }
        else {
            $('.m_banner').css({
                background: 'url(./img/banner/m_banner02.jpg)no-repeat center / cover'
            })
        }
    });



// ///////////////////////////////////////////////////////////////////////////// 
// //////////////////////////////////////////////베스트 메뉴 
////////////////////// list 부르기

function best_list_set(page_no, length) {

    let bset_box = `<ul class="item_ul best_${menu_array[page_no]}"> </ul>`
    $(`.best_list_${menu_array[page_no]}`).append(bset_box)

    for (let i=0; i<length; i++) {
    let jpg = ITEM_LIST[page_no][i].src.split(",")
    let sale_percent = 100 - Math.round((ITEM_LIST[page_no][i].s_price / ITEM_LIST[page_no][i].o_price) * 100) 
    let best_list = `<li class="item_li">
                        <div class="item_box">
                            <div class="item_img">
                                <a href="deal_m.html?page_no=${page_no}&item_no=${i}">
                                    <img src="img/item/${menu_array[page_no]}/${jpg[0]}" alt="">
                                    <div class="ranking_no">${i+1}</div>
                                </a>
                            </div>
                            <div class="item_sub">
                                <div class="item_title_en">[${ITEM_LIST[page_no][i].type}]${ITEM_LIST[page_no][i].title_en}</div>
                                <a href="deal_m.html?page_no=${page_no}&item_no=${i}">
                                    <div class="item_title_kr">${ITEM_LIST[page_no][i].title_kr}</div>
                                </a>
                                <div class="item_pirce">
                                    <span class="item_s_price"> ${ITEM_LIST[page_no][i].o_price.toLocaleString()}원</span>
                                    <span class="item_o_price"> ${ITEM_LIST[page_no][i].s_price.toLocaleString()}원</span>

                                    <span class="sale_percent">${sale_percent}%</span>
                                </div>
                                
                            </div>
                        </div>
                        </li>`

        $(`.best_${menu_array[page_no]}`).append(best_list)
    
    }
}
best_list_set(2,10)
best_list_set(3,10)
best_list_set(4,10)
best_list_set(5,10)
best_list_set(6,10)


//////////////////////////////////////  타이틀 클릭시

    $('.best_list').eq(0).css({ display: 'block'})
    $('.best_btn_title').eq(0).css({ background: '#eaeaea' })

    let slide_btn_chk = [true, false, false, false, false]
    $('.best_btn_title').click(function(){

        if(slide_btn_chk[$(this).parent().index()] != true) {
            slide_btn_chk = [false, false, false, false, false]
            slide_btn_chk[$(this).parent().index()] = true; 
            $('.best_list').slideUp(200);
            $(this).next().slideDown(200);

        
            $('.best_btn_title').css({
                background: '#fff'
            }).eq($(this).parent().index()).css({ background: '#eaeaea' })

            $('.add_btn_line_2').removeClass('add_active')
            $(this).find('.add_btn_line_2').addClass('add_active')
        }
        
        else  {
            slide_btn_chk = [false, false, false, false, false]
            $('.best_list').slideUp(200);

            setTimeout(() => {
                $('.best_btn_title').css({ background: '#fff' })
            }, 200);
            $(this).find('.add_btn_line_2').toggleClass('add_active')

        
        }

    })


// ///////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////sns 한칸씩 이동

let sns_count = $('.sns_sec .item_li').length;
let sns_width = $('.sns_sec .item_li').outerWidth()+15
let s_timer = 300;
let sns_index_no = 0;

// 자리 초기화
sec_pos(sns_count, '.sns_sec .item_li', sns_width)


// 좌우 클릭
$('.sns_sec .btn_next').click(function(){
    sns_m_click = true;
    btn_stop('.sns_sec .slide_btn', s_timer)

    $('.sns_sec .item_li').animate({
        left: '-='+ sns_width
    }, s_timer)
    $('.sns_sec .item_li').eq(sns_index_no % sns_count).animate({
        left: sns_width * (sns_count - 1)
    }, 0)

    sns_index_no +=1;
    
    setTimeout(() => {
        sns_m_click = false;
    }, s_timer);
})

$('.sns_sec .btn_prev').click(function(){
    sns_m_click = true;
    sns_index_no -=1;
    btn_stop('.sns_sec .slide_btn', s_timer)
    
    $('.sns_sec .item_li').eq(sns_index_no % sns_count).animate({
        left: -sns_width
    }, 0)

    $('.sns_sec .item_li').animate({
        left: '+='+ sns_width
    }, s_timer)

    setTimeout(() => {
        sns_m_click = false;
    }, s_timer);
})


// 자동슬라이드
let sns_interval;
function auto_sns_slide() {
    clearInterval(sns_interval);
    sns_interval = setInterval(() => {
        $('.sns_sec .btn_next').trigger('click')
    }, s_timer + 1000, 'linear');
}
auto_sns_slide()

// 호버시 인터벌 멈춤
    $('.item_list').hover(function(){
        clearInterval(sns_interval);
    },function(){
        auto_sns_slide()
    });

///////////////////////////////////////////////좌우버튼, 인디 클릭 시 배너 a 막기


    let sns_m_click = false;
    $('.sns_sec .item_li a').click(function(){
        if(sns_m_click) {
            event.preventDefault();
        }
    })


//////////////////////////////////////////////////////////// 리사이즈
$(window).resize(function(){
    // clearInterval(sns_interval);
    new_li_width = $('.new_sec .item_li').outerWidth() +15;
    index_no = 0;
    sec_pos(new_count, '.new_sec .item_li', new_li_width)


    sns_width = $('.sns_sec .item_li').outerWidth() + 15;
    sns_index_no = 0;
    sec_pos(sns_count, '.sns_sec .item_li', sns_width)
    // auto_sns_slide()

        if ($(window).width() < 480) {
            // console.log("들어옴")
        }
        else {
            // console.log("나감")
        }

})


/////////////////////////////////////////////////////////////////////////// 


});

