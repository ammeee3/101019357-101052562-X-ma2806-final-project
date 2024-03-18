const graphicMap1 = [
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
  
  const graphicMap2 = [
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
  
  const graphicMap3 = [
    [3, 3, 3, 4, 3, 3, 3, 3, 3, 3], //1
    [3, 0, 1, 0, 1, 1, 2, 0, 0, 3], //2
    [3, 0, 2, 0, 2, 0, 0, 0, 2, 3], //3
    [3, 0, 0, 0, 1, 0, 1, 1, 2, 3], //4
    [3, 1, 0, 1, 1, 0, 0, 0, 0, 3], //5
    [3, 0, 0, 0, 2, 0, 0, 2, 0, 3], //6 
    [3, 0, 2, 0, 0, 0, 1, 0, 0, 3], //7
    [3, 0, 0, 1, 2, 1, 1, 0, 1, 3], //8
    [3, 2, 1, 0, 0, 0, 2, 0, 0, 3], //9
    [3, 0, 0, 0, 2, 0, 0, 0, 2, 3], //10
    [3, 0, 1, 1, 1, 0, 1, 2, 0, 3], //11
    [3, 0, 0, 0, 1, 0, 1, 0, 0, 3], //12
    [3, 1, 0, 0, 0, 1, 0, 0, 1, 3], //13
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //14
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
  ];
  
  if (level == 1){
    graphicMap = [graphicMap1]
    spawnX = 6;
    spawnY = 13;
    }
  if (level == 2){
    graphicMap = [graphicMap2]
    spawnX = 2;
    spawnY = 13;
  }
  if (level == 3){
    graphicMap = [graphicMap3]
    spawnX = 8;
    spawnY = 13;
  }
  
  function loadLevel() {
    tripwire();
    player = new Player(playerSprite, spawnX, spawnY, tileSize, playerSpeed, tileSize, tileRules); //creates player at the starting position
    }
    
  function tripwire() {  
    if (level == 1){
      if (wire == 1){
          graphicMap[9][5] = 6;
          graphicMap[9][6] = 6;
          graphicMap[9][7] = 6;
          graphicMap[9][8] = 6;
      } else if (wire == 2){
          graphicMap[9][5] = 6;
          graphicMap[9][6] = 6;
          graphicMap[9][7] = 6;
          graphicMap[9][8] = 6;
          graphicMap[8][4] = 6;
      }
    }
  
    tileRules = graphicMap;
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
  }