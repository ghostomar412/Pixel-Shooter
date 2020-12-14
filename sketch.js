var bgIMG
var earth,earthIMG
var shooter,shooterIMG
var bullet,bulletIMG
var astr,astr1,astr2
var bulletGroup,astrGroup;
var gameState=0
var form
var score=0
var lives=3
var life,life1,life2,life3
var alien,alienIMG,spaceship
var edges;
var reset;
function preload(){
  bgIMG=loadImage("Images/bgIMG.png")
  earthIMG=loadImage("Images/earth.png")
  shooterIMG=loadImage("Images/shooter.png")
  astr1=loadImage("Images/astr1.png")
  astr2=loadImage("Images/astr2.png")
  over=loadImage("Images/gameOVER.jpg")
  start=loadImage("Images/demo.PNG
                  ")
  life=loadImage("Images/life.png")
  alienIMG=loadImage("Images/alien.png")
  spaceship=loadAnimation("Images/spaceship1.png","Images/spaceship2.png","Images/spaceship3.png","Images/spaceship4.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  earth=createSprite(150,height/2);
  earth.addImage(earthIMG);
earth.scale=3
  shooter=createSprite(550,height/2);
  shooter.addImage(shooterIMG)
  shooter.scale=0.3

  life1=createSprite(100,20)
  life1.addImage(life);
  life1.scale=0.1
  life2=createSprite(150,20)
  life2.addImage(life)
  life2.scale=0.1
  life3=createSprite(200,20)
  life3.addImage(life)
  life3.scale=0.1

  bulletGroup=new Group();
  astrGroup= new Group();
  form= new Form();

  edges=createEdgeSprites();
}

function draw() {
  if(gameState===0){
    background(start);
  form.display();
  }

  else if(gameState===1){
form.hide();
d
  console.log(gameState);
  background(bgIMG);
   if (lives===3){
    life1.visible=true
    life2.visible=true
    life3.visible=true

  }
  if(keyDown(UP_ARROW)){
    shooter.y=shooter.y-15
  }  
  if(keyDown(DOWN_ARROW)){
    shooter.y=shooter.y+15
  }  
  if(touches.length > 0 ||keyDown("space")&& frameCount%15===0){
    spawnBullet();
    touches = []
  }
  spawnAstr();
  spawnAlien()
  drawSprites();
  if(bulletGroup.isTouching(astrGroup)){
    astrGroup.destroyEach();
    bulletGroup.destroyEach();
    score=score+10
  }
  
  if(astrGroup.isTouching(earth)||lives===0){
    life1.visible=false;
    
    gameState=2
    
  }
  if (astrGroup.isTouching(shooter)){
    lives=lives-1
    astrGroup.destroyEach();
    if(lives===2){
      life3.visible=false;
    }
    else if(lives===1){
      life3.visible=false;
      life2.visible=false;
    }
    
  }

  textSize(20)
fill(255);
text("Score:"+score,100,height-20);
}
else if(gameState===2){
  astrGroup.setVelocityEach(0,0)
  bulletGroup.setVelocityEach(0,0)
  bulletGroup.destroyEach();
  astrGroup.destroyEach();
  background(over)
  form.end();
  score=0;
lives=3

}

}
function spawnBullet(){

  bullet=createSprite(shooter.x+50,shooter.y,30,10)
  bullet.shapeColor=("red")
  bullet.velocityX=15

  bulletGroup.add(bullet)
  bullet.lifetime=1000
}
function spawnAstr(){
  if(frameCount%120===0){
  var astr=createSprite(width,random(0,height),20,20)
  var ran=Math.round(random (1,2))
  switch(ran){
    case 1:astr.addImage(astr1);
    break;
    case 2:astr.addImage(astr2);
    break;
    default:break
  }
  if(gameState===1){
  astr.velocityX=-(25+(score/100))
  }
  astrGroup.add(astr)
  astr.lifetime=500
}
}
function spawnAlien(){
  if(frameCount%180===0&&score>190){
  var alien=createSprite(width,random(0,height),20,20)
  var ran=Math.round(random (1,2))
  switch(ran){
    case 1:alien.addImage(alienIMG);
    alien.scale=0.5
    break;
    case 2:alien.addAnimation("hardcore",spaceship);
    alien.scale=0.7
    break;
    default:break
  }
  if(gameState===1){
  alien.velocityX=-(20+(score/100))
  alien.velocityY=Math.round(random(-3,3))
  }
  astrGroup.add(alien)
  alien.lifetime=500

  alien.bounceOff(edges[2])
  alien.bounceOff(edges[3])
}
}
