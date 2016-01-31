/// <reference path="../../node_modules/phaser/typescript/phaser.comments.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spellz;
(function (Spellz) {
    var States;
    (function (States) {
        var Menu = (function (_super) {
            __extends(Menu, _super);
            function Menu() {
                _super.apply(this, arguments);
            }
            Menu.prototype.preload = function () { };
            Menu.prototype.create = function () {
                var _this = this;
                _super.prototype.create.call(this);
                this.startButton = this.game.add.button(100, 100, 'playButton', function () { _this.game.state.start("teststate"); }, this);
                this.startButton.events.onInputOver.add(function (btn) {
                    btn.scale.x = 1.1;
                    btn.scale.y = 1.1;
                });
                this.startButton.events.onInputOut.add(function (btn) {
                    btn.scale.x = 1.0;
                    btn.scale.y = 1.0;
                });
            };
            Menu.prototype.update = function () {
                console.log('menu update');
            };
            return Menu;
        })(Phaser.State);
        States.Menu = Menu;
    })(States = Spellz.States || (Spellz.States = {}));
})(Spellz || (Spellz = {}));
//# sourceMappingURL=Menu.js.map