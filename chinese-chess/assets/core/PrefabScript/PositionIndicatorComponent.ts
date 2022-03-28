const { ccclass, property } = cc._decorator;

@ccclass
export default class PositionIndicatorComponent extends cc.Component {

    protected onLoad(): void {
        this.node.on('mousedown', this.onMouseDown, this);
        this.node.on('mouseup', this.onMouseUp, this);
    };

    protected onMouseDown(): void {
        const eventClick = new cc.Event.EventCustom('CLICK', true);

        eventClick['position'] = this.node.getPosition();

        this.node.dispatchEvent(eventClick);
    };

    protected onMouseUp(): void {

    };
}
