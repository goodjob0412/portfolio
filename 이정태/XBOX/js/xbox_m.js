$(document).ready(function(){

    var chk = true;
    $('.hamberg').click(function(){
        //x자입력
        if(chk){
            chk = false;
            $('#line_top').removeClass('line_top_return')
            $('#line_mid').removeClass('line_mid_return')
            $('#line_bot').removeClass('line_bot_return')

            $('#line_top').addClass('line_top')
            $('#line_mid').addClass('line_mid')
            $('#line_bot').addClass('line_bot')

            $('.nav').addClass('nav_active')
        }
        else {
            chk = true;
            $('#line_top').removeClass('line_top')
            $('#line_mid').removeClass('line_mid')
            $('#line_bot').removeClass('line_bot')

            $('#line_top').addClass('line_top_return')
            $('#line_mid').addClass('line_mid_return')
            $('#line_bot').addClass('line_bot_return')

            $('.nav').removeClass('nav_active')
        }
    })
    
})