$(document).ready(function(){

	$('.box_color01 > div').mouseenter(function(){
		$('.box_img01 > a > img').css({
			display : 'none'
		})
		$('.box_img01 > a > img').eq($(this).index()).css({
			display : 'block'
		})
	})

	$('.box_color02 > div').mouseenter(function(){
		$('.box_img02 > a > img').css({
			display : 'none'
		})
		$('.box_img02 > a > img').eq($(this).index()).css({
			display : 'block'
		})
	})

	$('.box_color03 > div').mouseenter(function(){
		$('.box_img03 > a > img').css({
			display : 'none'
		})
		$('.box_img03 > a > img').eq($(this).index()).css({
			display : 'block'
		})
	})

	$('.box_color04 > div').mouseenter(function(){
		$('.box_img04 > a > img').css({
			display : 'none'
		})
		$('.box_img04 > a > img').eq($(this).index()).css({
			display : 'block'
		})
	})


	// 세부페이지 썸네일 호버
	$('.s_in_content_img_sum').mouseenter(function(){
		$('.s_in_content_img').css({ display:'none' })

		$('.s_in_content_img').eq($(this).index()).css({
			display:'block',
		})

		$('.s_in_content_img_sum_black').css({ opacity:'0.7' })
		$('.s_in_content_img_sum_black').eq($(this).index()).css({
			opacity:'0',
			transition:'all 0.2s'
		})

	});


	//사이즈박스 호버
	$('.R_size_box').hover(function(){
		$('.R_size_box').eq($(this).index()).css({
			border:'1px solid #000',
			transition:'all 0.3s'
		})
	}, function(){
		$('.R_size_box').eq($(this).index()).css({
			border:'1px solid #eee',
			transition:'all 0.3s'
		})
	})

	$('.R_size_box').click(function(){
		$('.R_size_box').removeClass('R_size_box_ac')
		$(this).addClass('R_size_box_ac')
	});



	$('.color_boxs > .c_b01').hover(function(){
		$(this).parent().parent().prev('.s_img').find('.s_i01').css({
			// display:'block',
			opacity: 1,
		})
		$(this).parent().parent().prev('.s_img').find('.s_i02').css({
			// display:'none'
			opacity: 0,
		})
	}, function(){

	});


	$('.color_boxs > .c_b02').hover(function(){
		$(this).parent().parent().prev('.s_img').find('.s_i02').css({
			// display:'block'
			opacity: 1,
		})
		$(this).parent().parent().prev('.s_img').find('.s_i01').css({
			// display:'none'
			opacity: 0,
		})
	}, function(){

	});


	$('.small_sum').hover(function(){
	// 	$('.big_sum').css({
	// 		opacity:'0',
	// 		// display: 'none'
	// 	})
		
	// 	$(this).parent().prev('.L_big_sums').children('.big_sum').eq($(this).index()).css({
	// 		opacity: 1
	// 	})

		$('.big_sum').children('img').css({
			opacity:'0',
			// display: 'none'
		})

		$(this).parent().prev('.L_big_sums').children('.big_sum').eq($(this).index()).children('img').css({
			opacity: 1
		})

		$('.small_sum').children('img').css({
			opacity:0.3
		})
		$(this).children('img').css({
			opacity:1
		})
		
	}, function(){
		

		// $(this).children('img').css({
		// 	opacity:0.3
		// })
	});

	
});


function price_btn(p_tmp){ 
	var price = 159000;
	var qty = document.getElementById('R_price_value_1');
	var tmp_qty = Number(qty.innerText);
	var final_qty = 1;

	if(p_tmp == '-'){
		if(tmp_qty - 1 > 0){
			qty.innerText = tmp_qty - 1
			final_qty = tmp_qty - 1
		}

	}
	else if(p_tmp == '+'){
		qty.innerText = tmp_qty + 1
		final_qty = tmp_qty + 1
	}
	document.getElementById('R_price2').innerText= comma(final_qty * price) + "원";
}

function comma(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}
