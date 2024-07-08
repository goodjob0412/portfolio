$(document).ready(function(){

    //sec4 
    //이미지 배치
    main_img_set()
    function main_img_set(){
        for(let i=0; i<ITEM_LIST.length; i++){
            $('.main_bot').append(`
            <div class="main_item">
            <a href="./my_library3.html?item_no=${i+1}" class="main_imgbox">
                <img src="../독후감/책이미지/책${ITEM_LIST[i].side_src}" alt="읽은책이미지" class="main_side main_side${i}">
                <img src="../독후감/책이미지/책${ITEM_LIST[i].src}" alt="읽은책이미지" class="main_front main_front${i}">
                <img src="../독후감/책이미지/책${ITEM_LIST[i].cover_src}" alt="읽은책이미지"
                class="main_back main_back${i}">
            </a>
            <div class="main_name">${ITEM_LIST[i].title}</div>
            </div>
        `)
        }
        setTimeout(()=>{
            for(let i=0; i<$('.main_item').length; i++){
                $(`.main_front${i}`).css({
                    transform:` rotateY(0deg) translate3d(-1px, 0px, ${($('.main_side').eq(i).width())/2}px)`
                })
                $(`.main_back${i}`).css({
                    transform:` rotateY(180deg) translate3d(0px, 0px, ${($('.main_side').eq(i).width())/2}px)`
                })
                $(`.main_side${i}`).css({
                    transform:` rotateY(-90deg) translateZ(${($('.main_side').eq(i).width())/2}px)`
                })
            }
        },10)

        $('.main_item').hover(function(){
            $('.main_imgbox').eq($(this).index()).css({transform:'rotateY(40deg)'})
        },function(){
            $('.main_imgbox').eq($(this).index()).css({transform:'rotateY(0deg)'})
        })
    }
    
    //무한스크롤 3번
    let w_h= $(window).height()
    let w_b;
    let main_count = 0;
    $(window).scroll(function(){
        w_b= $(window).scrollTop()+w_h
        if(main_count<2){
            if(w_b>=$('.footer').offset().top+200){
                main_img_set()
                main_count++
            }
        }
    })



})