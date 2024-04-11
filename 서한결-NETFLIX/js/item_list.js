
// 사실상 index파일에만 쓰는 item_lst.js 파일
// section과 item을 생성하는 함수 load_item(cate)가 들어있다.




const ITEM_LIST = [
  // top_ten part
  [
    {item_no: 1, src: 'top_ten1.jpg', title_img: 'top_ten_title1.webp', banner_img: 'top_ten_banner1.webp', desc: '최고의 피지컬을 자랑하는 100인의 참가자. 연이은 험난한 대결에서 치열한 경쟁을 펼친다. 최후의 1인에게 주어지는 영예와 상금을 차지하기 위하여'},
    {item_no: 2, src: 'top_ten2.webp', title_img: 'top_ten_title2.webp', banner_img: 'top_ten_banner2.webp', desc: '세기의 결혼인가, 세기의 전쟁인가. 퀸즈 그룹 재벌 3세이자 백화점의 여왕 홍해인, 용두리 이장 아들이자 슈퍼마켓 왕자 백현우. 아찔한 위기를 맞은 3년 차 부부에게 기적처럼 다시 사랑이 시작된다.'},
    {item_no: 3, src: 'top_ten3.jpg', title_img: 'top_ten_title3.webp', banner_img: 'top_ten_banner3.webp', desc: '여러 시대에 걸쳐 온 지구를 뒤흔들 사실을 발견한 각 대륙의 저명 과학자 다섯 명. 이제 과학의 법칙들이 밝혀지고 실존적 위협이 드리우기 시작한다.'},
    {item_no: 4, src: 'top_ten4.jpg', title_img: 'top_ten_title4.webp', banner_img: 'top_ten_banner4.webp', desc: '내 딸이 닭강정으로 변하다니! ‘모든기계’ 사장 최선만은 의문의 사고로 닭강정이 되어버린 딸 민아를 되찾을 수 있을까. 민아를 짝사랑하는 인턴사원 고백중이 그에 합세해 고군분투를 펼친다.'},
    {item_no: 5, src: 'top_ten5.jpg', title_img: 'top_ten_title5.webp', banner_img: 'top_ten_banner5.webp', desc: '왕자이자 선지자였던 모세의 놀라운 삶을 조명하는 다큐드라마 시리즈. 신학자와 역사가들의 통찰이 더해져 이해를 돕는다.'},
    {item_no: 6, src: 'top_ten6.webp', title_img: 'top_ten_title6.webp', banner_img: 'top_ten_banner6.webp', desc: '하루아침에 밑바닥으로 추락한 톱배우와 초짜 드라마 PD. 운명적으로 다시 만난 두 사람의 파란만장한 사랑 이야기가 펼쳐진다.'},
    {item_no: 7, src: 'top_ten7.webp', title_img: 'top_ten_title7.webp', banner_img: 'top_ten_banner7.webp', desc: `하위 등급 헌터인 성진우. 어떤 사건을 계기로 유일무이, 전무후무한 '레벨업' 능력을 얻는데. 과연 최약체인 진우는 여러 난관을 극복하고 더 높이 성장할 수 있을까?`},
    {item_no: 8, src: 'top_ten8.jpg', title_img: 'top_ten_title8.webp', banner_img: 'top_ten_banner8.webp', desc: '우발적인 첫 살인 후 연이어 사람을 죽이게 된 평범한 청년. 자신을 끈질기게 추적하는 형사와 끝없이 쫓고 쫓기는 게임을 시작한다.'},
    {item_no: 9, src: 'top_ten9.webp', title_img: 'top_ten_title9.webp', banner_img: 'top_ten_banner9.webp', desc: '뻔한 계획은 거부하는 여행. 전현무와 곽준빈이 방문 지역 출신 연예인들과 함께 무계획으로 로컬 맛집을 탐방한다.'},
    {item_no: 10, src: 'top_ten10.webp', title_img: 'top_ten_title10.webp', banner_img: 'top_ten_banner10.webp', desc: '다른 사람의 마음속 목소리가 들리는 여자. 그래서 사랑을 포기했던 그녀 앞에 낯선 언어로 생각하는 다정한 한국인 유학생이 나타난다. 그리고 새로운 사랑의 설렘이 시작된다.'},
  ]
  ,
  // action part
  [
    {item_no: 1, src: 'usa_action1.jpg', title_img: 'usa_action_title1.webp', banner_img: 'usa_action_banner1.webp', desc: '매력적인 왕자와 결혼하게 된 젊은 여성. 그런데 신부가 아니라 불을 내뿜는 용에게 바칠 제물이 되면서, 꿈꿔왔던 결혼이 순식간에 치열한 생존 싸움으로 변한다.'},
    {item_no: 2, src: 'usa_action2.webp', title_img: 'usa_action_title2.webp', banner_img: 'usa_action_banner2.webp', desc: '브루클린에 사는 평범한 10대 소년, 우연히 방사능 거미에 물려 스파이더맨 능력을 갖게 된다. 초능력만도 놀라운데 더 놀라운 사실, 평행세계가 존재하고 그 속에 다양한 스파이더맨들이 공존한다는 것. 환상의 팀이 어떤 건지 보여주마!.'},
    {item_no: 3, src: 'usa_action3.webp', title_img: 'usa_action_title3.webp', banner_img: 'usa_action_banner3.webp', desc: '평범한 학생으로 돌아간 피터 파커, 세상을 위협하는 벌처의 등장에 몸이 근질근질! 애 취급은 그만. 거미줄 좍좍 뽑아내는 스파이더맨의 실력을 보여주겠어. 덤벼라, 악당아!'},
    {item_no: 4, src: 'usa_action4.webp', title_img: 'usa_action_title4.webp', banner_img: 'usa_action_banner4.webp', desc: '지구 구하는 일이 어디 쉽나? 슈퍼히어로에게도 휴식이 필요한 법. 학교 친구들과 유럽 여행을 떠난 스파이더맨, 피터 파커. 하지만 세상에 새로운 빌런이 등장해 여행을 망쳐 놓는다. 어휴, 맘 편히 쉬는 꼴을 못 봐요, 못 봐..'},
    {item_no: 5, src: 'usa_action5.webp', title_img: 'usa_action_title5.webp', banner_img: 'usa_action_banner5.webp', desc: '그웬 스테이시와 힘을 합쳐 새로운 모험에 나서는 십 대 소년 마일스 모랄레스. 멀티버스에서 사악한 악당 스팟과 평행우주 속 수많은 영웅들을 만나게 된다.'},
    {item_no: 6, src: 'usa_action6.webp', title_img: 'usa_action_title6.webp', banner_img: 'usa_action_banner6.webp', desc: '25살이 되면 노화가 멈추고, 그 뒤부터 더 살려면 시간을 사야 하는 미래 사회. 어쩌다 살인 누명을 쓴 청년이 생존하기 위해 분투한다.'},
    {item_no: 7, src: 'usa_action7.webp', title_img: 'usa_action_title7.webp', banner_img: 'usa_action_banner7.webp', desc: '스탁커 펜테코스트의 아들 제이크. 옛 동료 파일럿, 예거 해커와 협공을 펼치며 거대 괴물 카이주에 맞서 인류의 운명을 건 대격전을 시작한다.'},
    {item_no: 8, src: 'usa_action8.webp', title_img: 'usa_action_title8.webp', banner_img: 'usa_action_banner8.webp', desc: '샘 윗위키의 첫 자동차가 변신 외계 로봇으로 밝혀지고, 이제 샘은 사악한 디셉티콘으로부터 지구를 구하는 전쟁에서 결정적인 열쇠를 쥔 주인공이 된다.'},
    {item_no: 9, src: 'usa_action9.webp', title_img: 'usa_action_title9.webp', banner_img: 'usa_action_banner9.webp', desc: '위탁 가정에 맡겨진 청소년이 순수한 마음을 드러낸 순간, 어른 슈퍼히어로로 변신하는 능력이 생긴다. 이제 이 능력을 이용해 죄악으로 가득한 악당들에게서 도시를 지켜야 한다.'},
    {item_no: 10, src: 'usa_action10.webp', title_img: 'usa_action_title10.webp', banner_img: 'usa_action_banner10.webp', desc: '앤드루 가필드가 슈퍼히어로가 되어 새로운 악당들과 맞서 싸우며 자신의 과거에 대한 더 많은 단서를 찾아 나서는 십 대 청소년 피터 파커로 돌아온다.'},
    {item_no: 11, src: 'usa_action11.webp', title_img: 'usa_action_title11.webp', banner_img: 'usa_action_banner11.webp', desc: '어느 조직 보스의 아들이 존 윅의 차를 훔치고 그의 반려견도 죽인다. 그러자 세상 무서울 것 없는 전직 킬러 존 윅은 조직 전체를 상대로 피비린내 나는 복수를 시작한다.'},
    {item_no: 12, src: 'usa_action12.webp', title_img: 'usa_action_title12.webp', banner_img: 'usa_action_banner12.webp', desc: '은퇴를 선언한 암살자 존 윅. 하지만 과거에 진 빚을 갚아야 하는 순간이 다가오자, 어쩔 수 없이 마지막 임무를 맡는다. 그리고 그로 인해 살벌한 범죄 조직의 표적이 된다.'},
    {item_no: 13, src: 'usa_action13.webp', title_img: 'usa_action_title13.webp', banner_img: 'usa_action_banner13.webp', desc: '업계 전설로 불리는 킬러, 존 윅. 그의 목에 현상금 1,400만 달러가 걸렸다. 이제 그는 자신을 노리는 수많은 킬러와 맞서 싸우며, 옛 동지들과 힘을 합쳐 살길을 찾아야 한다.'},
    {item_no: 14, src: 'usa_action14.webp', title_img: 'usa_action_title14.webp', banner_img: 'usa_action_banner14.webp', desc: '아내가 떠난 후 아들과 단둘이 남게 된 아버지. 가난이라는 현실에서 벗어나고자 발버둥 치던 그는 증권회사에 들어가 밑바닥부터 도전을 시작한다.'},
    {item_no: 15, src: 'usa_action15.webp', title_img: 'usa_action_title15.webp', banner_img: 'usa_action_banner15.webp', desc: '이라크에서 작전을 펼치는 미군 소속 정예 폭발물 제거반의 이야기를 다룬 손에 땀을 쥐게 하는 전쟁 영화. 캐서린 비글로 감독이 메가폰을 잡았다.'},
    {item_no: 16, src: 'usa_action16.webp', title_img: 'usa_action_title16.webp', banner_img: 'usa_action_banner16.webp', desc: '나치에게 점령당한 프랑스. 한 무리의 미국 군인들이 나치 선전용 영화가 상영되는 동안 나치 지도자들을 제거하고자 계획을 세운다. 운명을 결정지을 결투가 시작된다.'},
    {item_no: 17, src: 'usa_action17.webp', title_img: 'usa_action_title17.webp', banner_img: 'usa_action_banner17.webp', desc: '한 성인 영화 배우의 수상한 죽음을 조사하게 된 사설탐정과 청부 폭력업자. 이들이 본의 아니게 1970년대 LA의 위험한 사건들에 휘말리게 된다.'},
    {item_no: 18, src: 'usa_action18.webp', title_img: 'usa_action_title18.webp', banner_img: 'usa_action_banner18.webp', desc: '맙소사, 너 누구야? 지구에 온 오토봇이 한 소녀를 만나 친구가 된다. 그렇게 지구 생활은 시작되고, 비록 기억과 목소리는 잃었지만 이름 석 자를 얻은 범블비. 디셉티콘의 추격을 따돌리고 막중한 임무를 완수할 수 있을까.'},
  ]
  ,
  // click_contents
  [
    {item_no: 1, src: 'click_contents1.webp', title_img: 'click_contents_title1.webp', banner_img: 'click_contents_banner1.webp', desc: '수많은 사람이 ‘개성’이란 초능력을 가진 세상. 아무 개성이 없지만 히어로를 꿈꾸는 중학생 미도리야가 있다. 누가 뭐래도 좌절하지 않는 굳은 마음만큼은 이미 영웅급.'},
    {item_no: 2, src: 'click_contents2.jpg', title_img: 'click_contents_title2.webp', banner_img: 'click_contents_banner2.webp', desc: '내 딸이 닭강정으로 변하다니! ‘모든기계’ 사장 최선만은 의문의 사고로 닭강정이 되어버린 딸 민아를 되찾을 수 있을까. 민아를 짝사랑하는 인턴사원 고백중이 그에 합세해 고군분투를 펼친다.'},
    {item_no: 3, src: 'click_contents3.webp', title_img: 'click_contents_title3.webp', banner_img: 'click_contents_banner3.webp', desc: '용사 일행과 함께 마왕을 물리친 지도 어느덧 수십 년. 엘프 마법사 프리렌은 옛 친구의 장례식을 계기로 자아를 찾기 위한 여정을 시작한다.'},
    {item_no: 4, src: 'click_contents4.webp', title_img: 'click_contents_title4.webp', banner_img: 'click_contents_banner4.webp', desc: '미국의 자동차 디자이너 캐롤 셸비와 레이싱 선수 켄 마일스. 두 사람은 르망 레이스를 제패한 엔초 페라리를 왕좌에서 몰아내기 위해 손을 잡는다. 아카데미 수상작.'},
    {item_no: 5, src: 'click_contents5.webp', title_img: 'click_contents_title5.webp', banner_img: 'click_contents_banner5.webp', desc: `하위 등급 헌터인 성진우. 어떤 사건을 계기로 유일무이, 전무후무한 '레벨업' 능력을 얻는데. 과연 최약체인 진우는 여러 난관을 극복하고 더 높이 성장할 수 있을까?`},
    {item_no: 6, src: 'click_contents6.jpg', title_img: 'click_contents_title6.webp', banner_img: 'click_contents_banner6.webp', desc: '전 세계를 누비는 대식가 필 로즌솔의 따스하고 유쾌한 맛 기행 시리즈. 이번에는 두바이와 에든버러, 교토 등지에서 환상적인 음식을 기분 좋게 맛본다.'},
    {item_no: 7, src: 'click_contents7.webp', title_img: 'click_contents_title7.webp', banner_img: 'click_contents_banner7.webp', desc: '새 임무를 맡은 탄지로, 젠이츠, 이노스케는 무한열차에서 귀살대 최강의 검사 렌고쿠와 합류한다. 그리고 세 소년에게 렌고쿠는 충고한다. 혈귀는 어디에나 있다. 달리는 이 열차 안에도.'},
    {item_no: 8, src: 'click_contents8.jpg', title_img: 'click_contents_title8.webp', banner_img: 'click_contents_banner8.webp', desc: '최고의 피지컬을 자랑하는 100인의 참가자. 연이은 험난한 대결에서 치열한 경쟁을 펼친다. 최후의 1인에게 주어지는 영예와 상금을 차지하기 위하여'},
    {item_no: 9, src: 'click_contents9.jpg', title_img: 'click_contents_title9.webp', banner_img: 'click_contents_banner9.webp', desc: '2023년 NFL 스타 선수들의 시즌을 포착한 스포츠 시리즈. 다반테 아담스, 저스틴 제퍼슨, 조지 키틀, 디보 새뮤얼, 아몬라 세인트브라운이 출연한다.'},
    {item_no: 10, src: 'click_contents10.jpg', title_img: 'click_contents_title10.webp', banner_img: 'click_contents_banner10.webp', desc: '케이트 블란쳇이 내레이션을 맡은 환상적인 자연 다큐시리즈. 우리 지구의 생명체가 지닌 지력과 생존력, 그리고 상호연결성을 파헤친다.'},
    {item_no: 11, src: 'click_contents11.jpg', title_img: 'click_contents_title11.webp', banner_img: 'click_contents_banner11.webp', desc: '엉뚱한 ‘씨’로 잘못 태어나 방랑의 삶을 택해야 했던 남자 해조. 그가 인생 마지막 여행을 떠난다. 그의 전 여자 친구이자 세상에서 가장 불행한 예비 신부 재미가 그 길에 강제 동행하게 되는데.'},
    {item_no: 12, src: 'click_contents12.jpg', title_img: 'click_contents_title12.webp', banner_img: 'click_contents_banner12.webp', desc: '50년간 방치된 채 비어있던 독일 최초의 스마트 홈. 그곳에 새로운 가족이 입주한다. 가상 비서 카산드라는 다시는 혼자 남겨지지 않기 위해 수단과 방법을 가리지 않는다.'},
    {item_no: 13, src: 'click_contents13.jpg', title_img: 'click_contents_title13.webp', banner_img: 'click_contents_banner13.webp', desc: '마더월드의 무자비한 세력에 대항해 전투를 준비하는 반란군들. 서로를 단단히 이어주는 유대가 형성되면서 영웅이 등장하고 전설이 탄생한다.'},
    {item_no: 14, src: 'click_contents14.jpg', title_img: 'click_contents_title14.webp', banner_img: 'click_contents_banner14.webp', desc: '아름답고 순수한 동화속의 충격적인 이면들. 그 비밀을 파헤치기 위해 동화속 주인공들이 나서기 시작했다.'},
    {item_no: 15, src: 'click_contents15.jpg', title_img: 'click_contents_title15.webp', banner_img: 'click_contents_banner15.webp', desc: '영향력이 몸값이자 권력이다. 세상의 관심이 돈으로 이어진다. 수많은 대한민국 인플루언서 중 최고의 화제성을 가진 이는 누구일까. 수단과 방법을 불사하는 경쟁. 강력한 영향력을 발휘해 살아남아라!'},
    {item_no: 16, src: 'click_contents16.webp', title_img: 'click_contents_title16.webp', banner_img: 'click_contents_banner16.webp', desc: '은퇴를 선언한 암살자 존 윅. 하지만 과거에 진 빚을 갚아야 하는 순간이 다가오자, 어쩔 수 없이 마지막 임무를 맡는다. 그리고 그로 인해 살벌한 범죄 조직의 표적이 된다.'},
    
  ]
  ,
  // new_contents
  [
    {item_no: 1, src: 'new_content1.webp', title_img: 'new_content_title1.webp', banner_img: 'new_content_banner1.webp', desc: '이탈리아 해안가의 작은 마을에 마음을 빼앗긴 로버트 맥콜. 이 마을 주민들을 잔인하게 괴롭히고 돈을 갈취하는 범죄 조직을 처단하기로 다짐한다.' },
    {item_no: 2, src: 'new_content2.webp', title_img: 'new_content_title2.webp', banner_img: 'new_content_banner2.webp', desc: '연이은 불운으로 위기에 몰린 바텐더. 어느 부유한 부부로부터 자기들의 사회성 부족한 아들과 데이트해달라는 제안을 받고서 색다른 도전에 나선다.' },
    {item_no: 3, src: 'new_content3.jpg', title_img: 'new_content_title3.webp', banner_img: 'new_content_banner3.webp', desc: '왕자이자 선지자였던 모세의 놀라운 삶을 조명하는 다큐드라마 시리즈. 신학자와 역사가들의 통찰이 더해져 이해를 돕는다.' },
    {item_no: 4, src: 'new_content4.webp', title_img: 'new_content_title4.webp', banner_img: 'new_content_banner4.webp', desc: '무시무시한 페니와이즈에 맞서야 했던 루저 클럽 친구들. 그로부터 27년 후, 불길한 전화 한 통과 함께 자신들이 시작했던 일을 끝내기 위해 데리로 돌아간다.' },
    {item_no: 5, src: 'new_content5.jpg', title_img: 'new_content_title5.webp', banner_img: 'new_content_banner5.webp', desc: '수백 명의 목숨을 앗아갈 유정 폭발 참사를 막기 위해 소집된 최정예 운반팀. 니트로글리세린을 싣고 위험천만한 사막을 횡단해야 한다.' },
    {item_no: 6, src: 'new_content6.jpg', title_img: 'new_content_title6.webp', banner_img: 'new_content_banner6.webp', desc: '홈리스 월드컵에 출전하기 위해 로마로 향하는 영국 축구팀. 실력 있는 선수를 영입했지만, 이 신입 선수는 우선 과거를 잊고 팀의 일원이 되는 법을 배워야 한다.' },
    {item_no: 7, src: 'new_content7.jpg', title_img: 'new_content_title7.webp', banner_img: 'new_content_banner7.webp', desc: '은퇴한 전직 킬러. 어느 날 친구가 남아공 정부 핵심부의 위험한 음모를 밝혀내면서 다시 현장에 뛰어들게 된다.' },
    {item_no: 8, src: 'new_content8.webp', title_img: 'new_content_title8.webp', banner_img: 'new_content_banner8.webp', desc: '백년이 넘는 시간 동안 숨어 살아온 괴물이 한 여인과 사랑에 빠진다. 그렇게 괴물은 인간 세상에 발을 들이지만, 그 몸에는 위험한 비밀이 숨겨져 있다.' },
    {item_no: 9, src: 'new_content9.webp', title_img: 'new_content_title9.webp', banner_img: 'new_content_banner9.webp', desc: '경찰의 소탕 작전에서 살아남은 홍콩의 마약왕. 이제 태국으로 달아나 왕국을 다시 일으켜 세운다. 그가 놓친 건, 가장 가까운 동지가 다른 생각을 품었다는 사실이다.' },
    {item_no: 10, src: 'new_content10.jpg', title_img: 'new_content_title10.webp', banner_img: 'new_content_banner10.webp', desc: '사랑스럽고 장난기 가득한 티라노사우루스 가족. 다채로운 선사 시대 세계를 탐험하면서 그곳에 사는 익살스러운 공룡들과 우당탕탕 재밌는 모험을 즐겨요.' },
    {item_no: 11, src: 'new_content11.webp', title_img: 'new_content_title11.webp', banner_img: 'new_content_banner11.webp', desc: '믿음과 재력, 그리고 완벽한 명성이 필요한 솔트레이크시티의 상류 사회. 최상위에 머물기 위해선 무엇이든 할 수 있는 주부들이 온다.' },
    {item_no: 12, src: 'new_content12.jpg', title_img: 'new_content_title12.webp', banner_img: 'new_content_banner12.webp', desc: '창업 실패로 빚더미에 앉은 3명의 청년 사업가. 늦기 전에 거액의 대출금을 갚기 위해 불교 사찰을 이용한 위험천만 사기극을 벌이려 한다.' },
    {item_no: 13, src: 'new_content13.jpg', title_img: 'new_content_title13.webp', banner_img: 'new_content_banner13.webp', desc: '대도시의 요리사가 거짓말에 속아 모든 걸 접고 고향으로 내려간다. 그곳에서 할머니의 농장을 살리려 애쓰던 중 잘생긴 농부에게 마음을 뺏기는데, 문제는 그에게 한 가지 비밀이 있다는 것.' },
    {item_no: 14, src: 'new_content14.webp', title_img: 'new_content_title14.webp', banner_img: 'new_content_banner14.webp', desc: '열여덟 명이나 되는 초등학생이 산속에서 행방불명되는 사건이 발생한다. 키타미는 MER 멤버들에게 세 팀으로 나누어 수색하라고 지시한다.' },
    {item_no: 15, src: 'new_content15.webp', title_img: 'new_content_title15.webp', banner_img: 'new_content_banner15.webp', desc: '귀신같이 차를 모는 탈출 전문 드라이버 베이비. 음악 없인 못 사는 그가 범죄 조직 두목에게 발목이 잡힌다. 손을 털려면 마지막 한탕을 성공시켜야 하는데, 그게 그리 만만치가 않다.' },
    {item_no: 16, src: 'new_content16.webp', title_img: 'new_content_title16.webp', banner_img: 'new_content_banner16.webp', desc: '마력은 없어도 근력은 엄청난 소년 마슈. 그의 목표는 마법을 쓰는 학교 친구들을 힘으로 이겨 최고의 학생을 의미하는 ‘신각자’의 칭호를 얻는 것이다.' },
    {item_no: 17, src: 'new_content17.webp', title_img: 'new_content_title17.webp', banner_img: 'new_content_banner17.webp', desc: '1983년 여름. 17세 소년 엘리오는 아버지 연구를 도우러 온 청년에게 특별한 감정을 느낀다. 처음, 그리고 전부가 된 찬란한 사랑의 시작. 기억할게. 너는 나, 나는 너. 서로의 이름을 자신의 이름으로 불러 하나가 된 시간을.' },
    {item_no: 18, src: 'new_content18.webp', title_img: 'new_content_title18.webp', banner_img: 'new_content_banner18.webp', desc: '수십 년 만에 모습을 드러낸 유골에는 어떤 비밀이 숨어 있었나. 진실을 찾으려는 경찰, 진실을 덮으려는 조직, 진실을 악용하려는 재계 거물의 쫓고 쫓기는 게임이 시작된다!' }
  ]
  ,
  // best_movie
  [
    {item_no: 1, src: 'best_movie1.webp', title_img: 'best_movie_title1.webp', banner_img: 'best_movie_banner1.webp', desc: '어머니와 백수 신세인 형과 동생을 책임져야 하는 동훈. 오늘도 출근하는 발걸음이 무겁다. 그런데 이게 무슨 일일까. 수상한 물건이 든 봉투가 그에게 배달되어 왔다.'},
    {item_no: 2, src: 'best_movie2.jpg', title_img: 'best_movie_title2.webp', banner_img: 'best_movie_banner2.webp', desc: '이병찬의 과학 실험실에서 학생이 동물에 물린다. 상처는 별것 아닌 듯했으나, 사태는 곧 급속한 감염으로 번지며 학교를 피로 물들인다.'},
    {item_no: 3, src: 'best_movie3.webp', title_img: 'best_movie_title3.webp', banner_img: 'best_movie_banner3.webp', desc: '꿈을 현실로, 불가능을 가능으로! 아이디어 있겠다, 기술 있겠다. 못 할 것도 없지. 치열한 스타트업의 세계에 뛰어드는 젊은 창업자들. 성공도 사랑도 쟁취하고야 만다!'},
    {item_no: 4, src: 'best_movie4.webp', title_img: 'best_movie_title4.webp', banner_img: 'best_movie_banner4.webp', desc: '재스퍼가 아직 살아 있을지도 모른다는 사실을 알게 된 클라크, 벨라미, 옥타비아, 핀 그리고 몬티는 친구를 찾아내기 위한 임무에 착수한다.'},
    {item_no: 5, src: 'best_movie5.webp', title_img: 'best_movie_title5.webp', banner_img: 'best_movie_banner5.webp', desc: '학력은 고졸에다 아는 거라곤 바둑밖에 없는 장그래. 한 회사의 인턴으로 일하게 되면서 냉혹한 현실과 마주한다.'},
    {item_no: 6, src: 'best_movie6.jpg', title_img: 'best_movie_title6.webp', banner_img: 'best_movie_banner6.webp', desc: '데이비드 베컴이 자신의 커리어 전반의 이야기를 직접 들려주는 열정적인 다큐시리즈.'},
    {item_no: 7, src: 'best_movie7.webp', title_img: 'best_movie_title7.webp', banner_img: 'best_movie_banner7.webp', desc: '1871년, 한 소년이 미국 군함을 타고 조선을 떠난다. 세월이 흐르고, 미군 장교가 되어 조국으로 돌아온 남자. 격변하는 역사 속에서, 그는 운명을 뒤흔들 여인을 만난다.'},
    {item_no: 8, src: 'best_movie8.jpg', title_img: 'best_movie_title8.webp', banner_img: 'best_movie_banner8.webp', desc: '친구네 집에서 자신의 집으로 돌아가던 중 윌은 무언가 이상한 것을 보게 되고, 윌이 있는 곳에서 가까운 정부의 비밀 실험실에서는 끔찍한 일이 벌어진다.'},
    {item_no: 9, src: 'best_movie9.jpg', title_img: 'best_movie_title9.webp', banner_img: 'best_movie_banner9.webp', desc: '철거 직전의 아파트, 그린홈으로 이사 온 지 일주일. 집에만 틀어박혀 지내던 현수는 무섭게 돌변한 주민을 목격한다. 내가 먼저 사라지려고 했는데, 세상이 먼저 망했다.'},
    {item_no: 10, src: 'best_movie10.webp', title_img: 'best_movie_title10.webp', banner_img: 'best_movie_banner10.webp', desc: '《SKY 캐슬》의 조병규와 《너의 노래를 들려줘》의 김세정이 악귀 사냥꾼 팀원으로 출연한다. 히어로 같지 않은 히어로에 관한 드라마.'},
    {item_no: 11, src: 'best_movie11.webp', title_img: 'best_movie_title11.webp', banner_img: 'best_movie_banner11.webp', desc: '버려진 고성으로 이동해 훈련을 이어가는 에렌. 갑작스레 나타난 한지에게서 도움을 요청받는데. 생포한 거인 둘을 대상으로 진행하는 생체 조사에 참여해 달라고!'},
    {item_no: 12, src: 'best_movie12.jpg', title_img: 'best_movie_title12.webp', banner_img: 'best_movie_banner12.webp', desc: '마음이 끌리는 사람에게 다가가기 위해서라면, 무슨 짓이든 할 수 있다. 위험한 매력의 소유자, 집착의 끝을 보여주는 남자. 그의 소름 끼치는 로맨스가 시작된다.'},
    {item_no: 13, src: 'best_movie13.webp', title_img: 'best_movie_title13.webp', banner_img: 'best_movie_banner13.webp', desc: '2015년, 사도의 습격을 받은 제3 신도쿄시. 아버지를 만나러 온 이카리 신지는 카츠라기 미사토에 의해 위기를 모면하고 네르프에 도착한다. 소년의 운명은 어디로 흐르는가.'},
    {item_no: 14, src: 'best_movie14.webp', title_img: 'best_movie_title14.webp', banner_img: 'best_movie_banner14.webp', desc: '인생의 고비에 맞닥뜨린 후 도시를 떠나 고향으로 내려온 한수. 머지않아 그곳에서 학교 동창인 은희와 재회한다.'},
    {item_no: 15, src: 'best_movie15.webp', title_img: 'best_movie_title15.webp', banner_img: 'best_movie_banner15.webp', desc: '혼수상태에서 깨어난 후 놀라운 능력을 갖게 된 과학수사 전문가가 도시를 위협하는 세력과 맞서 싸운다는 내용의 라이브 액션 슈퍼히어로물.'},
    {item_no: 16, src: 'best_movie16.webp', title_img: 'best_movie_title16.webp', banner_img: 'best_movie_banner16.webp', desc: '일행과 함께 애틀랜타를 빠져나가는 릭. 고속도로 한가운데, 일찍이 본 적 없는 충격적인 광경에 숨이 멎는다. 워커 떼의 출현으로 아비규환이 된 상황, 한 사람이 실종된다.'},
    {item_no: 17, src: 'best_movie17.webp', title_img: 'best_movie_title17.webp', banner_img: 'best_movie_banner17.webp', desc: '감염자를 피에 굶주린 광인으로 만들어 버리는 무시무시한 전염병이 발발했다. 고층 아파트 주민들의 살기 위한 몸부림이 시작된다.'},
    {item_no: 18, src: 'best_movie18.jpg', title_img: 'best_movie_title18.webp', banner_img: 'best_movie_banner18.webp', desc: '절박한 상황에 내몰린 청년이 스모 선수의 길을 택한다. 그의 건방진 시합 태도가 팬들의 마음을 사로잡으며 전통에 얽매인 스모계에 파란이 일기 시작하는데.' }
  ]
  ,
  // lomance
  [
    {item_no: 1, src: 'lomance1.webp', title_img: 'lomance_title1.webp', banner_img: 'lomance_banner1.webp', desc: '비밀을 간직한 스타 한세계. 연이은 돌발 행동으로 위기에 빠진 그녀는 광고 계약 해지를 앞두고 재벌 3세 서도재와 마주친다. 그런데 이 남자, 천하의 세계를 몰라본다!'},
    {item_no: 2, src: 'lomance2.webp', title_img: 'lomance_title2.webp', banner_img: 'lomance_banner2.webp', desc: '반지음에겐 전생을 기억할 수 있는 신비한 능력이 있다. 18회차 인생이 이른 나이에 끝난 후 다시 태어난 그녀. 이번 생은 어느덧 어른이 된 어린 시절의 사랑을 찾는 데 올인한다.'},
    {item_no: 3, src: 'lomance3.webp', title_img: 'lomance_title3.webp', banner_img: 'lomance_banner3.webp', desc: '찾았다! 어린 나를 살렸던 미스터리 속 남자. 만났다! 수백 년 전 그녀를 빼다 박은 여자. 긴 세월 어긋난 끝에 방송국 PD와 말단 공무원으로 다시 마주한 남녀. 어지러운 현세를 무대로, 이상야릇한 인연을 시작한다.'},
    {item_no: 4, src: 'lomance4.webp', title_img: 'lomance_title4.webp', banner_img: 'lomance_banner4.webp', desc: '마침내 서로에게 가닿은 해나와 서원. 그렇게 그들은 더욱 단단해진 사랑을 증명한다. 다시 연인이 되어 맞은 서원의 생일, 해나는 둘만의 추억이 담긴 깜짝 선물을 준비한다.'},
    {item_no: 5, src: 'lomance5.webp', title_img: 'lomance_title5.webp', banner_img: 'lomance_banner5.webp', desc: '냉혹한 악마의 이야기를 그린 초자연적 드라마. 악마는 능력을 잃고 어떤 상속녀와 얽히게 되는데, 그 상속녀가 악마의 힘을 되찾아 줄 열쇠를 쥐고 있을지 모른다.'},
    {item_no: 6, src: 'lomance6.webp', title_img: 'lomance_title6.webp', banner_img: 'lomance_banner6.webp', desc: '한 시녀의 작은 선행에 감동한 고대의 용왕이 그녀와 언약을 맺는다. 억겁의 세월이 흐른 뒤에도 용왕은 언약을 지킬 수 있을까?'},
    {item_no: 7, src: 'lomance7.webp', title_img: 'lomance_title7.webp', banner_img: 'lomance_banner7.webp', desc: '수백 년 된 저주에 꼼짝없이 걸려든 변호사. 그의 저주를 풀어줄 열쇠를 쥔 9급 공무원. 어쩌다 두 사람의 인연이 엮이게 되면서 뜻밖의 로맨스가 피어난다.'},
    {item_no: 8, src: 'lomance8.webp', title_img: 'lomance_title8.webp', banner_img: 'lomance_banner8.webp', desc: '서울 도심에 수상한 호텔이 있다. 천년 영업에 숙박한 사람이 없다. 왜? 산 사람은 안 받으니까. 귀신만 묵는 그곳에 인간 지배인이 왔다. 알고 보면 심약한 이 남자, 고객 응대 잘 해낼까? 외모와 달리 괴팍한 사장은 어찌 감당하누.'},
    {item_no: 9, src: 'lomance9.webp', title_img: 'lomance_title9.webp', banner_img: 'lomance_banner9.webp', desc: '신부를 찾아야 죽을 수 있는 남자. 불멸의 고통에 힘겹던 어느 날, 신부라고 주장하는 여학생이 나타났다. 대책 없이 그를 소환하고 대책 없이 삶에 파고드는 소녀. 정녕 신부를 만난 것이냐. 그럼 이제 소멸할 수 있는 것이냐.'},
    {item_no: 10, src: 'lomance10.webp', title_img: 'lomance_title10.webp', banner_img: 'lomance_banner10.webp', desc: '조선 시대의 은인과 똑 닮은 남자를 본 인어. 사기에 일가견이 있는 그를 쫓아 서울에 와서 함께 살게 된다. 얹혀사는 신세긴 하지만, 자신만의 방식으로 대도시 생활을 헤쳐나가는 그녀. 그러나 전생이 현생으로 이어지며 삶을 위협한다.'},
    {item_no: 11, src: 'lomance11.webp', title_img: 'lomance_title11.webp', banner_img: 'lomance_banner11.webp', desc: '비천한 노비에서 천하를 구할 절정의 고수가 되기까지, 부요의 장대한 여정을 그린 판타지 시리즈. 중국 인기 웹소설이 원작이다.'},
    {item_no: 12, src: 'lomance12.jpg', title_img: 'lomance_title12.webp', banner_img: 'lomance_banner12.webp', desc: '상사 때문에 퇴근을 못 하는 두 비서(조이 도이치 & 글렌 파월)가 한 가지 방법을 생각해 낸다. 서로의 직장 상사(루시 리우 & 테이 딕스)를 사랑에 빠지게 하는 거야!'},
    {item_no: 13, src: 'lomance13.webp', title_img: 'lomance_title13.webp', banner_img: 'lomance_banner13.webp', desc: '머나먼 별에서 온 그녀. 고향으로 돌아갈 방법이 없어 당분간 지구에 머물기로 한다. 그리던 어느 밤, 비가 오면 이성에 관한 기억이 모두 사라지는 별난 지구인 남자를 만난다.'},
    {item_no: 14, src: 'lomance14.webp', title_img: 'lomance_title14.webp', banner_img: 'lomance_banner14.webp', desc: '눈먼 여인의 몸에 갇힌 막강한 살수. 그녀의 도움을 받아 운명을 바꾸고자 하는 명문가 도령. 두 사람의 이야기를 그린 판타지 로맨스 활극.'},
    {item_no: 15, src: 'lomance15.webp', title_img: 'lomance_title15.webp', banner_img: 'lomance_banner15.webp', desc: '고대 중국의 민간 전설에서 영감을 받아 제작된 작품. 천년 묵은 백사와 비운의 연인이 자신들의 사랑을 이루기 위해 모든 것을 건다.'},
    {item_no: 16, src: 'lomance16.webp', title_img: 'lomance_title16.webp', banner_img: 'lomance_banner16.webp', desc: '지금 애를 낳기엔 너무 늦었잖아. 차라리 다 자란 아이를 입양하는 게 어때? 얼결에 하나도, 둘도 아닌 세 아이를 데려온 부부. 아이들은 상처가 많아 새 가정의 사랑을 온전히 받아들이지 못하는데. 그럼 피가 물보다 진하다는 게 진짜?'},
    {item_no: 17, src: 'lomance17.webp', title_img: 'lomance_title17.webp', banner_img: 'lomance_banner17.webp', desc: '사악한 분파를 무찌르기 위해 위험한 임무를 수행하는 두 명의 무예 수련자. 서로 사랑에 빠져, 오래도록 얽힌 전생의 인연을 알게 된다.'},
    {item_no: 18, src: 'lomance18.webp', title_img: 'lomance_title18.webp', banner_img: 'lomance_banner18.webp', desc: '만인의 사랑을 받는 왕자와 두려움을 모르는 공주. 사랑에 빠진 둘은 전쟁이 끊이지 않는 무술의 세계에서 정의를 위한 싸움을 헤쳐 나간다.' }
  ]
  ,
  // comedy
  [
    {item_no: 1, src: 'comedy01.webp', title_img: 'comedy_title1.webp', banner_img: 'comedy_banner1.webp', desc: '귀신같이 차를 모는 탈출 전문 드라이버 베이비. 음악 없인 못 사는 그가 범죄 조직 두목에게 발목이 잡힌다. 손을 털려면 마지막 한탕을 성공시켜야 하는데, 그게 그리 만만치가 않다.'},
    {item_no: 2, src: 'comedy02.webp', title_img: 'comedy_title2.webp', banner_img: 'comedy_banner2.webp', desc: '깐깐한 패션지 편집장의 비서로 일하게 된 사회 초년생. 성공을 위해 고군분투하는 동시에, 자신만의 강점과 스타일을 찾아나간다.'},
    {item_no: 3, src: 'comedy03.webp', title_img: 'comedy_title3.webp', banner_img: 'comedy_banner3.webp', desc: '교양 있고 우아한 피아니스트가 산전수전 다 겪은 운전기사를 고용해 콘서트 투어를 떠난다. 인종 차별이 만연한 남부 지역으로.'},
    {item_no: 4, src: 'comedy04.webp', title_img: 'comedy_title4.webp', banner_img: 'comedy_banner4.webp', desc: "'우리가 함께하는 한 아무 일도 없을 거야.' 마리오는 불을 내뿜는 악당으로부터 동생 루이지를 구하기 위해 세상의 끝으로 향한다."},
    {item_no: 5, src: 'comedy05.webp', title_img: 'comedy_title5.webp', banner_img: 'comedy_banner5.webp', desc: '잡지사의 소심한 필름 담당자 월터. 특별한 경험이라곤 하나 없는 그의 특기는 상상하기. 상상 속에선 무슨 일이든 척척 해내는 멋진 영웅이니까. 이런 그가 진짜로 모험을 시작했다! 한데 현실 속에서 영웅이 되는 건 그리 쉽지 않더이다?'},
    {item_no: 6, src: 'comedy06.webp', title_img: 'comedy_title6.webp', banner_img: 'comedy_banner6.webp', desc: '꿈꾸는 이들이 모이는 곳, LA. 우연히 만난 배우 지망생 미아와 재즈 피아니스트 세바스찬은 서로를 향한 사랑을 키워간다. 각자의 꿈으로 인해 가슴 아픈 딜레마를 마주하게 될 줄은 모르고.'},
    {item_no: 7, src: 'comedy07.webp', title_img: 'comedy_title7.webp', banner_img: 'comedy_banner7.webp', desc: '밴드에서 퇴출당한 빈털터리 기타리스트. 교사인 척, 초등학교에서 임시로 교편을 잡았다가 음악 영재들을 잔뜩 발견한다. 이제 우리 반 애들로 로큰롤 밴드를 만들리라! 물론 학부모한테는 비밀'},
    {item_no: 8, src: 'comedy08.webp', title_img: 'comedy_title8.webp', banner_img: 'comedy_banner8.webp', desc: '인간과 포켓몬이 공존하는 세상. 전기를 내뿜는 피카츄 탐정이 사라진 파트너의 아들과 손잡고 파트너의 실종 사건 해결을 위해 모험을 시작한다.'},
    {item_no: 9, src: 'comedy09.jpg', title_img: 'comedy_title9.webp', banner_img: 'comedy_banner9.webp', desc: 'F. 게리 그레이(《분노의 질주: 더 익스트림》 《이탈리안 잡》)가 연출한 영화. 케빈 하트가 매력적인 도둑 역을 맡아 공중에서 벌어지는 강도 작전을 지휘한다.'},
    {item_no: 10, src: 'comedy10.jpg', title_img: 'comedy_title10.webp', banner_img: 'comedy_banner10.webp', desc: '지구를 향해 돌진하는 혜성의 존재를 발견한 두 천문학자. 임박한 재앙을 전 인류에 경고하려 언론사를 찾아다니기 시작한다. 하지만 다른 데 정신이 팔린 세상은 시큰둥한 반응뿐. 그래서요?'},
    {item_no: 11, src: 'comedy11.webp', title_img: 'comedy_title11.webp', banner_img: 'comedy_banner11.webp', desc: '범죄 조직 일당을 감시하기 위해 마약반 형사들이 위장 창업으로 치킨집을 열었다. 근데 웬일? 맛있다는 입소문을 타며 연일 문전성시를 이룬다. 드디어 숨은 재능을 발견한 건가. 낮에는 치킨, 밤에는 잠복. 이곳이 진정한 수사 맛집이다!'},
    {item_no: 12, src: 'comedy12.webp', title_img: 'comedy_title12.webp', banner_img: 'comedy_banner12.webp', desc: '아빠와 함께 비밀스러운 팬더 마을에 간 포. 무시무시한 악당이 중국 전역을 위협하자 세상을 지키기 위해 오합지졸 군대를 모은다.'},
    {item_no: 13, src: 'comedy13.webp', title_img: 'comedy_title13.webp', banner_img: 'comedy_banner13.webp', desc: '가족이 다 사라졌으면 좋겠어! 하나님이 소원을 들어주신 걸까? 크리스마스 연휴에 집에 혼자 남게 된 8살 소년. 혼자 놀기에 지칠 즈음, 집 주위를 얼쩡거리는 도둑들을 발견하는데. 들어올 테면 들어와 보시지. 우리 집은 내가 지킨다!'},
    {item_no: 14, src: 'comedy14.webp', title_img: 'comedy_title14.webp', banner_img: 'comedy_banner14.webp', desc: '평범한 청년이 알게 된 가문의 놀라운 비밀. 그건 바로 집안의 남자들에게 시간을 되돌리는 능력이 있다는 것. 청년은 첫눈에 반한 여인의 마음을 얻기 위해 그 특별한 능력을 사용하기로 한다. 그리고 그녀와의 꿈 같은 시간이 시작된다.'},
    {item_no: 15, src: 'comedy15.webp', title_img: 'comedy_title15.webp', banner_img: 'comedy_banner15.webp', desc: '창의력이 지글지글 끓어오르는 셰프. 똑같은 메뉴만 고집하는 주인과 지지고 볶은 후 허름한 푸드트럭을 차리면서 맛깔나는 좌충우돌 여정에 오른다. 배고플 땐 보지 말 것!'},
    {item_no: 16, src: 'comedy16.webp', title_img: 'comedy_title16.webp', banner_img: 'comedy_banner16.webp', desc: '‘지루한 게 최고다’가 좌우명인 보디가드. 재판의 핵심 증인이자 어디로 튈지 모르는 킬러를 보호하는 임무를 맡는다. 그가 잔인한 독재자에게 맞서 법정에서 증언할 수 있도록.'},
    {item_no: 17, src: 'comedy17.webp', title_img: 'comedy_title17.webp', banner_img: 'comedy_banner17.webp', desc: '뛰는 형 위에 나는 동생? 직장에서 쫓겨난 그루 앞에 나타나 가업을 잇자고 제안하는 쌍둥이 동생 드루. 악당 DNA를 타고난 두 형제가 뭉치면 세상엔 과연 어떤 일이 벌어질지. 음, 적어도 확실한 건 오늘도 조용하긴 글렀다는 것.'},
    {item_no: 18, src: 'comedy18.webp', title_img: 'comedy_title18.webp', banner_img: 'comedy_banner18.webp', desc: '스티븐 스필버그가 감독한 아카데미상 후보작. FBI의 아슬아슬한 추격에도 언제나 한발 앞서는 방탕한 사기꾼의 이야기를 그린다.' }
  ]
  ,
  // animation
  [
    {item_no: 1, src: 'animation01.webp', title_img: 'animation_title1.webp', banner_img: 'animation_banner1.webp', desc: '마녀가 지배하는 신비한 세계에 발을 들여놓은 치히로. 마녀에게 거역하는 자는 동물로 변하게 되는데...'},
    {item_no: 2, src: 'animation02.webp', title_img: 'animation_title2.webp', banner_img: 'animation_banner2.webp', desc: '아버지가 물려준 모자 가게를 지키는 수수한 소녀 소피. 전쟁도, 미녀의 심장을 노리는 마법사의 소문도 먼 세상 이야기일 뿐. 하지만 마녀의 저주로 할머니가 되면서, 소피의 인생이 회전목마처럼 힘차게 움직이기 시작한다.'},
    {item_no: 3, src: 'animation03.webp', title_img: 'animation_title3.webp', banner_img: 'animation_banner3.webp', desc: '인간을 향한 자연의 증오. 부족을 책임져야 하는 청년 아시타카의 팔에 저주가 되어 새겨진다. 시시각각 다가오는 죽음을 막기 위해 여행을 떠난 아시타카. 하지만 그가 도착한 곳은 인간과 자연의 또 다른 전쟁터였다.'},
    {item_no: 4, src: 'animation04.webp', title_img: 'animation_title4.webp', banner_img: 'animation_banner4.webp', desc: "'전 소인족 소녀 아리에티예요. 우린 마루 밑에서 몰래 인간의 물건을 '빌려' 살아가죠. 우리에겐 철칙이 있는데, 사람에게 들키면 그 집을 떠나야 해요. 근데 아빠와 설탕을 구하러 갔던 밤, 인간 소년 쇼가 제 모습을 보고 말았어요!'"},
    {item_no: 5, src: 'animation05.webp', title_img: 'animation_title5.webp', banner_img: 'animation_banner5.webp', desc: '엄마의 입원으로 두 어린 자매는 아빠와 함께 일본의 한 시골 마을에서 여름을 보내게 된다.'},
    {item_no: 6, src: 'animation06.webp', title_img: 'animation_title6.webp', banner_img: 'animation_banner6.webp', desc: '《주술회전》 애니메이션 시리즈의 막을 연 사건, 그 이전을 배경으로 한 프리퀄. 아쿠타미 게게의 원작 만화를 각색하고 더 확장했다.'},
    {item_no: 7, src: 'animation07.jpg', title_img: 'animation_title7.webp', banner_img: 'animation_banner7.webp', desc: "'샤아의 반란' 후 12년이 흐른 우주세기 0105년. 급부상한 무장 조직 마프티가 연방 관료들이 탄 우주선의 탈취를 시도한다. 그리고 그 현장엔 브라이트 대령의 아들 하사웨이가 있었다.'"},
    {item_no: 8, src: 'animation08.webp', title_img: 'animation_title8.webp', banner_img: 'animation_banner8.webp', desc: '새 임무를 맡은 탄지로, 젠이츠, 이노스케는 무한열차에서 귀살대 최강의 검사 렌고쿠와 합류한다. 그리고 세 소년에게 렌고쿠는 충고한다. 혈귀는 어디에나 있다. 달리는 이 열차 안에도.'},
    {item_no: 9, src: 'animation09.jpg', title_img: 'animation_title9.webp', banner_img: 'animation_banner9.webp', desc: '마법을 사용할 순 없지만 용맹한 소년은 마법제가 되기 위해 애쓴다. 그러던 어느 날, 봉인되었던 네 명의 역대 마법제가 클로버 왕국을 섬멸하기 위해 다시 모습을 드러낸다.'},
    {item_no: 10, src: 'animation10.jpg', title_img: 'animation_title10.webp', banner_img: 'animation_banner10.webp', desc: '새로운 정착지를 찾아 우주를 헤매는 인류. 이제 나아갈 곳 없는 그들이 마지막 결단을 내린다. 지구로의 귀환. 그곳에서 하루오와 동료들은 충격적인 진실과 맞닥뜨린다.'},
    {item_no: 11, src: 'animation11.webp', title_img: 'animation_title11.webp', banner_img: 'animation_banner11.webp', desc: '인간의 적은 결국 인간이었나. 에반게리온을 차지하려는 제레가 네르프 본부에 대한 총공격을 명령한다. 인류 보완 계획의 정체가 베일을 벗는 가운데 서드 임팩트에 대한 위기 또한 고조되고. 세상의 시작과 종말의 문은 열릴 것인가.'},
    {item_no: 12, src: 'animation12.webp', title_img: 'animation_title12.webp', banner_img: 'animation_banner12.webp', desc: '우주세기 0079, 지온 공국이 우주에서 지구연방을 상대로 독립전쟁을 일으킨다. 그리고 우연히 포화에 휘말린 소년 아무로, 연방의 모빌슈트 건담과 함께 새로운 우주 전쟁사의 서막을 연다.'},
    {item_no: 13, src: 'animation13.webp', title_img: 'animation_title13.webp', banner_img: 'animation_banner13.webp', desc: '골 D. 로저의 보물을 찾는 축제에 참가하기 위해 전 세계에서 해적들이 몰려든다. 하지만, 그 이면에는 한때 로저 해적단의 일원이었던 자의 흉악한 음모가 도사리고 있었다.'},
    {item_no: 14, src: 'animation14.webp', title_img: 'animation_title14.webp', banner_img: 'animation_banner14.webp', desc: '고개 숙인 아버지들을 어떻게든 강하게 만들려는 무서운 음모. 여기에 휘말린 짱구 아빠도 로봇으로 개조돼 집으로 돌아오는데. 지금 짱구 가족의 사랑이 시험대에 오른다!'},
    {item_no: 15, src: 'animation15.webp', title_img: 'animation_title15.webp', banner_img: 'animation_banner15.webp', desc: '따분한 바다 생활이 싫어 가출한 물고기 공주 포뇨. 벼랑 위에 사는 인간 꼬마 소스케를 만나 친구가 된다. 온 바다가 들썩들썩 포뇨를 찾아 나서지만, 이 고집불통 물고기의 소원은 오직 하나. 포뇨도 소스케처럼 인간이 될 거야!'},
    {item_no: 16, src: 'animation16.webp', title_img: 'animation_title16.webp', banner_img: 'animation_banner16.webp', desc: "하늘을 나는 걸 좋아하는 열세 살 예비 마녀 키키. 마녀 수행을 위해 찾아간 항구 도시에서 키키가 시작한 일은 '하늘을 나는 배달부'. 배달할 게 있으면 언제든 전화 주세요. 오늘처럼 맑은 보름밤, 키키가 당신의 마을로 찾아갑니다."},
    {item_no: 17, src: 'animation17.webp', title_img: 'animation_title17.webp', banner_img: 'animation_banner17.webp', desc: '황폐한 죽음의 행성이 된 지구. 특별한 소녀 나우시카는 사람들과 힘을 합쳐 사악한 여왕의 악명 높은 군대를 막으려고 한다.'},
    {item_no: 18, src: 'animation18.webp', title_img: 'animation_title18.webp', banner_img: 'animation_banner18.webp', desc: '인간 세계는 어떤 곳일까? 신비로운 세계를 떠나 인간계에 온 소녀. 돌고래로 변신해 탐험하던 중 한 소년 덕분에 목숨을 구한다. 하지만 도리어 소년의 생명이 희생될 줄은. 결국 소녀는 은인을 구하기 위해 운명적인 여정에 몸을 맡긴다.' }
  ]
  ,
  // horror_movie
  [
    {item_no: 1, src: 'horror_movie01.webp', title_img: 'horror_movie_title1.webp', banner_img: 'horror_movie_banner1.webp', desc: '스티븐 킹 소설 원작의 2019년 작 호러 영화. 제시카 차스테인, 제임스 맥어보이, 빌 헤이더가 주연을 맡았다.'},
    {item_no: 2, src: 'horror_movie02.webp', title_img: 'horror_movie_title2.webp', banner_img: 'horror_movie_banner2.webp', desc: '퇴마사 흉내를 내며 소셜 미디어에서 활동하는 당주 무당의 손자. 그런데 기이한 사건을 통해 자기 가족을 해친 악귀와 마주치게 되면서 진심으로 사건 해결에 나선다.'},
    {item_no: 3, src: 'horror_movie03.webp', title_img: 'horror_movie_title3.webp', banner_img: 'horror_movie_banner3.webp', desc: '인간이 굶주린 기생생물의 제물이 되자, 한 소년이 인류를 구하기 위해 자기 몸에 침투한 생명체와 공생 관계를 형성한다.'},
    {item_no: 4, src: 'horror_movie04.webp', title_img: 'horror_movie_title4.webp', banner_img: 'horror_movie_banner4.webp', desc: '좀비 바이러스가 온 나라를 휩쓸면서, 단 하나 남은 안전한 도시로 가기 위해 딸과 함께 열차에 몸을 실은 남자. 살아남기 위한 극한의 사투가 시작된다.'},
    {item_no: 5, src: 'horror_movie05.webp', title_img: 'horror_movie_title5.webp', banner_img: 'horror_movie_banner5.webp', desc: '초능력을 가진 살인마들이 특별한 힘을 지닌 아이를 추격한다. 긴장감 넘치는 호러 영화.'},
    {item_no: 6, src: 'horror_movie06.webp', title_img: 'horror_movie_title6.webp', banner_img: 'horror_movie_banner6.webp', desc: '여자친구 로즈의 부모님을 만나는 날. 크리스는 초조한 기색이 역력하다. 어쩐지 꺼림칙하더라니, 불편한 만남은 어느새 공포로 돌변한다.'},
    {item_no: 7, src: 'horror_movie07.webp', title_img: 'horror_movie_title7.webp', banner_img: 'horror_movie_banner7.webp', desc: '외딴 별장으로 휴가를 떠난 가족. 그런데 낯선 사람 네 명이 무단침입해 인류의 종말을 막기 위해 한 가지 희생을 하라고 요구한다. 도저히 불가능한 선택 앞에 가족의 휴가는 순식간에 악몽으로 변한다.'},
    {item_no: 8, src: 'horror_movie08.webp', title_img: 'horror_movie_title8.webp', banner_img: 'horror_movie_banner8.webp', desc: '이세계와 연결돼 있다는 미스터리한 기차역. 민속학을 공부하는 학생이 이 도시 괴담의 진실을 파헤친다.'},
    {item_no: 9, src: 'horror_movie09.webp', title_img: 'horror_movie_title9.webp', banner_img: 'horror_movie_banner9.webp', desc: '작은 교외 지역의 소년 실종 사건을 맡은 형사. 불화와 위기 속 나날을 보내던 그의 가정에 위험한 존재가 도사리고 있음을 알게되는데.'},
    {item_no: 10, src: 'horror_movie10.webp', title_img: 'horror_movie_title10.webp', banner_img: 'horror_movie_banner10.webp', desc: '개척선 커버넌트호가 미지의 행성에서 온 신호를 감지한다. 지구와 닮은 곳이란 기대에 탐사 팀이 파견되지만, 대원들이 아프기 시작하고 의문의 남자가 나타난다. 이 행성엔 어떤 비밀이 있나.'},
    {item_no: 11, src: 'horror_movie11.webp', title_img: 'horror_movie_title11.webp', banner_img: 'horror_movie_banner11.webp', desc: '해수면 수 킬로미터 아래에서 대재앙이 일어나고, 심해에서 작업하던 탐사 대원들은 시추 작업이 불러온 무시무시한 결과를 마주한다.'},
    {item_no: 12, src: 'horror_movie12.webp', title_img: 'horror_movie_title12.webp', banner_img: 'horror_movie_banner12.webp', desc: '폐기된 독성 화학물질로 인해 탄생한 돌연변이 괴물이 딸을 낚아채자 한강 매점 주인은 딸을 구하기 위해 숨 가쁘게 움직인다.'},
    {item_no: 13, src: 'horror_movie13.webp', title_img: 'horror_movie_title13.webp', banner_img: 'horror_movie_banner13.webp', desc: '죽음의 바이러스가 확산되자 봉쇄에 들어간 라쿤 시티. 좀비와 함께 그곳에 갇힌 앨리스와 엘리트 군단은 새로운 악의 등장을 마주한다.'},
    {item_no: 14, src: 'horror_movie14.webp', title_img: 'horror_movie_title14.webp', banner_img: 'horror_movie_banner14.webp', desc: '라쿤 시티에 재앙이 발생한 이후 수년이 흘렀다. 적들이 한층 더 사악한 음모를 꾸미는 가운데, 앨리스는 라스베이거스에서 소수의 생존자와 힘을 합친다.'},
    {item_no: 15, src: 'horror_movie15.webp', title_img: 'horror_movie_title15.webp', banner_img: 'horror_movie_banner15.webp', desc: '집에서도 학교에서도 늘 외로운 캐리. 상처받은 소녀의 분노는 숨겨진 초능력을 끌어내고, 모두가 손꼽아 기다리던 졸업파티에서 달라진 캐리가 무차별 복수극을 시작한다.'},
    {item_no: 16, src: 'horror_movie16.webp', title_img: 'horror_movie_title16.webp', banner_img: 'horror_movie_banner16.webp', desc: '불로장생의 난초를 구하려 겁 없이 정글로 뛰어든 연구진. 그러나 젊음의 명약을 선점한 채 이들을 기다리는 무리가 있었으니. 발아래를 조심하라. 휘감기는 순간, 끝이다.'},
    {item_no: 17, src: 'horror_movie17.webp', title_img: 'horror_movie_title17.webp', banner_img: 'horror_movie_banner17.webp', desc: '친구가 사라졌다! 인터넷 괴담 속 존재 슬렌더맨을 소환하는 의식을 치른 뒤 일어난 일. 그리고 실종된 친구를 찾기 위해 또다시 그를 부르고 말았으니. 절대로 눈을 떠선 안 돼! 눈을 마주치면 미치거나 끔찍한 죽음을 맞게 될 테니.'},
    {item_no: 18, src: 'horror_movie18.webp', title_img: 'horror_movie_title18.webp', banner_img: 'horror_movie_banner18.webp', desc: '옛 기억으로 고통받던 영매 엘리스 레이니어. 다시 찾은 뉴멕시코의 고향 집에서 사악한 과거의 흔적과 어두운 비밀을 마주한다.' }
  ]
  ,
  // musical movie
  [
    {item_no: 1, src: 'musical_movie01.webp', title_img: 'musical_movie_title1.webp', banner_img: 'musical_movie_banner1.webp', desc: '꿈꾸는 이들이 모이는 곳, LA. 우연히 만난 배우 지망생 미아와 재즈 피아니스트 세바스찬은 서로를 향한 사랑을 키워간다. 각자의 꿈으로 인해 가슴 아픈 딜레마를 마주하게 될 줄은 모르고.'},
    {item_no: 2, src: 'musical_movie02.webp', title_img: 'musical_movie_title2.webp', banner_img: 'musical_movie_banner2.webp', desc: '완벽을 추구하는 음악 교수의 지도에 따라, 앤드류는 재즈 뮤지션으로 성공하겠다는 일념에 불탄다. 성공의 대가로 인격이 파괴될지라도.'},
    {item_no: 3, src: 'musical_movie03.webp', title_img: 'musical_movie_title3.webp', banner_img: 'musical_movie_banner3.webp', desc: '1995년 디트로이트. 재능 있는 무명 래퍼가 지역 힙합 무대에서 자신의 실력을 증명하기 위해 싸운다. 평단의 찬사를 받은 드라마 장르 영화. 주연배우 에미넴의 실제 삶을 모티브로 했다.'},
    {item_no: 4, src: 'musical_movie04.webp', title_img: 'musical_movie_title4.webp', banner_img: 'musical_movie_banner4.webp', desc: '19세기 프랑스. 과거에 도둑이었지만 새 신분으로 새 인생을 살려는 남자. 하지만 선의로 한 행동이 다시 그를 과거와 마주하게 한다.'},
    {item_no: 5, src: 'musical_movie05.webp', title_img: 'musical_movie_title5.webp', banner_img: 'musical_movie_banner5.webp', desc: '예고로 전학 온 첫날, 교정에서 아름다운 피아노 선율이 들린다. 소리에 이끌려 문을 연 음악실. 거기 한 여학생이 있다. 첫눈에 사랑에 빠지지만 그녀는 홀연히 사라진다. 나타났다 사라지기를 반복하는 그녀. 그녀에게 더 다가가고 싶다.'},
    {item_no: 6, src: 'musical_movie06.jpg', title_img: 'musical_movie_title6.webp', banner_img: 'musical_movie_banner6.webp', desc: '감동을 선사하는 로맨스 드라마 영화. 재능을 숨기고 살다가 음악 프로듀서에게 발굴된 뒤 하루아침에 유명해지는 어부의 이야기를 그린다.'},
    {item_no: 7, src: 'musical_movie07.jpg', title_img: 'musical_movie_title7.webp', banner_img: 'musical_movie_banner7.webp', desc: '시카고의 사우스사이드에 사는 힙합 천재 오거스트. 심한 충격을 받은 후, 바깥세상과 완전히 단절하고 산다. 음악에만 몰두한 그에게 뜻밖의 인물이 다가와 손을 내민다.'},
    {item_no: 8, src: 'musical_movie08.jpg', title_img: 'musical_movie_title8.webp', banner_img: 'musical_movie_banner8.webp', desc: '60년대를 배경으로 원작 만화를 각색한 작품. 아가스티야 난다, 수하나 칸, 쿠시 카푸르가 아치, 베로니카, 베티로 출연하고, 조야 악타르 감독이 연출했다.'},
    {item_no: 9, src: 'musical_movie09.jpg', title_img: 'musical_movie_title9.webp', banner_img: 'musical_movie_banner9.webp', desc: '홍등가의 소년 이치노세 카이. 숲속에 버려진 피아노만이 유일한 안식처였던 그가 모두를 울리는 피아니스트로 성장한다. 사랑과 우정으로 충만한 감성 음악 애니메이션.'},
    {item_no: 10, src: 'musical_movie10.jpg', title_img: 'musical_movie_title10.webp', banner_img: 'musical_movie_banner10.webp', desc: '지금부터 힙합의 산 역사를 만난다! 태동기부터 현재까지, 당대의 MC와 디제이, 업계 거물들이 전하는 힙합의 혁신들. 흥겨운 비트와 인터뷰로 가득한 다큐멘터리 시리즈.'},
    {item_no: 11, src: 'musical_movie11.jpg', title_img: 'musical_movie_title11.webp', banner_img: 'musical_movie_banner11.webp', desc: '일도 집도 사랑도 잃었다. 길 잃은 무명 컨트리 가수 앞에 나타난 새로운 인생. 내가 보모 일에 소질이 있을 줄이야. 다섯 아이와 아버지가 이렇게 매력적일 줄이야!'},
    {item_no: 12, src: 'musical_movie12.webp', title_img: 'musical_movie_title12.webp', banner_img: 'musical_movie_banner12.webp', desc: '청각 장애인 부모를 둔 10대 소녀. 음악을 향한 꿈을 좇아야 할까, 궁지에 처한 가족을 도와야 할까. 쉽지 않은 선택 앞에서 소녀의 고민이 깊어진다.'},
    {item_no: 13, src: 'musical_movie13.jpg', title_img: 'musical_movie_title13.webp', banner_img: 'musical_movie_banner13.webp', desc: '1985년 1월의 어느 밤, 음악계의 초대형 스타들이 모여 ‘위 아 더 월드’를 녹음한다. 이 역사적인 프로젝트의 비하인드 스토리를 담은 다큐멘터리.'},
    {item_no: 14, src: 'musical_movie14.webp', title_img: 'musical_movie_title14.webp', banner_img: 'musical_movie_banner14.webp', desc: '한때 유망한 성악가였던 성질 고약한 음악 선생이 테너를 꿈꾸는 어린 건달을 새로운 제자로 떠맡는다.'},
    {item_no: 15, src: 'musical_movie15.webp', title_img: 'musical_movie_title15.webp', banner_img: 'musical_movie_banner15.webp', desc: '아빠 친구와 재혼한 엄마, 실연당하고 엄마를 찾아오는 아빠, 가석방된 전과자와 사랑에 빠진 딸. 유별난 가족의 막장 로맨스가 찾아온다. 우디 앨런이 감독 겸 주연을 맡은 뮤지컬 코미디.'},
    {item_no: 16, src: 'musical_movie16.jpg', title_img: 'musical_movie_title16.webp', banner_img: 'musical_movie_banner16.webp', desc: '인터넷 조롱거리가 된 래퍼 지망생과 그의 친구. 하지만 절망은 이르지. 오늘 밤, 오명을 벗을 마지막 기회가 있으니까! 힙합 드리머의 이판사판 성장 코미디가 시작된다.'},
    {item_no: 17, src: 'musical_movie17.jpg', title_img: 'musical_movie_title17.webp', banner_img: 'musical_movie_banner17.webp', desc: '40살엔 성공한 예술가가 되어있을 줄 알았지. 한물간 극작가가 되어있을 줄은 몰랐다. 그래서 다 포기해야 할까? 아니, 내 이야기를 랩으로 해보자. 할 말은 넘쳐나니까.'},
    {item_no: 18, src: 'musical_movie18.jpg', title_img: 'musical_movie_title18.webp', banner_img: 'musical_movie_banner18.webp', desc: '록 뮤지션을 꿈꾸는 남자가 자기와 닮은 유명 세르타네주 뮤지션의 자리를 대신하게 되면서 일생일대의 선택을 마주한다. 정체성을 포기할 것인가, 아니면 마음을 따를 것인가.' }
  ]
]

