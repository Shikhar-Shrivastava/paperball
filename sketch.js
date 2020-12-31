
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinIMG = loadImage("gdb.png")
	pb= loadImage("no.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	ballsprite= createSprite(0,0)
	ballsprite.addImage(pb)
	ballsprite.scale=0.4
	
	ball = new cball(100,100,25);

	theground = new Ground(400, 675, 800,20)

	stopper = new Ground(0.1,625,10,100)
	stopper2 = new Ground(800.1,625,10,800)

	box = new Box(582,571,13,185)
	box2 = new Box(716,571,13,185)
	box3 = new Box(650,665,145,5)

	dustbin = createSprite(650,575)
	dustbin.addImage(dustbinIMG)
	dustbin.scale=0.585

	
	Engine.run(engine);
  
}


function draw() {
  background("lightgreen");
  rectMode(CENTER);

  //ball.display();
  ballsprite.x = ball.body.position.x
  ballsprite.y = ball.body.position.y

  theground.display()

  stopper.display()
  stopper2.display()


  box.display();
  box2.display();
  box3.display();
  
  
 ballthrow();
  
  drawSprites();
}

function ballthrow(){
	if(keyWentDown(RIGHT_ARROW)){
		Body.applyForce(ball.body,ball.body.position,{x:105,y:-110})
	}
	else if(keyWentDown(LEFT_ARROW)){
		Body.applyForce(ball.body,ball.body.position,{x:-105,y:-110})
	}
}

