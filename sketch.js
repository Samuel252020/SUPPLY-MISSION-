var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground1, ground2, ground3;
var groundSprite1, groundSprite2, groundSprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite1=createSprite(width/2, height-30, 200, 20);
	groundSprite1.shapeColor=color(255, 0, 0);
	groundSprite2=createSprite(width/2-100-10, height-30-50+10, 20, 100);
	groundSprite2.shapeColor=color(255, 0, 0);
	groundSprite3=createSprite(width/2+100+10, height-30-50+10, 20, 100);
	groundSprite3.shapeColor=color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, ground1);
	ground2 = Bodies.rectangle(width/2-100-10, 650-50+10, 20, 100, {isStatic:true} );
	World.add(world, ground2);	 
	ground3 = Bodies.rectangle(width/2+100+10, 650-50+10, 20, 100, {isStatic:true} );
	World.add(world, ground3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody, false);
    }
}
