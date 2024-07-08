$(document).ready(function(){
    // $("body").smoothWheel()

    let one_page_H = $(window).innerHeight()

    $('.one_page').css({
        height : one_page_H
    })

    // $('.one_page').on('mousewheel DOMMouseScroll', function(){
    //     let dir = event.wheelDelta // 음수면 아래, 양수면 위
    //     let o_top;
    //     // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
    //     if(dir < 0) { 
    //         if($(this).next().length > 0) { 
    //             o_top = $(this).next().offset().top

    //             for(let i = 2 ; i < 19; i++){
    //                 $(`.one_page${i} .reser_box`).css({
    //                     bottom : '-100%',
    //                     display : 'flex'
    //                 })

    //                 $(`.one_page${i} .let_reserv_box`).css({
    //                     left : '-3.5%',
    //                     display : 'flex'
    //                 })
    //             }
    //         }
    //     }
    //     else if(dir > 0) { 
    //         if($(this).prev().length > 0) {
    //             o_top = $(this).prev().offset().top

    //             for(let i = 2 ; i < 19; i++){
    //                 $(`.one_page${i} .reser_box`).css({
    //                     bottom : '-100%',
    //                     display : 'flex'
    //                 })
    //                 $(`.one_page${i} .let_reserv_box`).css({
    //                     left : '-3.5%',
    //                     display : 'flex'
    //                 })
    //             }
    //         }
    //     }
        
    //     $('html, body').stop(true).animate({
    //         scrollTop: o_top
    //     }, 500)
    // });


    resize_1()
    resize_2()

    function resize_1(){
        if(window.innerWidth > 1024){
            $('.one_page').on('mousewheel DOMMouseScroll', function(){
                let dir = event.wheelDelta // 음수면 아래, 양수면 위
                let o_top;
                // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
                if(dir < 0) { 
                    if($(this).next().length > 0) { 
                        o_top = $(this).next().offset().top
        
                        for(let i = 2 ; i < 19; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
        
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-3.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                else if(dir > 0) { 
                    if($(this).prev().length > 0) {
                        o_top = $(this).prev().offset().top
        
                        for(let i = 2 ; i < 19; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-3.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                
                $('html, body').stop(true).animate({
                    scrollTop: o_top
                }, 500)
            });
        }

        else if(window.innerWidth <= 1024 && window.innerWidth > 768){
            $('.one_page').on('mousewheel DOMMouseScroll', function(){
                let dir = event.wheelDelta // 음수면 아래, 양수면 위
                let o_top;
                // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
                if(dir < 0) { 
                    if($(this).next().length > 0) { 
                        o_top = $(this).next().offset().top
        
                        for(let i = 1 ; i < 16; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
        
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-3.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                else if(dir > 0) { 
                    if($(this).prev().length > 0) {
                        o_top = $(this).prev().offset().top
        
                        for(let i = 1 ; i < 19; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-3.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                
                $('html, body').stop(true).animate({
                    scrollTop: o_top
                }, 500)
            });
        }

        else if(window.innerWidth <= 768 && window.innerWidth > 480){
            $('.one_page').on('mousewheel DOMMouseScroll', function(){
                let dir = event.wheelDelta // 음수면 아래, 양수면 위
                let o_top;
                // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
                if(dir < 0) { 
                    if($(this).next().length > 0) { 
                        o_top = $(this).next().offset().top
        
                        for(let i = 1 ; i < 16; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
        
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-3.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                else if(dir > 0) { 
                    if($(this).prev().length > 0) {
                        o_top = $(this).prev().offset().top
        
                        for(let i = 1 ; i < 19; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-3.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                
                $('html, body').stop(true).animate({
                    scrollTop: o_top
                }, 500)
            });
        }

        else if(window.innerWidth <= 480 && window.innerWidth > 280){
            $('.one_page').on('mousewheel DOMMouseScroll', function(){
                let dir = event.wheelDelta // 음수면 아래, 양수면 위
                let o_top;
                // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
                if(dir < 0) { 
                    if($(this).next().length > 0) { 
                        o_top = $(this).next().offset().top
        
                        for(let i = 1 ; i < 16; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
        
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-6.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                else if(dir > 0) { 
                    if($(this).prev().length > 0) {
                        o_top = $(this).prev().offset().top
        
                        for(let i = 1 ; i < 19; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-6.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                
                $('html, body').stop(true).animate({
                    scrollTop: o_top
                }, 500)
            });
        }

        else if(window.innerWidth <= 280 ){
            $('.one_page').on('mousewheel DOMMouseScroll', function(){
                let dir = event.wheelDelta // 음수면 아래, 양수면 위
                let o_top;
                // // 휠을 아래로 내렸음. 다음 섹션으로 부드럽게 이동
                if(dir < 0) { 
                    if($(this).next().length > 0) { 
                        o_top = $(this).next().offset().top
        
                        for(let i = 1 ; i < 16; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
        
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-8.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                else if(dir > 0) { 
                    if($(this).prev().length > 0) {
                        o_top = $(this).prev().offset().top
        
                        for(let i = 1 ; i < 19; i++){
                            $(`.one_page${i} .reser_box`).css({
                                bottom : '-100%',
                                display : 'flex'
                            })
                            $(`.one_page${i} .let_reserv_box`).css({
                                left : '-8.5%',
                                display : 'flex'
                            })
                        }
                    }
                }
                
                $('html, body').stop(true).animate({
                    scrollTop: o_top
                }, 500)
            });
        }
    }

    $(window).resize(function(){
        resize_1()
    })

        


    let one_page_length = $('.one_page').length

    let color_arr = ['transparent', '#4987A1', '#D35C3D', '#FF5860', '#0A437C','#5D5552', '#5C908F', '#72147D', '#31A4A9', '#D37932', '#4D6001', '#BCC8B3', '#FFAD45', '#877F6A', '#833F18', '#B33434', '#EF5E1D', '#F4BA5F', '#79C0BB']

    for(let i = 1; i < one_page_length+1; i++)

        $(`.one_page${i}`).css({
            backgroundColor : color_arr[i-1]
        })


    let reser_box_item = `<div class="reser_box">
                            <div class="reser_L">
                                <span>날짜 선택</span>
                                <div class="L_btm">
                                    <img src="./img/ananti/gangnam/icon-calendar-book__gray@3x.png" alt="">
                                    <span>체크인/아웃 날짜를 선택하세요.</span>
                                </div>
                            </div>
                            <div class="reser_R">검색</div>
                        </div>`

// let one_page_txt_box_item = `<div class="one_page_txt_box">
//                             <div class="one_page_txt_box_top">
//                                 "테라스와 거실.<br>프라이빗 침실. 이 모든 걸<br>동시에 품은 당신의 캐빈"
//                             </div>
//                             <div class="one_page_txt_box_btm">
//                                 <div class="btm_top">정원 테라스가 있는 객실</div>
//                                 <div class="btm_btm">캐빈T</div>
//                             </div>
//                             </div>`

let plus_beat_box_item = `<div class="plus_beat_box">
                            <div class="plus_beat">+</div>
                            </div>` 


let let_reserv_item =  `<div class="let_reserv_box">
                            <div class="let_reserv_img">
                                <img src="./img/ananti/gangnam/icon-check-circle__white.svg" alt="">
                            </div>
                            <div class="let_reserv_txt1">
                                예약하기
                            </div>
                        </div>`

let move_top_item = `<div class="move_top">
                    <img src="./img/ananti/gangnam/icon-top__gray.svg" alt="">
                    </div>`


    let one_page_img_arr = ['img/ananti/gangnam/1-pc.jpg', 
                            'img/ananti/gangnam/2-pc.jpg', 
                            'img/ananti/gangnam/3-pc.jpg',
                            'img/ananti/gangnam/4-pc.jpg',
                            'img/ananti/gangnam/5-pc.jpg',
                            'img/ananti/gangnam/6-pc.jpg',
                            'img/ananti/gangnam/7-pc.jpg',
                            'img/ananti/gangnam/8-pc.jpg',
                            'img/ananti/gangnam/9-pc.jpg',
                            'img/ananti/gangnam/10-pc.jpg',
                            'img/ananti/gangnam/11-pc.jpg',
                            'img/ananti/gangnam/12-pc.jpg',
                            'img/ananti/gangnam/13-pc.jpg',
                            'img/ananti/gangnam/14-pc.jpg',
                            'img/ananti/gangnam/15-pc.jpg',
                            'img/ananti/gangnam/16-pc.jpg',
                            'img/ananti/gangnam/17-pc.jpg',
                            'img/ananti/gangnam/18-pc.jpg']
    
    let one_page_img_arr_length = one_page_img_arr.length
    let one_page_img_box_item="";
    for(let i = 0; i < one_page_img_arr_length; i++){
        one_page_img_box_item = `<div class="one_page_img_box">
                                    <img src="./${one_page_img_arr[i]}" alt="">
                                </div>`


        $(`.one_page${i+2}`).append(one_page_img_box_item)
        $(`.one_page${i+2}`).append(move_top_item)                          
    }


    // for(let i = 2; i<=19; i++){
    //  $(`.one_page${i}`).append(one_page_img_box_item)
    // }


    $(`.one_page`).append(reser_box_item)

    for(let i = 2 ; i <= 19 ; i++){    
    
    // $(`.one_page${i}`).append(one_page_txt_box_item)

    $(`.one_page${i}`).append(plus_beat_box_item)

    $(`.one_page${i}`).append(let_reserv_item)

    }




    
    
    // move_top


    $('.move_top').click(function(){
        $('html').animate({scrollTop : 0},1000)
    })

    


    // plus_beat

    var scale = 1;
    setInterval(function(){
    scale = scale == 1 ? 1.1 : 1
    $('.plus_beat_box').css('transform', 'scale('+scale+')')
    }, 300)


    $('.let_reserv_box').click(function(){
        $('.reser_box').css({
            bottom : '10%',
            transition : 'all 0.5s'
        })

        $('.let_reserv_box').css({
            display : 'none'
        })

    })


    function resize_2(){
           
if(window.innerWidth > 1024){
    $('.let_reserv_box').click(function(){
        $('.reser_box').css({
            bottom : '10%',
            transition : 'all 0.5s'
        })

        $('.let_reserv_box').css({
            display : 'none'
        })

    })
}


else if(window.innerWidth <= 1024 && window.innerWidth > 768){
    $('.let_reserv_box').click(function(){
        $('.reser_box').css({
            display : 'flex',
            bottom : '15%',
            transition : 'all 0.5s'
        })

        $('.let_reserv_box').css({
            display : 'none'
        })

    })
}

else if(window.innerWidth < 768 && window.innerWidth > 480){
    $('.let_reserv_box').click(function(){
        $('.reser_box').css({
            display : 'flex',
            bottom : '23%',
            transition : 'all 0.5s'
        })

        $('.let_reserv_box').css({
            display : 'none'
        })

    })
}

else if(window.innerWidth < 480 && window.innerWidth > 280){
    $('.let_reserv_box').click(function(){
        $('.reser_box').css({
            display : 'flex',
            bottom : '22%',
            transition : 'all 0.5s'
        })

        $('.let_reserv_box').css({
            display : 'none'
        })

    })
}

else if(window.innerWidth <= 280){
    $('.let_reserv_box').click(function(){
        $('.reser_box').css({
            display : 'flex',
            bottom : '11%',
            transition : 'all 0.5s'
        })

        $('.let_reserv_box').css({
            display : 'none'
        })

    })
}
    }


    $(window).resize(function(){

        resize_2()

})










    })