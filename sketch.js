

var tile1;
var tile2;
var tile3;
var tile4;
var ball;
var edge1,edge2,edge3,edge4;
function preload(){
    tile1 = createSprite(100,550,100,20);
    tile1.shapeColor = "red";
     //tile1.debug = true;

    tile2 = createSprite(250,550,100,20);
    tile2.shapeColor = "green";
     //tile2.debug = true;

    tile3 = createSprite(400,550,100,20);
    tile3.shapeColor = "blue";
    //tile3.debug = true;

    tile4 = createSprite(550,550,100,20);
    tile4.shapeColor = "yellow";
    //tile4.debug = true;

    edge1= createSprite(100,5,1500,1);
    edge1.shapeColor = "black";
    //edge1.debug = true;

    edge2= createSprite(5,300,1,1500);
    edge2.shapeColor = "black";
    //edge2.debug = true;

    edge3= createSprite(795,500,1,1000);
    edge3.shapeColor = "black";
    //edge3.debug = true;

   
    edge4= createSprite(800,600,1700,1);
    edge4.shapeColor = "black";
      //edge4.debug = true;

      ball= createSprite(100,100,50,50,20);
      ball.shapeColor = "White";
       //ball.debug = true;

       
   
     
}


function setup(){
    createCanvas(800,600);
    ball.velocityX = 9;
  ball.velocityY = 7;
   
  
   
    //create 4 different surfaces
   
      

   
     
     

    //create box sprite and give velocity
  
}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
 
  

    //add condition to check if box touching surface and make it box
    if(ball.isTouching(tile1) && ball.bounceOff(tile1)){
      if(isTouching(tile1,ball)){
        ball.shapeColor = "white";
        tile1.shapeColor = "red";
      }
      else{
        ball.shapeColor = "red";
        tile1.shapeColor = "red";
      }

        if(ball.isTouching(tile1)){
        tile1.shapeColor = "blue"
    }
    function isTouching(tile1,tile2){
      if (tile1.x - tile2.x < tile2.width/2 + tile1.width/2
        && tile2.x - tile1.x < tile2.width/2 + tile1.width/2
        && tile1.y - tile2.y < tile2.height/2 + tile1.height/2
        && tile2.y - tile1.y < tile2.height/2 + tile1.height/2) {
     
          return true;
    
      
    }
    else {
      return false;
    }
    }
    function bounce(tile1,tile2){
      if (tile1.x - tile2.x < tile2.width/2 + tile1.width/2
        && tile2.x - object1.x < tile2.width/2 + tile1.width/2){
          tile1.velocityX = tile1.velocityX * (-1);
          tile2.velocityX = tile2.velocityX * (-1);
        }
    
        if(tile1.y - tile2.y < tile2.height/2 + tile1.height/2
          && tile2.y - tile1.y < tile2.height/2 + tile1.height/2){
            tile1.velocityY = tile1.velocityY*(-1)
            tile2.velocityY = tile2.velocityY*(-1);
          }
    }
    
    
  
    }


    if(tile2.isTouching(ball) && ball.bounceOff(tile2)){
      if(isTouching(tile2,ball)){
        ball.shapeColor = "white";
        tile2.shapeColor = "red";
      }
      else{
        ball.shapeColor = "green";
        tile1.shapeColor = "red";
      }

        if(ball.isTouching(tile1)){
        tile1.shapeColor = "blue"
    }
    function isTouching(tile1,tile2){
      if (tile1.x - tile2.x < tile2.width/2 + tile1.width/2
        && tile2.x - tile1.x < tile2.width/2 + tile1.width/2
        && tile1.y - tile2.y < tile2.height/2 + tile1.height/2
        && tile2.y - tile1.y < tile2.height/2 + tile1.height/2) {
     
          return true;
    
      
    }
    else {
      return false;
    }
    }
    function bounce(tile1,tile2){
      if (tile1.x - tile2.x < tile2.width/2 + tile1.width/2
        && tile2.x - object1.x < tile2.width/2 + tile1.width/2){
          tile1.velocityX = tile1.velocityX * (-1);
          tile2.velocityX = tile2.velocityX * (-1);
        }
    
        if(tile1.y - tile2.y < tile2.height/2 + tile1.height/2
          && tile2.y - tile1.y < tile2.height/2 + tile1.height/2){
            tile1.velocityY = tile1.velocityY*(-1)
            tile2.velocityY = tile2.velocityY*(-1);
          }
    }
    }


    if(tile3.isTouching(ball) && ball.bounceOff(tile3)){
      if(isTouching(tile3,ball)){
        ball.shapeColor = "white";
        tile3.shapeColor = "red";
      }
      else{
        ball.shapeColor = "blue";
        tile3.shapeColor = "blue";
      }

        if(ball.isTouching(tile1)){
        tile1.shapeColor = "blue"
    }
    function isTouching(tile1,tile2){
      if (tile1.x - tile2.x < tile2.width/2 + tile1.width/2
        && tile2.x - tile1.x < tile2.width/2 + tile1.width/2
        && tile1.y - tile2.y < tile2.height/2 + tile1.height/2
        && tile2.y - tile1.y < tile2.height/2 + tile1.height/2) {
     
          return true;
    
      
    }
    else {
      return false;
    }
    }
    function bounce(tile1,tile2){
      if (tile1.x - tile2.x < tile2.width/2 + tile1.width/2
        && tile2.x - object1.x < tile2.width/2 + tile1.width/2){
          tile1.velocityX = tile1.velocityX * (-1);
          tile2.velocityX = tile2.velocityX * (-1);
        }
    
        if(tile1.y - tile2.y < tile2.height/2 + tile1.height/2
          && tile2.y - tile1.y < tile2.height/2 + tile1.height/2){
            tile1.velocityY = tile1.velocityY*(-1)
            tile2.velocityY = tile2.velocityY*(-1);
          }
    }
    }

    if(tile4.isTouching(ball) && ball.bounceOff(tile4)){
      if(isTouching(tile4,ball)){
        ball.shapeColor = "yellow";
        tile4.shapeColor = "yellow";
      }
      else{
        ball.shapeColor = "yellow";
        tile4.shapeColor = "yellow";
      }

        if(ball.isTouching(tile4)){
        tile1.shapeColor = "yellow"
    }
    function isTouching(tile3,tile3){
      if (tile3.x - tile4.x < tile4.width/2 + tile3.width/2
        && tile4.x - tile3.x < tile4.width/2 + tile3.width/2
        && tile3.y - tile4.y < tile4.height/2 + tile3.height/2
        && tile4.y - tile1.y < tile4.height/2 + tile3.height/2) {
     
          return true;
    
      
    }
    else {
      return false;
    }
    }
    function bounce(tile3,tile4){
      if (tile3.x - tile4.x < tile4.width/2 + tile3.width/2
        && tile4.x - tile3.x < tile4.width/2 + tile3.width/2){
          tile3.velocityX = tile3.velocityX * (-1);
          tile4.velocityX = tile4.velocityX * (-1);
        }
    
        if(tile3.y - tile4.y < tile4.height/2 + tile3.height/2
          && tile4.y - tile3.y < tile4.height/2 + tile3.height/2){
            tile3.velocityY = tile3.velocityY*(-1)
            tile4.velocityY = tile4.velocityY*(-1);
          }
    }
    }

    if(edge1.isTouching(ball) && ball.bounceOff(edge1)){

    }

    if(edge2.isTouching(ball) && ball.bounceOff(edge2)){

    }

    if(edge3.isTouching(ball) && ball.bounceOff(edge3)){

    }


    if(edge4.isTouching(ball) && ball.bounceOff(edge4)){

    }
  
    drawSprites();
}

