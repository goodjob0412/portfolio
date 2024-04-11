$(document).ready(function(){
    
    // 이벤트 배너 값 입력
// //    let event = [
//     [{event_idx:'0',src:'광고0.jpg', summery:'4월 국내 숙소 쿠폰팩',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'1',src:'광고1.jpg', summery:'4해외여행 황금연휴 쿠폰팩',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'2',src:'광고2.jpg', summery:'위클리 오픈런',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'3',src:'광고3.jpg', summery:'4베스트 호텔딜',date:'24.04.01~24.04.03 23:59'},
//     {event_idx:'4',src:'광고4.jpg', summery:'더블쿠폰 핫세일',date:'24.04.01~24.04.10 23:59'},
//     {event_idx:'5',src:'광고5.jpg', summery:'반려견 블랙어때',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'6',src:'광고6.jpg', summery:'인기공간 할인파티',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'7',src:'광고7.jpg', summery:'4월 신규회원 웰컴 쿠폰',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'8',src:'광고8.jpg', summery:'24년 4월 결제 프로모션 모음',date:'24.04.01~24.04.30 23:59'},
//     ],
//     [{event_idx:'0',src:'광고모텔0.webp', summery:'4월 국내숙소 쿠폰팩',date:'24.04.01~24.04.30 23:59'}
//     ],
//     [{event_idx:'0',src:'광고_호텔리조트0.webp', summery:'4월 국내숙소 쿠폰팩',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'1',src:'광고_호텔리조트1.webp', summery:'선착순 더블 할인 호텔',date:'24.04.01~24.04.10 23:59'}
//     ],
//     [{event_idx:'0',src:'광고_팬션0.webp', summery:'4월 국내숙소 쿠폰팩',date:'24.04.01~24.04.30 23:59'},
//     {event_idx:'1',src:'광고_팬션1.webp', summery:'선착순 더블 할인 펜션',date:'24.04.01~24.04.10 23:59'}
//     ],
//     [{event_idx:'0',src:'광고_해외0.webp', summery:'해외여행 황금 연휴 쿠폰팩',date:'24.04.01~24.04.30 23:59'},
//     ]
// ]

// let event_nm = [
//     'hot','motel','hotel_resolt','pasion_capping','oversea_travel'
// ]

    console.log("숫자",event_list[0].length);
    // 1. event_nm의 값 -> 이벤트 배너 순서 -> 해당 리스트 대러 div생성

    console.log(event_list)

    for(let i = 0; i < event_nm.length; i++){
        let chk_class_name = `event_${event_nm[i]}`;
        $('.event_main').append(`<div class="${chk_class_name} event"></div>`)
        
        // 해당 베너 안에 배너 및 값 넣기
        for(let j = 0; j < event_list[i].length; j++){
            let add_div = `
            <div class="event_box">
                        <img class="event_box_img" src="../img/${event_list[i][j].src}" alt="${event_list[i][j].src}">
                        <h4>${event_list[i][j].summery}</h4>
                        <p>${event_list[i][j].date}</p>
                    </div>
            `
            $(`.${chk_class_name}`).append($(add_div))
        }
    }

    // event 첫번째 방 active class활성화해서 나타나게하기
    $('.event').eq(0).addClass('active_event')

    $('.event_nav_li').on('click',function(){

        add_remove_class("event_nav_li", "event_nav_li_active", $(this).index());
        add_remove_class("event", "active_event", $(this).index());

    })

    function add_remove_class(tartget_el, cls_name, idx){
        for(let i = 0; i < $(`.${tartget_el}`).length; i++){
            $(`.${tartget_el}`).eq(i).removeClass(cls_name)
        }

        $(`.${tartget_el}`).eq(idx).addClass(cls_name)
    }


})