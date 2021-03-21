import Element from "./Element";
import Bird from "./spirits/Bird";
import Resource from "../../modules/Resource";

export default class Live extends Element{
    private _value=window.options.lives

    constructor() {
        super(20,window.options.height / 18*2);
    }

    public draw(){
        // 绘制文字
        let gradient=window.ctx.createLinearGradient(180,0,0,0);

        gradient.addColorStop(0,"magenta");
        gradient.addColorStop(0.5,"blue");
        gradient.addColorStop(1.0,"red");
        window.ctx.fillStyle=gradient;
        window.ctx.font = '25px Arial';
        // this.ctx.fillStyle = '#ffcbeb';
        window.ctx.fillText("剩余小鸟：",this._x,this._y);
        // 绘制小鸟
        for(let i=0; i<this._value; i++){
            window.ctx.drawImage(
                Resource.instance.getImage("birds")!,
                Bird.sx[0],
                Bird.sy,
                Bird.width,
                Bird.height,
                140+(Bird.width+10)*i,
                this._y-20,
                Bird.width,
                Bird.height
            )
        }
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }
}