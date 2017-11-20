import EventEmitter from "events";

/**
 *
 */
export default class Entity extends EventEmitter {

    /**
     *
     */
    constructor() {
        super();
        this.parent = null;
        this.children = [];
        this.components = [];
    }

    /**
     *
     * @param {Entity} entity
     */
    setParent(entity) {
        this.parent = entity;
    }

    /**
     *
     * @param {Entity} entity
     */
    addChild(entity) {
        this.children.push(entity);
        entity.setParent(this);
    }

    /**
     *
     * @param {Component} component
     */
    addComponent(component) {
        this.components.push(component);
        component.setParent(this);
    }


}