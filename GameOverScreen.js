//creates a TitleScreen object
var GameOverScreen = {
    
    preload : function() {
        game.load.image('bg' , '/assets/images/game_background.png' );
    },
    
    create: function () {
        this.bg = game.add.image(0,0, 'bg');
    },
    
    update: function() {
    
    },

    startGame: function() {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('TitleScreen');
    }
    
};