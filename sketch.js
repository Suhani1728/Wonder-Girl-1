var girl
var girlImage

var enemyImg

var heartImg

var enemy1,enemy2,enemy3,enemy4;
var enemyGroup;

var powerGroup

var livesGroup;

var s1,s2,s3,s4,s5;
var u1,u2,u3;
var h1,h2,h3;
var a1,a2,a3,a4;
var n1,n2,n3,n4,n5;
var i1,i2,i3;

var score=0;

var liveCount=3;

var gameState="REST";

function preload(){

girlImage=loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png","images/girl5.png","images/girl6.png","images/girl7.png","images/girl8.png","images/girl9.png","images/girl10.png")
heartImg=loadImage("images/heart.png");
enemyImg=loadImage("images/monster.png");
}

function setup(){

var canvas= createCanvas(1200,550)

powerGroup=new Group();
livesGroup=new Group();
enemyGroup=new Group();

//creating maze blocks
s1=createSprite(130,35,200,20)
s1.shapeColor="green";
for(var i=20; i<250;i=i+50){
    var power=createSprite(i,10,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=65; i<260;i=i+50){
    var power=createSprite(i,60,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
                }
s2=createSprite(40,150,20,220)
s2.shapeColor="green";
for(var i=20; i<300;i=i+50){   
    var power=createSprite(10,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=60; i<250;i=i+50){   
    var power=createSprite(80,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
                }
s3=createSprite(130,250,200,20)
s3.shapeColor="green";
for(var i=40; i<230;i=i+50){
    var power=createSprite(i,280,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=80; i<270;i=i+50){
     var power=createSprite(i,230,10,10)
    power.shapeColor="red";
     powerGroup.add(power);
                }
s4=createSprite(220,380,20,240)
s4.shapeColor="green";
for(var i=300; i<500;i=i+50){   
    var power=createSprite(200,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=300; i<530;i=i+50){   
            var power=createSprite(20,i,10,10)
            power.shapeColor="red";
            powerGroup.add(power);
                }
s5=createSprite(130,500,200,20)
s5.shapeColor="green";
for(var i=40; i<200;i=i+50){
    var power=createSprite(i,470,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }

u1=createSprite(270,270,20,490)
u1.shapeColor="green";
for(var i=10; i<600;i=i+50){   
    var power=createSprite(245,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=10; i<600;i=i+50){   
            var power=createSprite(295,i,10,10)
            power.shapeColor="red";
            powerGroup.add(power);
                }
u2=createSprite(330,505,100,20)
u2.shapeColor="green";
for(var i=10; i<400;i=i+50){
    var power=createSprite(i,530,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }

u3=createSprite(370,270,20,490)
u3.shapeColor="green";
for(var i=10; i<600;i=i+50){   
    var power=createSprite(395,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=10; i<600;i=i+50){   
            var power=createSprite(345,i,10,10)
            power.shapeColor="red";
            powerGroup.add(power);
                }

h1=createSprite(420,270,20,490)
h1.shapeColor="green";
for(var i=30; i<550;i=i+50){   
    var power=createSprite(570,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=20; i<550;i=i+50){   
            var power=createSprite(450,i,10,10)
            power.shapeColor="red";
            powerGroup.add(power);
                }
        
h2=createSprite(480,270,140,20)
h2.shapeColor="green";
h3=createSprite(540,270,20,490)
h3.shapeColor="green";
for(var i=40; i<650;i=i+50){   
    var power=createSprite(520,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }

a1=createSprite(600,270,20,490)
a1.shapeColor="green";
for(var i=10; i<650;i=i+50){   
    var power=createSprite(750,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=10; i<650;i=i+50){   
            var power=createSprite(630,i,10,10)
            power.shapeColor="red";
            powerGroup.add(power);
                }
        
a2=createSprite(660,35,140,20)
a2.shapeColor="green";
a3=createSprite(720,270,20,490)
a3.shapeColor="green";
 a4=createSprite(660,225,140,20)
a4.shapeColor="green";

 n1=createSprite(780,270,20,490)
n1.shapeColor="green";
for(var i=60; i<600;i=i+50){   
    var power=createSprite(805,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
 n2=createSprite(820,35,60,20)
n2.shapeColor="green";
 n3=createSprite(840,270,20,490)
n3.shapeColor="green";
for(var i=10; i<780;i=i+50){   
    var power=createSprite(865,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
 n4=createSprite(870,505,60,20)
n4.shapeColor="green";
 n5=createSprite(890,270,20,490)
n5.shapeColor="green";
for(var i=10; i<600;i=i+50){   
    var power=createSprite(925,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }

 i1=createSprite(1020,35,150,20)
i1.shapeColor="green";
 i2=createSprite(1020,270,20,490)
i2.shapeColor="green";
for(var i=10; i<600;i=i+50){   
    var power=createSprite(975,i,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }
for(var i=10; i<600;i=i+50){   
            var power=createSprite(1045,i,10,10)
            power.shapeColor="red";
            powerGroup.add(power);
}

i3=createSprite(1020,505,150,20)
i3.shapeColor="green";
for(var i=400; i<1200;i=i+50){
    var power=createSprite(i,530,10,10)
    power.shapeColor="red";
    powerGroup.add(power);
        }


//creating enemy
enemy1=createSprite(640,100,10,10);
enemy1.addImage(enemyImg);
enemy1.scale=0.06;
enemyGroup.add(enemy1);
//enemy1.debug=false;
    
enemy2=createSprite(660,100,10,10);
enemy2.addImage(enemyImg);
enemy2.scale=0.06
enemyGroup.add(enemy2);
//enemy2.debug=false;

enemy3=createSprite(680,100,10,10);
enemy3.addImage(enemyImg);
enemy3.scale=0.06
enemyGroup.add(enemy3);
//enemy3.debug=false;

enemy4=createSprite(700,100,10,10);
enemy4.addImage(enemyImg);
enemy4.scale=0.06
enemyGroup.add(enemy4);
//enemy4.debug=false;

//giving random position to enemy
enemy1.x=random(10,1100);
enemy1.y=random(10,500);
enemy2.x=random(10,1100);
enemy2.y=random(10,500);
enemy3.x=random(10,1100);
enemy3.y=random(10,500);
enemy4.x=random(10,1100);
enemy4.y=random(10,500);

//giving random velocity to enemy
enemy1.velocityX=random(-4,4);
enemy1.velocityY=random(-4,4);
enemy2.velocityX=random(-4,4);
enemy2.velocityY=random(-4,4);
enemy3.velocityX=random(-4,4);
enemy3.velocityY=random(-4,4);
enemy4.velocityX=random(-4,4);
enemy4.velocityY=random(-4,4);

//creting lives through lives function
lives (liveCount);

};

function draw(){

if(gameState==="REST"){
    background("black")
    textSize(35)
    fill("pink")
    text("WONDER GIRL",450,40)

    textSize(20)
    fill("white")
    text("Press SPACE to begin",500,510)
    fill("red")
    text("You are the WONDER GIRL with 3 lives and you need to save the world by:",230,120);
    fill("yellow")
    text("1.Collecting all the powers which are displayed as tiny squares",230,200);
    text("2.Beware of the monsters and if they catch you,your 1 live will get deducted",230,300);
    text("3.Score as much you can and try again agin to save the beutiful world",230,400)
    if(keyDown("space")){
        gameState="PLAY";
    }
}

if(gameState==="PLAY"){    
    background("black");

//increasing score after touching power 
for(var i=0; i<powerGroup.length;i++){
    if(girl.isTouching(powerGroup.get(i))){
        powerGroup.get(i).destroy();
        score=score+5
    }
}
//colliding girl to maze
girl.collide(s1);
girl.collide(s2);
girl.collide(s3);
girl.collide(s4);
girl.collide(s5);
girl.collide(s1);
girl.collide(u1);
girl.collide(u2);
girl.collide(u3);
girl.collide(h1);
girl.collide(h2);
girl.collide(h3);
girl.collide(a1);
girl.collide(a2);
girl.collide(a3);
girl.collide(a4);
girl.collide(n1);
girl.collide(n2);
girl.collide(n3);
girl.collide(n4);
girl.collide(n5);
girl.collide(i1);
girl.collide(i2);
girl.collide(i3);

//giving velocity to girl when pressed arrows and mirror images when turned
if(keyWentDown(UP_ARROW)){
    girl.velocityY=-3;
}
if(keyWentUp(UP_ARROW)){
    girl.velocityY=0;
}
if(keyWentDown(DOWN_ARROW)){
    girl.velocityY=3;
}
if(keyWentUp(DOWN_ARROW)){
    girl.velocityY=0;
}
if(keyWentDown(RIGHT_ARROW)){
    girl.mirrorX(girl.mirrorX() * -1);
    girl.velocityX=3;
  }
if(keyWentUp(RIGHT_ARROW)){
    girl.velocityX=0;
  }
if(keyWentDown(LEFT_ARROW)){
    girl.mirrorX(girl.mirrorX() * -1);
    girl.velocityX=-3;
}
if(keyWentUp(LEFT_ARROW)){
    girl.velocityX=0;
}

//giving velocity to enemies when collided with mazes

for(var i=0; i<enemyGroup.length;i++){
    if(enemyGroup.get(i).collide(s1)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(s2)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(s3)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(s4)){
        enemyGroup.get(i).veloc
    }
    if(enemyGroup.get(i).collide(s5)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(u1)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(u2)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(u3)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(h1)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(h2)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(h3)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(a1)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(a2)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(a3)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    /*if(enemyGroup.get(i).collide(a4)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }*/
    if(enemyGroup.get(i).collide(n1)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(n2)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(n3)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(n4)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(n5)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(i1)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(i2)){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(i3)){
        enemyGroup.get(i).velocityX=random(-4,4);;
    }
}

//creting edges
edges=createEdgeSprites();
//colliding girl to edges
girl.collide(edges);



//giving velocity to enemies when collided by edges
for(var i=0; i<enemyGroup.length;i++){
    if(enemyGroup.get(i).collide(edges[0])){
        enemyGroup.get(i).velocityY=random(-4,4);;
    }
    if(enemyGroup.get(i).collide(edges[1])){
        enemyGroup.get(i).velocityY=random(-4,4);
    }
    if(enemyGroup.get(i).collide(edges[2])){
        enemyGroup.get(i).velocityY=0;
        enemyGroup.get(i).velocityX=random(-4,4);
    }
    if(enemyGroup.get(i).collide(edges[3])){
        enemyGroup.get(i).velocityY=0;
        enemyGroup.get(i).velocityX=random(-4,4);
    }
}

//destroy 1 live and girl after touching enemy
if(enemyGroup.isTouching(girl)){

liveCount=liveCount-1;
girl.destroy();
livesGroup.destroyEach();

if(liveCount)
lives(liveCount);
}


drawSprites();

//writing text
textSize(20)
fill("yellow")
text ("Score : "+score,500,20)

if(liveCount===0){
    textSize(50)
    fill("yellow");
    text("GAME OVER",500,250);
    gameState="END";
}
   
};

if(gameState==="END"){
    fill("yellow")
    textSize(30)
    text("Press R to restart your game",480,350);
    score=0;
    
    if(keyDown("r")){
     restart ();
        
    }
};

};



function lives(liveCount){
    console.log("lives")
    var y=liveCount
//creating hearts
for(var i=100; i<=230 && y>0; i=i+50){

    var lives=createSprite(1150,i,20,20);
    lives.shapeColor="red"
    lives.addImage(heartImg);
    lives.scale=0.1
    livesGroup.add(lives);
    y=y-1;
}
girl=createSprite(displayWidth/2,displayHeight/2,10,10);
    girl.addAnimation("girl",girlImage);
    
    girl.scale=0.3
    girl.debug=false;
    girl.setCollider("rectangle",40,0,50,80);
}


function restart(){
    console.log("restart")
    liveCount=3;
    lives(liveCount);
    gameState="PLAY";
    
}