$(document).ready(function(){ 
    //초기화값
        for (let i=0; i<8; i++){
            $('.mo_item').append(`
            <div class="mov_sec">   
                <div class="mo_img">
                <img src="../web/cgv/포스터/포스터${i+1}.jpg" alt="">
                </div>
                <div class="mov_bot">
                    <div class="title">${ITEM[i+1].title}</div>
                    <div class="open">${ITEM[i+1].day}</div>
                </div>
                <a href="../web/cgv_re(m).html">
                <div class="reser">
                지금 예매
                </div></a>
                
        </div>

        `)

        }
    
        
    
        let count = 1;
        let num = 9;
        $(window).scroll(function(){
            let bot = $(window).scrollTop()+$(window).height()
            if (count < 3){
                if (bot > $('.footer').offset().top){
                    for (let i=0; i<8; i++){
                        $('.mo_item').append(`
                        <div class="mov_sec">   
                        <img src="../web/cgv/포스터/포스터${i+num}.jpg" alt="">
                            <div class="mov_bot">
                                <div class="title">${ITEM[i+num].title}</div>
                                <div class="open">${ITEM[i+num].day}</div>
                            </div>
                            <div class="reser">지금 예매</div>
                        </div>
                    `)
                    if (i==7) {
                        $('.mo_item').append(`
                        `)
                    count++
                    } 
                    }
                    num += 8
                }
            }
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