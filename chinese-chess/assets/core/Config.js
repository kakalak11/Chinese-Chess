cc.Class({
    extends: cc.Component,

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.config = {
            CHESS_SIZE: 30,
            STEP: 60,
            CELL_SIZE: 60,
            BORDER_LEFT_BOARD: -240,
            BORDER_RIGHT_BOARD: 240,
            BORDER_TOP_BOARD: 270,
            BORDER_BOTTOM_BOARD: -270,
            INIT_POSITION: new cc.v2(0, -270),
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
        }
    },

    start() {

    },

    // update (dt) {},
});
