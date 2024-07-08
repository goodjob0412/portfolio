$(document).ready(function(){

    let option_img_array = ['주의사항','히든퀘스트','또다른이야기','몬스터위치','필드보스위치','뷰포인트','요리&재료','호감도','모코코','미뉴에트','공명의노래','떠돌이상인']

    for(let i=0; i<option_img_array.length; i++){
        $('.option_img').eq(i).css({
            background:`url(./img/지도/${option_img_array[i]}.jpg)`
        })
    }
    
    ///1.버튼 감지, 
    ///
    
    let li_class = ['notice','hidden_que','another_que','monster','fieldboss','viewpoint','cooking','npc','mococo','minuet','resonance','merchant'];
    let icon_img = ['notice_img','hidden_que_img','another_que_img','monster_img','fieldboss_img','viewpoint_img','cooking_img','npc_img','mococo_img','minuet_img','resonance_img','merchant_img'];
    let icon_name =['noti','hidden','another','monst','field','view','cook','np','moco','minu','res','mer']
    $('.option_li').click(function(){
        let index = $('.option_li').index(this); 


        if($(this).hasClass(li_class[index])){

            $(this).removeClass(li_class[index]);
            $(`.${icon_name[index]}`).css({
                display:'none'
            })
            $(this).css({
                background:'#ddd'
            })
        } 
        else {
            $(this).addClass(li_class[index]);
            $(`.${icon_name[index]}`).css({
                display:'block'
            })
            $(this).css({
                background:'skyblue'
            })

        }
    });

        let chk = true
        let count = 1
    $('.map_bot').on('mousewheel DOMMouseScroll',function (){

        let wheel = event.wheelDelta
        let map_width = $('.img_wrap').width();
        let map_height = $('.img_wrap').height();
        let icon_width = $('.map_icon').width();
        let icon_height = $('.map_icon').height();

        if(chk){
            chk=false

            if(count < 4 && wheel > 0){
                $('.img_wrap').css({
                    width:(map_width += 150)+'px',
                    height:(map_height += 150)+'px'
                })
                $('.map_icon').css({
                    width:(icon_width -= 0.5)+'px',
                    height:(icon_height -= 0.5)+'px'
                })
                count +=1;
            }


            if(count > 0 && wheel < 0){
                $('.img_wrap').css({
                    width:(map_width -= 125)+'px',
                    height:(map_height -= 125)+'px'
                })
                $('.map_icon').css({
                    width:(icon_width += 0.5)+'px',
                    height:(icon_height += 0.5)+'px'
                })
                count -=1;
            }
           
            $('.zoom_li').css({
                background:'#fff'
            })
            $(`.zoom_li${count}`).css({
                background:'#393939'
            })
            $('.zoom_li_1').css({
                'background-color': 'dodgerblue'
            })
            $('.zoom_li5').css({
                'background-color': 'dodgerblue'
            })
            console.log(count)
            setTimeout(() => {
                chk=true
            }, 200);
        }
        
    })
    $('.option_li').mouseover(function(){
        let op_index = $('.option_li').index(this);
        $('.tool_box').eq(op_index).css({
            display:'block'
        })
        $(this).on('mousemove', function(event){
            let mouseX = event.offsetX;
            let mouseY = event.offsetY;
            console.log('Mouse X:', mouseX, 'Mouse Y:', mouseY);
            
            $('.tool_box').css({
                left: 10 + mouseX + 'px',
                top: 15 +mouseY + 'px'
            });
        });
    }).mouseout(function() {
        $(this).off('mousemove');
        $('.tool_box').css({
            display:'none'
        })
    });
   

    
})