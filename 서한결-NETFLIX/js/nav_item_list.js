// cate의 값에 따라 객체를 한번 써보는 건 어떨까




// 각 섹션의 이름을 담은 배열
const NAV_ITEM_FILE_NAME = 
['nav_action', 'kids','lomance', 'documentary','animation'];

const NAV_ITEM_NAME = 
['NAV_ACTION', 'KIDS', 'NAV_LOMANCE', 'DOCUMENTARY', 'NAV_ANIMATION'];


// NAV_ACTION: cate값이 0일 때 사용
const NAV_ACTION = 
[
  // 액션 스릴러 영화
  [
    {item_no: 1, src: 'nav_action1.webp', title_img: 'nav_action_title1.webp', banner_img: 'nav_action_banner1.webp', desc: '이탈리아 해안가의 작은 마을에 마음을 빼앗긴 로버트 맥콜. 이 마을 주민들을 잔인하게 괴롭히고 돈을 갈취하는 범죄 조직을 처단하기로 다짐한다.'},
    {item_no: 2, src: 'nav_action2.webp', title_img: 'nav_action_title2.webp', banner_img: 'nav_action_banner2.webp', desc: '알 수 없는 곳에서, 기억을 잃은 채 무리 지어 살아가는 소년들. 그들이 어디서 온 누군지, 여기는 어딘지 아무도 알지 못한다. 단 확실한 건, 이곳에서 탈출하려면 밤마다 괴성이 들리는 거대한 미로를 통과해야 한다는 것!'},
    {item_no: 3, src: 'nav_action3.webp', title_img: 'nav_action_title3.webp', banner_img: 'nav_action_banner3.webp', desc: '생존을 위해 싸울 것. 실패하면 모든 게 끝이다. 디스토피아 세계로 내몰린 십 대 아이들에게, 누군가를 믿는 건 허락되지 않은 사치일 뿐.'},
    {item_no: 4, src: 'nav_action4.webp', title_img: 'nav_action_title4.webp', banner_img: 'nav_action_banner4.webp', desc: '친구를 구하고 플레어 팬데믹의 치료법을 찾기 위해, 토마스와 글레이더 전사들이 위키드를 향해 공격을 감행한다. 《메이즈 러너》 프랜차이즈의 완결편.'},
    {item_no: 5, src: 'nav_action5.webp', title_img: 'nav_action_title5.webp', banner_img: 'nav_action_banner5.webp', desc: '은둔 생활 중이던 전직 스나이퍼. 대통령을 노리는 암살 시도를 막기 위해 그의 도움이 필요하다는 동료들의 간청을 받고 임무에 합류한다..'},
    {item_no: 6, src: 'nav_action6.webp', title_img: 'nav_action_title6.webp', banner_img: 'nav_action_banner6.webp', desc: '대지를 가르는 지진, 모든 걸 삼켜 버릴 듯한 화산, 그리고 초대형 쓰나미까지. 수천 년 동안 인류는 최후의 날을 두려워했지만, 이날은 그 무엇으로도 대비할 수 없다.'},
    {item_no: 7, src: 'nav_action7.webp', title_img: 'nav_action_title7.webp', banner_img: 'nav_action_banner7.webp', desc: '불멸의 적들과 끝없는 전쟁을 치러야 하는 운명을 타고난 전사가 환생했다. 이제 오랜 숙적으로부터 세상을 구하기 위해 반드시 전생에 얽힌 미스터리를 풀어야 한다.'},
    {item_no: 8, src: 'nav_action8.webp', title_img: 'nav_action_title8.webp', banner_img: 'nav_action_banner8.webp', desc: '25살이 되면 노화가 멈추고, 그 뒤부터 더 살려면 시간을 사야 하는 미래 사회. 어쩌다 살인 누명을 쓴 청년이 생존하기 위해 분투한다.'},
    {item_no: 9, src: 'nav_action9.webp', title_img: 'nav_action_title9.webp', banner_img: 'nav_action_banner9.webp', desc: '업계 전설로 불리는 킬러, 존 윅. 그의 목에 현상금 1,400만 달러가 걸렸다. 이제 그는 자신을 노리는 수많은 킬러와 맞서 싸우며, 옛 동지들과 힘을 합쳐 살길을 찾아야 한다.'},
    {item_no: 10, src: 'nav_action10.webp', title_img: 'nav_action_title10.webp', banner_img: 'nav_action_banner10.webp', desc: '무자비한 용병들이 갑작스러운 공격을 가하며 백악관을 점거한다. 삽시간에 대혼란이 빚어진 상황. 현장에 있던 한 국회 경찰이 딸을 구하고 대통령의 안전을 지키기 위해 위험 속으로 뛰어든다.'},
    {item_no: 11, src: 'nav_action11.webp', title_img: 'nav_action_title11.webp', banner_img: 'nav_action_banner11.webp', desc: '어느 조직 보스의 아들이 존 윅의 차를 훔치고 그의 반려견도 죽인다. 그러자 세상 무서울 것 없는 전직 킬러 존 윅은 조직 전체를 상대로 피비린내 나는 복수를 시작한다.'},
    {item_no: 12, src: 'nav_action12.webp', title_img: 'nav_action_title12.webp', banner_img: 'nav_action_banner12.webp', desc: '보복에 혈안이 된 가학적인 인물이 다시 나타났다. 이제 돔은 가장 사랑하는 가족을 지키기 위해 할 수 있는 모든 걸 해야 한다.'},
    {item_no: 13, src: 'nav_action13.webp', title_img: 'nav_action_title13.webp', banner_img: 'nav_action_banner13.webp', desc: '한미 최고위급회담이 열린 백악관. 북한 출신 테러리스트들이 한국 경호 요원으로 위장, 백악관을 점령하고 대통령을 인질로 잡는다. 절체절명의 위기 상황. 불의의 사고로 물러났던 전직 경호원이 대통령을 구하고자 홀로 적진으로 뛰어든다.'},
    {item_no: 14, src: 'nav_action14.webp', title_img: 'nav_action_title14.webp', banner_img: 'nav_action_banner14.webp', desc: '현금 호송 업체에서 일하는, 도무지 속내를 알 수 없는 직원. 강도가 수송 차량을 덮치자 무자비한 실력을 드러내며 현장에 있던 동료들을 제대로 놀라게 한다.'},
    {item_no: 15, src: 'nav_action15.jpg', title_img: 'nav_action_title15.webp', banner_img: 'nav_action_banner15.webp', desc: '넷플릭스에서 최다 시청 기록을 세운 영화의 속편으로 크리스 헴스워스가 청부업자 타일러 레이크로 돌아와 또 한 번 강렬하고 짜릿한 임무에 뛰어든다.'},
    {item_no: 16, src: 'nav_action16.webp', title_img: 'nav_action_title16.webp', banner_img: 'nav_action_banner16.webp', desc: '한 암살자가 자신의 무자비한 고용주 빌과 암살단의 다른 멤버에 의해 저격당한다. 그러나 살아남은 그녀는 복수를 계획한다.'},
    {item_no: 17, src: 'nav_action17.webp', title_img: 'nav_action_title17.webp', banner_img: 'nav_action_banner17.webp', desc: '은퇴를 선언한 암살자 존 윅. 하지만 과거에 진 빚을 갚아야 하는 순간이 다가오자, 어쩔 수 없이 마지막 임무를 맡는다. 그리고 그로 인해 살벌한 범죄 조직의 표적이 된다.'},
    {item_no: 18, src: 'nav_action18.jpg', title_img: 'nav_action_title18.webp', banner_img: 'nav_action_banner18.webp', desc: '이름도 없다. 두려움도 없다. 망설임도 없다. CIA 훈련 이후 유령이자 그림자로 존재하게 된 남자. 이제 조직은 가장 위험한 요원인 그를 세상에서 없애려 한다.'},
  ],

  // 흥미진진한 한국 영화
  [
    {item_no: 1, src: 'korean_movie01.webp', title_img: 'korean_movie_title1.webp', banner_img: 'korean_movie_banner1.webp', desc: '법보다 돈이 더 강한 세상. 정의감으로 똘똘 뭉친 베테랑 형사와 돈으로 죄를 덮으려는 안하무인 재벌 3세. 한 치의 양보도 없는 두 사람의 불꽃 튀는 대결이 지금 시작된다!'},
    {item_no: 2, src: 'korean_movie02.webp', title_img: 'korean_movie_title2.webp', banner_img: 'korean_movie_banner2.webp', desc: '교도소 호송 차량이 전복된다. 탈주한 흉악범들을 체포하기 위해, 한 형사가 수감자로 구성된 ‘특수범죄수사과’를 소집한다.'},
    {item_no: 3, src: 'korean_movie03.webp', title_img: 'korean_movie_title3.webp', banner_img: 'korean_movie_banner3.webp', desc: '개인 소장가에게 팔아넘길 고미술품을 손에 넣기 위해, 기지 넘치는 도굴꾼과 기발한 동료들이 위험천만한 절도 행각을 잇달아 벌인다.'},
    {item_no: 4, src: 'korean_movie04.webp', title_img: 'korean_movie_title4.webp', banner_img: 'korean_movie_banner4.webp', desc: '어지러운 세상, 도사를 소환하라! 조선의 히어로가 500년 잠에서 깨어났소이다. 망나니 도사 전우치와 요괴 잡는 세 신선이 현대 서울에서 펼치는 좌충우돌 도술 어드벤처.'},
    {item_no: 5, src: 'korean_movie05.webp', title_img: 'korean_movie_title5.webp', banner_img: 'korean_movie_banner5.webp', desc: '전쟁이 한창이던 1950년, 세상과 동떨어진 한 마을. 불시착한 미군 조종사, 3명의 인민군, 2명의 국군이 운명처럼 이곳에 모이게 된다.'},
    {item_no: 6, src: 'korean_movie06.webp', title_img: 'korean_movie_title6.webp', banner_img: 'korean_movie_banner6.webp', desc: '부티 좔좔 흐르는 전문 킬러. 목욕탕에서 머리를 박고 기억이 백지화되면서 영화 엑스트라 알바를 뛰던 알거지와 인생이 뒤바뀐다. 죽으란 법 없다고 이 와중에 천직 발견?'},
    {item_no: 7, src: 'korean_movie07.webp', title_img: 'korean_movie_title7.webp', banner_img: 'korean_movie_banner7.webp', desc: '보물을 손에 넣을 수만 있다면 뭔들 못하리! 2014년 블록버스터 《해적: 바다로 간 산적》의 속편으로, 강하늘, 한효주, 이광수, 권상우가 출연하는 액션 코미디.'},
    {item_no: 8, src: 'korean_movie08.webp', title_img: 'korean_movie_title8.webp', banner_img: 'korean_movie_banner8.webp', desc: '철옹성 한국은행이 뚫렸다! 모든 시스템을 속이고 거액과 함께 사라진 사기꾼들. 증거와 돈, 모든 것의 행방이 묘연하다. 목표는 하나였지만 서로 달랐던 그들의 속셈. 이제 목숨을 건 추격전이 시작된다. 이 판에선 누구도 믿지 마라.'},
    {item_no: 9, src: 'korean_movie09.webp', title_img: 'korean_movie_title9.webp', banner_img: 'korean_movie_banner9.webp', desc: '암살병기로 키워진 국정원 요원. 제2의 인생을 살겠다더니 방구석에서 웹툰을 그리는 중이다. 몇 년째 악플과 생활고를 면치 못하던 어느 날, 술김에 암살요원 시절을 그리고 단숨에 1등을 찍는데! 1급 기밀을 공개한 뒷감당은 어쩌려고?'},
    {item_no: 10, src: 'korean_movie10.webp', title_img: 'korean_movie_title10.webp', banner_img: 'korean_movie_banner10.webp', desc: '목에 난 이빨 자국, 불탄 시체... 흡혈괴마 소행으로 의심되는 괴사건을 맡은 조선 명탐정. 그런데 수사하는 곳마다 의문의 여인이 나타난다. 그녀와 함께 찾은 단서, 시신에 꽂힌 화살촉의 글자가 수상한데. 범인은 뭔가를 알리고 있다!'},
    {item_no: 11, src: 'korean_movie11.webp', title_img: 'korean_movie_title11.webp', banner_img: 'korean_movie_banner11.webp', desc: '현상금 사냥꾼, 마적단 두목, 열차 털이범. 이 어색한 조합이 일을 냈소. 1930년대 만주 벌판에서 지도 한 장을 둘러싸고 벌어진 희대의 추격전. 누가 최고인지 똑똑히 보라!'},
    {item_no: 12, src: 'korean_movie12.webp', title_img: 'korean_movie_title12.webp', banner_img: 'korean_movie_banner12.webp', desc: '업계 최고의 천공기술자가 꾸린 전문가 팀. 목표는 송유관에서 기름을 훔치는 것. 인생 역전의 꿈을 안고 펼쳐지는 위험하고도 화끈한 작전이 시작된다.'},
    {item_no: 13, src: 'korean_movie13.webp', title_img: 'korean_movie_title13.webp', banner_img: 'korean_movie_banner13.webp', desc: '두목의 신임을 받는 잘나가는 조폭 광호. 갑자기 위기가 닥쳤으니 바로 ‘그분’이 오신 것. 신내림을 안 받으면 죽을지도 모를 운명이라니. 결국 내림굿을 하고 건달과 무당으로 이중생활을 한다. 이 황당한 투잡, 조직에 들키진 않을까?'},
    {item_no: 14, src: 'korean_movie14.webp', title_img: 'korean_movie_title14.webp', banner_img: 'korean_movie_banner14.webp', desc: '중국의 비밀 요원과 어리바리한 흥신소 사장이 무기 밀매 조직을 소탕하기 위해 공조하는데. 자신도 모르는 사이에 범죄 조직과 경찰 양쪽의 목표물이 된다.'},
    {item_no: 15, src: 'korean_movie15.webp', title_img: 'korean_movie_title15.webp', banner_img: 'korean_movie_banner15.webp', desc: '낮에는 교생, 저녁에는 조폭? 교생 실습만으로도 이미 골치가 아픈 두식. 그런데 모시는 형님이 우리 반 학생이라니! 야심만만한 두식은 이 난관을 헤치고 무사히 실습을 마칠 수 있을까?'},
    {item_no: 16, src: 'korean_movie16.jpg', title_img: 'korean_movie_title16.webp', banner_img: 'korean_movie_banner16.webp', desc: '대한민국 최고의 드라이버와 튜닝의 귀재가 만났다. 여기다 인간 내비 형님과 폭주족 동생도 가세했다. 이 무적의 드라이빙 팀더러, 검찰이 찾아와 VIP 비자금을 배달하라는데?'},
    {item_no: 17, src: 'korean_movie17.webp', title_img: 'korean_movie_title17.webp', banner_img: 'korean_movie_banner17.webp', desc: '대한민국 최고 스파이 철수. 폭탄 테러범 잡으러 태국으로 출동했는데, 가는 곳마다 아내가 웬 조각남과 함께 등장해 집중할 수가 없다. 국가와 가정, 대체 뭐부터 지켜야 해?'},
    {item_no: 18, src: 'korean_movie18.webp', title_img: 'korean_movie_title18.webp', banner_img: 'korean_movie_banner18.webp', desc: '강력반 형사생활에 신물 난 강철중. 고등학생 피살사건으로 사표가 반려되자 수사에 나선다. 이 사건 정말 팔수록 가관이네. 배후에 있는 네 놈, 이제 꼼짝없이 죽었어!'},
  ], 

  // 아드레날린 폭발! 액션 SF & 판타지 영화
  [
    {item_no: 1, src: 'action_SF_movie01.webp', title_img: 'action_SF_movie_title1.webp', banner_img: 'action_SF_movie_banner1.webp', desc: '테마파크에 사나운 공룡이 태어났다. 포악한 수준이 인간의 통제를 벗어나면서 혼란의 도가니가 된 파크. 사태 해결을 위해, 동물 행동 전문가와 경영 간부가 손을 잡는다.'},
    {item_no: 2, src: 'action_SF_movie02.webp', title_img: 'action_SF_movie_title2.webp', banner_img: 'action_SF_movie_banner2.webp', desc: '무자비한 용병들이 갑작스러운 공격을 가하며 백악관을 점거한다. 삽시간에 대혼란이 빚어진 상황. 현장에 있던 한 국회 경찰이 딸을 구하고 대통령의 안전을 지키기 위해 위험 속으로 뛰어든다.'},
    {item_no: 3, src: 'action_SF_movie03.webp', title_img: 'action_SF_movie_title3.webp', banner_img: 'action_SF_movie_banner3.webp', desc: '정체를 드러낸 뒤, 다시 쫓기게 된 전직 비밀 요원. 사이버 범죄와 아버지의 미스터리한 죽음에 대한 해답을 찾아 나선다. 《본 얼티메이텀》의 속편.'},
    {item_no: 4, src: 'action_SF_movie04.webp', title_img: 'action_SF_movie_title4.webp', banner_img: 'action_SF_movie_banner4.webp', desc: '화산 폭발이라는 위기를 앞둔 이슬라 누블라. 그곳 공룡들의 보금자리를 찾기 위해 애쓰던 오웬과 클레어는 사악한 계획에 말려든다.'},
    {item_no: 5, src: 'action_SF_movie05.jpg', title_img: 'action_SF_movie_title5.webp', banner_img: 'action_SF_movie_banner5.webp', desc: '죽음을 위장하고 사라진 억만장자. 그가 전 세계에서 최정예 요원들을 선발한다. 6인의 고스트를 기다리는 대담하고 무모한 작전. 잔인한 독재자의 피로 세상을 물들여라!'},
    {item_no: 6, src: 'action_SF_movie06.webp', title_img: 'action_SF_movie_title6.webp', banner_img: 'action_SF_movie_banner6.webp', desc: '육지와 바다를 아우르는 슈퍼히어로 아서 커리. 아틀란티스의 왕이 육지 세계를 상대로 전쟁을 벌이려 하자 이를 막기 위해 나서는데. 이 과정에서 아쿠아맨으로 산다는 일의 참된 의미를 깨닫는다.'},
    {item_no: 7, src: 'action_SF_movie07.webp', title_img: 'action_SF_movie_title7.webp', banner_img: 'action_SF_movie_banner7.webp', desc: '스탁커 펜테코스트의 아들 제이크. 옛 동료 파일럿, 예거 해커와 협공을 펼치며 거대 괴물 카이주에 맞서 인류의 운명을 건 대격전을 시작한다.'},
    {item_no: 8, src: 'action_SF_movie08.webp', title_img: 'action_SF_movie_title8.webp', banner_img: 'action_SF_movie_banner8.webp', desc: '전 세계 시스템을 마음대로 주무르는 천재 해커. 돔이 해커와 손을 잡으며, 가족과 형제에게 등을 돌리고 만다. 하지만 돔을 아직 포기할 수 없는 팀원들. 그를 다시 만나 인류를 구하기 위해 세계의 끝을 향해 질주한다.'},
    {item_no: 9, src: 'action_SF_movie09.webp', title_img: 'action_SF_movie_title9.webp', banner_img: 'action_SF_movie_banner9.webp', desc: '말썽을 피운 벌로 학교 창고를 청소하게 된 4명의 고등학생. 우연히 발견한 비디오 게임을 시작하는 순간, 게임 속 세계로 빨려 들어간다. 각자 선택한 아바타가 되어 임무를 수행해야 하는 네 사람. 과연 무사히 게임을 끝낼 수 있을까?'},
    {item_no: 10, src: 'action_SF_movie10.webp', title_img: 'action_SF_movie_title10.webp', banner_img: 'action_SF_movie_banner10.webp', desc: '고장난 쥬만지 속으로 사라진 스펜서. 그를 구하려면 다시 게임 속으로 들어가야 하는데. 게임의 법칙은 완전히 진화했고, 사막과 설산까지 위험천만한 미션이 이어진다. 현실 세계로 돌아가기 위한 목숨을 건 게임, 주사위는 던져졌다.'},
    {item_no: 11, src: 'action_SF_movie11.webp', title_img: 'action_SF_movie_title11.webp', banner_img: 'action_SF_movie_banner11.webp', desc: '9/11 테러 직후 아프가니스탄으로 파견된 12명의 미군. 말 위에 올라 작전 수행에 나선다. 현지 군벌 지도자를 도와 공동의 적을 물리쳐라! 실화를 바탕으로 한 작품.'},
    {item_no: 12, src: 'action_SF_movie12.webp', title_img: 'action_SF_movie_title12.webp', banner_img: 'action_SF_movie_banner12.webp', desc: '노련한 범죄자 무리가 악랄한 특수 요원이 이끄는 막강한 팀을 상대로 정면 승부를 펼친다. 극한의 스피드를 경험할 수 있는 액션 영화.'},
    {item_no: 13, src: 'action_SF_movie13.webp', title_img: 'action_SF_movie_title13.webp', banner_img: 'action_SF_movie_banner13.webp', desc: '마약왕의 손에 사랑하는 여자를 잃었다. 조수석에 FBI 요원을 태운 돔 토레토. 정의 실현을 위해 거침없이 액셀을 밟는다.'},
    {item_no: 14, src: 'action_SF_movie14.webp', title_img: 'action_SF_movie_title14.webp', banner_img: 'action_SF_movie_banner14.webp', desc: '석유시추선 딥워터 호라이즌에 발생한 이상 징후. 회사는 경고를 무시하고 작업을 강행한다. 그 순간 엄청난 폭발과 함께 화염이 치솟고, 바다는 끔찍한 지옥으로 변한다. 2010년에 발생한 실제 사건을 바탕으로 한 해양 재난 블록버스터.'},
    {item_no: 15, src: 'action_SF_movie15.jpg', title_img: 'action_SF_movie_title15.webp', banner_img: 'action_SF_movie_banner15.webp', desc: '외계인이 지구를 침공했다. 여름 캠프장에 고립된 네 명의 10대, 그들에게 떨어진 위험천만한 임무. 성격도 관심사도 제각각인데, 똘똘 뭉쳐서 세상을 구할 수 있으려나?'},
    {item_no: 16, src: 'action_SF_movie16.jpg', title_img: 'action_SF_movie_title16.webp', banner_img: 'action_SF_movie_banner16.webp', desc: "최정예 국제 스파이의 활약을 그린 액션 스릴러. 영국의 《The Times》로부터 '영화 중간에 나오는 엄청난 반전'이 '심장이 내려앉는 강력한 한 방을 선사'한다는 평과 함께 별점 4점을 받았다."},
    {item_no: 17, src: 'action_SF_movie17.jpg', title_img: 'action_SF_movie_title17.webp', banner_img: 'action_SF_movie_banner17.webp', desc: 'SF 액션 스릴러. 일시적으로 초능력을 발휘하게 해주는 신약의 출처를 파헤치기 위해 세 사람이 손을 잡는다.'},
    {item_no: 18, src: 'action_SF_movie18.webp', title_img: 'action_SF_movie_title18.webp', banner_img: 'action_SF_movie_banner18.webp', desc: '전대미문의 슈퍼히어로 핸콕! 나름 열심히 위기를 해결하는데, 사람들은 냉담하기만 하다. 대체 문제가 뭘까? 이미지 변신이 절실한 히어로를 위해 홍보 전문가가 출동합니다.'},
  ], 

  // 스파이 액션 스릴러 영화
  [
    {item_no: 1, src: 'spy_movie01.webp', title_img: 'spy_movie_title1.webp', banner_img: 'spy_movie_banner1.webp', desc: '절친한 친구와 다른 첩보원 두 명의 죽음을 수사하는 전직 경찰. 곧 부다페스트 주재 인도 대사관에서 활동하는 스파이의 정체를 알게 된다.'},
    {item_no: 2, src: 'spy_movie02.webp', title_img: 'spy_movie_title2.webp', banner_img: 'spy_movie_banner2.webp', desc: '테러리스트들이 핵탄두를 탈취하는 초유의 사건이 발생했다. 이에, 한 과학자가 무모하지만 유능한 장교와 팀을 이뤄 무기를 추적하고 공격을 막으려 한다.'},
    {item_no: 3, src: 'spy_movie03.webp', title_img: 'spy_movie_title3.webp', banner_img: 'spy_movie_banner3.webp', desc: '안전 가옥을 지키고 있던 CIA 요원. 위험한 범죄자가 수감되면서 괴한의 습격을 받는다. 이제 범죄자를 더욱 안전한 곳으로 호송해야 한다.'},
    {item_no: 4, src: 'spy_movie04.jpg', title_img: 'spy_movie_title4.webp', banner_img: 'spy_movie_banner4.webp', desc: '비밀로 가득한 도시. 깊게 뿌리내린 스파이 네트워크. 그 속에서 상상을 초월하는 미션을 수행하려는 요원들. 실수는 용납되지 않는다.'},
    {item_no: 5, src: 'spy_movie05.webp', title_img: 'spy_movie_title5.webp', banner_img: 'spy_movie_banner5.webp', desc: '러시아 첩자로 몰린 CIA 요원 에블린 솔트는 도주를 시작하고, 추적자들을 교묘히 피해 누명을 벗기 위해서 그 동안 익힌 모든 기술을 동원한다.'},
    {item_no: 6, src: 'spy_movie06.webp', title_img: 'spy_movie_title6.webp', banner_img: 'spy_movie_banner6.webp', desc: '냉전 시대 베를린, MI6 요원이 살해되고 중요한 스파이 명단이 사라진다. 이에 급파된 MI6 최고 요원. 그녀는 베를린 지부 요원과 함께 단서를 쥔 이중 스파이를 쫓는다. 명단을 차지하려는 스파이들의 혈투, 누구도 믿어선 안 된다.'},
    {item_no: 7, src: 'spy_movie07.webp', title_img: 'spy_movie_title7.webp', banner_img: 'spy_movie_banner7.webp', desc: '파리의 카타콤과 궁전들을 누비며 왕실의 보석을 훔치기 위한 작전을 세우는 베를린 일당. 이 모든 계획을 하룻밤 안에 끝낼 수 있을까?'},
    {item_no: 8, src: 'spy_movie08.webp', title_img: 'spy_movie_title8.webp', banner_img: 'spy_movie_banner8.webp', desc: '나치에게 점령당한 프랑스. 한 무리의 미국 군인들이 나치 선전용 영화가 상영되는 동안 나치 지도자들을 제거하고자 계획을 세운다. 운명을 결정지을 결투가 시작된다.'},
    {item_no: 9, src: 'spy_movie09.webp', title_img: 'spy_movie_title9.webp', banner_img: 'spy_movie_banner9.webp', desc: '평범한 일상을 만끽하고 있는 전직 CIA 특수 요원 프랭크. 그러나 암살자가 그를 표적으로 삼는다면? 그가 다시 예전 실력을 발휘하는 수밖에.'},
    {item_no: 10, src: 'spy_movie10.webp', title_img: 'spy_movie_title10.webp', banner_img: 'spy_movie_banner10.webp', desc: '그간의 어떤 임무보다 위험한 일을 감행하려 베테랑 스파이가 나섰다. 자신의 직속 부하였던 요원이 24시간 후 중국에서 사형당할 위기에 처한 것. 정치범으로 몰린 그를 죽도록 내버려 둘 순 없다. 반드시 구하리라. 무슨 수를 써서라도!'},
    {item_no: 11, src: 'spy_movie11.webp', title_img: 'spy_movie_title11.webp', banner_img: 'spy_movie_banner11.webp', desc: '조직에 숨어든 북한 스파이를 잡아내야 하는 안기부 요원 두 사람이 온 나라를 뒤흔들 만한 진실을 파헤치기 시작한다.'},
    {item_no: 12, src: 'spy_movie12.webp', title_img: 'spy_movie_title12.webp', banner_img: 'spy_movie_banner12.webp', desc: '여동생을 구하기 위해 남파 공작원이 되다! 19세 명훈은 남으로 내려와 고등학생으로 신분을 위장한다. 그곳에는 뜻밖에도 동생과 이름이 같은 한 소녀가 있다. 시간이 갈수록 위험해지는 임무. 급기야 명훈은 도리어 북의 표적이 된다.'},
    {item_no: 13, src: 'spy_movie13.jpg', title_img: 'spy_movie_title13.webp', banner_img: 'spy_movie_banner13.webp', desc: '한 정보 요원이 비밀 핵무기 시설을 찾는 임무에 착수한다. 첩보 스릴러 영화.'},
    {item_no: 14, src: 'spy_movie14.jpg', title_img: 'spy_movie_title14.webp', banner_img: 'spy_movie_banner14.webp', desc: '정체를 감추고 숨어 지내던 전직 킬러. 어쩌다 도망자 신세가 되어 은밀한 동맹과 함정 그리고 총격전에 휘말린다. 짜릿한 액션이 가득한 스파이 스릴러.'},
    {item_no: 15, src: 'spy_movie15.webp', title_img: 'spy_movie_title15.webp', banner_img: 'spy_movie_banner15.webp', desc: '제1차 세계 대전에 파병된 정무문의 후계자. 전장에서 맨몸으로 싸운 그는 전사자로 기록되고 만다. 7년 뒤 상하이에서는 가면 쓴 절대 고수가 나타나 일본의 압제에 맞서는데. 이소룡이 연기했던 영웅이 견자단의 무술로 화려하게 부활했다!'},
  ],
  
  // 폭력적인 영화
  [
    {item_no: 1, src: 'violent_movie01.webp', title_img: 'violent_movie_title1.webp', banner_img: 'violent_movie_banner1.webp', desc: '성질 더러운 영화배우가 진짜 조폭에게 영화 출연을 제의한다. 이어진 두 남자의 치열한 영화 촬영. 현실보다 더 리얼하고 치명적인 극중극이 펼쳐진다.'},
    {item_no: 2, src: 'violent_movie02.webp', title_img: 'violent_movie_title2.webp', banner_img: 'violent_movie_banner2.webp', desc: '세 명의 어린 시절 친구들이 보험 사기에 휘말리게 되면서, 그들의 우정은 시험대에 놓이게 된다.'},
    {item_no: 3, src: 'violent_movie03.webp', title_img: 'violent_movie_title3.webp', banner_img: 'violent_movie_banner3.webp', desc: '거리의 불량배가 조직폭력배에게 납치당한다. 조직의 계획은 그를 강력계 형사로 키워 경찰 내부 스파이로 만드는 것이다.'},
    {item_no: 4, src: 'violent_movie04.webp', title_img: 'violent_movie_title4.webp', banner_img: 'violent_movie_banner4.webp', desc: "잔인한 살인 사건이 하나둘 이어지는 가운데, 용의자로 지목된 사람은 북에서 온 '귀빈'. 범인 검거에 혈안이 된 형사는 국정원의 간섭으로 번번이 고배를 마시는데. 귀빈을 쫓아 북에서 공작원까지 내려온 상황, 과연 귀빈의 운명은?"},
    {item_no: 5, src: 'violent_movie05.jpg', title_img: 'violent_movie_title5.webp', banner_img: 'violent_movie_banner5.webp', desc: '이제는 은퇴한 살인 청부업자. 그가 보복의 길에 나선다. 가족을 처절하게 배신한 이복 형제에게 진정한 복수가 무엇인지 보여주리라. 긴박감 넘치는 액션으로 가득한 스릴러.'},
    {item_no: 6, src: 'violent_movie06.jpg', title_img: 'violent_movie_title6.webp', banner_img: 'violent_movie_banner6.webp', desc: '케이프타운에서 온 남자. 여동생을 살해한 자를 뒤쫓고 있다. 범죄자와 엘리트가 뒤얽혀 공생하는 로스앤젤레스. 필사의 복수를 위해 그는 악의 소굴 속으로 침투한다.'},
    {item_no: 7, src: 'violent_movie07.webp', title_img: 'violent_movie_title7.webp', banner_img: 'violent_movie_banner7.webp', desc: '미국 최초의 여성 연쇄 살인범 아일린 워노스. 길 위의 여자로 살던 그녀가 성매수 남성들을 살해한다. 왜 죽여야만 했냐고? 사랑하는 사람 때문이라면 그 이유가 될까.'},
    {item_no: 8, src: 'violent_movie08.webp', title_img: 'violent_movie_title8.webp', banner_img: 'violent_movie_banner8.webp', desc: '약혼녀를 잃은 비밀 요원 수현이 폭발한다. 범인으로 지목된 연쇄 살인마 장경철을 찾아내 광기의 대결을 시작하는 수현. 가장 잔혹하고 처절하게 응징한다. 쉽게 죽이는 건 복수가 아니니까.'},
    {item_no: 9, src: 'violent_movie09.jpg', title_img: 'violent_movie_title9.webp', banner_img: 'violent_movie_banner9.webp', desc: '최고의 청부 살인자 덩컨. 은퇴를 준비하던 그는 막대한 퇴직금을 눈앞에 두고 음모에 말려든다. 잔혹한 킬러 군단과의 대결, 마지막 살인 게임의 방아쇠가 당겨졌다.'},
    {item_no: 10, src: 'violent_movie10.webp', title_img: 'violent_movie_title10.webp', banner_img: 'violent_movie_banner10.webp', desc: '디스토피아 세계의 LA. 엄격한 규칙하에 운영되는 비밀 병원에서 범죄자를 치료하는 간호사. 폭동이 닥치고 물건의 주인이 도착하면서 예측 불허의 밤을 맞닥뜨린다.'},
    {item_no: 11, src: 'violent_movie11.jpg', title_img: 'violent_movie_title11.webp', banner_img: 'violent_movie_banner11.webp', desc: '참혹한 학살의 현장. 폭력 조직 최고의 킬러가 어린 소녀를 살려준다. 이 일로 배신자라 낙인찍힌 그는 조직의 표적이 되어 끝없이 죽음의 위협에 쫓긴다.'},
    {item_no: 12, src: 'violent_movie12.jpg', title_img: 'violent_movie_title12.webp', banner_img: 'violent_movie_banner12.webp', desc: '액션 영화인가, 게임 시네마틱인가. 이것은 세상에 없던 장르다. 세계적 창작자들이 극찬하고 오마주한 정병길 감독에게도 꿈같은 도전. 그가 만든 세상에서, 배우 주원은 인간 병기 자체다.'},
    {item_no: 13, src: 'violent_movie13.jpg', title_img: 'violent_movie_title13.webp', banner_img: 'violent_movie_banner13.webp', desc: '무자비한 암살자로 키워진 케이트. 마지막이라 결심한 임무에 실패한다. 누군가 치명적인 독을 먹였기 때문. 죽음까지 남은 시간도, 복수할 수 있는 시간도 단 하루. 그녀가 질주를 시작한다.'},
    {item_no: 14, src: 'violent_movie14.webp', title_img: 'violent_movie_title14.webp', banner_img: 'violent_movie_banner14.webp', desc: '생생하다! 짜릿하다! 1인칭 시점으로 촬영된 신개념 액션. 기억을 잃고 사이보그로 재탄생한 헨리가 아내를 되찾으러 쫓고 쫓기고 달리고 또 달린다. 아드레날린 폭발에 주의할 것.'},
    {item_no: 15, src: 'violent_movie15.webp', title_img: 'violent_movie_title15.webp', banner_img: 'violent_movie_banner15.webp', desc: '루마니아에 임무를 수행하러 떠난 동생. 미지의 인물을 쫓던 그가 싸늘한 주검이 되어 돌아왔다. 누가 그의 목숨을 앗아갔나? 복수를 위해 전장에 다시 발을 들인 전직 군인. 동생의 생전 파트너와 협력해 베일에 싸인 적을 찾으러 나선다.'},
  ], 
  // 외계인이 등장하는 SF
  [
    {item_no: 1, src: 'alien_movie01.webp', title_img: 'alien_movie_title1.webp', banner_img: 'alien_movie_banner1.webp', desc: '인간과 식인 외계 생물 간에 전쟁이 일어나고, 한 남자가 모든 위험을 불사하며 이 상황을 종식하려 한다.'},
    {item_no: 2, src: 'alien_movie02.webp', title_img: 'alien_movie_title2.webp', banner_img: 'alien_movie_banner2.webp', desc: '개척선 커버넌트호가 미지의 행성에서 온 신호를 감지한다. 지구와 닮은 곳이란 기대에 탐사 팀이 파견되지만, 대원들이 아프기 시작하고 의문의 남자가 나타난다. 이 행성엔 어떤 비밀이 있나.'},
    {item_no: 3, src: 'alien_movie03.webp', title_img: 'alien_movie_title3.webp', banner_img: 'alien_movie_banner3.webp', desc: '최초의 화성 생명체를 발견했다! 전 세계의 흥분도 잠시, 생명체는 무서운 속도로 자라 인류를 위협하는 지능까지 갖추고, 이로써 위대한 발견은 끔찍한 공포로 뒤바뀐다.'},
    {item_no: 4, src: 'alien_movie04.webp', title_img: 'alien_movie_title4.webp', banner_img: 'alien_movie_banner4.webp', desc: '타임캡슐에서 의문의 숫자를 잔뜩 발견한 MIT 천체물리학 교수와 그의 아들. 그렇게 인류를 멸망시킬 대재앙의 비밀이 드러나기 시작한다.'},
    {item_no: 5, src: 'alien_movie05.jpg', title_img: 'alien_movie_title5.webp', banner_img: 'alien_movie_banner5.webp', desc: '누구도 믿지 않았다, 그의 악몽이 현실이 되리라고는. 외계 세력의 침략에 맞서 소중한 가족을 지키려는 남자. 그의 처절한 사투 속에, 또 다른 악몽이 발톱을 드러낸다.'},
    {item_no: 6, src: 'alien_movie06.webp', title_img: 'alien_movie_title6.webp', banner_img: 'alien_movie_banner6.webp', desc: '외계인 침공으로 인류의 생존이 위협받는 가운데, 노련한 하사가 용감무쌍한 해병대를 이끌고 인류의 미래를 지켜내고자 한다.'},
    {item_no: 7, src: 'alien_movie07.webp', title_img: 'alien_movie_title7.webp', banner_img: 'alien_movie_banner7.webp', desc: '미지의 존재 ‘디 아더스’에게 네 번의 침공을 당한 지구. 당연시했던 모든 것이 사라지고 폐허만이 남은 지금, 캐시는 다섯 번째 침공이 시작되기 전 동생을 찾아야 한다. 인간의 모습을 한 그들에 맞서 인류는 무사할 수 있을까?'},
    {item_no: 8, src: 'alien_movie08.jpg', title_img: 'alien_movie_title8.webp', banner_img: 'alien_movie_banner8.webp', desc: '거대한 비밀을 품고 있는 작은 마을에서 뭔가 일이 벌어지고 있다. 사람들은 17년 전 마을에 운석이 떨어졌다고 하는데, 운석보다 더 강력한 무언가가 떨어졌던 건 아닐까?'},
    {item_no: 9, src: 'alien_movie09.webp', title_img: 'alien_movie_title9.webp', banner_img: 'alien_movie_banner9.webp', desc: '우주 경찰인 발레리안과 로렐린에게 미션이 떨어졌다. 바로 멸종 위기의 생명체를 되찾고, 납치된 사령관을 구해 우주를 지키는 것.'},
    {item_no: 10, src: 'alien_movie10.jpg', title_img: 'alien_movie_title10.webp', banner_img: 'alien_movie_banner10.webp', desc: '외계 물체가 지구에 착륙해 어딘가로 신호를 보낸다. 그 신호를 따라 우주로 떠나는 살바레호. 위험한 임무를 맡은 니코와 대원들은 초반부터 역경과 갈등에 부딪친다.'},
    {item_no: 11, src: 'alien_movie11.webp', title_img: 'alien_movie_title11.webp', banner_img: 'alien_movie_banner11.webp', desc: "28년간 외계인들의 임시 수용소로 사용된 '디스트릭트 9'. 무법천지로 변해버린 이곳에서 외계인 퇴거 작전이 진행되는 가운데, 작전 책임자가 뜻밖의 사고를 당한다."},
    {item_no: 12, src: 'alien_movie12.jpg', title_img: 'alien_movie_title12.webp', banner_img: 'alien_movie_banner12.webp', desc: '초현실적이고 감동적인 SF 드라마 영화. 외로운 우주 비행사(애덤 샌들러)가 우주선에서 맞닥뜨린 신비의 생명체와 유대를 형성하는 이야기를 그렸다.'},
    {item_no: 13, src: 'alien_movie13.jpg', title_img: 'alien_movie_title13.webp', banner_img: 'alien_movie_banner13.webp', desc: '외계인이 지구를 침공했다. 여름 캠프장에 고립된 네 명의 10대, 그들에게 떨어진 위험천만한 임무. 성격도 관심사도 제각각인데, 똘똘 뭉쳐서 세상을 구할 수 있으려나?'},
    {item_no: 14, src: 'alien_movie14.webp', title_img: 'alien_movie_title14.webp', banner_img: 'alien_movie_banner14.webp', desc: '한 번 죽었다가 다시 살아난 이들. 정체불명의 괴물을 죽여 100점을 채우면 3가지 보상을 받을 수 있다: 최신 무기, 죽은 자의 부활, 그리고 현실 세계로의 귀환.'},
    {item_no: 15, src: 'alien_movie15.webp', title_img: 'alien_movie_title15.webp', banner_img: 'alien_movie_banner15.webp', desc: '내 아이가 사실 다른 세계에서 온 존재라면? 입양된 후 축복과 사랑 속에서 자란 평범한 소년 브랜든. 어느 날, 숨겨져 있던 초인적인 힘을 발견하곤 사악한 본성을 드러내기 시작한다. 인류를 위협할 공포, 붉은 복면의 소년을 조심하라.'},
    {item_no: 16, src: 'alien_movie16.jpg', title_img: 'alien_movie_title16.webp', banner_img: 'alien_movie_banner16.webp', desc: '멸망의 신호탄인가, 신이 주신 기회인가. 외계 침입으로 딜레마에 빠진 인류를 그린 홍콩 SF 블록버스터. 시각효과 감독 출신이 연출을 맡아 대재앙이 닥친 미래와 로봇 전투를 완성도 높게 구현했다.'},
    {item_no: 17, src: 'alien_movie17.jpg', title_img: 'alien_movie_title17.webp', banner_img: 'alien_movie_banner17.webp', desc: '지구를 떠나 우주 이주지로 향하던 로빈슨 가족. 그들은 뜻밖의 사고로 낯선 행성에 불시착한다. 온갖 위험이 도사린 미지의 땅. 목표는 하나, 어떻게든 살아남아야 한다.'},
    {item_no: 18, src: 'alien_movie18.webp', title_img: 'alien_movie_title18.webp', banner_img: 'alien_movie_banner18.webp', desc: '종말이 찾아온 세계. 인간이 인간다울 수 없게 된 그곳은 어떤 모습일까. 그 끔찍하고 처참한 세상이 실험적인 단편 영화를 통해 펼쳐진다. 영화감독 닐 블롬캠프가 제작한 시리즈.'},
  ]
]
let action_sec_title = [
  '액션 스릴러 영화', '흥미진진한 한국 영화','아드레날린 폭발! 액션 SF & 판타지 영화', '스파이 액션 스릴러 영화', '폭력적인 영화', '외계인이 등장하는 SF'
]
// id 값을 파일이름과 동일하게 해서 공유
let action_sec_id = [
  'action_movie', 'korean_movie', 'action_SF_movie', 'spy_movie', 'violent_movie', 'alien_movie'
]
let action_banner_desc = 
[
  '어린 나이에 조직에 거두어져 암살자로 성장한 남자. 유일하게 마음을 주던 친구가 잔인하게 처형당하자 복수를 다짐하고 조직을 탈출한다. 그리고 몇 년 후, 조직의 모든 암살 시도를 막아내기 위한 고독한 분투를 시작한다.', 

  '캐피톨에서 투쟁을 이어가는 캣니스 에버딘과 최정예 요원들. 이들의 목표는 하나. 잔혹한 독재자 스노우 대통령을 겨냥하여 판엠에 자유를 찾아주는 것.', 

  "뜻밖의 사건이 몰고 온 파국. 지구가 초거대 괴수들의 각축장으로 변하면서, 인류의 생존이 일촉즉발의 위기에 처한다."
]


