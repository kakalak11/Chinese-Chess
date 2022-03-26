"use strict";
cc._RF.push(module, '5534aw6vLZP/LuqfFfoYR7s', 'Director');
// core/Director.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        mainBoard: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.mainBoard.emit('INIT_BOARD');
    }
}

// update (dt) {},
);

cc._RF.pop();