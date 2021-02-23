import Spirit from "../Spirit";
import Resource from "../../../../Resource";

export default class BackGround extends Spirit{
    protected _x: number;
    protected _y: number;
    private _level:number=1;

    public constructor(level:number) {
        super();
        this._x=0
        this._y=0
        this._level=level
    }

    public draw():void {
        super.draw(this.image,this._x,this._y);
    }

    get image(): HTMLImageElement {
        return Resource.instance.getImage("background"+this._level)!;
    }

}