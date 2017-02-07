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

    // json string including gama data and all configs
    constructor( data: string)
    {

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

        // draw quiz items
        this.createQuizItems( this.quizData.getDataTable() );
        // Start
        this.restart();
    }

    createQuizItems( dataTable: any): void{

       var quizItem = new QuizItem(dataTable[0], Laya.stage.width / 2 , Laya.stage.height / 2);

       Laya.stage.addChild(quizItem);
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

    onLoop(): void {

    }

    onMouseMove(e: Laya.Event): void {

    }
}

// {'gamaType':1, 'gamaData':{},'userId':'useridqwertyu58678','lrs':{'endpoint':'http://lrs.xueduoduo.com','credentials':'encrypt string'}
var quizInstance: QuizEngine = new QuizEngine('{"strategies":{"quizType":1, "rules":[{"formular":"result"}]},"lrsConfig":{"endPoint":"http://www.xueduoduo.cn:6061","credential":"23456789:3456789567"},"quizType":1,"userId":"useridqwertyu58678","dataTable": [{"formular": "3+4", "result": "7"},{"formular": "2+3", "result": "5"}, {"formular": "1+2", "result": "3"}]}');