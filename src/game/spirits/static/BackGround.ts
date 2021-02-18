import Spirit from "../Spirit";
import Resource from "../../../Resource";

export default class BackGround extends Spirit{
    protected x: number;
    protected y: number;
    private _level:number=1;

    public constructor() {
        super();
        this.x=0
        this.y=0
    }

    public draw():void {
        super.draw(this.image,this.x,this.y);
    }

    get image(): HTMLImageElement {
        return Resource.instance.getImage("background"+this._level)!;
    }

    set level(value: number) {
        this._level = value;
    }
}