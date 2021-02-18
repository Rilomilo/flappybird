import Resource from "./Resource";
import Runtime from "./game/Runtime";

console.log(window.options.width,window.options.height);

(async function(){
    await Resource.instance.load()
    new Runtime()
    // let game=new Runtime()
    // game.run()


})()




