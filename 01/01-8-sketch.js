
let offset = 6;
let x = 70;

function setup () {
  createCanvas (600, 600);
  background (255);
}

function draw () {
  
  push();

    translate (width/2, height/2);
    rotate (radians (frameCount * 56) );
  
    for (let i = 0; i < width; i += offset){
      line(i-x, -x, i-x, x);
    }
  
  pop();
  
  
  rect (200, -80, 200, 200);
  rect (200, 475, 200, 200);
  
  fill (0);

}










function mousePressed () {
    saveCanvas ("sketch-01", "png");
}