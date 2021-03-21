import "./declare"
import "./style/style.less"
import Resource from "./modules/Resource";
import GameMenu from "./game/GameMenu";

let canvas=<HTMLCanvasElement>document.getElementById("canvas")
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
window.gameMenu=GameMenu.instance

async function main() {
    window.ctx.font = '25px Arial';
    window.ctx.fillText("资源正在加载...",window.options.width/2-80,window.options.height/3);
    await Resource.instance.load();
    window.gameMenu.newGame();
}
main()
