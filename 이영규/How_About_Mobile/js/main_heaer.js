$(document).ready(function(){
        // 햄버거 내리기 올리기
        $('.login_btn').hover(function(){
            $('.ham_pan').stop().slideDown(300)
        }, function(){
            $('.ham_pan').stop().slideUp(500)
        })
    
        $('.ham_pan').hover( function(){
            $('.ham_pan').stop().slideDown()
        },function(){
            $('.ham_pan').stop().slideUp(300)
        })
})