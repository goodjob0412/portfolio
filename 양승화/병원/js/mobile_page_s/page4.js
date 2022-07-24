$(document).ready(function(){
    $('.page1').click(function(){
        $('.banner_img , .banner_text_box').css({
            display:'block'
        });
        $('.jo_box').css({
            display:'none'
        });
        $('.page1').css({
            background: '#23507b',
            color:'#fff'
        });
        $('.page2').css({
            background: '#999',
            color:'#fff'
        });
        $('.page3').css({
            background: '#999',
            color:'#fff'
        });
    });

    $('.page2').click(function(){
        $('.banner_img , .banner_text_box').css({
            display:'none'
        });
        $('.jo_box').css({
            display:'block'
        });
        $('.page1').css({
            background: '#999',
            color:'#fff'
        });
        $('.page2').css({
            background: '#23507b',
            color:'#fff'
        });
    });

    $('.page3').click(function(){
        $('.banner_img , .banner_text_box').css({
            display:'block'
        });
        $('.jo_box').css({
            display:'none'
        });
        $('.page1').css({
            background: '#999',
            color:'#fff'
        });
        $('.page2').css({
            background: '#999',
            color:'#fff'
        });
        $('.page3').css({
            background: '#23507b',
            color:'#fff'
        });
    });
});