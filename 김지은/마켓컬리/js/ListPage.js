$(document).ready(function(){
    // 정보 불러오기
    let cate_no = get_url_info('cate_no')
    let sec_no = get_url_info('sec_no')
    console.log(cate_no, sec_no)
    console.log(ITEM_LIST[cate_no][sec_no].length)
    
    for(let i=0; i < ITEM_LIST[cate_no][sec_no].length; i++) {

        let ttt = ITEM_LIST[cate_no][sec_no][i].price - (ITEM_LIST[cate_no][sec_no][i].price * (ITEM_LIST[cate_no][sec_no][i].sale / 100))

        console.log(ttt.toLocaleString('ko-KR'))
        console.log(
            // ITEM_LIST[cate_no][sec_no][i].item_no, 
            // ITEM_LIST[cate_no][sec_no][i].title, 
            // ITEM_LIST[cate_no][sec_no][i].price, 
            // ITEM_LIST[cate_no][sec_no][i].sale,

            (ITEM_LIST[cate_no][sec_no][i].price - (ITEM_LIST[cate_no][sec_no][i].price * (ITEM_LIST[cate_no][sec_no][i].sale / 100))),

            // ITEM_LIST[cate_no][sec_no][i].price * ((100-ITEM_LIST[cate_no][sec_no][i].sale) / 100)
        )

        let list = '<div class="L_item">';
        list += '<a href="DetailPage.html?cate_no='+cate_no+'&sec_no='+sec_no+'&item_no='+i+'">';
        list += '<div class="L_img_box">';
        list +=  '<img src="img/item/'+cate_title[cate_no]+'/'+ sec_title[sec_no]+'/'+ITEM_LIST[cate_no][sec_no][i].src+'" alt="">';
        list += '</div>';
        list +=  '<div class="L_item_box">'
        list += '<div class="B_title">[ '+ITEM_LIST[cate_no][sec_no][i].brand+' ]</div>';
        list += '<div class="I_title">'+ITEM_LIST[cate_no][sec_no][i].title +'</div>';

        // 세일가가 0일때는 표시안함
        if(ITEM_LIST[cate_no][sec_no][i].sale > 0) {
            list += '<span class="sale">'+ITEM_LIST[cate_no][sec_no][i].sale +'%</span>';
        }
        list += '<span class="price price1">'+ttt.toLocaleString('ko-KR') +'원</span>';
        list += '<span class="price price2">'+ITEM_LIST[cate_no][sec_no][i].price+'원</span>';
        list += '</div>';
        list += '</a>';
        list +=' </div>';
    
        $('.L_box').append( list )
    }
    

    // if (ITEM_LIST[cate_no][sec_no][i].sale == '0') {
    //     $('.sale').css({
    //         display: 'none'
    //     })
    // }


    });