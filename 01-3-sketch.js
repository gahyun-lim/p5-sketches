
function setup() {
    createCanvas(700, 700);
    background (220);
}

function draw () {
    
    // console.log (random (370));
    // circle (random (370), 270, 40);
    // fill (0, 0, 0, 0);
    
    console.log (random (700));
    circle (random (700), 350, 200);
    fill (0, 0, 0, 0);
    
    console.log (random (700));
    circle (600, random (700), 220);
    fill (0, 0, 0, 0);
    
    console.log (random (700));
    circle (90, random (700), 220);
    fill (0, 0, 0, 0);
}







function mousePressed () {
    saveCanvas ("sketch-01", "png");
}