$(document).ready(function(){
    // 햄버거 버튼
        var chk= true;
        $('.hamberger').click(function(){
        //X자 만들기
        if(chk){
            chk= false;
            $('#line_top').removeClass('line_top_comeback')
            $('#line_mid').removeClass('line_mid_comeback')
            $('#line_bot').removeClass('line_bot_comeback')
            
            $('#line_top').addClass('line_top')
            $('#line_mid').addClass('line_mid')
            $('#line_bot').addClass('line_bot')

            $('.ham_menu_pan').addClass('ham_menu_comein');
        }
        else{
            chk= true;
            $('#line_top').removeClass('line_top')
            $('#line_mid').removeClass('line_mid')
            $('#line_bot').removeClass('line_bot')


            $('#line_top').addClass('line_top_comeback')
            $('#line_mid').addClass('line_mid_comeback')
            $('#line_bot').addClass('line_bot_comeback')

            $('.ham_menu_pan').removeClass('ham_menu_comein');
        }
   
        });
});
//클릭하면 페이지 이동
function shop(){
    location.href = "mobile_shop_page.html"
}

function menu(){
    location.href = "mobile_menu_page.html"
}

function change_mobile1(){
    location.href = "mobile_change_shop1.html"
}

function change_mobile2(){
    location.href = "mobile_change_shop2.html"
}
