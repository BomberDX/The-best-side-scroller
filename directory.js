//Initialize Phaser game with screen size 725 width x 450 height in the gameDiv tag
var game = new Phaser.Game(725, 450, Phaser.AUTO, 'gameDiv');

//adds the TitleScreen as a Phaser state to the game
game.state.add('TitleScreen', TitleScreen);

game.state.add('GameScreen', GameScreen);

game.state.start('TitleScreen');

//To add more states "game.state.add('what the state will be named, the object that the state is contained within);"

