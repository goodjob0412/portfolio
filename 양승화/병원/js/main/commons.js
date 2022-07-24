$(document).ready(function(){
    //탑 부드럽게 보내는거
    $('.go_top').click(function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);

    })

     //모바일웹 
     var a = ["android", "ipad", "iphone"]; 
     for(var i = 0; i < 3; i++) {
         if(navigator.userAgent.toLowerCase().match(a[i])) {
             location.replace("../mobile/main_page.html");
         }
     }

});   
//클릭하면 페이지 이동
function main(){
    location.href = "index.html"
}

function map(){
    location.href = "page_2.html"
}

function page3(){
    location.href = "page_3_1.html"
}

function page3_2(){
    location.href = "page_3_2.html"
}

function page3_3(){
    location.href = "page_3_3.html"
}
function page4(){
    location.href = "page_4.html"
}
function page4_2(){
    location.href = "page_4_2.html"
}
function page4_3(){
    location.href = "page_4_3.html"
}
function page5_1(){
    location.href = "page5_1.html"
}
function page5_2(){
    location.href = "page_5_2.html"
}

function page5_3(){
    location.href = "page_5_3.html"
}
