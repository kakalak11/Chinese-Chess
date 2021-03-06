(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/core/Config.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd8ccfG6PGVKIJ7Rid3+x/w/', 'Config', __filename);
// core/Config.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Config = /** @class */ (function (_super) {
    __extends(Config, _super);
    function Config() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Config.prototype.onLoad = function () {
        this.node.config = {
            BOARD_FORMAT: [9, 9, 9, 9, 9, 9, 9, 9, 9],
            CHESS_SIZE: 40,
            STEP: 60,
            CELL_SIZE: 60,
            BORDER_LEFT_BOARD: -240,
            BORDER_RIGHT_BOARD: 240,
            BORDER_TOP_BOARD: 270,
            BORDER_BOTTOM_BOARD: -270,
            INIT_POSITION: cc.v2(0, -270),
            TABLE_FORMAT_VERTICAL: 9,
            TABLE_FORMAT_HORIZONTAL: 10,
            CHESS_LAYOUT: ['K', 'G', 'E', 'H', 'R', 'C', 'G', 'E', 'H', 'R', 'C', 'P', 'P', 'P', 'P', 'P'],
            CHESS_INFO: {
                'K': {
                    name: 'king',
                    stepX: 0,
                    stepY: 0,
                },
                'G': {
                    name: 'guard',
                    stepX: 1,
                    stepY: 0,
                },
                'E': {
                    name: 'elephant',
                    stepX: 2,
                    stepY: 0,
                },
                'H': {
                    name: 'horse',
                    stepX: 3,
                    stepY: 0,
                },
                'R': {
                    name: 'rook',
                    stepX: 4,
                    stepY: 0,
                },
                'C': {
                    name: 'canon',
                    stepX: 3,
                    stepY: 2,
                },
                'P': {
                    name: 'pawn',
                    stepX: 1,
                    stepY: 3,
                    isPawn: true,
                }
            },
        };
    };
    ;
    Config = __decorate([
        ccclass
    ], Config);
    return Config;
}(cc.Component));
exports.default = Config;

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
        //# sourceMappingURL=Config.js.map
        