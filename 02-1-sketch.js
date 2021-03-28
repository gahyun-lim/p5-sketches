
function setup () {
    createCanvas (700, 700);
    background ('white');
}
  
  
function draw () {
    
    rectMode (CORNERS);
    fill (random (0, 255), random (0, 255), random (0, 255), 40);
    circle (random (0, width), random (0, height), random (0, width), random (0, height))
     
    translate (200, -80);
    rect (0, 0, 330, 300);
    
    translate (-10, 550)
    rect (0, 0, 330, 350);
}









function mousePressed () {
    saveCanvas ("sketch-01", "png");
}