
//list
const ITEM_LIST = [
    //초이스 0
    [
        {item_no:1, name:'미스터에그 세트', img:'1.png', name_img:'1.png', mark:'1.png', 
        en_name:'Mr. Egg Set',
        sec:'<미스터에그 + 해쉬브라운 + 아메리카노> 부드러운 스크램블 에그와 브리오쉬, 에그드랍의 특제 소스가 어우러진 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#F593B3'},

        {item_no:2, name:'아메리칸 햄 치즈 세트', img:'2.png', name_img:'2.png', mark:'2.png', 
        en_name:'American Ham Cheese Set',
        sec:'<아메리칸 햄 치즈 + 해쉬브라운 + 아메리카노> 부드러운 스크램블 에그에 담백한 스모크햄, 아메리칸 치즈가 풍미를 더하는 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#FFD8C5'},

        {item_no:3, name:'베이컨 더블 치즈 세트', img:'3.png', name_img:'3.png', mark:'3.png', 
        en_name:'Bacon Double Cheese Set',
        sec:'<베이컨 더블 치즈 + 해쉬브라운 + 아메리카노> 부드러운 스크램블 에그에 베이컨, 아메리칸 치즈가 단짠의 조합을 이루는 에그드랍 베스트 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#F7F6C7'},

        {item_no:4, name:'햄 앤 치즈 프렌치 토스트 세트', img:'4.png', name_img:'4.png', mark:'4.png', 
        en_name:'Ham and Cheese French Toast Set',
        sec:'<햄 앤 치즈 프렌치 토스트 + 해쉬브라운 + 아메리카노> 달콤한 계란 베이스를 듬뿍 적셔 폭신하고 부드럽게 구워 낸 프렌치토스트에 계란 프라이와 스모크햄, 아메리칸 치즈가 풍미를 더하는 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#DDF2BF'},

        {item_no:5, name:'갈릭 베이컨 치즈 세트', img:'5.png', name_img:'5.png', mark:'5.png', 
        en_name:'Garlic Bacon Cheese Set',
        sec:'<갈릭 베이컨 치즈 + 해쉬브라운 + 아메리카노> 갈릭버터를 발라 바삭하게 구운 브리오쉬와 스크램블 에그, 베이컨, 아메리칸 치즈가 어우러져 풍미가 가득한 두터운 매니아 층을 가진 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#C8E9F1'},

        {item_no:6, name:'데리야끼 바베큐 세트', img:'6.png', name_img:'6.png', mark:'6.png', 
        en_name:'Teriyaki BBQ Set',
        sec:'<데리야끼 바베큐 + 해쉬브라운 + 아메리카노> 데리야끼 바베큐 포크에 통째로 올라간 반숙란이 고소함과 촉촉함을 더하는 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#FDCED6'},

        {item_no:7, name:'아보홀릭 세트', img:'7.png', name_img:'7.png', mark:'7.png', 
        en_name:'Avo Holic Set',
        sec:'<아보홀릭 + 해쉬브라운 + 아메리카노> 부드러운 스크램블 에그에 수제 아보카도 소스와 신선한 아보카도가 풍미를 더하는 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#C3EED9'},
        
        {item_no:8, name:'베이컨 딥 치즈 번 세트', img:'8.png', name_img:'8.png', mark:'8.png', 
        en_name:'Bacon Deep Cheese Bun Set',
        sec:'<베이컨 딥 치즈 번 + 해쉬브라운 + 아메리카노> 버터 풍미가 가득한 브리오슈번에 촉촉한 스크램블과 베이컨, 아메리칸 치즈가 들어간 에그 번과 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#F7D1EA'},

        {item_no:9, name:'클럽샌드위치 세트', img:'9.png', name_img:'9.png', mark:'9.png', 
        en_name:'Club Sandwich Set',
        sec:'<클럽샌드위치 + 해쉬브라운 + 아메리카노> 양상추, 베이컨, 토마토와 에그드랍의 특제 소스가 어우러진 베이직한 클럽 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#a3efe9'},

        {item_no:10, name:'치킨클럽샌드위치 세트', img:'10.png', name_img:'10.png', mark:'10.png', 
        en_name:'Chicken Club Sandwich Set',
        sec:'<치킨클럽샌드위치 + 해쉬브라운 + 아메리카노> 신선한 채소, 촉촉한 닭가슴살과 에그드랍의 특제소스가 어우러진 치킨 클럽 샌드위치와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#F4E6E7'},

        {item_no:11, name:'햄 앤 치즈 길거리 토스트 세트', img:'11.png', name_img:'11.png', mark:'11.png', 
        en_name:'Ham and Cheese K-Street Toast Set',
        sec:'<햄 앤 치즈 길거리 토스트 + 해쉬브라운 + 아메리카노> 설탕을 뿌려 바삭하게 구운 브리오슈와 고소한 계란 프라이, 양배추, 스모크햄, 아메리칸 치즈가 풍미를 더하는 한국식 길거리 토스트와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#f2d5b5'},

        {item_no:12, name:'치즈 불고기 길거리 토스트 세트', img:'12.png', name_img:'12.png', mark:'12.png', 
        en_name:'Cheese Bulgogi K-Street Toast Set',
        sec:'<치즈 불고기 길거리 토스트 + 해쉬브라운 + 아메리카노> 설탕을 뿌려 바삭하게 구운 브리오슈와 육즙 가득한 데리야끼 불고기, 계란 프라이, 양배추, 아메리칸 치즈가 풍미를 더하는 한국식 길거리 토스트와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#fce8bd'},

        {item_no:13, name:'아보 베이컨 길거리 토스트 세트', img:'13.png', name_img:'13.png', mark:'13.png', 
        en_name:'Avo Bacon K-Street Toast Set',
        sec:'<아보 베이컨 길거리 토스트 + 해쉬브라운 + 아메리카노> 설탕을 뿌려 바삭하게 구운 브리오슈와 신선한 아보카도, 베이컨, 계란 프라이, 양배추, 아메리칸 치즈가 풍미를 더하는 한국식 길거리 토스트와 고소하고 부드러운 해쉬브라운, 아메리카노를 합리적인 가격으로 즐길 수 있는 세트메뉴', 
        color:'#b4e2cc'},

        {item_no:14, name:'샐러드 1인 세트', img:'14.png', name_img:'14.png', mark:'14.png', 
        en_name:'SALAD SET',
        sec:'<리얼 에그 콥 샐러드 + 오렌지 에이드> 신선한 재료가 다양하게 어우러진 리얼 콥 샐러드와 상큼한 오렌지 에이드를 할인 된 가격으로 즐길 수 있는 세트메뉴', 
        color:'#E1E8D5'},

        {item_no:15, name:'샌드위치 & 해쉬 & 반했드랍 2인 세트', img:'15.png', name_img:'15.png', mark:'15.png', 
        en_name:'Sandwich & Hash & Half Boiled egg Set for 2 people',
        sec:'<갈릭 베이컨 치즈 + 햄 앤 치즈 길거리 토스트 + 해쉬브라운 2개 + 반했드랍(2개입) + 아메리카노 2잔> 갈릭 베이컨 치즈와 햄 앤 치즈 길거리 토스트, 고소한 해쉬브라운과 상하농원의 촉촉한 반숙란을 아메리카노와 함께 할인 된 가격으로 즐길 수 있는 2인 세트메뉴', 
        color:'#E1E8D5'},

        {item_no:16, name:'샌드위치 & 해쉬 & 반했드랍 & 샐러드 3인 세트', img:'16.png', name_img:'16.png', mark:'16.png', 
        en_name:'Sandwich & Hash & Half Boiled egg & Salad',
        sec:'<갈릭 베이컨 치즈 + 햄 앤 치즈 길거리 토스트 + 아메리칸 햄 치즈 + 해쉬브라운 2개 + 반했드랍(2개입) + 리얼 에그 콥 샐러드 + 아메리카노 3잔> 갈릭 베이컨 치즈와 햄 앤 치즈 길거리 토스트, 아메리칸 햄 치즈를 고소한 해쉬브라운과 상하농원의 촉촉한 반숙란, 샐러드 및 아메리카노와 함께 할인 된 가격으로 즐길 수 있는 3인 세트메뉴', 
        color:'#E1E8D5'}

    ],
    //샌드위치 1
    [
        {item_no:1, name:'핑크베리블라썸', img:'img0.png', name_img: 'name0.png', mark:'', img2:'0.png',  img3: '0.png',
        en_name:'Pink Berry Blossom',
        sec:'벚꽃처럼 피어난 에그드랍표 딸기크림 한 입으로 봄을 만끽해요 해당 메뉴는 시즌 한정 메뉴로, 조기 품절이 될 수 있습니다.',
        color:'#FFEBEF'
    },
        {item_no:2, name:'베이컨 딥 치즈 번', img:'img1.png', name_img: 'name1.png', mark:'mark1.png', img2:'1.png',  img3: '1.png',
        en_name:'Bacon Deep Cheese Bun',
        sec:'버터 풍미가 가득한 브리오슈번에 촉촉한 스크램블과<br>베이컨, 아메리칸 치즈가 들어간 에그 번',
        color:'#F7D1EA'
    },
        {item_no:3, name:'아보홀릭', img:'img2.png', name_img: 'name2.png', mark:'mark2.png', img2:'2.png',  img3: '2.png',
        en_name:'Avo Holic',
        sec:'부드러운 스크램블 에그에 수제 아보카도소스와<br>신선한 아보카도가 풍미를 더하는 샌드위치',
        color:'#C3EED9'
    },
        {item_no:4, name:'햄 앤 치즈 프렌치토스트', img:'img3.png', name_img: 'name3.png', mark:'mark3.png', img2:'3.png',  img3: '3.png',
        en_name:'Ham & Cheese French Toast',
        sec:'달콤한 계란 베이스를 듬뿍 적셔 폭신하고 부드럽게 구워 낸 프렌치토스트에<br>계란 프라이와 스모크햄, 아메리칸 치즈가 풍미를 더하는 샌드위치',
        color:'#DDF2BF'
    },
        {item_no:5, name:'갈릭 베이컨 치즈', img:'img4.png', name_img: 'name4.png', mark:'mark4.png', img2:'4.png',  img3: '4.png',
        en_name:'Garlic Bacon Cheese',
        sec:'갈릭버터를 발라 바삭하게 구운 브리오쉬와 스크램블 에그, 베이컨, 아메리칸 치즈가<br>어우러져 풍미가 가득한 두터운 매니아 층을 가진 샌드위치',
        color:'#C8E9F1'
    },
        {item_no:6, name:'데리아끼 바베큐', img:'img5.png', name_img: 'name5.png', mark:'mark5.png', img2:'5.png',  img3: '5.png',
        en_name:'Teriyaki BBQ',
        sec:'데리야끼 바베큐 포크에 통째로 올라간 반숙란이<br>고소함과 촉촉함을 더하는 샌드위치',
        color:'#FDCED6'
    },
        {item_no:7, name:'아보 베이컨 길거리 토스트', img:'img6.png', name_img: 'name6.png', mark:'mark6.png', img2:'6.png',  img3: '6.png',
        en_name:'Avo Bacon K-Street Toast',
        sec:'설탕을 뿌려 바삭하게 구운 브리오슈와 신선한 아보카도, 베이컨, 계란 프라이, 양배추, 아메리칸 치즈가 풍미를 더하는 한국식 길거리 토스트',
        color:'#b4e2cc'
    },
        {item_no:8, name:'베이컨 더블 치즈', img:'img7.png', name_img: 'name7.png', mark:'mark7.png', img2:'7.png',  img3: '7.png',
        en_name:'Bacon Double Cheese',
        sec:'부드러운 스크램블 에그에 베이컨, 아메리칸 치즈가<br> 단짠의 조합을 이루는 에그드랍 베스트 샌드위치',
        color:'#F7F6C7'
    },
        {item_no:9, name:'치즈 불고기 길거리 토스트', img:'img8.png', name_img: 'name8.png', mark:'mark8.png', img2:'8.png',  img3: '8.png',
        en_name:'Cheese Bulgogi K-Sreet Toast',
        sec:'설탕을 뿌려 바삭하게 구운 브리오슈와 육즙 가득한 데리야끼 불고기, 계란 프라이, 양배추, 아메리칸 치즈가 풍미를 더하는 한국식 길거리 토스트',
        color:'#fce8bd'
    },
        {item_no:10, name:'아메리칸 햄 치즈', img:'img9.png', name_img: 'name9.png', mark:'mark9.png', img2:'9.png',  img3: '9.png',
        en_name:'American Ham Cheese',
        sec:'부드러운 스크램블 에그에 담백한 스모크햄,<br> 아메리칸 치즈가 풍미를 더하는 샌드위치',
        color:'#FFD8C5'
    },
        {item_no:11, name:'햄 앤 치즈 길거리 토스트', img:'img10.png', name_img: 'name10.png', mark:'mark10.png', img2:'10.png',  img3: '10.png',
        en_name:'Ham & Cheese K-Street Toast',
        sec:'설탕을 뿌려 바삭하게 구운 브리오슈와 고소한 계란 프라이, 양배추, 스모크햄, 아메리칸 치즈가 풍미를 더하는 한국식 길거리 토스트',
        color:'#f2d5b5'
    },
        {item_no:12, name:'클럽샌드위치', img:'img11.png', name_img: 'name11.png', mark:'mark11.png', img2:'11.png',  img3: '11.png',
        en_name:'Club Sandwich',
        sec:'양상추, 베이컨, 토마토와 에그드랍의 특제 소스가 어우러진 베이직한 클럽 샌드위치',
        color:'#F4E6E7'
    },
        {item_no:13, name:'미스터 에그', img:'img12.png', name_img: 'name12.png', mark:'mark12.png', img2:'12.png',  img3: '12.png',
        en_name:'Mr. Egg',
        sec:'부드러운 스크램블 에그와 브리오쉬,<br> 에그드랍의 특제 소스가 어우러진 베이직 샌드위치',
        color:'#F593B3'
    }
    ],
    //토스트 2
    [
        {item_no:1, name:'프렌치 토스트', img:'1.png', name_img:'1.png', img3:'1.png', mark:'' ,
        en_name:'French toast',
        sec:'겉은 바삭하고 속은 촉촉한 에그드랍 프렌치 토스트',
        color:'#F7E0B9'
    },
        {item_no:2, name:'갈릭버터 토스트', img:'2.png', name_img:'2.png', img3:'2.png', mark:'' ,
        en_name:'Garlic butter',
        sec:'마늘과 버터의 풍미가 살아있는 에그드랍 한 장 식빵',
        color:'#F7E0B9'
    },
        {item_no:3, name:'브리오슈 토스트', img:'3.png', name_img:'3.png', img3:'3.png', mark:'' ,
        en_name:'BRIOCHE',
        sec:'갓 구워 따끈따끈하고 부드러운 에그드랍 한 장 식빵',
        color:'#F7E0B9'
    }
    ],
    //포켓브래드 3
    [
        {item_no:1, name:'에그 앤 잼', img:'1.png', name_img:'1.png', img3:'1.png', mark:'1.png',
        en_name:'Egg & Jam',
        sec:'한국사람이 좋아하는 딸기잼 바른 빵 + 계란프라이 + 스모크햄 조합',
        color:'#FEAEBB'
    },
        {item_no:2, name:'갈릭버터 햄 치즈', img:'2.png', name_img:'2.png', img3:'2.png', mark:'2.png',
        en_name:'Garlic butter ham cheese',
        sec:'갈릭버터를 발라 환상적인 맛의 클래식 포켓브레드',
        color:'#D2E3B4'
    },
        {item_no:3, name:'콘 치즈', img:'3.png', name_img:'3.png', img3:'3.png', mark:'3.png',
        en_name:'Corn cheese',
        sec:'찐 옥수수와 치즈를 네모난 포켓 속에 쏙 담아 달달하고 고소한 브레드',
        color:'#F1E4B2'
    },
        {item_no:4, name:'달콤 프렌치 토스트', img:'4.png', name_img:'4.png', img3:'4.png', mark:'4.png',
        en_name:'Sweet French Toast',
        sec:'한 입 베어 물자마자 펼쳐지는 블루베리잼과 크림치즈의 달콤한 향연',
        color:'#E7DAED'
    }
    ],
    //사이드 4
    [
        {item_no:1, name:'해쉬브라운', img:'1.png', name_img:'1.png', mark:'1.png',
        en_name:'Hash Brown',
        sec:'감자를 잘게 썰어 그리들에 노릇노릇하게 구운 고소하고 부드러운 해쉬브라운',
        color:'#ffcdb4'
    },
        {item_no:2, name:'베이컨 체다 해쉬브라운', img:'2.png', name_img:'2.png', mark:'2.png',
        en_name:'Bacon Cheddar HashBrown',
        sec:'진한 체다치즈소스와 상큼한 사워크림에 고소한 베이컨으로 풍미를 더하는 해쉬브라운',
        color:'#f6d0d9'
    },
        {item_no:3, name:'콘치즈 해쉬브라운', img:'3.png', name_img:'3.png', mark:'3.png',
        en_name:'Corn Cheese Hash Brown',
        sec:'특제 콘마요 소스로 맛을 낸 콘치즈를 듬뿍 올린 단짠의 조화가 매력적인 해쉬브라운',
        color:'#fbe7b4'
    },
        {item_no:4, name:'리얼 에그 콥 샐러드', img:'4.png', name_img:'4.png', mark:'4.png',
        en_name:'Real Egg Cobb Salad',
        sec:'촉촉하게 삶은 계란이 듬뿍 들어간 리얼 콥 샐러드',
        color:'#F0FFAA'
    },
        {item_no:5, name:'리얼 치킨 콥 샐러드', img:'5.png', name_img:'5.png', mark:'5.png',
        en_name:'Real Chicken Cobb Salad',
        sec:'부드러운 닭가슴살이 듬뿍 들어간 리얼 콥 샐러드',
        color:'#E0F2C4'
    },
        {item_no:6, name:'리얼 아보카도 콥 샐러드', img:'6.png', name_img:'6.png', mark:'6.png',
        en_name:'Real Avocado Cobb Salad',
        sec:'신선한 채소에 삶은계란, 베이컨, 토마토, 감자, 부드러운 아보카도 등으로 구성된 아보카도 에그 콥 샐러드',
        color:'#E6EDDA'
    }
    ],
    //커피 5
    [
        {item_no:1, name:'(ICE)아메리카노', img:'1.png', name_img:'1.png', mark:'1.png' ,
        en_name:'Americano',
        sec:'최상급 원두와 에그드랍만의 스페셜 블랜딩으로<br>고소하고 진한 풍미와 균형 잡힌 바디감의 에스프레소를<br>부드럽게 즐길 수 있는 커피',
        color:'#F7F6C7'
    },
        {item_no:2, name:'(ICE)카페라떼', img:'2.png', name_img:'2.png', mark:'2.png' ,
        en_name:'Café Latte',
        sec:'진한 에스프레소에 고소한 우유가 더해진 커피',
        color:'#DDF2BF'
    },
        {item_no:3, name:'(ICE)수제라떼', img:'3.png', name_img:'3.png', mark:'3.png' ,
        en_name:'Hand-whisked Latte',
        sec:'수제 거품기로 만든 쫀쫀한 우유거품과 진한 에스프레소,<br>고소한 우유가 어우러진 에그드랍 시그니처 커피',
        color:'#FDCED6'
    },
        {item_no:4, name:'(ICE)다크초콜릿모카', img:'4.png', name_img:'4.png', mark:'4.png' ,
        en_name:'Dark Chocolate Mocha',
        sec:'쌉싸름한 다크 초콜릿과 진한 에스프레소, 우유가 어우러진 커피',
        color:'#FFD8C5'
    },
        {item_no:5, name:'(ICE)바닐라라떼', img:'5.png', name_img:'5.png', mark:'5.png' ,
        en_name:'Vanilla Latte',
        sec:'달콤한 바닐라 시럽과 에스프레소, 우유가 어우러진 커피',
        color:'#F7D1EA'
    },
        {item_no:6, name:'(HOT)아메리카노', img:'6.png', name_img:'6.png', mark:'6.png' ,
        en_name:'Americano',
        sec:'최상급 원두와 에그드랍만의 스페셜 블랜딩으로<br>고소하고 진한 풍미와 균형 잡힌 바디감의 에스프레소를<br>부드럽게 즐길 수 있는 커피',
        color:'#F7F6C7'
    },
        {item_no:7, name:'(HOT)카페라떼', img:'7.png', name_img:'7.png', mark:'7.png' ,
        en_name:'Café Latte',
        sec:'진한 에스프레소에 고소한 우유가 더해진 커피',
        color:'#DDF2BF'
    },
        {item_no:8, name:'(HOT)수제라떼', img:'8.png', name_img:'8.png', mark:'8.png' ,
        en_name:'Hand-whisked Latte',
        sec:'수제 거품기로 만든 쫀쫀한 우유거품과 진한 에스프레소,<br>고소한 우유가 어우러진 에그드랍 시그니처 커피',
        color:'#FDCED6'
    },
        {item_no:9, name:'(HOT)다크초콜릿모카', img:'9.png', name_img:'9.png', mark:'9.png' ,
        en_name:'Dark Chocolate Mocha',
        sec:'쌉싸름한 다크 초콜릿과 진한 에스프레소, 우유가 어우러진 커피',
        color:'#FFD8C5'
    },
        {item_no:10, name:'(HOT)바닐라라떼', img:'10.png', name_img:'10.png', mark:'10.png' ,
        en_name:'Vanilla Latte',
        sec:'달콤한 바닐라 시럽과 에스프레소, 우유가 어우러진 커피',
        color:'#F7D1EA'
    }
    ],
    //드링크 6
    [
        {item_no:1, name:'딸기 에이드', img:'1.png', name_img:'1.png', mark:'' ,
        en_name:'Strawberry Ade',
        sec:'시원하고 상큼한 딸기에이드는 샌드위치 1등 짝꿍',
        color:'#FFEBEF'
    },
        {item_no:2, name:'딸기초코라떼', img:'2.png', name_img:'2.png', mark:'' ,
        en_name:'Strawberry Chocolate Latte',
        sec:'달달 초코라떼에 상큼한 딸기 한 스푼으로 당 충전 끝',
        color:'#FFEBEF'
    },
        {item_no:3, name:'핑크딸기라떼', img:'3.png', name_img:'3.png', mark:'' ,
        en_name:'Pink Strawberry Latte',
        sec:'딸기라떼 한 잔으로 내 입안에 봄이 왔나 봄',
        color:'#FFEAEE'
    },
        {item_no:4, name:'오렌지 썬라이즈', img:'4.png', name_img:'4.png', mark:'4.png' ,
        en_name:'Orange Sunrise',
        sec:'오렌지 썬라이즈',
        color:'#FDCED6'
    },
        {item_no:5, name:'100% 착즙 오렌지 주스', img:'5.png', name_img:'5.png', mark:'5.png' ,
        en_name:'100% Freshly Squeezed Orange Juice',
        sec:'100% 착즙 오렌지 주스',
        color:'#FFD8C5'
    },
        {item_no:6, name:'100% 착즙 블러드 오렌지 주스', img:'6.png', name_img:'6.png', mark:'6.png' ,
        en_name:'100% Freshly Squeezed Blood Orange Juice',
        sec:'100% 착즙 블러드 오렌지 주스',
        color:'#F593B3'
    },
        {item_no:7, name:'레몬 에이드', img:'7.png', name_img:'7.png', mark:'7.png' ,
        en_name:'Lemon Ade',
        sec:'레몬의 상큼함을 가득 담은 시원한 레몬 에이드',
        color:'#F7F6C7'
    },
        {item_no:8, name:'자몽 에이드', img:'8.png', name_img:'8.png', mark:'8.png' ,
        en_name:'Grapefruit Ade',
        sec:'자몽의 상큼함을 가득 담은 시원한 자몽 에이드',
        color:'#FDCED6'
    },
        {item_no:9, name:'오렌지 에이드', img:'9.png', name_img:'9.png', mark:'9.png' ,
        en_name:'Orange Ade',
        sec:'오렌지의 싱그러움을 가득 담은 시원한 오렌지 에이드',
        color:'#FFD8C5'
    },
        {item_no:10, name:'(ICE)신선한 우유', img:'10.png', name_img:'10.png', mark:'10.png' ,
        en_name:'Milk',
        sec:'신선한 우유',
        color:'#C8E9F1'
    },
        {item_no:11, name:'(HOT)신선한 우유', img:'11.png', name_img:'11.png', mark:'11.png' ,
        en_name:'Milk',
        sec:'신선한 우유',
        color:'#C8E9F1'
    },
        {item_no:12, name:'(ICE)제주말차라떼', img:'12.png', name_img:'12.png', mark:'12.png' ,
        en_name:'Jeju Matcha Latte',
        sec:'고소한 우유와 쌉싸름한 제주산 말차가 향긋하게 어우러지는 음료',
        color:'#C3EED9'
    },
        {item_no:13, name:'(HOT)제주말차라떼', img:'13.png', name_img:'13.png', mark:'13.png' ,
        en_name:'Jeju Matcha Latte',
        sec:'고소한 우유와 쌉싸름한 제주산 말차가 향긋하게 어우러지는 음료',
        color:'#C3EED9'
    },
        {item_no:14, name:'(ICE)밀크초코릿', img:'14.png', name_img:'14.png', mark:'14.png' ,
        en_name:'Milk Chocolate',
        sec:'진한 초콜릿 소스가 우유에 부드럽게 녹아있는 음료',
        color:'#F593B3'
    },
        {item_no:15, name:'(HOT)밀크초코릿', img:'15.png', name_img:'15.png', mark:'15.png' ,
        en_name:'Milk Chocolate',
        sec:'진한 초콜릿 소스가 우유에 부드럽게 녹아있는 음료',
        color:'#F593B3'
    }
    ]
]


