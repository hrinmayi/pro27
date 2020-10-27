
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(255);
	engine = Engine.create();
	world = engine.world;
	bobDiameter=20;
bob1=new Bob(100,400,45);
bob2=new Bob(200,400,45);
bob3=new Bob(300,400,45);
bob4=new Bob(400,400,45);
bob5=new Bob(500,400,45);
roof= new Roof(400,200,450,20);
rope=new Chain(bob1.body,roof.body,bobDiameter*2,8);
rope=new Chain(bob2.body,roof.body,bobDiameter*2,8);
rope=new Chain(bob3.body,roof.body,bobDiameter*2,8);
rope=new Chain(bob4.body,roof.body,bobDiameter*2,8);
rope=new Chain(bob5.body,roof.body,bobDiameter*2,8);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites();
 
}



