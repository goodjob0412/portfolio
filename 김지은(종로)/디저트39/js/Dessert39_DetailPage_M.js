$(document).ready(function(){


    // 정보 불러오기
    let cate_no = get_url_info('cate_no')
    let sec_no = get_url_info('sec_no')
    let item_no = get_url_info('item_no')
    
    console.log("cate_no: " + cate_no)
    
    // 들어갈때 배경색 바꾸기
    if(cate_no == 0) {
        $('.main_sec').css({ background: '#f5f3f3'})
    }
    else if(cate_no == 1) {
        $('.main_sec').css({ background: 'aliceblue'})
    }
    // for(let i=0; i < ITEM_LIST[cate_no][sec_no].length; i++) {

        let list = '<div class="sec sec1">';
        list += '<div class="sec_box">';
        list += '<div class="menu_title_E">'+ITEM_LIST[cate_no][sec_no][item_no].E_title+'</div>';
        list += '<div class="menu_title_K">'+ITEM_LIST[cate_no][sec_no][item_no].K_title+'</div>';
        list += '<img src="img/dessert39/'+cate_title[cate_no]+'/'+sec_title[cate_no][sec_no]+'/'+ITEM_LIST[cate_no][sec_no][item_no].src+'" class="m_img" alt="">';
        list += '</div>';
        list += '<div class="menu_title_SK">'+ITEM_LIST[cate_no][sec_no][item_no].desc+'</div>';
        list += '</div>';
    
        $('.main_box').prepend( list );

        item_no = Number(item_no);
        
        let item_i = ITEM_LIST[cate_no][sec_no].length-1;
        
        $('#btn_item_prev').attr('href', 'DetailPage_M.html?cate_no='+cate_no+'&sec_no='+sec_no+'&item_no='+(item_no-1<1?item_i:item_no-1))
        $('#btn_item_next').attr('href', 'DetailPage_M.html?cate_no='+cate_no+'&sec_no='+sec_no+'&item_no='+(item_no+1>item_i?1:item_no+1))

        // $('#btn_item_prev').attr('href', '999999.디저트39_DetailPage.html?cate_no='+cate_no+'&sec_no='+sec_no+'&item_no='+(item_no-1<1?ITEM_LIST[cate_no][sec_no].length-1:item_no-1))
        // $('#btn_item_next').attr('href', '999999.디저트39_DetailPage.html?cate_no='+cate_no+'&sec_no='+sec_no+'&item_no='+(item_no+1>ITEM_LIST[cate_no][sec_no].length-1?1:item_no+1))

    // }



    // 버튼클릭시 옆으로 넘어가자

    $('.sec').eq(0).css({
            left: 0
        });
    
        let bang_a = 1;
        let timer_a = 1000;
        let count_a = ITEM_LIST[cate_no][sec_no].length;
    
        $('.BTN_R').click(function(){ 
            S_slide(bang_a % count_a, '100%', (bang_a - 1) % count_a, '-100%');
            bang_a+=1; 
        });
        $('.BTN_L').click(function(){
            bang_a-=1; 
            S_slide((bang_a - 1) % count_a, '-100%', bang_a % count_a, '100%') 
        });
    
        
        function S_slide(e_bang1, g_pos1, f_bang1, h_pos1) { 
    
            console.log("e_bang1:" +e_bang1)
            // console.log("inner_img-"+inner_img)
            
    
            // 들어오는판
            $('.sec').eq(e_bang1).css({
                left: g_pos1
            }).animate({
                left: 0
            }, timer_a);
    
            // 나가는판
            $('.sec').eq(f_bang1).animate({
                left: h_pos1
            }, timer_a);
    
        }
});