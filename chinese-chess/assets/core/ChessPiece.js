const { init } = require("events");

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        label: cc.Label,
    },

    onLoad() {
        this.node.init = this.init.bind(this);
        this.node.sprite = this.sprite;
    },

    init({ name }, shortName) {
        this.node.chessName = shortName;
        this.node.fullName = name;
        this.label.string = shortName;
    },
});
