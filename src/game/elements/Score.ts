import Element from "./Element";

export default class Score extends Element{
    private _value:number;

    constructor() {
        super(20,window.options.height/18*2)
        this._value=0
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