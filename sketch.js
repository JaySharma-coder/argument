var j,jas;

function setup() {
  createCanvas(1000,400);
  j=createSprite(400, 200, 50, 50);
  jas=createSprite(800,200,100,100);
  
  object1=createSprite(100,100,50,50);
  object2=createSprite(200,100,50,50);
  object3=createSprite(300,100,50,50);
  object4=createSprite(400,100,50,50);

}

function draw() {
  background(255,255,255);  
  j.x=World.mouseX;

  j.y=World.mouseY;
  
  if(isTouching(object4,j)){
    j.shapeColor="red"
    object4.shapeColor="red"
  }

  else{
    j.shapeColor="green"
    object4.shapeColor="green"
  }

  drawSprites();
}
