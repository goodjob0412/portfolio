

let cate = get_info_from_url("cateNo")

    load_item(cate, 3);



///////nav 클릭 시 색 변화
        let url = window.location.href;
        let cateNoIndex = url.split("cateNo=")[1]; 
        console.log(cateNoIndex)
        if(cateNoIndex !== undefined) {
            let cate = parseInt(cateNoIndex);
            $(`.menu_nav_li:eq(${cate})`).addClass('clicked li_color');
        }
    
        $(document).on('click', '.menu_nav_li', function(){
            $('.menu_nav_li').removeClass('clicked li_color');
            $(this).addClass('clicked li_color');
        });



//////li 호버 시 기능
let tmp_timeout;
$(document).on('mouseenter', '.list_pan_li', function(){
    clearTimeout(tmp_timeout)
    $('.img2').css({
        opacity: 0
    })

    $(this).find('.img_name').addClass('img_name_active');
    $(this).find('.mark').addClass('mark_active');
    if($(this).find('.img2').length) {
        $(this).find('.img1').css({
            transform: 'scaleY(0)'
        })
        let $this = $(this);
        tmp_timeout=setTimeout(function(){
            $this.find('.img2').css({
                opacity: 1
            })
        }, 200)
    }
});

$(document).on('mouseleave', '.list_pan_li', function(){
    clearTimeout(tmp_timeout)
    $('.img2').css({
        opacity: 0
    })

    $(this).find('.img_name').removeClass('img_name_active');
    $(this).find('.mark').removeClass('mark_active');
    if($(this).find('.img2').length) {
        $(this).find('.img1').css({
            transform: 'scaleY(1)'
        })
        $(this).find('.img2').css({
            opacity: 0,
        })
    }

});


////////footer에 닿으면 3개씩 늘어나기
$(window).scroll(function(){
    let f_t = $('.footer').offset().top;
    let d_t = $(window).scrollTop() + $(window).height();

    if(d_t >= f_t + 200) {
        load_item(cate, 3);
    }
});


///////반응형일 때 2개씩 늘어나기

// if (matchMedia("screen and (min-width: 934px)").matches) {
//     load_item(cate, 2)
// }

////////////////top_btn2
$(window).scroll(function(){
    let top_btn2_b = $('.top_btn2').offset().top + $('.top_btn2').height(); 
    let f_t = $('.footer').offset().top;
    if(top_btn2_b >= f_t ){
        $('.top_btn2').css({
            border: '1px solid #fff', 
            color: '#fff'
        });
    }
    else if(top_btn2_b < f_t ){
        $('.top_btn2').css({
            border: '1px solid #000', 
            color: '#000'
        });
    }
});

$('.top_btn2').click(function () {
    event.preventDefault()

    $('html, body').animate({
        scrollTop: 0
    }, 1000)
})

