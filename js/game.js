let player, stageWidth, stageHeight, asteroids, bullets;

stageWidth;
stageHeight;
asteroids = [];
bullets = [];
let game = {

  get stageWidth() {
    return stageWidth;
  },

  set stageWidth(value) {
    stageWidth = value;
  },

  get stageHeight() {
    return stageHeight;
  },

  set stageHeight(value) {
    stageHeight = value;
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

export default game;