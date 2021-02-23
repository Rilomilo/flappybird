import Element from "./Element";

export default class Level extends Element{
    protected _x=window.innerWidth/3+15;
    protected _y=window.innerHeight-30;
    private _value=1;
    private readonly speed_value=[3,4,5] // 存储每一个等级的移动速度

    constructor() {
        super();
    }

    public draw(){
        window.ctx.font = 'italic 30px Comic Sans MS';
        window.ctx.fillStyle="#66ccff";
        window.ctx.fillText(
            "level"+this._value,
            window.options.width/2-40,
            window.options.height-30
        )
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get speed():number{
        return this.speed_value[this._value-1]
    }
}