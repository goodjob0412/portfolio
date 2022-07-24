$(document).ready(function () {
    var b_slide =1;
    var slide_length = $('.slide').length;

    setInterval(function(){
        
        $('.slide').eq(b_slide % slide_length).css({
            left:'100%'
        }).animate({
            left:0
        },1000)
        $('.slide').eq((b_slide - 1) % slide_length).animate({
            left:'-100%'
        },1000);
        b_slide ++;    
    },3000)

    var issue = 1;
    var issue_story = $('.issue_story > b').length;

    setInterval(function(){
        $('.issue_story > b').eq(issue % issue_story).css({
            opacity:0
        }).animate({
            opacity:"1"
        },500);
        $('.issue_story > b').eq((issue - 1) % issue_story ).animate({
            opacity:0
        },500)
        issue ++;
    },1000)



    $('.sec2_ul > li').click(function () {

        $(".sec2_ul > li").css({
            fontWeight: "normal",
        });
        $(this).css({
            fontWeight: "bold"
        });
        $('.sec2_line').css({
            display:"none"
        })
        $(".sec2_box_ul").css({
            display:'none'
        })
        $('.sec2_box_ul').eq($(this).index()).css({
            display:'block'
        })
        $('.sec2_line').eq($(this).index()).css({
            display:'block'
        })
    });

    $('.sec_top_ul > li').eq(0).trigger('click');
    
    $('.sec_top_ul > li').click(function(){
        $('.sec_top_img').css({
            transform: "scale(0)"
        })
        $('.sec_top_ul > li > p').css({
            color:"#555"
        })
        $('.sec3_ul').css({
            display:'none'
        })
        $('.sec_top_img').eq($(this).index()).css({
            transform: "scale(1)"
        })
        $('.sec_top_ul > li > p').eq($(this).index()).css({
            color:"#000"
        })
        $('.sec3_ul').eq($(this).index()).css({
            display:'block'
        })

    })


});