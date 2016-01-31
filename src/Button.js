/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spellz;
(function (Spellz) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
            _super.call(this, game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
            this.events.onInputOver.add(function (btn) {
                btn.scale.x = 1.1;
                btn.scale.y = 1.1;
            });
            this.events.onInputOut.add(function (btn) {
                btn.scale.x = 1.0;
                btn.scale.y = 1.1;
            });
        }
        return Button;
    })(Phaser.Button);
    Spellz.Button = Button;
})(Spellz || (Spellz = {}));
//# sourceMappingURL=Button.js.map