"use strict";
cc._RF.push(module, 'a8651uywApGh4x/chiuUtl0', 'BoardMapComp');
// core/Board/BoardMapComp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoardMapComp = /** @class */ (function (_super) {
    __extends(BoardMapComp, _super);
    function BoardMapComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boardMapHolder = null;
        _this.callbackMouseClick = null;
        return _this;
    }
    BoardMapComp.prototype.onLoad = function () {
        this.node.on('INIT_CALLBACK', this.init, this);
        if (this.boardMapHolder) {
            this.boardMapHolder.on('mousedown', this.onMouseDown, this);
            this.boardMapHolder.on('mouseup', this.onMouseUp, this);
        }
    };
    ;
    BoardMapComp.prototype.init = function (callback) {
        if (callback === void 0) { callback = function () { }; }
        this.callbackMouseClick = callback;
    };
    ;
    BoardMapComp.prototype.onMouseDown = function (event) {
        var position = new cc.Vec2(event._x, event._y);
        if (!this.callbackMouseClick)
            return;
        this.callbackMouseClick(position);
    };
    ;
    BoardMapComp.prototype.onMouseUp = function (event) {
        var eventClick = event;
    };
    ;
    __decorate([
        property(cc.Node)
    ], BoardMapComp.prototype, "boardMapHolder", void 0);
    BoardMapComp = __decorate([
        ccclass
    ], BoardMapComp);
    return BoardMapComp;
}(cc.Component));
exports.default = BoardMapComp;

cc._RF.pop();