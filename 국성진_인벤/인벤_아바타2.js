
$(document).ready(function(){
    let hd_nav_array= ['홈','아이템','제작','스킬','퀘스트','아바타','선원','호감도','카드','지도','던전/공략']

    let hd_nav_a_array=['','','','','','','','','','./인벤_모바일_지도.html','']
    for(let i=0; i<hd_nav_array.length; i++){
    $('.hd_nav_ul').append(`<a href="${hd_nav_a_array[i]}"><li class="hd_nav_li font">${hd_nav_array[i]}</li></a>`)
    }

    let lost_coummunity_array=['로아 티어랭킹','자유 게시판','└ 오늘의 30추글','└ 오늘의 10추글','스토리 게시판','질문과 답변','PVP 밸런스 토론','서버 사건/사고 게시판','이슈/토론/버그 제보','길드 모집 게시판','레이드 파티찾기','로스트아크에 바란다','떠돌이 상인 게시판','생활 정보 공유 게시판','비밀지도 게시판','방송 및 홍보 게시판','사이트 건의/제보']

    for (let i=0; i<lost_coummunity_array.length; i++){
        $('.lost_coummunity_bot_ul').append(`<li class="lost_coummunity_bot_li left_common_li font">${lost_coummunity_array[i]}</li>`)
    }

    
    let lost_job_array=['디스트로이어','워로드','버서커','홀리나이트','슬레이어','배틀마스터','인파이터','기공사','창술사','스트라이커','브레이커','데빌헌터','블래스터','호크아이','스카우터','건슬링어','바드','서머너','아르카나','소서리스','블레이드','데모닉','리퍼','소울이터','도화가','기상술사']

    for (let i=0; i<lost_job_array.length; i++){
        $('.lost_job_bot_ul').append(`<a href=""><li class="lost_job_bot_li left_common_li font">${lost_job_array[i]}</li></a>`)
    }

    let cate_txt_array =['아침 베히 성불팟 맵다매워','ㅋㅋ 아무리 꼬공잡 공장맘이라고해도','MVP 개선방법 ㅁㅊ; ㄷㄷㄷㄷ;','ㅁㅊ; 1800년대 가장 많이 팔린 물건.jpg','베히 쉽게나와서 기쁘면 개추','환류 베히모스 밑잔','베스칼 도는데 이거 머야','30추 조현병글 작성자 찾아옴','[만화] MVP 개선 되는 만화','서머너 이거 왜 죽은거임??','베히모스랑 렌 그려왔어.. 봐주라..ㅠ','국방부 레전드 8행시 ㅁㅊ ㅎㄷㄷ','그림 그려드려옹 ~.~;','미터기 반대하면 하나만 하면 안되냐?']

    for (let i=0; i<cate_txt_array.length; i++){
        $('.cate_ul').append(`
        <li class="cate_li font">
            <a href=""><p>잡담</p><p>${cate_txt_array[i]}</p><p>[278]</p></a>
        </li>`)
    }

    for ( let i=0; i<lost_job_array.length; i++){
        $('.job_btn_area_ul').append(`<li class="job_btn_area_li font">${lost_job_array[i]}</li>`)
    }
    $('.job_btn_area_li').css({
        width:`calc((100% - 9px)/10)`,
        'line-height': '30px',
        'font-size': '11px',
        'text-align': 'center',
        'background-color': '#232a43',
        color:'#20abd8',
        cursor: 'pointer'
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let job_list_array=['(연구글) 쾌적한 특신 4오의 뇌명각빌드','2악4지 초심배마에 대한 정보글(장문)','[개편된] 극특 환각4오의 세팅 정리','고신6악몽 초심가이드_240303v','고신속 환각3오의 내공연소x 뇌명각o','초심 이것저것 써본 결과 2악4지가 제일 좋았음(+일단 빠른 세팅추천)','쌩 뉴비용 환각3오의 세팅 가이드(영희풍요 2오의, 전영희3오의)','배틀마스터의 세팅을 알아보자(*개편 후 정보는 댓글 참조*)','환각 뇌명3오의 배마 입문 가이드(고신~고특)','(연구글) 특치사멸 바폭사이클 4오의 (극특치 / 극특신 모두해당)','극특사멸 오의 배틀마스터 공략(1월 밸패전 최신화)']

    console.log("count :: "+job_list_array.length)
    for(let j=0; j<job_list_array.length; j++){
        let txt = job_list_array[j]
        let txt_cut= txt.substr(0,22)
        console.log(txt.length)
        if(txt.length > 22) {
            txt_cut= txt_cut+('...')
        }

        $('.job_list_ul').append(` <li class="job_list_li">
        <div class="job_list_medal"></div>
        <div class="job_list_txt font">${txt_cut}
        </div>
        <div class="job_list_img"></div>
        <div class="job_list_sugge font">[50]</div>
        </li>`)
    }

    let job_right_top_array=['베히로 바쁜 와중 배마 4관 내부 질문있어요','무기 초월 옵션 계산상 1버블 돌려받는다는건대','돌고래 무기 원하시는 분 계신가요?']
    for(let j=0; j<job_right_top_array.length; j++){
        let txt = job_right_top_array[j]
        let txt_cut= txt.substr(0,20)
        console.log(txt.length)
        if(txt.length > 20) {
            txt_cut= txt_cut+('...')
        }
   
        $('.job_list_right_div').append(`<ul class="job_list_right_ul">
                                                    <div>·</div>
                                                    <li class="font">HOT</li>
                                                    <div class="font">${job_right_top_array[j]}</div>
                                                    <div class="font">[14]</div>
                                                </ul>`)
    }


    let job_list_right_bot_ul_array = ['극특4오의팔찌 기습옵션','극특 4오의 신치팔찌 질문','6악몽 사이클','어제 회심 오3질문자인데 로스트빌드값','세팅 질문좀 드립니다','이동기 유틸 << 이거에 대해서 아무 생각 없었는데','고민좀 해결주세용+_+']
    for( let i=0; i<job_list_right_bot_ul_array.length; i++){
        $('.job_list_right_bot_ul').append(`
        <li class="job_list_right_bot_li font">
            <a href=""><p>질문</p><p>${job_list_right_bot_ul_array[i]}</p><p>[13]</p></a>
        </li>`)
    }


    let lost_focus_count = true;
    let lost_media_count = true;
    let lost_community_count = true;
    let lost_job_count = true;


    $('.lost_focus_top_more').click(()=>{
        console.log("")
        if(lost_focus_count==true){
            $('.lost_focus_bot_li').css({
                display:'none'
            })
            lost_focus_count=false
        }
        else{
            $('.lost_focus_bot_li').css({
                display:'block'
            })
            lost_focus_count=true
        }
    })


    $('.lost_media_top_more').click(()=>{
        console.log("")
        if(lost_media_count==true){
            $('.lost_media_bot_li').css({
                display:'none'
            })
            lost_media_count=false
        }
        else{
            $('.lost_media_bot_li').css({
                display:'block'
            })
            lost_media_count=true
        }
    })


    $('.lost_coummunity_top_more').click(()=>{
        console.log("")
        if(lost_community_count==true){
            $('.lost_coummunity_bot_li').css({
                display:'none'
            })
            lost_community_count=false
        }
        else{
            $('.lost_coummunity_bot_li').css({
                display:'block'
            })
            lost_community_count=true
        }
    })


    $('.lost_job_top_more').click(()=>{
        console.log("")
        if(lost_job_count==true){
            $('.lost_job_bot_li').css({
                display:'none'
            })
            lost_job_count=false
        }
        else{
            $('.lost_job_bot_li').css({
                display:'block'
            })
            lost_job_count=true
        }
    })
    //////////////////////////////////////////////////
    //글자색//
    $('.lost_focus_bot_li').eq(1).css({color:'#9B9C9E'})
    $('.lost_focus_bot_li').eq(3).css({color:'#9B9C9E'})
    ////////////////////////////////////////////////////
    $('.lost_media_bot_li').eq(3).css({color:'#9B9C9E'})
    $('.lost_media_bot_li').eq(4).css({color:'#9B9C9E'})
    $('.lost_media_bot_li').eq(6).css({color:'#9B9C9E'})
    $('.lost_media_bot_li').eq(7).css({color:'#9B9C9E'})
    ////////////////////////////////////////////////////
    $('.lost_coummunity_bot_li').eq(1).css({color:'#00FFFF'})
    $('.lost_coummunity_bot_li').eq(2).css({color: '#FAFAD2'})
    $('.lost_coummunity_bot_li').eq(3).css({color: '#FAFAD2'})
    /////////////////////////////////////////////////////


    for(i=0; i<18; i++){
        if(i%3 == 0){
            $('.banner_txt').eq(i).css({color:'yellow','font-weight' : '900','font-size' : '20px','text-shadow': '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black'
        })
        }
        else{
            $('.banner_txt').eq(i).css({color:'white','font-weight' : '900','font-size' : '15px','text-shadow': '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black'})
        }
    }
    ///////////////////////////////////////////////////////
    $('.select_span').eq(1).css({color:'rgb(138 136 136)'})
    $('.select_span').eq(3).css({color:'rgb(138 136 136)'})
    $('.select_span').eq(5).css({color:'rgb(138 136 136)'})
    
})




 //////////////////버튼 슬라이드///////////////////////////
 $(document).ready(function(){

        let bang = 0;
        let bn_length = $('.mb_img_box').length;
        let timer = 1000;
        $(document).on('click', '.slide_btn_R', function(){

            $('.slide_btn_R').css({pointerEvents:'none'})
            setTimeout(function(){
                $('.slide_btn_R').css({pointerEvents:'auto'})
            }, timer)

            $('.mb_img_box').eq(bang % bn_length).animate({
                left: '-270px'
            }, timer)


            $('.mb_img_box').eq((bang + 1) % bn_length).css({
                left: '270px'
            }).animate({
                left: '0px'
            }, timer)

            $('.mb_img_box').eq((bang + 2 ) % bn_length).css({
                left: '540px'
            }).animate({
                left: '270px'
            }, timer )

            $('.mb_img_box').eq((bang + 3 ) % bn_length).css({
                left: '810px'
            }).animate({
                left: '540px'
            }, timer )
            bang = (bang + 1) % bn_length;


        });



        $(document).on('click', '.slide_btn_L', function(){
            
            $('.slide_btn_L').css({pointerEvents:'none'})
            setTimeout(function(){
                $('.slide_btn_L').css({pointerEvents:'auto'}
                )
            }, timer)
                

            $('.mb_img_box').eq(bang % bn_length).animate({
                left: '270px'
            }, timer)


            $('.mb_img_box').eq((bang - 1) % bn_length).css({
                left: '-270px'
            }).animate({
                left: '0px'
            }, timer)

            $('.mb_img_box').eq((bang - 2 ) % bn_length).css({
                left: '-540px'
            }).animate({
                left: '-270px'
            }, timer )

            $('.mb_img_box').eq((bang + 1 ) % bn_length).css({
                left: '270px'
            }).animate({
                left: '540px'
            }, timer )

            $('.mb_img_box').eq((bang + 2 ) % bn_length).css({
                left: '540px'
            }).animate({
                left: '810px'
            }, timer )
            bang = (bang - 1) % bn_length;
        });




        //////////////경매 손익 계산/////////////////////////
        $('.Auction_sec_input').keyup(()=>{
            let personnel = $('.Auction_sec_input').eq(0).val()
            let price = $('.Auction_sec_input').eq(1).val()

            
            let profit = (((price/personnel) * (personnel - 1)) * 0.95)
            let Auction_sug = (profit*0.91)

            
            let result_profit=$('.result').eq(0).text(profit.toFixed(0));
            

            let result_Auction_sug=$('.result').eq(1).text(Auction_sug.toFixed(0));
            
            result_profit
            result_Auction_sug
        })




        ///////////////////오른쪽 메뉴//////////////////////

        let menu_group_array=['<div class="banner_row"></div>']
        for(let i=0; i<10; i++){
            $('.menu_group').append(menu_group_array[0])
        }


        let banner_row_array=['./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg','./img/오른쪽메뉴/오른쪽메뉴.jpg',]


        console.log(banner_row_array.length)
        for( let i=0; i<banner_row_array.length; i++){
            $('.banner_row').eq(i).append(`<a href="">
            <span class="banner_row_img"></span>
            
            <div class="txt_wrap">
                <p class="txt_wrap_inner1"></p>
                <p class="txt_wrap_inner2"></p>
            </div></a>
            `)
        }


        for(let k=0; k<banner_row_array.length; k++) {
            $('.banner_row_img').eq(k).css ({
                background:`url(./img/오른쪽메뉴/오른쪽메뉴${k}.jpg)`,
                'background-size': 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-position': '0 50%',
                'border-radius': '10px'
            })
        }



        let txt_wrap_inner1_array =['로스트아크','모코코&모험의 서','미리 트리 계산해보자!','포인트를 획득하자!','어떤 각인이 좋지?','가디언 토벌 입문!','내실 정보 한 눈에!','트포에 따라 변경?','어떤 직업 하지?','치지직 & 아프리카']
        let txt_wrap_inner2_array =['인벤 타이머','인벤 대륙 섬 지도','인벤 스킬 시뮬레이터','섬의 마음 수집 방법','각인 효율 정리','도전 가디언 토벌 공략','수집형 포인트 보상 정리','실제 무력화 수치 정리','직업별 공략 모음','Live 방송 등록 접수']
        for(let i=0; i<txt_wrap_inner1_array.length; i++){
            $('.txt_wrap_inner1').eq(i).append(txt_wrap_inner1_array[i])
        }
        for(let i=0; i<txt_wrap_inner2_array.length; i++){
            $('.txt_wrap_inner2').eq(i).append(txt_wrap_inner2_array[i])
        }
        //////////////////////오른쪽 메뉴 글자색/////////////////
        let txt_wrap_inner2_color =['#ce0c2e','#8B4513','#000','#006400','#8B4513','#8B008B','#9932CC','#FF6347','#9400D3','#000']
        for(let i=0; i<txt_wrap_inner2_color.length; i++){
            $('.txt_wrap_inner2').eq(i).css({
                color:txt_wrap_inner2_color[i],
                'font-weight':'900',
                'font-size':'14px'
            })
        }
        
        
        let br_bang = 0;
        let br_length = $('.brand_pt_bot_img').length;

        $(document).on('click', '.brand_pt_btn_R', function(){

            $('.brand_pt_btn_R').css({pointerEvents:'none'})
            setTimeout(function(){
                $('.brand_pt_btn_R').css({pointerEvents:'auto'})
            }, timer)

            $('.brand_pt_bot_img').eq(br_bang % br_length).animate({
                left: '-100%'
            }, timer)


            $('.brand_pt_bot_img').eq((br_bang + 1) % br_length).css({
                left: '100%'
            }).animate({
                left: '0'
            }, timer)

            br_bang = (br_bang + 1) % br_length;


        });



        $(document).on('click', '.brand_pt_btn_L', function(){
            
            $('.brand_pt_btn_L').css({pointerEvents:'none'})
            setTimeout(function(){
                $('.brand_pt_btn_L').css({pointerEvents:'auto'}
                )
            }, timer)
                

            $('.brand_pt_bot_img').eq(br_bang % br_length).animate({
                left: '100%'
            }, timer)


            $('.brand_pt_bot_img').eq((br_bang - 1) % br_length).css({
                left: '-100%'
            }).animate({
                left: '0'
            }, timer)

            br_bang = (br_bang - 1) % br_length;
        });

        
        for(let i=0; i<4; i++){
        $('.tilte_btn_img_ul1').append(`<li class="tilte_btn_img_li">
        <a href="">
        <div>
            <div class="tilte_btn_img tilte_btn_img1"></div>
        </div>
        <div class="btn_div">
        <p class="tilte_btn_img_txt"></p>[
        <p class="tilte_btn_img_txt2"></p>]
        </div>
        </a></li>`)
        }

        for(let i=0; i<4; i++){
            $('.tilte_btn_img_ul2').append(`<li class="tilte_btn_img_li">
            <a href="">
            <div>
                <div class="tilte_btn_img  tilte_btn_img2"></div>
            </div>
            <p class="tilte_btn_img_txt3"></p>
            </a></li>`)
            }

    let= tilte_btn_img_array=['./img/아바타자랑/상시공유커마.0.jpg','./img/아바타자랑/상시공유커마.1.jpg','./img/아바타자랑/상시공유커마.2.jpg','./img/아바타자랑/상시공유커마.3.jpg',]
    let= tilte_btn_img_array2=['./img/아바타자랑/리포터pick0.png','./img/아바타자랑/리포터pick1.png','./img/아바타자랑/리포터pick2.png','./img/아바타자랑/리포터pick3.png',]

    for(let i=0; i<4; i++){
        $('.tilte_btn_img1').eq(i).css({
            background:`url(${tilte_btn_img_array[i]})`,
            'background-size': 'cover',
            'background-repeat':'no-repeat',
            'background-position':'center',
            'border-radius': '9px'
        })
    }
    for(let i=0; i<4; i++){
        $('.tilte_btn_img2').eq(i).css({
            background:`url(${tilte_btn_img_array2[i]})`,
            'background-size': 'cover',
            'background-repeat':'no-repeat',
            'background-position':'center',
            'border-radius': '9px'
        })
        $('.tilte_btn_img_txt2').eq(i).text(random('.tilte_btn_img_txt2','10'))
    }
    

    let tilte_btn_img_txt_array=['[스타일북 공유] 히메','[스타일북] 틔기','공유요청 많이 받은 아이돌/로판 느낌 무도가','[스타일북] 여름 쿨톤 뮤트']
    let tilte_btn_img_txt_array2=['[커마] 3월 커마 모음2','[염색] 네리아 염색 코드','[커마] 슈사 커마 모음','[커마] 3월 커마 모음1']

    for(let j=0; j<tilte_btn_img_txt_array.length; j++){
        let img_txt = tilte_btn_img_txt_array[j]
        let img_txt_cut= img_txt.substr(0,8)

        if(img_txt.length > 8) {
            img_txt_cut= img_txt_cut+('..')
        }
    $('.tilte_btn_img_txt').eq(j).append(`${img_txt_cut}`)
       
    }
    

    for(let j=0; j<tilte_btn_img_txt_array2.length; j++){
        let img_txt2 = tilte_btn_img_txt_array2[j]
        let img_txt_cut2= img_txt2.substr(0,14)

        if(img_txt2.length > 14) {
            img_txt_cut2= img_txt_cut2+('..')
        }
       
    $('.tilte_btn_img_txt3').eq(j).append(`${img_txt_cut2}`)
       
    }


    let cate_area_ul_araay = ['전체','자랑','커마','의상','풍경','AI그림','상시공유','한정공유','기타']
    for(let i=0; i<cate_area_ul_araay.length; i++){
        $('.cate_area_ul').append(`<li class="cate_area_li">${cate_area_ul_araay[i]}</li>`)
    }

    for(let i=0; i<8; i++){
        $('.costom_item_ul').append(`
    <li>
    <a href="">
    <div>
        <div class="costom_item_img"></div>
        </div>
        <div class="cos_hd_txt">
            <p class="cos_hd_txt1"></p>[
            <p class="cos_hd_txt2"></p>]
        </div> 
        <div class="cos_bt_txt">
        </div>
        <div class="pnt">
            <div class="view">
                <div class="view_img"></div>
                <div class="view_txt"></div>
                <div class="like">
                    <div class="like_img"></div>
                    <div class="like_num"></div>
                </div>
            </div>
        </div>
        </a>
    </li>`
        )
    }
    let costom_item_img_array =['./img/아바타자랑/costom_item/ab_3/0.jpg','./img/아바타자랑/costom_item/ab_3/1.jpg','./img/아바타자랑/costom_item/ab_3/2.jpg','./img/아바타자랑/costom_item/ab_3/3.jpg','./img/아바타자랑/costom_item/ab_3/4.jpg','./img/아바타자랑/costom_item/ab_3/5.jpg','./img/아바타자랑/costom_item/ab_3/6.jpg','./img/아바타자랑/costom_item/ab_3/7.jpg']

    for(let i=0; i<costom_item_img_array.length; i++) {
        $('.costom_item_img').eq(i).css({
            background:`url(${costom_item_img_array[i]})`,
            'background-size': 'cover',
            'background-repeat':'no-repeat',
            'background-position':'center',
            'border-radius': '9px'
        })
    }
    let cos_hd_txt1_array=['맘에든다.','외변권ㅅㅍ','오드아이','섬머너 몇차 전압이 제...','[스타일북] 본캐 커마 공...','갑옷압타가 나올수록 런...','갈치의 맛','얼빡']
    for(let i=0; i<cos_hd_txt1_array.length; i++){
        $('.cos_hd_txt1').eq(i).text(cos_hd_txt1_array[i])
    }


    let user_name_array=['하기스1호점','박하란','따뜻한비빔면','마들렌','말이애오','흐앵흐앵흐앵','세우라제주삼','바네사']

    for(let i=0; i<user_name_array.length; i++){
        $('.cos_bt_txt').eq(i).text(user_name_array[i])
    }
    
        random('.cos_hd_txt2','10')
        random('.view_txt','100')
        random('.like_num','30')
            function random(name,number){
                let lotto = [];
                let num = 0;
                let count = 0;
                let lotto_num = document.getElementsByClassName('lotto_num')[0]
                while(true){
                    num = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                    if(lotto.indexOf(num) == -1){
                        lotto[count] = num;
                        count++;
                    }
    
                    if(lotto.length == 9){
                        break;
                    }
                for(let i=0; i<lotto.length; i++){
                    $(name).eq(i).text(lotto[i])
                }
            }
           

            }
            for(let i=0; i<costom_item_img_array.length; i++){
                $('.like_img').eq(i).css({
                    width:'17px',
                    height:'17px',
                    'background':'url(./img/common_img_sprite2.png)',
                    'background-position': '-326px -5px'
                })
            }
            
            $('.prev_append_num').click(function(){
                for(let i=0; i<5; i++){
                    $('.prev_append_num').eq(i).removeClass('prev_append_li');
                }
                $(this).addClass('prev_append_li');
                
                
            })
            let prev_append_bang=0
            $('.prev_append_li').click(function(){
                
            })
 })
