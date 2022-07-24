const ITEM_LIST = [
    [
        // cake
        [
            {item_no: 1, K_title: '순수우유슈크림 (더블하드바움쿠헨)', E_title: 'Pure milk custard cream', src: '1.png', price: '11,800', desc:'고온에서 반죽을 한겹한겹 구워. 쫀득하고, 크리스피한 식감을 동시에 느낄 수 있는 하드바움쿠헨에 우유크림과 커스타드크림을 가득 충전한 제품'}, 
            {item_no: 2, K_title: '순수우유 카스테라 케이크', E_title: 'Pure milk Castella Cake', src: '2.png', price: '13,500', desc:'달콤하고 부드러운 식감의 카스테라에 신선하고 고소한 우유크림을 듬뿍 넣어 만들어 낸 케이크 입니다.'}, 
            {item_no: 3, K_title: '리얼 생 초코 녹차(더블 크레이프)', E_title: 'Real Choco Green Tea (Double Crepe)', src: '3.png', price: '7,200', desc:'생초코 크레이프와 녹차 크레이프를 한 번에 즐길 수 있는 더블 크레이프 케이크입니다.'}, 
            {item_no: 4, K_title: '커스타드 슈크림(더블 크레이프)', E_title: 'Custard Cream (Double Crepe)', src: '4.png', price: '6,900', desc:'커스타드 크레이프와 슈크림 크레이프를 한 번에 즐길 수 있는 더블 크레이프 케이크입니다.'}, 
            {item_no: 5, K_title: '완전 진한 카라멜(크레이프)', E_title: 'Totally Dark Caramel (Crape)', src: '5.png', price: '6,900', desc:'진한 카라멜 크림이 가득한 크레이프 케이크 입니다.'}, 
            {item_no: 6, K_title: '레드벨벳 티라미수(더블 크레이프)', E_title: 'Red Velvet Tiramisu (Double Crepe)', src: '6.png', price: '7,200', desc:'레드벨벳 크레이프와 티라미수 크레이프를 한 번에 즐길 수 있는 더블 크레이프 케이크 입니다.'}, 
            {item_no: 7, K_title: '내가 진짜 생초코 (크레이프)', E_title: 'Real Chocolate', src: '7.png', price: '6,900', desc:'생초코 크림의 진한 풍미를 느낄 수 있는 크레이프 케이크 입니다.'}, 
            {item_no: 8, K_title: '티라미수 크레이프 홀케익', E_title: 'Tiramisu Crepe Hole Cake', src: '8.png', price: '48,000', desc:'부드러운 크림치즈 사이에 진한 커피와 초콜릿의 풍미가 더해진 크레이프 홀 케이크 입니다.'},
            {item_no: 9, K_title: '완전 부드러운 얼그레이 무화과 케익', E_title: 'Earl Gray Figs Cake', src: '9.png', price: '35,000', desc:'부드러운 얼그레이 크림 사이에 달콤한 무화가를 더해 고급스러운 풍미를 느낄수 있는 홀 케이크 입니다.'}, 
            {item_no: 10, K_title: '순수 우유 샹들리에 케익', E_title: 'Pure milk chandelier cake', src: '10.png', price: '0', desc:'케익+ 샹들리에 초+케이스'}, 
            {item_no: 11, K_title: '밀크 베리 샹들리에 케익', E_title: 'Milk Berry Chandelier Cake', src: '11.png', price: '0', desc:'케익+샹들리에 초+케이스'}, 
            {item_no: 12, K_title: '레드벨벳 샹들리에', E_title: 'Redvelvet chandelier Cake', src: '12.png', price: '0', desc:'미국의 대표적인 케이크로, 붉은 초코 시트와 달콤한 크림치즈 가 샌딩된 매력적인 풍미를 지닌 레드벨벳 홀케익입니다.'}, 
            {item_no: 13, K_title: '케롯 샹들리에', E_title: 'Carrot chandelier Cake', src: '13.png', price: '0', desc:'촉촉하고 부드러운 시트에 견과류와 당근을 더해 식감을 살리고 달콤한 크림치즈를 샌딩한 프리미엄 당근 홀케익입니다.'},
            {item_no: 14, K_title: '브라우니 아이스크림', E_title: 'Brownie Ice Cream', src: '14.png', price: '5,900', desc:'달콤한 아이스크림과 진한 초콜릿 브라우니의 환상적인 조화에 아몬드를 더해 식감까지 매력적인 브라우니 아이스크림입니다.'}, 
            {item_no: 15, K_title: '녹차 프로마쥬 케익', E_title: 'Green Tea Fromage', src: '15.png', price: '5,900', desc:'진한 크림치즈 베이스와 마스카포네 치즈무스, 그리고 녹차가 어울어져 두가지 치즈 맛과 녹차의 풍미를 동시에 느낄 수 있는 녹차 프로마쥬입니다. 부드럽고 진한 풍미가 환상적이며, 일본 훗카이도 최고의 인기 디저트입니다.'}, 
            {item_no: 16, K_title: '프렌치 블루베리 치즈케익', E_title: 'Real Soft Blueberry Cheesecake', src: '16.png', price: '6,300', desc:'진한 농도의 치즈케익과 블루베리의 상큼함의 조화가 인상적인 블루베리 치즈케익입니다. 자칫 느끼할 수 있는 치즈케익에 블루베리의 상큼함이 돋보이는 프리미엄 케이크입니다.'}, 
        ]
        ,
        // parfait
        [ 
            {item_no: 1, K_title: '망고 코코넛 프로마쥬 빙수', E_title: 'mango coconut promage bingsu', src: '1.png', price: '13,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 2, K_title: '브라우니 퐁 초코 빙수', E_title: 'Brownie Pong Chocolate bingsu', src: '2.png', price: '0', desc:'진한 리얼 브라우니와 바삭한 오레오와 다크블로썸, 그리고 죠리퐁이 토핑된 브라우니 퐁 초코 빙수입니다.'}, 
            {item_no: 3, K_title: '치즈 퐁 슈크림 빙수', E_title: 'Cheese Pong Cream puff bingsu', src: '3.png', price: '9,800', desc:'슈크림 치즈크림, 바삭한 오레오와 레인보우크런치, 그리고 죠리퐁이 토핑된 치즈 퐁 빙수입니다.'}, 
            {item_no: 4, K_title: '딸기 치즈 빙수', E_title: 'strawberry cheese bingsu', src: '4.png', price: '9,800', desc:'상큼한 딸기와 부드러운 치즈케익, 그리고 치즈크림이 토핑된 딸기 치즈 빙수입니다.'}, 
            {item_no: 5, K_title: '망고 코코넛 치즈 빙수', E_title: 'Mango Coconut Cheese bingsu', src: '5.png', price: '6,800', desc:'향긋한 망고와 고소한 볶음코코넛, 그리고 치즈크림이 토핑된 망고 코코넛 치즈 빙수입니다.'}, 
            {item_no: 6, K_title: '타로 퐁 버블 빙수', E_title: 'Taro Pong Bubble bingsu', src: '6.png', price: '6,800', desc:'디저트39만의 특제 타로 치즈크림, 쫄깃한 타피오카펄, 그리고 죠리퐁이 토핑된 타로 퐁 버블 빙수입니다.'}, 
            {item_no: 7, K_title: '인절미 팥빙수', E_title: 'Injeolmi red bean bingsu', src: '7.png', price: '5,800', desc:'쫀득한 인절미와 고소한 콩고물, 그리고 달콤한 팥이 토핑된 인절미 팥빙수입니다.'}, 
            {item_no: 8, K_title: '브라우니 퐁 초코 빙수', E_title: 'Brownies Pong Bingsu', src: '8.png', price: '12,800', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 9, K_title: '치즈 퐁 슈크림 빙수', E_title: 'Cheese Pong Cream Bingsu', src: '9.png', price: '12,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 10, K_title: '타로 퐁 버블 빙수', E_title: 'Taro Pong Bubble Bingsu', src: '10.png', price: '0', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 11, K_title: '흑당 퐁 버블 빙수', E_title: 'Black Sugar Pong Bubble Bingsu', src: '11.png', price: '9,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 12, K_title: '파인애플 빙수', E_title: 'Pineapple Ice Flakes', src: '12.png', price: '0', desc:'눈처럼 새하얀 우유얼음의 부드러움에 연유와 팥의 달콤함, 떡의 고소함에 기호에 따라 넣어먹는 3종 토핑소스와 상큼한 파인애플을 커스터마이징할 수 있는 파인애플 빙수 입니다.'}, 
            {item_no: 13, K_title: '망고빙수', E_title: 'Mango Ice Flakes ', src: '13.png', price: '0', desc:'눈처럼 새하얀 우유얼음의 부드러움에 연유와 팥의 달콤함, 떡의 고소함에 기호에 따라 넣어먹는 3종 토핑소스와 달콤한 망고을 커스터마이징할 수 있는 망고 빙수 입니다.'},
            {item_no: 14, K_title: '인절미 프로마쥬 팥빙수', E_title: 'Injeolmi Promage red bean bingsu', src: '14.png', price: '11,800', desc:'쫀득한 인절미와 고소한 콩고물, 그리고 달콤한 팥이 더위를 날려주는 인절미 팥빙수입니다.'},
        ]
        ,
        //macaron
        [
            {item_no: 1, K_title: '오레오크림치즈 마카롱', E_title: 'Oreo Cream Cheese Macaron', src: '1.png', price: '2,500', desc:'달콤한 오레오와쿠키 진한 크림치즈가 어우러진 오레오크림치즈 마카롱'}, 
            {item_no: 2, K_title: '티라미수 마카롱', E_title: 'Tiramisu Macaron', src: '2.png', price: '2,500', desc:'에스프레소와 마스카포네 크림치즈가 어우러진 티라미수 마카롱'}, 
            {item_no: 3, K_title: '황치즈 마카롱', E_title: 'Cheddarcheese Macaron', src: '3.png', price: '2,500', desc:'체다치즈로 만들어 짭쪼름한 황치즈 마카롱'}, 
            {item_no: 4, K_title: '딥초코가나슈 마카롱', E_title: 'Deep Choco Ganache Macaron', src: '4.png', price: '2,500', desc:'벨기에 초콜릿으로 만든 달콤한 딥초코가나슈 마카롱'}, 
            {item_no: 5, K_title: '딸기 마카롱', E_title: 'Strawberry Macaron', src: '5.png', price: '2,500', desc:'딸기를 갈아넣어 만든 쫀득하고 상큼한 딸기 마카롱'}, 
            {item_no: 6, K_title: '(수제딸기) 크로칸슈 커스타드 오믈렛', E_title: '(Strawberry) croquant chou custard omelet', src: '6.png', price: '1,200', desc:'크로칸슈에서만 맛볼 수 있던 달콤한 커스타드 크림이 오믈렛에 쏘옥! 부드러운 오믈렛빵과 커스타드 크림의 달달한 조화를 맛볼 수 있는 커스타드 오믈렛입니다. 신선하고 상큼한 생딸기도 함께 곁들여 드시면 한층 더 업그레이드 된 맛을 즐길 수 있습니다.'}, 
            {item_no: 7, K_title: '(수제딸기) 크로칸슈 커스타드 오믈렛', E_title: '(Strawberry) croquant chou custard omelet', src: '7.png', price: '1,200', desc:'크로칸슈에서만 맛볼 수 있던 달콤한 커스타드 크림이 오믈렛에 쏘옥! 부드러운 오믈렛빵과 커스타드 크림의 달달한 조화를 맛볼 수 있는 커스타드 오믈렛입니다. 신선하고 상큼한 생딸기도 함께 곁들여 드시면 한층 더 업그레이드 된 맛을 즐길 수 있습니다.'}, 
            {item_no: 8, K_title: '(수제딸기) 초코 오믈렛', E_title: '(Strawberry) Choco omelet', src: '8.png', price: '1,200', desc:'폭신폭신한 초코맛 오믈렛 빵에 달콤쌉싸름한 초코 생크림을 듬뿍 넣어 초코성애자의 취향 저격하는 디저트39만의 프리미엄 수제 디저트 초코 오믈렛입니다.신선하고 상큼한 생딸기도 함께 곁들여 드시면 한층 더 업그레이드 된 맛을 즐길 수 있습니다.'},
            {item_no: 9, K_title: '(수제딸기) 녹차 오믈렛', E_title: '(Strawberry) Green Tea omelet', src: '9.png', price: '1,200', desc:'녹차향이 물씬 나는 오믈렛 빵에 진한 녹차 생크림을 넣어 녹차 그대로의 맛을 제대로 즐길 수 있는 디저트 39만의 프리미엄 수제 디저트 녹차 오믈렛입니다.'}, 
        ]
        ,
        //cookie
        [
            {item_no: 1, K_title: '찐초코 다쿠아즈', E_title: 'Real Choco Dacquoise', src: '1.png', price: '2,900', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 2, K_title: '찐황치즈 다쿠아즈', E_title: 'Real Yellow Cheese Dacquoise', src: '2.png', price: '2,900', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 3, K_title: '찐녹차 다쿠아즈', E_title: 'Real Green Tea Dacquoise', src: '3.png', price: '2,900', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 4, K_title: '앙버터 다쿠아즈', E_title: 'Ang Butter Dacquoise', src: '4.png', price: '2,900', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 5, K_title: '월넛 브라우니', E_title: 'Walnut Browine', src: '5.png', price: '4,900', desc:'미국 대표 디저트 중 하나 두꺼우면서 부드러운 식감을 가지고 있으며 진한 초콜릿 향과 호두를 넣어 고소한 풍미를 느낄 수 있습니다.'}, 
            {item_no: 6, K_title: '링고파이', E_title: 'Ringo Pie ', src: '6.png', price: '4,800', desc:'버터로 구운 고소하고 바삭한 생지에, 달콤하고 부드러운 커스터드 크림과 새콤달콤한 통사과가 듬뿍 들어있는 링고파이입니다. 일본 디저트 1위에 빛나는 화제의 디저트로, 국내에서도 대중적인 사랑을 받고 있는 제품입니다.'}, 
            {item_no: 7, K_title: '더블 초콜릿 쿠키', E_title: 'Double Choco Cookie', src: '7.png', price: '1,500', desc:'초콜릿 속에 또 초콜릿, 화이트와 다크가 만나 이루는 달콤한 케미를 느낄 수 있는 쿠키 입니다.'}, 
            {item_no: 8, K_title: '초코 크런키 소프트 쿠키', E_title: 'Double Choco Cookie', src: '8.png', price: '1,500', desc:'바삭한 쿠키 속 진한 초콜릿이 부드럽게 전해져 진한 달콤함을 느낄 수 있는 쿠키 입니다.'},
            {item_no: 9, K_title: '스윗 화이트 딜라이트 쿠키', E_title: 'Sweet White Delight Cookie', src: '9.png', price: '1,500', desc:'달콤한 화이트초콜릿과 고소하고 향긋한 코코넛을 쿠키 속에 그대로 넣어 바삭하면서도 달콤함까지 맛볼 수 있는 쿠키 입니다.'},
        ]
        ,
        //bread
        [
            {item_no: 1, K_title: '프렌치 갈릭 브레드', E_title: 'French Garlic Bread', src: '1.png', price: '6,300', desc:'겹겹이 결이 살아있는 페스츄리에 달콤한 버터갈릭 소스를 듬뿍 채워 발효빵의 촉촉한 식감과 마늘의 고소한 향이 조화를 이룬 프렌치 갈릭 브레드입니다.'}, 
            {item_no: 2, K_title: '치즈 크루아상', E_title: 'Cheese Croissant', src: '2.png', price: '4,000', desc:'바삭바삭한 크루아상에 고소한 스트링치즈를 넣어 더욱 쫄깃해진 식감과 짭짤한 치즈와의 조화가 일품인 치즈 크루아상입니다.'}, 
            {item_no: 3, K_title: '커스타드 크로칸 슈', E_title: 'Custard Croquant Chou', src: '3.png', price: '4,900', desc:'바삭하고 고소한 견과류가 뿌려진 크로칸에 커스터드 크림을 가득 넣은 크로칸슈 커스터드입니다. 독특하고 이색적인 프리미엄 디저트입니다.'}, 
            {item_no: 4, K_title: '크림 치즈 크로칸 슈', E_title: 'Cream Cheese Croquant Chou', src: '4.png', price: '4,900', desc:'바삭하고 고소한 견과류가 뿌려진 크로칸에 크림치즈를 가득 넣은 크림치즈 크로칸 슈 입니다.'}, 
            {item_no: 5, K_title: '초코 크루아상', E_title: 'Choco Croissant', src: '5.png', price: '4,200', desc:'특수 제작된 양질의 초콜릿과 바삭바삭한 크루아상의 조화가 인상깊은 초코크로입니다. 디저트 강국인 일본에서도 황제의 디저트라고 불리고 있습니다.'}, 
            {item_no: 6, K_title: '찹쌀 크루아상', E_title: 'Sticky Rice Croissant ', src: '6.png', price: '4,200', desc:'찹쌀의 쫄깃함과 크루아상의 바삭이 어우려진 이색궁합 디저트입니다. 아몬드 토핑으로 고소함까지 더해져 남녀노소 누구나 맛있게 즐길 수 있는 프리미엄 디저트입니다.'}, 
            {item_no: 7, K_title: '소시지 크루아상', E_title: 'Sausage Croissant', src: '7.png', price: '4,000', desc:'정통 프렌치 스타일의 바삭한 크루아상에 탱글탱글한 소시지가 돌돌 말린 수제 소시지 크루아상입니다. 소시지의 쫄깃한 식감과 마늘의 진한 풍미를 한 번에 즐겨보세요. 간단한 식사대용으로도 OK!'}, 
            {item_no: 8, K_title: '프랜치 쿠키슈 (순수 우유 크림)', E_title: 'French Cookie Chou - Pure Milk Cream', src: '8.png', price: '4,200', desc:'달지않고 담백한 우유크림이 가득 들어있는 쿠키슈입니다. 부드러운 우유크림과 바삭한 쿠키슈의 조화가 인상적인 프리미엄 디저트입니다.'},
            {item_no: 9, K_title: '프랜치 쿠키슈 (완전 커스터드)', E_title: 'French Cookie Chou - Real Custard', src: '9.png', price: '4,200', desc:'달콤한 커스터드크림이 가득 들어있는 쿠키슈입니다. 부드러운 커스터드크림과 바삭한 쿠키슈의 조화가 인상적인 프리미엄 디저트입니다.'},
            {item_no: 10, K_title: '프랜치 쿠키슈 (밀크 크림치즈)', E_title: 'French Cookie Chou - Milk Cream Cheese', src: '10.png', price: '4,200', desc:'진한 치즈크림이 가득 들어있는 쿠키슈입니다. 풍미가 깊은 호주산 크림치즈와 바삭한 쿠키슈의 조화가 인상적인 프리미엄 디저트입니다.'}, 
            {item_no: 11, K_title: '옥수수 중독빵', E_title: 'Corn Cream Bread', src: '11.png', price: '2,900', desc:'옥수수와 옥수수크림의 치명적인 조화! 입안에서 톡톡 터지는 옥수수 알갱이의 고소한 식감과 푹신한 빵 시트의 달콤함으로, 옥수수의 치명적이고 중독적인 맛에 빠져보세요.'},
        ]
        ,
        //tokyo
        [
            {item_no: 1, K_title: '오리지널 도쿄롤 S', E_title: 'Original Tokyo Roll S', src: '1.png', price: '4,900', desc:'촉촉하고 부드러운 시트에 달지 않고 담백한 우유 크림을 넣어 고급스러움을 자랑하는 오리지널 도쿄롤입니다. 항상 사랑받고 있는 스테디셀러 프리미엄 디저트입니다.'}, 
            {item_no: 2, K_title: '녹차 도쿄롤 S', E_title: 'Green Tea Tokyo Roll S', src: '2.png', price: '4,900', desc:'일본식 맛차를 함유한 시트와 우유크림의 조화가 이색적인 녹차 도쿄롤입니다. 녹차 특유의 씁쓸한 첫 느낌과 먹을수록 깊어지는 맛은 결코 질리지 않는 트렌디 셀러 디저트입니다.'}, 
            {item_no: 3, K_title: '화이트 초코 도쿄롤 S', E_title: 'White Choco Tokyo Roll S', src: '3.png', price: '4,900', desc:'카카오가 함유된 시트와 우유크림의 조화가 인상적인 화이트 초코 도쿄롤입니다. 단맛을 좋아하는 누구나 사랑할 수 밖에 없는 프리미엄 디저트입니다'}, 
            {item_no: 4, K_title: '망고 도쿄롤 S', E_title: 'Mango Tokyo Roll S', src: '4.png', price: '5,200', desc:'열대과일 망고를 넣어 향긋한 풍미를 자랑하는 망고 도쿄롤입니다. 망고 특유의 상큼함을 맛볼 수 있는 프리미엄 디저트입니다.'}, 
            {item_no: 5, K_title: '자색 고구마 도쿄롤 S', E_title: 'Purple Sweet Potato Tokyo Roll S', src: '5.png', price: '5,200', desc:'촉촉한 시트 속을 가득 채운 고구마 우유크림은 담백하고 고급스러운 단맛과 함께 최상의 부드러움을 전달합니다. 먹음직스러운 자색빛 시트 속 알알이 박혀있는 리얼 고구마의 달콤한 식감을 지금 바로 느껴보세요.'}, 
            {item_no: 6, K_title: '프리미엄 도쿄 5 롤', E_title: 'Premium Tokyo 5 Roll', src: '6.png', price: '25,100', desc:'DESSERT39에서만 즐길 수 있는 특별한 5가지 맛의 롤케익입니다. 골라먹는 재미를 느낄 수 있는 프리미엄 도쿄 5롤은 기념일 선물용으로도 좋습니다.'}
        ]
    ]

        ,
        // //////    beverage  ////////////////////
        
    [
        //COFFEE
        [
            {item_no: 1, K_title: '흑임자 라떼 Hot', E_title: 'Sesame Latte Hot', src: '1.png', price: '3,800', desc:'불로장수의 상징인 흑임자의 진한 풍미를 즐길 수 있는 따뜻한 라떼입니다.'}, 
            {item_no: 2, K_title: '흑당 퐁 라떼 Hot', E_title: 'Black Sugar Pong Latte Hot', src: '2.png', price: '2,900', desc:'달콤한 흑당과 한 끼 해결 조리퐁까지 한번에 즐길 수 있는 따뜻한 음료입니다.'}, 
            {item_no: 3, K_title: '피스타치오 초코칩 라떼 Hot', E_title: 'Pistachio Choco Chip Latte Hot', src: '3.png', price: '4,800', desc:'고소한 피스타치오의 풍미와 달콤한 초코칩을 함께 즐길 수 따뜻한 음료입니다.'}, 
            {item_no: 4, K_title: '카라멜 인절미 라떼 Hot', E_title: 'Caramel Injeolmi Latte Hot', src: '4.png', price: '3,800', desc:'고소하고 쫀득한 인절미와 카라멜 향이 어우러진 따뜻한 음료'}, 
            {item_no: 5, K_title: '쑥라떼 Hot', E_title: 'Mugwort Latte Hot', src: '5.png', price: '3,800', desc:'건강웹빙의 대표적인 쑥의 진한 풍미를 즐길수 있는 따뜻한 음료'}, 
            {item_no: 6, K_title: '바나나 라떼 Hot', E_title: 'Banana Latte Hot', src: '6.png', price: '2,900', desc:'달콤하고 진한 바나나 음료와 바나나 과자까지 한번에 즐길 수 있는 따뜻한 라떼입니다.'}, 
            {item_no: 7, K_title: '민트 초코칩 라떼 Hot', E_title: 'Mint Choco Chip Latte Hot', src: '7.png', price: '4,800', desc:'민트의 청량함과 진한 초코맛이 어우러진 음료로 민초단을 위한 따뜻한 라떼입니다.'},
            {item_no: 8, K_title: '리얼생초코라떼 Hot', E_title: 'Real Choco Latte Hot', src: '8.png', price: '4,300', desc:'진짜 초코릿을 넣어 진한 풍미와 달콤쌉쌀한 맛이 특징인 따뜻한 음료입니다.'},
            {item_no: 9, K_title: '17곡 오트밀 라떼 Hot', E_title: '17 Grain Oatmeal Latte Hot', src: '9.png', price: '3,800', desc:'남녀노소 누구나에게 사랑받는 든든하고 맛있게 한끼 해결이 가능한 고소한 17곡 오트밀라떼'}, 
            {item_no: 10, K_title: '달고나라떼 JMT', E_title: 'Dalgona latte JMT', src: '10.png', price: '3,800', desc:'우유와 달달한 달고나, 그리고 달고나 토핑까지 함께 즐길 수 있는 따뜻한 달고나 음료 입니다.'}, 
            {item_no: 11, K_title: '달고나 흑당 퐁 라떼', E_title: 'Dalgona Black Sugar Pong Latte', src: '11.png', price: '4,400', desc:'달콤한 흑당 음료와 식감 있는 조리퐁, 그리고 바삭한 달고나 토핑까지 한번에 즐길 수 있는 음료입니다.'}, 
            {item_no: 12, K_title: '달고나 치즈 흑당 퐁 라떼', E_title: 'Dalgona Cheese Black Sugar Pong Latte', src: '12.png', price: '6,800', desc:'디저트39의 특제 치즈 크림에 달콤한 흑당 음료와 식감 있는 조리퐁, 그리고 바삭한 달고나 토핑까지 한번에 대용량으로 즐길 수 있는 음료입니다.'}, 
            {item_no: 13, K_title: '달고나 초코 퐁 라떼', E_title: 'Dalgona choco Pong Latte', src: '13.png', price: '4,400', desc:'진한 초코 음료와 식감 있는 조리퐁, 그리고 바삭한 달고나 토핑까지 한번에 즐길 수 있는 음료입니다.'},
            {item_no: 14, K_title: '달고나 치즈 초코 퐁 라떼', E_title: 'Dalgona Cheese choco Pong Latte', src: '14.png', price: '6,800', desc:'디저트39의 특제 치즈 크림에 진한 초코 음료와 식감있는 조리퐁, 그리고 바삭한 달고나 토핑까지 한번에 대용량으로 즐길 수 있는 음료입니다.'}, 
            {item_no: 15, K_title: '돌체라떼', E_title: 'Dolce Latte', src: '15.png', price: '5,800', desc:'고소한 돌체라떼'}, 
            {item_no: 16, K_title: '바닐라라떼', E_title: 'Vanilla latte', src: '16.png', price: '5,800', desc:'달달한 바닐라라떼'},
            {item_no: 17, K_title: '민트 초코 카페라떼 JMT', E_title: 'Mint chocolate Cafe latte JMT', src: '17.png', price: '6,800', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 18, K_title: '홍차크림 카페라떼 JMT', E_title: 'Tea Cream Cafe latte JMT', src: '18.png', price: '6,800', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 19, K_title: '슈크림 카페라떼 JMT', E_title: 'Custard Cream Cafe Latte JMT', src: '19.png', price: '5,800', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 20, K_title: '밀크티라떼 Hot', E_title: 'Milk Tea Latte Hot', src: '20.png', price: '4,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 21, K_title: '녹차라떼', E_title: 'Green Tea Latte ', src: '21.png', price: '4,100', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 22, K_title: '리얼생초코라떼', E_title: 'Real Choco Latte', src: '22.png', price: '5,800', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 23, K_title: '카페모카', E_title: 'Cafe Mocha', src: '23.png', price: '4,300', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 24, K_title: '카라멜마끼아또떼', E_title: 'Caramel Macchiato', src: '24.png', price: '4,300', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 25, K_title: '아메리카노 Hot', E_title: 'Americano Hot', src: '25.png', price: '3,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 26, K_title: '초코바나나라떼', E_title: 'Choco Banana Latte', src: '26.png', price: '3,900', desc:'달콤하고 진한 바나나 라떼에 부드러운 초콜렛, 바나나 과자까지 한번에 즐길 수 있는 음료'},
            {item_no: 27, K_title: '바나나라떼', E_title: 'Banana Latte', src: '27.png', price: '2,900', desc:'달콤하고 진한 바나나 라떼에 바나나 과자까지 어우러진 대용량 음료'},
            {item_no: 28, K_title: '리얼생초코그린티라떼', E_title: 'Real Choco Green tea Latte', src: '28.png', price: '0', desc:'부드럽고 달콤한 초콜렛과 향긋하고 쌉쌀한 녹차의 조화를 대용량으로 즐길 수 있는 음료'},
            {item_no: 29, K_title: '리얼생초코라떼', E_title: 'Real Choco Latte', src: '29.png', price: '0', desc:'깊고 진한 풍미의 초코라떼에 바삭한 식감의 초콜렛이 어우러진 음료'},
            {item_no: 30, K_title: '흑임자 크림 라떼', E_title: 'Sesame Cream Latte', src: '30.png', price: '5,400', desc:'불로장수의 상징인 흑임자의 진한 풍미를 대용량으로 즐길 수 있는 음료'},
            {item_no: 31, K_title: '쑥 크림 라떼', E_title: 'Mugwort Cream Latte', src: '31.png', price: '5,400', desc:'건강웰빙의 대표적인 쑥의 진한 풍미를 대용량으로 즐길 수 있는 음료'},
            {item_no: 32, K_title: '흑당 퐁 라떼', E_title: 'Black Sugar Pong Latte', src: '32.png', price: '3,400', desc:'달콤한 흑당과 한끼 해결 조리퐁까지 한번에 즐길수 있는 음료'},
            {item_no: 33, K_title: '망고 라떼', E_title: 'Premium Mango Latte', src: '33.png', price: '5,800', desc:'진짜 100% 망고가 들어가 더 향긋하고, 달콤한 망고 라떼를 대용량으로 넉넉하게 즐길 수 있는 음료입니다.'},
            {item_no: 34, K_title: '딸기 라떼', E_title: 'Premium Strawberry Latte', src: '34.png', price: '5,800', desc:'진짜 100% 딸기가 들어가 더 향긋하고, 달콤한 딸기 라떼를 대용량으로 넉넉하게 즐길 수 있는 음료입니다.'},
            {item_no: 35, K_title: '아메리카노', E_title: 'Americano', src: '35.png', price: '2,900', desc:'디저트39의 색깔을 가진 브라질, 콜롬비아, 에티오피아 아라비카 원두가 블랜딩되어 가심비와 가성비를 동시에 즐길 수 있는 스페셜 초대용량 아메리카노를 만나보세요.'},
            {item_no: 36, K_title: '내가 진짜 생초코', E_title: 'Real ChoColat Latte', src: '36.png', price: '7,200', desc:'부드러운 우유와 정통 벨기에 리얼 다크 생초콜렛의 조화로 더욱 진하고 달콤하게 즐길 수 있는 리얼쇼콜라라떼입니다.'},
            {item_no: 37, K_title: '딸기 라떼', E_title: 'Strawberry Latte', src: '37.png', price: '7,300', desc:'직접 만든 딸기청을 듬뿍 넣어 고소하면서도 달콤하게 즐길 수 있는 디저트39만의 프리미엄 수제 딸기 라떼 입니다.'},
            {item_no: 38, K_title: '돌체라떼 Hot', E_title: 'Dolce Latte Hot', src: '38.png', price: '4,300', desc:'에스프레소에 우유와 연유를 넣어 자연스러운 단맛이 풍성한 라떼 메뉴. 커피향을 돋우는 고소한 우유의 맛을 부드럽고 달콤하게 드실 수 있는 돌체라떼 핫 입니다.'},
            {item_no: 39, K_title: '돌체라떼 ICE', E_title: 'Dolce Latte Ice', src: '39.png', price: '4,300', desc:'부드러운 돌체라떼를 시원하게 즐기는 메뉴. 달콤한 연유를 베이스로 우유와 에스프레소가 조화를 이뤄 더욱 풍부한 커피 맛을 즐기실 수 있는 돌체라떼 아이스 입니다.'},
            {item_no: 40, K_title: '밀크티 라떼 Hot', E_title: 'Milk Tea Latte Hot', src: '40.png', price: '3,600', desc:'풍미 깊은 우유에 깊게 우러난 향긋한 로열 홍차가 더해져 부드럽고 진한 맛의 밀크티 라떼입니다.'},
            {item_no: 41, K_title: '망고 코코넛 라떼', E_title: 'Mango Coconut Latte', src: '41.png', price: '5,300', desc:'고소하고 달콤한 열대과일 코코넛에 열대과일의 왕 달콤한 망고를 더한 향긋한 라떼 메뉴를 아이스로 즐길 수 있습니다.'},
            {item_no: 42, K_title: '밀크티 라떼', E_title: 'Milk Tea Latte', src: '42.png', price: '3,500', desc:'풍부한 향의 홍차에 고소하고 부드러운 우유가 더해진 메뉴 입니다. 특유의 홍차향을 우유와 함께 부드럽게 드실 수 있습니다.'},
            {item_no: 43, K_title: '녹차 라떼 Hot', E_title: 'Green Tea Latte Hot', src: '43.png', price: '4,100', desc:'진하고 풍부한 녹차 향과 녹차 특유의 쌉싸름한 맛에 우유를 더해 부드러운 맛이 어우러진 음료 입니다.'},
            {item_no: 44, K_title: '카라멜 마끼아또 Hot', E_title: 'Caramel Macchiat Hot', src: '44.png', price: '4,300', desc:'향 시럽을 첨가한 커피에 우유와 우유 거품을 올리고 거품 위로 카라멜 소스를 드리즐하여 즐기는 달콤한 커피메뉴 입니다. 달콤한 향의 커피와 함께 거품 위의 카라멜 향을 은은하게 즐길수 있습니다.'},
            {item_no: 45, K_title: '카페 모카 Hot', E_title: 'Caffe Mocha Hot', src: '45.png', price: '4,300', desc:'진한 에스프레소와 우유 그리고 다크 초콜릿이 들어간 커피로 묵직하고 진한 초콜릿 향이 일품인 커피 메뉴입니다.'},
            {item_no: 46, K_title: '카페 라떼 Hot', E_title: 'Caffe Latte Hot', src: '46.png', price: '3,900', desc:'라떼는 이탈리아어로 우유를 의미합니다. 진한 에스프레소에 우유를 넣어 고소하고 부드러운 맛을 느낄 수 있는 메뉴입니다.'},
            {item_no: 46, K_title: '카푸치노 Hot', E_title: 'Cappuccino Hot', src: '46.png', price: '3,900', desc:'진한 에스프레소와 우유 그리고 풍성한 우유 거품이 조화를 이루는 메뉴로 우유 거품이 카페 라떼보다 풍성하여 부드러운 식감을 즐길 수 있습니다.'},
            {item_no: 46, K_title: '아메리카노 Hot', E_title: 'Americano Hot', src: '46.png', price: '2,900', desc:'에스프레소에 물을 넣어 연하게 마시는 커피메뉴로 커피 본연의 맛을 부드럽게 즐길 수 있는 대표 메뉴 입니다.'}
        ]
        ,

        //YOGURT SMOOTHIE & FRAPPE
        [
            {item_no: 1, K_title: '자바칩 치즈 프라페', E_title: 'Java Chip Cheese frappe', src: '1.png', price: '6,400', desc:'디저트 39만의 치즈 프로마쥬 크림과 진한 초코향, 오독오독 씹히는 초코칩이 듬뿍 들어있는 자바칩 치즈 프라페입니다.'}, 
            {item_no: 2, K_title: '달고나 프라페 JMT', E_title: 'Dalgona frappe JMT', src: '2.png', price: '4,800', desc:'달달한 달고나가 얼음과 함께 갈려 바삭한 식감이 살아있는 달고나 프라페 입니다.'}, 
            {item_no: 3, K_title: '수박스무디', E_title: 'Real Watermelon Smoothie', src: '3.png', price: '4,900', desc:'수박 아이스크림이 통째로 올라가서 더욱 달콤한 시선강탈 수박 스무디 입니다.'}, 
            {item_no: 4, K_title: '피치 레몬 스무디', E_title: 'peach lemon smoothie', src: '4.png', price: '5,800', desc:'새콤한 레몬과 달콤한 피치 과육 코코넛 젤리를 더해 식감이 살아있는 스무디 입니다.'}, 
            {item_no: 5, K_title: '피치 리치 스무디', E_title: 'Peach Lychee Smoothie', src: '5.png', price: '5,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 6, K_title: '인절미 파르페 스무디', E_title: 'Injeolmi Parfait Smoothie', src: '6.png', price: '5,900', desc:'고소하고 쫀득한 인절미와 씹히는 즐거움을 느낄 수 있는 다양한 재료를 토핑하고 부드러운 카라멜 스무디도 함께 즐길 수 있는 디저트39만의 파르페스무디 메뉴'}, 
            {item_no: 7, K_title: '트로피칼 쥬스무디', E_title: 'Tropical Juice Smoothie', src: '7.png', price: '5,900', desc:'피부미백과 잡티 개선의 효능이 풍부한 생레몬, 오렌지와 피부 탄력과 주름 개선의 효능이 있는 자몽, 망고, 파인애플 다섯 가지 과일을 주스와 스무디로 동시에 대용량으로 즐길 수 있는 상큼한 음료입니다.'},
            {item_no: 8, K_title: '유자 쥬스무디', E_title: 'Citron Plum Juice Smoothie', src: '8.png', price: '5,900', desc:'피부미백, 주름개선의 효능이 풍부한 레몬, 오렌지와 피부 노화 방지, 피부 탄력의 효능이 있는 자몽, 유자, 자두 다섯 가지 과일 주스와 스무디로 동시에 대용량으로 즐길 수 있는 상큼한 음료입니다.'},
            {item_no: 9, K_title: '망고 스무디', E_title: 'Mango Smoothe', src: '9.png', price: '4,800', desc:'망고 특유의 달콤함을 극대화시켜 시원하게 맛볼 수 있는 스무디입니다. 비타민이 풍부하게 함유되어 있어 피부관리에 탁월한 망고로 여름철 피부건강을 챙기면서 즐길 수 있는 음료입니다.'}, 
            {item_no: 10, K_title: '딸기 요거트 스무디', E_title: 'Strawberry Yogurt Smoothe', src: '10.png', price: '5,800', desc:'새콤달콤한 딸기와 요거트의 만남으로 더욱 극대화된 달콤함을 느낄 수 있는 스무디입니다. 딸기와 궁합이 좋은 요거트로 칼슘을 보충할 수 있는 효과까지 누릴 수 있는 음료입니다.'}, 
            {item_no: 11, K_title: '딸기 스무디', E_title: 'Strawberry Smoothe', src: '11.png', price: '4,800', desc:'새콤달콤한 딸기의 과육을 시원하게 즐길 수 있는 스무디입니다. 비타민C가 풍부하고 항산화작용이 뛰어난 딸기로 여름철 건강을 챙기며 즐길 수 있습니다.'}, 
            {item_no: 12, K_title: '딸기 요거트 라떼', E_title: 'Strawberry Yogurt Latte', src: '12.png', price: '5,300', desc:'상큼한 요거트와 새콤달콤한 딸기의 절묘한 조화! 통째로 갈아 넣은 생딸기를 상큼한 요거트와 함께 부드럽게 즐기실 수 있는 메뉴 입니다.'}, 
            {item_no: 13, K_title: '청포도 스무디', E_title: 'Greengrape Smoothie', src: '13.png', price: '4,800', desc:'구연산과 유기산이 풍부하여 피로 회복에 좋은 새콤달콤한 청포도를 얼음과 함께 갈아 만든 시원한 스무디 입니다.'},
            {item_no: 14, K_title: '자두 스무디', E_title: 'Plum Smoothie', src: '14.png', price: '3,900', desc:'상큼하고 시원하게 즐기는 자두 스무디 입니다. 비타민C가 풍부하여 감기예방에 탁월한 자두를 시원한 스무디로 즐기실 수 있습니다.'}, 
            {item_no: 15, K_title: '망고 요거트 스무디', E_title: 'Mango Yogurt Smoothie', src: '15.png', price: '5,800', desc:'달콤한 망고가 들어간 유산균이 풍부한 요거트 음료입니다. 망고의 진한 달콤함과 요거트의 상큼함이 조화를 이루어 여성들에게 인기가 많은 메뉴입니다.'}, 
            {item_no: 16, K_title: '플레인 요거트 스무디', E_title: 'Plain Yogurt Smoothie', src: '16.png', price: '5,800', desc:'여성들의 피부미용에 탁월한 효능이 있는 웰빙형 유산균 음료로 사랑 받는 메뉴입니다. 상큼하고 달콤한 요거트 를 시원하게 스무디로 즐길 수 있습니다.'}
        ]
        ,

        //TEA & DECAFFEINATED
        [
            {item_no: 1, K_title: '뱅쇼 Hot', E_title: 'Vinchaud Hot', src: '1.png', price: '4,800', desc:'묵직한 와인의 풍미, 상큼한 과일, 그리고 시나몬의 향미가 어우러진 디저트39의 무알콜 뱅쇼입니다.'}, 
            {item_no: 2, K_title: '뱅쇼 블랙티 Hot', E_title: 'Vinchaud Black Tea Hot', src: '2.png', price: '5,800', desc:'향긋한 실론 블랙티와 묵직한 와인의 풍미, 그리고 상큼한 과일과 시나몬의 향미가 어우러진 무알콜 뱅쇼 블랙티 입니다.'}, 
            {item_no: 3, K_title: '아이스 뱅쇼 블랙티', E_title: 'Ice Vinchaud Black Tea', src: '3.png', price: '5,800', desc:'향긋한 실론 블랙티와 묵직한 와인의 풍미, 그리고 상큼한 과일과 시나몬의 향미가 어우러진 무알콜 아이스 대용량 뱅쇼 블랙티 입니다.'}, 
            {item_no: 4, K_title: '히비스커스 유자 뱅쇼 Hot', E_title: 'Hibiscus Citron Vinchaud Hot', src: '4.png', price: '6,300', desc:'새콤한 히비스커스와 묵직한 와인의 풍미, 그리고 상큼한 과일과 유자, 시나몬의 향미가 어우러진 히비스커스 유자 뱅쇼 입니다.'}, 
            {item_no: 5, K_title: '아이스 히비스커스 유자 뱅쇼', E_title: 'Ice Hibiscus Citron Vinchaud', src: '5.png', price: '6,300', desc:'새콤한 히비스커스와 묵직한 와인의 풍미, 그리고 상큼한 과일과 유자, 시나몬의 향미가 어우러진 아이스 대용량 히비스커스 유자 뱅쇼 입니다.'}, 
            {item_no: 6, K_title: '생수박 치즈', E_title: 'Real Watermelon juice', src: '6.png', price: '5,400', desc:'시원하고 당도 높은 수박과 치즈토핑이 아낌없이 들어간 생수박 주스 입니다.'},
            {item_no: 7, K_title: '생수박주스', E_title: 'Real Watermelon juice', src: '7.png', price: '5,400', desc:'시원하고 당도 높은 수박이 아낌없이 들어간 생수박 주스 입니다.'}, 
            {item_no: 8, K_title: '프리미엄 치즈 로얄 밀크티', E_title: 'Premium Cheese Royal Milk Tea', src: '8.png', price: '4,800', desc:'디저트39의 특제 치즈 크림폼에 홍차의 향긋함과 우유의 고소함이 더해져 진한 풍미와 부드러움을 대용량으로 넉넉히 즐길 수 있는 음료입니다.'},
            {item_no: 9, K_title: '리치 캐모마일 딥슬립', E_title: 'Lychee chamomile deep sleep', src: '9.png', price: '5,800', desc:'열대 과일 리치와 달콤한 청포도 그리고 편한 밤을 선물 해줄 캐모마일이 가미된 티 블렌딩 음료 입니다.'},
            {item_no: 10, K_title: '생레몬 오렌지 블랙티', E_title: 'Real Lemon Orange Black Tea', src: '10.png', price: '5,800', desc:'상큼한 생레몬의 향과 오렌지가 톡톡 씹히는 아쌈 블랙 티 블렌딩 음료 입니다.'}, 
            {item_no: 11, K_title: '생레몬 딸기 블랙티', E_title: 'Real Lemon Strawberry Black Tea', src: '11.png', price: '5,800', desc:'상큼한 생레몬의 향과 딸기의 과육이 살아있는 아쌈 블랙 티 블렌딩 음료 입니다.'}, 
            {item_no: 12, K_title: '생레몬 블랙티 에이드', E_title: 'Real Lemon Black Tea Ade', src: '12.png', price: '5,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 13, K_title: '타로 블루베리 라떼 JMT', E_title: 'Taro Blueberry Latte JMT', src: '13.png', price: '4,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 14, K_title: '블루베리 JMT', E_title: 'Blueberry JMT', src: '14.png', price: '4,400', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 15, K_title: '슈크림 치즈 JMT', E_title: 'Custard Cream Chesse JMT', src: '15.png', price: '5,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 16, K_title: '타로 JMT', E_title: 'Tarot JMT', src: '16.png', price: '5,800', desc:'디저트39 만의 특제 타로밀크베이스로 더욱 깊어진 타로밀크티를 대용량으로 즐길 수 있는 음료입니다.'}, 
            {item_no: 17, K_title: '피치 블랙퍼스트티', E_title: 'Peach Breakfast Tea', src: '17.png', price: '5,800', desc:'상큼한 복숭아 향이 가미되고 주름개선에 좋고 정신을 맑게 해주는 블랙퍼스트 홍차를 우려내 더욱 깊어진 음료에 코코넛 젤리가 포함된 대용량 음료입니다.'},
            {item_no: 18, K_title: '캐모마일 피치오렌지티', E_title: 'Chamomile Peach Orange Tea', src: '18.png', price: '5,800', desc:'달콤한 오렌지와 상큼한 복숭아 향이 가미되고 코코넛젤리가 포함된 음료에 피부 진정 효능을 지닌 캐모마일티를 우려내 더욱 고급스러워진 아이스티 음료 입니다.'},
            {item_no: 19, K_title: '프리미엄 버블 로얄밀크티', E_title: 'Premium Bubble Royal Milk Tea', src: '19.png', price: '5,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 20, K_title: '버블 흑당 밀크티', E_title: 'Bubble Black Sugar Milk Tea', src: '20.png', price: '4,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 21, K_title: '흑당 밀크티', E_title: 'Black Sugar Milk Tea', src: '21.png', price: '4,500', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 22, K_title: '허니유자블랙티 Hot', E_title: 'Honey Citron Black Tea Hot ', src: '22.png', price: '4,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 23, K_title: '허니자몽블랙티 Hot', E_title: 'Honey Grapefruit Black Te Hot', src: '23.png', price: '4,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 24, K_title: '허니레몬블랙티 Hot', E_title: 'Honey Lemon Black Tea Hot', src: '24.png', price: '3,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 25, K_title: '뱅쇼 Hot', E_title: 'Vinchaud Hot', src: '25.png', price: '4,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 26, K_title: '피치 오렌지 아이스티', E_title: 'Peach Orange Ice Tea', src: '26.png', price: '3,800', desc:'달콤한 복숭아 아이스티와 상큼한 오렌지가 블랜딩된 음료'},
            {item_no: 27, K_title: '캐미 망고 비타티', E_title: 'Chemistry Mango Vitati', src: '27.png', price: '4,800', desc:'피부미백, 주름 개선의 효능과 면역력 증가의 효능이 있는 비타민(1일 권장량)이 포함. 피부 개선, 노폐물 배출에 효능이 있는 망고와 피부 진정 효능을 지닌 캐모마일이 함유되어 맛과 건강을 사로 잡을 수 있는 대용량 음료입니다.'},
            {item_no: 28, K_title: '캐미 레몬 비타티', E_title: 'Chemistry Lemon Vitati', src: '28.png', price: '4,800', desc:'피부미백, 주름 개선의 효능과 면역력 증가의 효능이 있는 비타민(1일 권장량)이 포함. 피부 개선 및 피로 회복 효능이 있는 레몬와 피부 진정의 효능을 지닌 캐모마일이 함유되어 맛과 건강을 사로 잡을 수 있는 대용량 음료입니다.'},
            {item_no: 29, K_title: '캐미 청포도 비타티', E_title: 'Chemistry Greengrape Vitati', src: '29.png', price: '4,800', desc:'피부미백, 주름 개선의 효능과 면역력 증가의 효능이 있는 비타민(1일 권장량)이 포함. 피부 탄력 효능이 있는 청포도와 피부 진정 효능을 지닌 캐모마일이 함유되어 맛과 건강을 사로 잡을 수 있는 대용량 음료입니다.'},
            {item_no: 30, K_title: '흑당밀크티(잔)', E_title: 'Black Sugar Milk Tea', src: '30.png', price: '3,900', desc:'달콤하면서 감칠맛 나는 흑당과 부드러운 밀크티로 만든 진한 흑당밀크티를 쫀득한 타피오카 펄과 함께 즐기는 음료입니다.'},
            {item_no: 31, K_title: '흑당 로얄 밀크티(병)', E_title: 'Black Sugar Milk Tea', src: '31.png', price: '6,900', desc:'수백년 전통을 이어 옛 방식 그대로 만들어진 오키나와식 자연식품, 사탕수수를 그대로 졸인 흑당과 찹쌀이 들어간 디저트39만의 모찌펄을 사용한 건강하고 담백한 흑당 밀크티입니다.'},
            {item_no: 32, K_title: '로얄 밀크티', E_title: 'Royal Milk-Tea ', src: '32.png', price: '6,900', desc:'직접 우려 낸 스리랑카산 홍차에 신선한 우유를 더해 더욱 향긋하고 부드러운 디저트39만의 프리미엄 로얄 밀크티 입니다.'},
            {item_no: 33, K_title: '자몽티 Hot', E_title: 'Grapefruit Tea Hot', src: '33.png', price: '3,900', desc:'새콤달콤한 자몽에 꿀이 더해져 달콤하고 따듯하게 즐길 수 있는 허니자몽티입니다.'},
            {item_no: 34, K_title: '흑당 보리 밀크티', E_title: 'Black Sugar Barley Milk Tea', src: '34.png', price: '3,900', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 35, K_title: '타로 보리 JMT', E_title: 'Taro Barley JMT', src: '35.png', price: '4,500', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 36, K_title: '민트 초코칩 보리 밀크티', E_title: 'Mint Choco Chip Barley Milk Tea', src: '36.png', price: '4,500', desc:'상품에 대한 설명이 표시됩니다.'},
            {item_no: 37, K_title: '아이스티 복숭아', E_title: 'Peach Iced Tea', src: '37.png', price: '2,800', desc:'상큼한 복숭아 향이 가미된 홍차를 시원한 아이스티로 즐기는 메뉴 입니다.'}
        ]
        ,
        //ade
        [
            {item_no: 1, K_title: '레드망고 티에이드 (0칼로리 탄산수 사용)', E_title: 'Red Mango Tea Ade', src: '1.png', price: '5,800', desc:'피부미백, 주름개선과 다이어트, 노폐물 배출의 효능이 있는 망고와 피부 미용, 다이어트 효능을 지닌 히비스커스티가 어울어진 대용량 티에이드 입니다'}, 
            {item_no: 2, K_title: '청포도 탄산수', E_title: 'Green Grape Sparkling Water', src: '2.png', price: '4,800', desc:'청포도의 상큼함과 더불어 청량감을 즐길 수 있는 음료로 코코넛 과육과 망고 버블을 올려 재미있는 식감까지 즐길 수 있습니다.'}, 
            {item_no: 3, K_title: '자두 탄산수', E_title: 'Plum Sparkling Water', src: '3.png', price: '3,900', desc:'상상큼하고 시원하게 즐기는 자두 탄산수 입니다. 비타민C가 풍부하여 감기예방에 탁월한 자두에 코코넛과육을 넣어 더욱 상큼하고 재미있는 식감으로 즐기실 수 있습니다.'}, 
            {item_no: 4, K_title: '자몽 탄산수', E_title: 'Grapefruit Sparkling Water', src: '4.png', price: '4,800', desc:'상큼한 자몽과 무칼로리탄산수가 들어간 청량음료입니다. 자몽의 풍부한 팩틴은 혈관질환을 개선해주며 콜레스테롤을 낮춰주는 효과가 있습니다.'}, 
            {item_no: 5, K_title: '오렌지 탄산수', E_title: 'Orange Sparkling Water', src: '5.png', price: '4,800', desc:'새콤 달콤한 오렌지와 무칼로리 탄산수가 들어간 청량음료입니다. 비타민C가 풍부한 오렌지는 항산화작용이 뛰어나며 혈압강하에도 도움을 줍니다.'}, 
            {item_no: 6, K_title: '레몬티 탄산수', E_title: 'Lemon Sparkling Water', src: '6.png', price: '4,800', desc:'직접 제조한 레몬티를 무칼로리탄산수와 함께 즐기는 티에이드메뉴입니다. 레몬의 풍부한 비타민C와 구연산은 감기예방 및 피로회복에 도움을 줍니다.'}, 
            {item_no: 7, K_title: '샹그리아', E_title: 'Sangria', src: '7.png', price: '5,800', desc:'스페인 정통음료 샹그리아. 묵직한 와인향과 상큼한 과일향이 어우러진 탄산음료 샹그리아를 디저트39에서 무알콜로 부담없이 즐기실 수 있습니다.'}
        ]
        ,
        //CHEESE PROMAGE
        [
            {item_no: 1, K_title: '치즈 프로마쥬 망고라떼 / 대용량', E_title: 'Cheese Promage Mango Latte', src: '1.png', price: '6,800', desc:'디저트39의 특제 치즈 크림폼과 진짜 100% 망고 첨가로 더 향긋하고, 달콤함과 진한 치즈 풍미를 대용량으로 즐길 수 있는 음료'}, 
            {item_no: 2, K_title: '피스타치오 레인보우 크런치 스페셜', E_title: ' Pistachio rainbow Crunch Special', src: '2.png', price: '4,800', desc:'상품에 대한 설명이 표시됩니다.'}, 
            {item_no: 3, K_title: '치즈 프로마쥬 초코 퐁 라떼', E_title: 'Cheese fromage Choco Pong Latte', src: '3.png', price: '5,800', desc:'디저트39의 특제 치즈 크림폼과 찐한 초코의매력과 한끼 해결 조리퐁까지 한번에 대용량으로 즐길 수 있는 음료'}, 
            {item_no: 4, K_title: '치즈 프로마쥬 바닐라라떼', E_title: 'Cheese fromage Vanilla Latte', src: '4.png', price: '6,800', desc:'디저트39의 특제 치즈 크림폼과 은은한 바닐라 매력과 풍미를 대용량으로 넉넉히 즐길 수 있는 음료'}, 
            {item_no: 5, K_title: '치즈 프로마쥬 카라멜마끼아또', E_title: 'Cheese fromage Caramel Macchiato', src: '5.png', price: '6,800', desc:'디저트39의 특제 치즈 크림폼과 달콤한 카라멜 시럽이 은은함이 매력적인 대용량 마끼아또 음료.'}, 
            {item_no: 6, K_title: '치즈 프로마쥬 카라멜 인절미 라떼', E_title: 'Cheese fromage Caramel Injeolmi Latte', src: '6.png', price: '6,300', desc:'디저트39의 특제 치즈 크림폼과 부드러운 카라멜의 달콤함과 고소한 인절미로 다채로운 맛을 한번에 대용량으로 즐길 수 있는 음료'}, 
            {item_no: 7, K_title: '치즈 프로마쥬 녹차 라떼', E_title: 'Cheese fromage Green Tea Latte', src: '7.png', price: '5,900', desc:'디저트39의 특제 치즈 크림폼과 긴장 완화에 탁월한 녹차의 효능이 더해져 단,짠의 조화와 쫀득한 펄의 식감이 특징을 대용량으로 즐길 수 있는 음료'},
            {item_no: 8, K_title: '치즈 프로마쥬 딸기 라떼', E_title: 'Cheese fromage Strawberry Latte', src: '8.png', price: '6,800', desc:'디저트39의 특제 치즈 크림폼과 진짜 100% 딸기 첨가로 더 향긋하고, 달콤함과 진한 치즈 풍미를 대용량으로 즐길 수 있는 음료'}
        ]
        

    ]
];
 
// console.log(ITEM_LIST[0][1][4].K_title)

// menu_array - 이미지의 경로, append 할때 넣어줄 요소 잡을때 사용
const cate_title = ['dessert', 'beverage'];
const sec_title = [
    // dessert
    ['cake', 'parfait', 'macaron', 'cookie', 'bread', 'tokyo']
    ,
    // beverage
    ['coffee', 'frappe', 'tea', 'ade', 'promage']
]

// const dessert_array = ['cake', 'parfait', 'macaron', 'cookie', 'bread', 'tokyo'];
// const title_array = ['BEST ITEM', 'NEW 5%', 'OUTER', 'TOP', 'BOTTOM', 'ACC', 'BAG&SHOES'];



const img_addr = "img/dessert/";



// url에서 정보 뽑기 - cate_no, item_no
function get_url_info(key) {
    let url = location.href; // 330.product.html?cate_no=0&item_no=1 

    url = url.split('?') // [ 330.product.html , cate_no=0&item_no=1 ] 
    
    if(url.length > 1) {
        url = url[1] // cate_no=0&item_no=1
        url = url.split("&") // [cate_no=0  , item_no=1]

        for(let i=0; i< url.length; i++) {
            let tmp_url = url[i].split("=") // [cate_no , 0]

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