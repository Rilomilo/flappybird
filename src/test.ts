import Resource from "./Resource";
import Runtime from "./game/Runtime";
import Pencil from "./game/elements/spirits/player/Pencil";

console.log(window.options.width,window.options.height);

async function main() {
    await Resource.instance.load()

    let game = new Runtime()
    game.run()

}


main()



