/// <reference path="../../node_modules/phaser/typescript/phaser.comments.d.ts" />

module Spellz.States {

    export class Menu extends Phaser.State {

        private startButton: Phaser.Button;
        private logo: Phaser.Sprite;
        private text: Phaser.Text;

        public preload() {}

        public create() {
            super.create();

            this.logo = this.game.add.sprite(this.world.width / 2, 200, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.game.add.tween(this.logo.scale).to({x: 1.1, y: 1.1}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

            var textMargin = 20;
            var textStyle = {font: '15px Arial', fill: '#ffffff', align: 'center'};
            this.text = this.game.add.text(this.world.width - textMargin, this.world.height - textMargin, 'Global Game Jam 2016', textStyle);
            this.text.anchor.setTo(1, 1);


            this.startButton = this.game.add.button(this.world.width / 2, 490, 'playButton', () => {this.game.state.start("teststate")}, this);
            this.startButton.anchor.setTo(0.5, 0.5);
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

