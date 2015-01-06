import {WrappingSprite} from './WrappingSprite';
import {Flame} from './Flame';
import {KeyListener} from './keyListener';
import {Bullet} from './Bullet';
import {game} from './game';

const ACCELERATION = .5;
const FRICTION = 0.99;
const ROT_INC = .15;

var flame;

export class Player extends WrappingSprite{

  constructor() {
    flame = new Flame();
    var texture = PIXI.Texture.fromImage('images/starship.png');
    super(texture); //Constructor needs to call super method with texture argument
    this.addChild(flame);
    this.anchor.set(0.5, 0.5);
    this.pivot.set(0.25, 0.5);
    this.position.set(this.stageWidth/2, this.stageHeight/2);
    this.rotation = -3.14/2;
    this.speed = {
      x:0,
      y:0};
  }

  //update function moves ship and checks bounds to ensure ship remains on
  update(delta) {
    flame.update();
    super.update(delta);
  }

  move(delta) {
    if (KeyListener.UP) {
      this.speed.x += Math.cos(this.rotation) * ACCELERATION; //calculates x speed based on rotation of ship. rotation must be in radians so use deg2rad function to convert.
      this.speed.y += Math.sin(this.rotation) * ACCELERATION; //calculates y speed based on rotation of ship
    }
    else {
      this.speed.x *= FRICTION;
      this.speed.y *= FRICTION;
    }
    if (KeyListener.LEFT) {
      this.rotation -= ROT_INC * delta;
    }
    else if (KeyListener.RIGHT) {
      this.rotation += ROT_INC * delta;
    }
    super.move(delta);
  }
}