var mario,m1,edges,ground,floor,iground,goomb,gameState=PLAY,PLAY=1,END=0,ggroup,ded
function preload(){
  m1=loadAnimation("imageedit_1_7210834590.png","imageedit_2_2649677694.png","imageedit_3_5550126001.png")
  ground=loadImage("ground.png")
  goomb=loadAnimation("goomba1.png","goomba2.png")
  
}
function setup() {
  createCanvas(800,400);
  mario = createSprite(20,300,10,50);
  mario.addAnimation ("t1",m1)
  floor=createSprite(400,390,800,10)
  floor.addImage("f1",ground)
  floor.scale=0.4
  mario.scale=1.5
  iground=createSprite(400,300,800,10)
  edges=createEdgeSprites()
  ggroup=createGroup()
}

function draw() {
  background(0);  
 mario.depth=floor.depth+1
 
mario.velocityY=mario.velocityY+0.6
mario.collide(iground)
iground.visible=false
if (gameState=PLAY){
  if (keyDown("space"))
  { mario.velocityY=-4
    
  }
  if(keyDown("d")){
    mario.velocityX=+6
  }
  if(keyDown("a")){
    mario.velocityX=-6
  }
 if (mario.isTouching(ggroup)) {
   gameState=END

 }
}
if(gameState===END )
{ 
  mario.velocityX=0
  mario.velocityY=0


}

drawSprites();
GoombaSpawn();


}
function GoombaSpawn(){
  if(frameCount%160===0)
 
  {var Goomba=createSprite(800,280,10,50)
    Goomba.velocityX=-4  
    Goomba.addAnimation("p1",goomb)
    Goomba.scale=1.5
    Goomba.collide(iground)
    Goomba.depth=floor.depth+1
    ggroup.add(Goomba)

  }

}




