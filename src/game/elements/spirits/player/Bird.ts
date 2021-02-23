import Spirit from "../Spirit";
import Resource from "../../../../Resource";

export default class Bird extends Spirit{
    protected _x: number=0;
    protected _y: number=0;
    private _y0:number=0 //在点击时刻小鸟的y坐标
    public readonly sx:number[]=[8,60,113]
    public readonly sy:number=11
    public readonly width:number=31 // 小鸟的宽度
    public readonly height:number=24 // 小鸟的高度
    private status:number=0 // 记录小鸟的飞行状态，对应image三种姿态
    private time:number=0 // 记录点击之后绘制的帧数

    public constructor() {
        super();
        this.reset()
    }

    public draw(){
        // 小鸟的y坐标用起始坐标+偏移坐标获得，初始值减去30向上冲
        this._y=this._y0+9.8/24*this.time*(this.time-30)/2
        this.time++

        // 更改小鸟的翅膀状态
        this.status+=0.1
        if(this.status>=3){
            this.status=0
        }

        // 防止小鸟飞到屏幕外
        if(this._y<0) this._y=0

        super.draw(this.image,this._x,this._y,this.sx[Math.floor(this.status)],this.sy,this.width,this.height,this.width,this.height)
    }

    public drawBase(ctx:CanvasRenderingContext2D){
        ctx.drawImage(this.base,this.sx[Math.floor(this.status)],this.sy,this.width,this.height,this._x,this._y,this.width,this.height)
    }

    /**
     * 重置小鸟的位置和飞行姿态
     */
    public reset(){
        this._x=window.options.width/4
        this._y=window.options.height/2
        this._y0=this._y
        this.status=0
        this.time=0
    }

    public tap(){
        this._y0=this._y
        this.time=0
    }

    get image(): HTMLImageElement {
        return Resource.instance.getImage("birds")!;
    }

    get base(): HTMLImageElement {
        return Resource.instance.getImage("birds_base")!;
    }

    get top():number{
        return this._y
    }

    get bottom():number{
        return this._y+this.height-1
    }

    get left():number{
        return this._x
    }

    get right():number{
        return this._x+this.width-1
    }

    get mid():number{
        return (this.left+this.right)/2
    }
}