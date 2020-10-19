
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;

function setup() {
	createCanvas(800, 700);
    background(0);

	engine = Engine.create();
	world = engine.world;

  roof = new Roof(width/2,(width/2)-250,width,30);
  bob1 = new Bob((width/2)-120,(width/2)+130,30);
  sling1 = new Chain(bob1.body,{x:(width/2)-120,y:(width/2)-250});
  bob2 = new Bob((width/2)-60,(width/2)+130,30);
  sling2 = new Chain(bob2.body,{x:(width/2)-60,y:(width/2)-250});
	bob3 = new Bob(width/2,(width/2)+130,30);
  sling3 = new Chain(bob3.body,{x:width/2,y:(width/2)-250});
  bob4 = new Bob((width/2)+60,(width/2)+130,30);
  sling4 = new Chain(bob4.body,{x:(width/2)+60,y:(width/2)-250});
  bob5 = new Bob((width/2)+120,(width/2)+130,30);
  sling5 = new Chain(bob5.body,{x:(width/2)+120,y:(width/2)-250});

}


function draw() {

  Engine.update(engine);	
  rectMode(CENTER);
  background(0); 

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:75});
 }
} 

