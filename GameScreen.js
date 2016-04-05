var isFacingRight = true;

var GameScreen = {
    preload: function() {
        game.load.spritesheet('rm', '/assets/images/runningman.png', 64, 64, 10);
        game.load.spritesheet('mo', 'assets/images/marioWalk.png', 40, 34, 8);
        game.load.spritesheet('mm', 'assets/images/megamanrun.png',90, 104, 4);
        game.load.image('floor', 'assets/images/floor.jpg');
        game.load.image('bullet', 'assets/images/bullet.png');
    
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 2000;
        
        //Keyboard
        this.wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D)
              
         };
       
        spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spacebar.onDown.add(create_bullet, this);
        
        this.floor = game.add.sprite(0, game.height - 50, 'floor');
        this.floor.height = 50;
        this.floor.width = game.width;
        
        //bullet function
        
        
        
        function create_bullet() {
            
            this.bullet = game.add.sprite(this.zxc.x, this.zxc.y, 'bullet');

            game.physics.startSystem(Phaser.Physics.ARCADE);

            //  Our bullet group
            bullets = game.add.group();
            bullets.enableBody = true;
            bullets.physicsBodyType = Phaser.Physics.ARCADE;
            bullets.createMultiple(1, 'bullet');
            bullets.setAll('anchor.x', 0.5);
            bullets.setAll('anchor.y', 0.5);
            bullets.setAll('outOfBoundsKill', true);
            bullets.kill = function () {

            };
            bullets.setAll('checkWorldBounds', true);
        }
        
        game.physics.arcade.enable(this.floor);
        
        this.floor.body.immovable = true;
        
        this.floor.body.collideWorldBounds = true;
        
        this.zxc = game.add.sprite(40, 10, 'rm');

        game.physics.arcade.enable(this.zxc);
        this.zxc.animations.add('walk');
        this.zxc.animations.play('walk', 10, true);

        this.mro = game.add.sprite(1000, 400, 'mo');
        this.mgm = game.add.sprite(900, 200, 'mm');
        
        game.physics.arcade.enable(this.mro);
        game.physics.arcade.enable(this.mgm);
        
        this.mro.animations.add('walk2');
        this.mgm.animations.add('walk3');

        this.mro.animations.play('walk2', 8, true);
        this.mgm.animations.play('walk3', 4, true);
        
        this.zxc.body.collideWorldBounds = true;
        this.mro.body.collideWorldBounds = true;
        this.mgm.body.collideWorldBounds = true;
        

    },
    
    update: function() {        
        game.physics.arcade.collide(this.floor, this.zxc);
        game.physics.arcade.collide(this.floor, this.mro);
        game.physics.arcade.collide(this.floor, this.mgm);

        if (this.wasd.right.isDown) {
            this.zxc.body.velocity.x = 350;
            this.zxc.anchor.setTo(.5,1);
            this.zxc.scale.x = -1;
        } else if (this.wasd.left.isDown) { //if the left arrow is pressed, move to the left
            this.zxc.anchor.setTo(.5,1);
            this.zxc.scale.x = 1;
            this.zxc.body.velocity.x = -350;
        } else if (this.wasd.up.isDown){ //if the up arrow is pressed, move upwards
            this.zxc.body.velocity.y = -350;
        } else if (this.wasd.down.isDown) { //if the down arrow is pressed, move downwards
            
        
            this.zxc.body.velocity.y = 350;
        } else {
            this.zxc.body.velocity.x = 0;
        }
        
        
            
        
        if (this.mro.body.x <= game.world.width - 50 && isFacingRight) {
            this.mro.body.velocity.x = 400;//is going to right of screen going this fast
            this.mro.anchor.setTo(.5,1);//will flip to the left
            this.mro.scale.x = 1;//will flip to the left
        } else if (this.mro.body.x !== 0){//makes mario flip
            isFacingRight = false;//causes him to go left
            this.mro.anchor.setTo(.5,1);//will flip to the right
            this.mro.scale.x = -1;//will flip to the right
            this.mro.body.velocity.x = -400;//is going to the left of the screen going this fast
        } else {
            isFacingRight = true;
            
        }
        if (this.mgm.body.x <= game.world.width - 50 && isFacingRight) {
            this.mgm.body.velocity.x = 450;//is going to right of screen going this fast
            this.mgm.anchor.setTo(.5,1);//will flip to the left
            this.mgm.scale.x = 1;//will flip to the left
        } else if (this.mgm.body.x !== 0){//makes megaman flip
            isFacingRight = false;//causes him to go left
            this.mgm.anchor.setTo(.5,1);//will flip to the right
            this.mgm.scale.x = -1;//will flip to the right
            this.mgm.body.velocity.x = -450;//is going to the left of the screen going this fast
        } else {
            isFacingRight = true;
            
        }
//        this.mro.animations.add('walk');
//        this.mro.animations.play('walk', 10, true);
//        
//        game.physics.arcade.enable(this.mro);
//        
//        this.mro.body.immovable = true;
//        
//        this.mro.body.collideWorldBounds = true
//        
//        this.mro.anchor.setTo(.5,1);
//        this.mro.scale.x = 1;
//        this.mro.anchor.setTo(.5,1);
//        this.mro.scale.x = -1;
//        this.mro.body.velocity.x = 400;
//        this.mro.body.velocity.y = 400;

    }
    
};


