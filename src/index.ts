import "./declare"
import "./style/style.less"

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