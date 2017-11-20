/**
 *
 */
export default class Component {

    /**
     *
     */
    constructor() {
        this.parent = null;
    }

    /**
     *
     * @param {Entity} entity
     */
    setParent(entity) {
        this.parent = entity;
    }
}