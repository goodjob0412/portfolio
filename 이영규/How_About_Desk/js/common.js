function get_url_param(url){


    // ? 짜르기
    url = url.split("?")[1];

    let arr_url_split = url.split("&")

    let dic_url = {}

    for(let i = 0; i < arr_url_split.length; i++){
        dic_url[arr_url_split[i].split("=")[0]] = arr_url_split[i].split("=")[1];
    }


    return dic_url;

}

    // 달력 세팅
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
      });


    $(function(){
        $('.datepicker').datepicker();
    })

    // Zero추가
    function zero(string_add){
        
        if(isNaN(string_add) == false){
            string_add = String(string_add)
        }else{
        }

        if(string_add.length == 1){
            string_add = "0"+string_add;
        }
        return string_add;
        
    }


    // 사람 숫자 체크
    
    let nm_person;
    // 사람 숫자 더하기
    
    function addPerson(chk_cal){
        nm_person =  $('#chk_person').val();
        console.log("선택된 인원수 :: " + nm_person);
        if(chk_cal == "-" && nm_person < 2){
            alert("0명 이하는 선택이 불가능합니다.")
        }else{
            chk_cal=="+"?nm_person++:nm_person--;
            console.log("변경 인원수 :: " + nm_person);
            $('#chk_person').val(nm_person);
        }
    }

    $(document).on('click','.plus_people', function(){
        addPerson("+");
    })
    $(document).on('click','.minus_people', function(){
        addPerson("-");
    })