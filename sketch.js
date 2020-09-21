var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var speed, weight;

function setup() {
  createCanvas(1600,600);
speed=random(55,90)
weight=random(400,1500)

car1=createSprite(50, 50, 50, 50);
car1.velocityX = speed;

car2=createSprite(50, 200, 50, 50);
car2.velocityX = speed;

car3=createSprite(50, 350, 50, 50);
car3.velocityX = speed;

car4=createSprite(50, 500, 50, 50);
car4.velocityX = speed;

wall1=createSprite(1500,50,20,100);
wall1.shapeColor=("black");

wall2=createSprite(1500,200,20,100);
wall2.shapeColor=("black");

wall3=createSprite(1500,350,20,100);
wall3.shapeColor=("black");

wall4=createSprite(1500,500,20,100);
wall4.shapeColor=("black");

}

function draw() {
  background(255,255,255);  

if(wall1.x-car1.x < (car1.width+wall1.width)/2)
{
  car1.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180){
    car1.shapeColor=color(0,225,0);
  }

  
  if(deformation<180 && deformation>100) {
  car1.shapeColor=color(230,230,0); 
}
  
  if(deformation<100){
    car1.shapeColor=color(255,0,0);
  }
}
if(wall2.x-car2.x < (car2.width+wall2.width)/2)
{
  car2.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180){
    car2.shapeColor=color(0,225,0);
  }

  
  if(deformation<180 && deformation>100) {
  car2.shapeColor=color(230,230,0); 
}
  
  if(deformation<100){
    car2.shapeColor=color(255,0,0);
  }
}
if(wall3.x-car3.x < (car3.width+wall3.width)/2)
{
  car3.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180){
    car3.shapeColor=color(0,225,0);
  }

  
  if(deformation<180 && deformation>100) {
  car3.shapeColor=color(230,230,0); 
}
  
  if(deformation<100){
    car3.shapeColor=color(255,0,0);
  }
}
if(wall4.x-car4.x < (car4.width+wall4.width)/2)
{
  car4.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180){
    car4.shapeColor=color(0,225,0);
  }

  
  if(deformation<180 && deformation>100) {
  car4.shapeColor=color(230,230,0); 
}
  
  if(deformation<100){
    car4.shapeColor=color(255,0,0);
  }
}
drawSprites();
}
