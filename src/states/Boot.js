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
        var Boot = (function (_super) {
            __extends(Boot, _super);
            function Boot() {
                _super.apply(this, arguments);
            }
            Boot.prototype.preload = function () {
                this.load.image('preloadBar', 'assets/loadbar.png');
            };
            Boot.prototype.create = function () {
                console.log('Boot state created');
                //init game here
                this.game.state.start('Preload');
            };
            Boot.prototype.update = function () { };
            return Boot;
        })(Phaser.State);
        States.Boot = Boot;
    })(States = Spellz.States || (Spellz.States = {}));
})(Spellz || (Spellz = {}));
//# sourceMappingURL=Boot.js.map