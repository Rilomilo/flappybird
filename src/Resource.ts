export default class Resource {
    private static _instance:Resource|null
    private res_ls:[string,string][]=[
        ["background1","res/img/background1.png"],
        ["background2","res/img/background2.png"],
        ["background3","res/img/background3.png"],
        ["birds","res/img/birds.png"],
        ["land1","res/img/land1.png"],
        ["land2","res/img/land2.png"],
        ["land3","res/img/land3.png"],
        ["pencil_down1","res/img/pencil_down1.png"],
        ["pencil_down2","res/img/pencil_down2.png"],
        ["pencil_down3","res/img/pencil_down3.png"],
        ["pencil_up1","res/img/pencil_up1.png"],
        ["pencil_up2","res/img/pencil_up2.png"],
        ["pencil_up3","res/img/pencil_up3.png"]
    ]
    private image_map:Map<string,HTMLImageElement>=new Map<string,HTMLImageElement>() // 存储图像

    private constructor() {

    }

    public static get instance(){
        if(!this._instance){
            this._instance=new Resource()
        }
        return this._instance
    }

    public load():Promise<null[]>{
        let ls:Promise<null>[]=[]

        for(let [name,path] of this.res_ls ){
            let image=new Image()
            image.src=path
            this.image_map.set(name,image)

            ls.push(new Promise((resolve, reject)=>{
                image.onload=function () {
                    resolve(null)
                }
            }))
        }
        return Promise.all(ls)
    }

    public getImage(name:string):HTMLImageElement | undefined{
        return this.image_map.get(name)
    }
}