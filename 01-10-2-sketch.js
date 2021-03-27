
let letterH;


function preload () {
    letterH = loadImage ('../assets/letterH.png')
}

function setup () {
    
    noStroke ();
    createCanvas (1100, 900);
    background ('white');
    // image (letterH, 0, 0);

    rectMode (CENTER);

    frameRate (40);
    createLoop ({
        duration: 3, gif: true
    })

    colorMode (HSB, 100);

    background (255);

    unitSize = 10;

    for (i=0; i<height; i=i+unitSize) {
        for (j=0; j<width; j=j+unitSize) {
            pixelColor = letterH.get (j, i);

            if (JSON.stringify (pixelColor) == JSON.stringify ([200, 0, 120, 255])) {

                randomSize = random (5, 8);
                ellipse (j, i, randomSize, randomSize);

                // rColor = random (120);

                rRed = random (255);
                rGreen = random (255);
                rBlue = random (255);

                fill (rRed, rGreen, rBlue);

                rHSBcolor = random (50);
                fill (rHSBcolor, 130, 100);
            }

            // fill (pixelColor);
        }
    }
}

function draw () {
    
    background ('white');
    let pixelColor = get (mouseX, mouseY);

    unitSize = 10;

    for (i=0; i<height; i=i+unitSize) {
        for (j=0; j<width; j=j+unitSize) {
            pixelColor = letterH.get (j, i);

            fill (pixelColor);
            randomSize = random (8, 5);
            ellipse (j, i, randomSize, randomSize);

        }
    }

     console.log (pixelColor);
}
