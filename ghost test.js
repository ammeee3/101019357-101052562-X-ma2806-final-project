
class Ghost{
    constructor(ghostSprite, tileSize, ghostX, ghostY){
        this.ghostSprite = ghostSprite;
        this.tileSize = tileSize;
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

function startGhostSpawn(){
    ghostSpawnClock = setInterval(spawnGhost, random(10000,20000));
}

function stopGhostSpawn(){
    clearInterval(ghostSpawnClock);
}

function spawnGhost() {
    let playerTileX = Math.floor(player.xPos / tileSize);
    let playerTileY = Math.floor(player.yPos / tileSize);
  
    // Choose a random direction (0: up, 1: down, 2: left, 3: right)
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
  
    ghost = new Ghost(ghostX, ghostY, ghostSpeed); 
}

function isGhostAlive(){
    if (ghost.isAlive){
        deathCheck(); 
    }
}

spawnGhost();
setTimeout(isGhostAlive,5000);