//페이지1에 swiper

let count_0 = ITEM_LIST[1].length;

for(let i=0; i<count_0; i++) {
    $('.item_box').append(`
        <div class="box swiper-slide">
            <div class="box${i} cover_box">
                <div class="name">${ITEM_LIST[1][i].name}</div>
                <img class="item_name" src="./img/egg_drop/img_slide/name/${ITEM_LIST[1][i].name_img}" alt="">
                <img class="item_mark" src="./img/egg_drop/img_slide/mark/${ITEM_LIST[1][i].mark}" alt="">
                <img class="item_img" src="./img/egg_drop/img_slide/img/${ITEM_LIST[1][i].img}" alt="">
            </div>
        </div>
    `)

    $('.box').eq(i).hover(function(){
        $(this).children('.cover_box').addClass('box_active')
        $(this).find('.item_img').addClass('item_img_active');
        $(this).find('.item_mark').addClass('item_mark_active');

    }, function(){
        $(this).children('.cover_box').removeClass('box_active')
        $(this).find('.item_img').removeClass('item_img_active');
        $(this).find('.item_mark').removeClass('item_mark_active');
    })

}



const EL_ARR = ['choice', 'sandwich','toast', 'pocket','side','coffee','drink'];
const PAGENAME_ARR = ['EGGDROP’s CHOICE', 'SANDWICH', 'TOAST', 'POCKET BREAD', 'SIDE', 'COFFEE', 'DRINK']


