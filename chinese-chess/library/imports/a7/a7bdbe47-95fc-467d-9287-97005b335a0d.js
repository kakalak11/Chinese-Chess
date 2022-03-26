"use strict";
cc._RF.push(module, 'a7bdb5HlfxGfZKHlwBbM1oN', 'ChessPiece');
// core/ChessPiece.js

"use strict";

var _require = require("events"),
    init = _require.init;

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        label: cc.Label
    },

    onLoad: function onLoad() {
        this.node.init = this.init.bind(this);
        this.node.sprite = this.sprite.node;
    },
    init: function init(_ref, shortName) {
        var name = _ref.name;

        this.node.chessName = shortName;
        this.node.fullName = name;
        this.label.string = shortName;
    }
});

cc._RF.pop();