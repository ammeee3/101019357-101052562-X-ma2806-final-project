//sprites
let playerSprite;
let tilemap = [];
let numDown = 10;
let numAcross = 7;
let tileSize = 50;
let textures = [];

let graphicMap = [
  [3, 3, 3, 4, 3, 3, 3], //1
  [3, 0, 0, 0, 1, 0, 3], //2
  [3, 0, 1, 2, 0, 0, 3], //3
  [3, 0, 0, 0, 0, 0, 3], //4
  [3, 2, 0, 0, 0, 2, 3], //5
  [3, 0, 1, 0, 0, 0, 3], //6
  [3, 0, 1, 2, 1, 0, 3], //7
  [3, 0, 0, 0, 0, 0, 3], //8
  [3, 2, 0, 0, 0, 2, 3], //9
  [3, 3, 3, 3, 3, 3, 3]  //10
]

let tileRules = [
  [3, 3, 3, 4, 3, 3, 3], //1
  [3, 0, 0, 0, 1, 0, 3], //2
  [3, 0, 1, 2, 0, 0, 3], //3
  [3, 0, 0, 0, 0, 0, 3], //4
  [3, 2, 0, 0, 0, 2, 3], //5
  [3, 0, 1, 0, 0, 0, 3], //6
  [3, 0, 1, 2, 1, 0, 3], //7
  [3, 0, 0, 0, 0, 0, 3], //8
  [3, 2, 0, 0, 0, 2, 3], //9
  [3, 3, 3, 3, 3, 3, 3]  //10
]


function preload() {
  textures[0] = loadImage("floor.png");
  textures[1] = loadImage("rock.png");
  textures[2] = loadImage("hole.png");
  textures[3] = loadImage("wall.png");
  textures[4] = loadImage("exit.png");
  playerSprite = loadImage("player.png");
}

function setup() {

}

function draw() {
  background(0);
  for (let across = 0; across < numAcross; across++) {
      for (let down = 0; down < numDown; down++) {
          tilemap[across][down].display(); 
          tilemap[across][down].debug(); 
      }
  }

  player.display();
  player.move();
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

function movePlayer() {
  case 'w':
    if (
      playerCurrentIndex
    )
}

//class Enemy{
  //constructor(sprite, x, y, size, size, speed){
    //this.sprite = sprite;
    // this.x = x;
    //this.y = y;
    //this.size - size;
    //this.speed - speed;
  //}
  //display() {
    //Image(this.sprite, this.x, this.y, this.size, this.size);
  //}
//}

