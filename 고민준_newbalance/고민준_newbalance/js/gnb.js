$(document).ready(function(){

	////////메뉴 라인
	// let nav_count = $('.nav_li').length;

	// let nav_array = new Array(nav_count);
	// for(let i=0; i<nav_count; i++){
	// 	nav_array[i] = $('.nav_li').eq(i).outerWidth()
	// }

	// // $('.nav_under_var').eq(0).css({ width: nav_array[0] });
	// // setTimeout(function() {
	// // 	$('.nav_under_var').eq(0).css({ transition: 'all 0.5s'})
	// // },10);

	// $('.nav_li').on('mouseenter', function(){
	// 	$('.nav_under_var').css({
	// 		width: nav_array[ $(this).index() ],
	// 		left: $(this).position().left
	// 	})
	// });

	// $('.nav_li').on('mouseleve', function(){
	// 	$('.nav_under_var').css({
	// 		display:'none'
	// 	})
	// });



	//////// 메뉴 판호버
	$('.nav_li, .nav_pan').hover(function(){
		$('.nav_pan').css({
			height:'463px',
			transition:'all 0.5s',
			// borderBottom:' 1px solid #eee',
		})
	}, function(){
		$('.nav_pan').css({
			height:'0',
			transition:'all 0.5s',
			border:'none'
		})
		$('.nav_li div').removeClass()
	})

	$('.nav_li').mouseenter(function(){
		$('.nav_pan_menu').css({
			display : 'none'
		})
		$('.nav_pan_menu').eq($(this).index()).css({
			display : 'block'
		})

		if(window.innerWidth >= 768) {
			$('.nav_li div').removeClass()
			$('.nav_li').eq($(this).index()).find('div').addClass('nav_line')
		}

	})






	//////// 헤더 따라다니기
	let t_height = $('.top_banner').height();
	let n_o_t = $('.nav').offset().top;
	let n_height = $('.nav').height();
	
	$(window).scroll(function(){
		let s_top = $(window).scrollTop();

		if(s_top + t_height >= n_o_t){
			$('.nav').addClass('nav_active')
			$('.main').css({
				paddingTop:n_height
			})
		}
		else{
			$('.nav').removeClass('nav_active')
			$('.main').css({
				paddingTop:0
			})
		}
	});


	


});