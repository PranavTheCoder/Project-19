var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ops1, ops2, ops3, ops4, ops5, ops6, opsGroup;
var cloud, cloudImage, cloudGroup;

function preload(){
  trex_running =  loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  ops1 = loadImage("obstacle1.png");
  ops2 = loadImage("obstacle2.png");
  ops3 = loadImage("obstacle3.png");
  ops4 = loadImage("obstacle4.png");
  ops5 = loadImage("obstacle5.png");
  ops6 = loadImage("obstacle6.png");
  
  cloudImage = loadImage("cloud.png");
} 

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGroup = new Group();
  opsGroup = new Group();
}

function draw() {
  background(180);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnObstacles();
  
  spawnClouds();
     
  drawSprites();
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    var rand = Math.round(random(1,6));
        switch(rand) {
        case 1: obstacle.addImage(ops1);
        break;
        case 2: obstacle.addImage(ops2);
        break;
        case 3: obstacle.addImage(ops3);
        break;
        case 4: obstacle.addImage(ops4);
        break;
        case 5: obstacle.addImage(ops5);
        break;
        case 6: obstacle.addImage(ops6);
        break;
        default:
        break;
        }
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    opsGroup.add(obstacle);
  }
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    console.log("in 63");
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(280,320));
    //cloud.addImage(cloudImage);
    console.log("in 66");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 134;
    cloud.depth = trex.depth;
    console.log("in 72");
    trex.depth = trex.depth + 1;
    cloudGroup.add(cloud);
    console.log("in 74");
  }
  
}