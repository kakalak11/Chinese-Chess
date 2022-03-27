"use strict";
cc._RF.push(module, '9365aYd10VLLYLnmYcSs2ue', 'PositionIndicatorComponent');
// core/PrefabScript/PositionIndicatorComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PositionIndicatorComponent = /** @class */ (function (_super) {
    __extends(PositionIndicatorComponent, _super);
    function PositionIndicatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PositionIndicatorComponent.prototype.onLoad = function () {
        this.node.on('mousedown', this.onMouseDown, this);
        this.node.on('mouseup', this.onMouseUp, this);
    };
    ;
    PositionIndicatorComponent.prototype.onMouseDown = function () {
        var eventClick = new cc.Event.EventCustom('CLICK', true);
        this.node.dispatchEvent(eventClick);
    };
    ;
    PositionIndicatorComponent.prototype.onMouseUp = function () {
    };
    ;
    PositionIndicatorComponent = __decorate([
        ccclass
    ], PositionIndicatorComponent);
    return PositionIndicatorComponent;
}(cc.Component));
exports.default = PositionIndicatorComponent;

cc._RF.pop();