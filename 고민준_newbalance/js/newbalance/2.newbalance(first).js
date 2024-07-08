$(document).ready(function(){
    let cateNo = get_info_from_url("cateNo")  

   

        $('.sec').attr('id', `${EL_ARR[cateNo]}`)
        $('.sec_title').text(`${PAGENAME_ARR[cateNo]}`)

        load_item(cateNo , 8)

   
    let f_o_top = $('.footer').offset().top
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();
        f_o_top = $('.footer').offset().top

        if(s_bot - 200 >= f_o_top) {
            console.log("")


            load_item(cateNo, 8)
        }

    });

})