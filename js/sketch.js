const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    Z1 = loadImage("images/babyhusk.png");
    Z2 = loadImage("images/husk");
    Z3 = loadImage("images/babyzombie.png");
    Z4 = loadImage("images/zomdie.png");
    right = loadImage("images/heleft.png");
    left = loadImage("images/heside.png");
    front = loadImage("images/hefront.png");
    back = loadImage("images/heback.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    World = engine.world;
}