const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sun;
var planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  planet1 = new Ball(280, 130, 20, "red");
  planet2 = new Ball(280, 290, 10, "green");
  planet3 = new Ball(430, 360, 20, "purple");
  planet4 = new Ball(450, 40, 30, "blue");
  planet5 = new Ball(650, 100, 15, "turquoise");
  planet6 = new Ball(650, 350, 20, "grey");
  planet7 = new Ball(160, 230, 30, "orange");
  planet8 = new Ball(580, 200, 8, "red");
  sun = new Sun (450, 200, 70, "yellow");
}

function draw() {
  background("black");  
  Engine.update(engine);
  planet1.display();
  planet2.display();
  planet3.display();
  planet4.display();
  planet5.display();
  planet6.display();
  planet7.display();
  planet8.display();
  sun.display();
  drawSprites();
}