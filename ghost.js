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

function spawnGhost(){
    let randomX = player.across + Math.floor(Math.random() * 3) - 1; 
    let randomY = player.down + Math.floor(Math.random() * 3) - 1;
    let ghostX = player.across + randomX;
    let ghostY = player.down + randomY;
    ghost = new Ghost(ghostSprite, tileSize, ghostX, ghostY);
}

function isGhostAlive(){
    if (ghost.isAlive){
        deathCheck(); 
    }
}

spawnGhost();
setTimeout(isGhostAlive,5000);