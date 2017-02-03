class BackGround extends Laya.Sprite {
    //定义背景
    private bg1: Laya.Sprite;

    constructor() {
        super();
        this.init();
    }
    init(): void {
        //创建背景1
        this.bg1 = new Laya.Sprite();
        //加载并显示背景图
        this.bg1.loadImage("res/11_sea_bottom_game_background_envato.png");
        //把背景1放到容器内
        this.addChild(this.bg1);
    }
}