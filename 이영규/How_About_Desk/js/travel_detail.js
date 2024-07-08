$(document).ready(function(){

    // url를 나누어 dic 형태로 가져옵니다.
    // ex) location:Sokcho
    let dic_url =  get_url_param($(location).attr('href'))
    // dic_url에 전체 체크 유무 확인 -> 없을 경우 전체로 적용
    // 타임 날짜
    if(("type" in dic_url) == false ){
        dic_url["type"] = 'All'
    }
    if(("start_date" in dic_url) == false ){
        let today = new Date();
        let year = today.getFullYear();
        let month = zero(today.getMonth());
        let day = zero(today.getDate());
        dic_url["start_date"] = year + "-" + month + "-" + day
    }
    // 다음날로 기본 설정
    if(("end_date" in dic_url) == false ){
        let next_day = new Date();
        next_day.setDate(next_day.getDate()+1)

        let year = next_day.getFullYear();
        let month = zero(next_day.getMonth());
        let day = zero(next_day.getDate());
        dic_url["end_date"] = year + "-" + month + "-" + day
    }

    // 인원 없을 경우 2명으로 세팅
    if(("chk_person" in dic_url) == false ){
        dic_url["chk_person"] = '2'
    }


    // 왼쪽 선택 창 만들기
    let add_select_box = ["type:전체:All", "type:캠핑:Camping","type:팬션:Pansion","type:풀빌라:Fullbilla","type:모텔:Motel"]

    // 창 추가
    for(let i = 0; i < add_select_box.length; i++){
        let split_target = add_select_box[i].split(":");
        let add_a_type = `
            <a href="./travel_detail.html?${split_target[0]}=${split_target[2]}&location=${dic_url.location}">
                <li class="select_li"> 
                    <div class="select_circle"></div>
                    <span>${split_target[1]}</span>
                </li>
            </a>
        `
        $('.select_type').append(add_a_type);
        // 선택된 거에 효과주기
        if(dic_url.type == split_target[2]){
            $('.select_circle').eq(i).addClass('select_circle_active')
        }
    }

    // 왼쪽 search 창 기본 세팅

    // 한글 명 인덱스 넘버 찾기
    let korean_idx = arr_domestic_list_All.indexOf(dic_url['location'])

    let add_travel_search = `
        <li class="detail_serach_common">
            <div class="travel_search_input_box">
                <input class="travel_search_input input_none font_18px" type="text" value="${korean_idx == -1?"":arr_domestic_korean_All[korean_idx]}" name="location" id="search_travel">
            </div>
        </li>
        <li class="detail_serach_common detail_chk_person" class="detail_chk_person">
            <div class="minus_people mouse">-</div>
            <div class="nm_peoles" id="nm_peoles">
                <input type="text" name="chk_person" id="chk_person" value="${dic_url['chk_person']}" class="font_18px">
            </div>
            <div class="plus_people mouse">+</div>
        </li>
        <li class="detail_serach_common">
            <input value="${dic_url['start_date']}" type="text" class="datepicker date input_none font_18px" id="start_date" name="start_date">
        </li>
        <li class="detail_serach_common">
            <input value="${dic_url['end_date']}" type="text" class="datepicker date input_none font_18px" id="end_date" name="end_date">
        </li>
        <li class="detail_serach_common">
            <input type="submit" value="검색" class="search_form_btn input_none font_18px">
        </li>
    `
    $('.detail_search_ul').append(add_travel_search)



    // // 국내 추천 이미지 list
    // let arr_domestic_list = ['Gapyung','Gangneung','Gyeongju','Busan','Seoul','Sokcho','Yeosu','Incheon','Jejudo']
    // let arr_domestic_korean = ['가평','강릉','경주','부산','서울','속초','여수','인천','제주도']
    // // 해외 이미지 리스트
    // let arr_oversea_list = ['Guam','Natlang','Danang','Dokyo','Bangkuk','Singgapol','Osaka','Cotakinablue','Kyoto']
    // let arr_oversea_koean = ['괌','나트랑','다낭','도쿄','방콕','싱가폴','오사카','코타키나블루','쿄토']

    // 검색 유무 확인 했을 때 없을 경우 = 해당 숙소가 없습니다 출력 아닐 경우 알맞게 출력


    // 해당 갯수 체크
    let chk_cnt = 0;
    let arr_foreach = dicObject[dic_url['location']] 
    if(dic_url["type"] == "All"){
        chk_cnt = arr_foreach.length;
    }else{
        for(let i = 0; i < arr_foreach.length; i++){
            if(dic_url["type"] == arr_foreach[i].type_en){
                chk_cnt++;
            }
        }
    }

    if(korean_idx == -1){
        $('.right_item').append(`<h1 class="house_title">해당 숙소가 없습니다.</h1>`)
    }else if(dic_url["type"] == "All"){
        console.log("TIme :: " + dic_url)
        $('.right_item').append(`<h1 class="house_title">'${arr_domestic_korean_All[korean_idx]}' 숙소 ${arr_foreach.length}개</h1>`)

        for(let i = 0; i < chk_cnt; i++){
            let add_div = `
                <div class="house_box">
                    <a href="#">
                        <div class="house_box_a_div">
                            <div class="hous_img_Box">
                                <img src="../img/${arr_foreach[i].name}.jpg" alt="${arr_foreach[i].name}">
                            </div>
                            <div class="description_box">
                                <p class="house_type">${arr_foreach[i].type}</p>
                                <p class="house_name">${arr_foreach[i].name}</p>
                                <p class="house_address">${arr_foreach[i].address}</p>
                                <span class="house_start">★${arr_foreach[i].star}</span>
                                <p class="house_person">${arr_foreach[i].person} 평가</p>
                                <div class="house_prices"> &#x20a9; ${arr_foreach[i].price}</div>
                            </div>
                        </div>
                    </a>
                </div>
            `
            $('.right_item').append(add_div)
        }
        
    }else{
            $('.right_item').append(`<h1 class="house_title">'${arr_domestic_korean_All[korean_idx]}' 숙소 ${chk_cnt}개</h1>`)
        for(let i = 0; i < arr_foreach.length; i++){
            
            if(dic_url["type"] == arr_foreach[i].type_en){
                let add_div = `
                <div class="house_box">
                    <a href="#">
                        <div class="house_box_a_div">
                            <div class="hous_img_Box">
                                <img src="../img/${arr_foreach[i].name}.jpg" alt="${arr_foreach[i].name}">
                            </div>
                            <div class="description_box">
                                <p class="house_type">${arr_foreach[i].type}</p>
                                <p class="house_name">${arr_foreach[i].name}</p>
                                <p class="house_address">${arr_foreach[i].address}</p>
                                <span class="house_start">★${arr_foreach[i].star}</span>
                                <p class="house_person">${arr_foreach[i].person} 평가</p>
                                <div class="house_prices"> &#x20a9; ${arr_foreach[i].price}</div>
                            </div>
                        </div>
                    </a>
                </div>
            `
            $('.right_item').append(add_div)
            }
        }
    }




})



