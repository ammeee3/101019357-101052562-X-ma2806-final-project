//sprites
let player;
let heart;
let playerSprites; {};
let playerSpeed = 5;
let tileSize = 75;
let playerSize = tileSize;
let tilemap = [];
let numDown = 10;
let numAcross = 7;
let textures = [];
let lives = 3;



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
];

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

function resetGame() {
  lives = 3
  player = new Player(playerSprite, 3, 8, tileSize, playerSpeed, tileSize, tileRules);
}

function preload() {
  textures[0] = loadImage("floor.png");
  textures[1] = loadImage("rock.png");
  textures[2] = loadImage("hole.png");
  textures[3] = loadImage("wall.png");
  textures[4] = loadImage("exit.png");
  heart = loadImage("heart.png")

  
  playerSprite = loadImage("player.png");
  left: loadImage("left.png")
  right: loadImage("right.png")
  
}

function setup() {
  createCanvas(525, 850); //size of game
  //lives = 3; //player starts with 3 lives
  
  let tileID = 0; 

  for (let across = 0; across < numAcross; across++) {
      tilemap[across] = [];
      for (let down = 0; down < numDown; down++) {
        let x = across * tileSize;
        let y = down * tileSize;
        let textureNum = graphicMap[down][across];

          tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID);

          tileID++;
      }
  }

  player = new Player(playerSprite, 3, 8, tileSize, playerSpeed, tileSize, tileRules); //spawns new player in tile number 38
}

function draw() {
  background(255);
  for (let across = 0; across < numAcross; across++) {
      for (let down = 0; down < numDown; down++) {
          tilemap[across][down].display(); 
          tilemap[across][down].debug(); 
      }
  }
 
  player.display();
  player.move();
  currentLives();
  
}

function keyPressed() {
  player.setDirection();
}

function currentLives(){ //displays how many lives are left
  textSize(40);
  fill(25);
  text("Lives:", 10, 760)
    for (let i = 0; i < lives; i++){
      image(heart, i*50, 800, 50, 50)
  }
}

function deathCheck() {
  player = new Player(playerSprite, 3, 8, tileSize, playerSpeed, tileSize, tileRules);
  lives = lives - 1; 
  currentLives();
  if (lives == 0) {
    lose()
  }
}

function lose(){
  background(100, 50, 75); 
  print("You lose")
  textSize(60);
  fill(25); //black
  text('You lose', 250, 350);

  resetGame(); //start again
}

function win(){
  print("You win!")
  background(0,255,0);
  textSize(60);
  fill(255,0,0); //red text
  text('You win!', 250, 350);
  setTimeout(resetGame(), 5000); //why is text disappearing immediately?
}

class Player{
  constructor(sprites, startAcross, startDown, size, speed, tileSize, tileRules) {
    this.sprites = sprites;
    this.currentSprite = this.sprites.down;
    this.across = startAcross;
    this.down = startDown;
    this.xPos = this.across * tileSize;
    this.yPos = this.down * tileSize;
    this.size = size;
    this.speed = speed;
    this.tileRules = tileRules;
    this.tileSize = tileSize;
    this.dirX = 0;
    this.dirY = 0;
    this.isMoving = false;
    this.tx = this.xPos; 
    this.ty = this.yPos;
}

setDirection() {
  if (!this.isMoving) {
     
      if (key === "w" || key === "ArrowUp") { //if w key is pressed, moves player upwards
          this.dirX = 0;
          this.dirY = -1;  
      }

      if (key === "s" || key === "ArrowDown") { //if s key is pressed, moves player backwards down the Y axis
          this.dirX = 0;
          this.dirY = 1; 
      }

      if (key === "a" || key === "ArrowLeft") { //if a key is pressed, moves player left along the x axis
          this.dirX = -1; 
          this.dirY = 0;
          this.currentSprite = this.sprites.left; //sprite faces left
      }

      if (key === "d" || key === "ArrowRight") { //if d key is pressed, moves player right along the x axis
          this.dirX = 1; 
          this.dirY = 0;
          this.currentSprite = this.sprites.right; //sprite faces right

      }
      this.checkTargetTile();
  }
}

checkTargetTile() {
  this.across = Math.floor(this.xPos / this.tileSize);
  this.down = Math.floor(this.yPos / this.tileSize);

  let nextTileHorizontal = this.across + this.dirX;
  let nextTileVertical = this.down + this.dirY;
  
  if (
      nextTileHorizontal >= 0 && 
      nextTileHorizontal < numAcross && 
      nextTileVertical >= 0 && 
      nextTileVertical < numDown 
  ) {
      if (this.tileRules[nextTileVertical][nextTileHorizontal] == 0) { //can only move to next tile if it is an empty floor tile, a trap or the exit
          this.tx = nextTileHorizontal * this.tileSize;
          this.ty = nextTileVertical * this.tileSize;
          this.isMoving = true;
      } else if (this.tileRules[nextTileVertical][nextTileHorizontal] == 2) { //when you move onto a trap tile, you lose a life and game checks if you have died
            this.tx = nextTileHorizontal * this.tileSize;
            this.ty = nextTileVertical * this.tileSize;
            this.isMoving = true;
            deathCheck()          //player loses a life and dies if lives are 0
      } else if (this.tileRules[nextTileVertical][nextTileHorizontal] == 4) { 
            this.tx = nextTileHorizontal * this.tileSize;
            this.ty = nextTileVertical * this.tileSize;
            this.isMoving = true;
            win()         
      }
  }
}
move() {
  if (this.isMoving) {
      this.xPos += this.speed * this.dirX;
      this.yPos += this.speed * this.dirY;

      if (this.xPos === this.tx && this.yPos === this.ty) {
          this.isMoving = false;
          this.dirX = 0;
          this.dirY = 0;
      }
  }
}
  display() {
    imageMode(CORNER);
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
  }
}

class Tile {
  constructor(texture, across, down, tileSize, tileID) {
      this.texture = texture;
      this.across = across; 
      this.down = down;
      this.xPos = across * tileSize;
      this.yPos = down * tileSize; 
      this.tileSize = tileSize;
      this.tileID = tileID;
  }

  display() {
     
      noStroke();
      image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
  }

  debug() {
      stroke(245);
      noFill();
      rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

      noStroke();
      fill(255);
      textAlign(LEFT, TOP);
      
      text(this.tileID, this.xPos, this.yPos);
  } 
}



//monsters (we will add this later)
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
