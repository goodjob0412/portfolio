$(document).ready(function(){ 
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메뉴판 이벤트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('.food_menu').mouseenter(function(){
        $(this).find('.food_pan').css({
            marginTop: "-15%",
            transition: `0.5s`,
            backgroundColor:"rgba(255, 255, 255 , 0.6)"
        })
    })
    $('.food_menu').mouseleave(function(){
        $(this).find('.food_pan').css({
            marginTop: "0%", 
            transition: `0.5s`,
            backgroundColor:"inherit"
        })
    })

    $('.t_btn').click(function(){
        $('.toast_menu').css({
            pointerEvents: 'none'
        })
        setTimeout(function(){
            $('.toast_menu').css({pointerEvents: 'auto'})
        }, 500)
    })
    $('.w_btn').click(function(){
        $('.waffle_menu').css({
            pointerEvents: 'none'
        })
        setTimeout(function(){
            $('.waffle_menu').css({pointerEvents: 'auto'})
        }, 500)
    })
    $('.d_btn').click(function(){
        $('.drink_menu').css({
            pointerEvents: 'none'
        })
        setTimeout(function(){
            $('.drink_menu').css({pointerEvents: 'auto'})
        }, 500)
    })
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡeventㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('.event_outer').mouseenter(function(){
        $(this).find('.event_inner').css({
            transform: "translateX(-100%) rotateZ(45deg)",
            transition: "1s"
        })
    })
    $('.event_outer').mouseleave(function(){
        $(this).find('.event_inner').css({
            transform: "translateX(0) rotateZ(45deg)",
            transition: "0.7s"
        })
    })

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡfollowㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('.follow_outer div').mouseenter(function(){
        $(this).css({
            cursor: 'pointer',
            transform: "scale(1.2)",
            transition: 'all 0.3s',
            opacity:'0.5'
        })
    })
    $('.follow_outer div').mouseleave(function(){
        $(this).css({
            transform: "scale(1)",
            transition: 'all 0.3s',
            opacity:'1'
        })
    })
    
})
