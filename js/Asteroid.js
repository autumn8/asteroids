import {WrappingSprite} from './WrappingSprite';
import {EventBus} from './EventBus';
import {game} from './game';

let player, bullets;

export class Asteroid extends WrappingSprite {
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
    if (this.hit(player)) {
      EventBus.publish('destroy.player');
      EventBus.publish('destroy.asteroid', this);
      return;
    }

    for(let bullet of bullets) {
      if (this.hit(bullet)) {
        EventBus.publish('destroy.asteroid', this);
        EventBus.publish('destroy.bullet', bullet);
        return;
      }
    }
    super.update(delta);
  }

  /** Basic bounding box collision detection */

  hit(object) {
    return (this.position.x - (this.width * .5) < object.position.x + (object.width * .5) &&
            this.position.x + this.width * .5 > object.position.x  - (object.width  * .5) &&
            this.position.y - (this.height * .5) < object.position.y + (object.height * .5) &&
            this.position.y  + (this.height * .5) > object.position.y - (object.height * .5));
  }
}
