import Resource from "../../../../Resource";
import Spirit from "../Spirit"

export default class Pencil extends Spirit{
    protected _x: number;
    protected _y: number;
    private _level:number=1;
    private readonly direction:"up"|"down";

    /**
     * @param direction up为上边的铅笔，down为下边的铅笔
     * @param y 表示上铅笔的下边或下铅笔的上边
     */
    constructor(direction:"up"|"down",y:number) {
        super()
        this._x=window.options.width
        this.direction=direction
        if(direction=="up"){
            this._y=y-this.image.height
        }else{
            this._y=y
        }
    }

    public draw() {
        super.draw(this.image,this._x,this._y);
    }

    /**
     * 判断铅笔是否已经移出画布
     */
    public isOutOfCanvas():boolean{
        if(this._x+this.image.width<0){
            return true
        }else{
            return false
        }
    }

    get image():HTMLImageElement{
        return Resource.instance.getImage("pencil_"+this.direction+this._level)!
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
}