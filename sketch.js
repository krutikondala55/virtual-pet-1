//Create variables here
var dog, happyDog,dogimg
var database
var foodS, foodStock

function preload()
{
  //load images here
  dogimg=loadImage("dogimg.png")
  happyDog=loadImage("dogimg.png")
}
function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock)
 
 
  
}


function draw() {  
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }
  dog=createSprite(400,400)
  dog.addImage(dogimg)
  drawSprites();
  //add styles here
  text("press up arrow for foodstock")
  fill("blue")
  textSize(10)
}
function readStock(data)
{
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

