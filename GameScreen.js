var GameScreen = {
    preload: function() {
        game.load.image('brick', 'assets/images/start1.png');
        game.load.image('ball', 'assets/images/start1.png');
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.bricks = game.add.group();
        this.bricks.enableBody = true;
        
        for (var i = 0; i <5; i++) {
            for (var j = 0; j < 5; j++) {
                game.add.sprite(55+i*60, 55+j*35, 'brick', 0, this.bricks);
            }
        } 
        this.bricks.setAll('body.immovable', true);  
        
        this.ball = game.add.sprite(200, 300, 'ball');
        
        game.physics.arcade.enable(this.ball);
        
        this.ball.body.velocity.x = 200;
        this.ball.body.velocity.y = 200;

        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.x = 1;
        this.ball.body.bounce.y = 1;
    
    },
    update: function() {
        game.physics.arcade.collide(this.ball, this.bricks, this.hit, null, this);
    },
    
    hit: function (ball, brick) {
        ball.body.velocity.x = 0
        ball.body.velocity.y = 0
    }
    
};