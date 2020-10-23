

function has_collided(){

    if(wall.x-bullet.x < wall.width/2+bullet.width/2&&
      bullet.x-wall.x < bullet.width/2+wall.width){
  bullet.velocityX=0;
  
    }
  }