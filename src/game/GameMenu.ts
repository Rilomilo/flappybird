import Runtime from "./Runtime";

export default class GameMenu{
    private static _instance:GameMenu|undefined;
    private game:Runtime|undefined;

    private constructor() {}

    public newGame(){
        document.getElementById("game-menu")!.style.display="none";
        document.getElementById("tips")!.style.display="block"
        this.game=new Runtime();
        document.onmousedown=document.ontouchstart=(e:MouseEvent|TouchEvent)=>this.startGame(e)
    }

    public startGame(e:MouseEvent|TouchEvent){
        if(e.type=="mousedown"){
            document.onmousedown=()=>this.game!.eventHandler()
            document.ontouchstart=()=>{}
        }else{
            document.ontouchstart=()=>this.game!.eventHandler()
            document.onmousedown=()=>{}
        }
        document.getElementById("tips")!.style.display="none"
        this.game!.run()
    }

    public endGame(){
        document.getElementById("game-menu")!.style.display="block";
        document.querySelector("#game-menu .score")!.textContent=localStorage.getItem("score");
        document.querySelector("#game-menu .best-score span")!.textContent=localStorage.getItem("best_score");
    }

    static get instance():GameMenu{
        if(!this._instance){
            this._instance=new GameMenu();
        }
        return this._instance
    }
}