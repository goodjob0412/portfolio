$(document).ready(function(){
// 정보 불러오기
let cate_no = get_url_info('cate_no')
let sec_no = get_url_info('sec_no')

console.log(ITEM_LIST[cate_no][sec_no])


for(let i=0; i < ITEM_LIST[cate_no][sec_no].length; i++) {
    let list = '<div class="c_box">';
    list += '   <a href="./DetailPage_M.html?cate_no='+cate_no+'&sec_no='+sec_no+'&item_no='+i+'">';
    list += '    <div class="c_title_k">'+ITEM_LIST[cate_no][sec_no][i].K_title+' </div>';
    list += '    <div class="c_title">'+ITEM_LIST[cate_no][sec_no][i].E_title+'</div>';
    list += '<div>'
    list += '    <img src="img/dessert39/'+cate_title[cate_no]+'/'+sec_title[cate_no][sec_no]+'/'+ITEM_LIST[cate_no][sec_no][i].src+'" alt="">';
    list += '    <div class="c_price">'+ITEM_LIST[cate_no][sec_no][i].price+'원</div>';
    list += '</div>';
    list += ' </a>';
    list += '</div>';


    $('.item_container').append( list )
}


 
    // /////메뉴 클릭시 밑에 바뀌기////////
    
    // /////메뉴 클릭시 밑에 바뀌기////////
    // $('.m_c_box').eq(0).addclass('m_c_box_active');
    console.log(sec_no);
    $('.m_c_box').eq(sec_no).css({
        backgroundColor: '#e8a972',
        color: 'white',
        fill: 'white',
    })


    
});