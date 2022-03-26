(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/core/ChessPiece.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a7bdb5HlfxGfZKHlwBbM1oN', 'ChessPiece', __filename);
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
        this.node.sprite = this.sprite;
    },
    init: function init(_ref, shortName) {
        var name = _ref.name;

        this.node.chessName = shortName;
        this.node.fullName = name;
        this.label.string = shortName;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ChessPiece.js.map
        