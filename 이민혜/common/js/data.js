const ITEM_LIST = [
    [],
    [],
    // outer
    [
        {page_no: '2', item_no:1, src: '01-1.jpg, 01-2.jpg', color:'#a4805e, #000', color_txt:'베이지, 블랙', size:'', type:'outer', title_kr: '시엔 울 40% 벨트 싱글 코트',title_en: 'sien wool 40% belt single coat', o_price: 72000, s_price: 60000, desc: '벨트 세트로 세련된 스타일링을 할 수 있는 싱글 코트', tag:''}, 
        {page_no: '2', item_no:2, src: '02-1.jpg, 02-2.jpg', color:'#e3d6c6, #9d7e6a, #000', color_txt:'크림, 브라운, 블랙', size:'', type:'outer', title_kr: '헤이즈 웰론 퍼 카라 패딩',title_en: 'haze wellon fur collar padding', o_price: 42500, s_price: 36000, desc: '귀엽고 포근한 무드를 연출해 주는 활용도 높은 퍼 카라 패딩', tag:'겨울'}, 
        {page_no: '2', item_no:3, src: '03-1.jpg, 03-2.jpg', color:'#d6beba, #b4cac7', color_txt:'핑크, 민트', size:'', type:'outer', title_kr: '티나 펄 버튼 퍼 니트 가디건',title_en: 'tina pearl button fur knit cardigan', o_price: 36000, s_price: 30000, desc: '러블리하고 여리여리한 분위기의 루즈핏 퍼 니트 가디건', tag:'러블리'}, 
        {page_no: '2', item_no:4, src: '04-1.jpg, 04-2.jpg', color:'#eee2d6, #212433', color_txt:'아이보리, 네이비', size:'', type:'outer', title_kr: '발렌티 플라워 니트 가디건',title_en: 'valenti flower knit cardigan', o_price: 28500, s_price: 20000, desc: '걸리쉬한 무드의 자체제작 플라워 자수 니트 가디건', tag:'사계절, 베스트'}, 
        {page_no: '2', item_no:5, src: '05-1.jpg, 05-2.jpg', color:'#c7a38b, #2d6645', color_txt:'베이지, 그린', size:'', type:'outer', title_kr: '몬테노 울 컬러 믹스 니트 가디건',title_en: 'monteno wool color mix knit cardigan', o_price: 29000, s_price: 23000, desc: '흔치 않은 디자인으로 특별한 룩을 연출해 주는 니트 가디건', tag:''}, 

        {page_no: '2', item_no:6, src: '06-1.jpg, 06-2.jpg', color:'#000', color_txt:'블랙', size:'', type:'outer', title_kr: '모디쉬 루즈 핏 라이더 자켓',title_en: 'modish loose fit rider jacket', o_price: 59000, s_price: 50000, desc: '자체제작, 하나만으로도 스타일리쉬한 룩이 연출되는 라이더 자켓', tag:''}, 
        {page_no: '2', item_no:7, src: '07-1.jpg, 07-2.jpg, 07-3.jpg, 07-4.jpg', color:'#a89f96, #40403e, #000', color_txt:'모카그레이, 그레이, 블랙', size:'', type:'outer', title_kr: '플렌티폴 세트-업 싱글 자켓',title_en: 'plentiful set-up single jacket', o_price: 57000, s_price: 50000, desc: '스탠다드한 핏으로 활용도 높은 커먼유니크 자체제작 자켓', tag:''}, 
        {page_no: '2', item_no:8, src: '08-1.jpg, 08-2.jpg, 08-3.jpg', color:'#a59073, #667793, #d94c42', color_txt:'베이지, 블루, 레드', size:'', type:'outer', title_kr: '로하 램스울 60% 니트 가디건',title_en: 'loha lambswool 60% knit cardigan', o_price: 24000, s_price: 15000, desc: '어디에나 손쉽게 매치할 수 있는 크롭 니트 가디건', tag:'베스트'}, 
        {page_no: '2', item_no:9, src: '09-1.jpg, 09-2.jpg', color:'#99957c', color_txt:'라이트 카키', size:'', type:'outer', title_kr: '프리엔 울 50% 부클 숏 자켓',title_en: 'prien wool 50% boucle short jacket', o_price: 72000, s_price: 50000, desc: '캐주얼하고 귀여운 무드가 느껴지는 부클 숏 자켓', tag:''}, 
        {page_no: '2', item_no:10, src: '10-1.jpg, 10-2.jpg', color:'#eae4d8, #000', color_txt:'아이보리, 블랙', size:'', type:'outer', title_kr: '넘버 스트링 야상 점퍼',title_en: 'number string yasang jumper', o_price: 87000, s_price: 64000, desc: '한겨울까지 스타일리쉬하게 착용할 수 있는 야상 점퍼', tag:''}, 

        {page_no: '2', item_no:11, src: '11-1.jpg, 11-2.jpg', color:'#978883, #000', color_txt:'코코아, 블랙', size:'', type:'outer', title_kr: '멜리니 울 싱글 자켓',title_en: 'mellini wool single jacket', o_price: 64000, s_price: 50000, desc: '탄탄하고 고급스러운 재질로 어디에다 걸쳐줘도 멋스러운 박시 자켓', tag:''}, 
        {page_no: '2', item_no:12, src: '12-1.jpg, 12-2.jpg, 12-3.jpg', color:'#6a5b44, #523f31, #55554d', color_txt:'라이트브라운, 브라운, 그레이', size:'', type:'outer', title_kr: '디바 울 헤링본 체크 자켓',title_en: 'diba wool herringbone check jacket', o_price: 69000, s_price: 64000, desc: '클래식한 무드로 멋스럽게 착용되는 헤링본 체크 자켓', tag:'베스트'}, 
        {page_no: '2', item_no:13, src: '13-1.jpg, 13-2.jpg', color:'#f0e4cc, #6d6e71', color_txt:'크림, 차콜', size:'', type:'outer', title_kr: '반디 V 넥 오버 핏 니트 가디건',title_en: 'bandy v neck over fit knit cardigan', o_price: 32000, s_price: 20000, desc: '넉넉한 오버 핏으로 스타일리쉬하게 즐기기 좋은 니트 가디건', tag:'신상품'}, 
        {page_no: '2', item_no:14, src: '14-1.jpg, 14-2.jpg', color:'#a3875f, #5a5c47', color_txt:'베이지, 카키', size:'', type:'outer', title_kr: '코듀로이 카라 야상 코트',title_en: 'corduroy collar yasang coat', o_price: 87000, s_price: 50000, desc: '멋스럽고 트렌디한 분위기가 물씬 느껴지는 야상 코트', tag:''}, 
        {page_no: '2', item_no:15, src: '15-1.jpg, 15-2.jpg', color:'#fff, #61463b', color_txt:'화이트, 브라운', size:'', type:'outer', title_kr: '앤더 코듀로이 웰론 패딩',title_en: 'ander corduroy wellon padding', o_price: 32000, s_price: 19000, desc: '소재감만으로도 스타일리쉬하게 즐길 수 있는 골덴 패딩', tag:'베스트'}, 

        {page_no: '2', item_no:16, src: '16-1.jpg, 16-2.jpg', color:'#ce9e6e', color_txt:'옐로우', size:'', type:'outer', title_kr: '울 아가일 세일러 니트 가디건',title_en: 'wool argyle sailor knit cardigan', o_price: 33000, s_price: 30000, desc: '유니크하고 걸리쉬한 아가일 세일러 카라 가디건', tag:''}, 
        {page_no: '2', item_no:17, src: '17-1.jpg, 17-2.jpg', color:'#fff, #e2ded2', color_txt:'아이보리, 블랙', size:'', type:'outer', title_kr: '브로스 덤블 오버 핏 후드 집업',title_en: 'bros dumble over fit hood zipup', o_price: 42000, s_price: 36000, desc: '박시한 핏과 후드 디테일로 캐주얼하면서도 귀여운 덤블 집업', tag:'베스트'}, 
        {page_no: '2', item_no:18, src: '18-1.jpg, 18-2.jpg', color:'#7e7673, #3d4143', color_txt:'모카, 차콜', size:'', type:'outer', title_kr: '호비드 세트-업 맥시 싱글 코트',title_en: 'hovid set-up maxi single coat', o_price: 87000, s_price: 65000, desc: '모던하고 감각적인 디자인으로 착용만으로도 멋스러운 싱글 코트', tag:''}, 
        {page_no: '2', item_no:19, src: '19-1.jpg, 19-2.jpg', color:'#3a517b', color_txt:'블루', size:'', type:'outer', title_kr: '포타스 박시 데님 야상 점퍼',title_en: 'potas boxy denim yasang jumper', o_price: 59000, s_price: 45000, desc: '박시한 핏으로 스타일리쉬하게 즐기기 좋은 데님 야상 점퍼', tag:''}, 
        {page_no: '2', item_no:20, src: '20-1.jpg, 20-2.jpg', color:'#eae1d2, #141527', color_txt:'크림, 네이비', size:'', type:'outer', title_kr: '포커 아가일 울 후드 점퍼',title_en: 'poker argyle wool hood jumper', o_price: 41000, s_price: 30000, desc: '멋스럽고 클래식한 무드가 느껴지는 아가일 후드 점퍼', tag:''}, 

        {page_no: '2', item_no:21, src: '21-1.jpg, 21-2.jpg', color:'#d7c9ac, #000', color_txt:'베이지, 블랙', size:'', type:'outer', title_kr: '모넨 스트링 퍼 트렌치 코트',title_en: 'monen string fur trench coat', o_price: 119000, s_price: 99000, desc: '밍크 퍼 안감이 더해져 세련된 무드의 트렌치 코트', tag:''}, 
        {page_no: '2', item_no:21, src: '22-1.jpg, 22-2.jpg', color:'#e7e7df, #618699, #000', color_txt:'아이보리,블루,블랙', size:'', type:'outer', title_kr: '프리코 벨벳 웰론 박시 패딩',title_en: 'frico velvet wellon boxy padding', o_price: 49500, s_price: 42000, desc: '벨벳 소재감으로 스타일리쉬하게 착용되는 박시 핏 패딩', tag:''},

        {page_no: '2', item_no:22, src: '23-1.jpg, 23-2.jpg', color:'#99abad, #282b3c', color_txt:'스카이블루, 네이비', size:'', type:'outer', title_kr: '에버 아가일 니트 가디건',title_en: 'ever argyle knit cardigan', o_price: 27000, s_price: 23000, desc: '룩에 확실한 포인트가 되어 주는 아가일 니트 가디건', tag:'신상품'}
    ],
    
    // top
    [ 
        {page_no: '3', item_no:1, src: '01-1.jpg, 01-2.jpg', color:'#9fc4bc, #47322f', color_txt:'민트, 브라운', size:'', type:'top', title_kr: '도리 믹스 패턴 박시 핏 니트',title_en: 'dori mix pattern boxy fit knit', o_price: 26000, s_price: 20000, desc: '하나만으로도 룩의 완성도를 올려주는 믹스 패턴 니트', tag:'신상품'}, 
        {page_no: '3', item_no:2, src: '02-1.jpg, 02-2.jpg, 02-3.jpg', color:'#e8dcc4, #a28d72, #b27469', color_txt:'아이보리, 베이지, 핑크', size:'', type:'top', title_kr: '앙고라 V 넥 니트',title_en: 'angora v neck knit', o_price: 36000, s_price: 32000, desc: '여성스러운 무드가 느껴지는 자체제작 앙고라 V 넥 니트', tag:'겨울, 베스트'}, 
        {page_no: '3', item_no:3, src: '03-1.jpg, 03-2.jpg, 03-3.jpg, 03-4.jpg', color:'#f2f2f2, #32211a, #5f5e5c, #000', color_txt:'아이보리, 브라운, 그레이, 블랙', size:'', type:'top', title_kr: '젤리 베이직 레이온 하프 넥 티',title_en: 'jelly basic rayon half neck t', o_price: 12000, s_price: 7000, desc: '데일리 아이템으로 제격인 자체제작 하프 넥 티셔츠', tag:''}, 
        {page_no: '3', item_no:4, src: '04-1.jpg, 04-2.jpg', color:'#e0d8cb, #91383c, #000', color_txt:'오트밀, 레드, 블랙', size:'', type:'top', title_kr: '파이온 스트라이프 박시 핏 니트 맨투맨',title_en: 'pion stripe boxy fit knit mtm', o_price: 22000, s_price: 20000, desc: '캐주얼한 분위기가 연출되는 박시 핏 스트라이프 맨투맨', tag:''}, 
        {page_no: '3', item_no:5, src: '05-1.jpg, 05-2.jpg, 05-3.jpg, 05-4.jpg', color:'#dfdcd7, #c79096, #4977b5, #0005', color_txt:'아이보리, 핑크, 스카이 블루, 블랙', size:'', type:'top', title_kr: '실키 백 크로스 커버 블라우스',title_en: 'silky back cross cover blouse', o_price: 24500, s_price: 15000, desc: '자체제작, 쉽게 매력적인 연출이 가능한 커먼유니크 스테디셀러 블라우스', tag:''}, 


        {page_no: '3', item_no:6, src: '06-1.jpg, 06-2.jpg', color:'#e9e3cb, #a1ab76', color_txt:'크림 , 카키', size:'', type:'top', title_kr: '웨이튼 레터링 니들 후드 티',title_en: 'weiten lettering needle hood t', o_price: 24000, s_price: 21000, desc: '캐주얼한 포인트 아이템으로 즐기기 좋은 레터링 후드 티', tag:''}, 
        {page_no: '3', item_no:7, src: '07-1.jpg, 07-2.jpg', color:'#e2bab8', color_txt:'핑크', size:'', type:'top', title_kr: '위스코 골지 랩 맨투맨 세트',title_en: 'wisco golgi wrap mtm set', o_price: 19800, s_price: 15000, desc: '여리여리한 무드로 여성스럽게 착용되는 맨투맨 & 슬리브리스 세트', tag:'베스트'}, 
        {page_no: '3', item_no:8, src: '08-1.jpg, 08-2.jpg', color:'#fff, #000', color_txt:'화이트, 블랙', size:'', type:'top', title_kr: '레도 골드 버튼 타이 블라우스',title_en: 'redo gold button tie blouse', o_price: 41000, s_price: 30000, desc: '착용만으로도 여성스러운 무드를 더해주는 퍼프 타이 블라우스', tag:'신상품'}, 
        {page_no: '3', item_no:9, src: '09-1.jpg, 09-2.jpg', color:'#eee8da', color_txt:'아이보리', size:'', type:'top', title_kr: '러블 컬러링 웨이브 라운드 니트',title_en: 'luble coloring wave round knit', o_price: 26000, s_price: 22000, desc: '사랑스럽고 키치한 무드를 가득 담아 완성해 준 배색 니트', tag:''}, 
        {page_no: '3', item_no:10, src: '10-1.jpg, 10-2.jpg', color:'#e4dbca, #97a6b9, #000', color_txt:'크림, 스카이블루, 블랙', size:'', type:'top', title_kr: '디엘 핀턱 퍼프 블라우스',title_en: 'diel pintuck puff blouse', o_price: 18000, s_price: 15000, desc: '고급스럽고 페미닌한 무드의 핀턱 퍼프 블라우스', tag:'러블리'}, 


        {page_no: '3', item_no:11, src: '11-1.jpg, 11-2.jpg, 11-3.jpg', color:'#b63530, #282d40, #4f5356', color_txt:'레드, 네이비, 차콜', size:'', type:'top', title_kr: '에센셜 레터링 루즈 맨투맨',title_en: 'essential lettering loose mtm', o_price: 24000, s_price: 18500, desc: '데일리룩에 멋스러운 포인트가 되어주는 자체제작 맨투맨', tag:'베스트'}, 
        {page_no: '3', item_no:12, src: '12-1.jpg, 12-2.jpg, 12-3.jpg', color:'#edeae1, #a2bee3, #e0bee1', color_txt:'아이보리, 스카이블루,  라이트퍼플', size:'', type:'top', title_kr: '클라우드 벌룬 라운드 퍼 니트',title_en: 'cloud balloon round fur knit', o_price: 18000, s_price: 15500, desc: '페미닌하고 로맨틱한 분위기를 극대화해주는 퍼 니트', tag:''}, 
        {page_no: '3', item_no:13, src: '13-1.jpg, 13-2.jpg', color:'#dcd3c2, #000', color_txt:'크림, 블랙', size:'', type:'top', title_kr: '비바스 큐브라 포켓 블라우스',title_en: 'bibas cupra pocket blouse', o_price: 29000, s_price: 23000, desc: '소프트한 큐브라 원단으로 기분 좋게 착용되는 블라우스', tag:'신상품'}, 
        {page_no: '3', item_no:14, src: '14-1.jpg, 14-2.jpg, 14-3.jpg', color:'#fff, #b31718, #263850', color_txt:'화이트, 레드, 다크블루', size:'', type:'top', title_kr: '아메리카 레터링 코튼 티',title_en: 'america lettering cotton t', o_price: 20000, s_price: 13000, desc: '데일리로 즐기기 좋은 자체 제작 레터링 티셔츠', tag:'사계절'}, 
        {page_no: '3', item_no:15, src: '15-1.jpg, 15-2.jpg', color:'#ae9d83, #272c3f', color_txt:'베이지, 네이비', size:'', type:'top', title_kr: '빈티지 루즈 핏 체크 셔츠',title_en: 'vintageit check shirts', o_price: 26000, s_price: 19000, desc: '빈티지한 감성이 느껴지는 커먼유니크 자체제작 체크 셔츠', tag:''}, 


        {page_no: '3', item_no:16, src: '16-1.jpg, 16-2.jpg', color:'#5a3427', color_txt:'브라운', size:'', type:'top', title_kr: '지너스 아가일 루즈 핏 니트',title_en: 'jinus argyle loose fit knit', o_price: 31000, s_price: 25000, desc: '포근하고 클래식한 무드가 느껴지는 아가일 루즈 핏 니트', tag:''}, 
        {page_no: '3', item_no:17, src: '17-1.jpg, 17-2.jpg', color:'#336b5e, #232635', color_txt:'그린, 네이비', size:'', type:'top', title_kr: '젤라 프린팅 크롭 후드 티',title_en: 'jella printing crop hood t', o_price: 22000, s_price: 16500, desc: '편안하고 스타일리쉬하게 즐기기 좋은 프린팅 크롭 후드티', tag:''}, 
        {page_no: '3', item_no:18, src: '18-1.jpg, 18-2.jpg', color:'#bdbdbd, #000', color_txt:'그레이, 블랙', size:'', type:'top', title_kr: '브라이트 라운드 넥 크롭 맨투맨',title_en: 'bright round neck crop mtm', o_price: 15000, s_price: 10000, desc: '깔끔하면서 트렌디한 디자인으로 어디에나 잘 어울리는 맨투맨', tag:'베스트'}, 
        {page_no: '3', item_no:19, src: '19-1.jpg, 19-2.jpg', color:'#d6bfb5, #b4d0e5', color_txt:'인디핑크, 스카이블루', size:'', type:'top', title_kr: '베닌 포켓 언발 박시 핏 셔츠',title_en: 'venin pocket unbal boxy fit shirts', o_price: 25000, s_price: 20000, desc: '매 시즌 데일리로 멋스럽게 즐기기 좋은 박시 핏 셔츠', tag:''}, 
        {page_no: '3', item_no:20, src: '20-1.jpg, 20-2.jpg', color:'#7e2924, #000', color_txt:'레드, 블랙', size:'', type:'top', title_kr: '코미아 패턴 라운드 니트',title_en: 'comia pattern round knit', o_price: 27000, s_price: 23500, desc: '불규칙한 패턴 디테일로 트렌디한 무드가 느껴지는 니트', tag:''},

        {page_no: '3', item_no:21, src: '21-1.jpg, 21-2.jpg, 21-3.jpg, 21-4.jpg', color:'#dfd7c8, #8f9396, #76401c, #524636', color_txt:'아이보리, 그레이, 브라운, 카키', size:'', type:'top', title_kr: '마일드 터치 니트',title_en: 'mild touch knit', o_price: 19800, s_price: 16000, desc: '뽀송뽀송하고 도톰한 원단으로 제작한 기분좋은 착용감의 니트', tag:'베스트'},
        {page_no: '3', item_no:22, src: '22-1.jpg, 22-2.jpg', color:'#b69f8f, #7c7b81, #81654f, #405953, #852a53', color_txt:'베이지, 그레이, 브라운, 그린, 딥핑크', size:'', type:'top', title_kr: '제토 골지 라운드 루즈 니트',title_en: 'jeto golgi round loose knit', o_price: 28000, s_price: 26000, desc: '심플하면서도 밋밋하지 않아 부담 없이 활용하기 좋은 골지 니트', tag:''},
        {page_no: '3', item_no:23, src: '23-1.jpg, 23-2.jpg', color:'#edebdf, #c6d3e3', color_txt:'아이보리, 스카이블루', size:'', type:'top', title_kr: '루엔드 레이어드 언발 볼레로 니트',title_en: 'luend layered unbal bolero knit', o_price: 24500, s_price: 20000, desc: '트렌디한 포인트 업 아이템으로 추천드리는 볼레로 니트', tag:''},
        {page_no: '3', item_no:24, src: '24-1.jpg, 24-2.jpg, 24-3.jpg', color:'#a47472, #7d9f87, #647e99, #715e58', color_txt:'핑크, 그린, 블루, 브라운', size:'', type:'top', title_kr: '덴도 램스울 50% 골지 V 넥 니트',title_en: 'dendo lambswool 50% golgi v neck knit', o_price: 34000, s_price: 30000, desc: '베이직한 디자인으로 단품 또는 이너로 모두 활용도 높은 골지 니트', tag:''}

    ],

    // bottom
    [
        {page_no: '4', item_no:1, src: '01-1.jpg, 01-2.jpg', color:'#000', color_txt:'블랙', size:'S, M, L', type:'bottom', title_kr: '블랙 슬릿 롱 스커트',title_en: 'black slit long skirt', o_price: 29500, s_price: 25000, desc: '룩에 이지하게 매칭되는 자체제작 롱 스커트', tag:''}, 
        {page_no: '4', item_no:2, src: '02-1.jpg, 02-2.jpg, 02-3.jpg, 02-4.jpg', color:'#a0b1c1, #a0b1c1, #445b7d, #343436', color_txt:'라이트 블루, 블루, 딥블루, 블랙', size:'S, M, L', type:'bottom', title_kr: '캔모어 와이드 데님 팬츠',title_en: 'canmore wide denim pants', o_price: 25000, s_price: 20000, desc: '매 시즌 데일리하게 연출하기 좋은 와이드 데님 팬츠', tag:'베스트'}, 
        {page_no: '4', item_no:3, src: '03-1.jpg, 03-2.jpg', color:'#efece5, #000', color_txt:'아이보리, 블랙', size:'S, M, L', type:'bottom', title_kr: '코튼 와이드 팬츠',title_en: 'cotton wide pants', o_price: 32000, s_price: 27000, desc: '타입별로 선택이 가능한 커먼유니크 자체제작 코튼 와이드 팬츠', tag:'신상품'}, 
        {page_no: '4', item_no:4, src: '04-1.jpg, 04-2.jpg', color:'#f3efe6, #958e71, #3f4543', color_txt:'아이보리, 베이지, 차콜', size:'S, M', type:'bottom', title_kr: '엔티 스판 코듀로이 롱 팬츠',title_en: 'enty span corduroy long pants', o_price: 42000, s_price: 35000, desc: '매력적인 원단감만으로도 멋스럽게 착용되는 코듀로이 팬츠', tag:'겨울'}, 
        {page_no: '4', item_no:5, src: '05-1.jpg, 05-2.jpg, 05-3.jpg', color:'#e8e0cb, #c0a987, #000', color_txt:'아이보리, 베이지, 블랙', size:'', type:'bottom', title_kr: '미나스 울 플리츠 니트 롱 스커트',title_en: 'minas wool pleats knit long skirt', o_price: 22000, s_price: 21000, desc: '고급스러움이 돋보이는 울 블렌딩 플리츠 니트 롱 스커트', tag:''}, 


        {page_no: '4', item_no:6, src: '06-1.jpg, 06-2.jpg', color:'#a9626a, #365848', color_txt:'핑크, 그린', size:'', type:'bottom', title_kr: '젠타 코듀로이 팬츠 스커트',title_en: 'zenta corduroy pants skirt', o_price: 36000, s_price: 32000, desc: '톡톡한 골덴 소재로 F/W 시즌 착용하기 좋은 팬츠 스커트', tag:''}, 
        {page_no: '4', item_no:7, src: '07-1.jpg, 07-2.jpg', color:'#1d2b36', color_txt:'인디고 블루', size:'S, M, L', type:'bottom', title_kr: '바일 3 버튼 부츠 데님 팬츠',title_en: 'bail 3 button boots denim pants', o_price: 37000, s_price: 30000, desc: '날씬하고 세련된 아웃핏을 연출해 주는 3버튼 부츠 컷 데님 팬츠', tag:''}, 
        {page_no: '4', item_no:8, src: '08-1.jpg, 08-2.jpg', color:'#e8e2d2', color_txt:'아이보리', size:'S, M, L', type:'bottom', title_kr: '할리 체커보드 미니 스커트',title_en: 'halry checkerboard mini skirt', o_price: 21000, s_price: 17500, desc: '흔하지 않은 디자인으로 높은 소장 가치를 자랑하는 스커트', tag:'신상품'}, 
        {page_no: '4', item_no:9, src: '09-1.jpg, 09-2.jpg', color:'#d1c4b2, #000', color_txt:'오트밀, 블랙', size:'', type:'bottom', title_kr: '골지 울 슬릿 니트 롱 스커트',title_en: 'golgi wool slit knit long skirt', o_price: 20000, s_price: 16000, desc: '어디에다 매치해도 예쁘게 코디되는 니트 롱 스커트', tag:''}, 
        {page_no: '4', item_no:10, src: '10-1.jpg, 10-2.jpg', color:'#606d52, #000', color_txt:'카키, 블랙', size:'', type:'bottom', title_kr: '프리카 울 40% 랩 미디 스커트',title_en: 'prika wool 40% wrap midi skirt', o_price: 39000, s_price: 32000, desc: '탄탄한 소재감과 세련된 디자인으로 소장 가치 높은 랩 스커트', tag:'베스트'}, 


        {page_no: '4', item_no:11, src: '11-1.jpg, 11-2.jpg', color:'#acadb2', color_txt:'그레이', size:'', type:'bottom', title_kr: '나티스 벨루어 밴딩 와이드 팬츠',title_en: 'natis velour banding wide pants', o_price: 39000, s_price: 34500, desc: '캐주얼룩, 놈코어룩, 트레이닝룩 등 다양하게 활용 가능한 팬츠', tag:'신상품'}, 
        {page_no: '4', item_no:12, src: '12-1.jpg, 12-2.jpg, 12-3.jpg, 12-4.jpg', color:'#fff, #b8aa8f, #a7b3cd, #000', color_txt:'화이트, 베이지, 스카이블루, 블랙', size:'S, M', type:'bottom', title_kr: '하이 웨스트 A 라인 미니 스커트',title_en: 'high waist a line mini skirt', o_price: 22000, s_price: 15500, desc: '깔끔한 디자인으로 다양하게 활용 가능한 자체제작 미니 스커트', tag:'러블리'}, 
        {page_no: '4', item_no:13, src: '13-1.jpg, 13-2.jpg, 13-3.jpg', color:'#253f36, #4a494e, #000', color_txt:'그린,그레이, 블랙', size:'S, M, L', type:'bottom', title_kr: '베니타 클래시 세미 와이드 슬랙스',title_en: 'benita classy semi wide slacks', o_price: 37500, s_price: 34000, desc: '핏과 고급스러운 소재감까지 다 갖춘 와이드 슬랙스', tag:''}, 
        {page_no: '4', item_no:14, src: '14-1.jpg, 14-2.jpg', color:'#62666f', color_txt:'그레이', size:'S, M, L', type:'bottom', title_kr: '로아 컷팅 스트레이트 데님 팬츠',title_en: 'roa cutting straight denim pants', o_price: 28000, s_price: 22000, desc: '흔하지 않은 컬러감으로 소장 가치 있는 데님 팬츠', tag:''}, 
        {page_no: '4', item_no:15, src: '15-1.jpg, 15-2.jpg', color:'#ded6cb', color_txt:'아이보리', size:'S, M', type:'bottom', title_kr: '걸리쉬 울 체크 미니 스커트',title_en: 'girlish wool check mini skirt', o_price: 24000, s_price: 20000, desc: '따뜻하고 포근함을 선사해주는 자체제작 미니 스커트', tag:'베스트'}, 


        {page_no: '4', item_no:16, src: '16-1.jpg, 16-2.jpg', color:'#604031, #474745, #000', color_txt:'브라운, 차콜, 블랙', size:'S, M, L', type:'bottom', title_kr: '피치 핀턱 세미 와이드 슬랙스',title_en: 'peach pintuck semi wide slacks', o_price: 27500, s_price: 23000, desc: '따뜻한 소재감으로 F/W 시즌 활용하기 좋은 피치 슬랙스', tag:''}, 
        {page_no: '4', item_no:17, src: '17-1.jpg, 17-2.jpg', color:'#d3c18f, #a04f5e, #aeb0ab', color_txt:'옐로우, 핑크, 그레이', size:'', type:'bottom', title_kr: '홀리 내핑 조거 팬츠',title_en: 'holy napping jogger pants', o_price: 32500, s_price: 27500, desc: 'F/W 시즌 캐주얼하고 따뜻한 무드로 즐길 수 있는 조거 팬츠', tag:''}, 
        {page_no: '4', item_no:18, src: '18-1.jpg, 18-2.jpg', color:'#b29293, #7c7062, #000', color_txt:'핑크, 브라운, 블랙', size:'', type:'bottom', title_kr: '아코디언 플레어 팬츠 스커트',title_en: 'accordion flare pants skirt', o_price: 18500, s_price: 9000, desc: '꾸미고 싶은 날 예쁘게 입기 좋은 아코디언 팬츠 스커트', tag:''}, 
        {page_no: '4', item_no:19, src: '19-1.jpg, 19-2.jpg', color:'#5c6979', color_txt:'블루', size:'S, M, L', type:'bottom', title_kr: '레빌 2 버튼 데님 스키니',title_en: 'rebil 2 button denim skinny', o_price: 34000, s_price: 25000, desc: '편안한 착용감과 예쁜 핏감으로 높은 만족도를 선사하는 스키니', tag:''}, 
        {page_no: '4', item_no:20, src: '20-1.jpg, 20-2.jpg, 20-3.jpg, 20-4.jpg', color:'#efdccb, #c0ab90, #9b6245, #000', color_txt:'크림, 베이지, 브라운, 블랙', size:'', type:'bottom', title_kr: '버틀러 플레어 밴딩 롱 스커트',title_en: 'butler flare banding long skir', o_price: 22000, s_price: 19000, desc: '내추럴하고 여성스러운 룩으로 연출될 플레어 롱 스커트', tag:'사계절'}

    ],

    // ops
    [
        {page_no: '5', item_no:1, src: '01-1.jpg, 01-2.jpg', color:'#697a8a, #000', color_txt:'블루, 블랙', size:'', type:'ops', title_kr: '피치 플리츠 뷔스티에 롱 원피스',title_en: 'peach pleats bustier long ops', o_price: 29000, s_price: 26000, desc: '따뜻하고 여성스러운 분위기의 플리츠 뷔스티에 원피스', tag:''}, 
        {page_no: '5', item_no:2, src: '02-1.jpg, 02-2.jpg', color:'#e6dfcf, #131b32', color_txt:'아이보리, 네이비', size:'', type:'ops', title_kr: '옐로우 플라워 자가드 원피스',title_en: 'yellow flower jacquard ops', o_price: 38500, s_price: 32000, desc: '특별한 무드를 선사할 자체제작 플라워 자가드 원피스', tag:''}, 
        {page_no: '5', item_no:3, src: '03-1.jpg, 03-2.jpg', color:'#83484e', color_txt:'핑크', size:'', type:'ops', title_kr: '다비 피치 프릴 빅 카라 원피스',title_en: 'davy peach frill big collar ops', o_price: 31000, s_price: 27000, desc: '착용만으로도 소녀스러운 감성을 자아내는 빅 카라 원피스', tag:'러블리'}, 
        {page_no: '5', item_no:4, src: '04-1.jpg, 04-2.jpg', color:'#81583c, #000', color_txt:'브라운, 블랙', size:'', type:'ops', title_kr: '모스트 언발 슬릿 뷔스티에 롱 원피스',title_en: 'most unbal slit bustier long ops', o_price: 39500, s_price: 34000, desc: '다양한 무드로 연출하기 좋은 자체제작 뷔스티에 롱 원피스', tag:''}, 
        {page_no: '5', item_no:5, src: '05-1.jpg, 05-2.jpg', color:'#000', color_txt:'블랙', size:'', type:'ops', title_kr: '비안 펄 리본 브로치 트위드 원피스',title_en: 'bian pearl ribbon broach tweed ops', o_price: 57500, s_price: 45000, desc: '예쁜 핏감과 고급스러운 디테일로 소장 가치 높은 트위드 원피스', tag:'신상품'}, 


        {page_no: '5', item_no:6, src: '06-1.jpg, 06-2.jpg', color:'#ded3c0, #b2bbcc, #505052', color_txt:'크림, 블루, 차콜', size:'', type:'ops', title_kr: '미론 트위스트 터틀 넥 니트 원피스',title_en: 'miron twist turtle neck knit ops', o_price: 26000, s_price: 22000, desc: '내추럴하고 포근하게 착용하기 좋은 터틀넥 니트 원피스', tag:'겨울'}, 
        {page_no: '5', item_no:7, src: '07-1.jpg, 07-2.jpg', color:'#a19484, #000', color_txt:'베이지, 블랙', size:'', type:'ops', title_kr: '보네 울 체크 뷔스티에 롱 원피스',title_en: 'bone wool check bustier long ops', o_price: 27000, s_price: 22500, desc: '단정하고 클래식함이 돋보이는 체크 뷔스티에 원피스', tag:'베스트'}, 
        {page_no: '5', item_no:8, src: '08-1.jpg, 08-2.jpg', color:'#c6baa2, #464644', color_txt:'베이지, 차콜', size:'', type:'ops', title_kr: '코듀로이 스트랩 뷔스티에 미니 원피스',title_en: 'corduroy strap bustier mini ops', o_price: 25000, s_price: 8000, desc: '따뜻한 무드가 느껴지는 코듀로이 뷔스티에 미니 원피스', tag:''}, 
        {page_no: '5', item_no:9, src: '09-1.jpg, 09-2.jpg', color:'#5a3930', color_txt:'브라운', size:'', type:'ops', title_kr: '베르디 피치 스트랩 카라 롱 원피스',title_en: 'berdi peach strap collar long ops', o_price: 29000, s_price: 26500, desc: '단정하고 걸리쉬한 분위기가 느껴지는 피치 롱 원피스', tag:''}, 
        {page_no: '5', item_no:10, src: '10-1.jpg, 10-2.jpg', color:'#ccbda8, #000', color_txt:'베이지, 블랙', size:'', type:'ops', title_kr: '위티 뷔스티에 미니 원피스',title_en: 'witty bustier mini ops', o_price: 26000, s_price: 10000, desc: '깔끔하고 세련된 무드가 돋보이는 자체제작 뷔스티에 원피스', tag:'사계절'},

        {page_no: '5', item_no:11, src: '11-1.jpg, 11-2.jpg', color:'#000', color_txt:'블랙', size:'', type:'ops', title_kr: '빈티지 레이스 카라 플라워 미니 원피스',title_en: 'vintage lace collar flower mini ops', o_price: 47000, s_price: 42000, desc: '레이스 카라 디테일로 걸리쉬한 무드의 미니 원피스', tag:''},
        {page_no: '5', item_no:12, src: '12-1.jpg, 12-2.jpg', color:'#000', color_txt:'블랙', size:'', type:'ops', title_kr: '울 50% 체크 뷔스티에 미니 원피스',title_en: 'wool 50% check bustier mini ops', o_price: 31000, s_price: 28000, desc: '걸리쉬한 무드의 자체제작 체크 뷔스티에 원피스', tag:''}
    ],

    // acc
    [
        {page_no: '6', item_no:1, src: '01-1.jpg, 01-2.jpg, 01-3.jpg', color:'#71182a, #000', color_txt:'와인, 블랙', size:'', type:'acc', title_kr: '에밀리 2 웨이 미니 백',title_en: 'emilie 2 way mini bag', o_price: 29000, s_price: 26000, desc: '눈길을 사로잡는 매력적인 에나멜 미니 백', tag:''}, 
        {page_no: '6', item_no:2, src: '02-1.jpg, 02-2.jpg, 02-3.jpg', color:'#c0a172, #000', color_txt:'베이지, 블랙', size:'230, 235, 240, 245, 250', type:'acc', title_kr: '돈티 매트 레이스-업 워커',title_en: 'donty matt lace-up walker', o_price: 38500, s_price: 32000, desc: '멋스러운 디자인과 소재감으로 룩의 완성도를 높여 줄 레이스 업 워커', tag:''}, 
        {page_no: '6', item_no:3, src: '03-1.jpg, 03-2.jpg', color:'#bfac9b, #57372a, #525157, #000', color_txt:'베이지, 브라운, 다크그레이, 블랙', size:'', type:'acc', title_kr: '리키 울 트위스트 니트 버킷 햇',title_en: 'liky wool twist knit bucket hat', o_price: 31000, s_price: 27000, desc: 'F/W 시즌, 트렌디한 포인트 아이템으로 활용하기 좋은 트위스트 니트 햇', tag:'러블리'}, 
        {page_no: '6', item_no:4, src: '04-1.jpg, 04-2.jpg, 04-3.jpg', color:'#efe3d3, #7a492b, #48404f, #000', color_txt:'아이보리, 카멜, 네이비, 블랙', size:'', type:'acc', title_kr: '울 100% 와이드 머플러',title_en: 'wool 100% wide muffler', o_price: 39500, s_price: 34000, desc: '다양한 코디에 잘 어우러지는 베이직 와이드 울 머플러', tag:'신상품'}, 
        {page_no: '6', item_no:5, src: '05-1.jpg, 05-2.jpg', color:'#ffd700', color_txt:'골드', size:'', type:'acc', title_kr: '미니 백 펜던트 골드 네크리스',title_en: 'mini bag pendant gold necklace', o_price: 57500, s_price: 45000, desc: '유니크하면서도 고급스러운 디자인의 미니 백 네크리스', tag:''}, 


        {page_no: '6', item_no:6, src: '06-1.jpg, 06-2.jpg', color:'#eedbcb, #000', color_txt:'베이지, 블랙', size:'230, 235, 240, 245, 250', type:'acc', title_kr: '루티노 컬러링 스니커즈',title_en: 'lutino coloring sneakers', o_price: 26000, s_price: 22000, desc: '트렌디한 무드로 룩에 포인트를 더해주는 배색 스니커즈', tag:'겨울'}, 
        {page_no: '6', item_no:7, src: '07-1.jpg, 07-2.jpg, 07-3.jpg', color:'#c0c0c0, #ffd700', color_txt:'실버, 골드', size:'', type:'acc', title_kr: '씬 레이어드 링 6 세트',title_en: 'thin layered ring 6 set', o_price: 27000, s_price: 22500, desc: '머스트 해브 아이템인 심플 레이어드 링 세트', tag:''}, 
        {page_no: '6', item_no:8, src: '08-1.jpg, 08-2.jpg, 08-3.jpg', color:'#f3e5ca, #5c4136, #000', color_txt:'아이보리, 브라운, 블랙', size:'', type:'acc', title_kr: '머큐리 크로커다일 레더 백',title_en: 'mercury crocodile leather bag', o_price: 25000, s_price: 8000, desc: '고급스럽고 퀄리티 높게 제작된 미니 레더 백', tag:'베스트'}, 
        {page_no: '6', item_no:9, src: '09-1.jpg, 09-2.jpg', color:'#fff, #71182a, #000', color_txt:'화이트, 와인, 블랙', size:'', type:'acc', title_kr: '릴스 실키 알파벳 스카프',title_en: 'rils silky alphabet scarf', o_price: 29000, s_price: 26500, desc: '착용만으로도 센스 있는 룩이 완성되는 알파벳 스카프', tag:''}, 
        {page_no: '6', item_no:10, src: '10-1.jpg, 10-2.jpg', color:'#ede3d9, #000', color_txt:'크림, 블랙', size:'', type:'acc', title_kr: '내추럴 벌키 코튼 백',title_en: 'natural bulky cotton bag', o_price: 26000, s_price: 10000, desc: '내추럴한 무드가 매력적인 코튼백', tag:'사계절'}

    ]

]


// 아이템 넘버 바뀌면 인덱스 md 상품부분 바꾸기

ITEM_LIST[0]  = []
for (let i=2; i<ITEM_LIST.length; i++) {
    for(let j=0; j<ITEM_LIST[i].length ; j++) {
        let tag = ITEM_LIST[i][j].tag;

        if(tag.match("신상품")) {
            ITEM_LIST[0].push(ITEM_LIST[i][j])
        }
    }
}
ITEM_LIST[1]  = []
for (let i=2; i<ITEM_LIST.length; i++) {
    for(let j=0; j<ITEM_LIST[i].length; j++) {
        let tag = ITEM_LIST[i][j].tag;

        if(tag.match("베스트")) {
            ITEM_LIST[1].push(ITEM_LIST[i][j])
        }
    }
}




const menu_array = ['new', 'best', 'outer', 'top', 'bottom', 'ops', 'acc'];
const title_array = ['NEW', 'BEST', 'OUTER', 'TOP', 'BOTTOM', 'ONE-PIECE', 'ACC'];


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