// KIDS: cate값이 1일 때 사용
const KIDS = 
[
  // kid_click_contents
  [
    {item_no: 1, src: 'kc_content01.webp', title_img: 'kc_content_title1.webp', banner_img: 'kc_content_banner1.webp', desc: '늘 둘이서만 놀아 지루해진 검볼과 다윈. 새 친구를 찾기로 한다. 우리랑 맘이 맞는 친구가 어디 없을까? 로빈슨 아저씨 덕분에 살아난 검볼은 어떻게든 은혜를 갚으려 한다.'},
    {item_no: 2, src: 'kc_content02.webp', title_img: 'kc_content_title2.webp', banner_img: 'kc_content_banner2.webp', desc: '바닷속 파인애플 집에 사는 노랗고 네모난 스폰지밥. 특기는 햄버거 뒤집기요, 취미는 해파리 사냥이라지. 맛있는 음식을 뚝딱 만들어내고, 친구들과 짜릿한 모험도 즐기는 하루하루. 듣기만 해도 신나? 그럼 우리 같이 떠나!'},
    {item_no: 3, src: 'kc_content03.webp', title_img: 'kc_content_title3.webp', banner_img: 'kc_content_banner3.webp', desc: '티격태격하며 낚시를 하는 카타라와 소카. 이 두 남매 앞에 놀라운 광경이 펼쳐진다. 커다란 빙하 속에서 남자아이가 튀어나온 것. 그것도 아주 멀쩡하게 살아있는 모습으로.'},
    {item_no: 4, src: 'kc_content04.webp', title_img: 'kc_content_title4.webp', banner_img: 'kc_content_banner4.webp', desc: '정체불명의 사이버 공격으로 도시의 디지털 시스템에 오류가 발생한다. 그러자 한 소년이 혼란을 해결하기 위해 새로운 디지몬 친구와 함께 네트워크 건너편의 세계로 향한다.'},
    {item_no: 5, src: 'kc_content05.webp', title_img: 'kc_content_title5.webp', banner_img: 'kc_content_banner5.webp', desc: '상상력 넘치는 애니메이션 시리즈. 두 명의 고등학생이 악당들로부터 도시를 지키기 위해 슈퍼히어로로 변신한다.'},
    {item_no: 6, src: 'kc_content06.jpg', title_img: 'kc_content_title6.webp', banner_img: 'kc_content_banner6.webp', desc: '모두 제 자식이 특별하겠지만, 내 아들은 정말 특별해! 어린 디온을 홀로 키우는 니콜. 설명할 수 없는 이상하고 무서운 힘이 아들에게 있다는 것을 알고 두려움에 빠진다.'},
    {item_no: 7, src: 'kc_content07.webp', title_img: 'kc_content_title7.webp', banner_img: 'kc_content_banner7.webp', desc: ' 닌자고 세상을 지켜라! 카이, 제이, 콜, 쟌은 자기 내면에 깃든 원소 파워와 스핀짓주 무기를 마스터해야 한다! 악의 세력으로부터 소중한 사람을 지키는 닌자들이니까.'},
    {item_no: 8, src: 'kc_content08.webp', title_img: 'kc_content_title8.webp', banner_img: 'kc_content_banner8.webp', desc: '라이징 볼트태클즈에 가입한 신예 포켓몬 트레이너 리코와 로드. 베일에 싸인 조직, 익스플로러즈의 음모를 막으며 포켓몬의 세계에서 종횡무진 모험을 펼친다.'},
    {item_no: 9, src: 'kc_content09.webp', title_img: 'kc_content_title9.webp', banner_img: 'kc_content_banner9.webp', desc: '닌자고 세상을 지켜라! 카이, 제이, 콜, 쟌은 자기 내면에 깃든 원소 파워와 스핀짓주 무기를 마스터해야 한다! 악의 세력으로부터 소중한 사람을 지키는 닌자들이니까.'},
    {item_no: 10, src: 'kc_content10.webp', title_img: 'kc_content_title10.webp', banner_img: 'kc_content_banner10.webp', desc: '호기심 많은 애벌레 레드와 옐로우, 하수구는 이 둘의 보금자리. 저 위에 있는 인간 세상에선 날마다 신기한 것들이 하나, 둘, 떨어진다. 이건 또 뭐에 쓰는 물건이냐!'},
    {item_no: 11, src: 'kc_content11.webp', title_img: 'kc_content_title11.webp', banner_img: 'kc_content_banner11.webp', desc: '오늘은 뭐 하고 놀지? 어디를 가도 늘 말썽을 몰고 다니는 명랑 소녀 자두. 언제나 왁자지껄한 가족, 친구들과 함께하니 요란함도, 재미도 두 배! 그럼 사건 사고 끊이지 않는 자두의 일상 속으로 어디 한번 빠져들어 볼까나?'},
    {item_no: 12, src: 'kc_content12.jpg', title_img: 'kc_content_title12.webp', banner_img: 'kc_content_banner12.webp', desc: '월드스타 라바가 넷플릭스와 만났다! 더 커진 웃음, 더 새로운 친구들, 라바 사상 최초 ‘인간’의 등장까지! 뉴욕을 떠나 무인도에 불시착한 레드와 옐로우의 좌충우돌 생존기! 과연 그들은 무사히 집에 돌아갈 수 있을까?'},
  ], 
  // kid_best_contents
  [
    {item_no: 1, src: 'kb_content1.webp', title_img: 'kb_content_title1.webp', banner_img: 'kb_content_banner1.webp', desc: '무사가 되고 싶은 개 행크. 고양이 마을을 없애버리려는 음모에 자기도 모르게 휘말려, 차가운 편견 속에서 혹독한 수업을 받게 된다.'},
    {item_no: 2, src: 'kb_content2.webp', title_img: 'kb_content_title2.webp', banner_img: 'kb_content_banner2.webp', desc: '마녀가 지배하는 신비한 세계에 발을 들여놓은 치히로. 마녀에게 거역하는 자는 동물로 변하게 되는데...'},
    {item_no: 3, src: 'kb_content3.webp', title_img: 'kb_content_title3.webp', banner_img: 'kb_content_banner3.webp', desc: '아버지가 물려준 모자 가게를 지키는 수수한 소녀 소피. 전쟁도, 미녀의 심장을 노리는 마법사의 소문도 먼 세상 이야기일 뿐. 하지만 마녀의 저주로 할머니가 되면서, 소피의 인생이 회전목마처럼 힘차게 움직이기 시작한다.'},
    {item_no: 4, src: 'kb_content4.webp', title_img: 'kb_content_title4.webp', banner_img: 'kb_content_banner4.webp', desc: '이유는 모르겠지만 먼 옛날로 되돌아간 짱구. 도착하자마자 무사들의 전쟁과 정치가들의 음모에 끼어들고. 좌충우돌 짱구가 역사를 바꾼다!'},
    {item_no: 5, src: 'kb_content5.jpg', title_img: 'kb_content_title5.webp', banner_img: 'kb_content_banner5.webp', desc: '두려움을 모르는 10대 소년이 고카트에 매혹된다. 멋진 친구들과 함께하는 짜릿한 질주와 흥분의 레이싱. 무뚝뚝한 전직 레이서에게 코치를 받으며, 우승을 향해 달린다!'},
    {item_no: 6, src: 'kb_content6.webp', title_img: 'kb_content_title6.webp', banner_img: 'kb_content_banner6.webp', desc: '고개 숙인 아버지들을 어떻게든 강하게 만들려는 무서운 음모. 여기에 휘말린 짱구 아빠도 로봇으로 개조돼 집으로 돌아오는데. 지금 짱구 가족의 사랑이 시험대에 오른다!'},
    {item_no: 7, src: 'kb_content7.webp', title_img: 'kb_content_title7.webp', banner_img: 'kb_content_banner7.webp', desc: '시간을 넘어 짱구 앞에 나타난 미래의 약혼녀 다미. 어른이 된 짱구를 네오 시티의 지배자로부터 구하기 위해 지금 어린 짱구에게 도움을 요청한다.'},
    {item_no: 8, src: 'kb_content8.jpg', title_img: 'kb_content_title8.webp', banner_img: 'kb_content_banner8.webp', desc: '아무도 살지 않는 아파트를 타고 바다 위를 떠도는 초등학생들. 이 아이들이 집으로 돌아가는 항해 과정을 그린 성장 애니메이션.'}
  ], 
  // kid_korean_series
  [
    {item_no: 1, src: 'kor_content01.webp', title_img: 'kor_content_title1.webp', banner_img: 'kor_content_banner1.webp', desc: '테마파크에 공룡이 나타났어! 화면 속에서 걸어 나왔다는데 어떻게 된 걸까? 다 함께 백악기 시대로 돌아가서 무슨 일이 벌어진 건지 알아보자. 차탄과 카봇이 함께라면 두려울 게 없으니까. 그리고 백악기 시대의 공룡 카봇도 만나는 거야!'},
    {item_no: 2, src: 'kor_content02.webp', title_img: 'kor_content_title2.webp', banner_img: 'kor_content_banner2.webp', desc: '외모는 달라도 이 오리는 제 아이가 분명합니다! 양계장을 탈출한 자유로운 영혼의 암탉이 가슴으로 낳은 오리 아들과 나누는, 피보다 진하고 눈물보다 뜨거운 사랑 이야기.'},
    {item_no: 3, src: 'kor_content03.webp', title_img: 'kor_content_title3.webp', banner_img: 'kor_content_banner3.webp', desc: '앗, 여기가 어디지? 기억을 잃은 아기 공룡 알로가 뽀롱뽀롱 숲에 떨어졌어요. 알로를 도와주러 뽀로로와 친구들이 나서지만, 이런! 외계인 공룡 사냥꾼이 나타나 알로와 크롱을 데려가 버렸어요. 위기에 처한 친구들을 구해낼 수 있을까요?'},
    {item_no: 4, src: 'kor_content04.webp', title_img: 'kor_content_title4.webp', banner_img: 'kor_content_banner4.webp', desc: '컴퓨터 게임 속으로 들어가게 된 뽀로로와 친구들. 과연 게임 실력을 발휘하여 공주를 구할 수 있을까요?'},
    {item_no: 5, src: 'kor_content05.webp', title_img: 'kor_content_title5.webp', banner_img: 'kor_content_banner5.webp', desc: '저주를 풀고 자신들을 원래 모습으로 돌려 줄 여인을 애타게 찾던 일곱 왕자. 이들 앞에 사악한 새엄마의 마법 구두를 신은 스노우 화이트가 나타난다.'},
    {item_no: 6, src: 'kor_content06.webp', title_img: 'kor_content_title6.webp', banner_img: 'kor_content_banner6.webp', desc: '슈퍼썰매 대회에서 전설의 챔피언 백호 팀과 대결하게 된 뽀로로와 친구들. 빙판과 눈 속을 달리며 신나는 모험을 펼쳐요.'},
    {item_no: 7, src: 'kor_content07.webp', title_img: 'kor_content_title7.webp', banner_img: 'kor_content_banner7.webp', desc: '다들 가진 것 없이 가난하던 그 시절 서울. 어린 두 형제가 가족, 친구들과 함께하는 평범하고도 특별한 일상이 펼쳐진다.'},
    {item_no: 8, src: 'kor_content08.webp', title_img: 'kor_content_title8.webp', banner_img: 'kor_content_banner8.webp', desc: '빙하에서 막 깨어난 아기 공룡. 현대 사회에 잘 적응하지도 못하고 괴팍한 집주인 때문에 힘들어하다가, 괴짜 친구들과 함께 얼음별로 시간 여행을 떠난다.'},
    {item_no: 9, src: 'kor_content09.webp', title_img: 'kor_content_title9.webp', banner_img: 'kor_content_banner9.webp', desc: '해적 이야기를 읽은 꼬마 펭귄 뽀로로와 친구들이 숨겨진 보물을 찾아 신나는 모험을 떠나요. 하지만 악당 선장이 친구들의 뒤를 바짝 쫓아옵니다.'},
    {item_no: 10, src: 'kor_content10.webp', title_img: 'kor_content_title10.webp', banner_img: 'kor_content_banner10.webp', desc: '온 세상에 눈을 뿌리는 마법 같은 마을이 있다고? 우연히 이 마을을 발견한 용감한 펭귄 뽀로로와 친구들. 모든 것을 녹여버리려는 용암 괴물로부터 마을을 지켜야 해요.'},
    {item_no: 11, src: 'kor_content11.jpg', title_img: 'kor_content_title11.webp', banner_img: 'kor_content_banner11.webp', desc: "'꺼억' 트림하고 '뿌직' 방귀 뀌는 애벌레 친구들, 레드와 옐로우. 섬을 떠나 대도시에서 새로운 생활을 시작하는 둘의 이야기를 따라가 보아요!"},
  ],
  // kid_series
  [
    {item_no: 1, src: 'ks_content01.webp', title_img: 'ks_content_title1.webp', banner_img: 'ks_content_banner1.webp', desc: '원더마을에서 3대의 자동차가 마술 쇼를 펼친대요. 핑크퐁과 친구들도 즐거운 시간을 보내네요. 그런데 저런, 친구들이 위험에 빠졌어요. 호기가 용기를 내 모두를 구해줘야 해요!'},
    {item_no: 2, src: 'ks_content02.webp', title_img: 'ks_content_title2.webp', banner_img: 'ks_content_banner2.webp', desc: '특별한 날이 없다고? 트롤 여왕 파피는 문득 깨닫는다. 트롤은 매일이 새로운데, 버겐은 매일이 똑같다는 사실! 버겐을 위한 홀리데이 만들기 대작전은 그렇게 시작됐다.'},
    {item_no: 3, src: 'ks_content03.jpg', title_img: 'ks_content_title3.webp', banner_img: 'ks_content_banner3.webp', desc: '상하이에서 임무를 수행하던 아이비와 잭이 바일에 납치된다. 현명한 선택으로 카르멘을 도와라. 직접 참여하는 인터랙티브 범죄 작전, 흥미진진한 모험이 기다린다!'},
    {item_no: 4, src: 'ks_content04.jpg', title_img: 'ks_content_title4.webp', banner_img: 'ks_content_banner4.webp', desc: '속임수를 써서 마이티 익스프레스의 본부를 차지한 앙큼한 스텔라와 조수 리키. 꼬마 기차 플리커는 친구들을 구출하고 위기에 빠진 기찻길 마을을 구할 수 있을까?'},
    {item_no: 5, src: 'ks_content05.jpg', title_img: 'ks_content_title5.webp', banner_img: 'ks_content_banner5.webp', desc: '크럽 교장 선생님이 단단히 뿔났다. 조지와 해롤드의 나무집을 없애버리겠다고? 둘만의 힘으론 막을 수 없다! 우리의 선택으로 나무집을 구해내는 인터랙티브 스페셜.'},
    {item_no: 6, src: 'ks_content06.jpg', title_img: 'ks_content_title6.webp', banner_img: 'ks_content_banner6.webp', desc: '거대한 괴물과 좀비들이 쫓아온다. 믿지 못할 재앙 속에서, 그래도 유쾌하게 버티는 소년. 때마침 친구들을 만나서 전력 보강! 포기하지 말자, 무조건 살아남는 거야!'},
    {item_no: 7, src: 'ks_content07.jpg', title_img: 'ks_content_title7.webp', banner_img: 'ks_content_banner7.webp', desc: '멜빈이 핼러윈을 없애려 한다고? 우리는 반댈세! 장난칠 궁리를 할 때 가장 똘똘해지는 조지와 해롤드. 어떻게든 오싹한 축제를 되살리고 말 테다. 확실하게 합법적으로!'},
    {item_no: 8, src: 'ks_content08.jpg', title_img: 'ks_content_title8.webp', banner_img: 'ks_content_banner8.webp', desc: '액션 가득한 애니메이션 스페셜. 의리 넘치는 한 기차가 속임수에 넘어가 교활한 기차와 경주를 벌인다.'},
    {item_no: 9, src: 'ks_content09.jpg', title_img: 'ks_content_title9.webp', banner_img: 'ks_content_banner9.webp', desc: '코리 카슨의 동생 크리시. 궁금한 것도 하고 싶은 것도 많대요. 게임도 하고 썰매도 타고 신나게 달려볼까요? 딸꾹질 같은 소동도 있지만 괜찮아요. 크리시에겐 모든 게 재밌으니까요.'},
    {item_no: 10, src: 'ks_content10.jpg', title_img: 'ks_content_title10.webp', banner_img: 'ks_content_banner10.webp', desc: '기차들 모두 집합! 이 편지들을 당장 산타에게 보내야 해. 마이티 익스프레스가 새로운 우편 열차와 함께 달린다. 기찻길 마을 아이들의 행복한 크리스마스를 위하여.'},
    {item_no: 11, src: 'ks_content11.jpg', title_img: 'ks_content_title11.webp', banner_img: 'ks_content_banner11.webp', desc: '오늘은 우정의 날, 트루가 친구들에게 우정 팔찌를 나눠줬어요. 그런데 대왕 그리피티에게 팔찌를 빼앗기고 만 그리젤다. 주문에 걸려 인어로 변신까지? 얘들아, 도와줘!'},
  ]
]
let kids_sec_title = ['클릭! 인기 콘텐츠', '취향저격 베스트 콘텐츠', '한국 영화', '어린이 가족 시리즈']
let kids_sec_id = ['kid_click_contents', 'kid_best_contents','kid_korean_series' , 'kid_series']
let kids_banner_desc = [
  '닌자고 세상을 지켜라! 카이, 제이, 콜, 쟌은 자기 내면에 깃든 원소 파워와 스핀짓주 무기를 마스터해야 한다! 악의 세력으로부터 소중한 사람을 지키는 닌자들이니까.',
  '이유는 모르겠지만 먼 옛날로 되돌아간 짱구. 도착하자마자 무사들의 전쟁과 정치가들의 음모에 끼어들고. 좌충우돌 짱구가 역사를 바꾼다!',
  '빙하에서 막 깨어난 아기 공룡. 현대 사회에 잘 적응하지도 못하고 괴팍한 집주인 때문에 힘들어하다가, 괴짜 친구들과 함께 얼음별로 시간 여행을 떠난다.'
]

