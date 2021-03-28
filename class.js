function setup () {
    var c = createCanvas (1000, 1000); ////// width and height in pixels
    background (255);


stroke (0);
for (var i = 0; i<100; i++) {
    ///// add your code here

    // ellipse (i*50, i*50, 250, 250)
}

fill (255)
    // stroke (255)
    noStroke (255)

    rect (100, 100, 100, 500);
    ellipse (260, 230, 250, 250);
    fill (255);
    ellipse (260, 230, 75, 75);
}


function draw () {
    stroke (0);
    noFill ();

    rRadius = random (50)+50;

    ellipse (mouseX, mouseY, rRadius, rRadius);
}

function mousePressed () {
    saveCanvas ("sketch-01", "png");
}