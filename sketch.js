
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var paperBall;
var part1, part2, part3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 670, 1000, 10);
	paperBall = new Paper(50,50,20);
	part1 = new Base(600, 657.5);
	part2 = new Boundries(523,622);
	part3 = new Boundries(678,622);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	Render.run(render);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
  paperBall.display(); 
  part1.display();
  part2.display();
  part3.display();

  drawSprites();
 
}

