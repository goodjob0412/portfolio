//장치구분
var mobile = ["Android", "iPad" , "iPhone"];

for(var i = 0; i < 3; i++) {
    if(navigator.userAgent.match(mobile[i])) {
        location.replace("m_minnie.html")
    }
}
$(document).ready(function(){
    var img_count = $('.slide_img').length;
    for(var m_img=0; m_img<img_count; m_img++) {
        $('.slide_img').eq(m_img).css({
            background: 'url(img/minnie/slide/'+(m_img+1)+'.jpg) no-repeat center / cover'
        })
    };

    //슬라이드
    size();
    var m_size;
    function size(){
        m_size = $('.slide_img').outerWidth();
        var m_left = 0;
    
        for(var p=0; p<img_count; p++) {
            m_left = m_size * p;
            $('.slide_img').eq(p).css({left: m_left});
        }
        $('.left').css({left: m_size - 60})
        $('.right').css({left:m_size + m_size + 10})
        $('.slide_img').eq(1).css({
            opacity: 1
        })
    }

    $(window).resize(function() {
        size();
    })

    var g_width = $('.slide_gauge').outerWidth()/img_count
    var slide_index= 0;

    $('.left').click(function(){
        clearInterval(auto);

        slide_index-=1
        $('.slide_img').eq(slide_index % img_count).animate({
            left: -1 * m_size
        }, 0, 'linear');
        $('.slide_img').animate({
            left: '+='+m_size
        },500, 'linear');  
        $('.slide_img').eq((slide_index+1)%img_count).animate({
            opacity: 1
        },0,'linear');
        $('.slide_img').eq((slide_index+2)%img_count).animate({
            opacity: 0.5
        },0,'linear'); 

        // 게이지 바
        if(slide_index < 0) {
            slide_index += img_count;
        }
         
        $('.gauge_sec').animate({
            left: g_width*((slide_index)%img_count)
        },500,'linear');
        
        auto_slide();
    })
    $('.right').click(function(){
        clearInterval(auto);

        $('.slide_img').animate({
            left: '-='+m_size
        },500, 'linear');
        $('.slide_img').eq(slide_index % img_count).animate({
            left: m_size * (img_count - 1)
        }, 0, 'linear');
        $('.slide_img').eq((slide_index+2)%img_count).animate({
            opacity: 1
        },0,'linear');
        $('.slide_img').eq((slide_index+1)%img_count).animate({
            opacity: 0.5
        },0,'linear'); 
 
        // 게이지 바
        $('.gauge_sec').animate({
            left: g_width*((slide_index+1)%img_count)
        },500,'linear');
        slide_index+=1

        auto_slide();

    })

    $('.slide_btn').click(function(){
        $('.slide_btn').css({pointerEvents:'none'});
        setTimeout(function(){
            $('.slide_btn').css({pointerEvents:'auto'});
        },500)
    })

    var auto;
    auto_slide();
    function auto_slide(){

        auto = setInterval(function(){
            $('.right').trigger('click');
        },2000);
    }
    



})