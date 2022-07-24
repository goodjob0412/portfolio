$(document).ready(function(){
    let page_no = page_info('page_no')

    if (page_no == null) {
        page_no = '0'
    } 

    $('.menu_list_li').eq(page_no).addClass('menu_list_li_active')
    $('.menu_list_li').eq(page_no).find('.menu_under_line1').addClass('menu_under_line1_active')


////////////////////////////////////////// 리스트 만들기
    set_list(page_no, ITEM_LIST[page_no].length)

    function set_list(page_no, length) {
        for (let i=0; i<length; i++) {
            let jpg = ITEM_LIST[page_no][i].src.split(", ")
            let color = ITEM_LIST[page_no][i].color.split(", ")

            let list =`<li class="item_list_li item_list_li_${menu_array[page_no]}" style="background:${color[0]}">
                            <a href="item.html?page_no=${page_no}&item_no=${i}">
                                <img src="img/item/${menu_array[page_no]}/${jpg[0]}" alt="" class="item_name">

                                <img src="img/item/${menu_array[page_no]}/${jpg[1]}" alt="" class="item_img item_img_${menu_array[page_no]}">

                                <img src="img/item/${menu_array[page_no]}/${jpg[2]}" alt="" class="item_img_tag" style="background:${color[1]}">

                                <p class="item_name_txt">${ITEM_LIST[page_no][i].title}</p>
                            </a>
                        </li>`

            $('.item_list_ul').append(list)
        }
    }

////////////////////////////////////////// 스크롤
let s_bot = $(window).scrollTop() + $(window).height();
let item_list = $('.item_list').offset().top;
let list_chk = true;
    // $(window).scroll(function(){
        s_bot = $(window).scrollTop() + $(window).height();
        if (item_list <= s_bot && list_chk) {
            list_chk = false;
            $('.item_list').css({transform: 'translateY(0px)'})
        }
        else if(item_list >= s_bot && !list_chk) {
            list_chk = true;
            $('.item_list').css({transform: 'translateY(100px)'})
        }


    // });




})
