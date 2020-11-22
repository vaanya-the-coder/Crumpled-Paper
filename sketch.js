
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, dustbinBase, dustbinSide1, dustbinSide2, paper;


function setup() {
	var canvas = createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,680,1600,20);

	dustbinBase = new Dustbin(1200,660,200,20);
	dustbinSide1 = new Dustbin(1100,600,20,100);
	dustbinSide2 = new Dustbin(1300,600,20,100);

	paper = new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  Engine.update(engine);


  drawSprites();

  ground.display();
  dustbinBase.display();
  dustbinSide1.display();
  dustbinSide2.display();
  paper.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}



