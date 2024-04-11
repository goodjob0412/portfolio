$(document).ready(function(){
    // 배너 초기화 
    $('.banner').eq(0).css({left: 0})
    // indi 초기화 -
    let bn_length = $('.banner').length;
    for(let i=0; i<bn_length; i++) {
        $('.indi').append(`<div class="line"></div>`);
    }
    $('.line').eq(0).addClass('line_active');


    let bang = 0;
    let bn_timer = 1000
    $('#btn_R').click(function(){
        btn_init() 
        slide('-100%', (bang+1) % bn_length, '100%')
        indi_paging()
    })
    $('#btn_L').click(function(){ 
        btn_init() 
        slide('100%', (bang-1) % bn_length, '-100%')
        indi_paging()
    })
    function btn_init() {
        // 버튼막기
        $('.btn_slide').css({pointerEvents: 'none'})
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents: 'auto'})
        }, bn_timer)
    }
    function slide(o_pos, c_idx, c_pos) { 
        
        // 나갈판
        $('.banner').eq(bang % bn_length).animate({
            left: o_pos
        }, bn_timer)

        // 들어올판
        $('.banner').eq(c_idx).css({
            left: c_pos
        }).animate({
            left: '0%'
        }, bn_timer)

        bang=c_idx 
    }
    function indi_paging() {
        $('.line').removeClass('line_active')
        $('.line').eq((bang) % bn_length).addClass('line_active')
    } 
    
    
    load_item(0 , 8)
    load_item(1, 8)
    load_item(2, 8)
    

    
    let top3_o_top = $('#top3').offset().top
    let men_o_top = $('#men').offset().top
    let women_o_top = $('#women').offset().left
    
    

    console.log("초기 위치: ", men_o_top, women_o_top,);

    setTimeout(function(){
    }, 100)

    let flash_hs = new Array($('.flash').length) ;
    for(let i=0; i<flash_hs.length; i++) {
        flash_hs[i]=true
    }
    console.log("flash: " , flash_hs)


    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();


        if(flash_hs[0] && s_bot - 300 >= top3_o_top) {
            item_slideUp($('#top3 .pos_init1'));
            flash_hs[0]=false;
            men_o_top = $('#men').offset().top
            women_o_top = $('#women').offset().left
            
        }  
        if(flash_hs[1] && s_bot - 300 >= men_o_top) {
            item_slideUp($('#men .pos_init1'));
            flash_hs[1]=false;
            men_o_top = $('#men').offset().top
            women_o_top = $('#women').offset().left
            
        }
        if(flash_hs[2] && s_bot - 300 >= women_o_top) {
            item_slideUp($('#women .pos_init1'));
            flash_hs[2]=false;
            men_o_top = $('#men').offset().top
            women_o_top = $('#women').offset().left
            
        }
       
    })

    function item_slideUp(el) {
        for(let i=0; i<el.length;i++) {
            setTimeout(function(){
                el.eq(i).toggleClass('pos_init1_active')
            }, 100 * i)
        }
    }


    // 레이어팝업 
    // big_img_box에 높이 주기
    let img_box_h = $('.img_box').height();
    $('.big_img_box').css({
        height: img_box_h
    })

    $('.sm_item').mouseenter(function(){
        $('.img_box').fadeOut(200);
        $('.img_box').eq($(this).index()).stop(true).fadeIn(200);
    });


    $('.btn_close, .btn_close_today').click(function(){
        $('.layer_popup').remove();
    })

    // 레이어팝업 끌고 다니끼
    
    
    

    $('.layer_popup').mouseup(function(){
        $(document).off('mousemove')
    })

});