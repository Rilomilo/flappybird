import SpiritController from "./SpiritController";
import Score from "./elements/Score";
import Live from "./elements/Live";
import Level from "./elements/Level";

export default class Runtime {
    private frame_timer=0
    private frame_cnt=0
    private score=new Score()
    private score_mark=false
    private live=new Live()
    private level=new Level()
    private spirits=new SpiritController()

    public constructor() {
        this.spirits.setLevel(this.level.value,this.level.speed)
        this.spirits.draw()

        document.onclick=()=>this.handler()
        document.ontouchstart=()=>this.handler()
    }

    private handler():void{
        this.spirits.makeBirdFly()
    }

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
        this.score.value+=1

        switch (this.score.value) {
            case 5:
            case 12:
                this.level.value+=1
                this.spirits.setLevel(this.level.value,this.level.speed)
        }
    }

    public run():void{
        // 移动铅笔和地板，检查创建和删除铅笔
        this.spirits.move()
        this.spirits.checkCreatePencil()
        this.spirits.checkRemovePencil()
        // 处理碰撞
        if(this.spirits.handleCollision()){
            this.live.value--
            if(this.live.value<0){
                return
            }
        }

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
        this.frame_timer=requestAnimationFrame(()=>this.run())
    }

}