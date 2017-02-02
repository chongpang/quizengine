var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    class QuizInfoUI extends View {
        constructor() { super(); }
        createChildren() {
            super.createChildren();
            this.createView(ui.QuizInfoUI.uiView);
        }
    }
    QuizInfoUI.uiView = { "type": "View", "props": { "width": 480, "height": 852 }, "child": [{ "type": "Button", "props": { "y": 162, "x": 203, "var": "pauseBtn", "stateNum": "1", "skin": "quizengine/btn_pause.png" } }, { "type": "Label", "props": { "y": 55, "x": 119, "var": "levelLabel", "text": "Level: 1", "fontSize": 24, "font": "Microsoft YaHei", "color": "#ee6b04", "bold": true } }, { "type": "Label", "props": { "y": 54, "x": 268, "width": 25.353515625, "var": "scoreLabel", "text": "Score: 0", "height": 12, "fontSize": 24, "font": "Microsoft YaHei", "color": "#ee650b", "bold": true } }, { "type": "Label", "props": { "y": 282, "x": 171, "var": "infoLabel", "text": "Game Over!", "fontSize": 28, "font": "Microsoft YaHei", "color": "#fb510f", "bold": true } }] };
    ui.QuizInfoUI = QuizInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map