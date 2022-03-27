(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/core/PrefabScript/PositionIndicatorComponent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9365aYd10VLLYLnmYcSs2ue', 'PositionIndicatorComponent', __filename);
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
        //# sourceMappingURL=PositionIndicatorComponent.js.map
        