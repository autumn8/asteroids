import PlayerController from './PlayerController';
import game from './game';
import Bullets from './Bullets';
import Asteroids from './Asteroids';
import Scoreboard from './Scoreboard';
import Soundtrack from './Soundtrack';

let stage, stageWidth, stageHeight, renderer, prevTime, currentTime, delta, playerController, asteroids, loader, bullets, scoreboard, soundtrack, numLives;

loadAssets();

function onAssetsLoaded() {
  game.stageWidth = window.innerWidth;
  game.stageHeight = window.innerHeight;
  init();
  createStage();
  createPlayerController();
  createBullets();
  createAsteroids();
  createScoreboard();
  update();
}

function init() {
  asteroids = [];
  currentTime = Date.now();
  prevTime = currentTime;
  delta = 0;
  soundtrack = new Soundtrack();
}

function createBullets() {
  bullets = new Bullets();
  stage.addChild(bullets);
}

function createAsteroids() {
  asteroids = new Asteroids();
  stage.addChild(asteroids);
}

function createScoreboard() {
  scoreboard = new Scoreboard();
  stage.addChild(scoreboard);
}

function loadAssets() {
  let assetsToLoader = ['images/flame.json'];
  loader = new PIXI.AssetLoader(assetsToLoader);
  loader.onComplete = onAssetsLoaded;
  loader.load();
}

function createPlayerController() {
  playerController = new PlayerController();
}

function createStage() {
  stage = new PIXI.Stage(0x000000);
  stageWidth = game.stageWidth;
  stageHeight = game.stageHeight;
  renderer = new PIXI.WebGLRenderer(stageWidth,stageHeight);
  document.body.appendChild(renderer.view);
  game.stage = stage;
}

function update() {
  currentTime = Date.now();
  delta = (currentTime - prevTime) / 32;
  playerController.update(delta);
  asteroids.update(delta);
  bullets.update(delta);
  renderer.render(stage);
  requestAnimationFrame(update);
  prevTime = currentTime;
}