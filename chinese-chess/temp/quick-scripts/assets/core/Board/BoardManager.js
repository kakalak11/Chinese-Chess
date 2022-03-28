(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/core/Board/BoardManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c8548vO9JOOa1VgE+S3i6N', 'BoardManager', __filename);
// core/Board/BoardManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoardManager = /** @class */ (function (_super) {
    __extends(BoardManager, _super);
    function BoardManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chessPiecePrefab = null;
        _this.topSideHolder = null;
        _this.bottomSideHolder = null;
        return _this;
    }
    BoardManager.prototype.onLoad = function () {
        this.node.on('INIT', this.init, this);
        this.node.on('CHESS_SELECT', this.onChessSelect, this);
        this.node.on('CHESS_UNSELECT', this.onChessUnselect, this);
        this.node.on('CLICK', this.onClickPosition, this);
        this.redColor = cc.Color.RED;
        this.blueColor = cc.Color.BLUE;
    };
    ;
    BoardManager.prototype.init = function () {
        var _a = this.node.config, CHESS_LAYOUT = _a.CHESS_LAYOUT, CHESS_INFO = _a.CHESS_INFO, CHESS_SIZE = _a.CHESS_SIZE;
        this.chessPieces = [];
        //init for the bottom side
        for (var chessIndex = 0; chessIndex < CHESS_LAYOUT.length; chessIndex++) {
            var chessName = CHESS_LAYOUT[chessIndex];
            var chessPiece = cc.instantiate(this.chessPiecePrefab);
            chessPiece.parent = this.bottomSideHolder;
            chessPiece.sprite.color = this.redColor;
            chessPiece.init(CHESS_INFO[chessName], chessName, CHESS_SIZE);
            var position = void 0;
            if (chessIndex > 5) {
                position = this._getPosition(CHESS_INFO[chessName], true, true);
            }
            else {
                position = this._getPosition(CHESS_INFO[chessName], true);
            }
            chessPiece.setPosition(position);
            this.chessPieces.push(chessPiece);
        }
        this.pawnIndex = 0;
        //init for the top side
        for (var chessIndex = 0; chessIndex < CHESS_LAYOUT.length; chessIndex++) {
            var chessName = CHESS_LAYOUT[chessIndex];
            var chessPiece = cc.instantiate(this.chessPiecePrefab);
            chessPiece.parent = this.topSideHolder;
            chessPiece.sprite.color = this.blueColor;
            chessPiece.rotation = 180;
            chessPiece.init(CHESS_INFO[chessName], chessName, CHESS_SIZE);
            var position = void 0;
            if (chessIndex > 5) {
                position = this._getPosition(CHESS_INFO[chessName], false, true);
            }
            else {
                position = this._getPosition(CHESS_INFO[chessName], false);
            }
            chessPiece.setPosition(position);
            this.chessPieces.push(chessPiece);
        }
    };
    ;
    BoardManager.prototype._getPosition = function (_a, botSide, isReverse) {
        var _b = _a.stepX, stepX = _b === void 0 ? 0 : _b, _c = _a.stepY, stepY = _c === void 0 ? 0 : _c, _d = _a.isPawn, isPawn = _d === void 0 ? false : _d;
        if (isReverse === void 0) { isReverse = false; }
        var _e = this.node.config, STEP = _e.STEP, BORDER_LEFT_BOARD = _e.BORDER_LEFT_BOARD, BORDER_TOP_BOARD = _e.BORDER_TOP_BOARD, BORDER_BOTTOM_BOARD = _e.BORDER_BOTTOM_BOARD;
        if (botSide) {
            if (isPawn) {
                if (!this.pawnIndex)
                    this.pawnIndex = 0;
                var xPosition_1 = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                var yPosition_1 = BORDER_BOTTOM_BOARD + stepY * STEP;
                this.pawnIndex++;
                return cc.v2(xPosition_1, yPosition_1);
            }
            var xPosition = 0 + stepX * STEP;
            var yPosition = BORDER_BOTTOM_BOARD + stepY * STEP;
            if (isReverse) {
                return cc.v2(-xPosition, yPosition);
            }
            else {
                return cc.v2(xPosition, yPosition);
            }
        }
        else {
            if (isPawn) {
                if (!this.pawnIndex)
                    this.pawnIndex = 0;
                var xPosition_2 = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                var yPosition_2 = BORDER_TOP_BOARD - stepY * STEP;
                this.pawnIndex++;
                return cc.v2(xPosition_2, yPosition_2);
            }
            var xPosition = 0 + stepX * STEP;
            var yPosition = BORDER_TOP_BOARD - stepY * STEP;
            if (isReverse) {
                return cc.v2(-xPosition, yPosition);
            }
            else {
                return cc.v2(xPosition, yPosition);
            }
        }
    };
    ;
    BoardManager.prototype.onChessSelect = function (event) {
        event.stopPropagation();
        if (event.target === this.selectedChess && event.target !== null) {
            this.selectedChess.emit('RESET');
            this.selectedChess = null;
            return;
        }
        if (!this.selectedChess) {
            this.selectedChess = event.target;
            return;
        }
        if (!this.targetChess && !this.selectedPosition) {
            this.targetChess = event.target;
        }
    };
    ;
    BoardManager.prototype.onChessUnselect = function (event) {
        event.stopPropagation();
        this.selectedChess = null;
    };
    ;
    BoardManager.prototype.onClickPosition = function (event) {
        if (!event && !event.position)
            return;
        if (!this.selectedChess || this.targetChess)
            return;
        this.selectedPosition = event.position;
    };
    __decorate([
        property(cc.Prefab)
    ], BoardManager.prototype, "chessPiecePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], BoardManager.prototype, "topSideHolder", void 0);
    __decorate([
        property(cc.Node)
    ], BoardManager.prototype, "bottomSideHolder", void 0);
    BoardManager = __decorate([
        ccclass
    ], BoardManager);
    return BoardManager;
}(cc.Component));
exports.default = BoardManager;
;

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
        //# sourceMappingURL=BoardManager.js.map
        