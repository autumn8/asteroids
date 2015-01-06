let player, stageWidth, stageHeight, asteroids, bullets;

stageWidth = 1200;
stageHeight = 800;
asteroids = [];
bullets = [];

export var game = {

  get stageWidth() {
    return stageWidth
  },

  get stageHeight() {
    return stageHeight
  },

  get asteroids() {
    return asteroids
  },

  set asteroids(value) {
    asteroids = value
  },

  get bullets() {
    return bullets
  },

  set bullets(value) {
    bullets = value
  },

  set player(value) {
    player = value
  },

  get player() {
    return player
  }
};