// <img src="../img/NETFLEX/KIDS/kid_korean_series/kor_content01.webp" alt="">
// <img src="../img/NETFLEX/KIDS/kid_korean_series/kor_content_b_t01.webp" alt="">


// lomance: cate값이 2일 때 사용
const NAV_LOMANCE = 
[
  // lomance_click_contents
  [
    {item_no: 1, src: 'lo_click_content01.jpg', title_img: 'lo_click_content_title1.webp', banner_img: 'lo_click_content_banner1.webp', desc: '보육원에서 힘든 어린 시절을 보낸 니카와 리젤은 한 가정에 함께 입양된다. 그런데 언제부턴가 예상치 못한 강렬한 감정이 서로를 끌어당기기 시작한다.'},
    {item_no: 2, src: 'lo_click_content02.webp', title_img: 'lo_click_content_title2.webp', banner_img: 'lo_click_content_banner2.webp', desc: '어느 날, 우연히 만난 그녀에게 첫눈에 반했다. 그녀를 만날수록 커져가는 사랑. 행복에 젖어든 순간, 그녀가 자신의 비밀을 털어놓는다. 내가 네 미래를 알 수 있다면 어떻게 할래? 우리의 시간이 서로 다르게 흐른다면?'},
    {item_no: 3, src: 'lo_click_content03.webp', title_img: 'lo_click_content_title3.webp', banner_img: 'lo_click_content_banner3.webp', desc: '건달 태일은 사채를 쓴 호정에게 돈을 받으러 갔다가 첫눈에 반한다. 만나주면 빚을 탕감해 주겠다며 다가가고 새 출발을 꿈꾸지만 사랑도 아픔도 이제 시작일 뿐.'},
    {item_no: 4, src: 'lo_click_content04.webp', title_img: 'lo_click_content_title4.webp', banner_img: 'lo_click_content_banner4.webp', desc: '옛 여자친구가 자신에 대한 기억을 모두 지우기 위해 실험적인 치료를 받았다는 사실을 알게 된 한 남자는 자신도 같은 치료를 받기로 한다.'},
    {item_no: 5, src: 'lo_click_content05.webp', title_img: 'lo_click_content_title5.webp', banner_img: 'lo_click_content_banner5.webp', desc: '가벼운 만남과 인간미 없는 데이팅 앱의 시대. 19금 칼럼을 떠맡은 신입 기자와 냉소적인 20대 여자가 데이트의 딜레마에 빠진다.'},
    {item_no: 6, src: 'lo_click_content06.webp', title_img: 'lo_click_content_title6.webp', banner_img: 'lo_click_content_banner6.webp', desc: '병에 걸린 거물 사업가가 수명을 연장하는 대가로 저승사자를 인간 세계에 머물게 해 준다. 그리고 저승사자는 지상에서 사랑을 경험하고 새로운 것들을 알아간다.'},
    {item_no: 7, src: 'lo_click_content07.webp', title_img: 'lo_click_content_title7.webp', banner_img: 'lo_click_content_banner7.webp', desc: '목소리만큼은 끝내주는 고도 비만의 여성 한나. 전신 성형을 감행한 끝에 1년 후 인기스타로 급부상한다.'},
    {item_no: 8, src: 'lo_click_content08.webp', title_img: 'lo_click_content_title8.webp', banner_img: 'lo_click_content_banner8.webp', desc: '우연한 계기로 만난 내성적인 서점 주인 윌리엄 대커와 할리우드 인기 여배우 안나 스콧은 현실이라 믿기 어려운 로맨스에 빠진다.'},
    {item_no: 9, src: 'lo_click_content09.jpg', title_img: 'lo_click_content_title9.webp', banner_img: 'lo_click_content_banner9.webp', desc: '탈북까지 감행했지만 여전히 녹록지 않은 현실이 힘겨운 로기완. 그러던 어느 날, 피폐한 삶을 살던 한 여자를 우연히 만나면서 다시 살아갈 이유를 찾게 된다.'},
    {item_no: 10, src: 'lo_click_content10.jpg', title_img: 'lo_click_content_title10.webp', banner_img: 'lo_click_content_banner10.webp', desc: '상사 때문에 퇴근을 못 하는 두 비서(조이 도이치 & 글렌 파월)가 한 가지 방법을 생각해 낸다. 서로의 직장 상사(루시 리우 & 테이 딕스)를 사랑에 빠지게 하는 거야!'},
    {item_no: 11, src: 'lo_click_content11.jpg', title_img: 'lo_click_content_title11.webp', banner_img: 'lo_click_content_banner11.webp', desc: '낯선 도시에 근사한 직장을 구한 저널리스트 제니. 뉴욕을 떠나야 하는데, 애인이 먼저 떠나버렸다. 실연의 상처엔 역시 친구들과 술 한잔. 뉴욕에서 마지막을 불태우리라!'},
    {item_no: 12, src: 'lo_click_content12.webp', title_img: 'lo_click_content_title12.webp', banner_img: 'lo_click_content_banner12.webp', desc: '화려한 뉴욕의 삶과 사랑스러운 약혼녀까지. 남부러울 것 없이 살아가던 뉴랜드의 앞에, 약혼녀의 사촌 엘렌이 운명처럼 등장한다. 자유분방하고 매력적인 엘렌에게 걷잡을 수 없이 끌리는 뉴랜드. 하지만 금지된 사랑의 끝이 과연 아름다울까.'},
  ], 
  // usa_lomance_contents
  [
    {item_no: 1, src: 'usa_lo_content01.jpg', title_img: 'usa_lo_content_title1.webp', banner_img: 'usa_lo_content_banner1.webp', desc: '좋아, 모험을 떠나는 거야. 상사 대신 1년 동안 파리의 마케팅 회사에서 일하게 된 에밀리. 세상에서 가장 낭만적인 도시에 도착한 소감은? 프랑스어를 배워야 했어!'},
    {item_no: 2, src: 'usa_lo_content02.jpg', title_img: 'usa_lo_content_title2.webp', banner_img: 'usa_lo_content_banner2.webp', desc: '두 아이와 멋진 남편이 있다. 대신 자유와 열정은 없다. 안정된 결혼과 지루한 성생활에 지쳐가는 빌리. 그녀는 남몰래 일기를 쓰기 시작한다. 옛 남자 브래드와 보낸 뜨거운 날들을 떠올리며.'},
    {item_no: 3, src: 'usa_lo_content03.jpg', title_img: 'usa_lo_content_title3.webp', banner_img: 'usa_lo_content_banner3.webp', desc: '무려 아홉 형제를 포함한 후견인의 가족과 시골 목장 주택에서 함께 살아가는 10대 소녀의 이야기를 그린 성장 드라마. 앨리 노백의 인기 소설이 원작이다.'},
    {item_no: 4, src: 'usa_lo_content04.webp', title_img: 'usa_lo_content_title4.webp', banner_img: 'usa_lo_content_banner4.webp', desc: '독립심이 강한 싱글맘 로렐라이는 아이비리그 진학은 문제없을 정도로 명석한 두뇌를 가진 딸 로리를 키운다. 이 모녀 사이에는 항상 재치 넘치는 대화가 끊이지 않는다.'},
    {item_no: 5, src: 'usa_lo_content05.jpg', title_img: 'usa_lo_content_title5.webp', banner_img: 'usa_lo_content_banner5.webp', desc: '자유분방한 조지아가 북부로 이사 온다. 두 아이, 지니와 오스틴을 데리고. 애들을 위해 부유한 동네에서 새 출발을 하는 거야! 하지만 그 길은 생각만큼 순탄하지 않다.'},
    {item_no: 6, src: 'usa_lo_content06.jpg', title_img: 'usa_lo_content_title6.webp', banner_img: 'usa_lo_content_banner6.webp', desc: '브리저튼 가문의 맏딸 다프네가 런던의 결혼 시장에 데뷔한다. 만족스러운 첫걸음을 떼는 그녀. 한편, 헤이스팅스 공작 사이먼이 돌아오면서 사교계는 경쟁에 돌입한다.'},
    {item_no: 7, src: 'usa_lo_content07.jpg', title_img: 'usa_lo_content_title7.webp', banner_img: 'usa_lo_content_banner7.webp', desc: '위대한 사랑 이야기를 꽃피우고 상류층 사회를 변화시킨 사건. 그것은 바로 영국의 조지 국왕과 어린 샬럿 왕비의 결혼이었다. 《브리저튼》 유니버스의 프리퀄.'},
    {item_no: 8, src: 'usa_lo_content08.jpg', title_img: 'usa_lo_content_title8.webp', banner_img: 'usa_lo_content_banner8.webp', desc: '설레는 첫 만남이 있었고 그다음엔 한국 드라마가 있었지. 사랑을 찾아 오리건에서 서울로 날아온 키티. 하지만 그녀가 생각한 사람이 완벽한 짝이 맞을까?'},
    {item_no: 9, src: 'usa_lo_content09.jpg', title_img: 'usa_lo_content_title9.webp', banner_img: 'usa_lo_content_banner9.webp', desc: '이전 애인과의 결별 충격에서 회복하는 동안 미키는 교회에서 한바탕 소동을 피우고, 거스는 유혹에 빠져 혼란스러운 잠자리를 갖게 된다.'},
    {item_no: 10, src: 'usa_lo_content10.jpg', title_img: 'usa_lo_content_title10.webp', banner_img: 'usa_lo_content_banner10.webp', desc: '삶의 변화가 필요한 간호사 멜. 그녀는 LA를 떠나 캘리포니아의 외딴 마을로 이주한다. 대도시와는 너무도 다른 동네 버진리버. 이곳에서 모든 걸 새로 시작할 수 있을까.'},
    {item_no: 11, src: 'usa_lo_content11.jpg', title_img: 'usa_lo_content_title11.webp', banner_img: 'usa_lo_content_banner11.webp', desc: '우리의 우정, 영원히 지속될까? 프리리지 고등학교에 들어간 몬세와 친구들. 다가올 첫 경험에 가슴 뛰는 것도 잠시. 이들의 우정은 비밀과 거짓말의 장벽에 부딪힌다.'},
  ],
  // korean_lomance_movie
  [
    {item_no: 1, src: 'ko_lo_content01.webp', title_img: 'ko_lo_content_title1.webp', banner_img: 'ko_lo_content_banner1.webp', desc: '조선에도 매파가 있었다. 그것도 어엿한 양반집 자제 매파가! 여인들의 눈길을 사로잡는 외모와 타의 추종을 불허하는 성혼율. 매파 중에서도 제일 잘나가는 그에게 골치 아픈 일이 생겼으니. 대장장이 이수가 혼례를 앞두고 사라져 버린 것.'},
    {item_no: 2, src: 'ko_lo_content02.webp', title_img: 'ko_lo_content_title2.webp', banner_img: 'ko_lo_content_banner2.webp', desc: '하루아침에 19세기 중전의 몸으로 깨어난 현대인 셰프. 눈을 뜬 곳은 험난한 구중궁궐. 어떻게든 본래 삶이 있는 현대로 돌아갈 방법을 찾아야 한다.'},
    {item_no: 3, src: 'ko_lo_content03.webp', title_img: 'ko_lo_content_title3.webp', banner_img: 'ko_lo_content_banner3.webp', desc: '사랑하는 이들을 위해 복수를 결심한 여인이 바둑꾼의 모습으로 분해 임금의 삶에 발을 들인다. 《런 온》의 신세경이 내기바둑꾼이자 세작 역으로 출연한 드라마.'},
    {item_no: 4, src: 'ko_lo_content04.webp', title_img: 'ko_lo_content_title4.webp', banner_img: 'ko_lo_content_banner4.webp', desc: '1,000년을 거슬러 고려 시대로 시간 여행을 하게 된 21세기 여인. 궁중의 암투에 휘말리고 여러 황자들의 사랑을 한몸에 받게 된다.'},
    {item_no: 5, src: 'ko_lo_content05.webp', title_img: 'ko_lo_content_title5.webp', banner_img: 'ko_lo_content_banner5.webp', desc: '조선의 왕세자가 살수의 습격으로 기억을 잃고 평민으로 전락한다. 문무를 겸비했으면 무얼 하나. 민가에선 그저 무용한 남정네일 뿐. 게다가 반전은 여기서 끝이 아니었으니. 고을 최고령 노처녀와 강제 혼인까지 해 버렸다!'},
    {item_no: 6, src: 'ko_lo_content06.webp', title_img: 'ko_lo_content_title6.webp', banner_img: 'ko_lo_content_banner6.webp', desc: '죽은 오빠 대신 남장을 하고 왕세자로 살아가는 쌍둥이 여동생. 궁녀에게 철벽을 치며 문무에 전념하려는 중인데, 이를 어째. 세자 교육을 맡은 남자에게 자꾸 눈길이 가. 이거 혹시, 사랑?'},
    {item_no: 7, src: 'ko_lo_content07.webp', title_img: 'ko_lo_content_title7.webp', banner_img: 'ko_lo_content_banner7.webp', desc: '신부 수업도 싫다, 혼인도 싫다. 뼛속까지 자유로운 조선 여인 구해령. 그녀가 자신의 운명을 스스로 개척하기 위해 궁으로 들어간다. 조선 최초의 여사관이 된다.'},
    {item_no: 8, src: 'ko_lo_content08.webp', title_img: 'ko_lo_content_title8.webp', banner_img: 'ko_lo_content_banner8.webp', desc: '조선 시대의 한 소녀 가장은 대리시험 일을 맡았다가 남자만 입학할 수 있는 성균관에 남장을 하고 다니게 된다.'},
    {item_no: 9, src: 'ko_lo_content09.webp', title_img: 'ko_lo_content_title9.webp', banner_img: 'ko_lo_content_banner9.webp', desc: '조선 시대에도 ‘엽기적인 그녀’가 있었다? 공주 신분에 월담과 외박을 일삼고 욱하는 성격에 불의를 보면 주먹질은 기본. 그런 그녀의 엽기적 행각에 걸려든 남자가 있었으니 까칠한 도성 남자. 두 사람의 엽기발랄 연애담이 시작된다.'},
    {item_no: 10, src: 'ko_lo_content10.webp', title_img: 'ko_lo_content_title10.webp', banner_img: 'ko_lo_content_banner10.webp', desc: '관상을 읽는 옛 명문가의 자제. 앞날을 내다보는 왕의 딸. 신묘한 능력의 두 남녀가 만나 천하를 도모할 계획을 세운다. 목표는 오직 하나. 썩어 빠진 조선을 청산하고, 새로운 태평천국을 세워라.'},
  ],
  // webtoon_lomance_contents
  [
    {item_no: 1, src: 'web_lo_content1.webp', title_img: 'web_lo_content_title1.webp', banner_img: 'web_lo_content_banner1.webp', desc: '왕따를 당하던 10대 여학생. 화장 기술을 마스터한 그녀가 전학 간 새 학교에서 여신으로 거듭난다. 그러나 아름다운 외모를 유지하는 건 결코 쉬운 일이 아니었으니.'},
    {item_no: 2, src: 'web_lo_content2.webp', title_img: 'web_lo_content_title2.webp', banner_img: 'web_lo_content_banner2.webp', desc: '남자 친구와 이별한 후 술집에 우두커니 앉아 있던 유나비. 그곳에서 나비 문신을 한 낯선 남자와 우연히 마주친다. 그리고 두 사람의 인연은 이후로도 계속 이어지는데.'},
    {item_no: 3, src: 'web_lo_content3.webp', title_img: 'web_lo_content_title3.webp', banner_img: 'web_lo_content_banner3.webp', desc: '대도시의 삶에 지쳐 한적한 시골 마을로 떠난 젊은 여자. 그녀가 이곳에서 자신과 마찬가지로 탈출을 꿈꾸는 마을 도서관 사서를 만난다.'},
    {item_no: 4, src: 'web_lo_content4.webp', title_img: 'web_lo_content_title4.webp', banner_img: 'web_lo_content_banner4.webp', desc: '청결에 죽고 사는 청소업체 CEO 남자. 청결이 먹는 건지 입는 건지 관심 없는 취준생 여자. 물과 기름 같은 둘이 만나 옥신각신하더니 어라, 달달한 기운이? 남자가 결벽증을 버리려나, 여자가 더러움을 벗으려나? 궁금하다, 궁금해!'},
    {item_no: 5, src: 'web_lo_content5.jpg', title_img: 'web_lo_content_title5.webp', banner_img: 'web_lo_content_banner5.webp', desc: '누군가 나를 좋아한다. 그 사람이 나에게 다가오면 알람이 울린다. 마음을 알려주는 앱 ‘좋알람’의 시대, 힘겹게 살아가는 소녀 조조에게도 풋풋한 사랑이 찾아온다.'},
    {item_no: 6, src: 'web_lo_content6.webp', title_img: 'web_lo_content_title6.webp', banner_img: 'web_lo_content_banner6.webp', desc: '7년째 만나는 오래된 커플. 둘만의 기념일에 뜻밖의 장소에서 각자 다른 사람과 함께 있는 서로를 마주친 후, 자신들의 권태로운 관계에 회의를 품기 시작한다.'},
    {item_no: 7, src: 'web_lo_content7.webp', title_img: 'web_lo_content_title7.webp', banner_img: 'web_lo_content_banner7.webp', desc: '미래를 보는 여자와 재수 옴 붙은 남자의 우연한 만남. 이후 두 사람은 폭풍 같은 앞길을 헤쳐 나가며 서로의 운명에 얽혀든다.'},
    {item_no: 8, src: 'web_lo_content8.webp', title_img: 'web_lo_content_title8.webp', banner_img: 'web_lo_content_banner8.webp', desc: '반지음에겐 전생을 기억할 수 있는 신비한 능력이 있다. 18회차 인생이 이른 나이에 끝난 후 다시 태어난 그녀. 이번 생은 어느덧 어른이 된 어린 시절의 사랑을 찾는 데 올인한다.'},
    {item_no: 9, src: 'web_lo_content9.webp', title_img: 'web_lo_content_title9.webp', banner_img: 'web_lo_content_banner9.webp', desc: '새 얼굴이면 새 삶이 펼쳐질 줄 알았건만! 못생겼다는 놀림에서 해방되려 성형 수술을 했지만, 이젠 자연 미인이 아니라 조롱받는다. 난 결코 평범해질 수 없는 운명일까. 스무 살 청춘의 설상가상 외모 트라우마 탈출기, 지금 시작됩니다!'},
  ]
]
let lomance_sec_title = ['클릭! 인기 콘텐츠', '미국 로맨틱 드라마', '한국 시대물 로맨스', '웹툰 원작 한국 드라마']
let lomance_sec_id = ['lomance_click_contents', 'usa_lomance_contents', 'korean_lomance_movie', 'webtoon_lomance_contents']
let lomance_banner_desc = [
  '가벼운 만남과 인간미 없는 데이팅 앱의 시대. 19금 칼럼을 떠맡은 신입 기자와 냉소적인 20대 여자가 데이트의 딜레마에 빠진다.',
  '설레는 첫 만남이 있었고 그다음엔 한국 드라마가 있었지. 사랑을 찾아 오리건에서 서울로 날아온 키티. 하지만 그녀가 생각한 사람이 완벽한 짝이 맞을까?',
  '사랑하는 이들을 위해 복수를 결심한 여인이 바둑꾼의 모습으로 분해 임금의 삶에 발을 들인다. 《런 온》의 신세경이 내기바둑꾼이자 세작 역으로 출연한 드라마.'
]


