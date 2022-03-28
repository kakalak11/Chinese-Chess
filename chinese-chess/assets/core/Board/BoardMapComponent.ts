const { ccclass, property } = cc._decorator;

@ccclass
export default class BoardMapComponent extends cc.Component {
    @property(cc.Prefab)
    positionIndicatorPrefab: cc.Prefab = null;
    y: number;

    protected onLoad(): void {
        this.node.on('INIT', this.init, this);
    };

    protected init(): void {
        const { BOARD_FORMAT, BORDER_LEFT_BOARD, BORDER_TOP_BOARD, STEP } = (this.node as any).config;
        const BOARD_LENGTH_COLUMN = BOARD_FORMAT.length;
        const BOARD_LENGTH_ROW = BOARD_FORMAT[0];


        for (let col = 0; col < BOARD_LENGTH_COLUMN; col++) {
            for (let row = 0; row < BOARD_LENGTH_ROW; row++) {
                const xPos = BORDER_LEFT_BOARD + col * STEP;
                const yPos = BORDER_TOP_BOARD - row * STEP;

                const positionIndicatorNode = cc.instantiate(this.positionIndicatorPrefab);
                positionIndicatorNode.parent = this.node;
                positionIndicatorNode.setPosition(cc.v2(xPos, yPos));
            }
        }
    };
}
