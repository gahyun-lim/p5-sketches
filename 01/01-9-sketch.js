const sketchNumber = "20";

let letterH;


function preload () {
    letterH = loadImage ('../assets/letterH.png')
}

function setup () {

    createCanvas (1000, 900);
    background ('white');
    // image (letterH, 0, 0);

    unitSize = 10;

    for (i=0; i<height; i=i+unitSize) {
        for (j=0; j<width; j=j+unitSize) {
            pixelColor = letterH.get (j, i);

            fill (pixelColor);
            randomSize = random (20, 50);
            ellipse (j, i, randomSize, randomSize);
        }
    }
}

// function draw () {
    
//     let pixelColor = get (mouseX, mouseY);

//     console.log (pixelColor);
// }



function mousePressed () {
    saveCanvas ("sketch-01", "png");
}
