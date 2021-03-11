export default abstract class Element {
    protected _x:number //左上角横坐标
    protected _y:number //左上角纵坐标

    protected constructor(x:number,y:number) {
        this._x=x;
        this._y=y;
    }

    public abstract draw():void
}