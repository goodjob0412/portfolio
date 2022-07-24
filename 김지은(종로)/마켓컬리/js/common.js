$(document).ready(function(){

    // 모바일 장치구분해서 index_M로 무조건 넘기기
    if(navigator.maxTouchPoints >= 1) {
        location.replace('index_M.html')
    }

    // top_banner///
    let tb_timer = 500;
    let count = 20;
    interval = setInterval(function(){
        // 들어올거
        $('.top_banner').css({
            backgroundPosition: count +'px 4px'
        }, tb_timer)

        count+=1;

        if(count > 1000000000) {
            count = 0;
        }

        // let count = 100;
        // interval = setInterval(function(){
        //     console.log(count);
        //     count += 1;
        // }, 1000)

    }, 10);

    /////////////////////////////////////
    ///////  탑버튼  ///////////

    $('#top_btn').click(function(event) {
        event.preventDefault();

        $('html').animate({
            scrollTop: 0
        }, 1000)
    })


    // let s_top = $(window).scrollTop();
    
    $(window).scroll(function(){ 
        
        let f_o_top = $('footer').offset().top;
        let s_bot = $(window).scrollTop() + $(window).height() ;
        let top_button_height = $('#top_btn').outerHeight()
        console.log(f_o_top , s_bot)

        if(f_o_top <= s_bot) { 
            $('#top_btn').css({
                position: 'absolute',
                bottom: 'auto',
                right: '34px',
                top: f_o_top - top_button_height
            })
        }
        else { 
            $('#top_btn').css({
                position: 'fixed',
                bottom: '26px',
                right: '34px',
                top: 'auto'
            })
        }
        
    })

    
});