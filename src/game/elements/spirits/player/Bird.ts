import Spirit from "../Spirit";
import Resource from "../../../../Resource";

export default class Bird extends Spirit{
    protected _x: number;
    protected _y: number;
    private sx:number[]=[8,60,113]
    private sy:number=11
    private width:number=31
    private height:number=24
    private status:0|1|2=0

    public constructor() {
        super();
        this._x=window.options.width/4
        this._y=window.options.height/2
    }

    public draw():void{
        super.draw(this.image,this._x,this._y,this.sx[this.status],this.sy,this.width,this.height,this.width,this.height)
    }

    get image(): HTMLImageElement {
        return Resource.instance.getImage("birds")!;
    }

    get top():number{
        return this._y
    }

    get bottom():number{
        return this._y+this.height
    }

    get left():number{
        return this._x
    }

    get right():number{
        return this._x+this.width
    }
}