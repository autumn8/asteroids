import KeyListener from './keyListener';

class Flame extends PIXI.MovieClip {
  constructor() {
    var textures = createTextures('flame', 0, 1);
    super(textures);
    this.position.set(-15,0);

    this.anchor.set(0.5, 0.5);
    this.anchor.y = 0.5;
    this.animationSpeed = 0.5;
    this.animating = false;
  }

  update() {
    //TODO tidy this up.
    if (KeyListener.UP && !this.animating) {
      this.play();
      this.animating = true;
    } else if(!KeyListener.UP && this.animating) {
      this.gotoAndStop(0);
      this.animating = false;
    }
  }
}

/**
 * Generates an array of textures/animation frames
 *
 * @method createTextures
 * @param image {String} The atlas image name
 * @param startFrame Animation start frame
 * @param endFrame Animation end frame
 * @returns {Array}
 */

function createTextures(image, startFrame, endFrame) {
  var textures = [];
  for (var i = startFrame; i <= endFrame; i++) {
    var frameNum = ("000" + i).slice(-4); //returns num with trailing zero's
    var texture = PIXI.Texture.fromFrame(image + frameNum);
    textures.push(texture);
  }
  return textures;
}

export default Flame;
