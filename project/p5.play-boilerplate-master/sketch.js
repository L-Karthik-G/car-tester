var car, wall;
var speed;

function setup() {
  createCanvas(1600,500);

  speed=random(30,90);
  
  
  car = createSprite(50,250,50,50);
  wall = createSprite(1200,250,60,height/2)

  wall.shapeColor=color(170);
  car.shapeColor=color(255);

  car.velocityX=speed;
}

function draw() {
  background(0);

 if(car.isTouching(wall)){
   car.velocityX=0

   
   if(speed>70){
     car.shapeColor="red"
   }

   if(speed<70){
      car.shapeColor="yellow"
   }

   if(speed<50){
     car.shapeColor="green"
   }
 }
  
  
  drawSprites();
}