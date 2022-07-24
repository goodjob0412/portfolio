$(document).ready(function () {

    $('.current > li').mouseover(function () {

        $(".current > li").css({
            fontWeight: "normal",
            borderBottom: "none"
        });
        $(this).css({
            fontWeight: "bold",
            borderBottom: "4px solid #4075ff"
        });
        $(".items_cart_desc").css({
            opacity: '0'
        })
        $('#items_2').css({
            display: 'block'
        });
        $('.items_cart_cart_desc').css({
            opacity: '1'
        })
        $('.items_cart_desc').eq($(this).index()).css({
            opacity: '1'
        })
        $('#items_2').eq($(this).index()).css({
            display: 'none'
        });
        $('.items_cart_cart_desc').eq($(this).index()).css({
            opacity: '0'
        });
    });

    var countDownDate = new Date("aug 31, 2019 14:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown").innerHTML = "남은시간 " + hours + ":"
            + minutes + ":" + seconds + "";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            countdown
        }
    }, 1000);



    $('.md_pick_img_slide').eq(0).css({ display: 'block' })

    var fade_time = 500;
    start_interval();

    function start_interval() {
        interval = setInterval(function () {
            $('.btn_slide').trigger('click');
        }, fade_time + 1000);
    }
    var slide_index = 0;

    var slide_length_1 = $('.md_pick_img_slide').length;
    console.log($('.md_pick_img_slide').length, slide_length_1);

    $('#btn_R').click(function () {
        console.log(slide_length_1);
        fade_pan((slide_index + 1) % slide_length_1, (slide_index) % slide_length_1);

        slide_index++;
        // console.log(slide_index % slide_length_1);      
    });
    $('#btn_L').click(function () {
        fade_pan((slide_index + 1) % slide_length_1, (slide_index) % slide_length_1);

        slide_index++;
    });
    function fade_pan(coming, outing) {
        // console.log(coming, outing);
        $('.md_pick_img_slide').eq(coming).stop().fadeIn(fade_time);
        $('.md_pick_img_slide').eq(outing).stop().fadeOut(fade_time);
    }


    var sec_4 = $('.sec_4').offset().top;

    $(window).scroll(function () {

        var pic_top = $(window).scrollTop() + 300;

        // console.log(pic_top + " , " + sec_4);
        if (pic_top >= sec_4) {
            $('.four_pic').css({
                // top: "-50%",
                // transform: "translateY(-50%)",
                opacity: "1",
                transform: "translateY(0)"
            });
        }
        else {
            $('.four_pic').css({
                // top: "-100%",
                // transform: 'translateY(0%)',
                transform: "translateY(100px)",
                opacity: "0"
            });
        }
    });

    var camera_box = $('.camera_box').offset().top;

    $(window).scroll(function () {

        var camera = $(window).scrollTop() + 200;

        console.log(camera + " , " + camera_box);
        if (camera >= camera_box) {
            $('.camera_box').css({
                opacity: "1",
                // transform: "translateY(50px)"
            });
        }
        else {
            $('.camera_box').css({
                opacity: "0"
            });
        }
    });

    $('.roma_img_box > li').mouseover(function () {

        $(".roma_img_box > li").css({
            fontWeight: "normal"
        });
        $(this).css({
            fontWeight: "bold"
        });
        $(".roma_img").css({
            opacity: '0'
        })
        $('.roma_img').eq($(this).index()).css({
            opacity: '1'
        })
    });

    var index = 1;
    var timer = 1000;
    var s_length = $('.slide').length;

    var interval;
    function start_interval() {
        interval = setInterval(function () {
            $('#m_btn_R').trigger('click');
        }, 3000);
    }
    start_interval();

    $('#m_btn_R').click(function () {
        clearInterval(interval);
        $('.slide').eq(index % s_length).stop().fadeIn(timer);
        $('.slide').eq((index - 1) % s_length).stop().fadeOut(timer);

        $('.circle').removeClass('circle_color');
        $('.circle').eq(index % s_length).addClass('circle_color');

        index++;
        start_interval();
    });

    $('#m_btn_L').click(function () {
        clearInterval(interval);
        index--;
        $('.slide').eq((index - 1) % s_length).stop().fadeIn(timer);
        $('.slide').eq(index % s_length).stop().fadeOut(timer);

        $('.circle').removeClass('circle_color');
        $('.circle').eq((index - 1) % s_length).addClass('circle_color');

        start_interval();
    });

    var timer = 1000;

    $('.m_btn_slide').css({
        'pointer-events': 'none'
    });
    setTimeout(function () {
        $('.m_btn_slide').css({
            'pointer-events': 'auto'
        });
    }, timer)

    $('.circle').click(function () {

        clearInterval(interval);
        $('.slide').eq((index - 1) % s_length).stop().fadeOut(timer);
        $('.slide').eq($(this).index()).stop().fadeIn(timer);

        $('.circle').removeClass('circle_color');
        $('.circle').eq($(this).index()).addClass('circle_color');
    });

    // var list = 1;
    // var slide_length = $('.blue_list').length;

    // setInterval(function () {

    //     $('.blue_list').eq(list % slide_length).css({
    //         left: '100%'
    //     }).animate({
    //     },10000)
    //     $('.blue_list').eq((list - 1) % slide_length).animate({
    //         left: '-100%'
    //     },10000);
    //     list++;
    // },10000)

    // var best =1;
    // var b_slide = $('.best_480 > li').length;

    // setInterval(function(){
        
    //     $('.best_480 > li').eq(best % b_slide).css({
    //         left:'100%'
    //     }).animate({
    //         left:0
    //     },1000)
    //     $('.best_480 > li').eq((best - 1) % b_slide).animate({
    //         left:'-100%'
    //     },1000);
    //     best ++;    
    // },3000)
});