/**
 * Game entry
 */
class QuizEngine{

    // Data set. JSON string
    private dataJSON: string;
    private quizData: QuizData;
    private quizInfo: QuizInfo;
    private score: number;
    private level: number;
    private lastSelected: QuizItem;
    private quizItems: Array<QuizItem>;

    // json string including gama data and all configs
    constructor( data: string)
    {
        this.lastSelected = null;
        this.quizItems=[];
        // parse input data
        this.quizData = QuizData.fromJSON(data);

        console.log(this.quizData.getDataTable());
        console.log(this.quizData.getStrategies());
        console.log(this.quizData.getQuizType());

        Laya.init(512, 1025, Laya.WebGL);

        Laya.loader.load("res/atlas/quizengine.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);

        // Screen resolution mode
        Laya.stage.scaleMode = "fixedwidth";//"fixedwidth";//"showall";
        // Set align mode
        Laya.stage.alignH = "center";
        // Set creen mode
        Laya.stage.screenMode = "vertical";

        Laya.Stat.show(0, 50);
    }

    onLoaded(): void {
        // Add background to stage
        var bg: BackGround = new BackGround();
        Laya.stage.addChild(bg);

        // Create quiz ui
        this.quizInfo = new QuizInfo();
        // Add to stage
        Laya.stage.addChild(this.quizInfo);

        // create quiz items
        this.createQuizItems( this.quizData.getDataTable() );

        // Draw quiz items
        this.drawQuizItems();

        // Start
        this.restart();
    }

    createQuizItems( dataTable: any) :void{
        for(var i= 0; i< dataTable.length -1; i++){
            var quizItemQ = new QuizItem(dataTable[i].quiz);
            var quizItemA = new QuizItem(dataTable[i].answer);
            this.quizItems.push(quizItemQ);
            this.quizItems.push(quizItemA);
        }
    }

    drawQuizItems(): void{

        var minItemWidth :number = 100;
        var minItemHeigth :number = 60;
        var minItemInRow :number = 2;
        var minRowInStage: number = 10;
        var minItemPadding :number = 5;
        var minStagePadding :number = 80;
        var minStageMarginTop :number = 100;

        var xTemp :number = minStagePadding;
        var yTemp :number = minStageMarginTop;
        var rowIndex :number = 1;
        var currentRowItemIndex :number = 1;

        minItemInRow = (Laya.stage.width - minStagePadding * 2) / (minItemWidth + minItemPadding * 2);
        minRowInStage = (Laya.stage.height - minStageMarginTop) / (minItemHeigth + minItemPadding * 2);

        for (var i: number = 0; i < this.quizItems.length ; i++) {

            if( currentRowItemIndex > 1){
                xTemp = xTemp + minItemWidth + minItemPadding;
            }   

            if( rowIndex >  1 ){
                yTemp = yTemp + minItemHeigth + minItemPadding;
            }

            console.log(xTemp);
            console.log(yTemp);

            this.quizItems[i].init(xTemp , yTemp, minItemWidth, minItemHeigth);
            Laya.stage.addChild(this.quizItems[i]);

            currentRowItemIndex++;

            if(currentRowItemIndex > minItemInRow){
                currentRowItemIndex = 1;
                xTemp = minStagePadding;
                rowIndex++;
            }

            if(rowIndex > minRowInStage){
                break;
            }
        }       
    }
    
    restart(): void {
        // Reset quiz engine info
        this.score = 0;
        this.level = 0;
        this.quizInfo.reset();

        this.resume();
    }

    public pause(): void {
        
        // Stop engine loop
        Laya.timer.clear(this, this.onLoop);
        // Remove mouse event
        Laya.stage.off("mousemove", this, this.onMouseMove);
    }

    public resume(): void {

        // Create engine loop
        Laya.timer.frameLoop(1, this, this.onLoop);
        // Monitoring mouse event
        Laya.stage.on("mousemove", this, this.onMouseMove);
    }

    public setLastSelected(item: QuizItem): void{
        this.lastSelected = item;
    }

    public getLastSelected(): QuizItem{
        return this.lastSelected;
    }

    onLoop(): void {

    }

    onMouseMove(e: Laya.Event): void {

    }
}

// {'gamaType':1, 'gamaData':{},'userId':'useridqwertyu58678','lrs':{'endpoint':'http://lrs.xueduoduo.com','credentials':'encrypt string'}
var quizInstance: QuizEngine = new QuizEngine('{"strategies":{"quizType":1, "rules":[{"quiz":"answer"}]},"lrsConfig":{"endPoint":"http://www.xueduoduo.cn:6061","credential":"23456789:3456789567"},"quizType":1,"userId":"useridqwertyu58678","dataTable": [{"quiz": "3+4", "answer": "7"},{"quiz": "2+3", "answer": "5"}, {"quiz": "1+2", "answer": "3"}, {"quiz": "1+9", "answer": "10"}]}');