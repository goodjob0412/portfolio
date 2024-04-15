$(document).ready(function(){
    let toast_count = $('.toast_menu').length;
    let toast_w = $('.toast_menu').outerWidth();
    let interval;

    for(let i=0; i<toast_count; i++) {
        $('.toast_menu').eq(i).css({left: toast_w * i})
    }

    $(window).resize(function(){
        clearInterval(interval)
        toast_w = $('.toast_menu').outerWidth();
        for(let i=0; i<toast_count; i++) {
            $('.toast_menu').eq(( i+ t_bang)%toast_count).css({left: toast_w * i})
        }
    });

    let t_bang = 0;
    $('.t_btn_L').click(function(){
        btn_init();
        
        $('.toast_menu').animate({
            left: `-=${toast_w}`
        }, 500, 'linear') 
        $('.toast_menu').eq(t_bang % toast_count).animate({
            left: toast_w * (toast_count - 1)
        }, 0, 'linear')
        t_bang+=1;
    })

    $('.t_btn_R').click(function(){
        btn_init();
        
        $('.toast_menu').eq((t_bang - 1) % toast_count).animate({
            left: -toast_w
        }, 0, 'linear')
        
        $('.toast_menu').animate({
            left: `+=${toast_w}`
        }, 500, 'linear')        
        t_bang-=1;
    })

    function btn_init() {
        $('.t_btn').css({pointerEvents: 'none'})
        setTimeout(function(){
            $('.t_btn').css({pointerEvents: 'auto'})
        }, 500)
    }

    function t_auto_slide() {
        interval = setInterval(() => {
            $('.t_btn_R').trigger('click')
        }, 2000);
    }
    t_auto_slide()

    $('.toast_menu_pan').hover(function(){
        clearInterval(interval)
    }, function(){
        t_auto_slide();
    })

    
    let waffle_count = $('.waffle_menu').length;
    let waffle_w = $('.waffle_menu').outerWidth();
    let w_interval;
    for(let i=0; i<waffle_count; i++) {
        $('.waffle_menu').eq(i).css({left: waffle_w * i})
    }


    $(window).resize(function(){
        clearInterval(w_interval)
        waffle_w = $('.waffle_menu').outerWidth();
        for(let i=0; i<waffle_count; i++) {
            $('.waffle_menu').eq(( i+ w_bang)%waffle_count).css({left: waffle_w * i})
        }
    });

    let w_bang = 0;
    $('.w_btn_L').click(function(){
        w_btn_init();         
        $('.waffle_menu').animate({
            left: `-=${waffle_w}`
        }, 500, 'linear') 

        $('.waffle_menu').eq(w_bang % waffle_count).animate({
            left: waffle_w * (waffle_count - 1)
        }, 0, 'linear')
        w_bang+=1;
    })

    $('.w_btn_R').click(function(){
        w_btn_init();
        
        $('.waffle_menu').eq((w_bang - 1) % waffle_count).animate({
            left: -waffle_w
        }, 0, 'linear')

        
        $('.waffle_menu').animate({
            left: `+=${waffle_w}`
        }, 500, 'linear') 
        w_bang-=1;
    })

    function w_btn_init() {
        $('.w_btn').css({pointerEvents: 'none'})
        setTimeout(function(){
            $('.w_btn').css({pointerEvents: 'auto'})
        }, 500)
    }


    function w_auto_slide() {
        w_interval = setInterval(() => {
            $('.w_btn_L').trigger('click')
        }, 2000);
    }
    w_auto_slide()
    
    $('.waffle_menu_pan').hover(function(){
        clearInterval(w_interval)
    }, function(){
        w_auto_slide();
    })



    let drink_count = $('.drink_menu').length;
    let drink_w = $('.drink_menu').outerWidth();
    let d_interval;

    for(let i=0; i<drink_count; i++) {
        $('.drink_menu').eq(i).css({left: drink_w * i})
    }

    $(window).resize(function(){
    clearInterval(d_interval)
    drink_w = $('.drink_menu').outerWidth();
    for(let i=0; i<drink_count; i++) {
        $('.drink_menu').eq(( i+ d_bang)%drink_count).css({left: drink_w * i})
    }

    });

    let d_bang = 0;

    $('.d_btn_L').click(function(){
        d_btn_init();
        
        $('.drink_menu').animate({
            left: `-=${drink_w}`
        }, 500, 'linear') 

        $('.drink_menu').eq(d_bang % drink_count).animate({
            left: drink_w * (drink_count - 1)
        }, 0, 'linear')
        d_bang+=1;
    })

    $('.d_btn_R').click(function(){
        d_btn_init();
        
        $('.drink_menu').eq((d_bang - 1) % drink_count).animate({
            left: -drink_w
        }, 0, 'linear')

        
        $('.drink_menu').animate({
            left: `+=${drink_w}`
        }, 500, 'linear') 
        
        d_bang-=1;
    })

    function d_btn_init() {
        $('.d_btn').css({pointerEvents: 'none'})
        setTimeout(function(){
            $('.d_btn').css({pointerEvents: 'auto'})
        }, 500)
    }

    function d_auto_slide() {
        d_interval = setInterval(() => {
            $('.d_btn_R').trigger('click')
        }, 2000);
    }
    d_auto_slide()

    $('.drink_menu_pan').hover(function(){
        clearInterval(d_interval)
    }, function(){
        d_auto_slide();
    })
})