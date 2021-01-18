
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 200, 225, 20);

	bobObject1 = new Bob(336, 450);
	bobObject2 = new Bob(368, 450);
	bobObject3 = new Bob(400, 450);
	bobObject4 = new Bob(432, 450);
	bobObject5 = new Bob(464, 450);

	rope1 = new Rope(bobObject1.body, roof.body, -64, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -32, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 32, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 64, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -40, y: 40})

	}
}



