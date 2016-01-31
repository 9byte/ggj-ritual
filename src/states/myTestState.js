'use strict';

Spellz.TestState = function () {
    this.spell_0 = null;
    this.spell_1 = null;
    this.spell_2 = null;
    this.spell_3 = null;
    this.cast = null;
    this.playerItem = null;
    this.playerSpeed = 5;

    this.spellStack = [];
};

Spellz.TestState.prototype = {


    preload: function() {

    },
    create: function() {
        game.world.setBounds(0,0, 800, 600);

        this.spell_0 = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
        this.spell_1 = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
        this.spell_2 = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
        this.spell_3 = this.game.input.keyboard.addKey(Phaser.Keyboard.I);
        this.cast = this.game.input.keyboard.addKey(Phaser.Keyboard.O);

        this.spell_0.onDown.add(function() {this.addSpell(0)}, this);
        this.spell_1.onDown.add(function() {this.addSpell(1)}, this);
        this.spell_2.onDown.add(function() {this.addSpell(2)}, this);
        this.spell_3.onDown.add(function() {this.addSpell(3)}, this);
        this.cast.onDown.add(function() {this.doCast()}, this);
        this.playerItem = game.add.sprite(400, 500, "spell2");
        this.playerItem.anchor.setTo(0.5, 0.5);
    },
    update: function() {
        var keyboard = game.input.keyboard;
        if (keyboard.isDown(Phaser.Keyboard.LEFT)||keyboard.isDown(Phaser.Keyboard.A))
        {
            this.playerItem.x -= this.playerSpeed;
            this.playerItem.angle = -15;
        }
        else if (keyboard.isDown(Phaser.Keyboard.RIGHT)||keyboard.isDown(Phaser.Keyboard.D))
        {
            this.playerItem.x += this.playerSpeed;
            this.playerItem.angle = 15;
        }
        else
        {
            this.playerItem.rotation = 0;
        }
    },

    addSpell: function(spell) {
        this.spellStack.push(spell);
        console.log("Added spell", spell);
    },

    doCast: function() {
        var isTestspell = this.checkIsTestSpell(this.spellStack);
        this.spellStack = [];
        if(isTestspell) {
            console.log("YOU HAVE CAST. A WINNER IS YOU!");
        }
    },

    checkIsTestSpell: function(items) {
        return items[0] === 0 && items[1] === 1 && items[2];
    }

};
