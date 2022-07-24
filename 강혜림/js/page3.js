$(document).ready(function(){
    let h_o_top = $('.header').offset().top;
    
    $(window).resize(function(){
        if($(window).width() <= 960) { 
            $('.header').removeClass('header_fixed');
            $('.logo_a').removeClass('logo_a_fixed');
        }
    })

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();  
////////////////헤더픽스////////////    
        if($(window).width() > 960) { 

            if(h_o_top > s_top || s_top == 0){
                $('.header').removeClass('header_fixed');
                $('.logo_a').removeClass('logo_a_fixed');
            }
            else if(h_o_top <= s_top){
                $('.header').addClass('header_fixed');
                $('.logo_a').addClass('logo_a_fixed');
            }

        } 
    });
// menu_box 아코디언버전 
    let chk = 0;     
    $(document).on('click','.menu1', function(event){
        event.preventDefault()
        event.stopPropagation()
        let tmp_list_h = $('.list1').outerHeight() * $('.list1').length 
        if(chk % 2 == 0){
            $('.list_active1').css({height:tmp_list_h});
        }
        else{
            $('.list_active1').css({height:"0"});
        }
        $('.list_active2').css({height:"0"});
        chk += 1; 
        chk2 =0; 
    });

    let chk2 = 0;
    $('.menu2').on('click', function(event){
        event.preventDefault()
        event.stopPropagation()
        let tmp_list_h2 = $('.list2').outerHeight() * $('.list2').length 
        if(chk2 % 2 == 0){
            $('.list_active2').css({height:tmp_list_h2});
        }
        else{
            $('.list_active2').css({height:"0"});
        }
        $('.list_active1').css({height:"0"}); 
        chk2 += 1;
        chk =0; 
    });
    $('.wrap').on('click', function(){         
        $('.list_active2').css({height:"0"});
        chk2 =0; 
        $('.list_active1').css({height:"0"}); 
        chk =0; 
    });

// 해당 indi클릭됨   
    let itm_count = $('.item').length;
    for(let i=0; i<itm_count; i++){
        $('.indi_p_box').append('<p class="indi_page">'+(i + 1)+'</p>')
    };
        let index = 1;
        $('.item1').css({display:"block"});
        $('.item2, .item3').css({display:"none"});
        $('.indi_page').eq(0).addClass('slide_indi_act');

        $(document).on('click', '.indi_page', function(event){
            // 2. indi_page중에 몇번째 indi_page이 눌렸는지 확인하기
            let clicked_indi = $(this).index();
        
            if(!$(this).hasClass('slide_indi_act')) {
                appear_item(clicked_indi, "block", index % 3 - 1, 'none'); 
                index = $(this).index() + 1;
            }
        });

        let timer = 1000;
        $('#btn_R').click(function(){ 
            appear_item(index % 3, "block", index % 3 - 1, 'none');
            index+=1;
        });
        $('#btn_L').click(function(){ 
            index-=1;
            appear_item(index % 3 - 1, "block", index % 3, 'none'); 
        });
        function appear_item (chk, i_block, no_chk, i_none) {           
            // 인디케이터 색변경
            $('.indi_page').eq(chk).addClass('slide_indi_act');
            $('.indi_page').eq(no_chk).removeClass('slide_indi_act');

            $('.item').eq(chk).css({
                display: i_block
            });

            $('.item').eq(no_chk).css({
                display: i_none
            });
        }    
});