const TOP_NUMBER = 
[
`<svg id="rank-1" width="100%" height="100%" viewBox="-20 0 70 154" class="svg-icon svg-icon-rank-1 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"/>
</svg>`,
`<svg id="rank-2" width="100%" height="100%" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-2 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"/>
</svg>`,
`<svg id="rank-3" width="100%" height="100%" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-3 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"/>
</svg>`,
`<svg id="rank-4" width="100%" height="100%" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-4 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"/>
</svg>`,
`<svg id="rank-5" width="100%" height="100%" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-5 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"/>
</svg>`,
`<svg id="rank-6" width="100%" height="100%" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-6 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z"/>
</svg>`,
`<svg id="rank-7" viewBox="0 0 78 154" width="100%" height="100%" class="svg-icon svg-icon-rank-7 top-10-rank">
<path stroke="#595959" stroke-width="4" d="M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z" stroke-linejoin="square"/>
</svg>`,
`<svg id="rank-8" width="100%" height="100%" viewBox="0 0 77 154" class="svg-icon svg-icon-rank-8 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M59.5 152c11.335 0 21.358-1.72 30.077-5.15 8.637-3.397 15.361-8.258 20.213-14.586 4.805-6.267 7.21-13.876 7.21-22.899 0-7.326-2.261-14.07-6.813-20.29-4.548-6.214-10.837-10.658-18.922-13.35l-5.4-1.799 5.338-1.975c7.238-2.678 12.572-6.683 16.066-12.018 3.53-5.388 5.284-11.178 5.284-17.414 0-7.912-2.133-14.839-6.405-20.84-4.3-6.042-10.403-10.825-18.345-14.351C79.816 3.78 70.386 2 59.5 2S39.184 3.781 31.197 7.328c-7.942 3.526-14.044 8.309-18.345 14.351-4.272 6.001-6.405 12.928-6.405 20.84 0 6.236 1.755 12.026 5.284 17.414 3.494 5.335 8.828 9.34 16.066 12.018l5.338 1.975-5.4 1.798c-8.085 2.693-14.374 7.137-18.922 13.351C4.261 95.295 2 102.04 2 109.365c0 9.023 2.405 16.632 7.21 22.899 4.852 6.328 11.576 11.19 20.213 14.586 8.72 3.43 18.742 5.15 30.077 5.15zm.5-89c-5.6 0-10.334-1.515-14.125-4.56C41.985 55.313 40 51.183 40 46.21c0-5.244 1.976-9.518 5.875-12.65C49.666 30.515 54.4 29 60 29s10.334 1.515 14.125 4.56C78.025 36.694 80 40.968 80 46.212c0 4.973-1.985 9.103-5.875 12.228C70.334 61.485 65.6 63 60 63zm-.5 62c-6.255 0-11.556-1.613-15.836-4.856-4.41-3.343-6.664-7.816-6.664-13.25 0-5.298 2.258-9.698 6.664-13.038C47.944 90.613 53.245 89 59.5 89c6.255 0 11.556 1.613 15.836 4.856 4.406 3.34 6.664 7.74 6.664 13.038 0 5.434-2.254 9.907-6.664 13.25C71.056 123.387 65.755 125 59.5 125z"/>
</svg>`,
`<svg id="rank-9" viewBox="0 0 71 154" width="100%" height="100%" class="svg-icon svg-icon-rank-9 top-10-rank">
<path stroke="#595959" stroke-width="4" d="M40.0597376,115.807692 L4.47328474,115.807692 C7.45109332,126.586242 13.4362856,135.15497 22.4670906,141.582071 C32.2129251,148.518048 44.5640134,152 59.5759717,152 C78.2141671,152 92.5105725,145.697944 102.6454,133.074799 C112.853557,120.360322 118,101.543854 118,76.5769231 C118,62.1603327 115.678843,49.3016297 111.046669,37.9886125 C106.453069,26.7698049 99.6241767,17.9802976 90.5435117,11.5767831 C81.5017862,5.20072813 70.1375399,2 56.3957597,2 C49.4158116,2 42.68229,3.15952329 36.1849549,5.47966815 C29.7045526,7.79376647 23.8782903,11.1932931 18.6948526,15.6846002 C13.5316746,20.1583529 9.45923583,25.508367 6.46782377,31.7491046 C3.4928156,37.95562 2,45.0644366 2,53.0961538 C2,61.9117395 4.02797967,69.7019439 8.0788911,76.5056791 C12.1434539,83.3323424 17.5832537,88.6925139 24.4218542,92.6108203 C31.2518358,96.5241882 38.8590885,98.4807692 47.2791519,98.4807692 C55.0853554,98.4807692 61.6095996,97.3619306 66.8547126,95.1478231 C72.0569983,92.9517941 76.4513169,89.5970183 80.0605818,85.0622151 L84.0584687,80.039134 L83.6207883,86.4440446 C82.74746,99.2241219 80.0984349,108.438199 75.5533003,114.10687 C70.9310132,119.871766 64.7726909,122.788462 57.2438163,122.788462 C52.8691399,122.788462 49.1904302,122.100251 46.212535,120.692834 C43.5930338,119.454801 41.5307848,117.825945 40.0597376,115.807692 Z M57.5,31 C63.3657106,31 68.4419893,32.9364861 72.6299874,36.7826253 C76.8609583,40.6682294 79,45.6186068 79,51.5 C79,57.3813932 76.8609583,62.3317706 72.6299874,66.2173747 C68.4419893,70.0635139 63.3657106,72 57.5,72 C51.6342894,72 46.5580107,70.0635139 42.3700126,66.2173747 C38.1390417,62.3317706 36,57.3813932 36,51.5 C36,45.6186068 38.1390417,40.6682294 42.3700126,36.7826253 C46.5580107,32.9364861 51.6342894,31 57.5,31 Z" stroke-linejoin="square"/>
</svg>`,
`<svg id="rank-10" width="100%" height="100%" viewBox="0 0 140 154" class="svg-icon svg-icon-rank-10 top-10-rank">
<path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M34.757 151.55h35.869V2.976L2 19.687v30.14l32.757-8.41v110.132zm105.53 3.45c12.394 0 23.097-3.12 32.163-9.353 9.093-6.25 16.11-15.047 21.066-26.43C198.5 107.766 201 94.196 201 78.5c0-15.698-2.5-29.266-7.484-40.716-4.955-11.384-11.973-20.18-21.066-26.431C163.384 5.119 152.681 2 140.287 2c-12.393 0-23.096 3.12-32.162 9.353-9.093 6.25-16.11 15.047-21.066 26.43-4.984 11.45-7.484 25.02-7.484 40.717 0 15.698 2.5 29.266 7.484 40.716 4.955 11.384 11.973 20.18 21.066 26.431 9.066 6.234 19.769 9.353 32.162 9.353zm0-31.368c-7.827 0-13.942-4.147-18.15-12.178-4.053-7.736-6.047-18.713-6.047-32.954s1.994-25.218 6.047-32.954c4.208-8.03 10.323-12.178 18.15-12.178 7.827 0 13.943 4.147 18.15 12.178 4.053 7.736 6.048 18.713 6.048 32.954s-1.995 25.218-6.047 32.954c-4.208 8.03-10.324 12.178-18.15 12.178z"/>
</svg>`
]

