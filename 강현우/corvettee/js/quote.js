$(document).ready(function(){
    // total
    let special_price = 5000;
    let color_price = 995;
    let wheel_price = 1495;
    let interior_price = 1995;

    let speical_price_first_tmp = Number($('.total_price_hidden').val())
    let speical_plus_tmp = 0;
    
    let color_price_first_tmp = Number($('.total_price_hidden').val());
    let color_plus_tmp = 0;

    let wheel_plus_tmp = 0;

    let interior_plus_tmp = 0;

    let common_second_val = $('.total_price_hidden').val().substring(1, 2);
    let common_third_val = $('.total_price_hidden').val().substring(2, 3);
    let common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
    let common_fifth_val = $('.total_price_hidden').val().substring(4, 5);



    // close
    $('.quote_close_btn').click(function(){
        $('.close_popup').css({display: 'block'});
        $('body').css({overflow: 'hidden'});
        $('.wrap').css({filter: 'blur(2px)'});
    })
    $('.close_popup_inner_close_btn, .close_popup_inner_bot_btn1').click(function(){
        $('.close_popup').css({display: 'none'});
        $('body').css({overflow: 'auto'});
        $('.wrap').css({filter: 'none'});
    })
    // page
    let special_in = true;
    let color_in = false;
    let wheel_in = false;
    let interior_in = false;
    let complet_in = false;

    // speical
    let special_ed1 = false;
    let special_ed2 = false;
    $('.header_menu_li1').addClass('header_menu_li_act');
    $('.header_menu_li > span').eq(0).css({borderBottom: '2px solid #ad7b61'});
    // $('.header_menu_li').hover(function(){
    //     $(this).css({color: '#fff'})
    // }, function(){
    //     $(this).css({color: '#808080'})
    // });

    // standard set
    $('.special_img1').css({width: '100%'});
    $('.special_img1').addClass('special_tmptmp');
    $('.special_border').eq(1).children().css({left: 0});

    let special_tmp_index = 0;
    $('.speical_txt_img_box').click(function(){
        if (($(this).parent().parent().index() == 2) && $('.special_img1').hasClass('special_tmptmp') == false) {
            special_ed1 = false;
            special_ed2 = false;
            $('.special_img_box').css({zIndex: 9});

            special_tmp_index = $('.special_tmptmp').index();
            $('.special_img_box').removeClass('special_tmptmp');
            $('.special_img1').addClass('special_tmptmp');

            $('.special_img_box').eq(special_tmp_index).css({zIndex: 98});
            $('.special_img_box').eq(0).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.speical_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.special_border').children().css({left: '-100%'});
            $('.special_border').eq(1).children().css({left: 0});

            // total
            speical_plus_tmp = speical_price_first_tmp + 0;
            $('.total_price_hidden').attr('value', speical_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                    $('.total_price2').eq(0).text(i - 1);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                    $('.total_price2').eq(1).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                    $('.total_price2').eq(2).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                    $('.total_price2').eq(3).text(i - 1);
                }, 50 * i);
            }
        }
        if (($(this).parent().parent().index() == 4) && $('.special_img2').hasClass('special_tmptmp') == false) {
            special_ed1 = true;
            special_ed2 = false;
            $('.special_img_box').css({zIndex: 9});

            special_tmp_index = $('.special_tmptmp').index();
            $('.special_img_box').removeClass('special_tmptmp');
            $('.special_img2').addClass('special_tmptmp');

            $('.special_img_box').eq(special_tmp_index).css({zIndex: 98});
            $('.special_img_box').eq(1).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.speical_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.special_border').children().css({left: '-100%'});
            $('.special_border').eq(2).children().css({left: 0});

            // total
            speical_plus_tmp = speical_price_first_tmp + special_price;
            $('.total_price_hidden').attr('value', speical_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                    $('.total_price2').eq(0).text(i - 1);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                    $('.total_price2').eq(1).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                    $('.total_price2').eq(2).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                    $('.total_price2').eq(3).text(i - 1);
                }, 50 * i);
            }
        }
        if (($(this).parent().parent().index() == 6 && $('.special_img3').hasClass('special_tmptmp') == false)) {
            special_ed1 = false;
            special_ed2 = true;
            $('.special_img_box').css({zIndex: 9});

            special_tmp_index = $('.special_tmptmp').index();
            $('.special_img_box').removeClass('special_tmptmp');
            $('.special_img3').addClass('special_tmptmp');

            $('.special_img_box').eq(special_tmp_index).css({zIndex: 98});
            $('.special_img_box').eq(2).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.speical_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.special_border').children().css({left: '-100%'});
            $('.special_border').eq(3).children().css({left: 0});

            // total
            speical_plus_tmp = speical_price_first_tmp + special_price;
            $('.total_price_hidden').attr('value', speical_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                    $('.total_price2').eq(0).text(i - 1);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                    $('.total_price2').eq(1).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                    $('.total_price2').eq(2).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                    $('.total_price2').eq(3).text(i - 1);
                }, 50 * i);
            }
        }
    })

    // color
    $('.color_img1').css({width: '100%'});
    $('.color_img1').addClass('color_tmptmp');

    let color_tmp_index = 0;
    let color_txt_index = 2;
    $('.color_txt_img_box').click(function(){

        color_txt_index = $(this).parent().parent().index();

        if ($(this).parent().parent().index() >= 12 && $(this).parent().parent().index() <= 22) {
            // total
            color_plus_tmp = color_price_first_tmp + color_price;
            $('.total_price_hidden').attr('value', color_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                    $('.total_price2').eq(0).text(i - 1);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                    $('.total_price2').eq(1).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                    $('.total_price2').eq(2).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                    $('.total_price2').eq(3).text(i - 1);
                }, 50 * i);
            }
        }
        else {
           // total
           color_plus_tmp = color_price_first_tmp + 0;
           $('.total_price_hidden').attr('value', color_plus_tmp);
           common_second_val = $('.total_price_hidden').val().substring(1, 2);
           common_third_val = $('.total_price_hidden').val().substring(2, 3);
           common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
           common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

           for (let i = 0; i <= common_second_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(0).text(i);
                   $('.total_price2').eq(0).text(i - 1);
               }, 50 * i);
           }

           for (let i = 0; i <= common_third_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(1).text(i);
                   $('.total_price2').eq(1).text(i - 1);
               }, 50 * i);
           }
           for (let i = 0; i <= common_fourth_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(2).text(i);
                   $('.total_price2').eq(2).text(i - 1);
               }, 50 * i);
           }
           for (let i = 0; i <= common_fifth_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(3).text(i);
                   $('.total_price2').eq(3).text(i - 1);
               }, 50 * i);
           }
        }
        if (($(this).parent().parent().index() == 2) && $('.color_img1').hasClass('color_tmptmp') == false) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img1').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(0).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(1).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 4) && $('.color_img2').hasClass('color_tmptmp') == false) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img2').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(1).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(2).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 6 && $('.color_img3').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img3').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(2).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(3).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 8 && $('.color_img4').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img4').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(3).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(4).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 10 && $('.color_img5').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img5').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(4).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(5).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 12 && $('.color_img6').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img6').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(5).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(6).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 14 && $('.color_img7').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img7').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(6).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(7).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 16 && $('.color_img8').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img8').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(7).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(8).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 18 && $('.color_img9').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img9').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(8).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(9).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 20 && $('.color_img10').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img10').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(9).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(10).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 22 && $('.color_img11').hasClass('color_tmptmp') == false)) {
            $('.color_img_box').css({zIndex: 9});

            color_tmp_index = $('.color_tmptmp').index();
            $('.color_img_box').removeClass('color_tmptmp');
            $('.color_img11').addClass('color_tmptmp');

            $('.color_img_box').eq(color_tmp_index).css({zIndex: 98});
            $('.color_img_box').eq(10).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.color_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.color_border').children().css({left: '-100%'});
            $('.color_border').eq(11).children().css({left: 0});
        }
    })

    // wheel

    let wheel_tmp_index = 0;
    let wheel_click_index = 2;
    let wheel_txt_index = 2;
    $('.wheel_txt_img_box').click(function(){
        wheel_txt_index = $(this).parent().parent().index();

        if ($(this).parent().parent().index() >= 4 && $(this).parent().parent().index() <= 8) {
            // total
            wheel_plus_tmp = color_plus_tmp + wheel_price;
            $('.total_price_hidden').attr('value', wheel_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                    $('.total_price2').eq(0).text(i - 1);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                    $('.total_price2').eq(1).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                    $('.total_price2').eq(2).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                    $('.total_price2').eq(3).text(i - 1);
                }, 50 * i);
            }
        }
        else {
           // total
           wheel_plus_tmp = color_plus_tmp + 0;
           $('.total_price_hidden').attr('value', wheel_plus_tmp);
           common_second_val = $('.total_price_hidden').val().substring(1, 2);
           common_third_val = $('.total_price_hidden').val().substring(2, 3);
           common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
           common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

           for (let i = 0; i <= common_second_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(0).text(i);
                   $('.total_price2').eq(0).text(i - 1);
               }, 50 * i);
           }

           for (let i = 0; i <= common_third_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(1).text(i);
                   $('.total_price2').eq(1).text(i - 1);
               }, 50 * i);
           }
           for (let i = 0; i <= common_fourth_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(2).text(i);
                   $('.total_price2').eq(2).text(i - 1);
               }, 50 * i);
           }
           for (let i = 0; i <= common_fifth_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(3).text(i);
                   $('.total_price2').eq(3).text(i - 1);
               }, 50 * i);
           }
        }

        if (($(this).parent().parent().index() == 2) && $('.wheel_img_box1').hasClass('wheel_tmptmp') == false) {
            $('.wheel_img_box').css({zIndex: 9});

            wheel_tmp_index = $('.wheel_tmptmp').index();
            $('.wheel_img_box').removeClass('wheel_tmptmp');
            $(`.wheel2_img${wheel_tmp_index + 1}`).addClass('wheel_tmptmp');

            $(`.wheel${wheel_click_index}_img${wheel_tmp_index + 1}`).css({zIndex: 98});
            $(`.wheel2_img${wheel_tmp_index + 1}`).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.wheel_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.wheel_border').children().css({left: '-100%'});
            $('.wheel_border').eq(1).children().css({left: 0});

            wheel_click_index = $(this).parent().parent().index();
        }

        if (($(this).parent().parent().index() == 4) && $('.wheel_img_box2').hasClass('wheel_tmptmp') == false) {
            $('.wheel_img_box').css({zIndex: 9});

            wheel_tmp_index = $('.wheel_tmptmp').index();
            $('.wheel_img_box').removeClass('wheel_tmptmp');
            $(`.wheel4_img${wheel_tmp_index + 1}`).addClass('wheel_tmptmp');
                
            $(`.wheel${wheel_click_index}_img${wheel_tmp_index + 1}`).css({zIndex: 98});
            $(`.wheel4_img${wheel_tmp_index + 1}`).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.wheel_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.wheel_border').children().css({left: '-100%'});
            $('.wheel_border').eq(2).children().css({left: 0});

            wheel_click_index = $(this).parent().parent().index();
        }
        if (($(this).parent().parent().index() == 6 && $('.wheel_img3').hasClass('wheel_tmptmp') == false)) {
            $('.wheel_img_box').css({zIndex: 9});

            wheel_tmp_index = $('.wheel_tmptmp').index();
            $('.wheel_img_box').removeClass('wheel_tmptmp');
            $(`.wheel6_img${wheel_tmp_index + 1}`).addClass('wheel_tmptmp');

            $(`.wheel${wheel_click_index}_img${wheel_tmp_index + 1}`).css({zIndex: 98});
            $(`.wheel6_img${wheel_tmp_index + 1}`).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.wheel_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.wheel_border').children().css({left: '-100%'});
            $('.wheel_border').eq(3).children().css({left: 0});

            wheel_click_index = $(this).parent().parent().index();
        }
        if (($(this).parent().parent().index() == 8 && $('.wheel_img4').hasClass('wheel_tmptmp') == false)) {
            $('.wheel_img_box').css({zIndex: 9});

            wheel_tmp_index = $('.wheel_tmptmp').index();
            $('.wheel_img_box').removeClass('wheel_tmptmp');
            $(`.wheel8_img${wheel_tmp_index + 1}`).addClass('wheel_tmptmp');

            $(`.wheel${wheel_click_index}_img${wheel_tmp_index + 1}`).css({zIndex: 98});
            $(`.wheel8_img${wheel_tmp_index + 1}`).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.wheel_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.wheel_border').children().css({left: '-100%'});
            $('.wheel_border').eq(4).children().css({left: 0});

            wheel_click_index = $(this).parent().parent().index();
        }
    })

    // interior
    $('.interior_img1').css({width: '100%'});
    $('.interior_img1').addClass('interior_tmptmp');

    let interior_tmp_index = 0;
    let interior_txt_index = 2;
    $('.interior_txt_img_box').click(function(){

        if ($(this).parent().parent().index() >= 8 && $(this).parent().parent().index() <= 28) {
            // total
            interior_plus_tmp = wheel_plus_tmp + interior_price;
            $('.total_price_hidden').attr('value', interior_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                    $('.total_price2').eq(0).text(i - 1);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                    $('.total_price2').eq(1).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                    $('.total_price2').eq(2).text(i - 1);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                    $('.total_price2').eq(3).text(i - 1);
                }, 50 * i);
            }
        }
        else {
           // total
           interior_plus_tmp = wheel_plus_tmp + 0;
           $('.total_price_hidden').attr('value', interior_plus_tmp);
           common_second_val = $('.total_price_hidden').val().substring(1, 2);
           common_third_val = $('.total_price_hidden').val().substring(2, 3);
           common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
           common_fifth_val = $('.total_price_hidden').val().substring(4, 5);

           for (let i = 0; i <= common_second_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(0).text(i);
                   $('.total_price2').eq(0).text(i - 1);
               }, 50 * i);
           }

           for (let i = 0; i <= common_third_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(1).text(i);
                   $('.total_price2').eq(1).text(i - 1);
               }, 50 * i);
           }
           for (let i = 0; i <= common_fourth_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(2).text(i);
                   $('.total_price2').eq(2).text(i - 1);
               }, 50 * i);
           }
           for (let i = 0; i <= common_fifth_val; i++) {
               setTimeout(() => {
                   $('.total_price1').eq(3).text(i);
                   $('.total_price2').eq(3).text(i - 1);
               }, 50 * i);
           }
        }

        interior_txt_index = $(this).parent().parent().index();
        if (($(this).parent().parent().index() == 2) && $('.interior_img1').hasClass('interior_tmptmp') == false) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img1').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(0).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(1).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 4) && $('.interior_img2').hasClass('interior_tmptmp') == false) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img2').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(1).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(2).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 6 && $('.interior_img3').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img3').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(2).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(3).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 8 && $('.interior_img4').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img4').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(3).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(4).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 10 && $('.interior_img5').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img5').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(4).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(5).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 12 && $('.interior_img6').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img6').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(5).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(6).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 14 && $('.interior_img7').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img7').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(6).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(7).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 16 && $('.interior_img8').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img8').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(7).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(8).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 18 && $('.interior_img9').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img9').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(8).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(9).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 20 && $('.interior_img10').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img10').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(9).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(10).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 22 && $('.interior_img11').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img11').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(10).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(11).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 24 && $('.interior_img12').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img12').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(11).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(12).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 26 && $('.interior_img13').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img13').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(12).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(13).children().css({left: 0});
        }
        if (($(this).parent().parent().index() == 28 && $('.interior_img14').hasClass('interior_tmptmp') == false)) {
            $('.interior_img_box').css({zIndex: 9});

            interior_tmp_index = $('.interior_tmptmp').index();
            $('.interior_img_box').removeClass('interior_tmptmp');
            $('.interior_img14').addClass('interior_tmptmp');

            $('.interior_img_box').eq(interior_tmp_index).css({zIndex: 98});
            $('.interior_img_box').eq(13).css({zIndex: 99, width: '0%'}).stop().animate({width: '100%'}, 500);

            $('.interior_txt_img_box_L').children('p').removeClass('common_txt_select');
            $(this).find('p').addClass('common_txt_select');

            $('.interior_border').children().css({left: '-100%'});
            $('.interior_border').eq(14).children().css({left: 0});
        }
    })


    let color_first_settime = false;
    let wheel_first_settime = false;
    let interior_first_settime = false;
    // prev
    $('.content_txt_box_bot_btn1').click(function(){
        // color > special
        if (special_in == true && color_in == true && wheel_in == false && interior_in == false) {
            color_in = false;
            $('.color_box').fadeOut(500);
            $('.special_box').fadeIn(500);

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li1').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(0).css({borderBottom: '2px solid #ad7b61'});

            $('.total_price_hidden').attr('value', speical_price_first_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                }, 50 * i);
            }
        }
        // wheel > color
        if (special_in == true && color_in == true && wheel_in == true && interior_in == false) {
            setTimeout(() => {
                wheel_in = false;
            }, 500);
            $('.wheel_box').fadeOut(500);
            $('.color_box').fadeIn(500);

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li2').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(1).css({borderBottom: '2px solid #ad7b61'});

            $('.total_price_hidden').attr('value', color_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                }, 50 * i);
            }
        }
        // interior > wheel
        if (special_in == true && color_in == true && wheel_in == true && interior_in == true) {
            setTimeout(() => {
                interior_in = false;
            }, 500);
            $('.interior_box').fadeOut(500);
            $('.wheel_box').fadeIn(500);

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li3').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(2).css({borderBottom: '2px solid #ad7b61'});

            $('.total_price_hidden').attr('value', wheel_plus_tmp);
            common_second_val = $('.total_price_hidden').val().substring(1, 2);
            common_third_val = $('.total_price_hidden').val().substring(2, 3);
            common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
            common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(0).text(i);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(1).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(2).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.total_price1').eq(3).text(i);
                }, 50 * i);
            }
        }
    })

    let resize_width = $(window).innerWidth();
    $(window).resize(function(){
        resize_width = $(window).innerWidth();
    })
    // next
    $('.content_txt_box_bot_btn2').click(function(){
        // special > complet
        if (special_ed1 == true || special_ed2 == true) {
            if (resize_width <= 880) {
                $('.content_box').css({height: '80vh'})
            }

            $('.special_box').fadeOut(500);
            $('.Quotation_box').fadeIn(500);
            $('.Quotation_box').css({display: 'flex'});

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li5').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(4).css({borderBottom: '2px solid #ad7b61'});

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(0).text(i);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(1).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(2).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(3).text(i);
                }, 50 * i);
            }

            if (special_ed1 == true) {
                $('.Quotation_box_R_img_box').css({
                    background: 'url(./corvette_img/quote/img_box/speical_box/resize/speical1_ren.jpg) no-repeat left / 117%'
                })
                $('.Quotation_speical').text('C8R Edition Yellow');
                $('.Quotation_color').text('Accelerate Yellow');
                $('.Quotation_wheel').text('Accessory_Black_Trident_Spoke');
                $('.Quotation_interior').text('Jet Black with Yellow Stitching');

            }
            if (special_ed2 == true) {
                $('.Quotation_box_R_img_box').css({
                    background: 'url(./corvette_img/quote/img_box/speical_box/resize/speical2_ren.jpg) no-repeat left / 117%'
                })
                $('.Quotation_speical').text('C8R Edition Gray');
                $('.Quotation_color').text('Hypersonic Gray');
                $('.Quotation_wheel').text('Accessory_Black_Trident_Spoke');
                $('.Quotation_interior').text('Jet Black with Yellow Stitching');
            }
        }
        // special > color
        if (special_in == true && color_in == false && special_ed1 == false && special_ed2 == false) {
            setTimeout(() => {
                color_in = true;
            }, 500);

            $('.special_box').fadeOut(500);
            $('.color_box').fadeIn(500);

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li2').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(1).css({borderBottom: '2px solid #ad7b61'});

            // color border
            if (color_first_settime == false) {
                color_first_settime = true;
                setTimeout(() => {
                    $('.color_border').eq(1).children().css({left: 0});
                }, 500);
            }

            if (color_txt_index >= 12 && color_txt_index <= 22) {
                color_plus_tmp = color_price_first_tmp + color_price;
                $('.total_price_hidden').attr('value', color_plus_tmp);
                common_second_val = $('.total_price_hidden').val().substring(1, 2);
                common_third_val = $('.total_price_hidden').val().substring(2, 3);
                common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
                common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
    
                for (let i = 0; i <= common_second_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(0).text(i);
                        $('.total_price2').eq(0).text(i - 1);
                    }, 50 * i);
                }
    
                for (let i = 0; i <= common_third_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(1).text(i);
                        $('.total_price2').eq(1).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fourth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(2).text(i);
                        $('.total_price2').eq(2).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fifth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(3).text(i);
                        $('.total_price2').eq(3).text(i - 1);
                    }, 50 * i);
                }
            }
            else {
                color_plus_tmp = color_price_first_tmp + 0;
                $('.total_price_hidden').attr('value', color_plus_tmp);
                common_second_val = $('.total_price_hidden').val().substring(1, 2);
                common_third_val = $('.total_price_hidden').val().substring(2, 3);
                common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
                common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
     
                for (let i = 0; i <= common_second_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(0).text(i);
                        $('.total_price2').eq(0).text(i - 1);
                    }, 50 * i);
                }
     
                for (let i = 0; i <= common_third_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(1).text(i);
                        $('.total_price2').eq(1).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fourth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(2).text(i);
                        $('.total_price2').eq(2).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fifth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(3).text(i);
                        $('.total_price2').eq(3).text(i - 1);
                    }, 50 * i);
                }
            }
        }

        // color > wheel
        if (special_in == true && color_in == true && special_ed1 == false && special_ed2 == false && wheel_in == false) {
            setTimeout(() => {
                wheel_in = true;
            }, 500);

            $('.color_box').fadeOut(500);
            $('.wheel_box').fadeIn(500);

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li3').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(2).css({borderBottom: '2px solid #ad7b61'});

            // wheel border
            if (wheel_first_settime == false) {
                wheel_first_settime = true;
                setTimeout(() => {
                    $('.wheel_border').eq(1).children().css({left: 0});
                }, 500);
                // wheel_set
                $(`.wheel2_img${$('.color_tmptmp').index()+1}`).css({width: '100%'});
                $('.wheel_img_box').removeClass('wheel_tmptmp');
                $(`.wheel2_img${$('.color_tmptmp').index()+1}`).addClass('wheel_tmptmp');
            }
            else {
                $('.wheel_img_box').css({zIndex: 9});
                $(`.wheel${wheel_click_index}_img${$('.color_tmptmp').index()+1}`).css({width: '100%', zIndex: 99});
                $('.wheel_img_box').removeClass('wheel_tmptmp');
                $(`.wheel${wheel_click_index}_img${$('.color_tmptmp').index()+1}`).addClass('wheel_tmptmp');
            }

            if (wheel_txt_index >= 4 && wheel_txt_index <= 8) {
                // total
                wheel_plus_tmp = color_plus_tmp + wheel_price;
                $('.total_price_hidden').attr('value', wheel_plus_tmp);
                common_second_val = $('.total_price_hidden').val().substring(1, 2);
                common_third_val = $('.total_price_hidden').val().substring(2, 3);
                common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
                common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
    
                for (let i = 0; i <= common_second_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(0).text(i);
                        $('.total_price2').eq(0).text(i - 1);
                    }, 50 * i);
                }
    
                for (let i = 0; i <= common_third_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(1).text(i);
                        $('.total_price2').eq(1).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fourth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(2).text(i);
                        $('.total_price2').eq(2).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fifth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(3).text(i);
                        $('.total_price2').eq(3).text(i - 1);
                    }, 50 * i);
                }
            }
            else {
               // total
               wheel_plus_tmp = color_plus_tmp + 0;
               $('.total_price_hidden').attr('value', wheel_plus_tmp);
               common_second_val = $('.total_price_hidden').val().substring(1, 2);
               common_third_val = $('.total_price_hidden').val().substring(2, 3);
               common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
               common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
    
               for (let i = 0; i <= common_second_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(0).text(i);
                       $('.total_price2').eq(0).text(i - 1);
                   }, 50 * i);
               }
    
               for (let i = 0; i <= common_third_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(1).text(i);
                       $('.total_price2').eq(1).text(i - 1);
                   }, 50 * i);
               }
               for (let i = 0; i <= common_fourth_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(2).text(i);
                       $('.total_price2').eq(2).text(i - 1);
                   }, 50 * i);
               }
               for (let i = 0; i <= common_fifth_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(3).text(i);
                       $('.total_price2').eq(3).text(i - 1);
                   }, 50 * i);
               }
            }
        }

        // wheel > interior
        if (special_in == true && color_in == true && special_ed1 == false && special_ed2 == false && wheel_in == true && interior_in == false) {
            setTimeout(() => {
                interior_in = true;
            }, 500);

            $('.wheel_box').fadeOut(500);
            $('.interior_box').fadeIn(500);

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li4').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(3).css({borderBottom: '2px solid #ad7b61'});

            // interior border
            if (interior_first_settime == false) {
                interior_first_settime = true;
                setTimeout(() => {
                    $('.interior_border').eq(1).children().css({left: 0});
                }, 500);
                // interior_set
                $(`.interior_img1`).css({width: '100%'});
                $('.interior_img_box').removeClass('interior_tmptmp');
                $(`.interior_img1`).addClass('interior_tmptmp');
            }

            if (interior_txt_index >= 8 && interior_txt_index <= 28) {
                // total
                interior_plus_tmp = wheel_plus_tmp + interior_price;
                $('.total_price_hidden').attr('value', interior_plus_tmp);
                common_second_val = $('.total_price_hidden').val().substring(1, 2);
                common_third_val = $('.total_price_hidden').val().substring(2, 3);
                common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
                common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
    
                for (let i = 0; i <= common_second_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(0).text(i);
                        $('.total_price2').eq(0).text(i - 1);
                    }, 50 * i);
                }
    
                for (let i = 0; i <= common_third_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(1).text(i);
                        $('.total_price2').eq(1).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fourth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(2).text(i);
                        $('.total_price2').eq(2).text(i - 1);
                    }, 50 * i);
                }
                for (let i = 0; i <= common_fifth_val; i++) {
                    setTimeout(() => {
                        $('.total_price1').eq(3).text(i);
                        $('.total_price2').eq(3).text(i - 1);
                    }, 50 * i);
                }
            }
            else {
               // total
               interior_plus_tmp = wheel_plus_tmp + 0;
               $('.total_price_hidden').attr('value', interior_plus_tmp);
               common_second_val = $('.total_price_hidden').val().substring(1, 2);
               common_third_val = $('.total_price_hidden').val().substring(2, 3);
               common_fourth_val = $('.total_price_hidden').val().substring(3, 4);
               common_fifth_val = $('.total_price_hidden').val().substring(4, 5);
    
               for (let i = 0; i <= common_second_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(0).text(i);
                       $('.total_price2').eq(0).text(i - 1);
                   }, 50 * i);
               }
    
               for (let i = 0; i <= common_third_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(1).text(i);
                       $('.total_price2').eq(1).text(i - 1);
                   }, 50 * i);
               }
               for (let i = 0; i <= common_fourth_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(2).text(i);
                       $('.total_price2').eq(2).text(i - 1);
                   }, 50 * i);
               }
               for (let i = 0; i <= common_fifth_val; i++) {
                   setTimeout(() => {
                       $('.total_price1').eq(3).text(i);
                       $('.total_price2').eq(3).text(i - 1);
                   }, 50 * i);
               }
            }
        }

        // interior > complet
        if (special_in == true && color_in == true && special_ed1 == false && special_ed2 == false && wheel_in == true && interior_in == true && complet_in == false) {
            setTimeout(() => {
                complet_in = true;
            }, 500);
            if (resize_width <= 880) {
                $('.content_box').css({height: '80vh'})
            }

            $('.interior_box').fadeOut(500);
            $('.Quotation_box').fadeIn(500);
            $('.Quotation_box').css({display: 'flex'});

            // head_menu
            $('.header_menu_li').removeClass('header_menu_li_act');
            $('.header_menu_li5').addClass('header_menu_li_act');
            $('.header_menu_li > span').css({borderBottom: '2px solid transparent'});
            $('.header_menu_li > span').eq(4).css({borderBottom: '2px solid #ad7b61'});

            $('.Quotation_box_R_img_box').css({
                background: `url(./corvette_img/quote/img_box/color_box/ren/resize/${$('.color_tmptmp').index()+1}.jpg) no-repeat left / 117%`
            })
            $('.Quotation_speical').text('Standard');
            $('.Quotation_color').text($(`.color_txt_img_box${color_txt_index}`).find('p').text());
            $('.Quotation_wheel').text($(`.wheel_txt_img_box${wheel_txt_index}`).find('p').text());
            $('.Quotation_interior').text($(`.interior_txt_img_box${interior_txt_index}`).find('p').text());

            for (let i = 0; i <= common_second_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(0).text(i);
                }, 50 * i);
            }

            for (let i = 0; i <= common_third_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(1).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fourth_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(2).text(i);
                }, 50 * i);
            }
            for (let i = 0; i <= common_fifth_val; i++) {
                setTimeout(() => {
                    $('.final_price').eq(3).text(i);
                }, 50 * i);
            }
        }
    })
})