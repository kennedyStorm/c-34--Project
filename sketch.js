
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


var ground;
var vertical1,vertical2
var horizontal1
var boundary1,boundary2,boundary3,boundary4
var ball;
var angel_boy;
var button1,button2;

var text,text2


function setup() {
  createCanvas(1000,1000);

  engine = Engine.create();
  world = engine.world;
  // button1= createImg()
  // button1.position(220,30);
  // button1.size(50,50);
  // button1.mouseClicked(hForce);

  // button2 = createImg("up.png");
  // button2.position(20,30);
  // button2.size(50,50);
  // button2.mouseClicked(vForce)
  
  ground =new Ground(180,100,950,20);
  // ground2 = new Ground(796,500,400,20);
  // ground3 =new Ground(796,800,800,20)

  vertical1 = new Ground(80,900,20,1400);
  vertical2 = new Ground(200,900,20,1400)

  horizontal1 = new Ground(140,990,150,20)

  boundary1 = new Ground(0,0,20,9000)
  boundary2 = new Ground(0,0,9000,20)
  boundary3 = new Ground(1000,0,20,9000)
  boundary4 = new Ground(0,1000,9000,20)

  // text = text("Move the ball in the dustbin->Use right and left arrow keys",10,10,10)


  var ball_options={
    restitution: 0.75,
    frictionAir: 0.09
    
    
 
  }

  ball = Bodies.circle(30,6,15,ball_options);
  
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);


  
}


function draw() 
{
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);

  ground.show()
  // ground2.show()
  // ground3.show()
  
  vertical1.show()
  vertical2.show()
  horizontal1.show()
  boundary1.show()
  boundary2.show()
  boundary3.show()
  boundary4.show()
  // text.show()

  // matter.Body.rotate(ground2,5)
  // Matter.Collision.collides(ball,ground)
  // Matter.Collision.collides(ball,ground2)

  // Matter.Collision.collides(ball,vertical1)
  // Matter.Collision.collides(ball,vertical2)

  // Matter.Collision.collides(ball,horizontal1)

  // Matter.Collision.collides(ball,boundary1)
  // Matter.Collision.collides(ball,boundary2)
  // Matter.Collision.collides(ball,boundary3)
  // Matter.Collision.collides(ball,boundary4)

 
}

function keyPressed(){
	if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0})

		
	}

  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0.005})
   
    
  }
 
}