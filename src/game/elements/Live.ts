import Element from "./Element";
import Bird from "./spirits/player/Bird";

export default class Live extends Element{
    protected _x=20;
    protected _y=window.options.height / 18*2;
    private _value=window.options.lives

    constructor() {
        super();
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
        let bird=new Bird()
        for(let i=0; i<this._value; i++){
            window.ctx.drawImage(
                bird.image,
                bird.sx[0],
                bird.sy,
                bird.width,
                bird.height,
                140+(bird.width+10)*i,
                this._y-20,
                bird.width,
                bird.height
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