let w=20;//size of each square in mesh grid
let h=100;//difference between highest and lowestpossible points in terrain
let scale=.2;//how far apart to map points from perlin noise
let speed=.05;//how fast to move over plane in

function setup() {
  createCanvas(innerWidth,innerHeight,WEBGL);
}

function draw() {
  //set hyperparameters
  w=Number(document.getElementById('w').value);
  h=Number(document.getElementById('h').value);
  scale=Number(document.getElementById('scl').value);
  speed=Number(document.getElementById('s').value);

  background(0);
  noStroke();
  rotateX(PI/3);//get top down view of terrain

  for(let x=-width/1.7,xoff=0;x<=width/1.7;x+=w,xoff+=scale){
    beginShape(TRIANGLE_STRIP);
    for(let y=-height/2,yoff=frameCount*-speed;y<=height/1.8;y+=w,yoff+=scale){//yoff changes each time draw is passed through to give effect of moving
      let noiseXY=noise(xoff,yoff);
      let noiseX1Y=noise(xoff+scale,yoff);
      let noiseYX=noise(yoff,xoff);

      //stroke(255*noiseX1Y,255*noiseXY,255*noiseYX);
      fill(255*noiseX1Y,255*noiseXY,255*noiseYX);
      vertex(x,y,(noiseXY-.5)*h);//use x/yoff as perlin mapping to get z, and x/y as drawing coords
      vertex(x+w,y,(noiseX1Y-.5)*h);
    }
    endShape();
  }

}
