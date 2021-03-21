import Spirit from "./Spirit";

export default class Land extends Spirit{

    public constructor(level:number) {
        super("land"+level,0,window.options.height-window.options.land_height);
    }

    get x():number{
        return this._x;
    }

    set x(value: number) {
        this._x=value
        if(-this._x+window.options.width>this.image.width){
            this._x=0
        }
    }

}