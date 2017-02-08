
/**
 * Quiz Item
 */
class QuizItem extends Laya.Sprite{

    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public id: number;
    public matchId:number;
    public quiz: any;

    constructor( quiz: any ){
        super();
        this.quiz = quiz;
    }

    onClickQuizItem(): void {
        if(quizInstance.getLastSelected() == this ){
            console.log('Bingo! Cheers!');
        }
        quizInstance.setLastSelected(this)
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
		txt.color = "#ff0000";
		txt.bold = true;
		txt.leading = 5;

        txt.on('click', this, this.onClickQuizItem);
        this.addChild(txt);
    }

    public setId( id: number): void{
        this.id = id;
    }

    public setMatchId(id:number): void{
        this.matchId = id;
    }
}       