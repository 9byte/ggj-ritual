/// <reference path="../../node_modules/phaser/typescript/phaser.comments.d.ts" />

module Spellz.States {

    export class Menu extends Phaser.State {

        private startButton: Phaser.Button;

        public preload() {}

        public create() {
            super.create();

            this.startButton = this.game.add.button(100, 100, 'playButton', () => {this.game.state.start("teststate")}, this);
            this.startButton.events.onInputOver.add((btn: Phaser.Button) => {
                btn.scale.x = 1.1;
                btn.scale.y = 1.1;
            });
            this.startButton.events.onInputOut.add((btn: Phaser.Button) => {
                btn.scale.x = 1.0;
                btn.scale.y = 1.0;
            });

        }

        public update() {
            console.log('menu update');
        }
    }
}

