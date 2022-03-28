(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/core/Director.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '630fc3z//5MwpvUbVD4Ydfy', 'Director', __filename);
// core/Director.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainBoard = null;
        return _this;
    }
    Director.prototype.onLoad = function () {
    };
    ;
    Director.prototype.start = function () {
        this.mainBoard.emit('INIT');
    };
    ;
    __decorate([
        property(cc.Node)
    ], Director.prototype, "mainBoard", void 0);
    Director = __decorate([
        ccclass
    ], Director);
    return Director;
}(cc.Component));
exports.default = Director;

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
        //# sourceMappingURL=Director.js.map
        