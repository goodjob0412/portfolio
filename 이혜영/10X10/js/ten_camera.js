$(document).ready(function () {

    $('.slide').eq(0).css({ left: 0 });

    var interval;
    start_interval();

    $('.banner_box').hover(function () {
        clearInterval(interval);
    }, function () {
        start_interval();
    });

    function start_interval() {
        interval = setInterval(function () {
            $('#btn_R').trigger('click');
        }, 3000);
    }

    var index = 1;
    $('#btn_R').click(function () {
        slide_move(index % 5, "100%", (index - 1) % 5, "-100%");
        index++;
    });

    $('#btn_L').click(function () {
        index--;
        slide_move((index - 1) % 5, "-100%", index % 5, "100%");
    });
    var timer = 1000;
    function slide_move(coming, c_pos, outing, o_pos) {

        $('.btn_slide').css({
            'pointer-events': 'none'
        });
        setTimeout(function () {
            $('.btn_slide').css({
                'pointer-events': 'auto'
            });
        }, timer)

        $('.slide').eq(coming).css({
            left: c_pos
        }).animate({
            left: 0
        }, timer);
        $('.slide').eq(outing).animate({
            left: o_pos
        }, timer);
    }

    var sec_4 = $('.film_img').offset().top;

    $(window).scroll(function () {

        var pic_top = $(window).scrollTop() + 700;

        console.log(pic_top + " , " + sec_4);
        if (pic_top >= sec_4) {
            $('.film_img > li').css({
                // top: "-50%",
                // transform: "translateY(-50%)",
                opacity: "1",
                transform: "translateX(0)"
            });
        }
        else {
            $('.film_img > li').css({
                // top: "-100%",
                // transform: 'translateX(0%)',
                transform: "translateX(100px)",
                opacity: "0"
            });
        }
    });
});