$(document).ready(function(){

// 스크롤하면 헤더 왔다갔다/////////////////////////////////////////////////////////////////////////

    let last_scroll = 0;

    $(window).scroll(function(){

        let s_top = $(this).scrollTop()

        // console.log("최근 스크롤값 : ", last_scroll, ",스크롤탑값 : ",s_top)

        //내려갈때
        if(s_top > last_scroll){

            $('.header').css({
                opacity : 0,
                transition : "all 0.001s" 
            })

        }

        //올라갈때
        else if(s_top < last_scroll){

            $('.header').css({
                opacity : 1,
                display : 'block',
                position : 'fixed',
                marginTop : 0,
                transition : "all 0.3s" 
            })
        }
        
        last_scroll = s_top;
        
    })

// find_pan///////////////////////////////////////////////////////////////////////////////////////////////

    $('.find').click(function(){

        $('.find_pan').slideDown(300)


        $('#wrap').css({
            // opacity : 0.3
        })

        
        $('.find_pan').css({
            zIndex : 9999,
            opacity : 1
        })
    })
    

    $('.find_bot_icon').click(function(){
        $('.find_pan').slideUp(300)

        $('#wrap').css({
            opacity : 1
        })
    })


    $('.nav_items').hover(function(){

        let nav_length = $('.nav_items').length

        for(let i = 0; i < nav_length; i++){
            $('.nav_items a').removeClass('nav_item_active')
        }
  
        $('.nav_items a').eq($(this).index()).addClass('nav_item_active')

        let ttt = ($(this)).hasClass('scroll_none')

        if(ttt == false){ 
            // $('.nav_pan').css({opacity : 1})
            $('.nav_pan').stop().slideDown(300)
        }

        $('.nav_pan_items').css({display : 'none'})

        $('.nav_pan_items').eq($(this).index()).css({ display : 'flex'})
        
        },function(){$('.nav_pan').stop().slideUp(300)
                     $('.nav_items a').removeClass('nav_item_active')
    })


    $('.nav_pan').hover(function(){$('.nav_pan').stop().slideDown(300)},
                        function(){$('.nav_pan').stop().slideUp(300)})

    

    

//$(document).ready(function(){ //////////////////////////////////
})