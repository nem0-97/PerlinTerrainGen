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
  stroke(0,255,0);
  fill(0);

  rotateX(PI/3);//get top down view of terrain

  for(let x=-width/1.7,xoff=0;x<=width/1.7;x+=w,xoff+=scale){
    beginShape(TRIANGLE_STRIP);
    for(let y=-height/2,yoff=frameCount*-speed;y<=height/1.8;y+=w,yoff+=scale){//yoff changes each time draw is passed through to give effect of moving
      vertex(x,y,(noise(xoff,yoff)-.5)*h);//use x/yoff as perlin mapping to get z, and x/y as drawing coords
      vertex(x+w,y,(noise(xoff+.2,yoff)-.5)*h);
    }
    endShape();
  }

}
