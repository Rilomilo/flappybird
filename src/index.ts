declare global{
    interface Window {
        ctx:CanvasRenderingContext2D
        options:{
            height:number,
            width:number,
            land_height:number
        }
    }
}

let canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("canvas")
window.ctx=canvas.getContext("2d")!

window.options={
    height:667,
    width:375,
    land_height:112
}

import "./test"