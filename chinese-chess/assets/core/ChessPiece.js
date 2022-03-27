const { init } = require("events");

const CONFIG = {
    TWEEN_TIME: 0.2,
    SELECT_SCALE: 1.3,
    DESELECT_SCALE: 1,
};

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        label: cc.Label,
    },

    onLoad() {
        this.node.init = this.init.bind(this);
        this.node.sprite = this.sprite.node;

        if (this.node) {
            this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
            this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
            this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
            this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
        }
    },

    init({ name }, shortName, chessSize) {
        this.node.chessName = shortName;
        this.node.fullName = name;
        this.label.string = shortName;

        this.node.setContentSize(chessSize, chessSize);
        this.sprite.node.setContentSize(chessSize, chessSize);
    },

    onMouseEnter() {
        if (this._tweenUnselect) this._tweenUnselect.stop();
        if (!this._tweenSelect) {
            this._tweenSelect = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME, { scale: CONFIG.SELECT_SCALE })
        }
        this._tweenSelect.start();
    },

    onMouseLeave() {
        if (this.isSelected) return;
        if (this._tweenSelect) this._tweenSelect.stop();
        if (!this._tweenUnselect) {
            this._tweenUnselect = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME, { scale: CONFIG.DESELECT_SCALE })
        }
        this._tweenUnselect.start();
    },

    onMouseDown() {
        if (this.isSelected) {
            this.isSelected = false;
            this.onMouseLeave();
            return;
        }
        if (!this._tweenHighlight) {
            this._tweenHighlight = cc.tween(this.sprite.node)
                .to(CONFIG.TWEEN_TIME / 2, { scale: CONFIG.DESELECT_SCALE })
                .to(CONFIG.TWEEN_TIME / 2, { scale: CONFIG.SELECT_SCALE })
        }
        this._tweenHighlight.start();
        this.isSelected = true;
    },

    onMouseUp() {
        if (!this.isSelected) return;
        const selectEvent = new cc.Event.EventCustom('CHESS_SELECT', true);
        selectEvent.chessName = this.node.chessName;
        selectEvent.side = this.node.parent.name === 'Top_side' ? 'top' : 'bot';
        this.scheduleOnce(() => {
            this.node.dispatchEvent(selectEvent);
        }, 0.5);
    },
});