// 페이지2 특정 위치에 특정 개수만큼 li(item)들 넣어주기
function load_item(cate, qty) {

    let curr_count = $(`.list_pan > .list_pan_li`).length;

    let last_no = curr_count + qty;

    let limitNo = ITEM_LIST[cate].length; 
    if (last_no > limitNo)
        last_no = limitNo;

    for (let i = curr_count; i < last_no; i++) {
        let tmp = ITEM_LIST[cate][i];

        let cover = "";
        if (tmp.img3 != undefined) {
            cover += `<img class="img100 img2" src="./img/egg_drop/menu_page/${EL_ARR[cate]}/img3/${tmp.img3}" alt="" class="covered_img"> `;
        }

        let tmp_list = `
            <li class="list_pan_li">
                <a href="egg_drop_3.html?cateNo=${cate}&itemNo=${ITEM_LIST[cate][i].item_no}">
                    <img class="img100 img_name" src="./img/egg_drop/menu_page/${EL_ARR[cate]}/name/${tmp.name_img}" alt="">
                    <div class="main_img">
                        <img class="mark" src="./img/egg_drop/menu_page/${EL_ARR[cate]}/mark/${tmp.mark}" alt="">
                        <img class="img100 img1" src="./img/egg_drop/menu_page/${EL_ARR[cate]}/img/${tmp.img}" alt="">
                        ${cover}
                        <div class="name">${tmp.name}</div>
                    </div>
                </a>
            </li>
        `;
        $(`.list_pan`).append(tmp_list);
    }
}

// url에서 내가 필요한 정보의 값을 얻어오기

function get_info_from_url(keyword) { // cateNo, itemNo
    let url = location.href; // 302.theComma(item).html?cateNo=0&itemNo=3#with_item

    url = url.split("?"); // [302.theComma(item).html , cateNo=0&itemNo=3#with_item]
    if (url.length > 1) {

        url = url[1].split("&"); // [cateNo=0  , itemNo=3#with_item]

        for (let i = 0; i < url.length; i++) {
            let tmp_url = url[i].split("="); // [cateNo  , 0 ]
            // [itemNo  , 3#with_item]

            if (tmp_url[0] == keyword) {
                return tmp_url[1].split("#")[0]; // 3#with_item
            }
        }
    }
    return null;
}

////////////페이지3



