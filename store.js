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
]

spawnX = 6
spawnY = 13


  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //1
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //2
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //3
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //4
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //5
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //6 //numbers represent the type of tile that will be displayed at every position in the tilemap(eg a 0 will show a floor tile)
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //7
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //8
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //9
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //10
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //11
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //12
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //13
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 3], //14
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  //15