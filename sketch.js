var lion, lionImage;
var bullet, bulletImage;
var hunter, hunterImage;
var huntig, huntingImage
var backgroundImage;
var rock, rockImage;
var cactus, cactusImage;

var bg;
var ground;


function preload() 
{
  lionImage = loadAnimation("0.gif","1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif","13.gif","14.gif","15.gif")
  
  hunterImage = loadAnimation("unnamed.gif")
  huntingImage = loadAnimation("hunter.gif")
  backgroundImage = loadImage("BACKGROUND .jpg")

  rockImage = loadImage("rock.png")

  cactusImage = loadImage("cactus.png")

  bulletImage = loadImage("bullet.png")
  
}

function setup()
{
  createCanvas(700,600)
  bg = createSprite(350,300)
  bg.addImage(backgroundImage)
  bg.scale = 1.5
   bg.velocityX = -1
  
  ground = createSprite(350,450,700,20)
  
  hunter = createSprite(100,350,20,20)
  hunter.addAnimation("hunter",hunterImage)
  hunter.scale = 1
  
  bullet = createSprite(115,376,10,10)
  
  fill("black")
  
 
}

function draw()
{
  background("black")
  
  if(bg.x -220<0)
    {
      bg.x = bg.width/2
    }
  
    if(keyWentDown ("SPACE"))
    {
      Spawnbullets()
      
    }
     
  Spawnanimals()
  Spawnrock()
  Spawncactus()
  Spawnbullets()
  drawSprites()
  
  text(mouseX+","+mouseY,mouseX,mouseY)
  
  
}

function Spawnanimals()
{
  if(World.frameCount%500===0)
  {
  lion = createSprite(750,400,20,20)
    lion.addAnimation("lion",lionImage)
    lion.scale= 0.5
  lion.velocityX = -5
  }
}

function Spawnrock ()
{
  if (World.frameCount%213===0)
  {
    rock = createSprite(750,400,20,20)
    rock.addImage(rockImage)
    rock.scale = 0.5
    rock.velocityX = -5  
  }
}

function Spawncactus ()
{
 if (World.frameCount%353===0)
 {
   cactus = createSprite(750,400,20,20)
   cactus.addImage(cactusImage)
   cactus.scale = 0.5
   cactus.velocityX = -5
 }
}

function Spawnbullets ()
{
 bullet = createSprite(130,377,20,20)
 bullet.addImage(bulletImage)
 bullet.scale = 0.1
 bullet.velocityX = 5
 
}