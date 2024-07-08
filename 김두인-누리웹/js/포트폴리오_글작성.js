$(document).ready(function(){
    $(document).on('click', '.icon_btn', function(){
        $('.icon_pan').toggleClass('pan_active')
        $('.pan_icon_img').toggleClass('img_active')
    })

    // 제목 글자수 제한
    let limit_txt = 25;
    $('#title').keyup(function(){
        let txt_count = limit_txt - $('#title').val().length
        if(txt_count < 0){
            $('#title').val($('#title').val().slice(0, limit_txt))
            alert('25자를 넘었습니다.')
        }
    })
    // 제목 클릭시 색 변환
    $(document).on('click', '#title', function(){
        $('.txt_box').css({
            borderColor: 'blue'
        })
        $('#title').css({
            background: '#ddd'
        })
    })
    $(document).on('blur', '#title', function(){
        $('.txt_box').css({
            borderColor: 'rgba(0, 0, 0, 0.5)'
        })
        $('#title').css({
            background: '#fff'
        })
    })

    // 폰트 사이즈 조절
    let f_size = 14;
    let f_pm = 2;
    $('.font_up').click(function(){
        $('textarea').css({
            fontSize: f_size + f_pm
        })
        f_size = f_size + f_pm
        $('.show_size').text(f_size + "px");
    })
    $('.font_down').click(function(){
        if(f_size > 8){
            $('textarea').css({
                fontSize: f_size - f_pm
            })
            f_size = f_size - f_pm
            $('.show_size').text(f_size + "px");
        }
        else{
            alert('8px이상만 가능합니다.')
        }
    })
    // 텍스트 데코레이션
    $('.font_w').click(function(){
        $('.font_w').toggleClass('tool_active')
        $('textarea').toggleClass('weight_900')
    })
    $('.font_u').click(function(){
        $('.font_u').toggleClass('tool_active')
        $('textarea').toggleClass('txt_under')
    })
    $('.font_s').click(function(){
        $('.font_s').toggleClass('tool_active')
        $('textarea').toggleClass('txt_strike')
    })
})