
function setup () {

    var c = createCanvas (500, 500);
    background ('white');

    noStroke (0);
  }
  
  function draw () {
    if (mouseIsPressed) {
      fill (random (0, 255), random (0, 255), random (0, 255), 40);
    } else {
      fill (random (0, 255), random (0, 255), random (0, 255), 40);
    }
    ellipse (mouseX, mouseY, 40, 40);
}




function mousePressed () {
    saveCanvas ("sketch-01", "png");
}