var isFacingRight = true;
var isFacingRight2 = true;
var charaFacingRight = true;

var background;
var floors;

var bullets;


var GameScreen = {
    preload: function() {
        game.load.spritesheet('gr', 'assets/images/guy_walk_spritesheet.png', 58, 87, 8);
        game.load.spritesheet('mo', 'assets/images/marioWalk.png', 40, 34, 8);
        game.load.spritesheet('mm', 'assets/images/Screen Shot 2016-04-06 at 5.42.50 PM.png',106.8, 106, 5);
        game.load.image('floor', 'assets/images/floor.jpg');
        game.load.image('bullet', 'assets/images/bullet.png');
        game.load.image('pl', '/assets/images/platforms.png', 100, 100, 45);
        game.load.image('bg', '/assets/images/background.png', 1000, 100);
    },
    create: function() {
       
        //Keyboard
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
        

        this.jumpTimer = 0;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 2000;
        
        game.input.onDown.add(this.createBullet, this);
        
        
        //bullet function
        bullets = game.add.group();
        bullets.enableBody = true;
        
        this.grg = game.add.sprite(0, 10, 'gr');

        game.physics.arcade.enable(this.grg);
        this.grg.animations.add('walk');
        this.grg.animations.play('walk', 10, true);

        this.mro = game.add.sprite(1000, 400, 'mo');
        
        game.physics.arcade.enable(this.mro);
        this.mgm = game.add.sprite(900, 200, 'mm');
        game.physics.arcade.enable(this.mgm);
        
        this.pl = game.add.sprite(710, 200, 'pl');
        
        this.ts = game.add.sprite(410, 290, 'pl');
        
        this.io = game.add.sprite(95, 200, 'pl');
        
        this.la = game.add.sprite(95, 380, 'pl');
        
        
        this.ru = game.add.sprite(710, 380, 'pl');
        
        game.physics.arcade.enable(this.mro);
        game.physics.arcade.enable(this.mgm);
        game.physics.arcade.enable(this.pl);
        game.physics.arcade.enable(this.ts);
        game.physics.arcade.enable(this.io);
        game.physics.arcade.enable(this.la);
        game.physics.arcade.enable(this.ru);
        
        this.mro.animations.add('walk2');
        this.mgm.animations.add('walk3');

        this.mro.animations.play('walk2', 8, true);
        this.mgm.animations.play('walk3', 4, true);
        
        this.grg.body.collideWorldBounds = true;
        this.mro.body.collideWorldBounds = true;
        this.mgm.body.collideWorldBounds = true;
        
        this.pl.body.immovable = true;
        this.pl.body.collideWorldBounds = true;
        this.pl.height = 30;
        this.pl.width = 200;
        this.pl.body.allowGravity = false;
        this.pl.body.checkCollision.down = false;

        this.ts.body.immovable = true;
        this.ts.body.collideWorldBounds = true;
        this.ts.height = 30;
        this.ts.width = 200;
        this.ts.body.allowGravity = false;
        this.ts.body.checkCollision.down = false;
        
        this.io.body.immovable = true;
        this.io.body.collideWorldBounds = true;
        this.io.height = 30;
        this.io.width = 200;
        this.io.body.allowGravity = false;
        this.io.body.checkCollision.down = false;
        
        this.la.body.immovable = true;
        this.la.body.collideWorldBounds = true;
        this.la.height = 30;
        this.la.width = 200;
        this.la.body.allowGravity = false;
        this.la.body.checkCollision.down = false;
        
        this.ru.body.immovable = true;
        this.ru.body.collideWorldBounds = true;
        this.ru.height = 30;
        this.ru.width = 200;
        this.ru.body.allowGravity = false;
        this.ru.body.checkCollision.down = false;
        

        this.platforms = game.add.group();
        
        this.platforms.add(this.pl);
        this.platforms.add(this.ts);
        this.platforms.add(this.io);
        this.platforms.add(this.la);
        this.platforms.add(this.ru);


    },
    
    update: function() {        
        game.physics.arcade.collide(floors, this.grg);
        game.physics.arcade.collide(floors, this.mro);
        game.physics.arcade.collide(floors, this.mgm);
        game.physics.arcade.collide(this.platforms, this.grg);
        
        game.physics.arcade.collide(bullets, this.mgm, this.hit, null, this);
        
        game.physics.arcade.collide(bullets, this.mro, this.hit, null, this);
        
        background.tilePosition.x -= 2;
        floors.tilePosition.x -= 2;
        
        if (this.wasd.right.isDown) {
            charaFacingRight = true;
            this.grg.body.velocity.x = 350;
            this.grg.anchor.setTo(.5,1);
            this.grg.scale.x = 1;
        } else if (this.wasd.left.isDown) { //if the left arrow is pressed, move to the left
            charaFacingRight = false;
            this.grg.anchor.setTo(.5,1);
            this.grg.scale.x = -1;
            this.grg.body.velocity.x = -350;
        } else if (this.wasd.down.isDown) { //if the down arrow is pressed, move downwards
            this.grg.body.velocity.y = 350;
        } else {
            this.grg.body.velocity.x = 0;
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
        
        if (this.mgm.body.x <= game.world.width - 50 && isFacingRight2) {
            this.mgm.body.velocity.x = 450;//is going to right of screen going this fast
            this.mgm.anchor.setTo(.5,1);//will flip to the left
            this.mgm.scale.x = 1;//will flip to the left
        } else if (this.mgm.body.x !== 0){//makes megaman flip
            isFacingRight2 = false;//causes him to go left
            this.mgm.anchor.setTo(.5,1);//will flip to the right
            this.mgm.scale.x = -1;//will flip to the right
            this.mgm.body.velocity.x = -450;//is going to the left of the screen going this fast
        } else {
            isFacingRight2 = true;
            
        }
        
        if (this.wasd.up.isDown && game.time.now > this.jumpTimer) {     
            this.grg.body.velocity.y = -850;
            this.jumpTimer = game.time.now + 900;
        }
        
    },
    
    createBullet: function() {
        if (charaFacingRight) {    
            temp = game.add.sprite(this.grg.x+50, this.grg.y - 50, 'bullet', 0, bullets);
            temp.body.allowGravity = false;
            temp.body.velocity.x = 50; 
        } else {
            temp = game.add.sprite(this.grg.x-50, this.grg.y - 50, 'bullet', 0, bullets);
            temp.body.allowGravity = false;
            temp.body.velocity.x = -50; 
        }
        //  Our bullet group
            bullets.setAll('anchor.x', 0.5);
            bullets.setAll('anchor.y', 0.5);
            bullets.setAll('outOfBoundsKill', true);
            bullets.setAll('checkWorldBounds', true);
    },
    
    hit: function(chara, bullet) {
        chara.kill();
        bullet.kill();
    }
};
    

