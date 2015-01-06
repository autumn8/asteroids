import {EventBus} from './EventBus';
let score;

export class Scoreboard extends PIXI.Text{
  constructor() {
    score = 0;
    super(score, {font: '20px Arial', fill : 'white'});
    this.position.set(10,10);
    EventBus.subscribe('destroy.asteroid', (asteroid) => this.increment(asteroid));
  }

  increment(asteroid) {
    score += 10;
    super.setText(score);
  }
}
