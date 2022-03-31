const { ccclass, property } = cc._decorator;

@ccclass
export default class BoardMapComp extends cc.Component {
    @property(cc.Node)
    boardMapHolder: cc.Node = null;

    callbackMouseClick: Function = null;
    protected onLoad(): void {
        this.node.on('INIT_CALLBACK', this.init, this);

        if(this.boardMapHolder){
            this.boardMapHolder.on('mousedown', this.onMouseDown, this);
            this.boardMapHolder.on('mouseup', this.onMouseUp, this);
        }
    };

    init(callback = () => { }) {
        this.callbackMouseClick = callback;
    };

    onMouseDown(event): void {
        const position = new cc.Vec2(event._x, event._y);
        if (!this.callbackMouseClick) return;
        this.callbackMouseClick(position);
    };

    onMouseUp(event): void {
        const eventClick = event;
    };
}
