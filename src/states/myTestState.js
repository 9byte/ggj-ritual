'use strict';

Spellz.TestState = function () {
    this.spell_0 = null;
    this.spell_1 = null;
    this.spell_2 = null;
    this.spell_3 = null;
};

Spellz.TestState.prototype = {


    preload: function() {

    },
    create: function() {
        this.spell_0 = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
        this.spell_1 = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
        this.spell_2 = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
        this.spell_3 = this.game.input.keyboard.addKey(Phaser.Keyboard.I);

        this.spell_0.onDown.add(function() {this.addSpell(0)}, this);
        this.spell_1.onDown.add(function() {this.addSpell(1)}, this);
        this.spell_2.onDown.add(function() {this.addSpell(2)}, this);
        this.spell_3.onDown.add(function() {this.addSpell(3)}, this);
    },
    update: function() {

    },

    addSpell: function(spell) {
        console.log("Added spell", spell);
    }
};
