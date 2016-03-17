//Creates a TitleScreen object
var TitleScreen = {
    
    //preload method runs first, where we load our assets
    preload: function() {
        //Loads an image called logo
        game.load.image('logo', 'logo.jpg');
        game.load.image('start', 'Play_logo.jpg');
    }, //COMMAS ARE NECESSARY TO SEPARATE FUNCTIONS
    
    
    //The create method is run after the preload method
    //It is where we set up the basics of the game, what it looks like when we start the game
    
    create: function() {
        //Adds the image named 'logo' to location (290,100)
        this.add.image(65, 50, 'logo');
        
        //Adds a button with image 'logo' at location (200, 180) that calls the method startGame when it is clicked on
        
        this.add.button(280, 280, 'start', this.startGame, this);
        
        game.stage.backgroundColor = '#CCCFFF';
    },
    
    startGame: function() {
        //Start the state 'GameScreen', as defined in the directory
        this.state.start('GameScreen');
    }
    
};