cc.Class({
    extends: cc.Component,

    properties: {
        mainBoard: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.mainBoard.emit('INIT_BOARD');
    },

    // update (dt) {},
});
