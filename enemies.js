


function spawnGhost(){

    setInterval(spawnGhost, 10000);
}

class Enemy { //creates a tile based on the given template
    constructor(sprite, across, down, tileSize, tileID) {
        this.sprite = sprite;
        this.across = across; 
        this.down = down;
        this.xPos = across * tileSize;
        this.yPos = down * tileSize; 
        this.tileSize = tileSize;
        this.tileID = tileID;
        this.visible = false; // add a visibility property
  
    }
}