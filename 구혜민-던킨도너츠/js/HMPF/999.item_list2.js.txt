$(document).ready(function(){
    let cateNo = get_info_from_url("cateNo")  

        $('.sec').attr('id', `${EL_ARR[cateNo]}`)
        $('.sec_title').text(`${PAGENAME_ARR[cateNo]}`)

        load_item(cateNo , 10)

})