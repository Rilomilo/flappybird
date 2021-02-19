import BackGround from "./elements/spirits/static/BackGround";
import Land from "./elements/spirits/player/Land";
import Pencil from "./elements/spirits/player/Pencil";
import Bird from "./elements/spirits/player/Bird";

export default class SpiritController {
    private _bird:Bird=new Bird()
    private backGround:BackGround=new BackGround()
    private land:Land=new Land()
    private pencil_ls:Pencil[]=[]
    private move_speed:number=2

    public constructor() {
        this.checkCreatePencil()
    }

    public draw():void{
        this.backGround.draw()

        for(let pencil of this.pencil_ls){
            pencil.draw()
        }
        this.land.draw()
        this._bird.draw()
    }

    /**
     * 当画布上没铅笔或只有两根铅笔并且已经过半时，新创建一对铅笔
     * 创建上下一对铅笔，高度在范围内取随机值
     */
    public checkCreatePencil():void{
        if(this.pencil_ls.length==0 || this.pencil_ls.length<=2 && this.pencil_ls[0].right<=window.options.width/2){
            let h=window.options.pencil.min_height+(window.options.pencil.max_height-window.options.pencil.min_height)*Math.random()
            this.pencil_ls.push(new Pencil("up",h-window.options.pencil.gap))
            this.pencil_ls.push(new Pencil("down",h))
        }
    }

    /**
     * 删除已经移出画布的铅笔
     */
    public checkRemovePencil(){
        if(this.pencil_ls[0].isOutOfCanvas()){
            this.pencil_ls.shift()
            this.pencil_ls.shift()
        }
    }

    /**
     * 水平移动地面和铅笔
     */
    public move(){
        this.land.x-=this.move_speed
        for(let pencil of this.pencil_ls){
            pencil.x-=this.move_speed
        }
    }

    get bird():Bird{
        return this._bird
    }
}