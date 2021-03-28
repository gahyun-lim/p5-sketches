
let letterH;
let x = 0;


function preload () {

    letterH = loadImage ('../assets/letterH02.png');
}

function setup () {
    
    createCanvas (700, 700);
    background ('white');

    noStroke ();

    // colorMode (HSB, 100);

    // image (letterH, 10, 10);

    fill (0);

    unitSize = 30;

    for (i = 0; i < height; i = i + unitSize) {
        
        for (j = 0; j < width; j = j + unitSize) {

            pixelColor = letterH.get (j, i);

            if (JSON.stringify (pixelColor) == JSON.stringify ([300, 0, 300, 300])) {

                rColor = random (255);

                // fill (rColor);

                // rRed = random (255);
                // rGreen = random (255);
                // rBlue = random (255);

                // fill (rRed, rGreen, rBlue);

                // rHSBcolor = random (20) + 70;
                
                // fill (rHSBcolor, 100, 100);

                randomSize = random (10, 20);

                ellipse (j, i, randomSize, randomSize);
            }
        }
    }

}

function draw () {

    background ('white');

    unitSize = 30;

    for (i = 0; i < height; i = i + unitSize) {
        
        for (j = 0; j < width; j = j + unitSize) {

            pixelColor = letterH.get (j, i);

            fill (pixelColor);

            randomSize = random (10, 25);

            ellipse (j, i, randomSize, randomSize);
        }
    }

    for (let i = 0; i < 1000; i += 10){
        
        noFill ()
        stroke ('black')
        strokeWeight (1)
        ellipse (350, 350, i, i)
    }
}


function mousePressed () {
    saveCanvas ("sketch-01", "png");
}