
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crmp, dst1, dst2, dst3, ground;
var dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

                                                                                                                       
	engine = Engine.create();
	world = engine.world;

  crmp = new Ball(200,350);
  dst1 = new Dustbin(600,620,10,80);  
  dst2 = new Dustbin(650,670,100,10); 
  dst3 = new Dustbin(710,620,10,80);

  ground = new Ground(400,690,800,20);
  
	Engine.run(engine);
  
}


function draw() {
  

  
  background(255);
  crmp.display();
  dst1.display();
  dst2.display();
  dst3.display();
  ground.display();
  image(dustbinImage, 605,580,100,80)
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    Matter.Body.applyForce(crmp.body, crmp.body.postion, {x:105,y:-75});
  }
}

