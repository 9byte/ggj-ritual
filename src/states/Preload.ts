/// <reference path="../../node_modules/phaser/typescript/phaser.comments.d.ts" />

module Spellz.States {

    export class Preload extends Phaser.State {

        private preloadBar: Phaser.Sprite = null;
        private ready: boolean = false;

        public preload() {
            this.preloadBar = this.add.sprite(0, 100, 'preloadBar');

            //load everything else...
            this.load.image('playButton', 'assets/play.png');
            this.load.image('logo', 'assets/logo.png');
            this.load.image('spell1', 'assets/spell1.png');
            this.load.image('spell2', 'assets/spell2.png');
            this.load.image('spell3', 'assets/spell3.png');
            this.load.image('spell4', 'assets/spell4.png');
            this.load.image('player', 'assets/player.png');
            this.load.image('enemy', 'assets/enemy.png');

        }

        public create() {
            console.log('Preload state created');
            this.game.state.start('Menu');
        }

        public update() {}

    }
}