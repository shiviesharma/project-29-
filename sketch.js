function setup() {
  createCanvas(800, 400);
  var cradleBall = createSprite(400, 200, 50, 50);
  var cradle = createSprite(300, 200, 60, 40)
  
}

function draw() {
  background(255,255,255);  
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  ground = new Ground(700,200,20,400);

  box1 = new Box(500,200,30,40);
  box2 = new Box(470,200,30,40);
  box3 = new Box(440,200,30,40);
  box4 = new Box(410,200,30,40);
  box5 = new Box(380,200,30,40);
  box6 = new Box(350,200,30,40);
  box7 = new Box(320,200,30,40);
  
  box8 = new Box(480,160,30,40);
  box9 = new Box(450,160,30,40);
  box10 = new Box(420,160,30,40);
  box11 = new Box(390,160,30,40);
  box12 = new Box(360,160,30,40);

 
  box13 = new Box(460,120,30,40);
  box14 = new Box(430,120,30,40);
  box15 = new Box(400,120,30,40);

  box16 = new Box(430,80,30,40);

  polygon=bodies.circle(50,200,20);
  world.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:200});

  drawSprites();

}