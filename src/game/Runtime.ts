import SpiritController from "./SpiritController";
import Score from "./elements/Score";
import Live from "./elements/Live";
import Level from "./elements/Level";
import Sound from "../Sound";

export default class Runtime {
    private score=new Score()
    private score_mark=false
    private live=new Live()
    private level=new Level()
    private spirits=new SpiritController()
    private sound=Sound.instance

    public constructor() {
        this.spirits.draw()

        // document.onclick=()=>this.handler()
        document.onmousedown=()=>{
            this.handler()
        }
        document.ontouchstart=()=>{
            document.onmousedown=()=>{}
            this.handler()
        }
    }

    public destructor(){
        document.onclick=()=>{}
        document.ontouchstart=()=>{}
    }

    private handler():void{
        this.sound.play("fly");
        this.spirits.makeBirdFly()
    }

    /**
     * 将所有内容写入画布
     */
    private render(){
        this.spirits.draw()
        this.score.draw()
        this.live.draw()
        this.level.draw()
    }

    /**
     * 加分和升级规则
     */
    private addScore(){
        this.sound.play("score")
        this.score.value+=1

        /* 穿过5个、12个、19个柱子的时候升级 */
        switch (this.score.value) {
            case 5:
            case 12:
            case 19:
                this.level.value+=1
                this.spirits.init(this.level.value)
        }
    }

    /**
     * 游戏运行逻辑主函数
     */
    public run():void{
        // 移动铅笔和地板，检查创建和删除铅笔
        this.spirits.move(this.level.speed)
        this.spirits.checkCreatePencil(this.level.value)
        this.spirits.checkRemovePencil()
        // 小鸟穿过铅笔后处理计分
        if(this.spirits.birdHavePassedFirstPencil()){
            if(!this.score_mark){
                this.addScore()
                this.score_mark=true
            }
        }else{
            this.score_mark=false
        }
        // 将所有内容画在canvas上
        this.render()
        // 处理碰撞
        if(this.spirits.handleCollision()){
            this.sound.play("duang");
            this.live.value--
            if(this.live.value<0){
                return
            }
        }
        // setTimeout(()=>this.run(),16.7)
        requestAnimationFrame(()=>this.run())
    }

}