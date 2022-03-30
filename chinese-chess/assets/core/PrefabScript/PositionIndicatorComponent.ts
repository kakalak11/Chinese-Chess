const { ccclass, property } = cc._decorator;

@ccclass
export default class PositionIndicatorComponent extends cc.Component {

    protected onLoad(): void {

    };

    protected onEnable(): void {
        this.node.on('mousedown', this.onMouseDown, this);
        this.node.on('mouseup', this.onMouseUp, this);
    }

    protected onMouseDown(): void {
        const eventClick = new cc.Event.EventCustom('CLICK_POSITION', true);

        eventClick['position'] = this.node.getPosition();

        this.node.dispatchEvent(eventClick);
    };

    protected onMouseUp(): void {

    };

    protected onDisable(): void {
        this.node.off('mousedown', this.onMouseDown, this);
        this.node.off('mouseup', this.onMouseUp, this);
    }
}
