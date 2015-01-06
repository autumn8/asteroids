import {game} from './game';

//Base class for wrapping sprites- sprites that automaticall wrap around to other side of screen when sprite moves off stage.
export class WrappingSprite extends PIXI.Sprite {
  constructor(texture) {
    super(texture);
    this.stageWidth = game.stageWidth;
    this.stageHeight = game.stageHeight;
  }

  update(delta) {
    this.move(delta);
    this.wrap();
  }

  move(delta) {
    this.x += this.speed.x * delta;
    this.y += this.speed.y * delta;
  }

  wrap() {
    if (this.x < -this.width / 2) this.x = this.stageWidth + this.width / 2;
    if (this.x > this.stageWidth + this.width / 2) this.x = -this.width / 2;
    if (this.y < -this.height / 2) this.y = this.stageHeight + this.height / 2;
    if (this.y > this.stageHeight + this.height / 2) this.y = -this.height / 2;
  }
}
