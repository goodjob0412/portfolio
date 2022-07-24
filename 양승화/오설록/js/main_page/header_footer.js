$(document).ready(function(){
        // 메뉴창
        $('.bot_header, .menu_pan').hover(function(){
            $('.menu_pan').css({
                height: '200px',
                transition: 'all 0.5s'
            })
            $('.sec').css({
                height: '180px',
                display: 'block',
                transition: 'all 0.5s'
            })
        }, function(){
            $('.menu_pan').css({
                height: 0
            })
            $('.sec').css({
                height: '0px',
                // display: 'none'
            })

        });
        
        $('.menu_li').mouseenter(function(){
            $('.sec_pan_ul').css({
                color: '#fff'
            })
            $('.sec_pan_ul').eq($(this).index()).css({
                color: '#000'
            })
        });

        
});
//클릭하면 페이지 이동
function shop(){
    location.href = "shop_page.html"
}

function menu(){
    location.href = "menu_page.html"
}

function change_shop1(){
    location.href = "change_shop_page1.html"
}
function change_shop2(){
    location.href = "change_shop_page2.html"
}