const ITEM_LIST = [
    // 베스트
    [],
    // 채소
    [
        // 친환경
        [
            {item_no: 1},
            {item_no: 2},
            {item_no: 3},
            {item_no: 1},
            {item_no: 1},
        ],
        // 고구마
        [
            {item_no: 1},
            {item_no: 1},
            {item_no: 1},
            {item_no: 1},
            {item_no: 1},
        ]
    ],
    // 과일,견과
    [],
    // 수산,해산
    [],
    // 정육,계란
    [],
    // 국,반찬
    [
        // 국·탕·찌개 Soup_s
        [
            {item_no: 1, brand: '사미헌', title: '갈비탕', src: '1.jpg', price: '12000',sale: '10',desc:'진짜 갈비로 우려낸 전통 갈비탕'},
            {item_no: 2, brand: '외할머니댁', title: '차돌 된장찌개', src: '2.jpg', price: '7500',sale: '0',desc:'담백한 차돌양지가 돋보이는 된장찌개'},
            {item_no: 3, brand: '고래사', title: '프리미엄 어묵탕', src: '3.jpg', price: '9500',sale: '0',desc:'따끈하게 뚝딱 완성하는'},
            {item_no: 4, brand: '오모가리', title: '수제 김치찌개 2종', src: '4.jpg', price: '5200',sale: '0',desc:'맛있는 김치찌개를 위한 베이스'},
            {item_no: 5, brand: '엄마밥상', title: '청국장', src: '5.jpg', price: '6500',sale: '0',desc:'간편하게 즐기는 구수한 매력'},
            {item_no: 6, brand: '앤쿡', title: '어린이 한우 사골 곰국', src: '6.jpg', price: '15900',sale: '15',desc:'뚝딱 완성되는 영양 만점 국물요리'},
            {item_no: 7, brand: '더플랜', title: '목력 어묵탕', src: '7.jpg', price: '6900',sale: '0',desc:'[극한직업 "어묵"편 방송] 다채로운 어묵들이 한가득'},
            {item_no: 8, brand: '신의주 찹쌀순대', title: '찹쌀 순대국', src: '8.jpg', price: '4950',sale: '0',desc:'뽀얀 순대국의 구수한 매력'},
            {item_no: 9, brand: '신선설농탕', title: '고기 설렁탕', src: '9.jpg', price: '7200',sale: '15',desc:'뽀얀 국물 속 진한 매력(양지 포함)'},
            {item_no: 10, brand: '강남면옥', title: '갈비탕', src: '10.jpg', price: '11900',sale: '0',desc:''},
            {item_no: 11, brand: '외할머니댁', title: '감자탕', src: '11.jpg', price: '9000',sale: '0',desc:'뜨끈한 속푸이 해장국'},
            {item_no: 12, brand: '강창구찹쌀진순대', title: '찹쌀 진순대국', src: '12.jpg', price: '4900',sale: '0',desc:'얼큰한 국물에 담긴 진한 풍미'}
    
        ],

        // 밀키트·메인요리 main
        [
            {item_no: 1, brand: 'Kurly\'s', title: '탱글탱글 국탕용 종합 어묵', src: '1.jpg', price: '3300',sale: '0',desc:'각양각색 어묵으로 완성하는 어묵탕'},
            {item_no: 2, brand: '이연복의 목란', title: '짬뽕 2인분', src: '2.jpg', price: '13200',sale: '2',desc:'매콤한 불맛이 담긴 한 그릇'},
            {item_no: 3, brand: '마이하노이', title: '고기폭탄쌀국수', src: '3.jpg', price: '6900',sale: '0',desc:'신사동 가로수길, 하노이식 정통 쌀국수 집'},
            {item_no: 4, brand: '전주 베테랑', title: '칼국수', src: '4.jpg', price: '5600',sale: '0',desc:'베테랑의 대표 메뉴를 집에서'},
            {item_no: 5, brand: '에머이', title: '소고기 쌀국수 키트(2인분)', src: '5.jpg', price: '9800',sale: '0',desc:'간편하게 즐기는 현지의 맛'},
            {item_no: 6, brand: '한팟', title: '치즈 부대찌개 1858g(냉장)', src: '6.jpg', price: '10500',sale: '7',desc:'콩나물, 치즈와 2인용으로 돌아온'},
            {item_no: 7, brand: 'Kurly\'s', title: '간편하게 바삭, 통등심 돈까스', src: '7.jpg', price: '5700',sale: '0',desc:'씹는 맛이 살아있는 무항생제 통드심 돈까스'},
            {item_no: 8, brand: 'Mr.쭈꾸미', title: '주꾸미 볶음 2종', src: '8.jpg', price: '8900',sale: '0',desc:'취향대로 볶아 먹는 매콤한 별미'},
            {item_no: 9, brand: '베탄마켓', title: '감바스 알 아히요', src: '9.jpg', price: '8500',sale: '20',desc:'한 팩으로 완성하는 일품 새우 요리'},
            {item_no: 10, brand: 'Kurly\'s', title: '간편하게 바삭,유린기', src: '10.jpg', price: '7500',sale: '0',desc:'집에서 만끽하는 근사한 중식 한상 (소스포함)'},
        ],
        // 밑반찬 side
        [
            {item_no: 1, brand: 'Kurly\'s', title: '바삭하게 볶은 돌김자반', src: '1.jpg', price: '2200',sale: '0',desc:'식감이 살아있는 국산 돌김자반'},
            {item_no: 2, brand: '아삭한컵', title: '코울슬로 100g', src: '2.jpg', price: '1200',sale: '20',desc:'산뜻하게 입맛 돋워줄 컵샐러드'},
            {item_no: 3, brand: '아삭한컵', title: '코울슬로 100g', src: '3.jpg', price: '1200',sale: '20',desc:'간편히 즐기는 새콤달콤 아삭한 매력'},
            {item_no: 4, brand: '풀무원', title: '무쌈 3종', src: '4.jpg', price: '2700',sale: '0',desc:'새콤한 모쌈의 색다른 변신'},
            {item_no: 5, brand: '진가네반찬', title: '묶음 반찬 세트 9종', src: '5.jpg', price: '8500',sale: '8',desc:'간편하게 골라 매일 즐기는 반찬'},
            {item_no: 6, brand: '진가네반찬', title: '순한 진미채볶음', src: '6.jpg', price: '3500',sale: '0',desc:'반찬계의 영원한 스테디셀러'},
            {item_no: 7, brand: '풀무원', title: '백색 김밥 단무지', src: '7.jpg', price: '3200',sale: '0',desc:'무농약 무로 만든 하얀 단무지'},
            {item_no: 8, brand: '정미경키친', title: '반찬 3종 세트 (건곤드레나 & 시래기나물 & 건취나물)', src: '8.jpg', price: '8100',sale: '0',desc:'간편하게 해결하는 한끼 반찬'},
            {item_no: 9, brand: '누리웰', title: '비빔 반숙 계란장', src: '9.jpg', price: '3900',sale: '0',desc:'간편하게 즐기는 짜지않고 고소한 계란장'},
            {item_no: 10, brand: '하선정', title: '김밥 단무지', src: '10.jpg', price: '2180',sale: '0',desc:'맛있는 김밥을 위한 필수 재료'},
        ],
        // 김치·젓갈·장류 kimchi
        [
            {item_no: 1, brand: 'Kurly\'s', title: '시원한 배추김치', src: '1.jpg', price: '10800',sale: '15',desc:'횡성한우 사골육수의 깊은 감칠맛'},
            {item_no: 2, brand: '농협풍산김치', title: '맛김치 800g', src: '2.jpg', price: '7500',sale: '0',desc:'먹기 좋게 썬 간편 김치'},
            {item_no: 3, brand: '탐나는 밥상', title: '오징어젓갈', src: '3.jpg', price: '6000',sale: '0',desc:'국산 오징어가 아낌없이 들어간 오징어젓갈'},
            {item_no: 4, brand: '피코크', title: '조선호텔 포기김치 3kg', src: '4.jpg', price: '28900',sale: '0',desc:'빼놓을 수 없는 개운한 감칠맛'},
            {item_no: 5, brand: '비비고', title: '우리아이 한입 백김치', src: '5.jpeg', price: '3580',sale: '0',desc:'아이를 위한 김치! 국내산 원재료와 특허받은 김치유산균'},
            {item_no: 6, brand: '동광젓갈', title: '새우젓', src: '6.jpg', price: '4800',sale: '0',desc:'국산 새우젓과 천일염을 사용한'},
            {item_no: 7, brand: '마켓컬리X종가집', title: '배추속 겉절이', src: '7.jpg', price: '9900',sale: '5',desc:'갓 무친 신선함 그대로'},
            {item_no: 8, brand: 'Kurly\'s', title: '개운한 파김치', src: '8.jpg', price: '9900',sale: '15',desc:'국내산 쪽파에 명인의 비법을 더해 완성한'},
            {item_no: 9, brand: '동광젓갈', title: '어리굴젓', src: '9.jpg', price: '5500',sale: '0',desc:'수확 직후 냉장 발효한 생굴로 만들어 부드러운 식감'},
            {item_no: 10, brand: '모현상회', title: '간장 생연어장 200g (냉장)', src: '10.jpg', price: '8900',sale: '6',desc:'깊은 간장이 적당히 배어든'},
            
        ],
        // 두부·어묵·부침개 bean
        [
            {item_no: 1, brand: '부침명장', title: '한입아삭 김치전', src: '1.jpg', price: '4080',sale: '0',desc:'살짝 구워서 완성하는 간편한 전 요리'},
            {item_no: 2, brand: 'Kurly\'s', title: '탱글탱글 국탕용 종합 어묵', src: '2.jpg', price: '3300',sale: '0',desc:'각양각색 어묵으로 완성하는 어묵탕'},
            {item_no: 3, brand: '고래사', title: '스페셜 어묵 4종', src: '3.jpg', price: '2800',sale: '0',desc:'쫄깃한 어육의 속을 꽉 채운'},
            {item_no: 4, brand: '종가집', title: '국산콩 두부 반모 200g', src: '4.jpg', price: '2200',sale: '0',desc:'남김없이 활용하는 반모 두부'},
            {item_no: 5, brand: '풀무원', title: '두부면 2종', src: '5.jpg', price: '2600',sale: '6',desc:'식물성 단백질이 듬뿍 담긴 이색 면'},
            {item_no: 6, brand: '청해두부', title: '토종콩 두부 & 순두부', src: '6.jpg', price: '3000',sale: '0',desc:'첨가제 없이 만든 국산콩 두부 & 순두부'},
            {item_no: 7, brand: 'Kurly\'s', title: '쫄깃쫄깃 사각 어묵', src: '7.jpg', price: '2200',sale: '0',desc:'특유의 쫄깃 고소한 매력이 듬뿍'},
            {item_no: 8, brand: '맑은물에', title: '참좋은 국산콩 순두부', src: '8.jpg', price: '1500',sale: '0',desc:'부드럽고 고소한 두부'},
            {item_no: 9, brand: '맛있게 한끼', title: '국산콩 두부 (찌개용)', src: '9.jpg', price: '1900',sale: '0',desc:'보글보글 찌개에 넣는 고소한 두부'},
            {item_no: 10, brand: '풀무원', title: '두부텐더', src: '10.jpg', price: '7980',sale: '0',desc:'고기도 부럽지 않은 든든한 매력'},
            {item_no: 11, brand: '김구원선생', title: '전통 두부 300g', src: '11.jpg', price: '2800',sale: '0',desc:'국산콩 100% (1모/300g)'},
        ],
        // 베이컨·햄·통조림 ham
        [
            {item_no: 1, brand: '더건강한', title: '샌드위치 햄', src: '1.jpg', price: '2180',sale: '0',desc:'그대로 먹어도 맛있는'},
            {item_no: 2, brand: 'Better me', title: '닭가슴살 소시지 3종', src: '2.jpg', price: '1800',sale: '0',desc:'무항생제 닭가슴살을 이용한 소시지'},
            {item_no: 3, brand: 'CJ프레시웨어', title: '훈제오리', src: '3.jpg', price: '4900',sale: '0',desc:'간편하게 데워 먹는 오리고기 (1팩 200g)'},
            {item_no: 4, brand: 'Kurly\'s', title: '한돈 삼겹 베이컵', src: '4.jpg', price: '3700',sale: '0',desc:'무항생제 한돈 삽겸사르이 고소한 풍미 그대로'},
            {item_no: 5, brand: '존쿡 델리미트', title: '델리미트 100g 4종', src: '5.jpg', price: '5280',sale: '23',desc:'풍미가득 샌드위치를 위한 햄'},
            {item_no: 6, brand: '존쿡 델리미트', title: '고소한 비엔나 소시지 255g', src: '6.jpg', price: '3880',sale: '0',desc:'들기름을 넣어 고소한 비엔나 소시지(255g/봉)'},
            {item_no: 7, brand: '오뗄블랙라벨', title: '전지  베이컨', src: '7.jpg', price: '2980',sale: '0',desc:'담백하게 즐기는 앞다리살 베이컨!'},
            {item_no: 8, brand: '오뗄블랙라벨', title: '제주돼지로 만든 비엔나 소시지 250g', src: '8.jpg', price: '2900',sale: '0',desc:'제주돼지로 만든 비엔나 소시지'},
            {item_no: 9, brand: '더건강한', title: '그릴 김밥햄', src: '9.jpg', price: '4300',sale: '0',desc:'간편하게 활용하는 도톰한 햄'},
            {item_no: 10, brand: '더오담', title: '훈제오리 400g', src: '10.jpg', price: '8980',sale: '0',desc:'무항생제 훈제오리로 만든'},
        ]
    ]


]

