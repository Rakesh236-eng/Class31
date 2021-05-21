
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];
function preload()
{

}


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  // Create the Bodies Here.
  ground = new Ground(400,690,800,20);

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}