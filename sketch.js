
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var groundObject;
var rope1,rope2,rope3,rope5;
var BobDiameter;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  BobDiameter = 40;
  groundObject=new Ground(400,200,300,40)
  startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	//Create the Bodies Here.
bobObject1=new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter);
bobObject2=new Bob(startBobPositionX-BobDiameter,startBobPositionY,BobDiameter);
bobObject3=new Bob(startBobPositionX,startBobPositionY,BobDiameter);
bobObject4=new Bob(startBobPositionX+BobDiameter,startBobPositionY,BobDiameter);
bobObject5=new Bob(startBobPositionX+BobDiameter*2,startBobPositionY,BobDiameter);




rope1= new Rope(bobObject1.body,groundObject.body,BobDiameter*-2,0);
rope2= new Rope(bobObject2.body,groundObject.body,BobDiameter*-1,0);
rope3= new Rope(bobObject3.body,groundObject.body,BobDiameter*0,0);
rope4= new Rope(bobObject4.body,groundObject.body,BobDiameter*1,0);
rope5= new Rope(bobObject5.body,groundObject.body,BobDiameter*2,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  groundObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
  }
}


