//create variables
var road, movingRoad;
var runner, runningRunner;
var edge1, edge2;

function preload(){
 
  //load the images and animations
  movingRoad = loadImage("path.png");
  runningRunner = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");

}

function setup(){
  //create the canvas
  createCanvas(400,400);
  
  //make the road with scaling and image
  road = createSprite(200, 200,400,400);
  road.addImage("moving",movingRoad);
  road.scale = 1.3;
  road.x = 200;

  //make runner with animation and scaling
  runner = createSprite(200, 300, 50, 100);
  runner.addAnimation("running",runningRunner);
  runner.scale = 0.7;
  runner.x = 200;

  //make edges so the runner doesn't cross the street
  edge1 = createSprite (20,200,20,400);
  edge1.visible = false;

  edge2 = createSprite (385,200,20,400);
  edge2.visible = false;
}

function draw() {
  //make the background to be the same color of the road
  background("black");

  //make the road move and the console log the movement
  road.velocityY = 2;
  console.log(road.y);

  //make the road loop
  if (road.y>400){
    road.y=200;
  }

  //control for the runner
  runner.x = mouseX;


  //collide the edges
  runner.collide(edge1);
  runner.collide(edge2);

  //draw the sprites
  drawSprites();
}
