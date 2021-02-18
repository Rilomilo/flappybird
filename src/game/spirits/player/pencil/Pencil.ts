import Resource from "../../../../Resource";
import Spirit from "../../Spirit"

export default abstract class Pencil extends Spirit{
    protected x: number;
    protected y: number;
    private _level:number=1;
    private readonly direction:"up"|"down";

    protected constructor(direction:"up"|"down",x:number,y:number) {
        super()
        this.x=x
        this.y=y
        this.direction=direction
    }

    public draw() {
        super.draw(this.image,this.x,this.y);
    }

    get image():HTMLImageElement{
        return Resource.instance.getImage("pencil_"+this.direction+this._level)!
    }

    set level(value: number) {
        this._level = value;
    }
}