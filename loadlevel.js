let m = 0

function loadLevel() {
if (m == 0) {
   spawnX = 2;
   spawnY = 13;
   let graphicMap = [ //displaying the tile map
   [3, 3, 3, 3, 3, 3, 3, 3, 4, 3], //1
   [3, 0, 0, 0, 0, 2, 0, 1, 0, 3], //2
   [3, 1, 1, 2, 0, 0, 0, 1, 0, 3], //3
   [3, 0, 0, 1, 0, 0, 2, 0, 0, 3], //4
   [3, 1, 0, 0, 0, 0, 0, 0, 2, 3], //5
   [3, 0, 0, 2, 2, 0, 0, 1, 0, 3], //6 
   [3, 0, 0, 0, 0, 2, 0, 0, 0, 3], //7
   [3, 3, 1, 0, 0, 1, 3, 3, 3, 3], //8
   [3, 3, 1, 0, 1, 2, 3, 3, 3, 3], //9
   [3, 3, 0, 0, 1, 0, 3, 3, 3, 3], //10
   [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //11
   [3, 3, 2, 1, 0, 2, 3, 3, 3, 3], //12
   [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //13
   [3, 3, 0, 0, 2, 0, 3, 3, 3, 3], //14
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
   ];

   let tileRules = [ //displaying the tile map
   [3, 3, 3, 3, 3, 3, 3, 3, 4, 3], //1
   [3, 0, 0, 0, 0, 2, 0, 1, 0, 3], //2
   [3, 1, 1, 2, 0, 0, 0, 1, 0, 3], //3
   [3, 0, 0, 1, 0, 0, 2, 0, 0, 3], //4
   [3, 1, 0, 0, 0, 0, 0, 0, 2, 3], //5
   [3, 0, 0, 2, 2, 0, 0, 1, 0, 3], //6 
   [3, 0, 0, 0, 0, 2, 0, 0, 0, 3], //7
   [3, 3, 1, 0, 0, 1, 3, 3, 3, 3], //8
   [3, 3, 1, 0, 1, 2, 3, 3, 3, 3], //9
   [3, 3, 0, 0, 1, 0, 3, 3, 3, 3], //10
   [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //11
   [3, 3, 2, 1, 0, 2, 3, 3, 3, 3], //12
   [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //13
   [3, 3, 0, 0, 2, 0, 3, 3, 3, 3], //14
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
   ];

} else if (map >= 1){
   spawnX = 6;
   spawnY = 13;
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
  
   let tileRules = [ //sets the functionality of each tile
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //1
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //2
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //3
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //4
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //5
   [3, 3, 3, 3, 3, 3, 4, 3, 3, 3], //6 //numbers represent how each tile will act (eg a 2 is a hole tile and will kill the player if stepped on)
   [3, 3, 3, 3, 0, 1, 2, 0, 0, 3], //8
   [3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //9
   [3, 3, 3, 3, 2, 0, 0, 0, 2, 3], //10
   [3, 3, 3, 3, 0, 1, 0, 0, 0, 3], //11
   [3, 3, 3, 3, 0, 1, 2, 1, 0, 3], //12
   [3, 3, 3, 3, 0, 0, 0, 0, 0, 3], //13
   [3, 3, 3, 3, 2, 0, 0, 0, 2, 3], //14
   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
   ]
}
    let tileID = 0; //starting at 0, 0, loads the tilemap
  
    for (let across = 0; across < numAcross; across++) { //going row by row in the array
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) { //for each number in the row, generates it and the tiles beneath it
          let x = across * tileSize;
          let y = down * tileSize;
          let textureNum = graphicMap[down][across]; //assigns the images chosen in graphicMap to the tilemap
  
            tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); //creates new tile
  
            tileID++;
        
        }
    }
  
    player = new Player(playerSprite, spawnX, spawnY, tileSize, playerSpeed, tileSize, tileRules); //creates player at the starting position
  }