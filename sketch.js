
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
  score=0;
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 

 
  FoodGroup = new Group();
  obstacleGroup =  new Group();
  
}


function draw() {

  background(200);


  if (ground.x < 0 ){
      ground.x = ground.width/2;
    }
 
  
   if(keyDown("space")&& monkey.y >=300) {
      monkey.velocityY = -18;
   }
  monkey.velocityY = monkey.velocityY + 0.8
  
switch(score){
  case 10:monkey.scale =0.14
    break;
  case 20:monkey.scale =0.16
    break;  
  case 30:monkey.scale =0.18
    break;  
  case 40:monkey.scale =0.2
    break;  
}

  monkey.collide(ground);
  
  spawnfood(); 
  spawnObstacles();
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score,300,40); 
  
   
  if(obstacleGroup.isTouching(monkey)){  
   monkey.scale = monkey.scale-0.01; 
   obstacleGroup.destroyEach();
   score=score-1 
  } 
 
 if (FoodGroup.isTouching(monkey)){
   score = score+1;
   FoodGroup.destroyEach();
   monkey.scale=monkey.scale+0.01 
 } 
  
}

function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(150,180);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -8;
    monkey.depth = banana.depth + 1;
    
     //assign lifetime to the variable
    banana.lifetime = 190;

    FoodGroup.add(banana);

  }}


function spawnObstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(600,310,10,40);
   obstacle.velocityX = -6;  
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.15
   obstacle.lifetine=300
   obstacleGroup.add(obstacle);
   
 }}
