import Resource from "../../../../Resource";
import Spirit from "../Spirit"

export default class Pencil extends Spirit{
    protected _x: number;
    protected _y: number;
    private _level:number=1;
    private readonly _direction:"up"|"down";

    /**
     * @param direction up为上边的铅笔，down为下边的铅笔
     * @param y 表示上铅笔的下边或下铅笔的上边
     */
    constructor(direction:"up"|"down",y:number) {
        super()
        this._x=window.options.width
        this._direction=direction
        if(direction=="up"){
            this._y=y-this.image.height
        }else{
            this._y=y
        }
    }

    public draw() {
        super.draw(this.image,this._x,this._y);
    }

    public drawBase(ctx:CanvasRenderingContext2D){
        ctx.drawImage(this.base,this._x,this._y)
    }

    get image():HTMLImageElement{
        return Resource.instance.getImage("pencil_"+this._direction+this._level)!
    }

    get base():HTMLImageElement{
        return Resource.instance.getImage("pencil_"+this._direction+"_base")!
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    set level(value: number) {
        this._level = value;
    }

    get top():number{
        return this._y
    }

    get bottom():number{
        return this._y+this.image.height
    }

    get left():number{
        return this._x
    }

    get right():number{
        return this._x+this.image.width
    }

    get mid():number{
        return (this.left+this.right)/2
    }

    get direction(): "up" | "down" {
        return this._direction;
    }
}