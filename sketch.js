
var PLAY = 1;
var END = 0;
var gameState = 1; 
var fruit1, fruit2, fruit3, fruit4, gameover, alien1, alien2, sword
var fruit1Image, fruit2Image, fruit3Image, fruit4Image,gameoverImage, alien1Image, alien2Image, swordImage
var fruitGroup,enemyGroup
var score


    
    
function preload(){
  
  alien1Image =     loadAnimation("alien1.png","alien2.png")
  fruit1Image = loadImage("fruit1.png")
  fruit2Image = loadImage("fruit2.png")
  fruit3Image = loadImage("fruit3.png")
  fruit4Image = loadImage("fruit4.png")
  gameoverImage = loadImage("gameover.png")
  swordImage = loadImage("sword.png")
   
}
function setup() {
  createCanvas(600,600)
  
  sword = createSprite(40,200,20,20)
  sword.addImage(swordImage)
  
  fruitGroup = new Group();
  enemyGroup = new Group();
  score=0
  
  
}

function draw() {
  background("cyan")
  if(gameState===PLAY){
    fruits();
  enemy();
   text("score "+score,300,30);
    
 sword.y=World.mouseY
 sword.x=World.mouseX 
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2
    
     }  
   else{
     if(enemyGroup.isTouching(sword)){
       gameState=END
       fruitGroup.destroyEach();
       enemyGroup.destroyEach();
       fruitGroup.setVelocityXEach(0);
       enemyGroup.setVelocityXEach(0);
       sword.addImage(gameoverImage);
       sword.x=200;
       sword.y=200;
       
     }
   } 
    
  }
  
  
    drawSprites();
  }
function fruits (){
  if(World.frameCount%80===0){
    var position=Math.round(random(1,2))
    {
      
    }
    fruit = createSprite(400,200,20,20);
    if(position==1){
      fruit.x=400;
      fruit.velocityX=-7
    }
    else{
      if(position==2)
        fruit.x=0
        fruit.velocityX=7
      
    }
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1Image)
    } else if(r==2){
      fruit.addImage(fruit2Image)
    }else if(r==3){
      fruit.addImage(fruit3Image)
    }else{
      fruit.addImage(fruit4Image)
    }
    
    fruit.y=Math.round(random(50,340));
    
    //fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add (fruit);
       
      }
   }
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("run",alien1Image);
    
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50
    enemyGroup.add(monster);
     }
  }

