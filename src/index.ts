declare global{
    interface Window {
        ctx:CanvasRenderingContext2D
        options:{
            /*画布高度*/
            height:number,
            /*画布宽度*/
            width:number,
            /*地面宽度*/
            land_height:number,
            pencil:{
                /*最低的DownPencil笔尖纵坐标*/
                max_height:number,
                /*最高的DownPencil笔尖纵坐标*/
                min_height:number,
                /*上下笔尖间隙*/
                gap:number
            },
            /*初始生命数*/
            lives:number
        }
    }
}

let canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("canvas")
window.ctx=canvas.getContext("2d")!
window.options={
    height:667,
    width:375,
    land_height:112,
    pencil: {
        max_height: 470,
        min_height: 190,
        gap: 110
    },
    lives: 3
}

import "./test"