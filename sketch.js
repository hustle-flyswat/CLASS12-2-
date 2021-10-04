var sea,ship_moving;
var seaImg,shipImg;

function preload(){ //load the images
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")

shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  

}

function setup(){ //creating the sprites
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1,);
  ship.scale =0.25;
  
}

function draw() {  //working
  background(0);
 sea.velocityX = -1;
 
if(sea.x<0){//resetting the groung to the centre so that the game becomes infinite..

sea.x=sea.width/10
}
  
    
  drawSprites();
}
