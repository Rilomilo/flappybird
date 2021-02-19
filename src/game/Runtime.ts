import SpiritController from "./SpiritController";

export default class Runtime {
    private frame_timer:number=0
    private frame_cnt:number=0
    private spirits:SpiritController=new SpiritController()

    public constructor() {
        this.spirits.draw()
        document.onclick=()=>this.handler()
        document.ontouchstart=()=>this.handler()
    }

    public init():void{

    }

    public handler():void{
        this.spirits.bird.tap()
    }

    public run():void{
        this.spirits.move()
        this.spirits.checkCreatePencil()
        this.spirits.checkRemovePencil()

        this.spirits.draw()
        this.frame_timer=requestAnimationFrame(()=>this.run())
    }

}