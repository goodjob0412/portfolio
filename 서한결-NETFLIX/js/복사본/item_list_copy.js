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
    {item_no: 1, src: 'best_movie1.webp', title_img: 'best_movie_title1.webp', banner_img: 'best_movie_banner1.webp', desc: '-'},
    {item_no: 2, src: 'best_movie2.jpg', title_img: 'best_movie_title2.webp', banner_img: 'best_movie_banner2.webp', desc: '-'},
    {item_no: 3, src: 'best_movie3.webp', title_img: 'best_movie_title3.webp', banner_img: 'best_movie_banner3.webp', desc: '-'},
    {item_no: 4, src: 'best_movie4.webp', title_img: 'best_movie_title4.webp', banner_img: 'best_movie_banner4.webp', desc: '-'},
    {item_no: 5, src: 'best_movie5.webp', title_img: 'best_movie_title5.webp', banner_img: 'best_movie_banner5.webp', desc: '-'},
    {item_no: 6, src: 'best_movie6.jpg', title_img: 'best_movie_title6.webp', banner_img: 'best_movie_banner6.webp', desc: '-'},
    {item_no: 7, src: 'best_movie7.webp', title_img: 'best_movie_title7.webp', banner_img: 'best_movie_banner7.webp', desc: '-'},
    {item_no: 8, src: 'best_movie8.jpg', title_img: 'best_movie_title8.webp', banner_img: 'best_movie_banner8.webp', desc: '-'},
    {item_no: 9, src: 'best_movie9.jpg', title_img: 'best_movie_title9.webp', banner_img: 'best_movie_banner9.webp', desc: '-'},
    {item_no: 10, src: 'best_movie10.webp', title_img: 'best_movie_title10.webp', banner_img: 'best_movie_banner10.webp', desc: '-'},
    {item_no: 11, src: 'best_movie11.webp', title_img: 'best_movie_title11.webp', banner_img: 'best_movie_banner11.webp', desc: '-'},
    {item_no: 12, src: 'best_movie12.jpg', title_img: 'best_movie_title12.webp', banner_img: 'best_movie_banner12.webp', desc: '-'},
    {item_no: 13, src: 'best_movie13.webp', title_img: 'best_movie_title13.webp', banner_img: 'best_movie_banner13.webp', desc: '-'},
    {item_no: 14, src: 'best_movie14.webp', title_img: 'best_movie_title14.webp', banner_img: 'best_movie_banner14.webp', desc: '-'},
    {item_no: 15, src: 'best_movie15.webp', title_img: 'best_movie_title15.webp', banner_img: 'best_movie_banner15.webp', desc: '-'},
    {item_no: 16, src: 'best_movie16.webp', title_img: 'best_movie_title16.webp', banner_img: 'best_movie_banner16.webp', desc: '-'},
    {item_no: 17, src: 'best_movie17.webp', title_img: 'best_movie_title17.webp', banner_img: 'best_movie_banner17.webp', desc: '-'},
    {item_no: 18, src: 'best_movie18.jpg', title_img: 'best_movie_title18.webp', banner_img: 'best_movie_banner18.webp', desc: '-' }
  ]
  ,
  // lomance
  [
    {item_no: 1, src: 'lomance1.webp', title_img: 'lomance_title1.webp', banner_img: 'lomance_banner1.webp', desc: '-'},
    {item_no: 2, src: 'lomance2.webp', title_img: 'lomance_title2.webp', banner_img: 'lomance_banner2.webp', desc: '-'},
    {item_no: 3, src: 'lomance3.webp', title_img: 'lomance_title3.webp', banner_img: 'lomance_banner3.webp', desc: '-'},
    {item_no: 4, src: 'lomance4.webp', title_img: 'lomance_title4.webp', banner_img: 'lomance_banner4.webp', desc: '-'},
    {item_no: 5, src: 'lomance5.webp', title_img: 'lomance_title5.webp', banner_img: 'lomance_banner5.webp', desc: '-'},
    {item_no: 6, src: 'lomance6.webp', title_img: 'lomance_title6.webp', banner_img: 'lomance_banner6.webp', desc: '-'},
    {item_no: 7, src: 'lomance7.webp', title_img: 'lomance_title7.webp', banner_img: 'lomance_banner7.webp', desc: '-'},
    {item_no: 8, src: 'lomance8.webp', title_img: 'lomance_title8.webp', banner_img: 'lomance_banner8.webp', desc: '-'},
    {item_no: 9, src: 'lomance9.webp', title_img: 'lomance_title9.webp', banner_img: 'lomance_banner9.webp', desc: '-'},
    {item_no: 10, src: 'lomance10.webp', title_img: 'lomance_title10.webp', banner_img: 'lomance_banner10.webp', desc: '-'},
    {item_no: 11, src: 'lomance11.webp', title_img: 'lomance_title11.webp', banner_img: 'lomance_banner11.webp', desc: '-'},
    {item_no: 12, src: 'lomance12.jpg', title_img: 'lomance_title12.webp', banner_img: 'lomance_banner12.webp', desc: '-'},
    {item_no: 13, src: 'lomance13.webp', title_img: 'lomance_title13.webp', banner_img: 'lomance_banner13.webp', desc: '-'},
    {item_no: 14, src: 'lomance14.webp', title_img: 'lomance_title14.webp', banner_img: 'lomance_banner14.webp', desc: '-'},
    {item_no: 15, src: 'lomance15.webp', title_img: 'lomance_title15.webp', banner_img: 'lomance_banner15.webp', desc: '-'},
    {item_no: 16, src: 'lomance16.webp', title_img: 'lomance_title16.webp', banner_img: 'lomance_banner16.webp', desc: '-'},
    {item_no: 17, src: 'lomance17.webp', title_img: 'lomance_title17.webp', banner_img: 'lomance_banner17.webp', desc: '-'},
    {item_no: 18, src: 'lomance18.webp', title_img: 'lomance_title18.webp', banner_img: 'lomance_banner18.webp', desc: '-' }
  ]
  ,
  // comedy
  [
    {item_no: 1, src: 'comedy01.webp', title_img: 'comedy_title1.webp', banner_img: 'comedy_banner1.webp', desc: '-'},
    {item_no: 2, src: 'comedy02.webp', title_img: 'comedy_title2.webp', banner_img: 'comedy_banner2.webp', desc: '-'},
    {item_no: 3, src: 'comedy03.webp', title_img: 'comedy_title3.webp', banner_img: 'comedy_banner3.webp', desc: '-'},
    {item_no: 4, src: 'comedy04.webp', title_img: 'comedy_title4.webp', banner_img: 'comedy_banner4.webp', desc: '-'},
    {item_no: 5, src: 'comedy05.webp', title_img: 'comedy_title5.webp', banner_img: 'comedy_banner5.webp', desc: '-'},
    {item_no: 6, src: 'comedy06.webp', title_img: 'comedy_title6.webp', banner_img: 'comedy_banner6.webp', desc: '-'},
    {item_no: 7, src: 'comedy07.webp', title_img: 'comedy_title7.webp', banner_img: 'comedy_banner7.webp', desc: '-'},
    {item_no: 8, src: 'comedy08.webp', title_img: 'comedy_title8.webp', banner_img: 'comedy_banner8.webp', desc: '-'},
    {item_no: 9, src: 'comedy09.jpg', title_img: 'comedy_title9.webp', banner_img: 'comedy_banner9.webp', desc: '-'},
    {item_no: 10, src: 'comedy10.jpg', title_img: 'comedy_title10.webp', banner_img: 'comedy_banner10.webp', desc: '-'},
    {item_no: 11, src: 'comedy11.webp', title_img: 'comedy_title11.webp', banner_img: 'comedy_banner11.webp', desc: '-'},
    {item_no: 12, src: 'comedy12.webp', title_img: 'comedy_title12.webp', banner_img: 'comedy_banner12.webp', desc: '-'},
    {item_no: 13, src: 'comedy13.webp', title_img: 'comedy_title13.webp', banner_img: 'comedy_banner13.webp', desc: '-'},
    {item_no: 14, src: 'comedy14.webp', title_img: 'comedy_title14.webp', banner_img: 'comedy_banner14.webp', desc: '-'},
    {item_no: 15, src: 'comedy15.webp', title_img: 'comedy_title15.webp', banner_img: 'comedy_banner15.webp', desc: '-'},
    {item_no: 16, src: 'comedy16.webp', title_img: 'comedy_title16.webp', banner_img: 'comedy_banner16.webp', desc: '-'},
    {item_no: 17, src: 'comedy17.webp', title_img: 'comedy_title17.webp', banner_img: 'comedy_banner17.webp', desc: '-'},
    {item_no: 18, src: 'comedy18.webp', title_img: 'comedy_title18.webp', banner_img: 'comedy_banner18.webp', desc: '-' }
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

const EL_ARR = ['top_ten','action', 'click_contents', 'new_contents', 'best_movie', 'lomance', 'comedy']

const SEC_TITLE = ['오늘 대한민국의 TOP 10 시리즈', '미국 액션 & 어드벤처 영화', '클릭! 인기 콘텐츠', '넷플릭스에 새로 올라온 콘텐츠', '평단의 찬사를 받은 미국 영화', '로맨틱한 판타지 시리즈', '코미디']

function load_item() { // cate는 그냥 걸어본 것. 그래도 한번 사용처를 고려해봐야겠다.
  // 설명: item 만들기
  // console.log(ITEM_LIST.length);
  for(let i=0; i< ITEM_LIST.length; i++) {
    document.getElementsByClassName('sec_header')[i].innerText = SEC_TITLE[i];

    if(ITEM_LIST[i].length > 1) {

      for(let j=0; j<ITEM_LIST[i].length; j++){
        // let arr_cut = ITEM_LIST[i][j];

        let item = `
                <li class="item">`

            if(i == 0) {
              item += TOP_NUMBER[j]
            }

        item +=  
                  `<img src="../img/NETFLEX/${EL_ARR[i]}/${ITEM_LIST[i][j].src}" alt="">
                </li>`
        $(`#${EL_ARR[i]} ul.item_box`).append(item);
      }
    }
  }
}

$(document).ready(function() {

  console.log(ITEM_LIST.slice(0, 3).length);
  
  // $(window).scroll(function() {
  //   // 무한 스크롤
  //   let d_height = $(document).height();
  //   let s_bot = $(window).scrollTop() + $(window).height();

  //   console.log('d_height, s_bot:' + d_height, s_bot);
  //   // 새로고침 했을 때 스크롤 바가 고무줄처럼 늘어났다 줄어듬

  //   if(d_height <= s_bot) {
      
  //   }
  // })

})


