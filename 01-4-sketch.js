
function setup() {
    createCanvas(380, 500);
    background ('white');
}
  

function draw() {
    
    strokeCap (SQUARE)
    
    strokeWeight (10);
    line (40, 600, 40, 0); // L1
    
    strokeWeight (10);
    line (70, 600, 70, 0); // L2
    
    strokeWeight (10);
    line (100, 600, 100, 0); // L3
    
    strokeWeight (10);
    line (130, 180, 130, 0); // M1
    
    strokeWeight (10);
    line (130, 600, 130, 310); // B.M1
    
    strokeWeight (10);
    line (160, 130, 160, 0); // S1
    
    strokeWeight (10);
    line (190, 130, 190, 0); // S2
    
    strokeWeight (10);
    line (220, 130, 220, 0); // S3
    
    strokeWeight (10);
    line (160, 600, 160, 370); // B.S1
    
    strokeWeight (10);
    line (190, 600, 190, 370); // B.S2
    
    strokeWeight (10);
    line (220, 600, 220, 370); // B.S3
    
    strokeWeight (10);
    line (250, 180, 250, 0); // M2
    
    strokeWeight (10);
    line (250, 600, 250, 310); // B.M2
    
    strokeWeight (10);
    line (125, 180, 255, 180); // H1
    
    strokeWeight (10);
    line (125, 215, 255, 215); // H2
    
    strokeWeight (10);
    line (125, 245, 255, 245); // H3
    
    strokeWeight (10);
    line (125, 275, 255, 275); // H4
    
    strokeWeight (10);
    line (125, 310, 255, 310); // H5
    
    strokeWeight (10);
    line (280, 600, 280, 0); // L4
    
    strokeWeight (10);
    line (310, 600, 310, 0); // L5
    
    strokeWeight (10);
    line (340, 600, 340, 0); // L6
}






function mousePressed () {
    saveCanvas ("sketch-01", "png");
}