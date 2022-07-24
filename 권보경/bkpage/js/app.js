import { 
    WaveGroup
} from './wavegroup.js'

class App{
    constructor() {
        // this.wrap = document.getElementsByClassName('.wrap')
        this.canvas = document.createElement('canvas'); 
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.canvas.setAttribute('id','canvas0');

        this.WaveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        //캔버스를 더블사이즈로 지정해서 레티나 디스플레이에서도 잘보이게 하기 위함
        // 레티나 디스프레이는 픽셀수가 4배나 더 많음. 가로 2배, 세로 2배 
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height =this.stageHeight *2;
        this.ctx.scale(2,2);

        this.WaveGroup.resize(this.stageWidth, this.stageHeight);
        
        this.WaveGroup.draw(this.ctx)

    }

    animate(t){
        
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.WaveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));

    }
}


// class Point {
//     constructor(x,y) {
//         this.x =x; 
//         this.y =y;
//         this.fixedY = y;
//         this.speed = 0.1;
//         this.cur =0;
//         this.max = Math.random() * 100 + 150;
//     }

//     update(){
//         this.cur += this.speed;
//         this.y = this.fixedY + (Math.sin(this.cur) * this.max);
//     }
// }

// class Wave {
//     constructor(){

//     }
//     resize(stageWidth, stageHeight) {
//         this.stageWidth = stageWidth;
//         this.stageHeight = stageHeight;

//         this.centerX = stageWidth/2;
//         this.centerY = stageHeight/2;

//         this.init();

//     }

//     init() {
//         this.point = new Point(
//             this.centerX,
//             this.centerY
//         );
//     }

//     draw(ctx){
//         ctx.beginPath();
//         ctx.fillStyle = "#00ff00";

//         ctx.arc(this.point.x, this.point.y, 30, 0, 2*Math.PI); 
//         ctx.fill();

//         this.point.update();
        
        
//     }

// }

window.onload = () => {
    new App();
}