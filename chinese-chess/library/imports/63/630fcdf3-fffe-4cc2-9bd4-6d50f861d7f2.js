"use strict";
cc._RF.push(module, '630fc3z//5MwpvUbVD4Ydfy', 'Director');
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
        this.mainBoard.emit('INIT_BOARD');
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