
let u_agent = window.navigator.userAgent.toLowerCase() // 윈도우 운영체제 정보 소문자로 
// document.write(u_agent+ "<br>");
let phone_list = ['android', 'ipad', 'iphone'];
for (let i=0; i < phone_list.length; i++) {
    //문자열.match() : 괄호 안에 있는 정보가 문자열 안에 있는지 체크
    if (u_agent.match(phone_list[i])) {              
        location.replace('index_m.html');  // 모바일 주소로
    } 
}


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
                            <a href="deal.html?page_no=0&item_no=${i}">
                                <div class="item_img new_img">
                                    <img src="img/item/${ITEM_LIST[0][i].type}/${jpg[0]}" alt="">
                                </div>
                            </a>
                            <div class="item_sub new_sub">
                                <a href="deal.html?page_no=0&item_no=${i}">
                                    <div class="item_title">${ITEM_LIST[0][i].title_kr}</div>
                                </a>
                                <div class="item_desc">${ITEM_LIST[0][i].desc}</div>
                            </div>
                        </div>
                    </li>`

        $('.new_sec .item_ul').append(new_list);
    }



////////////////////////////////////////////// 뉴 메뉴 
let new_li = $('.new_sec .item_li'); 
let new_count = new_li.length;
let new_li_width = $('.new_sec .item_li').outerWidth();

let n_timer = 300;
let index_no = 0;
let line_t_width = $('.slide_bar_line').outerWidth();
let line_n = (line_t_width / new_count);


////////////////////// list 이동---------------------------------------
 //////////////////// 

    // ul사이즈 
    let new_ul = $('.new_sec .item_ul')
    let new_ul_W = new_li_width * new_count;
    new_ul.css({width: new_ul_W});

    ///////  이동 
    let mouse_chk_n = false;
    let start_pos_n = 0; // 클릭했을때 포지션 문서 왼쪽에서
    let end_pos_n = 0; // 현재 움직이는 값 - 스타트 포지션 (-값으로 나옴) // 이동값
    let new_ul_left = new_ul.offset().left ; // ul 의 left 위치

    let item_list_w = $('.new_sec .item_list').outerWidth(); 

    let move = 0;

    let move_bf ;
let mouse_new_chk = false;
let mouse_best_chk = false;
    // 마우스 눌렀을때
    
    $('.new_sec .item_list').mousedown(function(e){

        mouse_new_chk=true;
        mouse_chk_n = true;
        start_pos_n= e.clientX;  // 클릭한곳 스타트 포지션

        new_ul_left = new_ul.position().left;   
        new_ul.css({
            transition: 'none'
        });
move_bf = new_ul_left;

    })

///////////////// 드래그 하는 동안 a태그 막기 ----------------------- ;; 
    let m_move = false;
    $('.new_sec .item_box a').click(function(){
        if(m_move) {
            event.preventDefault();
        }
    })

/////////////////////////
    // 마우스 무브 
    let index_n;
    $('.new_sec .item_list').mousemove(function(e){
        if(mouse_chk_n) { // 클릭한 상태에서
            m_move = true;
            end_pos_n = e.clientX - start_pos_n; 

            new_ul.css({
                left: (new_ul_left + end_pos_n) +'px'
            })

            // 끝에가면 딱 멈추게
            if(new_ul_left  + end_pos_n > 120) {  
                new_ul.css({
                    left: 120 +'px'
                })
            }

            else if(Math.abs(new_ul.position().left) >= Math.abs(item_list_w-new_ul_W -80)) { 
                new_ul.css({
                    left:( item_list_w - new_ul_W - 80 )+ 'px'
                })
            }
        }
    })
let new_ul_right_chk = false;
let slide_move = 0;

let index_new_active = 2;
    // 마우스 뗐을 때
    $(window).mouseup(function(e){
        if (mouse_new_chk == true) { 

            setTimeout(() => {
                m_move = false;
            }, 10);

            mouse_new_chk = false;
            new_ul_right_chk = false;
            mouse_chk_n = false;
            new_ul_left = new_ul.position().left;
            new_ul.css({
                transition: "all 0.5s"
            });

            // // 절반 이상, 이하로 움직였을때
            index_n = Math.round(new_ul_left / new_li_width);  
            move = new_li_width * index_n 

// 이동한 값 뽑기 
let move_af = move;
let slide_move_11 = move_af - move_bf;
// let a = Math.round(slide_move_1 )
            new_ul.css({
                left: move + 'px'
            })

            slide_move = Math.round((slide_move_11 / new_ul_W ) * - new_count )
            index_new_active += slide_move
        
            // 좌우 넘어갔을때 애니메이션으로 끝에 붙게
            if(new_ul_left > 0) {
                new_ul.css({
                    left: '0'
                })
            }
            else if(Math.abs(new_ul_left) > Math.abs(item_list_w-new_ul_W)) {
                new_ul_right_chk = true;
                new_ul.css({
                    left: item_list_w-new_ul_W+20 + 'px'
                })
            }
            li_active()

            // 언더바 움직임 
            this_room = $('.img_ac').parents('.item_li').index()
            console.log(this_room)
                $('.slide_bar_line_inner').css({
                    width: line_n + (line_n * this_room) + "px"
                });
            
        }

    })

/////////////////////////////////////-------------------------------


// 자리초기화 함수 및 자리 초기화
function sec_pos(count, c_name, left_value) {
    for (let i=0; i<count; i++) {
        $(c_name).eq(i).css({
            left: left_value * i
        })
    }
}
sec_pos(new_count, '.new_sec .item_li', new_li_width)

let this_room = 2;
// 슬라이드 우클릭
$('.new_sec .btn_next').click(function(){
    index_new_active += 1 ;
    btn_stop('.slide_btn', n_timer)
    li_active()

    if (new_ul_right_chk) {
        $('.new_sec .item_li').eq(index_no % new_count).animate({
            left: new_li_width * (new_count)// 
        }, 0)

        $('.new_sec .item_li').animate({
            left: '-='+ new_li_width 
        }, n_timer)
        index_no += 1;
    }
    else {
        $('.new_sec .item_li').animate({
            left: '-='+ new_li_width
        }, n_timer)
        
        $('.new_sec .item_li').eq(index_no % new_count).animate({
            left: new_li_width * (new_count - 1)
        }, 0)
        index_no += 1;
    }

    // 언더바 움직임 
    this_room = $('.img_ac').parents('.item_li').index()
    $('.slide_bar_line_inner').css({
        width: line_n + (line_n * this_room) + "px"
    });
    console.log(this_room)


})

// 슬라이드 좌클릭
$('.new_sec  .btn_prev').click(function(){    

    index_new_active -= 1;
    index_no -=1;    
    li_active()
    btn_stop('.slide_btn', n_timer)

    $('.new_sec .item_li').eq(index_no % new_count).animate({
        left: -new_li_width
    }, 0)

    $('.new_sec .item_li').animate({
        left: '+='+ new_li_width
    }, n_timer) 

                // 언더바 움직임 
    this_room = $('.img_ac').parents('.item_li').index()
console.log(this_room)
    $('.slide_bar_line_inner').css({
        width: line_n + (line_n * this_room) + "px"
    });

})

// 가운데 올라오는거
    // 초기화
    let img = $('.new_sec .item_li').eq(index_new_active).find('.item_img');
    let desc = $('.new_sec .item_li').eq(index_new_active).find('.item_sub');
    img.addClass('img_ac')
    desc.addClass('sub_ac')

    // 함수
    function li_active () {

        $('.new_img').removeClass('img_ac');
        img = $('.new_sec .item_li').eq(index_new_active % new_count).find('.new_img');
        img.addClass('img_ac');

        $('.new_sub').removeClass('sub_ac');
        desc = $('.new_sec .item_li').eq(index_new_active % new_count).find('.new_sub');
        desc.addClass('sub_ac');

    } 

// 언더바 움직임 초기화
    $('.slide_bar_line_inner').css({
        width: line_n + (line_n * this_room) + "px"
    });

///////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////// md 메뉴 
//////////////////////////// md 리스트 부르기
let tag_winter_item = []
let tag_season_item = []
let tag_price_10000_item = []
let tag_lovely_item = []

for (let i=2; i<ITEM_LIST.length; i++) {
    for(let j=0; j<ITEM_LIST[i].length; j++) {
        let tag = ITEM_LIST[i][j].tag
        let price = ITEM_LIST[i][j].s_price
        if (tag.match("겨울")) {
            tag_winter_item.push(ITEM_LIST[i][j])
        }
        if (tag.match("사계절")) {
            tag_season_item.push(ITEM_LIST[i][j])
        }
        if ( price <= 10000 ) {
            tag_price_10000_item.push(ITEM_LIST[i][j])
        }
        if (tag.match("러블리")) {
            tag_lovely_item.push(ITEM_LIST[i][j])
        }
    }
}


function md_list(tag, md_name ) {
    let md_ul_box = `<ul class="item_ul hash_${md_name}"></div>`
    $(`.md_sec .item_list`).append(md_ul_box);

    for(let i=0; i<4; i++) {
    let jpg = tag[i].src.split(",")


    ////////////////////////////////////////////// 정보 넘길때 아이템 넘버 말고
    let new_list = ` <li class="item_li">
                        <div class="item_box">
                            <a href="deal.html?page_no=${tag[i].page_no}&item_no=${tag[i].item_no - 1}">  
                                <div class="item_img">
                                    <img src="img/item/${tag[i].type}/${jpg[0]}">
                                    <div class="item_img_pan"></div>
                                </div>
                            </a>
                            <div class="item_sub">
                                <a href="deal.html?page_no=${tag[i].page_no}&item_no=${tag[i].item_no - 1}">
                                    <div class="item_title">${tag[i].title_kr}</div>
                                </a>
                                <div class="item_title_en">[${tag[i].type}]${tag[i].title_en}</div>
                                <div class="item_o_price"> ${tag[i].s_price.toLocaleString()}원</div>
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



