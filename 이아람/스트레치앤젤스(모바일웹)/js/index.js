//장치구분
var mobile = ["Android", "iPad" , "iPhone"];

for(var i = 0; i < 3; i++) {
    if(navigator.userAgent.match(mobile[i])) {
        location.replace("m_index.html")
    }
}
$(document).ready(function(){
    //슬라이드이미지
    $('.slide_img').eq(0).css({left: 0})
    var img_count = $('.slide_img').length;
    
    for(var i=0; i<img_count; i++) {
        $('.indicator_box').append('<div class="indicator"></div>')
    }

    $('.indicator').eq(0).addClass('indicator_on');

    var count = 1;
    $('.slide_btn_R').click(function(){
        slide(count%img_count, '100%', (count%img_count) - 1, '-100%')
        count++;
    })
    $('.slide_btn_L').click(function(){
        count--;
        slide((count%img_count) - 1, '-100%', count%img_count, '100%')
    })

    $('.slide_btn, .indicator').click(function(){
        $('.slide_btn, .indicator').css({pointerEvents:'none'});
        setTimeout(function(){
            $('.slide_btn, .indicator').css({pointerEvents:'auto'});
        },1000)
    })

    function slide(come, c_pos, out, o_pos) {
        $('.slide_img').eq(come).css({
            left: c_pos
        }).animate({
            left: 0
        },1000)

        $('.slide_img').eq(out).stop().animate({
            left: o_pos
        },1000)

        $('.indicator').eq(out).removeClass('indicator_on');
        $('.indicator').eq(come).addClass('indicator_on');
    }

    var auto;
    auto_slide();
    function auto_slide(){
        auto = setInterval(function(){
            $('.slide_btn_R, .pick_btn_R').trigger('click');
        },2000);
    }

    $('.main_banner, .pick_item').hover(function(){
        clearInterval(auto);
    },function(){
        auto_slide();
    })

    $('.indicator').click(function(){
        var indi_num = $(this).index();
        var indi_on_num= $('.indicator_on').index();

        if(indi_num > indi_on_num) {
            slide(indi_num, '100%', indi_on_num, '-100%')
        }
        else if(indi_num < indi_on_num) {
            slide(indi_num, '-100%', indi_on_num, '100%')
        }
        count = indi_num+1;
        $('.indicator').eq(indi_on_num).removeClass('indicator_on');
        $('.indicator').eq(indi_num).addClass('indicator_on')
    })

    
    $('.color_img').hover(function(){
        var img_type = $(this).children('img').attr('src')
        $('.arrival_scale').css({display:'block', background:'url('+img_type+') no-repeat center/cover'})
        $(this).children('.scale_img').css({display:'none', background:'rgba(255,255,255,0.5)'})
    },function(){
        $('.arrival_scale').css({display:'none'})
        $(this).children('.scale_img').css({display:'block'})
    })


    //arrival slide

    var arrival_count = $('.arrival_tmp').length;
    var a_count = 1;
    $('.arrival_tmp').eq(0).css({
        left: 0
    })

    $('.arrival_btn').click(function(){
        $('.arrival_btn').css({pointerEvents:'none'});
        $('.color_img').css({pointerEvents:'none'});
        setTimeout(function(){
            $('.arrival_btn').css({pointerEvents:'auto'});
            $('.color_img').css({pointerEvents:'auto'});
        },1000)
    })

    $('.arrival_btn_R').click(function(){
        arrval_slide(a_count%arrival_count, '100%', (a_count%arrival_count) - 1, '-100%')
        a_count++;
    })
    $('.arrival_btn_L').click(function(){
        a_count--;
        arrval_slide((a_count%arrival_count) - 1, '-100%', a_count%arrival_count, '100%')
    })

    for(var a = 0; a < arrival_count; a++){
        $('.arrival_indicator').append('<div class="a_indicator"></div>')
        $('.a_indicator').eq(0).addClass('a_indicator_active')
    }
    
    $('.a_indicator').click(function(){
        if($('.a_indicator_active').index() < $(this).index()) {
            arrval_slide($(this).index(),'100%',$('.a_indicator_active').index(),'-100%')
        }
        else if ($('.a_indicator_active').index() > $(this).index()){
            arrval_slide($(this).index(),'-100%',$('.a_indicator_active').index(),'100%')
        }
        a_count = $(this).index()+1;

    })
    
    function arrval_slide(a_come, a_c_pos, a_out, a_o_pos) {
        $('.arrival_tmp').eq(a_come).css({
            left: a_c_pos
        }).animate({
            left: 0
        },500)

        $('.arrival_tmp').eq(a_out).stop().animate({
            left: a_o_pos
        },500)

        $('.a_indicator').eq(a_out).removeClass('a_indicator_active');
        $('.a_indicator').eq(a_come).addClass('a_indicator_active');
    }


    $('.p_color_img').click(function(){
        var paninum = $(this).index();
        $('.panini_M').children('img').attr('src','img/firstpage/panini/'+paninum+'_2.jpg');
    })

    //pick img
    var pick_count = $('.pick_item').length;
    for(var p_img=0; p_img<pick_count; p_img++) {
        $('.pick_item').eq(p_img).children('a').children('.pick_img').css({
            background: 'url(img/firstpage/pick/pick_'+(p_img+1)+'.jpg) no-repeat center / cover'
        })
    };

    //pick slide
    var pick_size = $('.pick_item').outerWidth();
    var pick_left = 0;

    for(var p=0; p<pick_count; p++) {
        pick_left = pick_size * p;
        $('.pick_item').eq(p).css({left: pick_left});
    }

    var pick_index= 0;
    $('.pick_btn_L').click(function(){
        pick_index-=1
        $('.pick_item').eq(pick_index % pick_count).animate({
            left: -1 * pick_size
        }, 0, 'linear');
        $('.pick_item').animate({
            left: '+='+pick_size
        },500, 'linear');        
    })
    $('.pick_btn_R').click(function(){
        $('.pick_item').animate({
            left: '-='+pick_size
        },500, 'linear');
        $('.pick_item').eq(pick_index % pick_count).animate({
            left: pick_size * (pick_count - 1)
        }, 0, 'linear');
        pick_index+=1
    })
    $('.pick_btn').click(function(){
        $('.pick_btn').css({pointerEvents:'none'});
        setTimeout(function(){
            $('.pick_btn').css({pointerEvents:'auto'});
        },500)
    })


    //rank img
    var rank_count = $('.rank_item').length;
    for(var r_img=0; r_img<rank_count; r_img++) {
        $('.rank_item').eq(r_img).children('a').children('.rank_img').css({
            background: 'url(img/firstpage/ranking/'+(r_img+1)+'.jpg) no-repeat center / cover'
        })
    };
    var rank_w;
    ranking();
    function ranking() {
        rank_w = $('.rank_item').innerWidth();
        var rank_left = 0;
        
        for(var r=0; r < rank_count; r++) {
            rank_left = rank_w * r
            $('.rank_item').eq(r).css({
                left: rank_left
            })
        }
    }
    $(window).resize(function() {
        ranking();
    })
   

    var rank_index;
    $('.rank_btn_L').click(function(){
        rank_index = 0;
        if(rank_index == 0) {
            $('.rank_item').animate({
                left: '+='+rank_w
            },500,'linear');
        }
        $('.rank_btn_L').css({
            zIndex: -999,
        })
        $('.rank_btn_R').css({
            zIndex: 1,
        })
    })
    $('.rank_btn_R').click(function(){
        $('.rank_btn_R').css({
            zIndex: -999,
        })
        $('.rank_btn_L').css({
            zIndex: 1,
        })
        rank_index = 1;
        if(rank_index == 1) {
            $('.rank_item').animate({
                left: '-='+rank_w  
            },500,'linear');
        }
    })




})


