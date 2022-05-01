var config = {
  type: Phaser.AUTO,
  width: screen.availWidth,
  height: screen.availHeight,
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
  // this.load.image('ground', '/assets/images/game/ground.png');
}

function create () {
  Phaser.Tilemaps.Tilemap.height = 144;
  // this.add.image(500, 500, 'ground');
}