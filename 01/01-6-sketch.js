
function setup () {
    createCanvas (700, 700);
    background ('black');
}

  
function draw () {
    
    ellipse (5, 350, 400, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (5);
    
    ellipse (5, 350, 600, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (10);
    
    ellipse (5, 350, 450, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (3);
    
    ellipse (5, 350, 300, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (1);
    
    ellipse (5, 350, 330, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (6);
    
    ellipse (10, 350, 210, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (6);
    
    ellipse (10, 320, 170, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (4);
    
    ellipse (10, 320, 280, 800);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (9);
    
    ellipse (410, 740, 600, 850);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (7);
    
    ellipse (410, 740, 600, 700);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (3);
    
    ellipse (410, 740, 600, 770);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (5);
    
    ellipse (410, 740, 600, 860);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (2);
    
    ellipse (410, 740, 600, 730);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (2);
    
    ellipse (410, 740, 600, 650);
    fill (0, 0, 0, 10);
    stroke (255);
    strokeWeight (10);
}



function mousePressed () {
    saveCanvas ("sketch-01", "png");
}