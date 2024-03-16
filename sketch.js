//sprites
let player;
let heart;
let playerSprite;
let playerSpeed = 5; //sets speed of player
let tileSize = 60; //sets the size of each tile
let playerSize = tileSize; //player size is the same size as the tile for collision purposes
let tilemap = [];
let numDown = 15; //sets the size of the tile map (10 tiles down)
let numAcross = 10; //sets the size of the tile map (7 tiles down)
let textures = [];
//let ghosts = [];
//let ghostSize = tileSize;

let level = 0;
let lives = 3; //player starts the game with 3 lives

//let timer;
//let timerDuration = 30000; //30 seconds, milliseconds

let playerUpSprite;
let playerLeftSprite;
let playerRightSprite;

let loseState = false; //so the player does not lose at game start
let winState = false; //so the player does not win at game start

let spawnX = 6;
let spawnY = 13;

let graphicMap = [ //displaying the tile map
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //1
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //2
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //3
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //4
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //5
[3, 3, 3, 3, 3, 3, 4, 3, 3, 3], //6 //numbers represent the type of tile that will be displayed at every position in the tilemap(eg a 0 will show a floor tile)
[3, 3, 3, 3, 0, 0, 0, 1, 0, 3], //7
[3, 3, 3, 3, 0, 1, 2, 0, 0, 3], //8
[3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //9
[3, 3, 3, 3, 2, 0, 0, 0, 2, 3], //10
[3, 3, 3, 3, 0, 1, 0, 0, 0, 3], //11
[3, 3, 3, 3, 0, 1, 2, 1, 0, 3], //12
[3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //13
[3, 3, 3, 3, 2, 0, 0, 0, 2, 3], //14
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
];

let tileRules = [ //rules for the tile map
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //1
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //2
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //3
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //4
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //5
[3, 3, 3, 3, 3, 3, 4, 3, 3, 3], //6 //numbers represent how each tile will act (eg a 2 is a trap tile and will kill the player if stepped on)
[3, 3, 3, 3, 0, 0, 0, 1, 0, 3], //7
[3, 3, 3, 3, 0, 1, 2, 0, 0, 3], //8
[3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //9
[3, 3, 3, 3, 2, 0, 0, 0, 2, 3], //10
[3, 3, 3, 3, 0, 1, 0, 0, 0, 3], //11
[3, 3, 3, 3, 0, 1, 2, 1, 0, 3], //12
[3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //13
[3, 3, 3, 3, 2, 0, 0, 0, 2, 3], //14
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
];


function resetGame() { //activates when the player restarts the game by pressing r
  lives = 3 //lives refresh back to 3
  player = new Player(playerSprite, spawnX, spawnY, tileSize, playerSpeed, tileSize, tileRules); //player is moved back to start
  loseState = false; //stops player from losing on repeat
  winState = false; //stops player from winning on repeat
}

function preload() {
  //assigns and loads sprite images
  playerSprite = loadImage("player.png");
  playerUpSprite = loadImage("player_up.png");
  playerLeftSprite = loadImage("player_left.png");
  playerRightSprite = loadImage("player_right.png");
  heart = loadImage("heart_big.png") //updated heart asset

  //assigns tile images
  textures[0] = loadImage("floor.png");
  textures[1] = loadImage("rock.png");
  textures[2] = loadImage("hole.png");
  textures[3] = loadImage("wall.png");
  textures[4] = loadImage("exit.png");
}

function setup() {
  createCanvas(600, 1050); //creates canvas so game is visible
  //timer = millis(); // initialize the timer
  loadLevel(); //loads the tilemap based on what level the player is on
  

function draw() {
  background(0); //black background

  for (let across = 0; across < numAcross; across++) { //creates the tilemap
    for (let down = 0; down < numDown; down++) {
      tilemap[across][down].display(); //d
      tilemap[across][down].debug(); //shows tile grid (can be turned off)
    //if(millis() - timer > timeDuration) //timer reached its duration
    //timer = millis(); //resets the timer
    }
  }

  //player.display();
  //player.move();
  //currentLives();
}

  if (loseState){ //calls the draw function to display lose screen when the player has won
    drawLose();
  }

  if (winState){ //calls the draw function to display win screen when the player has won
    drawWin();
  }
}

function keyPressed() { //moves player when key pressed
  player.setDirection();
}

function currentLives(){ //displays how many lives are left
  textSize(40);
  fill(255);
  text("Lives:", 10, 930) //
    for (let i = 0; i < lives; i++){ //displays one heart image per life at the bottom of screen 
      image(heart, i*50, 970, 50, 50) 
  }
}

function deathCheck() { //activates when player moves on to a trap tile
  player = new Player(playerSprite, spawnX, spawnY, tileSize, playerSpeed, tileSize, tileRules); //sends player back to start
  lives = lives - 1; //player loses a life
  if (lives == 0) { //checks if player has run out of lives
    handleLose() //if they have this activates the lose condition
  }
}

function handleLose() { //when called, the loss condition is activated
  loseState = true; 
  level = 0;
  loadLevel();
}

function handleWin() { //when called, the win condition is activated
  player = new Player(playerSprite, spawnX, spawnY, tileSize, playerSpeed, tileSize, tileRules);
  level++;
  if (level >= 3) {
    winState = true;
    level = 0;
  }
  loadLevel();
}

function drawLose(){ 
  background(200, 50, 75); //background colour (red)
  print("You lose. Press R to play again") //prints to console
  textSize(60); //sets text size
  fill(25); //text colour (black)
  text('You lose.', width/3.5, height/5);  //displays text "You lose."
  textSize(35); 
  text('Press R to play again.', width/5, height/3); //displays text "Press R to play again.""
}

function drawWin(){ //add this (rename win)
  print("You win! Press R to play again.")
  background(0,255,0); //background colour (green)
  textSize(60); //add this
  fill(25,0,0); //text colour (black)
  text('You win!', width/3.5, height/5); //displays text "You win!"
  textSize(35); //add this
  text('Press R to play again.', width/5, height/3); //displays text "Press R to play again.""
}

class Player{ //creates player based on the variables given in Player class
  constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules) {
    //player sprites
    this.sprite = sprite;
    this.playerUpSprite = playerUpSprite; 
    this.playerLeftSprite = playerLeftSprite; 
    this.playerRightSprite = playerRightSprite;
    this.playerSprite = playerSprite;

    this.across = startAcross;
    this.down = startDown;
    this.xPos = this.across * tileSize;
    this.yPos = this.down * tileSize;
    this.size = size; //size of players
    this.speed = speed; //speed of players
    this.tileRules = tileRules; //player functions based on rules of tiles in tileRules (eg can walk on floor tiles)
    this.tileSize = tileSize; //size of tiles
    this.dirX = 0;
    this.dirY = 0;
    this.isMoving = false;
    this.tx = this.xPos; 
    this.ty = this.yPos;


}
setDirection() {
  if (!this.isMoving) { //when a key is pressed, player moves and/or looks in direction depending on key pressed
     
      if (key === "w") { //if w key is pressed, moves player upwards along the Y axis, and sprite looks in direction of movement
          this.dirX = 0;
          this.dirY = -1;
          this.sprite = this.playerUpSprite; //up sprite
      }

      if (key === "s") { //if s key is pressed, moves player backwards down the Y axis, and sprite looks in direction of movement
          this.dirX = 0;
          this.dirY = 1; 
          this.sprite = this.playerSprite; //down sprite(default sprite)
      }

      if (key === "a") { //if a key is pressed, moves player left along the x axis, and sprite looks in direction of movement
          this.dirX = -1; 
          this.dirY = 0; 
          this.sprite = this.playerLeftSprite; //left sprite
      }

      if (key === "d") { //if d key is pressed, moves player right along the x axis, and sprite looks in direction of movement
          this.dirX = 1; 
          this.dirY = 0;
          this.sprite = this.playerRightSprite; //right sprite
      }

      if (key === "ArrowUp"){ //player looks north when up arrow pressed
        this.sprite = this.playerUpSprite; //up sprite
      }

      if (key === "ArrowLeft"){ //player looks west when left arrow pressed
        this.sprite = this.playerLeftSprite; //left sprite
      }

      if (key === "ArrowRight"){ //player looks east when right arrow pressed
        this.sprite = this.playerRightSprite; //right sprite
      }

      if (key === "ArrowDown"){ //player looks south when down arrow pressed
        this.sprite = this.playerSprite; //down sprite
      }

      if (key === "r") { //game resets when R key is pressed
        if (winState || loseState) {
          resetGame();
        }
    } 

      this.checkTargetTile(); //checks if tile can be moved into before player is moved after key is pressed
  }
}


checkTargetTile() { //check and update players target tile based on its current position
  this.across = Math.floor(this.xPos / this.tileSize);
  this.down = Math.floor(this.yPos / this.tileSize);

  let nextTileHorizontal = this.across + this.dirX;
  let nextTileVertical = this.down + this.dirY;

  
  if (
      nextTileHorizontal >= 0 && 
      nextTileHorizontal < numAcross && 
      nextTileVertical >= 0 && 
      nextTileVertical < numDown 
  ) { //can only move to next tile if it is an empty floor tile, a trap or the exit
      if (this.tileRules[nextTileVertical][nextTileHorizontal] == 0) { //moves to next tile if it is a floor tile
      this.tx = nextTileHorizontal * this.tileSize;
      this.ty = nextTileVertical * this.tileSize;
      this.isMoving = true;
    } else if (this.tileRules[nextTileVertical][nextTileHorizontal] == 2) { //when you move onto a trap tile, you lose a life and game checks if you have died
        this.tx = nextTileHorizontal * this.tileSize;
        this.ty = nextTileVertical * this.tileSize;
        this.isMoving = true;
        setTimeout(deathCheck, 300);  //player loses a life and dies if lives are 0 (added timeout so you can see player move onto tile)
    } else if (this.tileRules[nextTileVertical][nextTileHorizontal] == 4) {  //moves to next tile if it is an exit tile and activates win condition
        this.tx = nextTileHorizontal * this.tileSize;
        this.ty = nextTileVertical * this.tileSize;
        this.isMoving = true;
        setTimeout(handleWin, 300);  //activates win condition (added timeout so you can see player move onto tile) 
        } 
    }
}

move() { //move player
  if (this.isMoving) { //if player is moving
      this.xPos += this.speed * this.dirX; //move along x axis at set speed
      this.yPos += this.speed * this.dirY; //move along y axis at set speed

      if (this.xPos === this.tx && this.yPos === this.ty) {
          this.isMoving = false; //when reached the target, player stops moving
          this.dirX = 0; //reset direction to zero to stop further movement
          this.dirY = 0; //"

            this.across = Math.floor(this.xPos / this.tileSize); //player only moves between squares in the tilemap
            this.down = Math.floor(this.yPos / this.tileSize);
      }
  }
}
  display() { //how images are displayed
    //displays player sprite at current position
    imageMode(CORNER);
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
  }
}

class Tile { //creates a tile based on the given template
  constructor(texture, across, down, tileSize, tileID) {
      this.texture = texture;
      this.across = across; 
      this.down = down;
      this.xPos = across * tileSize;
      this.yPos = down * tileSize; 
      this.tileSize = tileSize;
      this.tileID = tileID;
      this.visible = false; // add a visibility property

  }

  display() {
    if (this.visible) {
      image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize);
    }
  }
  

  debug() { //displays tile number grid for debugging (can be turned off)
      stroke(255); //outline
      textSize(10); //number size
      noFill();
      rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

      noStroke();
      fill(255); //number colour
      textAlign(LEFT, TOP);
      
      text(this.tileID, this.xPos, this.yPos);
  }; 
}
function updateVisibility() {
  for (let across = 0; across < numAcross; across++) {
    for (let down = 0; down < numDown; down++) {
      let distance = dist(player.across, player.down, across, down); //distance between player and current tile
      
      tilemap[across][down].visible = distance <= 1; // set visibility based on distance and one-block radius
    }
  }
}

function draw() {
  background(0);
  updateVisibility(); // Update tile visibility based on player position

  for (let across = 0; across < numAcross; across++) { //tiles along x-axis
    for (let down = 0; down < numDown; down++) { //tiles along y-axis
      tilemap[across][down].display(); //displays visible squares in tilemap
      //tilemap[across][down].debug(); //debug can be turned on to see tile number
    }
  }

  player.display(); //displays player
  player.move(); //displays player movement
  currentLives(); //displays current lives

  if (loseState) { //if player has lost all lives, displays the lose screen 
    drawLose();
  }

  if (winState) { //if player has reached the door on 3rd level, displays the win screen
    drawWin();  
  }
}