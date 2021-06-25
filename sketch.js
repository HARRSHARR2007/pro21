var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
music= loadSound("music.mp3")

}


function setup(){
    canvas = createCanvas(800,600);


   

    block1 = createSprite(0,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(200,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(400,580,200,30);
    block3.shapeColor="red";

    block4=createSprite(600,580,200,20);
    block4.shapeColor = "yellow"
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
   
    ball.velocityX=2
    ball.velocityY=-9
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
  
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
    }

    //write code to bounce off ball from the block3
    if(ball.isTouching(block3)){
        ball.shapeColor = "red";
    }

    //write code to bounce off ball from the block4
    if(ball.isTouching(block4)){
        ball.shapeColor = "yellow";
    }
    drawSprites();
      ball.bounceOff(edges);
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);

}
