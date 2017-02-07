
/**
 * Quiz Item
 */
class QuizItem extends Laya.Sprite{

    public x: number;
    public y: number;

    constructor(item: any, x: number, y: number){
        super();

        this.x = x;
        this.y = y;
        this.init(item);
    }

    onClickQuizItem(): void {
        console.log('clicked on item!');
    }

    public init( item: any ): void{

        var txt = new Laya.Text();
        txt.text = item.formular;
	    //txt.width = 400;
		//自动换行
		txt.wordWrap = false;

		txt.align = "center";
		txt.fontSize = 80;
		txt.font = "Microsoft YaHei";
		txt.color = "#ff0000";
		txt.bold = true;
		txt.leading = 5;

        this.height = 20;
        this.width = 80;

        txt.on('click', this, this.onClickQuizItem);

        this.addChild(txt);

    }
}       