const ITEM_LIST = [
    // 아이스크림
    [
        {page_no: '0', item_no:1, src: '01-name.png, 01-1.png, 01-2.png', type:'ice_cream', title: '그레이스 모카칩', title_en: 'Grace mocha chip', desc: '진한 모카의 풍미가 가득한 아이스크림과 달콤한 초콜릿칩이 조화를 이룬 아이스크림', color:'#ddf2bf, #c5f087', nutrient: '100, 265, 24, 4, 12, 65', allergy:'우유, 계란, 대두', with: '시나몬 크로플, 진저&파인애플 티에이트'}, 

        {page_no: '0', item_no:2, src: '02-name.png, 02-1.png, 02-2.png', type:'ice_cream', title: '인투더 망고', title_en: 'Into the mango', desc: '알폰소망고 퓨레 40% 함유', color:'#c8e9f1, #8fe1f5', nutrient: '100, 150, 31, 1, 9, 0', allergy:'-', with: '프리미엄 크로와상, 캐모마일 블렌딩티'}, 

        {page_no: '0', item_no:3, src: '03-name.png, 03-1.png, 03-2.png', type:'ice_cream', title: '아몬드 봉봉쇼', title_en: 'Almond Bon Bon Sho', desc: '달콤한 초콜릿이 코팅된 아몬드의 바삭바삭한 즐거움', color:'#f7f6c7, #f8f579', nutrient: '100, 260, 24, 3, 9, 40', allergy:'우유, 대두', with: '크로와플 - 기본, 카라멜 마끼야또 - HOT'}, 

        {page_no: '0', item_no:4, src: '04-name.png, 04-1.png, 04-2.png', type:'ice_cream', title: '그린티 마일드', title_en: 'Green tea mild', desc: '고소한 곡물 풍미와 쌉싸름한 녹차의 조합', color:'#ffc6d8, #ff8db1', nutrient: '100, 230, 19, 4, 14, 45', allergy:'우유, 계란', with: '크로와플 - 메이플, 카페라떼 - HOT'}, 

        {page_no: '0', item_no:5, src: '05-name.png, 05-1.png, 05-2.png', type:'ice_cream', title: '요거요거 블루베리', title_en: 'Yogurt blueberries', desc: '깔끔한 요구르트 아이스크림에 블루베리 시럽이 마블', color:'#c3eed9, #8df9c4', nutrient: '100, 170, 24, 3, 5, 40', allergy:'우유, 대두', with: '흑당 크로플, 레몬 에이드'}, 

        {page_no: '0', item_no:6, src: '06-name.png, 06-1.png, 06-2.png', type:'ice_cream', title: '클래식 밀크', title_en: 'Classic milk', desc: '우유 본연의 맛을 느낄 수 있는 제품', color:'#ffd8c5, #fda57a', nutrient: '100, 180, 18, 4, 8, 75', allergy:'우유, 계란', with: '프리미엄 크로와상, 샤인머스캣 에이드'}, 

        {page_no: '0', item_no:7, src: '07-name.png, 07-1.png, 07-2.png', type:'ice_cream', title: '초코 퍼지 브라우니', title_en: 'Chocolate fuzzy brownie', desc: '진한 초코퍼지와 브라우니의 달콤한 만남', color:'#ddd1eb, #ca9dff', nutrient: '100, 190, 21, 3, 10, 65', allergy:'우유, 계란, 대두, 밀', with: '끼리 치즈 크로플, 카페모카 - HOT' }

    ],

    // 디저트
    [
        {page_no: '1', item_no:1, src: '01-name.png, 01-1.png, 01-2.png', type:'dessert', title: '흑당 크로플', title_en: 'Black sugar croiffle', desc: '흑설탕 코팅으로 구워 달콤하고 촉촉한 프리미엄 크로플', color:'#c8e9f1, #8fe1f5', nutrient: '80, 284, 15, 5, 8, 233', allergy:'우유, 계란, 밀', with: '요거요거 블루베리, 레몬 에이드'}, 

        {page_no: '1', item_no:2, src: '02-name.png, 02-1.png, 02-2.png', type:'dessert', title: '시나몬 크로플', title_en: 'Cinnamon croffle', desc: '흑설탕 코팅으로 구워 시나몬 파우더를 뿌린 달콤 쌉싸름한 프리미엄 크로플', color:'#ffe0e0, #ff9c9c', nutrient: '80, 285, 15, 5, 8, 233', allergy:'우유, 계란, 밀', with: '그레이스 모카칩, 진저&파인애플 티에이트'}, 

        {page_no: '1', item_no:3, src: '03-name.png, 03-1.png, 03-2.png', type:'dessert', title: '끼리 치즈 크로플', title_en: 'Kiri cheese croiffle', desc: '흑설탕 코팅으로 구워 끼리 크림치즈와 버터 필링을 스프레드한 프리미엄 크로플', color:'#f7f6c7, #f8f579', nutrient: '110, 365, 16, 8, 12, 378', allergy:'우유, 계란, 밀', with: '초코 퍼지 브라우니, 카페모카 - HOT'}, 

        {page_no: '1', item_no:4, src: '04-name.png, 04-1.png, 04-2.png', type:'dessert', title: '브라운 치즈 크로플', title_en: 'Brown cheese croiffle', desc: '흑설탕 코팅으로 구워 캐러멜라이징 노르웨이 전통 치즈를 토핑한 프리미엄 크로플', color:'#d1ffc8, #9cfe88', nutrient: '85, 305, 16, 6, 9, 284', allergy:'우유, 계란, 밀', with: '그린티 마일드, 아메리카노 - HOT'}, 

        {page_no: '1', item_no:5, src: '05-name.png, 05-1.png, 05-2.png', type:'dessert', title: '프리미엄 크로와상', title_en: 'Premium croissant', desc: '바삭하고 부드러운 100% 퓨어버터 프랑스산 프리미엄 크로와상', color:'#ffd8c5, #fda57a', nutrient: '40, 144, 2, 3, 5, 164', allergy:'우유, 계란, 밀', with: '클래식 밀크, 샤인머스캣 에이드'}, 

        {page_no: '1', item_no:6, src: '06-name.png, 06-1.png, 06-2.png', type:'dessert', title: '크로와플 - 기본', title_en: 'Croissant waffle - basic', desc: '프리미엄 크로와상을 와플기계로 구운 바삭하고 쫀득한 식감의 디저트', color:'#c3eed9, #8df9c4', nutrient: '40, 144, 2, 3, 5, 164', allergy:'우유, 계란, 밀', with: '아몬드 봉봉쇼, 카라멜 마끼야또 - HOT'}, 

        {page_no: '1', item_no:7, src: '07-name.png, 07-1.png, 07-2.png', type:'dessert', title: '크로와플 - 메이플', title_en: 'Croissant waffle - maple', desc: '와플기계로 구운 프리미엄 크로와플과 달콤한 메이플시럽이 어우러진 디저트', color:'#ffc6d8, #ff8db1', nutrient: '44, 156, 5, 3, 5, 168', allergy:'우유, 계란, 밀', with: '그린티 마일드, 카페라떼 - HOT'},

        {page_no: '1', item_no:8, src: '08-name.png, 08-1.png, 08-2.png', type:'dessert', title: '크로와플 - 블루베리', title_en: 'Croissant waffle - blueberries', desc: '와플기계로 구운 프리미엄 크로와플과 상큼한 블루베리잼이 어우러진 디저트', color:'#ddd1eb, #ca9dff', nutrient: '44, 152, 4, 3, 5, 166', allergy:'우유, 계란, 밀', with: '클래식 밀크, 리얼초콜릿'},

        {page_no: '1', item_no:8, src: '09-name.png, 09-1.png, 09-2.png', type:'dessert', title: '그린티 아포가토', title_en: 'Green tea affogato', desc: '녹차 아이스크림에 진한 에스프레소를 얹어 먹는 아이스크림 대표 디저트', color:'#f7f1d4, #ffea82', nutrient: '171, 425, 36, 9, 20, 72', allergy:'우유, 계란', with: '브라운 치즈 크로플, 아메리카노 - HOT'}
    ],

    // 음료
    [
        {page_no: '2', item_no:1, src: '01-name.png, 01-1.png, 01-2.png', type:'drink', title: '샤인머스캣 에이드', title_en: 'Shine musket ade', desc: '샤인머스캣 과육이 그대로 살아있는 달콤산뜻한 아이스 음료', color:'#f7f6c7, #f8f579', nutrient: '502, 171, 41, 0, 0, 22', allergy:'-', with: '그레이스 모카칩, 크로와플 - 블루베리' },
        {page_no: '2', item_no:2, src: '02-name.png, 02-1.png, 02-2.png', type:'drink', title: '레드자몽 에이드', title_en: 'Red grapefruit ade', desc: '레드자몽 과육이 그대로 살아있는 새콤달콤한 아이스 음료', color:'#ffc6d8, #ff8db1', nutrient: '496, 136, 32, 1, 0, 22', allergy:'-', with: '아몬드 봉봉쇼, 프리미엄 크로와상'},  
        {page_no: '2', item_no:3, src: '03-name.png, 03-1.png, 03-2.png', type:'drink', title: '레몬 에이드', title_en: 'Lemon ade', desc: '레몬 과육이 그대로 살아있는 진한 레몬의 맛을 극대화시킨 상큼시원한 아이스 음료', color:'#c3eed9, #8df9c4', nutrient: '504, 171, 41, 0, 0, 22', allergy:'-', with: '요거요거 블루베리, 크로와플 - 메이플' },
        {page_no: '2', item_no:4, src: '04-name.png, 04-1.png, 04-2.png', type:'drink', title: '비트&자몽 티에이드', title_en: 'Beat & grapefruit tea ade', desc: '달콤 상큼, 슈퍼푸드 가득한 스트레스 완화 릴렉싱 허브 티에이드', color:'#ffd8c5, #fda57a', nutrient: '330, 124, 26, 0, 0, 0', allergy:'-', with: '초코 퍼지 브라우니, 시나몬 크로플' },
        {page_no: '2', item_no:5, src: '05-name.png, 05-1.png, 05-2.png', type:'drink', title: '진저&파인애플 티에이트', title_en: 'Ginger & pineapple tea ade', desc: '달콤 산뜻, 활력 가득 리프레쉬 과채 블랜딩 허브 티에이드', color:'#ddd1eb, #ca9dff', nutrient: '330, 125, 25, 0, 0, 0', allergy:'-', with: '인투더 망고, 흑당 크로플'},    
        {page_no: '2', item_no:6, src: '06-name.png, 06-1.png, 06-2.png', type:'drink', title: '리얼초콜릿', title_en: 'Real chocolate', desc: '초콜릿 전문 브랜드 길리안의 레시피를 적용한 “깊고 풍부한 프리미엄 리얼 초콜릿 음료”', color:'#c8e9f1, #8fe1f5', nutrient: '370, 274, 28, 7, 5, 187', allergy:'우유', with: '그린티 마일드, 브라운 치즈 크로플' },
        {page_no: '2', item_no:7, src: '07-name.png, 07-1.png, 07-2.png', type:'drink', title: '루이보스 블렌딩티', title_en: 'Louis bose blending tea', desc: '루이보스만의 부드럽고 달콤한 풍미', color:'#ddf2bf, #c5f087', nutrient: '250, 5, 0, 0, 0, 0', allergy:'-', with: '클래식 밀크, 크로와플 - 기본' },
        {page_no: '2', item_no:8, src: '08-name.png, 08-1.png, 08-2.png', type:'drink', title: '캐모마일 블렌딩티', title_en: 'Chamomile blending tea', desc: '달콤, 향긋, 상큼한 풍미의 캐모마일 블렌딩티', color:'#fbdbab, #fcbf64', nutrient: '250, 5, 0, 0, 0, 0', allergy:'-', with: '클래식 밀크, 끼리 치즈 크로플' }      
    ],

    // 커피
    [
        {page_no: '3', item_no:1, src: '01-name.png, 01-1.png, 01-2.png', type:'coffee', title: '카페모카 - HOT', title_en: 'Cafe mocha - HOT', desc: '진한 에스프레소에 초코시럽을 더해 달콤함을 느낄 수 있는 커피', color:'#ffc6d8, #ff8db1', nutrient: '290, 245, 25, 7, 4.9, 160', allergy:'우유', with: '그린티 마일드, 프리미엄 크로와상' },
        {page_no: '3', item_no:2, src: '02-name.png, 02-1.png, 02-2.png', type:'coffee', title: '카페모카 - ICE', title_en: 'Cafe mocha - ICE', desc: '진한 에스프레소에 초코시럽을 더해 달콤함을 느낄 수 있는 커피', color:'#ffd8c5, #fda57a', nutrient: '350, 187, 21, 4, 2.7, 115', allergy:'우유', with: '그린티 마일드, 프리미엄 크로와상' },

        {page_no: '3', item_no:3, src: '03-name.png, 03-1.png, 03-2.png', type:'coffee', title: '카라멜 마끼야또 - HOT', title_en: 'Caramel macchiato - HOT', desc: '달콤한 카라멜시럽과 부드러운 우유가 에스프레소와 어우러진 커피', color:'#c3eed9, #8df9c4', nutrient: '285, 228, 26, 7, 6, 144', allergy:'우유', with: '요거요거 블루베리, 크로와플 - 기본' },
        {page_no: '3', item_no:4, src: '04-name.png, 04-1.png, 04-2.png', type:'coffee', title: '카라멜 마끼야또 - ICE', title_en: 'Caramel macchiato - ICE', desc: '달콤한 카라멜시럽과 부드러운 우유가 에스프레소와 어우러진 커피', color:'#f7f1d4, #ffea82', nutrient: '345, 169, 22, 4, 3.6, 99', allergy:'우유', with: '요거요거 블루베리, 크로와플 - 기본' },

        {page_no: '3', item_no:5, src: '05-name.png, 05-1.png, 05-2.png', type:'coffee', title: '카페라떼 - HOT', title_en: 'Cafe latte - HOT', desc: '진한 풍미를 간직한 에스프레소에 우유를 넣어 부드럽게 즐길 수 있는 커피', color:'#ddd1eb, #ca9dff', nutrient: '285, 147, 10, 7, 6, 116', allergy:'우유', with: '클래식 밀크, 시나몬 크로플' },
        {page_no: '3', item_no:6, src: '06-name.png, 06-1.png, 06-2.png', type:'coffee', title: '카페라떼 - ICE', title_en: 'Cafe latte - ICE', desc: '진한 에스프레소와 차가운 우유가 어우러진 부드러운 커피', color:'#c8e9f1, #8fe1f5', nutrient: '385, 79, 6, 4, 2.9, 58', allergy:'우유', with: '클래식 밀크, 시나몬 크로플' },

        {page_no: '3', item_no:7, src: '07-name.png, 07-1.png, 07-2.png', type:'coffee', title: '아메리카노 - HOT', title_en: 'Americano - HOT', desc: '진하고 향긋한 에스프레소에 물을 넣어 연하게 마시는 커피', color:'#d1ffc8, #9cfe88', nutrient: '260, 4, 0, 0, 0, 6', allergy:'-', with: '초코 퍼지 브라우니, 흑당 크로플' },
        {page_no: '3', item_no:8, src: '08-name.png, 08-1.png, 08-2.png', type:'coffee', title: '아메리카노 - ICE', title_en: 'Americano - ICE', desc: '향긋한 아메리카노에 얼음을 넣어 시원하게 마시는 커피', color:'#f7f6c7, #f8f579', nutrient: '390, 4, 0, 0, 0, 6', allergy:'-', with: '초코 퍼지 브라우니, 흑당 크로플' },
    ]

]


const menu_array = ['ice_cream', 'dessert', 'drink', 'coffee'];
const title_array = ['ICE CREAM', 'DESSERT', 'DRINK', 'COFFEE'];


// 페이지 정보 넘기기
function page_info (key) {
    let url_info = location.href.split("?")

    if (url_info.length > 1) {
        url_info = url_info[1]
        url_info = url_info.split("#") 
        url_info = url_info[0].split("&")

        for(let i=0; i< url_info.length; i++) {
            let tem_url_info = url_info[i].split('=')

            if (tem_url_info[0] == key) {
                return tem_url_info[1]
            }
        }
        return null;
    }
    else {
        return null
    }
    
}


