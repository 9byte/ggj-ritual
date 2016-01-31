/// <reference path="../../node_modules/phaser/typescript/phaser.comments.d.ts" />

module Spellz.States {

    export class Menu extends Phaser.State {

        preload() {}
        create() {
            this.game.state.start("teststate");
        }
        update() {
            console.log('menu update');
        }

    }
}

