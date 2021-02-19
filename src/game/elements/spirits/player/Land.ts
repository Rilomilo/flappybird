import Spirit from "../Spirit";
import Resource from "../../../../Resource";

export default class Land extends Spirit{
    protected _x: number;
    protected _y: number;
    private _level:number=1;

    public constructor() {
        super();
        this._x=0
        this._y=window.options.height-window.options.land_height
    }

    public draw():void{
        super.draw(this.image,this._x,this._y)
    }

    public get image(): HTMLImageElement {
        return Resource.instance.getImage("land"+this._level)!;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x=value
        if(-this._x+window.options.width>this.image.width){
            this._x=0
        }
    }

    public set level(value: number) {
        this._level = value;
    }
}