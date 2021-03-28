
function setup () {
    var c = createCanvas(500, 500);
  }
  
  function draw () {
    if (mouseIsPressed) {
      fill (0);
    } else {
      fill (255);
    }
    ellipse (mouseX, mouseY, 80, 80);
}



function mousePressed () {
    saveCanvas ("sketch-01", "png");
}