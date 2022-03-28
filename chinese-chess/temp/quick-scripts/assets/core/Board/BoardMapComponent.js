(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/core/Board/BoardMapComponent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '46f57XaE1JKMKPZBJYTMjbn', 'BoardMapComponent', __filename);
// core/Board/BoardMapComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoardMapComponent = /** @class */ (function (_super) {
    __extends(BoardMapComponent, _super);
    function BoardMapComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positionIndicatorPrefab = null;
        return _this;
    }
    BoardMapComponent.prototype.onLoad = function () {
        this.node.on('INIT', this.init, this);
    };
    ;
    BoardMapComponent.prototype.init = function () {
        var _a = this.node.config, BOARD_FORMAT = _a.BOARD_FORMAT, BORDER_LEFT_BOARD = _a.BORDER_LEFT_BOARD, BORDER_TOP_BOARD = _a.BORDER_TOP_BOARD, STEP = _a.STEP;
        var BOARD_LENGTH_COLUMN = BOARD_FORMAT.length;
        var BOARD_LENGTH_ROW = BOARD_FORMAT.length[0];
        var startOffsetX = BORDER_LEFT_BOARD;
        var startOffsetY = BORDER_TOP_BOARD;
        this.y = 0;
        for (var i = 0; i < BOARD_LENGTH_COLUMN; i++) {
            var xStep = (i % BOARD_LENGTH_COLUMN) * STEP;
            if (xStep === -BORDER_LEFT_BOARD) {
                this.y++;
            }
            var yStep = this.y * STEP;
            var position = new cc.Vec2(xStep, yStep);
            var positionIndicatorNode = cc.instantiate(this.positionIndicatorPrefab);
            positionIndicatorNode.parent = this.node;
            positionIndicatorNode.setPosition(position);
        }
    };
    ;
    __decorate([
        property(cc.Prefab)
    ], BoardMapComponent.prototype, "positionIndicatorPrefab", void 0);
    BoardMapComponent = __decorate([
        ccclass
    ], BoardMapComponent);
    return BoardMapComponent;
}(cc.Component));
exports.default = BoardMapComponent;

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
        //# sourceMappingURL=BoardMapComponent.js.map
        