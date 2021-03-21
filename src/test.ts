import Resource from "./modules/Resource";
import Runtime from "./game/Runtime";

console.log(window.options.width,window.options.height);

async function main() {
    await Resource.instance.load()

    let game = new Runtime()
    game.run()

}


main()
