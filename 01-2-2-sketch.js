function setup () {
    var c= createCanvas(700, 700);
    background ('white')
  }
  
  function draw () {
    if (mouseIsPressed) {
      fill (0);
    } else {
      fill (255);
    }
    rect (mouseX, mouseY, random (3, 100), random (3, 100));
    strokeWeight (3);
}



function mousePressed () {
    saveCanvas ("sketch-01", "png");
}