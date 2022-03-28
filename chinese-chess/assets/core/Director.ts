const { ccclass, property } = cc._decorator;

@ccclass
export default class Director extends cc.Component {

    @property(cc.Node)
    mainBoard: cc.Node = null;

    protected onLoad(): void {
    };

    protected start(): void {
        this.mainBoard.emit('INIT');
    };
}