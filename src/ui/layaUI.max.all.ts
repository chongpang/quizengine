
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class QuizInfoUI extends View {
		public levelLabel:Laya.Label;
		public scoreLabel:Laya.Label;
		public infoLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":480,"stateNum":"1","height":852},"child":[{"type":"Label","props":{"y":55,"x":119,"var":"levelLabel","text":"Level: 1","fontSize":24,"font":"Microsoft YaHei","color":"#ee6b04","bold":true}},{"type":"Label","props":{"y":54,"x":268,"width":25.353515625,"var":"scoreLabel","text":"Score: 0","height":12,"fontSize":24,"font":"Microsoft YaHei","color":"#ee650b","bold":true}},{"type":"Label","props":{"y":296,"x":59,"width":364,"var":"infoLabel","text":"Game Over!","height":28,"fontSize":28,"font":"Microsoft YaHei","color":"#fb510f","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.QuizInfoUI.uiView);
        }
    }
}
