$(document).ready(function(){ 
    //초기화값
        for (let i=0; i<24; i++){
            $('.mo_box').append(`
            <div class="mov_sec">   
            <img src="../web/cgv/포스터/포스터${i+1}.jpg" alt="">
            <div class="mov_bot">
                <div class="title">${ITEM[i+1].title}</div>
            </div>
        </div>
        `)
        }
     
    
        let count = 1;
        let num = 3;
        $(window).scroll(function(){
            let bot = $(window).scrollTop()+$(window).height()
            if (count < 3){
                if (bot > $('.footer').offset().top){
                    for (let i=0; i<6; i++){
                        $('.mo_box').append(`
                        <div class="mov_sec">   
                        <img src="../web/cgv/포스터/포스터${i+num}.jpg" alt="">
                        <div class="mov_bot">
                            <div class="title">${ITEM[i+num].title}</div>
                        </div>
                        <div class="choice">영화선택</div>
                    </div>
                    `)
                    if (i==3) {
                        $('.mo_box').append(``)
                    count++
                    } 
                    }
                    num += 4
                }
            }
        })
        
        // $('.mo_x').click(function(){
        $(document).on('click','.mo_x',function(){
            console.log(11)

            $('.fir_box').animate({
                bottom: '-100%',
                tranasition: 'all 0.5s'
            })
        })
    
    
        //////////햄버거///////////////
    
        $('.btn_ham').click(function(){ 
            $('.ham_pan').css({
                left: 0
            })
        })
        $('.img_x').click(function(){ 
            $('.ham_pan').css({
                left: '-100%'
            })
        })
    
        function ham(leftt, a, b, c, d) {
            $('.ham_pan').animate({
                left: leftt
            }, 500)
    
            // 버튼 X로 하기
            $('.line_top').toggleClass(a)
            setTimeout(function(){
                $('.line_top').toggleClass(b)
            }, 500)
            
            $('.line_mid').toggleClass('opa_0')
    
            $('.line_bot').toggleClass(c)
            setTimeout(function(){
                $('.line_bot').toggleClass(d)
            }, 500)
    
        }
    
    
    
    
    
    
    })