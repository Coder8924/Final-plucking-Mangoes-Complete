const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;
const Body = Matter.Body;

var boyImg,boy;
var stone;
var gulel;
var ground;
var treeObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world, engine;
var boy,boyImg;

function preload() {
boyImg = loadImage("images/boy.png")
}

function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(650,580,width,20)

  stone = new Rock(230,430,30);

  treeObj = new Tree();

  mango1 = new Mango(900,200,35);
  mango2 = new Mango(1050,100,35);
  mango3 = new Mango(950,20,35);
  mango4 = new Mango(1000,200,35);
  mango5 = new Mango(950,100,35);
  mango6 = new Mango(800,250,35);
  mango7 = new Mango(870,29,35);
  mango8 = new Mango(1150,200,35);
  mango9 = new Mango(1100,150,35);
  mango10 = new Mango(800,150,35);

  gulel = new SlingShot(stone.body,{x: 230, y:420});

}

function draw() {
  background("lightgrey");  
  Engine.update(engine);
image(boyImg,200,340,200,300);

ground.display();
stone.display();
treeObj.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

gulel.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);


}

function mouseDragged() {
 // if(gameState!=="launched") {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 // }
}

function mouseReleased() {
gulel.fly();
gameState = "launched";
}


function keyPressed() {
  if(keyCode===32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420})
    launcherObject.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y);
if(distance<=lmango.r+stone.r){
  Matter.Body.setStatic(lmango.body,false);
 }
}