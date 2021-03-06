const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground,platform,platform1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var score=0
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  stroke(255)
  ground = new Ground(600,height,1200,20);
  platform = new Ground(350,400,300,20)
 platform1 = new Ground(650,350,200,20)

 //first
 block1 = new block(310,360)
 block2 = new block(320,360)
 block3 = new block(330,360)
 block4 = new block(350,360)
 block5 = new block(350,360)
 block6 = new block(380,360)
 block7 = new block(370,360)

 //second
 block11 = new block(370,330)
 block12 = new block(320,330)
 block13 = new block(330,330)
 block14 = new block(350,330)
 block15 = new block(350,330)

 //third

 block21 = new block(320,300)
 block22 = new block(340,300)
 block23 = new block(350,300)
 block24 = new block(360,300)


 //fourth
 block31 = new block(340,280)
 block32 = new block(350,280)

 //fifth
 block41 = new block(345,250)

 box1 = new block(610,330)
 box2 = new block(620,330)
 box3 = new block(630,330)
 box4 = new block(650,330)
 box5 = new block(670,330)

 box6 = new block(620,300)
 box7 = new block(630,300)
 box8 = new block(650,300)

 box9 = new block(630,280)

 polygon1=new Polygon(75,460,50,50);
  launch=new SlingShot(polygon1.body,{x:75,y:200});

}

function draw() {

  background("brown");
  text(mouseX+","+mouseY,mouseX,mouseY)  
  Engine.update(engine);
  platform.shapeColor="blue"
  ground.display()
  platform.display()
  platform1.display()

  block1.score()
  block2.score()
 block3.score()
  block4.score()
  block5.score()
 block6.score()
 block7.score()
 block11.score()
  block12.score()
 block13.score()
  block14.score()
  block15.score()
 block21.score()
 block22.score()
 block23.score()
 block24.score()
 block31.score()
 block32.score()
 block41.score()
 box1.score()
 box2.score()
 box3.score()
 box4.score()
 box5.score()
 box6.score()
 box7.score()
 box8.score()
 box9.score()

 block1.display()
  block2.display()
 block3.display()
  block4.display()
  block5.display()
 block6.display()
 block7.display()
 block11.display()
  block12.display()
 block13.display()
  block14.display()
  block15.display()
 block21.display()
 block22.display()
 block23.display()
 block24.display()
 block31.display()
 block32.display()
 block41.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()

 polygon1.display()
 launch.display()

 text("SCORE :"+score,700,40);

 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
launch.fly();

}

function keyPressed (){
if(keyCode === 32){
Matter.Body.setPosition(polygon1.body,{x:75, y:200});
    
launch.attach(polygon1.body);
}
} 