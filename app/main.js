import Game from "./engine/Game";
import Scene from "./engine/Scene";

const game = new Game(new Scene(
    {
        loop: function () {
            if (!this.c) {
                this.c = 0;
            }
            this.c++;
            document.body.innerHTML = "LOOPED " + this.c +" TIMES";
        }
    }
));
game.start();