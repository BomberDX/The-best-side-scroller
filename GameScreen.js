//
//var GameScreen = {
//    //Preload
//    preload : function() {
//        game.load.image('logo', '/assets/images/mission_bit_logo.png');
//        game.load.image('wall', '/assets/images/start.png')
//    },
//    
//    //Create
//    create: function () {
//        //General Setup
//        game.stage.backgroundColor = '#000000';
//        game.physics.startSystem(Phaser.Physics.ARCADE);
//        
//        //Create MB Sprite
//        this.mc = game.add.sprite(200, 400, 'logo');
//        game.physics.enable(this.mc, Phaser.Physics.ARCADE);
//        this.mc.body.immovable = true;
//        this.mc.body.collideWorldBounds = true;
//        
//        //Create Arrow Sprite
//        this.wall = game.add.sprite(500, 500, 'wall');
//        game.physics.enable(this.wall, Phaser.Physics.ARCADE);
//        this.wall.body.immovable = true;
//        
//        
//        //Keyboard
//        this.cursor = game.input.keyboard.createCursorKeys();
//        this.wasd = {
//            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
//            down: game.input.keyboard.addKey(Phaser.Keyboard.S),                                   left: game.input.keyboard.addKey(Phaser.Keyboard.A),
//            right: game.input.keyboard.addKey(Phaser.Keyboard.D),            
//        };
//
//    },
//    
//    //Update
//    update: function() {
//        game.physics.arcade.collide(this.mc, this.wall);
//        game.physics.arcade.collide(this.wall, this.mc);
//        
//        if (this.wasd.right.isDown) {
//            this.mc.body.velocity.x = 350;
//        } 
//        else if (this.wasd.left.isDown) {
//            this.mc.body.velocity.x = -350;
//        } 
//        else {
//            this.mc.body.velocity.x = 0;
//        }
//        
//        if (this.wasd.up.isDown){
//            this.mc.body.velocity.y = -350;
//        } 
//        else if (this.wasd.down.isDown) {
//            this.mc.body.velocity.y = 350;
//        } 
//        else {
//            this.mc.body.velocity.y = 0;
//        }
//    
//    },
//    render: function() {
//        game.debug.bodyInfo(this.mc, 16, 24);
//    }
//    
//};

//Defines main state
var GameScreen = {
    
    //function that executes at the beginning of the game
    //so we load our assets here
    preload: function() {
        //loads paddle image
        game.load.image('paddle', 'assets/paddle.png');
        
        //loads the brick sprite
        game.load.image('brick', 'assets/brick.png');
        
        //loads the ball sprite
        game.load.image('ball', 'assets/ball.png');
    },

    //function that's called after the preload function
    //where we setup the basics of the game by displaying sprites etc
    create: function() {
        //initializes physics system for the game
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //creates a variable that handles the arrow keys
        this.cursor = game.input.keyboard.createCursorKeys();
        
        //makes paddle appear at the bottom of the screen
        this.paddle = game.add.sprite(200, 400, 'logo');
        
        //enables the physics system for the paddle
        game.physics.arcade.enable(this.paddle);
        
        //makes sure the paddle doesn't move when it's hit by the ball
        this.paddle.body.immovable = true;
        
        //make it so the paddle can't leave the screen
        this.paddle.body.collideWorldBounds = true;
        
        //creates the ball
        this.ball = game.add.sprite(200, 300, 'ball');
        
        //enables the physics system for the ball
        game.physics.arcade.enable(this.ball);
        
        //add velocity to the ball
        this.ball.body.velocity.x = 200;
        this.ball.body.velocity.y = 200;
        
        //makes the ball bouncy
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.x = 1;
        this.ball.body.bounce.y = 1;
    
    },
    
    
    //function that is called 60 times per second
    //where we put the logic of the game
    update: function() {
        //if the right arrow is pressed, move to the right
        if (this.cursor.right.isDown) {
            this.paddle.body.velocity.x = 350;
        } else if (this.cursor.left.isDown) { //if the left arrow is pressed, move to the left
            this.paddle.body.velocity.x = -350;
        } else { //if neither is pressed, stop moving
            this.paddle.body.velocity.x = 0;
        }
        
        //make the paddle and the ball collidable with each other
        game.physics.arcade.collide(this.paddle, this.ball);
        
    }
};