const ITEM_LIST = [
    [
        {item_no: 1, covered_src: '1cover.jpg', src: '1.jpg', title: 'U8775UMP', o_price: '' , s_price: 50000, desc: ''}, 
        {item_no: 2,covered_src: '2cover.jpg', src: '2.jpg', title: 'U446A8QS ', o_price:'', s_price: 70000, desc: ''}, 
        {item_no: 3, covered_src: '3cover.jpg',src: '3.jpg', title: 'U4487UAW', o_price:'', s_price: 20000, desc: ''}, 
        {item_no: 4, covered_src: '4cover.jpg',src: '4.jpg', title: 'U1235USS', o_price:'', s_price: 40000, desc: ''}, 
        {item_no: 5, covered_src: '5cover.jpg',src: '5.jpg', title: 'U18QQ4D', o_price:'', s_price: 50000, desc: ''}, 
        {item_no:6, covered_src: '6cover.jpg',src: '6.jpg', title:'ASG84GG5', o_price:'', s_price:50000, desc:''},
        {item_no:7,covered_src: '7cover.jpg', src: '7.jpg', title:'U84842QQt', o_price:'', s_price:50000, desc:''},
        {item_no:8, covered_src: '8cover.jpg',src: '8.jpg', title:'U24U9UQQ', o_price:'', s_price:50000, desc:''},
        
        {item_no:7,covered_src: '7cover.jpg', src: '7.jpg', title:'U446A8QS', o_price:'', s_price:50000, desc:''},
        {item_no:4,covered_src: '4cover.jpg', src: '4.jpg', title:'U8775UMP', o_price:'', s_price:50000, desc:''},
        {item_no:3,covered_src: '3cover.jpg', src: '3.jpg', title:'U4487UAW ', o_price:'', s_price:50000, desc:''},
        {item_no:8,covered_src: '8cover.jpg', src: '8.jpg', title:'U24U9UQQ ', o_price:'', s_price:50000, desc:''},
        {item_no:1,covered_src: '1cover.jpg', src: '1.jpg', title:'U1235USS ', o_price:'', s_price:50000, desc:''},
        {item_no:6,covered_src: '6cover.jpg', src: '6.jpg', title:'ASG84GG5 ', o_price:'', s_price:50000, desc:''},
        {item_no:2,covered_src: '2cover.jpg', src: '2.jpg', title:'U84842QQt ', o_price:'', s_price:50000, desc:''},
        {item_no:5,covered_src: '5cover.jpg', src: '5.jpg', title:'U18QQ4D ', o_price:'', s_price:50000, desc:''},
        
        
    ]
    ,
    [ 
        {item_no:1,  src: '1.jpg', title:'U8775UMP', o_price:'', s_price:50000, desc:''},
        {item_no:2,  src: '2.jpg', title:'U446A8QS', o_price:'', s_price:50000, desc:''},
        {item_no:3,  src: '3.jpg', title:'U4487UAW', o_price:'', s_price:50000, desc:''},
        {item_no:4,  src: '4.jpg', title:'U4487UAW', o_price:'', s_price:50000, desc:''},
        {item_no:5,  src: '5.jpg', title:'U1235USS', o_price:'', s_price:50000, desc:''},
        {item_no:6,  src: '6.jpg', title:'U18QQ4D', o_price:'', s_price:50000, desc:''},
        {item_no:7,  src: '7.jpg', title:'ASG84GG5', o_price:'', s_price:50000, desc:''},
        {item_no:8,  src: '8.jpg', title:'U84842QQt', o_price:'', s_price:50000, desc:''},
        // {item_no:9,  src: '9.jpg', title:'U24U9UQQ', o_price:'', s_price:50000, desc:''},
        // {item_no:10,  src: '10.jpg', title:'U4487UAW', o_price:'', s_price:50000, desc:''},
        
        
         
    ],
    
    [
        {item_no:1, covered_src: '8cover.jpg', src: '8.jpg', title:'U446A8QS', o_price:'', s_price:50000, desc:''},
        {item_no:2, covered_src: '2cover.jpg', src: '2.jpg', title:'U446A8QS', o_price:'', s_price:50000, desc:''},
        {item_no:3, covered_src: '3cover.jpg', src: '3.jpg', title:'U4487UAW', o_price:'', s_price:50000, desc:''},
        {item_no:4, covered_src: '4cover.jpg', src: '4.jpg', title:'U1235USS', o_price:'', s_price:50000, desc:''},
        {item_no:5, covered_src: '5cover.jpg', src: '5.jpg', title:'U18QQ4D', o_price:'', s_price:50000, desc:''},
        {item_no:6, covered_src: '6cover.jpg', src: '6.jpg', title:'ASG84GG5', o_price:'', s_price:50000, desc:''},
        {item_no:7, covered_src: '7cover.jpg', src: '7.jpg', title:'U84842QQt', o_price:'', s_price:50000, desc:''},
        {item_no:8, covered_src: '8cover.jpg', src: '8.jpg', title:'U24U9UQQ', o_price:'', s_price:50000, desc:''},
        
        {item_no:9, covered_src: '4cover.jpg', src: '4.jpg', title:'U4487UAW', o_price:'', s_price:50000, desc:''},
        {item_no:10, covered_src: '5cover.jpg', src: '5.jpg', title:'U1235USS', o_price:'', s_price:50000, desc:''},
        {item_no:11, covered_src: '6cover.jpg', src: '6.jpg', title:'ASG84GG5', o_price:'', s_price:50000, desc:''},
        {item_no:12, covered_src: '7cover.jpg', src: '7.jpg', title:'U24U9UQQ', o_price:'', s_price:50000, desc:''},
        
    ],
    [],
    [],
    [],
    []
]
const EL_ARR = ['men', 'women','kids', 'top','bottom','acc','bag'];
const PAGENAME_ARR = ['NBMen', 'Women', 'Kids', 'TOP', 'BOTTOM', 'ACC', 'BAG&SHOES']
    

function load_item (cate, qty){
    let curr_count = $(`#${EL_ARR[cate]} .item_box > li.item`).length;
    let last_no = curr_count+qty;
    
    let limitNo = ITEM_LIST[cate].length; 
    if(last_no > limitNo) {
        last_no = limitNo;
    }

    for(let i=curr_count; i<last_no; i++) {
        let tmp = ITEM_LIST[cate][i];  
 
        
        let cover = "";
        if(tmp.covered_src != undefined) {
            cover +=` <img src="./newbalance/items/${EL_ARR[cate]}/${tmp.covered_src}" alt="" class="covered_img"> `
        }
        

        let tmp_list = `
                <li class="item pos_init1">
                    <div class="item_img">
                        <a href="3.newbalance.html?cateNo=${cate}&itemNo=${ITEM_LIST[cate][i].item_no}">
                            <img src="./newbalance/items/${EL_ARR[cate]}/${tmp.src}" alt=""> 
                            
                        ${cover}
 
                         </a>
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${tmp.title}</div>
                        <div class="o_price">${tmp.o_price}</div>
                        <div class="s_price">${tmp.s_price}원</div>
                        <div class="item_desc">${tmp.desc}</div>
                    </div>
                </li>
            `
        
        $(`#${EL_ARR[cate]} .item_box`).append(tmp_list)
    }
}

// url에서 내가 필요한 정보의 값을 얻어오기
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