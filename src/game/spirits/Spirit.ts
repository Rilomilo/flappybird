export default abstract class Spirit {
    protected abstract x:number
    protected abstract y:number

    protected draw(
        image:HTMLImageElement,
        dx:number,
        dy:number,
        sx:number=0,
        sy:number=0,
        sWidth:number=image.width,
        sHeight:number=image.height,
        dWidth:number=image.width,
        dHeight:number=image.height
    ):void{
        window.ctx.drawImage(image,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight)
    }

    protected abstract get image():HTMLImageElement
}