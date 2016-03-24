//creates a TitleScreen object
var TitleScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function() {
        //loads an image named 'logo'
        game.load.image('zombie', '/assets/images/zombie1.png');
        //loads an image named 'start'   
        game.load.image('start1', '/assets/images/start1.png');
    },
    
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        //adds an image with image 'logo' at (290, 100)
        this.zombie = this.add.image( 550, 100, 'zombie');
        this.zombie.scale.x = 0.5;
        this.zombie.scale.y = 0.5;
        //adds a button with image 'start' at location (200, 180) that calls the method startGame when it is clicked on
        this.add.button(710, 350, 'start1', this.startGame, this);
        var style = {font: '80px Arial', fill:'#FFFFFF', align: 'center'};
        game.add.text(650, 360, 'Start')
        
        
        //makes the background color of the whole screen periwinkle
        game.stage.backgroundColor = '#006600';
    
    },

    //this is a method we created and named ourselves
    //it will only run when it is told to by some other method
    startGame: function() {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('GameScreen');
    }
    
};