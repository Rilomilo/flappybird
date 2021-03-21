export default class Resource {
    private static _instance:Resource|null
    private img_res_ls:string[]=[
        "background1",
        "background2",
        "background3",
        "background4",
        "birds_base",
        "birds",
        "land1",
        "land2",
        "land3",
        "land4",
        "pencil_down_base",
        "pencil_down1",
        "pencil_down2",
        "pencil_down3",
        "pencil_down4",
        "pencil_up_base",
        "pencil_up1",
        "pencil_up2",
        "pencil_up3",
        "pencil_up4",
    ]
    private sound_res_ls=[
        "duang",
        "fly",
        "score"
    ]
    private image_map:Map<string,HTMLImageElement>=new Map<string,HTMLImageElement>() // 存储图像
    private sound_buffer_map:Map<string,AudioBuffer>=new Map<string, AudioBuffer>() // 存储音频buffer数组

    private constructor() {}

    public load():Promise<null[]>{
        let ls:Promise<null>[]=[]

        // 加载images
        for(let image_name of this.img_res_ls ){
            let image=new Image();
            image.src="../res/img/"+image_name+".png";
            this.image_map.set(image_name,image);

            ls.push(new Promise((resolve)=>{
                image.onload=function () {
                    resolve(null)
                }
            }))
        }
        // 加载sound
        let audioContext=new AudioContext();
        for(let sound_name of this.sound_res_ls){
            let request=new XMLHttpRequest();
            let path="../res/sound/"+sound_name+".mp3";
            request.responseType="arraybuffer";
            request.open("GET",path);

            ls.push(new Promise(resolve=>{
                request.onload=()=>{
                    audioContext.decodeAudioData(request.response).then(buffer=>{
                        this.sound_buffer_map.set(sound_name,buffer);
                        resolve(null);
                    })
                }
            }))

            request.send()
        }

        return Promise.all(ls)
    }

    public getImage(name:string):HTMLImageElement | undefined{
        return this.image_map.get(name)
    }

    public getAudioBuffer(name:string):AudioBuffer|undefined{
        return this.sound_buffer_map.get(name);
    }

    public static get instance(){
        if(!this._instance){
            this._instance=new Resource()
        }
        return this._instance
    }

}