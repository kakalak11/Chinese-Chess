// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    positionHolder: cc.Node = null;

    onLoad() {
        this.positionHolder.children.forEach((child) =>{
            child.on('mousedown', this.onMouseDown, this);
            child.on('mouseup', this.onMouseUp, this);
        });
    };

    onMouseDown(){
        this.node.dispatchEvent(new cc.Event.EventCustom('mousedown', true));
    }

    onMouseUp(){
        this.node.dispatchEvent(new cc.Event.EventCustom('mouseup', true));
    }
}
