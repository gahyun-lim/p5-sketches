
function setup () {
    var c= createCanvas(1700, 850);
    background ('black');
}




function draw() {
  
    if (mouseIsPressed==true) {

      stroke (mouseX, 0, mouseY);
    //   strokeWeight (10);
      strokeWeight (random (1, 30) + random (1, 30)-10);
      point (mouseX-5, mouseY-5);
      point (mouseX*-1+1700, mouseY-5);
      point (mouseX*-1+1700, mouseY*-1+850);
      point (mouseX-5, mouseY*-1+850);
    } 
}