/**
 * Info for UI
 */
class QuizInfo extends ui.QuizInfoUI{
    constructor(){
        super();
        this.replayBtn.on("click", this, this.onReplay);
        this.reset();

        this.removeChild(this.replayBtn);
    }

    /**
     * reset
     */
    public reset() : void {
        this.infoLabel.text = "";
        this.level(1);
        this.score(0);
    }

    /**
     * reset
     */
    public onReplay(e: Laya.Event): void {
        //阻止事件冒泡
        e.stopPropagation();
        quizInstance.replay();

        this.removeChild(this.replayBtn);
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