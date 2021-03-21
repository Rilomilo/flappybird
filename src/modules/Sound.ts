import Resource from "./Resource";

export default class Sound {
    private static _instance:Sound|null
    private audioContext:AudioContext

    private constructor() {
        this.audioContext=new AudioContext()
    }

    public play(name:string){
        let node=this.audioContext.createBufferSource()
        node.buffer=Resource.instance.getAudioBuffer(name)!
        node.connect(this.audioContext.destination)
        node.start();
    }

    public static get instance():Sound{
        if(!this._instance){
            this._instance=new Sound();
        }
        return this._instance;
    }
}