import Element from "./Element";

export default class Score extends Element{
    protected _x: number;
    protected _y: number;
    private _value:number;

    constructor() {
        super()
        this._x=20
        this._y=window.options.height/18*2
        this._value=1
    }

    public draw(){
        let gradient=window.ctx.createLinearGradient(0,0,120,0);
        gradient.addColorStop(0,"magenta");
        gradient.addColorStop(0.5,"blue");
        gradient.addColorStop(1.0,"red");
        window.ctx.fillStyle=gradient;

        window.ctx.font = '25px Arial';
        // this.ctx.fillStyle = '#ffcbeb';
        window.ctx.fillText("当前得分："+this._value, 20, window.options.height / 18, 1000);
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }
}