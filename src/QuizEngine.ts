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

        Laya.init(880, 1052, Laya.WebGL);

        Laya.loader.load("res/atlas/quizengine.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);

        //设置适配模式
        Laya.stage.scaleMode = "showall";
        //设置剧中对齐
        Laya.stage.alignH = "center";
        //设置横竖屏
        //Laya.stage.screenMode = "vertical";

        Laya.Stat.show(0, 50);
    }

    onLoaded(): void {
        //把背景添加到舞台上显示出来
        var bg: BackGround = new BackGround();
        Laya.stage.addChild(bg);

        //创建游戏信息UI
        this.quizInfo = new QuizInfo();
        //添加到舞台上
        Laya.stage.addChild(this.quizInfo);

        //开始
        this.restart();
    }

    restart(): void {
        //重置游戏数据
        this.score = 0;
        this.level = 0;
        this.quizInfo.reset();

        this.resume();
    }

       /**暂停 */
    public pause(): void {
        
        console.log("pause");

        //停止游戏主循环
        Laya.timer.clear(this, this.onLoop);
        //移除舞台的鼠标移动事件监听
        Laya.stage.off("mousemove", this, this.onMouseMove);
    }

    /**恢复 */
    public resume(): void {

        //创建游戏主循环
        Laya.timer.frameLoop(1, this, this.onLoop);
        //监听舞台的鼠标移动事件
        Laya.stage.on("mousemove", this, this.onMouseMove);
    }

    onLoop(): void {

    }

    onMouseMove(e: Laya.Event): void {
        //始终保持影响和鼠标位置一致

    }
}

// {'gamaType':1, 'gamaData':{},'userId':'useridqwertyu58678','lrs':{'endpoint':'http://lrs.xueduoduo.com','credentials':'encrypt string'}
var quizInstance: QuizEngine = new QuizEngine('{"strategies":{"quizType":1, "rules":[{"formular":"result"}]},"lrsConfig":{"endPoint":"http://www.xueduoduo.cn:6061","credential":"23456789:3456789567"},"quizType":1,"userId":"useridqwertyu58678","dataTable": [{"formular": "3+4", "result": "7"},{"formular": "2+3", "result": "5"}, {"formular": "1+2", "result": "3"}]}');