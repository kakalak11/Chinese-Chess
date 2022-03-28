const { ccclass, property } = cc._decorator;

const CONFIG = {
    TWEEN_TIME: 0.2,
    SELECT_SCALE: 1.3,
    DESELECT_SCALE: 1,
};

@ccclass
export default class ChessPieceComponent extends cc.Component {
    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property(cc.Label)
    label: cc.Label = null;

    isSelected: boolean;
    _tweenUnselect: cc.Tween;
    _tweenSelect: cc.Tween;
    _tweenHighlight: cc.Tween;

    protected onLoad(): void {
        (this.node as any).init = this.init.bind(this);
        (this.node as any).sprite = this.sprite.node;

        if (this.node) {
            this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
            this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
            this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
            this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        this.node.on('RESET', this.reset, this);
    }

    private init({ name }, shortName, chessSize): void {
        (this.node as any).chessName = shortName;
        (this.node as any).fullName = name;
        this.label.string = shortName;

        this.node.setContentSize(chessSize, chessSize);
        this.sprite.node.setContentSize(chessSize, chessSize);
    };

    onMouseEnter() {
        if (this.isSelected) return;
        if (this._tweenUnselect) this._tweenUnselect.stop();
        if (!this._tweenSelect) {
            this._tweenSelect = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME, { scale: CONFIG.SELECT_SCALE })
        }
        this._tweenSelect.start();
    };

    onMouseLeave() {
        if (this.isSelected) return;
        if (this._tweenSelect) this._tweenSelect.stop();
        if (!this._tweenUnselect) {
            this._tweenUnselect = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME, { scale: CONFIG.DESELECT_SCALE })
        }
        this._tweenUnselect.start();
    };

    onMouseDown() {
        if (this.isSelected) {
            this.isSelected = false;
            this.onMouseLeave();
            const unselectEvent = new cc.Event.EventCustom('CHESS_UNSELECT', true);

            this.node.dispatchEvent(unselectEvent);
            return;
        }
        if (!this._tweenHighlight) {
            this._tweenHighlight = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME / 2, { scale: CONFIG.DESELECT_SCALE })
                .to(CONFIG.TWEEN_TIME / 2, { scale: CONFIG.SELECT_SCALE })
        }
        this._tweenHighlight.start();
        this.isSelected = true;
    };

    onMouseUp() {
        if (!this.isSelected) return;
        const selectEvent = new cc.Event.EventCustom('CHESS_SELECT', true);
        (selectEvent as any).chessName = (this.node as any).chessName;
        (selectEvent as any).side = this.node.parent.name === 'Top_side' ? 'top' : 'bot';

        this.node.dispatchEvent(selectEvent);
    };

    reset() {
        this.isSelected = null;
        this._tweenUnselect.start();
    };
};