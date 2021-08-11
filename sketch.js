const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1000, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Box(890,495,162,15);
	box2 = new Box(970,418,15,170);
	box3 = new Box(801,418,15,170);
	
	ground1 = new Ground(0,520,120000,30);
	
	paper1 = new Paper(50,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("lightyellow");
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,786,310,200,200);
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



