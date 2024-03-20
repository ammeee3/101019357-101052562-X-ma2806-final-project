//sprites
//let player;
let heart;
let tileSize = 60; //sets the size of each tile
let tilemap = [];
let numDown = 15; //sets the size of the tile map (10 tiles down)
let numAcross = 10; //sets the size of the tile map (7 tiles down)
//let direction = 0; //player direction starts at 0 so ghosts don't spawn until player moves //for ghost enemy

let level = 0; //player starts on the first level
let lives = 3; //player starts the game with 3 lives
let wire = 0; //all tripwires start active

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
[3, 3, 3, 3, 3, 3, 4, 3, 3, 3], //6 
[3, 3, 3, 3, 0, 0, 0, 1, 7, 3], //7
[3, 3, 3, 3, 2, 5, 2, 0, 0, 3], //8
[3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //9
[3, 3, 3, 3, 2, 5, 5, 5, 2, 3], //10
[3, 3, 3, 3, 7, 1, 0, 0, 0, 3], //11
[3, 3, 3, 3, 0, 1, 2, 1, 0, 3], //12
[3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //13
[3, 3, 3, 3, 2, 0, 0, 0, 2, 3], //14
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
];

tileRules = [ //rules for the tile map
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //1
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //2
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //3
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //4
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //5
[3, 3, 3, 3, 3, 3, 4, 3, 3, 3], //6 
[3, 3, 3, 3, 0, 0, 0, 1, 7, 3], //7
[3, 3, 3, 3, 2, 5, 2, 0, 0, 3], //8
[3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //9
[3, 3, 3, 3, 2, 5, 5, 5, 2, 3], //10
[3, 3, 3, 3, 7, 1, 0, 0, 0, 3], //11
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
  wire = 0;
  //startGhostSpawn(); //for the ghost enemy
  mainTheme.loop()
}

function setup() {
  createCanvas(600, 1050); //creates canvas so game is visible
  loadLevel(); //loads the tilemap based on what level the player is on
  //startGhostSpawn(); //for the ghost enemy
  mainTheme.loop(); //loop the background music
}

function draw() {
  background(0); //black background
  updateVisibility();
  for (let across = 0; across < numAcross; across++) { //creates the tilemap
    for (let down = 0; down < numDown; down++) {
      tilemap[across][down].display(); //d
      //tilemap[across][down].debug(); //shows tile grid (can be turned off)

    //for the ghost vv
    //if (ghost) { 
      //ghost.display();
    //}

    }
  }

  player.display(); 
  player.move();
  currentLives();


  if (loseState){ //calls the draw function to display lose screen when the player has won
    drawLose();
    //stopGhostSpawn(); //for the ghost enemy
    
  }

  if (winState){ //calls the draw function to display win screen when the player has won
    drawWin();
    //stopGhostSpawn(); //for the ghost enemy
    
  }
}

function keyPressed() { //moves player when key pressed //amy
    player.setDirection(); // move player when other keys are pressed
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

