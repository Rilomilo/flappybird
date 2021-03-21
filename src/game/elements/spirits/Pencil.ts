import Resource from "../../../modules/Resource";
import Spirit from "./Spirit"

export default class Pencil extends Spirit{
    public readonly direction:"up"|"down";

    /**
     * @param level 级别
     * @param direction up为上边的铅笔，down为下边的铅笔
     * @param y 表示上铅笔的下边或下铅笔的上边
     */
    constructor(level:number,direction:"up"|"down",y:number) {
        super("pencil_"+direction+level,window.options.width)

        this.direction=direction
        if(direction=="up"){
            this._y=y-this.image.height
        }else{
            this._y=y
        }
    }

    public drawBase(ctx:CanvasRenderingContext2D){
        ctx.drawImage(this.base,this._x,this._y)
    }

    get base():HTMLImageElement{
        return Resource.instance.getImage("pencil_"+this.direction+"_base")!
    }

    get x():number{
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

}