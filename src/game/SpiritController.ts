import BackGround from "./spirits/static/BackGround";
import Land from "./spirits/player/Land";
import Pencil from "./spirits/player/pencil/Pencil";

export default class SpiritController {
    public backGround:BackGround=new BackGround()
    public land:Land=new Land()
    public pencil_ls:Pencil[]=[]

    public constructor() {

    }

    public draw():void{
        this.backGround.draw()
        this.land.draw()
        for(let pencil of this.pencil_ls){
            pencil.draw()
        }
    }
}