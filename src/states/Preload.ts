/// <reference path="../../node_modules/phaser/typescript/phaser.comments.d.ts" />

module Spellz.States {

    export class Preload extends Phaser.State {

        private preloadBar = null;
        private ready = false;

        public preload() {
            this.preloadBar = this.add.sprite(0, 100, 'preloadBar');

            //load everything else...

        }

        public create() {
            console.log('Preload state created');
            this.game.state.start('Menu');
        }

        public update() {}

    }
}