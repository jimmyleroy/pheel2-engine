import Scene from "./Scene";

/**
 *
 */
export default class Game {

    /**
     *
     * @param {Scene} scene
     */
    constructor(scene) {
        if (scene) {
            this.currentScene = scene;
        } else {
            this.currentScene = new Scene();
        }

        this.nextScene = null;

        this.intervalHandle = 0;
    }

    /**
     *
     * @param {Scene} scene
     */
    setScene(scene) {
        this.nextScene = scene;
    }

    /**
     *
     */
    start() {
        if (this.currentScene) {
            this.currentScene.start();
        }
        this.loop();
    }

    /**
     *
     */
    loop() {
        if (this.nextScene) {
            clearInterval(this.intervalHandle);
            let params = {};
            if (this.currentScene) {
                params = this.currentScene.stop();
            }
            this.currentScene = this.nextScene;
            this.nextScene = null;
            this.currentScene.start(params);
        }
        this.intervalHandle = setInterval(this.currentScene.loop,1000/60);
    }
}