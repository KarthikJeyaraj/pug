var paper, paperview
var pug, fibi
var skate,  skateboard
var floor, woodfloor
var floor2
var floor3
var toygroup
var blocktoy


function preload(){
    paperview=loadImage("paper.jpeg")
    fibi=loadImage("pug.png")
    skateboard=loadImage("skate.png")
    woodfloor=loadImage("floor.png")
    blocktoy=loadImage("toy.png")
    


}

function setup() {
 createCanvas(800,400)
 paper=createSprite(400,200,50,50)
 paper.addImage(paperview)
 paper.scale=2
 pug=createSprite(715,275,50,50)
 pug.addImage(fibi)
 pug.scale=0.35
 skate=createSprite(710,460,50,50)
 skate.addImage(skateboard)
 skate.scale=0.45
 floor=createSprite(400,480,50,50)
 floor.addImage(woodfloor)
 floor.scale=2
 floor2=createSprite(400,470,800,20)
 floor2.visible=false 
 floor3=createSprite(400,380,800,20)
 floor3.visible=false 
 toygroup=new Group()




}

function draw() {
 drawSprites()
 skate.depth= pug.depth
 pug.depth= pug.depth+1
 skate.collide(floor2)
 skate.velocityY=4
 pug.collide(floor3)
 pug.velocityY=4
 floor.velocityX=15
 if(floor.x>600){
   floor.x=60
 }
 console.log(pug.y)
 toy()
 if(keyIsDown("space")&& pug.y>278){
    //skate.velocityY=-100
    //pug.velocityY=-100
    skate.velocityY=skate.velocityY-20
    pug.velocityY=pug.velocityY-20
  }

  skate.velocityY=skate.velocityY+4
  pug.velocityY=pug.velocityY+3.5

} 



function toy(){
 if(frameCount%80===0){
   var toy
    toy=createSprite(-20,300,20,20)
    toy.scale=0.5
    toy.addImage(blocktoy)
    toy.velocityX= 15
    toy.lifetime=168
    toygroup.add(toy)
    
    }
}