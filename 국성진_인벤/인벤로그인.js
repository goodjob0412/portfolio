
$(document).ready(function(){
    let chk = true
    $('.chk_box').click(()=>{
        if(chk==true){
            $('.chk_circle').css({
                color:'#000',
                'box-shadow': '0 0 0 1.5px #000'
            })
            chk=false
        }
        else{
            $('.chk_circle').css({
                color:'#fff',
                'box-shadow': '0 0 0 1.5px #000'
            })
            chk=true
        }
    })

    $('#input_btn').click(function(){ 
        $('.login_info_wrap').css({
            display:'block'
        })
        console.log("")
    })

    $('.close_btn').click(function(){
        console.log("")
        $('.login_info_wrap').css({
            display:'none'
        })
    })

    })
