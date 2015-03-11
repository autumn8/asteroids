import Asteroid from './Asteroid';
import EventBus from './EventBus';
import game from './game';

let numAsteroids, asteroids, stage, bullets, player, destroy;

//All asteroids are added to this display object container.It behaves like an intelligent array so we can easily check for collisions and remove the asteroid when necessary

class Asteroids extends PIXI.DisplayObjectContainer{
  constructor() {
    super();
    EventBus.subscribe('destroy.asteroid', (asteroid) => this.onDestroy(asteroid));
    numAsteroids = 6;
    this.createAsteroids();
  }

  onDestroy(asteroid) {
    this.removeChild(asteroid);
    //this.createAsteroids(asteroid.size - 1);
  }

  update(delta) {
    for(let asteroid of this.children) {
      asteroid.update(delta);
    }
  }

  createAsteroids() {
    for (let i = 0; i < numAsteroids; i++) {
      let asteroid =  new Asteroid(3);
      this.addChild(asteroid);
    }
  }
}

export default Asteroids;
