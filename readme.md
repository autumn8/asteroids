### Asteroids: Pixi.js & ES6 Test Project

Asteroids Game prototype, developed with Pixi.js using ES6 and traceur.


## Installation

Install ES6 module loader, traceur and pixi.

    bower install

## About

Asteroid, Bullet and Player inherit from PIXI.Sprite.
Bullets and Asteroids are containers that inherit from DisplayObjectContainer, and that manage their respective child elements.
All display objects have 2 main methods, update and move. Update methods are called
from a central request animation frame (raf) handler.

The raf handler calculates a time difference between it and the previous raf and passes
this to all update functions in the form of a delta value which is used to
smooth animation values between frames.

Flame extends PIXI.MovieClip. createTextures util function generates the movieclip
texture from a spritesheet/json. Assets are loaded with:

    let assetsToLoader = ['images/flame.json'];

All classes that extend PIXI classes, need to call the super(texture) method in the constructor,
passing in the texture.