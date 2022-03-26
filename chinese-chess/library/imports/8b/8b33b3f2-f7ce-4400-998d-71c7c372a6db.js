"use strict";
cc._RF.push(module, '8b33bPy985EAJmNccfDcqbb', 'BoardManager');
// core/BoardManager.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        chessPiecePrefab: cc.Prefab,
        topSideHolder: cc.Node,
        bottomSideHolder: cc.Node
    },

    onLoad: function onLoad() {
        this.node.on('INIT_BOARD', this.initBoard, this);
        this.redColor = cc.Color.RED;
        this.blueColor = cc.Color.BLUE;
    },
    initBoard: function initBoard() {
        var _node$config = this.node.config,
            CHESS_LAYOUT = _node$config.CHESS_LAYOUT,
            CHESS_INFO = _node$config.CHESS_INFO;

        this.chessPieces = [];

        //init for the bottom side
        for (var chessIndex = 0; chessIndex < CHESS_LAYOUT.length; chessIndex++) {
            var chessName = CHESS_LAYOUT[chessIndex];
            var chessPiece = cc.instantiate(this.chessPiecePrefab);
            chessPiece.parent = this.bottomSideHolder;
            chessPiece.sprite.color = this.redColor;
            chessPiece.init(CHESS_INFO[chessName], chessName);
            var position = void 0;
            if (chessIndex > 5) {
                position = this._getPosition(CHESS_INFO[chessName], true, true);
            } else {
                position = this._getPosition(CHESS_INFO[chessName], true);
            }
            chessPiece.setPosition(position);
            this.chessPieces.push(chessPiece);
        }

        this.pawnIndex = 0;

        //init for the top side
        for (var _chessIndex = 0; _chessIndex < CHESS_LAYOUT.length; _chessIndex++) {
            var _chessName = CHESS_LAYOUT[_chessIndex];
            var _chessPiece = cc.instantiate(this.chessPiecePrefab);
            _chessPiece.parent = this.topSideHolder;
            _chessPiece.sprite.color = this.blueColor;
            _chessPiece.rotation = 180;
            _chessPiece.init(CHESS_INFO[_chessName], _chessName);
            var _position = void 0;
            if (_chessIndex > 5) {
                _position = this._getPosition(CHESS_INFO[_chessName], false, true);
            } else {
                _position = this._getPosition(CHESS_INFO[_chessName], false);
            }
            _chessPiece.setPosition(_position);
            this.chessPieces.push(_chessPiece);
        }
    },
    _getPosition: function _getPosition(_ref, botSide) {
        var _ref$stepX = _ref.stepX,
            stepX = _ref$stepX === undefined ? 0 : _ref$stepX,
            _ref$stepY = _ref.stepY,
            stepY = _ref$stepY === undefined ? 0 : _ref$stepY,
            _ref$isPawn = _ref.isPawn,
            isPawn = _ref$isPawn === undefined ? false : _ref$isPawn;
        var isReverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var _node$config2 = this.node.config,
            STEP = _node$config2.STEP,
            BORDER_LEFT_BOARD = _node$config2.BORDER_LEFT_BOARD,
            BORDER_TOP_BOARD = _node$config2.BORDER_TOP_BOARD,
            BORDER_BOTTOM_BOARD = _node$config2.BORDER_BOTTOM_BOARD;

        if (botSide) {
            if (isPawn) {
                if (!this.pawnIndex) this.pawnIndex = 0;
                var _xPosition = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                var _yPosition = BORDER_BOTTOM_BOARD + stepY * STEP;
                this.pawnIndex++;
                return new cc.v2(_xPosition, _yPosition);Ï;
            }

            var xPosition = 0 + stepX * STEP;
            var yPosition = BORDER_BOTTOM_BOARD + stepY * STEP;
            if (isReverse) {
                return new cc.v2(-xPosition, yPosition);
            } else {
                return new cc.v2(xPosition, yPosition);
            }
        } else {
            if (isPawn) {
                if (!this.pawnIndex) this.pawnIndex = 0;
                var _xPosition3 = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                var _yPosition3 = BORDER_TOP_BOARD - stepY * STEP;
                this.pawnIndex++;
                return new cc.v2(_xPosition3, _yPosition3);Ï;
            }

            var _xPosition2 = 0 + stepX * STEP;
            var _yPosition2 = BORDER_TOP_BOARD - stepY * STEP;
            if (isReverse) {
                return new cc.v2(-_xPosition2, _yPosition2);
            } else {
                return new cc.v2(_xPosition2, _yPosition2);
            }
        }
    }
});

cc._RF.pop();