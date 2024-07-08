const ITEM_LIST = [
    [
        {item_no: 1, src: '0.png', section:'NEW', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'말차 블랙 츄이스티', engname: 'Matcha Black Chewisty', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'}, 
        {item_no: 2, src: '1.png', section:'NEW', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'말차 클로버 필드', engname: 'Matcha Clover Filled', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'}, 
    ]
    ,
    [ 
        {item_no:1, src: '0.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'페이머스 글레이즈드', engname: 'Famous Glazed', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:2, src: '1.jpg', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'스트로베리 필드', engname: 'Strawberry Filled', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:3, src: '2.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'바바리안 필드', engname: 'Bavarian Filled', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:4, src: '3.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'보스톤 크림', engname: 'Boston Kreme', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:5, src: '4.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'올리브 츄이스티', engname: 'Olive Chewisty', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:6, src: '5.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'카푸치노 츄이스티', engname: 'Cappuccino Chewisty', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:7, src: '6.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'카카오 후로스티드', engname: 'Cacao Frosted', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:8, src: '7.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'카카오하니딥', engname: 'Cacao Honey Dip', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:9, src: '8.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'허니후리터', engname: 'Honey Fritter', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:10, src: '9.png', section:'BASIC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'해피먼치킨컵(10개)', engname: 'Munchkin Set(10ea)', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
    ],
    [
        {item_no:1, src: '0.png', section:'BAGELS', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'트러플치즈베이글', engname: 'Truffle Cheese Bagel', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:2, src: '1.png', section:'BAGELS', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'바질 베이글', engname: 'Basil Bagel', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:3, src: '2.png', section:'BAGELS', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'깜빠뉴 베이글', engname: 'Campagne Bagel', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:4, src: '3.png', section:'BAGELS', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'플레인 베이글', engname: 'Plain Bagel', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:5, src: '4.png', section:'BAGELS', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'소시지 인 치즈 베이글', engname: 'Sausage in Cheese Bagel', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
        {item_no:6, src: '5.png', section:'BAGELS', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'블루베리베이글', engname: 'Blueberry Bagel', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
    ],
    [
        {item_no:1, src: '0.png', section:'ETC', infodesc:'다크 카카오 츄이스티에 제주산 말차로 만든 코팅을 입힌 도넛', title:'던킨 초코 머핀', engname: 'HERSHEY choco Muffin', desc: '자세히 보기', amount:'57', kcal:'250', sugars:'13', protein:'2', fat:'6', sodium:'170'},
    ],
]
const EL_ARR = ['new', 'basic','bagel', 'etc'];
const PAGENAME_ARR = ['NEW', 'BASIC', 'BAGELS', 'ETC']
    
function load_item (cate, qty){
    let curr_count = $(`#${EL_ARR[cate]} .item_box > li.item`).length;
    let last_no = curr_count+qty;
    
    let limitNo = ITEM_LIST[cate].length;
    if(last_no > limitNo) {
        last_no = limitNo;
    }

    for(let i=curr_count; i<last_no; i++) {
        let tmp = ITEM_LIST[cate][i];  

        let tmp_list = `
                <li class="item pos_init"><a href="999.HMPF(3)(item).html?cateNo=${cate}&itemNo=${ITEM_LIST[cate][i].item_no}">
                    <div class="item_img">
                        <img class="img_item" src="./img/dunkin/items/${EL_ARR[cate]}/${tmp.src}" alt=""> 
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${tmp.title}</div>
                        <div class="item_desc">${tmp.desc}</div>
                    </div>
                </a></li>
            `
        
        $(`#${EL_ARR[cate]} .item_box`).append(tmp_list)
    }
}

function get_info_from_url(keyword) {
    let url = location.href;
    
    url = url.split("?")
    if(url.length > 1) {

        url = url[1].split("&")

        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=");

            if(tmp_url[0] == keyword) {
                return tmp_url[1].split("#")[0]
            }
        }
    }
    return null;
}

function comma(num) {
    return num.toLocaleString("KO")
}