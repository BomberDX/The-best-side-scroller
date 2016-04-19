var WinScreen = {
    preload: function () {
        game.load.image = ('ch','/assets/images/character copy.png');
        game.load.image = ('yw', '/assets/images/youwin.png');
        game.load.image = ('bg', '/assets/images/background.png');
    },
    create: function () {
        this.wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D)
              
         };
        
        background = game.add.tileSprite(0, 0, 1000, 800, 'bg');
        floors = game.add.tileSprite(0, 548, 1000, game.width, 'floor');
        floors.physicsType = Phaser.SPRITE;
        game.physics.arcade.enable(floors);
        
        floors.collideWorldBounds = true;
        floors.body.immovable = true;
        floors.body.allowGravity = false;
        
        this.bg = game.add.image (0, 0, 'bg');
        this.yw = game.add.image (400, 400, 'yw');
        this.ch = game.add.image (500, 500, 'ch');
        this.text = game.add.text (600, 450, 'WOOHOO!! YOU WON!!');
        var style = {font: '100px Arial', fill:'#000000', align: 'center'};
    }
    
};
    