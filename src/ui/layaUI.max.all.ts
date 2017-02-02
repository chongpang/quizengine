
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class QuizInfoUI extends View {
		public pauseBtn:Laya.Button;
		public levelLabel:Laya.Label;
		public scoreLabel:Laya.Label;
		public infoLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":480,"height":852},"child":[{"type":"Button","props":{"y":162,"x":203,"var":"pauseBtn","stateNum":"1","skin":"quizengine/btn_pause.png"}},{"type":"Label","props":{"y":55,"x":119,"var":"levelLabel","text":"Level: 1","fontSize":24,"font":"Microsoft YaHei","color":"#ee6b04","bold":true}},{"type":"Label","props":{"y":54,"x":268,"width":25.353515625,"var":"scoreLabel","text":"Score: 0","height":12,"fontSize":24,"font":"Microsoft YaHei","color":"#ee650b","bold":true}},{"type":"Label","props":{"y":282,"x":171,"var":"infoLabel","text":"Game Over!","fontSize":28,"font":"Microsoft YaHei","color":"#fb510f","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.QuizInfoUI.uiView);
        }
    }
}
