$(document).ready(function () {

    // 메인 배너 휠 감지해서 페이지 자동 스크롤되게
    $('.banner').on('mousewheel DOMMouseScroll', function (event) {
        let pos_Y = event.originalEvent.deltaY;
        let o_top;
        console.log(pos_Y);

        // 휠을 내릴 때
        if (pos_Y > 0) {
            if ($(this).next().length > 0) {
                o_top = $(this).next().offset().top;
            }
        }
        // 휠을 올릴 때
        else if (pos_Y < 0) {
            if ($(this).prev().length > 0) {
                o_top = $(this).prev().offset().top;
            }
        }

        if (o_top !== undefined) {
            $('html, body').stop(true).animate({
                scrollTop: o_top
            }, 1000);
        }
    });

})

