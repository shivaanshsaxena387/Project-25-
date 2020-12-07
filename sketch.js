
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,400,40);
    Dustbin = new dustbin(1090,700);
    Dustbin.scale = 0.1
    Ground = new ground(600,695,1200,10)


  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  paper.display();
  Dustbin.display();

  //drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

