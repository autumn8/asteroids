import {Bullet} from './Bullet';
import {EventBus} from './EventBus';
import {game} from './game';

let stage, bullets;

export class Bullets extends PIXI.DisplayObjectContainer{
  constructor() {
    super();
    game.bullets = this.children;
    EventBus.subscribe('destroy.bullet', (bullet) => this.onDestroy(bullet));
    window.addEventListener('keydown', e => this.onKeyDown(e));
  }

  onDestroy(bullet) {
    this.removeChild(bullet);
  }

  onKeyDown(e) {
    if (e.keyCode === 32) this.createBullet();
  }

  update(delta) {
    for (let bullet of this.children) {
      bullet.update(delta);
    }
  }

  createBullet(){
    let bullet = new Bullet();
    bullet.position.set(10,10);
    this.addChild(bullet);
    bullet.position.set(game.player.x, game.player.y);
  }
}