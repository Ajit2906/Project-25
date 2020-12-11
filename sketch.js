
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
    ground=new Ground(400,700,800,20);
    ball=new Ball(100,680,20)
	box1= new Box(500,670,200,20);
	box2=new Box (400,630,20,100);
    box3= new Box (600,630,20,100);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
 ground.display();
box1.display();
ball.display();
//box2.display();
//box3.display();

}

function keyPressed(){
if(keyCode===UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{
	 x:45,y:-45
 })

}

}

