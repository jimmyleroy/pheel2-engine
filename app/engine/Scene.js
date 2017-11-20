import Entity from "./Entity"

/**
 *
 */
export default class Scene {

    /**
     * Called on scene startup.
     * @callback startCallback
     * @param {Object} params - Parameters passed from the previous scene's stop();
     */

    /**
     * Called each tick while the scene is running.
     * @callback loopCallback
     */

    /**
     * Called at the end of the last scene's tick.
     * @callback stopCallback
     * @returns {Object} - Parameters to pass to the next scene's start();
     */

    /**
     *
     * @param {Object} handlers
     * @param {startCallback} handlers.start - Called on scene startup.
     * @param {loopCallback} handlers.loop - Called each tick while the scene is running.
     * @param {stopCallback} handlers.stop - Called at the end of the last scene's tick.
     */
    constructor(handlers) {
        if (handlers) {
            if (handlers.start) {
                this.start = handlers.start;
            }

            if (handlers.loop) {
                this.loop = handlers.loop;
            }

            if (handlers.stop) {
                this.stop = handlers.stop;
            }
        }

        /**
         * The root Entity of the scene graph. Your entities should be descendants of the root.
         * @type {Entity}
         * @see Entity.addChild
         */
        this.root = new Entity();
    }

    /**
     * Called on scene startup.
     * @param {Object} params - Parameters passed from the previous scene's stop();
     */
    start(params) {
        console.log("Started scene");
    }

    /**
     * Called each tick while the scene is running.
     */
    loop() {
        console.log("Looping");
    }

    /**
     * Called at the end of the last scene's tick.
     * @returns {Object} - Parameters to pass to the next scene's start();
     */
    stop() {
        console.log("Stopped scene");
    }

}