// documentary: cate값이 3일 때 사용
const DOCUMENTARY = 
[
  [], [], [], []
]
let documentary_sec_title = ['클릭! 인기 콘텐츠', '다시보기 추천!']
let documentary_sec_id = ['documentary_click_contents', 'replay']
let documentary_banner_desc = []


// animation: cate값이 4일 때 사용
const NAV_ANIMATION = 
[
  [], [], [], []
]
let animation_sec_title = ['클릭! 인기 콘텐츠', '다시보기 추천!']
let animation_sec_id = ['animation_click_contents', 'replay']
let animation_banner_desc = []


let banner;
let section;
let item;

console.log('NAV_ACTION.length:', NAV_ACTION.length);
console.log('NAV_ACTION[0].length:', NAV_ACTION[0].length);


// nav.html에 cateNo값에 따라 달라지는 화면의 main_banner를 만들어주는 함수이다. nav.js파일에서 이 함수를 사용한다.
function nav_load_banner(cateNo) {
  // cateNo == 0 일때 NAV_ACTION
  if(cateNo == 0) {
    console.log('281 cateNo는', cateNo);
    for(let i=0; i<action_banner_desc.length; i++) {
  
      banner =
      `
      <div class="banner banner${i + 1}">
          <div class="banner_img_box">
              <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/main_banner/main_action_title${i + 1}.webp" alt="">
          </div>
          <div class="mb_txt">
              ${action_banner_desc[i]}
          </div>
          <div class="play_btn_box">
              <div class="play_btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
              </div>
              <div class="play_txt">재생</div> 
          </div>
      </div>
      `
  
      $('.main_banner').append(banner);
  
  
      $(`.banner${i}`).css({
        background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0.3) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/main_banner/main_action_banner${i}.webp) no-repeat center / cover`
      })
    }
  } // cateNo == 0 일때 조건문

  // cateNo == 1 일때 KIDS
  else if(cateNo == 1) {
    console.log('312 cateNo는', cateNo);
    
    for(let i=0; i<kids_banner_desc.length; i++) {
  
      banner =
      `
      <div class="banner banner${i + 1}">
          <div class="banner_img_box">
              <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/main_banner/main_kid_title${i + 1}.webp" alt="">
          </div>
          <div class="mb_txt">
              ${kids_banner_desc[i]}
          </div>
          <div class="play_btn_box">
              <div class="play_btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
              </div>
              <div class="play_txt">재생</div> 
          </div>
      </div>
      `
  
      $('.main_banner').append(banner);
  
      // img src="../img/NETFLEX/KIDS/main_banner/main_kid_banner1.webp" alt=""
      $(`.banner${i+1}`).css({
        background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0.3) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/main_banner/main_kid_banner${i + 1}.webp) no-repeat center / cover`
      })
    }
  } // cateNo == 1 일때 조건문

  // cateNo == 2 일때 NAV_LOMANCE
  else if(cateNo == 2) {
    console.log('350 cateNo는', cateNo);
    
    for(let i=0; i<lomance_banner_desc.length; i++) {
  
      banner =
      `
      <div class="banner banner${i + 1}">
          <div class="banner_img_box">
              <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/main_banner/main_lomance_title${i + 1}.webp" alt="">
          </div>
          <div class="mb_txt">
              ${lomance_banner_desc[i]}
          </div>
          <div class="play_btn_box">
              <div class="play_btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
              </div>
              <div class="play_txt">재생</div> 
          </div>
      </div>
      `
  
      $('.main_banner').append(banner);
  
      $(`.banner${i+1}`).css({
        background: `linear-gradient(to top, #141414 1%, rgba(0, 0, 0, 0.3) 15%), url(../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/main_banner/main_lomance_banner${i + 1}.webp) no-repeat center / cover`
      })
    }
  } // cateNo == 2 일때 조건문
}

