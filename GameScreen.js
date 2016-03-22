var GameScreen = {
    preload: function() {
        game.load.image('brick', 'assets/images/start1.png');
        game.load.image('ball', 'assets/images/start1.png');
        game.load.spritesheet('rm', '/assets/images/runningman.png', 64, 64, 10);
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.bricks = game.add.group();
        this.bricks.enableBody = true;
        
        this.zxc = game.add.sprite(40, 10, 'rm');

        this.zxc.animations.add('walk');

        this.zxc.animations.play('walk', 10, true);
        game.physics.arcade.enable(this.zxc);
        this.zxc.body.immovable = true;
        this.zxc.body.collideWorldBounds = true;
        
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
            this.zxc.body.velocity.x = 0;
            this.zxc.body.velocity.y = 0;
        if (this.cursor.right.isDown) {
            this.zxc.body.velocity.x = 350;
            this.zxc.anchor.setTo(.5,1);
            this.zxc.scale.x = -1;
        } if (this.cursor.left.isDown) { //if the left arrow is pressed, move to the left
            this.zxc.anchor.setTo(.5,1);
            this.zxc.scale.x = 1;
            this.zxc.body.velocity.x = -350;
        } if (this.cursor.up.isDown){ //if the up arrow is pressed, move upwards
            this.zxc.body.velocity.y = -350;
        } if (this.cursor.down.isDown) { //if the down arrow is pressed, move downwards
            this.zxc.body.velocity.y = 350;
        }

    },
    
    hit: function (ball, brick) {
        ball.body.velocity.x = 0
        ball.body.velocity.y = 0
    }
    
};