$(document).ready(function(){
    let tb_length = $('.tb_txt').length;
    let tb_idx = 0;
    let timer = 1000;
    let nav_length = $('.nav_item').length;

    $('.tb_txt').eq(0).css({top: 0})
    setInterval(function(){
        $('.tb_txt').eq(tb_idx % tb_length).animate({
            top: '-100%'
        }, 500).animate({
            top: '100%'
        }, 0)
        $('.tb_txt').eq((tb_idx + 1) % tb_length).animate({
            top: '100%'
        }, 0).animate({
            top: '0'
        }, 500)
        tb_idx = (tb_idx + 1) % tb_length
    }, timer)

    for(let i=0; i<nav_length; i++){
        
    }

    let ham_chk = false;
    $('.ham').click(function(){
        if(ham_chk){
            ham_active('-250%', 'ham_45deg', 'mid_set', 'ham_m45deg', 'mid_set')
            $('.back_dark').removeClass('back_opa')
        }
        else{
            ham_active(0, 'mid_set', 'ham_45deg', 'mid_set', 'ham_m45deg')
            $('.back_dark').addClass('back_opa')
        }
        ham_chk = !ham_chk
    })

    function ham_active(pan_left, t1, t2, b1, b2){
        $('.ham_pan').animate({
            left: pan_left
        }, 500)

        $('.h_top').toggleClass(t1)
        setTimeout(function(){
            $('.h_top').toggleClass(t2)
        }, 500)

        $('.h_mid').toggleClass('opa_0')

        $('.h_bot').toggleClass(b1)
        setTimeout(function(){
            $('.h_bot').toggleClass(b2)
        }, 500)
    }

    $('.s_banner').eq(0).css({left: 0})
    let s_bn_length = $('.s_banner').length;
    let s_bn_idx = 0;
    let s_bn_timer = 1000;

    // 인디 추가
    for(let i=0; i<s_bn_length; i++){
        $('.s_indi_box').append(`<div class="s_indi ${i==0?'s_indi_active':''}"></div>`)
    }

    // 배너 움직임
    function slide_sb(o_pos, i_pos, i_bang){
        $('.s_banner').eq(s_bn_idx % s_bn_length).animate({
            left: o_pos
        }, s_bn_timer).animate({
            left: i_pos
        }, 0)

        $('.s_banner').eq(i_bang).animate({
            left: i_pos
        }, 0).animate({
            left: 0
        }, s_bn_timer)

        s_bn_idx = i_bang

        $('.s_indi').removeClass('s_indi_active')
        $('.s_indi').eq(s_bn_idx).addClass('s_indi_active')
    }

    // 배너 오토 슬라이드
    let auto_interval;
    function auto_slide(){
        auto_interval = setInterval(function(){
            slide_sb('-100%', '100%', (s_bn_idx + 1) % s_bn_length)
        }, s_bn_timer + 1000)
    }
    auto_slide()
})