// ITEM_LIST[1][0][2].title

const cate_title = ['', '','','','','soup'];
const sec_title = ['Soup_s','main','side','kimchi','bean','ham'];

const img_addr = "img/item/";


// url에서 정보 뽑기 - cate_no, item_no
function get_url_info(key) {
    let url = location.href; 
    // 330.product.html?cate_no=0&item_no=1 

    url = url.split('?') // [ 330.product.html , cate_no=0&item_no=3#review ] 
      
    if(url.length > 1) {
        url = url[1] // cate_no=0&item_no=3#review
        url = url.split("#") // [cate_no=0&item_no=3 , review]
        url = url[0].split("&") // [cate_no=0  ,  item_no=3]
        for(let i=0; i< url.length; i++) {
            let tmp_url = url[i].split("=") // i=0일때 [cate_no , 0]
                                            // i=1일때 [item_no , 3]
            if(key == tmp_url[0]) {
                return tmp_url[1];
            }
        }
        return null;
    }
    else {
        return null
    }
}


// // url에서 정보 뽑기 - cate_no, item_no
// function get_url_info(key) {
//     let url = location.href; // 330.product.html?cate_no=0&item_no=1 

//     url = url.split('?') // [ 330.product.html , cate_no=0&item_no=1 ] 
    
//     if(url.length > 1) {
//         url = url[1] // cate_no=0&item_no=1
//         url = url.split("&") // [cate_no=0  , item_no=1]

//         for(let i=0; i< url.length; i++) {
//             let tmp_url = url[i].split("=") // [cate_no , 0]

//             if(key == tmp_url[0]) {
//                 return tmp_url[1];
//             }
//         }
//         return null;
//     }
//     else {
//         return null
//     }
// }
