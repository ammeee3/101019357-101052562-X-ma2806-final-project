
let textures = [];
let mainTheme; //declare the variable to hold the background music
let YOULOSESound;
let YOUWINSound;
let PressurePlateSFX;
let YouWin;
let DeathSound;
let ExplosionSFX;
let TripWireSFX;

let playerSprite;
let playerUpSprite;
let playerLeftSprite;
let playerRightSprite;
//let ghostSprite;  //for the ghost enemy

function preload() {
    //assigns and loads sprite images
    playerSprite = loadImage("player.png");
    playerUpSprite = loadImage("player_up.png");
    playerLeftSprite = loadImage("player_left.png");
    playerRightSprite = loadImage("player_right.png");
    heart = loadImage("heart_big.png"); //updated heart asset
    victory = loadImage("victory.png");
    gameover = loadImage("game over.png");
    //ghostSprite = loadImage("ghost.png"); //for the ghost enemy
    //ghostKillSprite = loadImage("ghost.png"); //for the ghost enemy
    mainTheme = loadSound("MainTheme.mp3");
    PressurePlateSFX = loadSound("PressurePlateSFX.mp3");
    YOUWINSound = loadSound("YOU WIN.mp3");
    YOULOSESound = loadSound("YOU LOSE.mp3");
    ExplosionSFX = loadSound("ExplosionSFX.mp3");
    TripWireSFX = loadSound("TripWireSFX.mp3");
    DeathSound = loadSound("DeathSFX.mp3");
  
    //ghostSpawnSound = loadSound("ghostspawn.mp3"); //for the ghost enemy
  
  
    //assigns tile images
    textures[0] = loadImage("floor.png"); //floor (player can move on these squares)
    textures[1] = loadImage("rock.png"); //boulders (cannot be moved through)
    textures[2] = loadImage("hole.png"); //traps (will kill the player when stepped on)
    textures[3] = loadImage("wall.png"); //walls (cannot be moved through)
    textures[4] = loadImage("exit.png"); //moves player to next level/wins when stepped on
    textures[5] = loadImage("active.png"); //active tripwire - will kill the player when stepped on
    textures[6] = loadImage("deactivated.png"); //deactivated tripwire - player can move through once the player has deactivated the tripwire by stepping on the corresponding pressure plate
    textures[7] = loadImage("pressureplate.png"); //deactivates a tripwire
    textures[8] = loadImage("pressureplate.png");
  }
