const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, stone, mango, tree;
var boyImage, stoneImage, mangoImage, treeImage;

function preload() {
	boyImage = loadImage('PluckingMangoes/boy.png');
	mangoImage = loadImage('PluckingMangoes/mango.png');
	treeImage = loadImage('PluckingMangoes/tree.png');
	stoneImage = loadImage('PluckingMangoes/stone.png');
}

function setup() {
	createCanvas(1400, 600);

	tree = createSprite(300, 325, 20, 20);
	tree.addImage(treeImage);
	tree.scale = 0.5;

	var ground = createSprite(1400, 600, 2800, 20);
	ground.shapeColor = 'blue';

	boy = createSprite(650, 505, 20, 20);
	boy.addImage(boyImage);
	boy.scale = 0.15;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(580, 405, 50, 50);

	mango1 = new Mango(300, 200, 20);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(255, 255, 0);

	drawSprites();
	stone.display();
	mango1.display();
}
