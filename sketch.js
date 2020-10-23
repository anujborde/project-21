
var bullet

var wall

var speed

var wall,thickness

 var weight



function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

bullet=createSprite(50,200,50,5)
bullet.velocityX=speed

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)





}

function draw() {
  background(0);
has_collided();

  drawSprites();

  

  if(wall.x-bullet.x < wall.width/2+bullet.width/2
    ){
 bullet.velocityX=0;
 
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
 console.log(damage)

 if(damage>10){
   wall.shapeColor=color("red")
 }
 else{
   wall.shapeColor=color("green");
 }
 
 }
 
   }
 
  




  