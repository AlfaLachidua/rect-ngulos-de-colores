var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  //Rectángulo fijo
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = "purple";
  rect1. debug = true;
  //Rectángulo que se mueve
  rect2 = createSprite(400,200,80,30);
  rect2.shapeColor = "purple";
  rect2. debug = true;
}

function draw() {
  background("pink");  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
  if (rect2.x - rect1.x < rect1.width/2 + rect2.width/2 && rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.y - rect1.y < rect1.height/2 + rect2.height/2 && rect1.y - rect2.y < rect1.height/2 + rect2.height/2){
    rect2.shapeColor = "blue";
    rect1.shapeColor = "blue";
  }
  else {
    rect2.shapeColor = "purple";
    rect1.shapeColor = "purple";
  }
  drawSprites();
}