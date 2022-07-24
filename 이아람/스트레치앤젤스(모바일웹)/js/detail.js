//장치구분
var mobile = ["Android", "iPad" , "iPhone"];

for(var i = 0; i < 3; i++) {
    if(navigator.userAgent.match(mobile[i])) {
        location.replace("m_detail.html")
    }
}
$(document).ready(function(){
    // 내비
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('.detail_top').css({
                marginTop: 0
            })
            $('.container').css({
                marginTop: 0
            })
        }   
        else {
            $('.detail_top').css({
                marginTop: 0
            })
            $('.container').css({
                marginTop: 50
            })
        }
    })
    $('.nav_btn').click(function(){
        if($(window).scrollTop() > 50) {
            $('.detail_top').css({
                marginTop: 0
            })
            $('.container').css({
                marginTop: 0
            })
        }   
        else {
            $('.detail_top').css({
                marginTop: 0
            })
            $('.container').css({
                marginTop: 50
            })
        }
    })

    $('.size_txt, .alarm').click(function(){
        alert("준비중입니다.");
    })

    // 이미지 섹션
    var color_count = $('.c_img').length;
    var detail_count = $('.product').eq(0).children('.detail_list').children('div').children('div').children('.detail_sec').length;
    var detail_w = $('.detail_sec').outerWidth();
    var p_img_w =$('.p_img').width();
    
    //큰이미지 섹션 만들기
    for(var p_sec=0; p_sec<detail_count; p_sec++){
        $('.p_img').append('<div class="p_img_sec"></div>');
    }
    //이미지 삽입 및 배치
    for(var color_index=0; color_index < color_count; color_index++) {
        var color = $('.c_img').eq(color_index).text();
        $('.c_img').eq(color_index).css({
            background: 'url(img/detail/minnie/'+color+'/1.jpg) no-repeat center / contain'
        })

        for(var detail_align = 0; detail_align < detail_count; detail_align++) {
            $('.product').eq(color_index).children('.detail_list').children('div').children('div').children('.detail_sec').eq(detail_align).css({
                left: detail_align * detail_w,
                background: 'url(img/detail/minnie/'+color+'/'+(detail_align+1)+'.jpg) no-repeat center / contain'
            })
            $('.p_img').eq(color_index).children('.p_img_sec').eq(detail_align).css({
                background: 'url(img/detail/minnie/'+color+'/'+(detail_align+1)+'.jpg) no-repeat center / contain'
            })

        }
        

        $('.product').eq(0).find('.p_img').children('.p_img_sec').eq(0).css({left: 0});
        $('.product').eq(1).find('.p_img').children('.p_img_sec').eq(0).css({left: 0});
    }

    //컬러 변경
    var c_img_chk = true;
    $('.product').eq(c_img_chk).css({
        display: 'none'
    })
    
    $('.c_img').click(function(){   
        if($(this).index()==c_img_chk) {
            $('.product').eq(c_img_chk).css({
                display: 'block'
            })
        }
        else {
            $('.product').eq(c_img_chk).css({
                display: 'none'
            })
        }
    })

    //슬라이드 (큰이미지)
    var slide_index = 1;
    $('.btn_L').click(function(){
        slide_index -= 1;
        if((slide_index-1) % detail_count < 0) {
            slide_index += detail_count;
        }

        slide_move(((slide_index-1) % detail_count), "-100%", (slide_index % detail_count), "100%"); 
    });

    $('.btn_R').click(function(){  
        slide_move((slide_index % detail_count), "100%", ((slide_index-1) % detail_count), "-100%");
        slide_index += 1;
    });
 
////////////////////////////////////////////////////////////////////////////////
    var curr_index = 0
    function slide_move(coming, c_pos, outing, o_pos) {
        curr_index = coming;
        for(var i=0; i<$('.product_img').length; i++) {
            $('.product_img').eq(i).find('.p_img_sec').eq(coming).animate({
                left: c_pos
            }, 0).animate({
                left: "0"
            }, 500);
            $('.product_img').eq(i).find('.p_img_sec').eq(outing).animate({
                left: o_pos
            }, 500);
        } 
    }

////////////////////////////////////////////////////////////////////////////////

    // 작은거 클릭 시 큰거 변경
    $('.detail_sec').click(function(){
        var detail_num = $(this).index(); 

        if(curr_index < detail_num) {
            slide_move(detail_num, "100%", ((slide_index-1) % detail_count), "-100%");
            slide_index = detail_num+1;
        }
        else if(curr_index > detail_num) {
            
            if((slide_index-1) % detail_count < 0) {
                slide_index += detail_count;
            }
            slide_move(detail_num, "-100%", ((slide_index-1) % detail_count), "100%"); 
            slide_index = detail_num+1;
        }
    })


    
    //슬라이드 (작은이미지)
    var detail_index = 0;
    $('.list_btn_L').click(function(){
        detail_index--;
        slide_L(detail_index,detail_count,'.detail_list','.detail_list_in','.detail_sec',detail_w,'200');
    })
    $('.list_btn_R').click(function(){
        slide_R(detail_index,detail_count,'.detail_list','.detail_list_in','.detail_sec',detail_w,'200');
        detail_index++;
    })
      

    // 왼쪽
    function slide_L(index,count,par,fd,chil,width,timer) {
        if(index < 0) {
            slide_index += detail_count
            detail_index += detail_count
        }
 
        $(par).eq(0).find(fd).children(chil).eq(index % count).animate({
            left: -1 * width
        }, 0, 'linear');
        
        $(par).eq(1).find(fd).children(chil).eq(index % count).animate({
            left: -1 * width
        }, 0, 'linear');

        
        $(fd).children(chil).animate({
            left: '+='+width
        }, timer,'linear');
    }
    //오른쪽
    function slide_R(index,count,par,fd,chil,width,timer) {
        if(index >= 8) {
            slide_index -= detail_count
            detail_index -= detail_count
        } 

        $(fd).children(chil).animate({
            left: '-='+width
        },timer,'linear');

        $(par).eq(0).find(fd).children(chil).eq(index % count).animate({
            left: width * (count - 1)
        }, 0, 'linear');
        
        $(par).eq(1).find(fd).children(chil).eq(index % count).animate({
            left: width * (count - 1)
        }, 0, 'linear');
    }



    // 버튼막기
    $('.btn, .list_btn, .detail_sec').click(function(){
        $('.btn, .c_img, .list_btn, .detail_sec').css({pointerEvents: 'none'});
        setTimeout(function(){
            $('.btn, .c_img, .list_btn, .detail_sec').css({pointerEvents: 'auto'});
        },300)
    })

 

})