///////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////  중간
    let m_banner = $('.m_banner').offset().top;
    let d_bottom = $(document).height()
    let s_top;
    $(window).scroll(function(){
        s_top= $(window).scrollTop(); 

        if ( m_banner -300 <= s_top || s_top >= d_bottom) {
            $('.m_banner').css({
                background: 'url(./img/banner/banner01.jpg)no-repeat center / cover'
            })
            $('.m_banner_logo').css({left: '800px'})
            $('.m_banner_txt1').css({left: '580px'})
            $('.m_banner_txt2').css({left: '280px'})
        }
        else {
            $('.m_banner').css({
                background: 'url(./img/banner/banner02.jpg)no-repeat center / cover'
            })
            $('.m_banner_logo').css({left: '0'})
            $('.m_banner_txt1').css({left: '0'})
            $('.m_banner_txt2').css({left: '0'})
        }
    });



///////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////베스트 메뉴 

////////////////////// list 부르기

function best_list_set(page_no, length) {

    let bset_box = `<ul class="item_ul best_${menu_array[page_no]}"> </ul>`
    $('.best_R_list').append(bset_box)

    for (let i=0; i<length; i++) {
    let jpg = ITEM_LIST[page_no][i].src.split(",")
    let sale_percent = 100 - Math.round((ITEM_LIST[page_no][i].s_price / ITEM_LIST[page_no][i].o_price) * 100) 
    let best_list = `<li class="item_li">
                        <div class="item_box">
                            <a href="deal.html?page_no=${page_no}&item_no=${i}" class="aaa">
                                <div class="item_img">
                                    <img src="img/item/${menu_array[page_no]}/${jpg[0]}" alt="">
                                    <div class="item_img_pan"></div>
                                    <div class="ranking_no">${i+1}</div>
                                </div>
                            </a>
                            <div class="item_sub">
                                <div class="item_title_en">[${ITEM_LIST[page_no][i].type}]${ITEM_LIST[page_no][i].title_en}</div>
                                <a href="deal.html?page_no=${page_no}&item_no=${i}">
                                    <div class="item_title">${ITEM_LIST[page_no][i].title_kr}</div>
                                </a>
                                <div class="item_pirce">
                                    <span class="item_s_price"> ${ITEM_LIST[page_no][i].s_price.toLocaleString()}원</span>
                                    <span class="item_o_price"> ${ITEM_LIST[page_no][i].o_price.toLocaleString()}원</span>

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


////////////////////// list 이동

    let best_li = $('.best_outer .item_li');  
    let best_li_top = $('.best_top .item_li'); 
    let best_li_bottom = $('.best_bottom .item_li');
    let best_li_ops = $('.best_ops .item_li');
    let best_li_acc = $('.best_acc .item_li'); 
    let best_li_W = best_li.outerWidth();

    // li 배치

    for(let i=0; i<best_li.length; i++) {
        best_li.eq(i).css({
            left: best_li_W * i + 'px'
        })
        best_li_top.eq(i).css({
            left: best_li_W * i + 'px'
        })
        best_li_bottom.eq(i).css({
            left: best_li_W * i + 'px'
        })
        best_li_ops.eq(i).css({
            left: best_li_W * i + 'px'
        })
        best_li_acc.eq(i).css({
            left: best_li_W * i + 'px'
        })
    }

    // ul사이즈 
    let best_ul = $('.best_sec .item_ul')
    let best_ul_W = best_li_W * best_li.length;
    best_ul.css({width: best_ul_W});

    best_ul.eq(0).css({
        display: 'block'
    })
    ///////  이동 
    let best_ul_index = 0;

    let mouse_chk = false;
    let start_pos = 0; 
    let end_pos = 0;
    let curr_pos = best_ul.eq(best_ul_index).offset().left; 
    let con_pos = $('.best_R_list').outerWidth();
    

    // 마우스 눌렀을때
    $('.best_R_list').mousedown(function(e){
            mouse_best_chk = true;
            mouse_chk = true;
            start_pos= e.clientX; 
            curr_pos = best_ul.eq(best_ul_index).position().left; 

            best_ul.css({
                transition: 'none'
            });
    })



let m_move_2 = false;
$('.best_sec .item_box').click(function(){
    if(m_move_2) {
        event.preventDefault();
    }
})
    // 마우스 무브 
    let line = con_pos / best_ul_W //0.4
    let line_W =$('.line').width()
    $('.best_R_list').mousemove(function(e){
        if(mouse_chk) { // 클릭한 상태에서
            m_move_2 = true;

            end_pos = e.clientX - start_pos; 

            // if(curr_pos + end_pos <= 0) {
            best_ul.eq(best_ul_index).css({
                left: (curr_pos + end_pos) +'px'
            })
        // }

        // 라인 움직임
            $('.line').css({
                width: con_pos * line,
                left: -(curr_pos + end_pos) * line
            });  

        // 끝에가면 딱 멈추게
            if(curr_pos + end_pos > 0) {   
                best_ul.eq(best_ul_index).css({
                    left: 0 +'px'
                })
                $('.line').css({
                    left: 0
                }); 
            }
 
            else if(Math.abs(best_ul.eq(best_ul_index).position().left) >= Math.abs(con_pos-best_ul_W + 20)) { 
                best_ul.eq(best_ul_index).css({
                    left: con_pos - best_ul_W+20 + 'px'
                })
                $('.line').css({
                    left: (con_pos - line_W)+ 'px'
                });
            }
        }
    })
    // 마우스 뗐을 때
    $(window).mouseup(function(e){
        if (mouse_best_chk == true) {

            setTimeout(() => {
                m_move_2 = false;
            }, 10);

            mouse_best_chk = false;
            mouse_chk = false;
            curr_pos = best_ul.eq(best_ul_index).position().left;
            best_ul.eq(best_ul_index).css({
                transition: "all 0.5s"
            });
    
            // 절반 이상, 이하로 움직였을때
            // let index = Math.round(curr_pos / best_width);
            // best_ul.css({
            //     left: best_width * index + 'px'
            // })
    
            // 좌우 넘어갔을때 애니메이션으로 끝에 붙게
            if(curr_pos > 0) {
                best_ul.eq(best_ul_index).css({
                    left: '0'
                })
                // 라인 움직임
                $('.line').css({
                    left: '0'
                });
            }
            else if(Math.abs(curr_pos) > Math.abs(con_pos-best_ul_W)) {
                best_ul.eq(best_ul_index).css({
                    left: con_pos-best_ul_W+20 + 'px'
                })
                // 라인 움직임
                $('.line').css({
                    left: 'auto',
                    right: '0'
                });
            }

            setTimeout(() => {
                best_ul.css({
                    transition: 'none'
                });
            }, 500);

        }
    })

    ////////////////////// 페이드 인 아웃

    $('.best_L_li').click(function(){
        btn_stop('.best_L_li', 500) 
        if( $(this).index() !=  best_ul_index) {
            $('.best_L_li span').removeClass('best_L_li_active')
            $('.best_L_li').eq($(this).index()).children().addClass('best_L_li_active')
        // 나타나는
            $('.best_sec .item_ul').eq($(this).index()).css({zIndex: 99}).fadeIn(500);
        // 사라지는
            $('.best_sec .item_ul').eq(best_ul_index).css({zIndex: 1}).delay(500).fadeOut(0);
            best_ul_index = $(this).index();

            best_ul.eq(best_ul_index).css({
            left: '0'
            })
            // 라인 움직임
            $('.line').css({
                left: '0'
            });

        }
    });

///////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////sns 한칸씩 이동

let sns_count = $('.sns_sec .item_li').length;
let sns_width = $('.sns_sec .item_li').outerWidth() + 20;
let s_timer = 300;
let sns_index_no = 0;

// 자리 초기화
sec_pos(sns_count, '.sns_sec .item_li', sns_width)

// 좌우 클릭
$('.sns_sec .btn_next').click(function(){
    btn_stop('.sns_sec .slide_btn', s_timer)

    $('.sns_sec .item_li').animate({
        left: '-='+ sns_width
    }, s_timer)
    $('.sns_sec .item_li').eq(sns_index_no % sns_count).animate({
        left: sns_width * (sns_count - 1)
    }, 0)

    sns_index_no +=1;
})

$('.sns_sec .btn_prev').click(function(){
    sns_index_no -=1;
    btn_stop('.sns_sec .slide_btn', s_timer)

    $('.sns_sec .item_li').eq(sns_index_no % sns_count).animate({
        left: -sns_width
    }, 0)

    $('.sns_sec .item_li').animate({
        left: '+='+ sns_width
    }, s_timer)
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


///////////////////////////////////////////////////////////////////////////// 

});