// ../img/NETFLEX/NAV_ACTION/main_banner/main_action_banner1.webp
// url(../img/NETFLEX/NAV_ACTION/main_banner/main_action_banner1.webp) no-repeat center / cover

// nav.html에 cateNo값에 따라 달라지는 화면의 중요한 섹션들을 만들어주는 함수이다. nav.js파일에서 이 함수를 사용한다.
function nav_load_item(cateNo) { 
  // cateNo == 0 일땐 NAV_ACTION
  if(cateNo == 0) {

    for(let i=0; i< NAV_ACTION.length; i++) { // 현재 NAV_ACTION.length = 6;
      if(NAV_ACTION[i].length > 1) { // NAV_ACTION[i].length > 1 보다 클때만 동작
        section = // main.container 에 들어갈 section 생성
        `
          <section class="sec contents_area" id="${action_sec_id[i]}"> 
            <div class="sec_header">
              ${action_sec_title[i]}
            </div>
            <div class="sec_body">
              <ul class="item_box">
      
              </ul>
            </div>

            <div class="btn btn_L">&lt;</div>
            <div class="btn btn_R">&gt;</div>
          </section>
        `
        $('.container').append(section); // item을 넣기 위해 미리 main.container에 넣어두기

        for(let j=0; j<NAV_ACTION[i].length; j++) { // NAV_ACTION[i].length; 

              item = ` 
                  <li class="item">
                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${action_sec_id[i]}/${NAV_ACTION[i][j].src}" alt="">
                  </li>`

              $(`#${action_sec_id[i]} ul.item_box`).append(item);

          
        } // j 반복문
      } // NAV_ACTION[i] 가 1보다 클때 동작하는 if 문
    } // i 반복문
  } // cateNo == 0 일때 if 조건문

  else if(cateNo == 1) { // cateNo == 1 일때는 KIDS 페이지
    for(let i=0; i< KIDS.length; i++) { // 현재 KIDS.length = 6;
      if(KIDS[i].length > 1) { // KIDS[i].length > 1 보다 클때만 동작
        section = // main.container 에 들어갈 section 생성
        `
          <section class="sec contents_area" id="${kids_sec_id[i]}"> 
            <div class="sec_header">
              ${kids_sec_title[i]}
            </div>
            <div class="sec_body">
              <ul class="item_box">
      
              </ul>
            </div>

            <div class="btn btn_L">&lt;</div>
            <div class="btn btn_R">&gt;</div>
          </section>
        `
        $('.container').append(section); // item을 넣기 위해 미리 main.container에 넣어두기

        for(let j=0; j<KIDS[i].length; j++) { // FANTASY[i].length; 

              item = ` 
                  <li class="item">
                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${kids_sec_id[i]}/${KIDS[i][j].src}" alt="">
                  </li>`

              $(`#${kids_sec_id[i]} ul.item_box`).append(item);

          
        } // j 반복문
      } // KIDS[i] 가 1보다 클때 동작하는 if 문
    } // i 반복문
  } // cateNo == 1일때 if 조건문

  else if(cateNo == 2) { // cateNo == 2 일때는 NAV_LOMANCE 페이지
    console.log('item_list cateNo=', cateNo)
    for(let i=0; i< NAV_LOMANCE.length; i++) { // 현재 NAV_LOMANCE.length = 6;
      if(NAV_LOMANCE[i].length > 1) { 
        section = 
        `
          <section class="sec contents_area" id="${lomance_sec_id[i]}"> 
            <div class="sec_header">
              ${lomance_sec_title[i]}
            </div>
            <div class="sec_body">
              <ul class="item_box">
      
              </ul>
            </div>

            <div class="btn btn_L">&lt;</div>
            <div class="btn btn_R">&gt;</div>
          </section>
        `
        $('.container').append(section); // item을 넣기 위해 미리 main.container에 넣어두기

        for(let j=0; j<NAV_LOMANCE[i].length; j++) { 

              item = ` 
                  <li class="item">
                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${lomance_sec_id[i]}/${NAV_LOMANCE[i][j].src}" alt="">
                  </li>`

              $(`#${lomance_sec_id[i]} ul.item_box`).append(item);

          
        } // j 반복문
      } // NAV_LOMANCE[i] 가 1보다 클때 동작하는 if 문
    } // i 반복문
  } // cateNo == 2일때 if 조건문

  else if(cateNo == 3) { // cateNo == 3 일때는 DOCUMENTARY 페이지
    console.log('item_list cateNo=', cateNo)
    for(let i=0; i< DOCUMENTARY.length; i++) { // 현재 DOCUMENTARY.length = 6;
      if(DOCUMENTARY[i].length > 1) { // DOCUMENTARY[i].length > 1 보다 클때만 동작
        section = // main.container 에 들어갈 section 생성
        `
          <section class="sec contents_area" id="${documentary_sec_id[i]}"> 
            <div class="sec_header">
              ${documentary_sec_title[i]}
            </div>
            <div class="sec_body">
              <ul class="item_box">
      
              </ul>
            </div>

            <div class="btn btn_L">&lt;</div>
            <div class="btn btn_R">&gt;</div>
          </section>
        `
        $('.container').append(section); // item을 넣기 위해 미리 main.container에 넣어두기

        for(let j=0; j<DOCUMENTARY[i].length; j++) {  

              item = ` 
                  <li class="item">
                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${documentary_sec_id[i]}/${DOCUMENTARY[i][j].src}" alt="">
                  </li>`

              $(`#${documentary_sec_id[i]} ul.item_box`).append(item);

          
        } // j 반복문
      } 
    } // i 반복문
  } // cateNo == 3일때 if 조건문

  else if(cateNo == 4) { // cateNo == 4 일때는 ANIMATION 페이지
    console.log('item_list cateNo=', cateNo)
    for(let i=0; i< NAV_ANIMATION.length; i++) { // 현재 NAV_ANIMATION.length = 6;
      if(NAV_ANIMATION[i].length > 1) { // NAV_ANIMATION[i].length > 1 보다 클때만 동작
        section = // main.container 에 들어갈 section 생성
        `
          <section class="sec contents_area" id="${animation_sec_id[i]}"> 
            <div class="sec_header">
              ${animation_sec_title[i]}
            </div>
            <div class="sec_body">
              <ul class="item_box">
      
              </ul>
            </div>

            <div class="btn btn_L">&lt;</div>
            <div class="btn btn_R">&gt;</div>
          </section>
        `
        $('.container').append(section); // item을 넣기 위해 미리 main.container에 넣어두기

        for(let j=0; j<NAV_ANIMATION[i].length; j++) { 

              item = ` 
                  <li class="item">
                    <img src="../img/NETFLEX/${NAV_ITEM_NAME[cateNo]}/${animation_sec_id[i]}/${NAV_ANIMATION[i][j].src}" alt="">
                  </li>`

              $(`#${animation_sec_id[i]} ul.item_box`).append(item);

          
        } // j 반복문
      } 
    } // i 반복문
  } // cateNo == 4일때 if 조건문
  
} // 함수 nav_load_item(cateNo)




























































































