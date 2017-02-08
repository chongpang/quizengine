
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class QuizInfoUI extends View {
		public levelLabel:Laya.Label;
		public scoreLabel:Laya.Label;
		public infoLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":480,"stateNum":"1","height":852},"child":[{"type":"Label","props":{"y":57,"x":128,"width":109.296875,"var":"levelLabel","text":"Level: 1","height":32,"fontSize":32,"font":"Microsoft YaHei","color":"#f4eae2","bold":true}},{"type":"Label","props":{"y":56,"x":256,"width":121,"var":"scoreLabel","text":"Score: 0","height":38,"fontSize":32,"font":"Microsoft YaHei","color":"#f6ece6","bold":true}},{"type":"Label","props":{"y":296,"x":59,"width":364,"var":"infoLabel","text":"Game Over!","height":28,"fontSize":28,"font":"Microsoft YaHei","color":"#fb510f","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.QuizInfoUI.uiView);
        }
    }
}
