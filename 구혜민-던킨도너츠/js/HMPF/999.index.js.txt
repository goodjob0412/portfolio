$(document).ready(function(){

    // main banner
    $('.banner').eq(0).css({left: 0})
    
    let bn_length = $('.banner').length;
    
    for(let i=0; i<bn_length; i++) {
        $('.indi').append(`<div class="line"></div>`);
    }
    $('.line').eq(0).addClass('line_active');


    let bang = 0;
    let timer = 800;

    $(document).on('click', '#btn_R', function(){ 
        slide('-100%', (bang + 1) % bn_length, '100%') 
    });

    $(document).on('click', '#btn_L', function(){ 
        slide('100%', (bang - 1) % bn_length, '-100%')
    });

    let auto_interval;
    function auto_slide() {
        auto_interval=setInterval(function(){
            $('#btn_R').trigger('click')
        }, timer + 2000);
    }
    auto_slide()

    $('.main_banner').hover(function(){
        clearInterval(auto_interval)
    }, function(){
        auto_slide()
    })

    function slide(o_pos, c_bang, c_pos) {
        
        $('.btn_slide').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents:'auto'})
        }, timer)

        $('.line').removeClass('line_active')

        $('.line').eq(c_bang).addClass('line_active')


        $('.banner').eq(bang % bn_length).animate({
            left: o_pos
        }, timer , 'linear')

        $('.banner').eq(c_bang).css({
            left: c_pos
        }).animate({
            left: 0
        }, timer , 'linear')

        bang = c_bang;
    }

    $('.line').click(function(){

        console.log($('.line_active').index(), $(this).index())

        if($('.line_active').index() < $(this).index()) {
            slide('-100%', $(this).index(), '100%') 
        }
        else if($('.line_active').index() > $(this).index()) {
            slide('100%', $(this).index(), '-100%') 
        }
    })

})

// scroll banner 
    let main = document.getElementsByClassName('main_menu')[0];
    let main_posY = scrollY + main.getBoundingClientRect().top;
    let box1_img1 = document.getElementsByClassName('box1_img1')[0];
    let box1_img2 = document.getElementsByClassName('box1_img2')[0];
    
    window.addEventListener('scroll', ()=> {
        if(scrollY + 200 >= main_posY) {

            box1_img1.classList.add('box1_img1_active') 
            box1_img2.classList.add('box1_img2_active') 
            
        }
        else {
            box1_img1.classList.remove('box1_img1_active') 
            box1_img2.classList.remove('box1_img2_active') 
        }
    }) 


// circle banner
    let newevent = document.getElementsByClassName('new_event')[0];
    let new_posY = scrollY + newevent.getBoundingClientRect().top;
    let circle_L = document.getElementsByClassName('circle_L')[0];
    let circle_R = document.getElementsByClassName('circle_R')[0];

    window.addEventListener('scroll', ()=> {
        if(scrollY + 200 >= new_posY) {

            circle_L.classList.add('circle_L_active') 
            circle_R.classList.add('circle_R_active') 
            
        }
        else {
            circle_L.classList.remove('circle_L_active') 
            circle_R.classList.remove('circle_R_active') 
        }
    }) 