$(document).ready(function(){
    $('.page1').click(function(){
        $('.right_text').css({
            display:'block'
        });
        $('.right_text_online').css({
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
        $('.right_text').css({
            display:'none'
        });
        $('.right_text_online').css({
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
        $('.contents_box2').css({
            display:'block'
        });
        $('.contents_box1').css({
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