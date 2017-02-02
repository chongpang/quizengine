/**
 * Info for UI
 */
class QuizInfo extends ui.QuizInfoUI {
    constructor() {
        super();
        this.pauseBtn.on('click', this, this.onPauseBtnClick);
        this.reset();
    }
    /**
     * reset
     */
    reset() {
        this.infoLabel.text = "";
        this.level(0);
        this.score(0);
    }
    onPauseBtnClick(e) {
        //阻止事件冒泡
        e.stopPropagation();
        //暂停游戏
        this.infoLabel.text = "游戏已暂停，任意地方恢复游戏";
        gameInstance.pause();
        Laya.stage.once("click", this, this.onStageClick);
    }
    onStageClick(e) {
        this.infoLabel.text = "";
        gameInstance.resume();
    }
    //显示关卡级别
    level(value) {
        this.levelLabel.text = "Level:" + value;
    }
    //显示积分
    score(value) {
        this.scoreLabel.text = "Score:" + value;
    }
}
//# sourceMappingURL=QuizInfo.js.map