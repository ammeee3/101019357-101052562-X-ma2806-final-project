let heartSprite; // variable to store the sprite sheet
let spriteWidth = 100; // width of each frame in the sprite sheet
let spriteHeight = 100; // height of each frame in the sprite sheet
let totalFrames = 6; // total number of frames in the sprite sheet animation
let frameIndex = 0; // current frame
let frameRateValue = 5; // adjust this value to change the frame rate

function preload() {
  heartSprite = loadImage("heart-animation.png"); // Load the sprite sheet
}

function setup() {
  createCanvas(400, 400);
  frameRate(frameRateValue); // set the frame rate
}

function draw() {
  background(220);
  
  // calculate the x position of the current frame in the sprite sheet
  let spriteX = frameIndex * spriteWidth;
  
  // display the current frame of the animation
  image(heartSprite, 75, 100, spriteWidth, spriteHeight, spriteX, 0, spriteWidth, spriteHeight);
  
  // move to the next frame
  frameIndex++;
  
  // reset to the first frame if we reached the end
  if (frameIndex >= totalFrames) {
    frameIndex = 0;
  }
}

