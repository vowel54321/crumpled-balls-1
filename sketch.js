
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1= new Paper(100,20,20);
    ground = new Ground(200,660,1500,20);
    box1 = new Box(280,610,20,100);
   	box2= new Box(500,610,20,100);
  	box3= new Box(390,650,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}
function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-85});
  }
}


