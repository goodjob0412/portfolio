$(document).ready(function(){

    var movie = $('#movie');

    $('#play').click(function(){
        
        $('#play').css({
            display: 'none'
        })

        $('#stop').css({
            display: 'block'
        })

        movie[0].pause();

    })

    $('#stop').click(function(){

        $('#play').css({
            display: 'block'
        })

        $('#stop').css({
            display: 'none'
        })

        movie[0].play();
        
    })

    var mb_o_top = $('.main2').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() >= mb_o_top){
            $('.top_btn').css({display: 'block'})
        }
        else{
            $('.top_btn').css({display: 'none'})
        }
    })

    $('.top_btn').click(function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
})