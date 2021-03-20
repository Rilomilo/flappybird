import Element from "./Element";

export default class Level extends Element{
    private static readonly speed_value=[2,3,4,5] // 存储每一个等级的移动速度
    private _value=1;

    constructor() {
        super(window.innerWidth/3+15,window.innerHeight-30);
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
        return Level.speed_value[this._value-1]
    }
}