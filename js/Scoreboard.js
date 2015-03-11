import EventBus from './EventBus';
let score;

class Scoreboard extends PIXI.Text{
  constructor() {
    score = 0;
    super(score, {font: '38px Hyperspace', fill : 'white'});
    this.position.set(10,10);
    EventBus.subscribe('destroy.asteroid', (asteroid) => this.increment(asteroid));
  }

  increment(asteroid) {
    score += 1000;
    super.setText(score);
  }
}

export default Scoreboard;
