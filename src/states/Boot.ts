/// <reference path="../../node_modules/phaser/typescript/phaser.comments.d.ts" />

module Spellz.States {

    export class Boot extends Phaser.State {

        public preload() {
            this.load.image('preloadBar', 'assets/loadbar.png');
        }

        public create() {
            console.log('Boot state created');

            //init game here

            this.game.state.start('Preload');
        }

        public update() {}

    }
}