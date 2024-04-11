$(document).ready(function(){
    if($(window).width()<=480){
        location.href='./my_library(m).html'
    }

    //스타트 이미지
    $('.start_img').delay(2000).fadeOut(1000);

    // 네비
    let nav_top = $('.nav').offset().top;
    setTimeout(()=>{
        let mb_top =($('.main_banner').offset().top)-100;
        let sec3_top =$('.sec3').offset().top;
        let sec4_top =$('.sec4').offset().top;
        let sec5_top =$('.sec5').offset().top;
        let nav_arr = [mb_top,sec3_top,sec4_top,sec5_top]

            // 페이지 내부이동
            $('.nav_menu').click(function(){
                $('html, body').animate({
                    scrollTop: (nav_arr[`${$(this).index()}`])
                },1000)
            })
        
            $(window).scroll(function(){
                // 네비 따라다니기
                if($(window).scrollTop()>=nav_top){
                    $('.nav').css({
                        position:'fixed',
                        left:0,
                        top:0,
                    })
                }
                if($(window).scrollTop()<nav_top){
                        $('.nav').css({
                        position:'absolute',
                        left:0,
                        top:'200px',
                    })
                }
                //색변경
                if($(window).scrollTop()+100>=sec5_top){
                    $('.nav_menu').css({color:'#000'})
                    $('.nav_menu').eq(3).css({
                        color: 'red'
                    })
                }
                else if($(window).scrollTop()+100>=sec4_top){
                    $('.nav_menu').css({color:'#000'})
                    $('.nav_menu').eq(2).css({
                        color: 'red'
                    })
                }
                else if($(window).scrollTop()+100>=sec3_top){
                    $('.nav_menu').css({color:'#000'})
                    $('.nav_menu').eq(1).css({
                        color: 'red'
                    })
                }
                else if($(window).scrollTop()>=mb_top){
                    $('.nav_menu').css({color:'#000'})
                    $('.nav_menu').eq(0).css({
                        color: 'red'
                    })
                }
                else{
                    $('.nav_menu').css({color:'#000'})
                }
            })
    },10)

    //메인 배너
    let mb_bang = 0;
    
    //이미지 초기셋
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
    for(let i=0; i<$('.mb_img').length; i++){
        $('.mb_titlebox').append(`
            <div class="mb_title">${i+1}.${ITEM_LIST[i+10].title}</div>
        `)
    }
    $('.mb_title').eq(0).css({
        color:'#ffbf00',
        transform: 'scale(1.1)'
    })

    //title클릭시 사진변경및 글자 변경및 텍스트 변경
    $('.mb_title').click(function(){
        //버튼막기
        $('.mb_title').css({
            pointerEvents: 'none'
        })
        setTimeout(() => {
            $('.mb_title').css({
                pointerEvents: 'auto'
            })
        }, 500);

        //이미지 돌리기 
        if(mb_bang!=$(this).index()){
            console.log($(this).index())
            $('.mb_img').eq(mb_bang).animate({
                left:'-200%'
            },500)
            $('.mb_img').eq($(this).index()).css({
                left:'200%'
            }).animate({
                left:'0'
            },500)
            mb_bang=$(this).index()
        }
        //색바꾸기
        $('.mb_title').css({
            color:'#000',
            transform: 'scale(1.0)'
        })
        $('.mb_title').eq(mb_bang).css({
            color:'#ffbf00',
            transform: 'scale(1.1)'
        })
        //텍스트 바꾸기
        $('.mb_name > .mb_text2').text(`${(ITEM_LIST[mb_bang+10].writer)}`)
        $('.mb_price > .mb_text2').text(`${(ITEM_LIST[mb_bang+10].price).toLocaleString('ko')}원`)
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
        //이미지 호버
        $('.mb_imgbox').hover(function(){
            $('.mb_img').eq(mb_bang).css({transform:'rotateY(40deg)'})
        },function(){
            $('.mb_img').eq(mb_bang).css({transform:'rotateY(0deg)'})
            mb_count= 0;
        })

        $('.mb_pan').hover(function(){
            $('.mb_img').eq(mb_bang).css({transition:'all 0.5s linear'})
        },function(){
            $('.mb_img').eq(mb_bang).css({transition:'none'})
        })

        //이미지 클릭하면 도는거
        
        $('.mb_imgbox').click(function(){
            if((mb_count)%2==0){
                $('.mb_img').eq(mb_bang).css({transform:'rotateY(180deg)'})
            }
            else{
                $('.mb_img').eq(mb_bang).css({transform:'rotateY(0deg)'})
            }
            mb_count++
        })
    


    //sec2
    //사진 돌아가기
    let sec2_count_top = 0;
    let sec2_count_mid = 0;
    let sec2_interval_top;
    let sec2_interval_mid;

    sec2_interval_mid=setInterval(()=>{
        $('.sec2_line2').css({
            backgroundPosition: `-${sec2_count_mid}px`
        })
        sec2_count_mid++
    },12)

    sec2_interval_top=setInterval(()=>{
        $('.sec2_line1,.sec2_line3').css({
            backgroundPosition: `${sec2_count_top}px`
        })
        sec2_count_top++
    },15)


    //sec3
    //책사진 배치
    let sec3_length=$('.sec3_item').length
    for(let i=0; i<sec3_length; i++){
        $('.sec3_item').eq(i).css({
            left:`${20*i}%`
        })
    }
    let sec3_bang=0;
    // 사진 돌리기버튼 오른쪽
    $('.sec3_btnbox_R').click(function(){
        sec3_btnstop()

        for(let i=0; i<6; i++){
            $('.sec3_item').eq((sec3_bang+i)%sec3_length).animate({
                left:`${(i*20)-20}%`
            },1000)
        }
        $('.sec3_item').eq((sec3_bang+6)%sec3_length).animate({
            left:'100%'
        },0)
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
    //이미지 배치
    for(let i=0; i<10; i++){
        $('.sec4_bot').append(`
        <div class="sec4_item">
        <a href="./my_library3.html?item_no=${i+1}" class="sec4_imgbox">
            <img src="../독후감/책이미지/책${ITEM_LIST[i].side_src}" alt="읽은책이미지" class="sec4_side sec4_side${i}">
            <img src="../독후감/책이미지/책${ITEM_LIST[i].src}" alt="읽은책이미지" class="sec4_front sec4_front${i}">
            <img src="../독후감/책이미지/책${ITEM_LIST[i].cover_src}" alt="읽은책이미지"
            class="sec4_back sec4_back${i}">
        </a>
        <div class="sec4_name">${ITEM_LIST[i].title}</div>
        </div>
    `)
    }
    //이미지 css설정
    setTimeout(()=>{
        for(let i=0; i<10; i++){
            $(`.sec4_front${i}`).css({
                transform:` rotateY(0deg) translate3d(-1px, 0px, ${($('.sec4_side').eq(i).width())/2}px)`
            })
            $(`.sec4_back${i}`).css({
                transform:` rotateY(180deg) translate3d(0px, 0px, ${($('.sec4_side').eq(i).width())/2}px)`
            })
            $(`.sec4_side${i}`).css({
                transform:` rotateY(-90deg) translateZ(${($('.sec4_side').eq(i).width())/2}px)`
            })
        }
    },10)

    //두번째 페이지로 보내기
    $('.sec4_plus').click(function(){
        location.href='./my_library2.html'
    })



    //이미지 호버
    $('.sec4_item').hover(function(){
        $('.sec4_imgbox').eq($(this).index()).css({transform:'rotateY(40deg)'})
    },function(){
        $('.sec4_imgbox').eq($(this).index()).css({transform:'rotateY(0deg)'})
    })





    //sec5

    //배치
    for(let i=0; i<3; i++){
        $('.sec5_bot').append(`
        <div class="swiper${i+1} mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../독후감/포스터/포스터${1+(4*i)}.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../독후감/포스터/포스터${2+(4*i)}.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../독후감/포스터/포스터${3+(4*i)}.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../독후감/포스터/포스터${4+(4*i)}.jpg">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
        `)
    }

    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
})
