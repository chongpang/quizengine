/**
 * Info for UI
 */
class QuizInfo extends ui.QuizInfoUI{
    constructor(){
        super();

        this.reset();
    }

    /**
     * reset
     */
    public reset() : void {
        this.infoLabel.text = "";
        this.level(1);
        this.score(0);
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