function loadLevel() {
    //startGhostSpawn(); // for the ghost enemy
    tripwire();
    player = new Player(playerSprite, spawnX, spawnY, tileSize, playerSpeed, tileSize, tileRules); //creates player at the starting position
}

function stopLoseSound() {
  if (loseSound.isPlaying()) {
    loseSound.stop(); // Stop the lose sound if it's playing
  }
  if (YOUWINSound.isPlaying()) {
    YOUWINSound.stop(); // Stop the win sound if it's playing
  }
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
  DeathSound.play(); //plays death scream
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
  if (loseState) {
    YOULOSESound.play(); // Only play the sound if loseState is true
    mainTheme.stop(); // Stop the main theme music
  }
}

function handleWin() { //when called, the win condition is activated
  player = new Player(playerSprite, spawnX, spawnY, tileSize, playerSpeed, tileSize, tileRules);
  level++;
  wire = 0;
  if (level >= 3) {
    winState = true;
    level = 0;
    wire = 0;
  }
  loadLevel();
  if (winState) {
    YouWINSound.play();
    mainTheme.stop(); // Stop the main theme music
  }
}

function drawLose(){ 
  image(gameover, 0, 0, width, height); // display the "game over.png" image
}

function drawWin(){ //add this (rename win)
  image(victory, 0, 0, width,height); //display the "victory.png" image
}
