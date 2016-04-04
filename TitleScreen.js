<<<<<<< HEAD
//creates a TitleScreen object
var TitleScreen = {
    
@@ -34,4 +35,21 @@ var TitleScreen = {
        this.state.start('GameScreen');
    }
    
=======
var TitleScreen = {
    
    // the preload method runs first
    //it is were we load our assets
    preload: function(){
        game.load.image('logo', 'logo.jpg' );
    },
    create: function() {
            this.add.image(490, 300, 'logo');
            this.add.button(200, 180, 'logo', this.startGame, this);
            game.state.backgroundColor = '#CCCFFF';
        },
    startGame: function() {
        this.state.start('GameScreen')
    }
>>>>>>> origin/Sebastiaan
};