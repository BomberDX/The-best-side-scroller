<<<<<<< HEAD
// Initialize Phaser game with screen size 650 x 480 in the gameDiv tag
var game = new Phaser.Game(800, 580, Phaser.AUTO, 'gameDiv');

//adds the TitleScreen object as a Phaser state to the game
game.state.add('TitleScreen', TitleScreen);

//adds the GameScreen object as a Phaser state to the game
game.state.add('GameScreen', GameScreen);

//to add more states
//game.state.add('what the state will be named', the object that the state is contained within)

//begins the game at the TitleScreen state
=======
//Initialize Phaser game with screen size 640 x 480 in the gameDiv
var game = new Phaser.Game(1420, 700, Phaser.AUTO, 'gameDiv');

//adds the TitleScreen as a Phaser stare to the game
game.state.add('TitleScreen', TitleScreen);

game.state.add('GameScreen', GameScreen);

>>>>>>> origin/Sebastiaan
game.state.start('TitleScreen');