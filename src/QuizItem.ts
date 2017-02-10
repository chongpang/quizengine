
/**
 * Quiz Item
 */
class QuizItem extends Laya.Sprite{

    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public quizIndex: number;
    public matchId:number;
    public quiz: any;
    public txt: Laya.Text;

    constructor( quiz: any, quizIndex: number ){
        super();
        this.quiz = quiz;
        this.quizIndex = quizIndex;
    }

    onClickQuizItem(): void {
        if(quizInstance.getLastSelected() == this ){
            console.log('Same item clicked, do nothing!');
        }else{
            if(quizInstance.getLastSelected() != null){
                if(this.getQuizIndex() == quizInstance.getLastSelected().getQuizIndex()){
                    Laya.SoundManager.playSound("res/music/success.wav");
                    // hit
                    console.log('Bingo, you are right!');
                    Laya.stage.removeChild(quizInstance.getLastSelected());
                    quizInstance.updateHittedIndex();
                    Laya.stage.removeChild(this);
                    quizInstance.updateHittedIndex();
                    quizInstance.setLastSelected(null);

                    quizInstance.updateScore();

                    if(quizInstance.isFinish()){
                        console.log('Awsome, you win the game!');
                        Laya.SoundManager.playSound("res/music/win.wav");

                        quizInstance.quizInfo.addChild(quizInstance.quizInfo.replayBtn);
                    }

                    return;
                }else{
                    quizInstance.getLastSelected().txt.bgColor = "#87CEEB";
                    quizInstance.setLastSelected(null);
                    Laya.SoundManager.playSound("res/music/error.wav");
                    this.txt.bgColor = "#87CEEB";

                    return;
                }
            }else{
                Laya.SoundManager.playSound("res/music/click.wav");
                this.txt.bgColor = "#7CFC00";
            }
            quizInstance.setLastSelected(this)
            
        }
        
    }

    public init(x: number, y: number, width:number, height:number): void{

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var txt = new Laya.Text();
        txt.text = this.quiz;
	    //txt.width = 400;
		//自动换行
		txt.wordWrap = false;

		txt.align = "center";
		txt.fontSize = 60;
		txt.font = "Microsoft YaHei";
		txt.color = "#FFFFFF";
		txt.bold = true;
        txt.borderColor = "#BDB76B";
        txt.bgColor = "#87CEEB";
        txt.width = width;
        txt.stroke = 5;

        txt.on('click', this, this.onClickQuizItem);

        this.txt = txt;
        this.addChild(txt);
    }

    public getQuizIndex(): number{
        return this.quizIndex;
    }

    public setMatchId(id:number): void{
        this.matchId = id;
    }
}       