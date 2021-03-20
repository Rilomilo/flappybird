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
                /*最低的UpPencil笔尖纵坐标*/
                max_height:number,
                /*最高的UpPencil笔尖纵坐标*/
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
        max_height: 0,
        min_height: 0,
        gap: 135
    },
    lives: 3
}
window.options.pencil.max_height=window.options.height/6
window.options.pencil.min_height=window.options.height/2

import "./test"