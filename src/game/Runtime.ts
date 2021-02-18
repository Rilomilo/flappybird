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
        console.log(this.frame_cnt++)
        this.frame_timer=requestAnimationFrame(this.run)
    }

}