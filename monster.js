
function spawnGhost(){
    let ghostX = player.across;
    let ghostY = player.down;
    let ghostPos;
    ghostAlive = true;

    if (direction == 1){ //if player is looking up
        ghostY++; //ghost spawns below them
        console.log("player up:", player.across, player.down, "ghost down:", ghostX, ghostY);
        ghostPos = 1; //down
    } else if (direction == 2){ //if player is looking down
        ghostY--; //ghost spawns above them
        console.log("player down:", player.across, player.down, "ghost up:", ghostX, ghostY);
        ghostPos = 2; //up
    } else if (direction == 3){ //if player is looking left
        ghostX++; //ghost spawns to the right (behind them) 
        console.log("player left:", player.across, player.down, "ghost right:", ghostX, ghostY);
        ghostPos = 3; //right
    } else if (direction == 4){ //if player is looking right
        ghostX--; //ghost spawns to the left (behind them)
        console.log("player right:", player.across, player.down, "ghost left:", ghostX, ghostY);
        ghostPos = 4; //ghost is to the left
    }
    
    ghost = new Ghost(ghostSprite, tileSize, ghostX, ghostY);
}

class Ghost{
    constructor(ghostSprite, tileSize, ghostX, ghostY){
        this.ghostSprite = ghostSprite;
        this.tileSize = tileSize;
        this.xPos = ghostX * tileSize;
        this.yPos = ghostY * tileSize;
        //this.isAlive = true;
    }

    display(){
        image(this.ghostSprite, this.xPos, this.yPos, this.tileSize, this.tileSize); //sprite, location, dimensions
    }
}

function startGhostSpawn(){ //starts spawning ghosts
    ghostSpawnClock = setInterval(spawnGhost, random(3000, 8000)); //ghost can spawn every 10-20 seconds
}

function stopGhostSpawn(){ //stops ghosts from spawning
    clearInterval(ghostSpawnClock); //stops the spawn timer
}

function killGhost(){
    if (ghostPos == 1 && direction == 2 || ghostPos == 2 && direction == 1 ||ghostPos == 3 && direction == 4 || ghostPos == 4 && direction == 3 ){ //if ghost is down and player is looking down
        ghostAlive = false;
    };
}

function isGhostAlive(){
    if(ghostAlive == true){
        deathCheck();
        
    }
}

//spawnGhost();
setTimeout(isGhostAlive, 5000);
