function tripwire() {   
    if (level == 0){ //first level
        //sets spawn point for level
        spawnX = 6; //sets x position
        spawnY = 13; //sets y position
        //what the player sees in the level
        graphicMap = [
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
        //how the player interacts with the level
        tileRules = [ //rules for the tile map
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

        //deactivates tripwires depending on how many plates have been stepped on
        if (wire == 1){ //if one pressure plate is pressed, deactivates the following tripwires/pressure plates
            //appearance
            graphicMap[9][5] = 6; //tripwire
            graphicMap[9][6] = 6; //tripwire
            graphicMap[9][7] = 6; //tripwire
            graphicMap[10][4] = 8; //pressure plate
            //functionality
            tileRules[9][5] = 6;
            tileRules[9][6] = 6;
            tileRules[9][7] = 6;
            tileRules[10][4] = 8;

            PressurePlateSFX.play();
            TripWireSFX.play();

        } else if (wire >= 2){ //if two pressure plates are pressed, deactivates all tripwires
            graphicMap[9][5] = 6;
            graphicMap[9][6] = 6;
            graphicMap[9][7] = 6;
            graphicMap[7][5] = 6;

            tileRules[9][5] = 6;
            tileRules[9][6] = 6;
            tileRules[9][7] = 6;
            tileRules[7][5] = 6;

            PressurePlateSFX.play();
            TripWireSFX.play();
        }

    }   if (level == 1){ //second level
        //pressure plate count (wire) is reset between levels
        //spawn point for player
        spawnX = 2; 
        spawnY = 13;
        //new graphic/rule map
        graphicMap = [ //displaying the tile map
        [3, 3, 3, 3, 3, 3, 3, 3, 4, 3], //1
        [3, 7, 0, 0, 0, 2, 0, 1, 0, 3], //2
        [3, 1, 1, 2, 0, 0, 0, 2, 5, 3], //3
        [3, 0, 0, 1, 0, 0, 2, 0, 0, 3], //4
        [3, 1, 0, 0, 0, 0, 0, 0, 2, 3], //5
        [3, 0, 0, 2, 2, 0, 0, 1, 0, 3], //6 
        [3, 0, 0, 0, 0, 2, 0, 0, 0, 3], //7
        [3, 3, 2, 5, 5, 2, 3, 3, 3, 3], //8
        [3, 3, 1, 0, 1, 2, 3, 3, 3, 3], //9
        [3, 3, 0, 0, 1, 0, 3, 3, 3, 3], //10
        [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //11
        [3, 3, 2, 1, 0, 2, 3, 3, 3, 3], //12
        [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //13
        [3, 3, 0, 0, 2, 7, 3, 3, 3, 3], //14
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
        ];
        tileRules = [ //rules for tilemap
        [3, 3, 3, 3, 3, 3, 3, 3, 4, 3], //1
        [3, 7, 0, 0, 0, 2, 0, 1, 0, 3], //2
        [3, 1, 1, 2, 0, 0, 0, 2, 5, 3], //3
        [3, 0, 0, 1, 0, 0, 2, 0, 0, 3], //4
        [3, 1, 0, 0, 0, 0, 0, 0, 2, 3], //5
        [3, 0, 0, 2, 2, 0, 0, 1, 0, 3], //6 
        [3, 0, 0, 0, 0, 2, 0, 0, 0, 3], //7
        [3, 3, 2, 5, 5, 2, 3, 3, 3, 3], //8
        [3, 3, 1, 0, 1, 2, 3, 3, 3, 3], //9
        [3, 3, 0, 0, 1, 0, 3, 3, 3, 3], //10
        [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //11
        [3, 3, 2, 1, 0, 2, 3, 3, 3, 3], //12
        [3, 3, 0, 0, 0, 0, 3, 3, 3, 3], //13
        [3, 3, 0, 0, 2, 7, 3, 3, 3, 3], //14
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
        ];

        if (wire == 1){ //if one pressure plate is pressed, deactivates the following tripwires
            graphicMap[7][3] = 6; //tripwire
            graphicMap[7][4] = 6; //tripwire
            graphicMap[13][5] = 8; //pressure plate
            
          
            tileRules[7][3] = 6; //tw
            tileRules[7][4] = 6; //tw
            tileRules[13][5] = 8; //pp

            PressurePlateSFX.play();

        } else if (wire >= 2){ //if two pressure plates are pressed, deactivates all tripwires
            graphicMap[7][3] = 6;
            graphicMap[7][4] = 6;
            graphicMap[2][8] = 6;

            tileRules[7][4] = 6;
            tileRules[7][3] = 6;
            tileRules[2][8] = 6;

            PressurePlateSFX.play();
        }
        
    }   if (level == 2){ //final level
        //new spawn points
        spawnX = 8;
        spawnY = 13;
        //new graphic/rule map
        graphicMap = [ //displaying the tile map
        [3, 3, 3, 4, 3, 3, 3, 3, 3, 3], //1
        [3, 7, 1, 0, 1, 1, 2, 0, 7, 3], //2
        [3, 0, 2, 5, 2, 0, 0, 0, 2, 3], //3
        [3, 0, 0, 0, 1, 0, 1, 1, 2, 3], //4
        [3, 2, 5, 2, 1, 0, 0, 0, 0, 3], //5
        [3, 0, 0, 0, 2, 0, 0, 2, 0, 3], //6 
        [3, 0, 2, 0, 0, 0, 1, 0, 0, 3], //7
        [3, 0, 0, 1, 2, 1, 2, 5, 2, 3], //8
        [3, 2, 1, 0, 0, 0, 2, 0, 0, 3], //9
        [3, 0, 0, 0, 2, 0, 0, 0, 2, 3], //10
        [3, 0, 1, 1, 1, 0, 1, 2, 7, 3], //11
        [3, 0, 0, 0, 1, 7, 1, 0, 0, 3], //12
        [3, 2, 5, 5, 5, 2, 5, 5, 2, 3], //13
        [3, 7, 0, 0, 0, 0, 0, 0, 0, 3], //14
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
        ];
        tileRules = [ 
        [3, 3, 3, 4, 3, 3, 3, 3, 3, 3], //1
        [3, 7, 1, 0, 1, 1, 2, 0, 7, 3], //2
        [3, 0, 2, 5, 2, 0, 0, 0, 2, 3], //3
        [3, 0, 0, 0, 1, 0, 1, 1, 2, 3], //4
        [3, 2, 5, 2, 1, 0, 0, 0, 0, 3], //5
        [3, 0, 0, 0, 2, 0, 0, 2, 0, 3], //6 
        [3, 0, 2, 0, 0, 0, 1, 0, 0, 3], //7
        [3, 0, 0, 1, 2, 1, 2, 5, 2, 3], //8
        [3, 2, 1, 0, 0, 0, 2, 0, 0, 3], //9
        [3, 0, 0, 0, 2, 0, 0, 0, 2, 3], //10
        [3, 0, 1, 1, 1, 0, 1, 2, 7, 3], //11
        [3, 0, 0, 0, 1, 7, 1, 0, 0, 3], //12
        [3, 2, 5, 5, 5, 2, 5, 5, 2, 3], //13
        [3, 7, 0, 0, 0, 0, 0, 0, 0, 3], //14
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15
        ];

        if (wire == 1){ //deactivates the tripwires, depending on how many pressure plates were stepped on
            graphicMap[12][6] = 6;
            graphicMap[12][7] = 6;
            graphicMap[13][1] = 8; //sets the pressure plate to a deactivated pressure plate(player can only use it once)
          
            

            tileRules[12][6] = 6;
            tileRules[12][7] = 6;
            tileRules[13][1] = 8; //sets the pressure plate to a deactivated pressure plate(player can only use it once)

        } else if (wire == 2){
            //appearance
            //tripwires
            graphicMap[12][6] = 6;
            graphicMap[12][7] = 6;
            graphicMap[12][2] = 6;
            graphicMap[12][3] = 6;
            graphicMap[12][4] = 6;
            //pressure plates
            graphicMap[13][1] = 8;
            graphicMap[10][8] = 8;
            
            //functionality
            //tripwires
            tileRules[12][6] = 6;
            tileRules[12][7] = 6;
            tileRules[12][2] = 6;
            tileRules[12][3] = 6;
            tileRules[12][4] = 6;

            

            Trp



            //pressure plates
            tileRules[13][1] = 8;
            tileRules[10][8] = 8;

            PressurePlateSFX.play();

        }   else if (wire == 3){ //
            //tripwires
            graphicMap[12][6] = 6;
            graphicMap[12][7] = 6;
            graphicMap[12][2] = 6;
            graphicMap[12][3] = 6;
            graphicMap[12][4] = 6;
            graphicMap[7][7] = 6;
            //pressure plates
            graphicMap[13][1] = 8;  
            graphicMap[10][8] = 8;
            graphicMap[11][5] = 8;
            
            //tripwires
            tileRules[12][6] = 6;
            tileRules[12][7] = 6;
            tileRules[12][2] = 6;
            tileRules[12][3] = 6;
            tileRules[12][4] = 6;
            tileRules[7][7] = 6;
            //pressure plates
            tileRules[13][1] = 8;
            tileRules[10][8] = 8;
            tileRules[11][5] = 8;

        } else if (wire == 4){ //
            //tripwire graphics
            graphicMap[12][6] = 6;
            graphicMap[12][7] = 6;
            graphicMap[12][2] = 6;
            graphicMap[12][3] = 6;
            graphicMap[12][4] = 6;
            graphicMap[7][7] = 6;
            graphicMap[4][2] = 6;
            //pressure plate graphics
            graphicMap[13][1] = 8;  
            graphicMap[10][8] = 8;
            graphicMap[11][5] = 8;
            graphicMap[1][8] = 8;
        
            //tripwires rules
            tileRules[12][6] = 6;
            tileRules[12][7] = 6;
            tileRules[12][2] = 6;
            tileRules[12][3] = 6;
            tileRules[12][4] = 6;
            tileRules[7][7] = 6;
            tileRules[4][2] = 6;
            //pressure plates rules
            tileRules[13][1] = 8;
            tileRules[10][8] = 8;
            tileRules[11][5] = 8;
            tileRules[1][8] = 8;

        } else if (wire >= 5){ //all tripwires deactivated - max 5 pressure plates
            //tripwires
            graphicMap[12][6] = 6;
            graphicMap[12][7] = 6;
            graphicMap[12][2] = 6;
            graphicMap[12][3] = 6;
            graphicMap[12][4] = 6;
            graphicMap[7][7] = 6;
            graphicMap[4][2] = 6;
            graphicMap[2][3] = 6;
            //pressure plates
            graphicMap[13][1] = 8;  
            graphicMap[10][8] = 8;
            graphicMap[11][5] = 8;
            graphicMap[1][8] = 8;
            //graphicMap[1][1] = 8;
            //tripwires
            tileRules[12][6] = 6;
            tileRules[12][7] = 6;
            tileRules[12][2] = 6;
            tileRules[12][3] = 6;
            tileRules[12][4] = 6;
            tileRules[7][7] = 6;
            tileRules[4][2] = 6;
            tileRules[2][3] = 6;
            //pressure plates
            tileRules[13][1] = 8;
            tileRules[10][8] = 8;
            tileRules[11][5] = 8;
            tileRules[1][8] = 8;
            //tileRules[1][1] = 8;
        }
    }
    //player = new Player();
    //playerX = this.xPos;
    //playerY = this.yPos;
    //currentSprite = this.sprite;
    // //player functions based on rules of tiles in tileRules (eg can walk on floor tiles)
    //player = new Player(playerSprite, playerX, playerY, tileSize, playerSpeed, tileSize, tileRules);
    this.tileRules = tileRules;
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
