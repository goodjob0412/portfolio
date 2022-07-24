$(document).ready(function(){
    $('.page1').click(function(){
        $('.click_sick_box1').css({
            display:'block'
        });
        $('.click_sick_box2 ,.click_sick_box3').css({
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
        $('.click_sick_box1 , .click_sick_box3').css({
            display:'none'
        });
        $('.click_sick_box2').css({
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
        $('.click_sick_box3').css({
            display:'block'
        });
        $('.click_sick_box1 , .click_sick_box2').css({
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