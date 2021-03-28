
function setup () {
    createCanvas (700, 700);
    background ('white');
}
  

function draw () {
    
    noFill (0);
    strokeWeight (10);
    
    rect (120, 110, 120, 500, 5, 60, 5, 60);
      
    rect (460, 110, 120, 500, 5, 60, 5, 60);
    
    circle (280, 360, 130);
    
    circle (390, 360, 230);
    
    square (6, 5, 690);
}










function mousePressed () {
    saveCanvas ("sketch-01", "png");
}