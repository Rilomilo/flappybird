import GameMenu from "./game/GameMenu";

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
        },
        gameMenu:GameMenu
    }
}