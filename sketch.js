var hr,mn,sc;
var mAngle, hAngle,sAngle;





function setup() {
  createCanvas(400,400);
  createSprite(200, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  hr=hour();
  mn=minute();
  sc= second();

  sAngle = map(sc, 0, 60, 0, 360);
    mAngle = map(mn,0,60,0,360)
    hAngle = map(hr, 0,12,0,360)


    rotate(sAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);

    rotate(mAngle); 
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,75,0);

    rotate(hAngle); 
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,50,0);


  drawSprites();


 
}