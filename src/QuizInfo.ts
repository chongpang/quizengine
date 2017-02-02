/**
 * Info for UI
 */
class QuizInfo extends ui.QuizInfoUI{
    constructor(){
        super();

        this.pauseBtn.on('click', this, this.onPauseBtnClick);

        this.reset();
    }

    /**
     * reset
     */
    public reset() : void {
        this.infoLabel.text = "";
        this.level(0);
        this.score(0);
    }

    onPauseBtnClick(e: Laya.Event): void {
        //阻止事件冒泡
        e.stopPropagation();
        //暂停游戏
        this.infoLabel.text = "游戏已暂停，任意地方恢复游戏";
    quizInstance.pause();
        Laya.stage.once("click", this, this.onStageClick)
    }
    
    onStageClick(e: Laya.Event): void {
        this.infoLabel.text = "";
        quizInstance.resume();
    }

    //显示关卡级别
    public level(value: number): void {
        this.levelLabel.text = "Level:" + value;
    }
  
    //显示积分
    public score(value: number): void {
        this.scoreLabel.text = "Score:" + value;
    }

}