const EL_ARR = ['top_ten','usa_action', 'click_contents', 'new_contents', 'best_movie', 'lomance', 'comedy', 'animation', 'horror_movie', 'musical_movie']

const SEC_TITLE = ['오늘 대한민국의 TOP 10 시리즈', '미국 액션 & 어드벤처 영화', '클릭! 인기 콘텐츠', '넷플릭스에 새로 올라온 콘텐츠', '평단의 찬사를 받은 영화들', '로맨틱한 판타지 시리즈', '코미디', '애니메이션', '호러 영화', '음악 & 뮤지컬 영화']

let section;
let item;

function load_item(cate) { // cate는 그냥 걸어본 것. 그래도 한번 사용처를 고려해봐야겠다.
  // 설명: item 만들기
  // console.log('cate:',cate);
    if(ITEM_LIST[cate].length > 1) { // ITEM_LIST의 배열 [cate]의 길이가 1이 상일때 동작
        section = // main.container 에 들어갈 section 생성
        `
          <section class="sec contents_area" id="${EL_ARR[cate]}"> 
            <div class="sec_header">
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
      
      for(let j=0; j<ITEM_LIST[cate].length; j++){ 
            // 'item =' 이 아니라 += 을 해서 망가졌던 것이였다.
            item = ` 
                <li class="item">`
  
            if(cate == 0) {
              item += TOP_NUMBER[j]
            }
  
            item +=  
                  `<img src="../img/NETFLEX/${EL_ARR[cate]}/${ITEM_LIST[cate][j].src}" alt="">
                </li>`

        $(`#${EL_ARR[cate]} ul.item_box`).append(item);
      }
    }
  document.getElementsByClassName('sec_header')[cate].innerText = SEC_TITLE[cate];
}




