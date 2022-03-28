"use strict";
cc._RF.push(module, '5da74AUfNFMuIVdSas5bWVv', 'BoardMapComponent');
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
        var BOARD_LENGTH_ROW = BOARD_FORMAT[0];
        for (var col = 0; col < BOARD_LENGTH_COLUMN; col++) {
            for (var row = 0; row < BOARD_LENGTH_ROW; row++) {
                var xPos = BORDER_LEFT_BOARD + col * STEP;
                var yPos = BORDER_TOP_BOARD - row * STEP;
                var positionIndicatorNode = cc.instantiate(this.positionIndicatorPrefab);
                positionIndicatorNode.parent = this.node;
                positionIndicatorNode.setPosition(cc.v2(xPos, yPos));
            }
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