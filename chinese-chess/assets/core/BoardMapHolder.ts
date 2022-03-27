const { ccclass, property } = cc._decorator;

@ccclass
export default class BoardMapHolder extends cc.Component {
    @property(cc.Prefab)
    positionIndicatorPrefab: cc.Prefab = null;
    y: number;

    protected onLoad(): void {
        this.node.on('INIT', this.init, this);
    };

    protected init(): void {
        const { BOARD_FORMAT, BORDER_LEFT_BOARD, BORDER_TOP_BOARD, STEP } = (this.node as any).config;
        const BOARD_LENGTH_COLUMN = BOARD_FORMAT.length;
        const BOARD_LENGTH_ROW = BOARD_FORMAT.length[0];

        const startOffsetX = BORDER_LEFT_BOARD;
        const startOffsetY = BORDER_TOP_BOARD;
        this.y = 0;
        for (let i = 0; i < BOARD_LENGTH_COLUMN; i++) {
            let xStep = (i % BOARD_LENGTH_COLUMN) * STEP;
            if (xStep === -BORDER_LEFT_BOARD) {
                this.y++;
            }
            let yStep = this.y * STEP;
            const position = new cc.Vec2(xStep, yStep);

            const positionIndicatorNode = cc.instantiate(this.positionIndicatorPrefab);
            positionIndicatorNode.parent = this.node;
            positionIndicatorNode.setPosition(position);
        }


    };
}
