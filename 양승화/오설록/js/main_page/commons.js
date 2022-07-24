$(document).ready(function(){

     //탑 부드럽게 보내는거
     $('.top_btn').click(function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);

    })
   
    // 인스타 이미지 슬라이드
    var box_width = $('.ins_img').outerWidth();
    var box_count = $('.ins_img').length;
    
    ///현재 보고 있는거
    var count = 0;

    var time =1000;
    var return_count = box_width * (box_count -1)

    
    //박스 옆으로 나열
    for(var i=0; i < box_count; i++){
        $('.ins_img').eq(i).css({left: i * box_width})
    }; 


    //오른쪽 버튼
    $('#right_btn').click(function(){
        //들어오는거
        $('.ins_img').animate({
            left:"-="+box_width
        }, time)
        //특정번째꺼만 반대방향 끝으로 이동
        $('.ins_img').eq(count % box_count).animate({
            left: return_count
        },0)

        count+=1;
    });

    //왼쪽 버튼
    $('#left_btn').click(function(){
        count -=1;
        //특정번째꺼만 오른쪽 끝으로 이동
        $('.ins_img').eq(count % box_count).animate({
            left: -1 * box_width
        },0)
        //box둘다 오른쪾으로 box의 가로만큼 이동
        $('.ins_img').animate({
            left:"+="+box_width
        }, time)
    });  

    //자동으로 슬라이드 시작
    var interval;
    auto_slide()
    function auto_slide(){
        interval = setInterval(function(){
                 $('#right_btn').trigger('click');
               },  time *2);
    }

    //마우스 올리면 멈추기
    $('.ins_banner').hover(function(){
        
        clearInterval(interval)
        
    },function(){
        auto_slide()
    });
});