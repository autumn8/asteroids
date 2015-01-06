import {WrappingSprite} from './WrappingSprite';
import {EventBus} from './EventBus';
import {game} from './game';

const ACCELERATION = 15;
const STAGE_WIDTH = game.stageWidth;
const STAGE_HEIGHT = game.stageHeight;

let canvas, context;

export class Bullet extends WrappingSprite{
  constructor() {
    var texture = PIXI.Texture.fromCanvas(createCanvas());
    this.speed = {x:0, y:0};
    super(texture);
    this.anchor.set(-2, 0.5);
    this.lifeCount = 0;
    this.rotation = game.player.rotation;
  }

  update(delta) {
    if (this.lifeCount > 40) return this.destroy();
    this.lifeCount++;
    super.update(delta);
  }

  destroy() {
    EventBus.publish('destroy.bullet', this);
  }

  move(delta) {
    this.speed.x = Math.cos(this.rotation) * ACCELERATION; //calculates x speed based on rotation of ship. rotation must be in radians so use deg2rad function to convert.
    this.speed.y = Math.sin(this.rotation) * ACCELERATION; //calculates y speed based on rotation of ship
    super.move(delta);
  }
}

function createCanvas() {
  canvas = document.createElement('canvas');
  canvas.width = 6;
  canvas.height = 2;
  context = canvas.getContext('2d');
  context.fillStyle = 'white';
  context.fillRect(0,0,6,2);
  return canvas;
}