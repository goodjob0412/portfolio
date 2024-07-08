    let h_menu_li = document.getElementsByClassName('h_menu_li')
    // let h_menu_li_L = h_menu_li.getBoundingClientRect().left;
    let h_menu_li_L = new Array(h_menu_li.length)
    let pan = document.getElementsByClassName('pan')
    let pan_li = document.getElementsByClassName('pan_li')
    let menu_pan = document.getElementsByClassName('menu_pan')[0]
    let after = document.getElementsByClassName('after')

    ///////////헤더///////////////////////
    
    //li의 왼쪽 잡아서 배열
    $(window).resize(function(){
        resize_li()
    })
    function resize_li() {
        for(let i=0; i < h_menu_li.length; i++) {
        let left_p = h_menu_li[i].getBoundingClientRect().left;
        pan[i].style.left = `${left_p}px`
    }
    }
    resize_li()

    // 메뉴 호버 시 기능
    for(let i=0; i<h_menu_li.length; i++) {
        h_menu_li[i].addEventListener('mouseenter', function(){
            h_menu_li[i].style.color = "#ea0029"
            menu_pan.style.height = "350px"
        })
        h_menu_li[i].addEventListener('mouseleave', function(){
            h_menu_li[i].style.color = "inherit"
        })

        pan[i].addEventListener('mouseenter', function(){
            h_menu_li[i].style.color = "#ea0029"
        })
        pan[i].addEventListener('mouseleave', function(){
            h_menu_li[i].style.color = "inherit"
        })
    }
    menu_pan.addEventListener('mouseleave', function(){
        menu_pan.style.height = "0"
    })
    
    for (let i = 0; i < pan_li.length; i++) {
        pan_li[i].addEventListener('mouseenter', function () {
            this.style.color = "#ea0029";
        });
        pan_li[i].addEventListener('mouseleave', function () {
            this.style.color = "inherit";
        });
    }
    
    /////////탑버튼//////////
    
    $('.top_btn').click(function(){
        event.preventDefault()
        
        $('html, body').animate({
                scrollTop: 0
            }, 1000)
    })
    

    ///////////햄버거 버튼/////////////////

    let chk = false;
    $('.btn_ham').click(function(){ 

        // 판 들어왔다 나갔다 하게 하기
        if(chk) {
            ham('100%', 'rotate45', 'mid_setting', 'rotate_45', 'mid_setting') 
            $('.logo svg').removeClass('filter')
            $('.line').css({background: '#000'})
        }
        else {
            ham(0, 'mid_setting', 'rotate45', 'mid_setting', 'rotate_45')
            $('.logo svg').addClass('filter')
            $('.line').css({background: '#fff'})
        }
        $('.filter_2').toggleClass('trans_in')
        chk = !chk;
    })

    function ham(leftt, a, b, c, d) {
        $('.ham_pan').animate({
            left: leftt
        }, 0)

        // 버튼 X로 하기
        $('.line_top').toggleClass(a)
        setTimeout(function(){
            $('.line_top').toggleClass(b)
        }, 300)
        
        $('.line_mid').toggleClass('opa_0')

        $('.line_bot').toggleClass(c)
        setTimeout(function(){
            $('.line_bot').toggleClass(d)
        }, 300)

    }