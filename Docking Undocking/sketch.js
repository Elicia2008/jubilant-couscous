var iss, issImage, spacebg, spacebgImage

var spacecraft1, spacecraft1Image, spacecraft2, spacecraft2Image

var spacecraft3, spacecraft3Image, spacecraft4, spacecraft4Image

var iss, spacecraft, hasDocked

function setup() {
  createCanvas(800,400);
  spacecraft1 = createSprite(400, 200, 50, 50);
  spacecraft2 = createSprite(400, 150, 50, 50);
  spacecraft3 = createSprite(400, 100, 50, 50);
}

function preload(){
issImage = loadImage("iss.png")
spacebgImage= loadImage("spacebg.jpg")
spacecraft1Image = loadImage("spacecraft1.png")
spacecraft2Image = loadImage("spacecraft2.png")
spacecraft3Image = loadImage("spacecraft3.png")
spacecraft4Image = loadImage("spacecraft4.png")
}

function draw() {
  background(spacebgImage);  
  if(!hasDocked){
   //write x position for the spacecraft here
  }
  if(keyDown(LEFT_ARROW)){
  spacecraft1.addImage(spacecraft3Image)
  }
  if(keyDown(RIGHT_ARROW)){
  spacecraft2.addImage(spacecraft4Image)
  }
  if(keyDown(DOWN_ARROW)){
  spacecraft3.addImage(spacecraft2Image)
  }
  if(keyDown(UP_ARROW)){
  
  }
  drawSprites();
}