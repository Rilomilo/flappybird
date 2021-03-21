import Element from "../Element";
import Resource from "../../../modules/Resource";

export default abstract class Spirit extends Element{
    protected name: string;
    protected sx: number;
    protected sy: number;
    protected width: number;
    protected height: number;

    protected constructor(name:string,x:number=0,y:number=0,sx:number=0,sy:number=0,width:number=0,height:number=0) {
        super(x,y);
        this.name=name;
        this.sx=sx;
        this.sy=sy;
        this.width=width?width:this.image.width;
        this.height=height?height:this.image.height;
    }

    public draw():void{
        window.ctx.drawImage(this.image,this.sx,this.sy,this.width,this.height,this._x,this._y,this.width,this.height);
    }

    get image():HTMLImageElement{
        return Resource.instance.getImage(this.name)!;
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