"use strict";
cc._RF.push(module, 'fb543dP+Y1IprvF4mWTBAuq', 'ChessPieceComponent');
// core/PrefabScript/ChessPieceComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CONFIG = {
    TWEEN_TIME: 0.2,
    SELECT_SCALE: 1.3,
    DESELECT_SCALE: 1,
};
var ChessPieceComponent = /** @class */ (function (_super) {
    __extends(ChessPieceComponent, _super);
    function ChessPieceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.label = null;
        return _this;
    }
    ChessPieceComponent.prototype.onLoad = function () {
        this.node.init = this.init.bind(this);
        this.node.unselect = this.unselect.bind(this);
        this.node.onMouseLeave = this.onMouseLeave.bind(this);
        this.node.sprite = this.sprite.node;
        this.node.isSelected = this.isSelected;
        if (this.node) {
            this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
            this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
            this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
            this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
        }
        this.node.on('RESET', this.reset, this);
    };
    ChessPieceComponent.prototype.init = function (_a, shortName, chessSize) {
        var name = _a.name;
        this.node.chessName = shortName;
        this.node.fullName = name;
        this.label.string = shortName;
        this.node.setContentSize(chessSize, chessSize);
        this.sprite.node.setContentSize(chessSize, chessSize);
    };
    ;
    ChessPieceComponent.prototype.onMouseEnter = function () {
        if (this.isSelected)
            return;
        if (this._tweenUnselect)
            this._tweenUnselect.stop();
        if (!this._tweenSelect) {
            this._tweenSelect = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME, { scale: CONFIG.SELECT_SCALE });
        }
        this._tweenSelect.start();
    };
    ;
    ChessPieceComponent.prototype.onMouseLeave = function () {
        if (this.isSelected)
            return;
        if (this._tweenSelect)
            this._tweenSelect.stop();
        if (!this._tweenUnselect) {
            this._tweenUnselect = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME, { scale: CONFIG.DESELECT_SCALE });
        }
        this._tweenUnselect.start();
    };
    ;
    ChessPieceComponent.prototype.onMouseDown = function () {
        if (this.isSelected) {
            this.isSelected = false;
            this.onMouseLeave();
            var unselectEvent = new cc.Event.EventCustom('CHESS_UNSELECT', true);
            this.node.dispatchEvent(unselectEvent);
            return;
        }
        if (!this._tweenHighlight) {
            this._tweenHighlight = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME / 2, { scale: CONFIG.DESELECT_SCALE })
                .to(CONFIG.TWEEN_TIME / 2, { scale: CONFIG.SELECT_SCALE });
        }
        this._tweenHighlight.start();
        this.isSelected = true;
    };
    ;
    ChessPieceComponent.prototype.onMouseUp = function () {
        if (!this.isSelected)
            return;
        var selectEvent = new cc.Event.EventCustom('CHESS_SELECT', true);
        selectEvent.chessName = this.node.chessName;
        selectEvent.side = this.node.parent.name === 'Top_side' ? 'top' : 'bot';
        this.node.dispatchEvent(selectEvent);
    };
    ;
    ChessPieceComponent.prototype.unselect = function () {
        this.isSelected = false;
    };
    ChessPieceComponent.prototype.reset = function () {
        this.isSelected = null;
        this._tweenUnselect.start();
    };
    ;
    __decorate([
        property(cc.Sprite)
    ], ChessPieceComponent.prototype, "sprite", void 0);
    __decorate([
        property(cc.Label)
    ], ChessPieceComponent.prototype, "label", void 0);
    ChessPieceComponent = __decorate([
        ccclass
    ], ChessPieceComponent);
    return ChessPieceComponent;
}(cc.Component));
exports.default = ChessPieceComponent;
;

cc._RF.pop();