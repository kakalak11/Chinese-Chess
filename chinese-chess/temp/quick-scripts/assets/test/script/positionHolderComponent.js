(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/test/script/positionHolderComponent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6d23e2xXEVGxbjKxAOtMwiJ', 'positionHolderComponent', __filename);
// test/script/positionHolderComponent.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positionHolder = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.positionHolder.children.forEach(function (child) {
            child.on('mousedown', _this.onMouseDown, _this);
            child.on('mouseup', _this.onMouseUp, _this);
        });
    };
    ;
    NewClass.prototype.onMouseDown = function () {
        this.node.dispatchEvent(new cc.Event.EventCustom('mousedown', true));
    };
    NewClass.prototype.onMouseUp = function () {
        this.node.dispatchEvent(new cc.Event.EventCustom('mouseup', true));
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "positionHolder", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
        //# sourceMappingURL=positionHolderComponent.js.map
        