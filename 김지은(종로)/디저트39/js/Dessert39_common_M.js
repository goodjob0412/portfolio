$(document).ready(function(){

    /////////////////////////////////////
    ///////  탑버튼  ///////////

    $('#top_btn').click(function(event) {
        event.preventDefault();

        $('html').animate({
            scrollTop: 0
        }, 1000)
    })

    let f_o_top = $('footer').offset().top;
    // console.log(f_o_top)

    $(window).scroll(function(){ 
        let s_top = $(window).scrollTop();
        
    })
    
});