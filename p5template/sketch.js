//sprites
let playerSprite;
let enemySprite;

function preload() {

}

function setup() {

}

function draw() {

}

class Player{
  constructor(sprite, x, y, sizeX, sizeY, speed){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.sizeX - sizeX;
    this.sizeY - sizeY;
    this.speed - speed;
  }
  display() {
    Image(this.sprite, this.x, this.y, this.sizeX, this.sizeY);
  }
}

class Enemy{
  constructor(sprite, x, y, size, size, speed){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.size - size;
    this.speed - speed;
  }
  display() {
    Image(this.sprite, this.x, this.y, this.size, this.size);
  }
}

