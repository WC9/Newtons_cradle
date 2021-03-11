const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var platform;
var chain, chain2, chain3, chain4, chain5;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(600, 50, 600, 30);

    bob1 = new Bob(350,170,30);
    bob2 = new Bob(410,170,30);
    bob3 = new Bob(470,170,30);
    bob4 = new Bob(530,170,30);
    bob5 = new Bob(590,170,30);

    chain = new Chain(bob1.body,{x:350,y:65});
    chain2 = new Chain(bob2.body,{x:410,y:65});
    chain3 = new Chain(bob3.body,{x:470,y:65});
    chain4 = new Chain(bob4.body,{x:530,y:65});
    chain5 = new Chain(bob5.body,{x:590,y:65});
    
}

function draw(){
    background("grey");
    Engine.update(engine);

   
    platform.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    chain.display();
    chain2.display();
    chain3  .display();
    chain4.display();
    chain5.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) { 
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-45}); 
    } 
}