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
        var Preload = (function (_super) {
            __extends(Preload, _super);
            function Preload() {
                _super.apply(this, arguments);
                this.preloadBar = null;
                this.ready = false;
            }
            Preload.prototype.preload = function () {
                this.preloadBar = this.add.sprite(0, 100, 'preloadBar');
                //load everything else...
                this.load.image('playButton', 'assets/play.png');
                this.load.image('logo', 'assets/logo.png');
                this.load.image('spell1', 'assets/spell1.png');
                this.load.image('spell2', 'assets/spell2.png');
                this.load.image('spell3', 'assets/spell3.png');
                this.load.image('spell4', 'assets/spell4.png');
                this.load.image('player', 'assets/player.png');
            };
            Preload.prototype.create = function () {
                console.log('Preload state created');
                this.game.state.start('Menu');
            };
            Preload.prototype.update = function () { };
            return Preload;
        })(Phaser.State);
        States.Preload = Preload;
    })(States = Spellz.States || (Spellz.States = {}));
})(Spellz || (Spellz = {}));
//# sourceMappingURL=Preload.js.map