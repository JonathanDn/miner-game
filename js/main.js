
var player;

var mainState = {
	preload: function() {
		game.load.image('dirt', 'assets/mine-background.png');
		// 6 is the number of frames in the spritesheet - has to be exact / less not more.
		game.load.spritesheet('miner', 'assets/miner.png', 42, 40, 6);
	},

	create: function() {
		game.add.sprite(0, 0, 'dirt');

		player = game.add.sprite(40, 10, 'miner');

		player.scale.setTo(1.2, 1.2)

		player.animations.add('walk', [0, 1, 2, 3, 4, 5], true);
		player.animations.add('idle', [0], true);

	},

	update: function() {
		// Set the FPS
		player.animations.play('walk', 10, true);

	},
};


// Init game:
var game = new Phaser.Game(600,700, Phaser.CANVAS);
game.state.add('main', mainState);
game.state.start('main');