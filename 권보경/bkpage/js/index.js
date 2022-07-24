$(document).ready(function(){
    
    // document 사이즈 구하기 (초기화)
    let d_width=0;
    let d_height =0;

    function size(){
        let c_width = $(window).outerWidth() * $('.sec').length;

        $('.container').css({
            width: c_width,
            height:'100vh',
            poisiton:'fixed',
            top:0,
            left:0
        });

        $('.sec').css({
            width:c_width / $('.sec').length,
            height:'100vh',
            float:'left'
        });
        $('body').css({
            // width: c_width,
            // width: $(window).outerWidth() + 100,
            height:'100vh'
        });

        let w_width = $(window).width();
        let w_height = $(window).height();

        d_width = c_width - w_width; // 전체 가로값 - 현재 화면의 가로값
        d_height = $('body').height() - w_height;
    }

    size();
    
  
    let array = [];
    for(let i=0; i<$('.sec').length; i++) {
        array[i] = $('.sec').eq(i).offset().left
    }
    
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[3])

    let chk = false;
    setTimeout(function(){
        chk = true;
    }, 6000)
    
    //camel 움직임
    let count=0;
    let w_width = $(window).outerWidth();
    let camel_width = $('.camel').width();
    let distance =0;
    distance = (w_width - camel_width) / ($('.sec').length -1) ;
    let camel_inter;
    let sec_index = $(this).index()

    console.log(distance +': distance')
    console.log(sec_index +': sec index')

    

    function camel(dir){
        
        
        camel_inter = setInterval(function(){
            
            if(dir>0){
                
                $('.camel').css({
                    transform:'rotateY(0deg)',
                    left: count +"px"
                })
                count++
                
                if((1 * count) >= distance * dir){
                    clearInterval( camel_inter)
                }
            }

            else if(dir<0){

                // $('.camel').css({
                //     transform:'rotateY(180deg)',
                //     left: count +"px"
                // })
                // count--
                // if((1 * count) <= distance * dir){
                //     clearInterval( camel_inter)
                // }
            }
            
            
            
        },10)
    }
    camel(0)
    
    
    //마우스휠 시작 
    $('.sec').on('mousewheel DOMMouseScroll', function(){
       
        // console.log('mousewheel')
        console.log('thisis index' +  $(this).index())
        
        event.preventDefault();
        if(chk) {
            // 휠 일정시간동안 막기
            chk = false;
            setTimeout(function(){
                chk = true;
            }, 500)

            // 휠 방향 감지(아래: -120, 위: 120)
            let w_delta = event.wheelDelta / 120;
            
            // 휠 아래로
            if(w_delta < 0 && $(this).next().length > 0) {
                $('.container').animate({
                    left: -array[$(this).index()+1]
                }, 500)

                clearInterval( camel_inter)
                camel($(this).index()+1)
            }
            // 휠 위로
            else if(w_delta > 0 && $(this).prev().length > 0) {
                $('.container').animate({
                    left: -array[$(this).index()-1]
                }, 500)

                clearInterval( camel_inter)
                $('.camel').css({
                    transform:'rotateY(180deg)',
                })
                // camel(-1 * ($(this).index()-1))
            }

            setTimeout(function(){

                // for(let i=0; i<6; i++){
                //     if($('.sec').eq(i).offset().left == 0) {

                //     }
                // }

               
                if(-1< $('.sec').eq(1).offset().left && $('.sec').eq(1).offset().left <= 1) {
                    typing();
                    $('.dare').addClass('color_red')
                }
                else  {
                    $('.one_txt').css({
                        display: 'none'
                    });
                    clearInterval(inter_1)
                    $('.dare').removeClass('color_red')
                    $('.endeavor').removeClass('color_red')
                }

                if(-1< $('.sec').eq(2).offset().left && $('.sec').eq(2).offset().left <= 1) {
                    skills()
                    $('.passion').addClass('color_red')
                }
                else {
                    clearInterval(inter)
                    clearInterval(inter2)
                    clearInterval(inter3)
                    clearInterval(inter4)
                    clearInterval(inter5)
                    clearInterval(inter6)
                    clearInterval(inter7)
                    clearInterval(inter8)
                    $('.passion').removeClass('color_red')
                    $('.endeavor').removeClass('color_red')
                }

                if(-1< $('.sec').eq(3).offset().left && $('.sec').eq(3).offset().left <= 1) {
                    
                    $('.endeavor').addClass('color_red')
                }
                else{
                   
                }

                if(-1< $('.sec').eq(4).offset().left && $('.sec').eq(4).offset().left <= 1) {
                    
                    $('.endeavor').addClass('color_red')
                }
                else{
                   
                }

                console.log($('.sec').eq(0).offset().left)
                console.log($('.sec').eq(1).offset().left)
                console.log($('.sec').eq(2).offset().left)
                console.log($('.sec').eq(3).offset().left)
                console.log($('.sec').eq(4).offset().left)
                console.log($('.sec').eq(5).offset().left)
            }, 500)
        }
    });

   


 
//sec1
    function item_show(el) {
        for(let i=0; i<el.length; i++) {
            (function(tmp_i){
                setTimeout(function(){
                    el.eq(tmp_i).css({
                        opacity:1,
                    })
                }, 500 * tmp_i)
            })(i)}
    }
    item_show($('.cactus'))
    
    function sec0_ani() {
        setTimeout(function(){
            $('.moon').css({
                width:'150px',
                top:'2%',
                left:'2%',
                transform: 'translate(0,0) scale(1)',
                transition: 'all 2s'
            })

            item_show($('.txt_box div'))

            $('.txt_box').css({
                opacity:1
            })
        
        },500)

        setTimeout(function(){

            $('.txt_box').css({
                left: '93%',
                top: '13%',
                width: '100px',
            })

            $('.txt_box div').css({
                fontSize:'20px'
            })

        },1500)

        setTimeout(function(){
            const txt_box = $('.intro_txt_box');
            const txt_box1 = $('.intro_txt_box1');
            const txt_box2 = $('.intro_txt_box2');
            const txt_box3 = $('.intro_txt_box3');
            const tb_span = $('.tb_span');
            for(let i=0; i<tb_span.length; i++) {
                (function(tmp_i) {
                    setTimeout(function(){    
                        tb_span.eq(tmp_i).addClass('txt_active')
                    }, 80*tmp_i)
                })(i)
            }
            
        },2500)
    }
    sec0_ani()
        

// sec2 
//한칸씩 찍기

    $('.one_txt').css({
        display: 'none'
    });

    let timer = 100;
    let inter_1;
    function typing() {
        let index = 0;
            inter_1 = setInterval(function(){
            $('.one_txt').eq(index++ % $('.one_txt').length).css({
                display: 'block'
            });

            if(index >= $('.one_txt').length) {
                
                    clearInterval(inter_1);
                //     setTimeout(function(){
                // // .txt의 마지막 방 부터 하나씩 display: none 걸기
                //     // let inter_2 = setInterval(function(){
                        
                //     //     index--;

                //     //     $('.one_txt').eq(index % $('.one_txt').length).css({
                //     //         display: 'none'
                //     //     });

                //     //     if(index < 0) {
                //     //         clearInterval(inter_2);
                //     //         typing();
                //     //     }

                //     // }, timer)
                // },timer*10)

            } 

        }, timer);
    }

    // typing();

//sec3 - skills 섹션 
    let pi = (Math.PI / 180); // 각도 조절
    let score_box = document.getElementsByClassName('score_box')[0]; // 
    let con_width = score_box.clientWidth;
    let con_height = score_box.clientHeight;

    function tmpttt(ctx1,count1,color) {
        ctx1.beginPath();
        ctx1.arc(con_width/2, con_height/2, con_width/2 -30, pi*-90, pi*count1, false);

        ctx1.lineWidth=20;
        ctx1.lineCap="round";
        // ctx1.strokeStyle="rgba(171,128,200)"
        // ctx1.strokeStyle="rgba(253,229,123)"
        // ctx1.strokeStyle="rgba(167, 199,250)"
        ctx1.strokeStyle=color

        ctx1.stroke();

    }
    let inter;
    let inter2;
    let inter3;
    let inter4;
    let inter5;
    let inter6;
    let inter7;
    let inter8;
   
    
        
    function skills(){

        let count1 = -90; //시작 위치
        let canvas1 = document.getElementById('canvas1'); 
        let ctx1 = canvas1.getContext("2d");
        canvas1.setAttribute('width', con_width)
        canvas1.setAttribute('height', con_height) 
        
        inter = setInterval(function(){
            tmpttt(ctx1,count1, "rgba(155,134,190)")

            count1++;
            let score1 = $('#canvas1 + .score1').text() / 100 * 360 - 90;
            if(count1 > score1-10) {
                clearInterval(inter)
            }
        }, 5)

        let count2 = -90; //시작 위치
        let canvas2 = document.getElementById('canvas2'); 
        let ctx2 = canvas2.getContext("2d");
        canvas2.setAttribute('width', con_width)
        canvas2.setAttribute('height', con_height) 
        inter2 = setInterval(function(){
            tmpttt(ctx2,count2, "rgba(110,90,151)")

            count2++;
            let score2 = $('#canvas2 + .score2').text() / 100 * 360 - 90;
    
            if(count2> score2 - 10 ) {
                clearInterval(inter2)
            }
        }, 5)

        let count3 = -90; //시작 위치
        let canvas3 = document.getElementById('canvas3'); 
        let ctx3 = canvas3.getContext("2d");
        canvas3.setAttribute('width', con_width)
        canvas3.setAttribute('height', con_height) 
        inter3 = setInterval(function(){
            tmpttt(ctx3,count3,"rgba(155,134,190)")

            count3++;
            let score3 = $('#canvas3 + .score3').text() / 100 * 360 - 90;
    
            if(count3> score3 - 10 ) {
                clearInterval(inter3)
            }
        }, 5)

        let count4 = -90; //시작 위치
        let canvas4 = document.getElementById('canvas4'); 
        let ctx4 = canvas4.getContext("2d");
        canvas4.setAttribute('width', con_width)
        canvas4.setAttribute('height', con_height) 
        inter4 = setInterval(function(){
            tmpttt(ctx4,count4, "rgba(110,90,151)")

            count4++;
            let score4 = $('#canvas4 + .score4').text() / 100 * 360 - 90;
    
            if(count4> score4 - 10 ) {
                clearInterval(inter4)
            }
        }, 5)

        let count5 = -90; //시작 위치
        let canvas5 = document.getElementById('canvas5'); 
        let ctx5 = canvas5.getContext("2d");
        canvas5.setAttribute('width', con_width)
        canvas5.setAttribute('height', con_height) 
        inter5 = setInterval(function(){
            tmpttt(ctx5,count5,"rgba(155,134,190)")

            count5++;
            let score5 = $('#canvas5 + .score5').text() / 100 * 360 - 90;
    
            if(count5> score5 - 10 ) {
                clearInterval(inter5)
            }
        }, 5)

        let count6 = -90; //시작 위치
        let canvas6 = document.getElementById('canvas6'); 
        let ctx6 = canvas6.getContext("2d");
        canvas6.setAttribute('width', con_width)
        canvas6.setAttribute('height', con_height) 
        inter6 = setInterval(function(){
            tmpttt(ctx6,count6, "rgba(110,90,151)")

            count6++;
            let score6 = $('#canvas6 + .score6').text() / 100 * 360 - 90;
    
            if(count6> score6 - 10 ) {
                clearInterval(inter6)
            }
        }, 5)

        let count7 = -90; //시작 위치
        let canvas7 = document.getElementById('canvas7'); 
        let ctx7 = canvas7.getContext("2d");
        canvas7.setAttribute('width', con_width)
        canvas7.setAttribute('height', con_height) 
        inter7 = setInterval(function(){
            tmpttt(ctx7,count7, "rgba(155,134,190)")

            count7++;
            let score7 = $('#canvas7 + .score7').text() / 100 * 360 - 90;
    
            if(count7> score7 - 10 ) {
                clearInterval(inter7)
            }
        }, 5)

        let count8 = -90; //시작 위치
        let canvas8 = document.getElementById('canvas8'); 
        let ctx8 = canvas8.getContext("2d");
        canvas8.setAttribute('width', con_width)
        canvas8.setAttribute('height', con_height) 
        inter8 = setInterval(function(){
            tmpttt(ctx8,count8, "rgba(110,90,151)")

            count8++;
            let score8 = $('#canvas8 + .score8').text() / 100 * 360 - 90;
    
            if(count8> score8 - 10 ) {
                clearInterval(inter8)
            }
        }, 5)
    }

    //브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
    $(window).resize(function(){
        for(let i=0; i<$('.sec').length; i++) {
            array[i] = $('.sec').eq(i).offset().left
        }

        size();

        //camel 거리
        let w_width = $(window).outerWidth();
        let camel_width = $('.camel').width();
        let distance =0;
        distance = w_width - camel_width;
    })



        
    

    
   

  
})
