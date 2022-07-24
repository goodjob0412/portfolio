let page_no = page_info ('page_no')
if (page_no == null) {
    page_no = '1'
} 

let u_agent = window.navigator.userAgent.toLowerCase() // 윈도우 운영체제 정보 소문자로 
// document.write(u_agent+ "<br>");
let phone_list = ['android', 'ipad', 'iphone'];
for (let i=0; i < phone_list.length; i++) {
    //문자열.match() : 괄호 안에 있는 정보가 문자열 안에 있는지 체크
    if (u_agent.match(phone_list[i])) {            
        location.replace('list_m.html?page_no='+page_no);  // 모바일 주소로
    } 
}


$(document).ready(function(){
/////////////////////////////////////////////////////////////////////////////


set_list(page_no, ITEM_LIST[page_no].length); 

    function set_list(page_no, length ) {

        let list = `<div class="title">${title_array[page_no]}</div>
                        <div class="item_list">
                            <ul class="item_ul">
                            </ul>
                    </div>`
        $(`.item_sec .contents_area`).append(list);

        for (let i=0; i< length; i++) {
            let jpg = ITEM_LIST[page_no][i].src.split(",")

            let sale_percent = 100 - Math.round((ITEM_LIST[page_no][i].s_price / ITEM_LIST[page_no][i].o_price) * 100) 

            let list2 = `<li class="item_li item_li_${i}">
                            <a href="deal.html?page_no=${page_no}&item_no=${i}">
                                <div class="item_img">
                                <img src="img/item/${ITEM_LIST[page_no][i].type}/${jpg[0]}" alt="사진${i+1}"></img>
                                </div>
                            </a>
                            <div class="item_sub">
                                <div class="item_title">
                                    <div class="item_title_en">[${ITEM_LIST[page_no][i].type}]${ITEM_LIST[page_no][i].title_en}</div>
                                    <a href="deal.html?page_no=${page_no}&item_no=${i}">
                                        <div class="itme_title_kr">
                                            <span>${ITEM_LIST[page_no][i].title_kr}</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="item_pirce">
                                    <span class="item_o_price">${ITEM_LIST[page_no][i].o_price.toLocaleString()}원</span>
                                    <span class="item_s_price">${ITEM_LIST[page_no][i].s_price.toLocaleString()}원</span>
                                    <span class="sale_percent">${sale_percent}%</span>
                                </div>
                                <div class="item_color"></div>
                            </div>
                        </li>`
            $(`.item_ul`).append(list2);

            let item_color = ITEM_LIST[page_no][i].color.split(",")
            for(let j=0; j<item_color.length; j++) {
                let list3 = `<div class="color_dot" style="background: ${item_color[j]};"></div>`
                $(`.item_li_${i} .item_color`).append(list3);
            }
        }
    }
















//// 리스트 
// function item_slide_up(el) {
//     for(let i=0; i<= $(el).length; i++) {
//         setTimeout(() => {
//             $(el).eq(i).addClass('sec_active');
//         }, i*100);
//     }
//     best_top = $('#best_item').offset().top;
//     new_top = $('#new_item').offset().top;
// }
// item_slide_up('#weekly_ranking .sec_init')


});