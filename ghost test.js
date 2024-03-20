
class Ghost{
    constructor(ghostSprite, tileSize, ghostX, ghostY){
        this.ghostSprite = ghostSprite;
        this.tileSize = tileSize;
        this.speed = speed;
        //ghostX = player.across + randomX;
        //ghostY = player.down + randomY;
        this.xPos = ghostX * tileSize;
        this.yPos = ghostY * tileSize;
        this.isAlive = true;
        
    }

    display(){
        image(this.ghostSprite, this.xPos, this.yPos, this.tileSize, this.tileSize);
    }
}
remove() {
    // mark the ghost as inactive
    this.isAlive = false;
    // remove the ghost sprite from the tilemap
    this.xPos = -1000; 
    this.yPos = -1000;
}
function isGhostAlive() {
    if (ghost.isAlive) {
        //if the player interacts with the ghost, remove it
        if (playerIsCloseToGhost()) {
            ghost.remove();
        }
    }
}

function playerIsCloseToGhost() {
    //distance between the player and the ghost
    let distance = dist(player.xPos, player.yPos, ghost.xPos, ghost.yPos);
    //where the player is considered close to the ghost
    let threshold = tileSize / 2; // You can adjust this threshold as needed

    // If the distance is less than the threshold, return true (player is close to the ghost)
    return distance < threshold;
}
function startGhostSpawn(){
    ghostSpawnClock = setInterval(spawnGhost, Math.floor(Math.random() * 10000) + 10000);
}

function stopGhostSpawn(){
    clearInterval(ghostSpawnClock);
}

function spawnGhost() {
    let playerTileX = Math.floor(player.xPos / tileSize);
    let playerTileY = Math.floor(player.yPos / tileSize);
  
    // choose a random direction (0: up, 1: down, 2: left, 3: right)
    let direction = Math.floor(random(4));
    let ghostTileX, ghostTileY;
  
    switch (direction) {
      case 0: // Up
        ghostTileX = playerTileX;
        ghostTileY = playerTileY - 1;
        break;
      case 1: // Down
        ghostTileX = playerTileX;
        ghostTileY = playerTileY + 1;
        break;
      case 2: // Left
        ghostTileX = playerTileX - 1;
        ghostTileY = playerTileY;
        break;
      case 3: // Right
        ghostTileX = playerTileX + 1;
        ghostTileY = playerTileY;
        break;
    }
    let ghostX = ghostTileX * tileSize + tileSize / 2;
    let ghostY = ghostTileY * tileSize + tileSize / 2;
  
    ghost = new Ghost(ghostSprite, tileSize, ghostX, ghostY, speed); 
    ghostSpawnSound.play();
}

function isGhostAlive(){
    if (ghost.isAlive){
        deathCheck(); //check if the ghost is alive
    }
}

spawnGhost();
spawnGhost(); // optionally spawn a ghost immediately
setTimeout(isGhostAlive,5000);
