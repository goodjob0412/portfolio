
//메인 영화 이미지

$(document).ready(function(){ 
    $('.banner').eq(0).css({opacity: 1, zIndex:9})
    
    let bn_length = $('.banner').length; 

    for(let i=0; i<bn_length; i++) { 
        $('.indi').append(`<div class="circle"></div>`) 
    }
    $('.circle').eq(0).addClass('circle_active');


    let bang = 0;
    let timer = 1000;
    let mb_intever;


    function auto(){
    mb_intever = setInterval(function(){
        slide((bang + 1) % bn_length) 
    },2000)
    }   

    auto()
    $(document).on('click', '#btn_R', function(){ 
        clearInterval(mb_intever)
        slide((bang + 1) % bn_length) 
        auto()
    });

    $(document).on('click', '#btn_L', function(){ 
        clearInterval(mb_intever)
        slide((bang - 1) % bn_length) 
        auto()
    });
    $('.main_banner').hover(function(){
        clearInterval(auto_interval)
    }, function(){
        auto_slide()
    })


    function slide(c_bang) {
        $('.btn').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.btn').css({pointerEvents:'auto'})
        }, timer)
        $('.circle').removeClass('circle_active')
        $('.circle').eq(c_bang).addClass('circle_active')

        // 나갈판
        $('.banner').eq(bang % bn_length).css({
            zIndex:1,
            transition: 'opacity 0s 1s',
            opacity: 0,
        })

        // 들어올판
        $('.banner').eq(c_bang).css({
            zIndex:99,
            transition: 'opacity 1s 0s',
            opacity: 1,
        })

        bang = c_bang;
    }


    $('.circle').click(function(){
        if($('.circle_active').index() != $(this).index()) {
            clearInterval(mb_intever)
            slide($(this).index()) 
            auto()
        }
    })








//all 버튼
    $('.all_btn').click(function(){
        location.href="./cgv_movie.html"
    })


//컨텐츠 무비
for (let i=0; i<3; i++) {
    $('.con_bot').append(`
    <div class="chart chart_${i})">
        <div class="poster">    
            <div class="sec sec1">
                <img src="../web/cgv/포스터/포스터${0+i*5}.jpg" alt="">
            </div>
            <div class="sec sec2">
                <img src="../web/cgv/포스터/포스터${1+i*5}.jpg" alt="">
            </div>
            <div class="sec sec3">
                <img src="../web/cgv/포스터/포스터${2+i*5}.jpg" alt="">
            </div>
            <div class="sec sec4">
                <img src="../web/cgv/포스터/포스터${3+i*5}.jpg" alt="">
            </div>
            <div class="sec sec5">
                <img src="../web/cgv/포스터/포스터${4+i*5}.jpg" alt="">
            </div>
        </div>
    </div>  
    `)}


    //초기값
    $('.chart').eq(0).css({
        left:0
    })
    //이미지슬라이드 
    let contets_bang = 0;
    let cont_length = $('.chart').length


    $('.ch_btn_R').click(function(){
        //버튼막기
        $('.ch_btn_L,.ch_btn_R').css({
            pointerEvents:'none'
        })
        //버튼재생
        setTimeout(function(){
            $('.ch_btn_L,.ch_btn_R').css({
                pointerEvents:'auto'
            })
        },1000)
        //나갈판
        $('.chart').eq(contets_bang%cont_length).animate({
            left:'-100%'
        },1000)
         //들어오는판
        $('.chart').eq((contets_bang+1)%cont_length).css({
            left:'100%'
        }).animate({
            left:'0'
        },1000)
        contets_bang++
    })


        $('.ch_btn_L').click(function(){
        //버튼막기
        $('.ch_btn_L,.ch_btn_R').css({
            pointerEvents:'none'
        })
        //버튼재생
        setTimeout(function(){
            $('.ch_btn_L,.ch_btn_R').css({
                pointerEvents:'auto'
            })
        },1000)
        //나갈판
        $('.chart').eq(contets_bang%cont_length).animate({
            left:'100%'
        },1000)
         //들어오는판
        $('.chart').eq((contets_bang-1)%cont_length).css({
            left:'-100%'
        }).animate({
            left:'0'
        },1000)
        contets_bang--
    })

//스페셜관
    //초기값    
    $('.spe_li').eq(0).css({
        border: '1px solid',
        fontWeight: '999'
    })
    //사진 초기값
    $('.spe_img').eq(0).css({
        display:'block'
    })


    //클릭값
    $('.spe_li').mouseenter(function(){
        //  테두리 초기화
        $('.spe_li').css({
            fontWeight: '400',
            border: 'none',
            borderBottom: '1px solid #acacac',
            borderRadius: '0px'
        })

        $(this).css({
            border: '1px solid',
            fontWeight: '999',
            borderRadius: '5px'
        })

        
        //사진 초기화
        $('.spe_img').css({
            display:'none'
        })
        //사진 바꾸는 거
        $('.spe_img').eq($(this).index()).css({
            display:'block'
        })


    })







})


