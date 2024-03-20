let player;
let playerSpeed = 5; //sets speed of player

class Player{ //creates player based on the variables given in Player class
    constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules) {
      //player sprites
      this.sprite = sprite;
      this.playerUpSprite = playerUpSprite; 
      this.playerLeftSprite = playerLeftSprite; 
      this.playerRightSprite = playerRightSprite;
      this.playerSprite = playerSprite;
  
      this.across = startAcross; //player positon on tilemap (x)
      this.down = startDown; //player position on tilemap (y)
      this.xPos = this.across * tileSize;
      this.yPos = this.down * tileSize;
      this.size = size; //size of players
      this.speed = speed; //speed of players
      this.tileRules = tileRules; //player functions based on rules of tiles in tileRules (eg can walk on floor tiles)
      this.tileSize = tileSize; //size of tiles
      this.dirX = 0; //movement along the x axis without keypress = 0
      this.dirY = 0; //movement along the y axis without keypress = 0
      this.isMoving = false; //starts still
      this.tx = this.xPos; 
      this.ty = this.yPos;
  }
  
  
  setDirection() {
    if (!this.isMoving) { //when a key is pressed, player moves and/or looks in direction depending on key pressed
       
        if (key === "w") { //if w key is pressed, moves player upwards along the Y axis, and sprite looks in direction of movement
            this.dirX = 0;
            this.dirY = -1; //moves up along y axis
            this.sprite = this.playerUpSprite; //up sprite
            //direction = 1; //for the ghost enemy
        }
  
        if (key === "s") { //if s key is pressed, moves player backwards down the Y axis, and sprite looks in direction of movement
            this.dirX = 0;
            this.dirY = 1; //moves down along y axis
            this.sprite = this.playerSprite; //down sprite(default sprite)
            //direction = 2; //for the ghost enemy
        }
  
        if (key === "a") { //if a key is pressed, moves player left along the x axis, and sprite looks in direction of movement
            this.dirX = -1;  //moves left
            this.dirY = 0; 
            this.sprite = this.playerLeftSprite; //left sprite
            //direction = 3; //for the ghost enemy
        }
  
        if (key === "d") { //if d key is pressed, moves player right along the x axis, and sprite looks in direction of movement
            this.dirX = 1; //moves right
            this.dirY = 0;
            this.sprite = this.playerRightSprite; //right sprite
            //direction = 4; //for the ghost enemy
        }
  
        if (key === "ArrowUp"){ //player looks north when up arrow pressed
          this.sprite = this.playerUpSprite; //up sprite
          //direction = 1; //for the ghost enemy
        }
  
        if (key === "ArrowLeft"){ //player looks west when left arrow pressed
          this.sprite = this.playerLeftSprite; //left sprite
          //direction = 3; //for the ghost enemy
        }
  
        if (key === "ArrowRight"){ //player looks east when right arrow pressed
          this.sprite = this.playerRightSprite; //right sprite
          //direction = 4; //for the ghost enemy
        }
  
        if (key === "ArrowDown"){ //player looks south when down arrow pressed
          this.sprite = this.playerSprite; //down sprite
          //direction = 2; //for the ghost enemy
        }
  
        if (key === "r") { //game resets when R key is pressed
          if (winState || loseState) {
            resetGame();
            if (YOULOSESound.isPlaying()) {
                YOULOSESound.stop(); //stop the lose sound
                }
            if (YouWINSound.isPlaying()) {
                  YouWINSound.stop(); // Stop the win sound
                } mainTheme.loop(); // Restart the main theme
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
        if (this.tileRules[nextTileVertical][nextTileHorizontal] == 0 || this.tileRules[nextTileVertical][nextTileHorizontal] == 6 || this.tileRules[nextTileVertical][nextTileHorizontal] == 8) { //moves to next tile if it is a floor tile / deactivated tripwire/pressure plate
        this.tx = nextTileHorizontal * this.tileSize;
        this.ty = nextTileVertical * this.tileSize;
        this.isMoving = true;
      } else if (this.tileRules[nextTileVertical][nextTileHorizontal] == 7) {  //moves to next tile if it is an exit tile and activates win condition
          //this.tileRules[nextTileVertical][nextTileHorizontal] = 8;
          this.tx = nextTileHorizontal * this.tileSize;
          this.ty = nextTileVertical * this.tileSize;
          this.isMoving = true;
          wire++;
          tripwire();
          PressurePlateSFX.play();
          TripwireSFX.play();
          //tileRules[this.across][this.down] = 8;
      } else if (this.tileRules[nextTileVertical][nextTileHorizontal] == 2 || this.tileRules[nextTileVertical][nextTileHorizontal] == 5) { //when you move onto a trap/active tripwire tile, you lose a life and game checks if you have died
          this.tx = nextTileHorizontal * this.tileSize;
          this.ty = nextTileVertical * this.tileSize;
          this.isMoving = true;
          ExplosionSFX.play();
          DeathSound.play(); //plays death scream
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
              player = new Player(this.sprite, this.across, this.down, tileSize, playerSpeed, tileSize, tileRules); //spawns new player so new tileRules apply
  
        }
    }
  }
    display() { //how images are displayed
      //displays player sprite at current position
      imageMode(CORNER);
      image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }
  }