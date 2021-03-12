import BackGround from "./elements/spirits/static/BackGround";
import Land from "./elements/spirits/player/Land";
import Pencil from "./elements/spirits/player/Pencil";
import Bird from "./elements/spirits/player/Bird";

export default class SpiritController {
    private bird=new Bird()
    private pencil_ls:Pencil[]=[]
    private backGround:BackGround=new BackGround(1)
    private land:Land=new Land(1)

    /**
     * 设定游戏等级并初始化相应spirit
     * @param level 等级
     */
    public init(level:number){
        this.backGround=new BackGround(level)
        this.land=new Land(level)
    }

    public draw():void{
        this.backGround.draw()

        for(let pencil of this.pencil_ls){
            pencil.draw()
        }
        this.land.draw()
        this.bird.draw()
    }

    /**
     * 将所有spirit移动一帧
     */
    public move(speed:number){
        this.land.x-=speed
        for(let pencil of this.pencil_ls){
            pencil.x-=speed
        }
        this.bird.move()
    }

    /**
     * 当画布上没铅笔或只有两根铅笔并且已经过半时，新创建一对铅笔
     * 创建上下一对铅笔，高度在范围内取随机值
     */
    public checkCreatePencil(level:number):void{
        if(this.pencil_ls.length==0 || this.pencil_ls.length<=2 && this.pencil_ls[0].right<=window.options.width/2){
            let h=window.options.pencil.min_height+(window.options.pencil.max_height-window.options.pencil.min_height)*Math.random()
            this.pencil_ls.push(new Pencil(level,"up",h-window.options.pencil.gap))
            this.pencil_ls.push(new Pencil(level,"down",h))
        }
    }

    /**
     * 删除已经移出画布的铅笔
     */
    public checkRemovePencil(){
        while(this.pencil_ls.length!=0 && this.pencil_ls[0].right<0){
            this.pencil_ls.shift()
        }
    }

    /**
     * 检查小鸟的碰撞情况，若和地面碰撞则复位，若和Pencil碰撞则删去该Pencil
     * @return true表示发生碰撞
     */
    public handleCollision():boolean{
        // 检测鸟与地板的碰撞
        if(this.bird.bottom>this.land.top){
            this.bird.reset()
            return true
        }

        // 检测鸟与铅笔的碰撞
        for(let i=0;i<this.pencil_ls.length;i++){
            if(this.detectPencilCollision(this.bird,this.pencil_ls[i])){
                this.pencil_ls.splice(i,1)
                return true
            }
        }
        return false
    }

    /**
     * 检测鸟和铅笔是否发生碰撞
     * @param bird 待检测的鸟
     * @param pencil 待检测的铅笔
     */
    public detectPencilCollision(bird:Bird,pencil:Pencil):boolean{
        // 建立相交矩形(欲检测部分)的边框模型
        let border={
            left: 0,
            right:0,
            top:0,
            bottom:0
        }
        // 先取x方向重叠部分
        border.left=Math.round(Math.max(bird.left,pencil.left))
        border.right=Math.round(Math.min(bird.right,pencil.right))
        // 再取y方向重叠部分
        border.bottom=Math.round(Math.min(pencil.bottom,bird.bottom))
        border.top=Math.round(Math.max(bird.top,pencil.top))

        if(border.left>border.right || border.top>border.bottom){
            return false
        }

        let canvas=document.createElement("canvas")
        canvas.width=window.options.width
        canvas.height=window.options.height
        let ctx=canvas.getContext("2d")!

        // let canvas=<HTMLCanvasElement>document.getElementById("canvas1")!
        // let ctx=canvas.getContext("2d")!
        // ctx.clearRect(0,0,window.options.width,window.options.height)
        // ctx.beginPath()
        // ctx.moveTo(border.left,border.top)
        // ctx.lineTo(border.right,border.top)
        // ctx.lineTo(border.right,border.bottom)
        // ctx.lineTo(border.left,border.bottom)
        // ctx.lineTo(border.left,border.top)
        // ctx.stroke()

        pencil.drawBase(ctx)
        bird.drawBase(ctx)
        let pixels=ctx.getImageData(border.left,border.top,border.right-border.left+1,border.bottom-border.top+1)

        for(let i=0;i<pixels.data.length;i+=4){
            if(pixels.data[i]>50 && pixels.data[i+2]>50){
                return true
            }
        }

        return false
    }

    /**
     * 检查小鸟是否穿过最左侧一对铅笔，用来判断得分
     */
    public birdHavePassedFirstPencil():boolean{
        if(this.pencil_ls.length==0) return false
        return this.bird.mid>=this.pencil_ls[0].mid
    }

    public makeBirdFly(){
        this.bird.tap()
    }
}