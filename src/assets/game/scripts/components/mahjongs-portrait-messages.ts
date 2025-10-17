import { _decorator } from "cc";
import { PortraitCascadingMessages } from "db://shared-cascading-slot/components/portrait/portrait-cascading-messages";
const { ccclass, property } = _decorator;

@ccclass
export class MahjongsPortraitMessages extends PortraitCascadingMessages {
    renderImgForRichText() {
        return `<img src="symbol-13" width=100 height=100 align=center />`;
    }
}
