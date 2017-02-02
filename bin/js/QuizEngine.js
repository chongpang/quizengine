/**
 * Game entry
 */
class QuizEngine {
    // json string including gama data and all configs
    constructor(data) {
        // parse input data
        this.quizData = QuizData.fromJSON(data);
        console.log(this.quizData);
        Laya.init(1025, 512);
        //把背景添加到舞台上显示出来
        var bg = new BackGround();
        Laya.stage.addChild(bg);
        //创建游戏信息UI
        this.quizInfo = new QuizInfo();
        //添加到舞台上
        Laya.stage.addChild(this.quizInfo);
    }
}
// {'gamaType':1, 'gamaData':{},'userId':'useridqwertyu58678','lrs':{'endpoint':'http://lrs.xueduoduo.com','credentials':'encrypt string'}
new QuizEngine('{"lrsConfig":{"endPoint":"http://www.xueduoduo.cn:6061","credential":"23456789:3456789567"},"quizType":1,"userId":"useridqwertyu58678","dataTable": [{"name": "taro", "like": "apple"}, {"name": "hoge", "like": "pc"}]}');
//# sourceMappingURL=QuizEngine.js.map