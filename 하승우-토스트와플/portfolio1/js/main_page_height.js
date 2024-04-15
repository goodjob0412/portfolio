$(document).ready(function(){
    let toast_h = $(".toast_menu").height()
    let waffle_h = $(".waffle_menu").height()
    let drink_h = $(".drink_menu").height()

    $(".toast_menu").css({
        height: `${toast_h}px`
    })
    $(".waffle_menu").css({
        height: `${waffle_h}px`
    })
    $(".drink_menu").css({
        height: `${drink_h}px`
    })

    $(window).resize(function(){
        let re_toast_h = $(".toast_menu").height()
        let re_waffle_h = $(".waffle_menu").height()
        let re_drink_h = $(".drink_menu").height()

        $(".toast_menu").css({
            height: `${re_toast_h}px`
        })
        $(".waffle_menu").css({
            height: `${re_waffle_h}px`
        })
        $(".drink_menu").css({
            height: `${re_drink_h}px`
        })
    })
})