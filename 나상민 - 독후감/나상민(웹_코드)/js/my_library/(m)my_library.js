$(document).ready(function(){
    //네비 화면 이동
    $('.nav_menu').click(function(){
        let ham_ot = [
            ($('.main_banner').offset().top-70),
            ($('.sec3').offset().top-70),
            ($('.sec4').offset().top-70)
        ]
        $('.ham_pan').animate({
            left:'-150%'
        },300)

        $('html, body').animate({
        scrollTop: ham_ot[$(this).index()]
        },500)
    })


    //화면크기 맞게 left 설정
    if($(window).width()<=320){
        $('.mb_imgbox').css({
            left:'35%'
        })
    }
    else if($(window).width()<=360){
        $('.mb_imgbox').css({
            left:'40%'
        })
    }
    else if($(window).width()<=430){
        $('.mb_imgbox').css({
            left:'45%'
        })
    }
    else{
        $('.mb_imgbox').css({
            left:'50%'
        })
    }

    let mb_bang = 0;
    //sec1 이미지 초기셋
    for(let i=0; i<4; i++){
        $('.mb_imgbox').append(`
        <div class="mb_img">
            <img src="../독후감/책이미지/책${ITEM_LIST[i+10].src}" alt="추천도서" class="mb_front mb_front${i}">
            <img src="../독후감/책이미지/책${ITEM_LIST[i+10].cover_src}" alt="추천도서" class="mb_back  mb_back${i}">
            <img src="../독후감/책이미지/책${ITEM_LIST[i+10].side_src}" alt="추천도서" class="mb_side  mb_side${i}">
        </div>
    `)
    }
    $('.mb_img').eq(0).css({
        left:0
    })

    //타이틀 초기셋
    $('.mb_title').text(`${ITEM_LIST[10].title}
    `)
    let mb_length = $('.mb_img').length
    //title클릭시 사진변경및 글자 변경및 텍스트 변경
    $('.mb_next').click(function(){
        //버튼막기
        $('.mb_next').css({
            pointerEvents: 'none'
        })
        setTimeout(() => {
            $('.mb_next').css({
                pointerEvents: 'auto'
            })
        }, 500);
        //트렌지션 막기
        $('.mb_img').css({
            transition:'none'
        })
        setTimeout(() => {
            $('.mb_img').css({
                transition:'0.5s all'
            })
        }, 500);
        //이미지 돌리기 
            $('.mb_img').eq((mb_bang)%mb_length).animate({
                left:'-200%'
            },500)
            $('.mb_img').eq((mb_bang+1)%mb_length).css({
                left:'200%'
            }).animate({
                left:'0'
            },500)
            mb_bang++

        //텍스트 바꾸기
        $('.mb_title').text(`${ITEM_LIST[10+(mb_bang)%mb_length].title}
    `)
    })

        //이미지css 설정
        setTimeout(()=>{
            for(let i=0; i<$('.mb_img').length; i++){
                $(`.mb_front${i}`).css({
                    transform:` rotateY(0deg) translate3d(-1px, 0px, ${($('.mb_side').eq(i).width())/2}px)`
                })
                $(`.mb_back${i}`).css({
                    transform:` rotateY(180deg) translate3d(0px, 0px, ${($('.mb_side').eq(i).width())/2}px)`
                })
                $(`.mb_side${i}`).css({
                    transform:` rotateY(-90deg) translateZ(${($('.mb_side').eq(i).width())/2}px)`
                })
            }
        },10)
        let mb_count= 0;
        $('.mb_imgbox').click(function(){
            if((mb_count)%3==0){
                $('.mb_img').eq(mb_bang%mb_length).css({transform:'rotateY(40deg)'})
            }
            else if((mb_count)%3==1){
                $('.mb_img').eq(mb_bang%mb_length).css({transform:'rotateY(180deg)'})
            }
            else{
                $('.mb_img').eq(mb_bang%mb_length).css({transform:'rotateY(0deg)'})
            }
            mb_count++
        })
        //사이즈 재배치
            $(window).resize(function(){
                if($(window).width()<320){
                    $('.mb_imgbox').css({
                        left:'35%'
                    })
                }
                else if($(window).width()<360){
                    $('.mb_imgbox').css({
                        left:'40%'
                    })
                }
                else{
                    $('.mb_imgbox').css({
                        left:'50%'
                    })
                }
            })

    //sec1
    //사진 돌아가기
    let sec1_count_top = 0;
    let sec1_count_mid = 0;
    let sec1_interval_top;
    let sec1_interval_mid;

    sec1_interval_mid=setInterval(()=>{
        $('.sec1_box1').css({
            backgroundPosition: `-${sec1_count_mid}px`
        })
        sec1_count_mid++
    },25)

    sec1_interval_top=setInterval(()=>{
        $('.sec1_box2').css({
            backgroundPosition: `${sec1_count_top}px`
        })
        sec1_count_top++
    },25)

    //sec3
    //책사진 배치
    let sec3_length=$('.sec3_item').length
    for(let i=0; i<sec3_length; i++){
        $('.sec3_item').eq(i).css({
            left:`${100*i}%`
        })
    }
    let sec3_bang=0;
    // 사진 돌리기버튼 오른쪽
    $('.sec3_btnbox_R').click(function(){
        //버튼 스탑
        sec3_btnstop()
        //나가기
        $('.sec3_item').eq((sec3_bang)%sec3_length).animate({
            left:`-100%`
        },1000)
        $('.sec3_item').eq((sec3_bang+1)%sec3_length).animate({
            left:'100%'
        },0).animate({
            left:'0%'
        },1000)
            sec3_bang++
    })

    // 사진 돌리기버튼 왼쪽
    $('.sec3_btnbox_L').click(function(){
        sec3_btnstop()

        $('.sec3_item').eq((sec3_bang-1)%sec3_length).animate({
            left:'-20%'
        },0)
        for(let i=0; i<6; i++){
            $('.sec3_item').eq((sec3_bang+i-1)%sec3_length).animate({
                left:`${(i*20)}%`
            },1000)
        }
            sec3_bang--
    })
    function sec3_btnstop(){
        $('.sec3_btnbox_R,.sec3_btnbox_L').css({
            pointerEvents: 'none'
        })
        setTimeout(()=>{
            $('.sec3_btnbox_R,.sec3_btnbox_L').css({
                pointerEvents: 'auto'
            })
        },1000)
    }

    //sec4
    //더보기 버튼
    $('.sec4_plus').click(function(){
        location.href='./my_library2(m).html'
    })
})