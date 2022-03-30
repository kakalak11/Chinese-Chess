const { ccclass, property } = cc._decorator;

@ccclass
export default class BoardManager extends cc.Component {
    @property(cc.Prefab)
    chessPiecePrefab: cc.Prefab = null;

    @property(cc.Node)
    topSideHolder: cc.Node = null;

    @property(cc.Node)
    bottomSideHolder: cc.Node = null;

    redColor: cc.Color;
    blueColor: cc.Color;
    chessPieces: cc.Node[];
    pawnIndex: number;
    selectedChess: cc.Node;
    targetChess: cc.Node;
    selectedPosition: cc.Vec2;
    _moveTween: cc.Tween;

    protected onLoad(): void {
        this.node.on('INIT', this.init, this);
        this.node.on('CHESS_SELECT', this.onChessSelect, this);
        this.node.on('CHESS_UNSELECT', this.onChessUnselect, this);
        this.node.on('CLICK', this.onClickPosition, this);

        this.redColor = cc.Color.RED;
        this.blueColor = cc.Color.BLUE;
    };

    protected init(): void {
        const { CHESS_LAYOUT, CHESS_INFO, CHESS_SIZE } = (this.node as any).config;
        this.chessPieces = [];

        //init for the bottom side
        for (let chessIndex = 0; chessIndex < CHESS_LAYOUT.length; chessIndex++) {
            const chessName = CHESS_LAYOUT[chessIndex];
            const chessPiece = cc.instantiate(this.chessPiecePrefab);
            chessPiece.parent = this.bottomSideHolder;
            (chessPiece as any).sprite.color = this.redColor;
            (chessPiece as any).init(CHESS_INFO[chessName], chessName, CHESS_SIZE);
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
            (chessPiece as any).sprite.color = this.blueColor;
            // chessPiece.rotation = 180;
            chessPiece.scaleY = -1;
            (chessPiece as any).init(CHESS_INFO[chessName], chessName, CHESS_SIZE);
            let position;
            if (chessIndex > 5) {
                position = this._getPosition(CHESS_INFO[chessName], false, true);
            } else {
                position = this._getPosition(CHESS_INFO[chessName], false);
            }
            chessPiece.setPosition(position);
            this.chessPieces.push(chessPiece);
        }
    };

    private _getPosition({ stepX = 0, stepY = 0, isPawn = false }, botSide, isReverse = false): cc.Vec2 {
        const { STEP, BORDER_LEFT_BOARD, BORDER_TOP_BOARD, BORDER_BOTTOM_BOARD } = (this.node as any).config;
        if (botSide) {
            if (isPawn) {
                if (!this.pawnIndex) this.pawnIndex = 0;
                const xPosition = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                const yPosition = BORDER_BOTTOM_BOARD + stepY * STEP;
                this.pawnIndex++;
                return cc.v2(xPosition, yPosition);
            }

            const xPosition = 0 + stepX * STEP;
            const yPosition = BORDER_BOTTOM_BOARD + stepY * STEP;
            if (isReverse) {
                return cc.v2(-xPosition, yPosition);
            } else {
                return cc.v2(xPosition, yPosition);
            }
        } else {
            if (isPawn) {
                if (!this.pawnIndex) this.pawnIndex = 0;
                const xPosition = BORDER_LEFT_BOARD + this.pawnIndex * STEP * 2;
                const yPosition = BORDER_TOP_BOARD - stepY * STEP;
                this.pawnIndex++;
                return cc.v2(xPosition, yPosition);
            }

            const xPosition = 0 + stepX * STEP;
            const yPosition = BORDER_TOP_BOARD - stepY * STEP;
            if (isReverse) {
                return cc.v2(-xPosition, yPosition);
            } else {
                return cc.v2(xPosition, yPosition);
            }
        }
    };

    protected onChessSelect(event): void {
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

    protected onChessUnselect(event): void {
        event.stopPropagation();
        this.selectedChess = null;
    };

    protected onClickPosition(event): void {
        if (!event && !event.position) return;
        event.stopPropagation();
        if (!this.selectedChess || this.targetChess) return;

        const { TIME_TWEEN_MOVE } = (this.node as any).config;

        this.selectedPosition = event.position;

        if (this.selectedPosition === this.selectedChess.getPosition()) {
            this.resetMove();
            return;
        }

        this._moveTween = cc.tween(this.selectedChess)
            .to(TIME_TWEEN_MOVE, { position: this.selectedPosition })
            .call(() => {
                this._moveTween = null;
                (this.selectedChess as any).unselect();
                (this.selectedChess as any).onMouseLeave();
            })
    }

    resetMove() {
        this.selectedChess = null;
        this.targetChess = null;
        this.selectedPosition = null;
    }
};
