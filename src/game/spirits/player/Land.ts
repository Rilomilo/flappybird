import Spirit from "../Spirit";
import Resource from "../../../Resource";

export default class Land extends Spirit{
    protected x: number;
    protected y: number;
    private _level:number=1;

    public constructor() {
        super();
        this.x=0
        this.y=window.options.height-window.options.land_height
    }

    public draw():void{
        super.draw(this.image,this.x,this.y)
    }

    public get image(): HTMLImageElement {
        return Resource.instance.getImage("land"+this._level)!;
    }

    public set level(value: number) {
        this._level = value;
    }
}