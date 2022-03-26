cc.Class({
    extends: cc.Component,

    properties: {
        chessPiecePrefab: cc.Prefab,
        topSideHolder: cc.Node,
        bottomSideHolder: cc.Node,
    },

    onLoad() {
        this.node.on('INIT_BOARD', this.initBoard, this);
        this.redColor = cc.Color.RED;
        this.blueColor = cc.Color.BLUE;
    },

    initBoard() {
        const { CHESS_LAYOUT, CHESS_INFO } = this.node.config;
        this.chessPieces = [];

        //init for the bottom side
        for (let chessIndex = 0; chessIndex < CHESS_LAYOUT.length; chessIndex++) {
            const chessName = CHESS_LAYOUT[chessIndex];
            const chessPiece = cc.instantiate(this.chessPiecePrefab);
            chessPiece.parent = this.bottomSideHolder;
            chessPiece.sprite.color = this.redColor;
            chessPiece.init(CHESS_INFO[chessName], chessName);
            let position;
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
        for (let chessIndex = 0; chessIndex < CHESS_LAYOUT.length; chessIndex++) {
            const chessName = CHESS_LAYOUT[chessIndex];
            const chessPiece = cc.instantiate(this.chessPiecePrefab);
            chessPiece.parent = this.topSideHolder;
            chessPiece.sprite.color = this.blueColor;
            chessPiece.rotation = 180;
            chessPiece.init(CHESS_INFO[chessName], chessName);
            let position;
            if (chessIndex > 5) {
                position = this._getPosition(CHESS_INFO[chessName], false, true);
            } else {
                position = this._getPosition(CHESS_INFO[chessName], false);
            }
            chessPiece.setPosition(position);
            this.chessPieces.push(chessPiece);
        }
    },

    _getPosition({ stepX = 0, stepY = 0, isPawn = false }, botSide, isReverse = false) {
        const { STEP, BORDER_LEFT_BOARD, BORDER_TOP_BOARD, BORDER_BOTTOM_BOARD } = this.node.config;
        if (botSide) {
            if (isPawn) {
                if (!this.pawnIndex) this.pawnIndex = 0;
                const xPosition = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                const yPosition = BORDER_BOTTOM_BOARD + stepY * STEP;
                this.pawnIndex++;
                return new cc.v2(xPosition, yPosition); Ï
            }

            const xPosition = 0 + stepX * STEP;
            const yPosition = BORDER_BOTTOM_BOARD + stepY * STEP;
            if (isReverse) {
                return new cc.v2(-xPosition, yPosition);
            } else {
                return new cc.v2(xPosition, yPosition);
            }
        } else {
            if (isPawn) {
                if (!this.pawnIndex) this.pawnIndex = 0;
                const xPosition = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                const yPosition = BORDER_TOP_BOARD - stepY * STEP;
                this.pawnIndex++;
                return new cc.v2(xPosition, yPosition); Ï
            }

            const xPosition = 0 + stepX * STEP;
            const yPosition = BORDER_TOP_BOARD - stepY * STEP;
            if (isReverse) {
                return new cc.v2(-xPosition, yPosition);
            } else {
                return new cc.v2(xPosition, yPosition);
            }
        }
    }
});
