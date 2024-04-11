
$(document).ready(function(){
    let hd_nav_array= ['홈','아이템','제작','스킬','퀘스트','아바타','선원','호감도','카드','지도','던전/공략']
    let hd_nav_a_array=['','','','','','','','','','./인벤_지도.html','']
    for(let i=0; i<hd_nav_array.length; i++){
    $('.hd_nav_ul').append(`<a href="${hd_nav_a_array[i]}"><li class="hd_nav_li font">${hd_nav_array[i]}</li></a>`)
    }
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, 
        spaceBetween: 10, 
        slidesPerGroup: 3, 
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets' , 
        },
        autoplay: {
            delay: 2000 
        },
        speed: 2000, 
        loop: true,
    });

    $('.mySwiper').hover(function(){
        console.log(111)
        swiper.autoplay.stop()
    }, function(){
        console.log(222)
        swiper.autoplay.start()
    })

    let cate_txt_array =['아침 베히 성불팟 맵다매워','ㅋㅋ 아무리 꼬공잡 공장맘이라고해도','MVP 개선방법 ㅁㅊ; ㄷㄷㄷㄷ;','ㅁㅊ; 1800년대 가장 많이 팔린 물건.jpg','베히 쉽게나와서 기쁘면 개추','환류 베히모스 밑잔','베스칼 도는데 이거 머야','30추 조현병글 작성자 찾아옴','[만화] MVP 개선 되는 만화','서머너 이거 왜 죽은거임??','베히모스랑 렌 그려왔어.. 봐주라..ㅠ','국방부 레전드 8행시 ㅁㅊ ㅎㄷㄷ','그림 그려드려옹 ~.~;','미터기 반대하면 하나만 하면 안되냐?']

    for (let i=0; i<cate_txt_array.length; i++){
        $('.cate_ul').append(`
        <li class="cate_li font">
            <a href=""><p>잡담</p><p>${cate_txt_array[i]}</p><p>[278]</p></a>
        </li>`)
    }

    let lost_job_array=['디트','워로드','버서커','홀나','슬레','배마','인파','기공사','창술사','스커','브커','빌헌','블래','호크','스카','건슬','바드','서머너','알카','소서','블레','데모닉','리퍼','소울','도화가','기상']

    for ( let i=0; i<lost_job_array.length; i++){
        
        $('.job_btn_area_ul').append(`<a href="" class="job_btn_a"><li class="job_btn_area_li font">${lost_job_array[i]}</li></a>`)
    }

    
    $('.job_btn_a').css({
        width:`calc((100% - 5px)/6)`,
        'line-height': '15px',
        'font-size': '10px',
        'text-align': 'center',
        'background-color': '#232a43',
        'text-shadow':'-0px 0px #000, 0px 0px #000, 0px 0px #000, 0px -0px #000',
        color:'#fff'
        
    })
    let job_list_array=['(연구글) 쾌적한 특신 4오의 뇌명각빌드','2악4지 초심배마에 대한 정보글(장문)','[개편된] 극특 환각4오의 세팅 정리','고신6악몽 초심가이드_240303v','고신속 환각3오의 내공연소x 뇌명각o','초심 이것저것 써본 결과 2악4지가 제일 좋았음(+일단 빠른 세팅추천)','쌩 뉴비용 환각3오의 세팅 가이드(영희풍요 2오의, 전영희3오의)','배틀마스터의 세팅을 알아보자(*개편 후 정보는 댓글 참조*)','환각 뇌명3오의 배마 입문 가이드(고신~고특)','(연구글) 특치사멸 바폭사이클 4오의 (극특치 / 극특신 모두해당)','극특사멸 오의 배틀마스터 공략(1월 밸패전 최신화)']

    for(let j=0; j<job_list_array.length; j++){
        let txt = job_list_array[j]
        let txt_cut= txt.substr(0,22)
        if(txt.length > 22) {
            txt_cut= txt_cut+('...')
        }

        $('.job_list_ul').append(`<a href=""> <li class="job_list_li">
        <div class="job_list_txt font">${txt_cut}
        </div>
        <div class="job_list_sugge font">[50]</div>
        </li></a>`)
    }

    let job_right_top_array=['베히로 바쁜 와중 배마 4관 내부 질문있어요','무기 초월 옵션 계산상 1버블 돌려받는다는건대','돌고래 무기 원하시는 분 계신가요?']
    for(let j=0; j<job_right_top_array.length; j++){
        let txt = job_right_top_array[j]
        let txt_cut= txt.substr(0,20)
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

    let d_height = $(document).height();
    let header = $('.header').offset().top;
    $(window).scroll(function(){
        console.log(header)
        if($(window).scrollTop() >= header) {
            $('.header').css({
                position: 'fixed',
                top: 0,
                'z-index':99
            })
            $('.search_bar').css({
                'margin-top':'30px'
            })
            $('.ham_box').css({
                top:0
            })
            $('.opacity').css ({
                top:0
            })
        }
        else {
            $('.header').css({
                position: '',
            })
            $('.search_bar').css({
                'margin-top':'0px'
            })
            $('.ham_box').css({
                top:'-50px'
            })
            $('.opacity').css ({
                top:'-50px'
            })
        }
        
    })
   
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
            $('.ham_box').css({
                top:0
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
    let lost_coummunity_array=['로아 티어랭킹','자유 게시판','└ 오늘의 30추글','└ 오늘의 10추글','스토리 게시판','질문과 답변','PVP 밸런스 토론','서버 사건/사고 게시판','이슈/토론/버그 제보','길드 모집 게시판','레이드 파티찾기','로스트아크에 바란다','떠돌이 상인 게시판','생활 정보 공유 게시판','비밀지도 게시판','방송 및 홍보 게시판','사이트 건의/제보']

    for (let i=0; i<lost_coummunity_array.length; i++){
        $('.lost_coummunity_bot_ul').append(`<li class="lost_coummunity_bot_li left_common_li font">${lost_coummunity_array[i]}</li>`)
    }
    for (let i=0; i<lost_job_array.length; i++){
        $('.lost_job_bot_ul').append(`<a href=""><li class="lost_job_bot_li  font">${lost_job_array[i]}</li></a>`)
    }
    $('.hamburger_menu').click(()=>{
        
        $('.ham_box').animate({
            left:0
        },1500)
        $('.opacity').animate({
            left:'50%'
        },1500)
        $('.opacity').css({
            display:'block'
        })
    })
    $('.close_box>p').click(()=>{
        $('.ham_box').animate({
            left:'-150%',
        },1500)
        $('.opacity').animate({
            left:'-100%'
        },1500)
    })
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
    let costom_item_img_array =['./img/아바타자랑/costom_item/ab_5/0.jpg','./img/아바타자랑/costom_item/ab_5/1.jpg','./img/아바타자랑/costom_item/ab_5/2.jpg','./img/아바타자랑/costom_item/ab_5/3.jpg','./img/아바타자랑/costom_item/ab_5/4.jpg','./img/아바타자랑/costom_item/ab_5/5.jpg','./img/아바타자랑/costom_item/ab_5/6.jpg','./img/아바타자랑/costom_item/ab_5/7.jpg']

    for(let i=0; i<costom_item_img_array.length; i++) {
        $('.costom_item_img').eq(i).css({
            background:`url(${costom_item_img_array[i]})`,
            'background-size': 'cover',
            'background-repeat':'no-repeat',
            'background-position':'center',
            'border-radius': '9px'
        })
    }
    let cos_hd_txt1_array=['태극기 두건은 신이야!','[스샷명소] 대우림','셀피쓰 X 애니츠 명소...','감사합니다','우헤헤 나두 데런 비트박...','귀여워..','[염색코드]심플 캠퍼스...','전통명소 얕은바다']
    for(let i=0; i<cos_hd_txt1_array.length; i++){
        $('.cos_hd_txt1').eq(i).text(cos_hd_txt1_array[i])
    }


    let user_name_array=['흐앵흐앵흐앵','이찌','솔묘은','슈히또','초보인뎅','서론','니남친바람핌','아제나']

    for(let i=0; i<user_name_array.length; i++){
        $('.cos_bt_txt').eq(i).text(user_name_array[i])
    }
    
        random('.cos_hd_txt2','10')
        random('.view_txt','20')
        random('.like_num','10')
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
                    width:'13px',
                    height:'20px',
                    'background':'url(./img/common_img_sprite2.png)',
                    'background-position': '-248px -61px',
                    'background-size': '341.6px 61.6px'
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
