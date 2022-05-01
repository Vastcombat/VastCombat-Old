var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 1000,
  /* physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }, */
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload () {
  this.load.setBaseURL('https://testing.vastcombat.cf');
  this.load.image('ground', '/assets/images/game/ground.png');
}

function create () {
  this.add.image(500, 500, 'ground');
}