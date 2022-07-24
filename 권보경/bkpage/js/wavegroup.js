import { Wave } from "./wave.js";

export class WaveGroup {
    constructor(){
        this.totalWaves = 3;
        this.totalPoints = 4 ;

        // this.color = ['rgba(0,199,235,0.4)', 'rgba(0,1146,199,0.4)', 'rgba(0,87,158,0.4)'];
        this.color = ['rgba(253,229,123,0.7)', 'rgba(93,128,192,0.7)', 'rgba(171,128,200,0.7)'];
        this.color = ['rgba(250,199,108,0.8)','rgba(243,152,99,0.8)', 'rgba(194,125,92,0.8)'];

        this.waves = [];

        for( let i=0; i< this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],

            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for(let i=0; i< this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for(let i=0; i<this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}