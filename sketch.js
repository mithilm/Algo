var movingRect, FixedRect;


function setup() {
  createCanvas(1200,800);
  FixedRect = createSprite(400, 200, 50, 50);
  MovingRect = createSprite(200, 200, 50, 50);

  MovingRect.shapeColor = "red"
  FixedRect.shapeColor = "red"

}

function draw() {
  background("grey");  

  MovingRect.x = mouseX
  MovingRect.y = mouseY

  if(MovingRect.x - FixedRect.x < MovingRect.width/2 + FixedRect.width/2 && 
    FixedRect.x - MovingRect.x < MovingRect.width/2 + FixedRect.width/2 &&
    MovingRect.y - FixedRect.y < MovingRect.height/2 + FixedRect.height/2 &&
    FixedRect.y - FixedRect.y < MovingRect.height/2 + FixedRect.height/2 )
  {
    MovingRect.shapeColor = "green"
    FixedRect.shapeColor = "green"
  }
  else
  {
    MovingRect.shapeColor = "red"
    FixedRect.shapeColor = "red"
  }

  console.log(MovingRect.x - FixedRect.x);


  drawSprites();

}