$(document).ready(function(){
    


    //좋아요 색 바꾸기 수량조정
    let like_count;
    
    $('.xyb1xck').click(function(){
        $(this).css({
            display:'none'
        })
        $(this).nextAll('.xxk16z8').css({
            display:'block'
        })

        like_count =  $(this).parent().parent().nextAll('.like_count').children('span').text()

        $(this).parent().parent().nextAll('.like_count').children('span').text(+like_count+1)
        like_count= +like_count+1
    })


    $('.xxk16z8').click(function(){
        
        $(this).css({
            display:'none'
        })
        $(this).prevAll('.xyb1xck').css({
            display:'block'
        })

        like_count =  $(this).parent().parent().nextAll('.like_count').children('span').text()
        
        $(this).parent().parent().nextAll('.like_count').children('span').text(+like_count-1)
        like_count= like_count-1
    })



    //게시 나오게 하기
    $('.commert_text').keyup(function(){
        if($(this).val().length >= 1){
            $(this).nextAll('.comment_uplode').css({
                display: 'block'
            })
        }
        else{
            $(this).nextAll('.comment_uplode').css({
                display: 'none'
            })
        }
    })

    //댓글수 올리기
    let com_count;

    $('.comment_uplode').click(function(){
        com_count = $(this).parent().prevAll('.comment_count').children('span').text();
        $(this).prevAll('.commert_text').val('')
        $(this).css({
            display: 'none'
        })
        
        $(this).parent().prevAll('.comment_count').children('span').text(+com_count+1)

    })


//seemore 관련
//누르면 켜지기
$('.top_right').click(function(){
    $(this).parent().nextAll('.main_seemore').css({
        display: 'block'
    })
    $('body').css({
        overflow: 'hidden'
    })
})

//취소누르면 없애기
$('.seemore_cancle').click(function(){
    $(this).parent().parent().css({
        display: 'none'
    })

    $('body').css({
        overflow: 'auto'
    })
})

//삭제 누르면
$('.seemore_delete').click(function(){
    $(this).parent().parent().parent('.main_box').remove()

    $(this).parent().parent().css({
        display: 'none'
    })
    $('body').css({
        overflow: 'auto'
    })
})

})