$(document).ready(function(){
    let f_o_top = $('.footer').offset().top; 

    let count = 0; 
    let img_arr =[
        "https://www.eggdrop.co.kr/upload/notice/1694154629.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1694154352.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1743912208.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1693984709.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1743907399.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1675220237.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1717807338.png",
        "https://www.eggdrop.co.kr/upload/notice/1707373291.png",
        "https://www.eggdrop.co.kr/upload/notice/1659946942.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1659918683.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1720400835.png",
        "https://www.eggdrop.co.kr/upload/notice/1720401337.png",
        "https://www.eggdrop.co.kr/upload/notice/1691370985.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1691371064.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1691370889.jpg",
        "https://www.eggdrop.co.kr/upload/notice/1675492425.png",
        "https://www.eggdrop.co.kr/upload/notice/1682904498.png",
        "https://www.eggdrop.co.kr/upload/notice/1615526399.png",
        "https://www.eggdrop.co.kr/upload/notice/1657519636.png",
        "https://www.eggdrop.co.kr/upload/notice/1622861121.png",
        "https://www.eggdrop.co.kr/upload/notice/1617589331.png",
        "https://www.eggdrop.co.kr/upload/notice/1617589200.png",
        "https://www.eggdrop.co.kr/upload/notice/1617589321.png",
        "https://www.eggdrop.co.kr/upload/notice/1617589216.png"]
    
    for(let i=0; i<img_arr.length - 16; i++){
        $('.notice_content').append(
            `<div class="notice_outer">
                <div class="notice_img"></div>
            </div>`)
        $('.notice_img').eq(i).css({
            background: `url(${img_arr[i]}) no-repeat center center / cover`})
    }
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        if(count <= 4) {
            let s_bot = s_top + $(window).height();  

            if(f_o_top <= s_bot) {
                if(count == 0){
                    for(let i=8; i<12; i++) {
                        $('.notice_content').append(
                            `<div class="notice_outer">
                                <div class="notice_img"></div>
                            </div>`)
                        $('.notice_img').eq(i).css({
                            background: `url(${img_arr[i]}) no-repeat center center / cover`})
                    }
                }
                else if(count == 1){
                    for(let i=12; i<16; i++) {
                        $('.notice_content').append(
                            `<div class="notice_outer">
                                <div class="notice_img"></div>
                            </div>`)
                        $('.notice_img').eq(i).css({
                            background: `url(${img_arr[i]}) no-repeat center center / cover`})
                    }
                }
                else if(count == 2){
                    for(let i=16; i<20; i++) {
                        $('.notice_content').append(
                            `<div class="notice_outer">
                                <div class="notice_img"></div>
                            </div>`)
                        $('.notice_img').eq(i).css({
                            background: `url(${img_arr[i]}) no-repeat center center / cover`})
                    }
                }
                else if(count == 3){
                    for(let i=20; i<24; i++) {
                        $('.notice_content').append(
                            `<div class="notice_outer">
                                <div class="notice_img"></div>
                            </div>`)
                        $('.notice_img').eq(i).css({
                            background: `url(${img_arr[i]}) no-repeat center center / cover`})
                    }
                }
                count+=1;
                f_o_top = $('.footer').offset().top;
            }
        }
    
    })
})
