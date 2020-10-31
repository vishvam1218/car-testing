var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

speed=random(55,90);
weight=ramdom(400,1500);

var car=createSprite(50,200,50,50);

var wall=createSprite(1500, 200, 60, hight/2);
wall.shapeColor(80,80,80);
car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}