'use strict';

var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'Spellz');

var testState = new Spellz.TestState();

game.state.add("teststate", testState);
game.state.start("teststate");
