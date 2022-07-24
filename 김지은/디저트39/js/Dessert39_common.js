// 모바일 장치구분해서 index_M로 무조건 넘기기
if(navigator.maxTouchPoints >= 1) {
    location.replace('index_M.html')
}


$(document).ready(function(){
/////////// 메뉴판////////////

    $('.menu_right, .pan').hover(function(){
        $('.pan').stop(true).slideDown(500);
        $('.sub_menu').stop(true).slideDown(500);
        
    }, function(){
        $('.pan').stop(true).slideUp(500)
        $('.sub_menu').stop(true).slideUp(500);
    })

    /////////////////////////////////////
    ///////  탑버튼  ///////////

    $('#top_btn').click(function(event) {
        event.preventDefault();

        $('html').animate({
            scrollTop: 0
        }, 1000)
    })

    let f_o_top = $('footer').offset().top;
    // console.log(f_o_top)

    $(window).scroll(function(){ 
        let s_top = $(window).scrollTop();
        
    })
    
});