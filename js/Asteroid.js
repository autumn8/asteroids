import WrappingSprite from './WrappingSprite';
import EventBus from './EventBus';
import game from './game';
import {explosionAudio} from './Audio';
let player, bullets;

class Asteroid extends WrappingSprite {
  constructor(size) {
    bullets = game.bullets;
    player = game.player;
    let randomNum = Math.ceil(Math.random() * 2);
    let texture = PIXI.Texture.fromImage(`images/asteroid${randomNum}.png`);
    super(texture);
    this.anchor.set(0.5, 0.5);
    let scale = Math.random() * 0.2 + 0.8 * (size * .5);
    let xPos = Math.random() * this.stageWidth;
    let yPos = Math.random() * this.stageHeight;
    this.position.set(xPos, yPos);
    this.scale.set(scale, scale);
    this.speed = {
      x: Math.random() * 4 -2,
      y: Math.random() * 4 -2
    };
  }

  update(delta) {
    //move and wrap object on screen
   super.update(delta);

    // check collisions with player
    if (this.hit(player)) {
      this.playExplosionSound();
      EventBus.publish('destroy.player');
      EventBus.publish('destroy.asteroid', this);
      return;
    }

    // check collisions with asteroid
    for(let bullet of bullets) if (this.hit(bullet)) {
      this.playExplosionSound();
      EventBus.publish('destroy.asteroid', this);
      EventBus.publish('destroy.bullet', bullet);
      return;
    }
  }

  playExplosionSound() {
    let sound = explosionAudio.cloneNode();
    sound.play();
  }

  // basic bounding box collision detection

  hit(object) {
    return (this.position.x - (this.width * .4) < object.position.x + (object.width * .4) &&
            this.position.x + this.width * .4 > object.position.x  - (object.width  * .4) &&
            this.position.y - (this.height * .4) < object.position.y + (object.height * .4) &&
            this.position.y  + (this.height * .4) > object.position.y - (object.height * .4));
  }
}

export default Asteroid;