import Spirit from "../Spirit";
import Resource from "../../../Resource";

export default class Bird extends Spirit{
    protected x: number;
    protected y: number;
    private sx:number[]=[8,60,113]
    private sy:number=11
    private width:number=31
    private height:number=24
    private status:0|1|2=0

    public constructor() {
        super();
        this.x=window.options.width/4
        this.y=window.options.height/2
    }

    public draw():void{
        super.draw(this.image,this.x,this.y,this.sx[this.status],this.sy,this.width,this.height,this.width,this.height)
    }

    protected get image(): HTMLImageElement {
        return Resource.instance.getImage("birds")!;
    }

}