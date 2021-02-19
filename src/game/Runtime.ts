import SpiritController from "./SpiritController";

export default class Runtime {
    private frame_timer:number=0
    private frame_cnt:number=0
    private spirits:SpiritController=new SpiritController()

    public constructor() {
        this.spirits.draw()
    }

    public init():void{

    }

    public handler():void{

    }

    public run():void{
        this.spirits.move()
        this.spirits.checkCreatePencil()
        this.spirits.checkRemovePencil()

        this.spirits.draw()
        this.frame_timer=requestAnimationFrame(()=>this.run())
    }

}