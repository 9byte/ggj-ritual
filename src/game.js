'use strict';

var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'Spellz');

game.state.add('Boot', new Spellz.States.Boot());
game.state.add('Preload', new Spellz.States.Preload());
game.state.add('Menu',  new Spellz.States.Menu());

game.state.start('Boot');