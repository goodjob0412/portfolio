$(document).ready(function(){

    $('.top_btn').click(function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
})