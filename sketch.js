
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprite;
var engine, world; 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 200);
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	ground = Bodies.rectangle(width/2, 150, width, 10 , {isStatic:true} );
	World.add(world, ground);

	cPaper = new Paper (150, 145, 20);
	dustBin = new DustBin (950,160);
	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);
  
   cPaper.display();
   dustBin.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(cPaper.body, cPaper.body.position,{x:55, y:-85});
	}
}



