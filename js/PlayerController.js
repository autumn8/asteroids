import game from './game';
import Player from './Player';
import EventBus from './EventBus';

class PlayerController {
  constructor() {
    this.numLives = 3;
    EventBus.subscribe('destroy.player', () => this.onDestroy());
    this.createPlayer();
  }

  onDestroy() {
    console.log('destroy player');
    this.player.init();
  }

  createPlayer() {
    this.player = new Player();
    game.stage.addChild(this.player);
    game.player = this.player;
  }

  update(delta) {
    this.player.update(delta);
  }
}

export default PlayerController;