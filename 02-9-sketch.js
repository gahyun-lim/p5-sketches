let Lobster;
let fontSize = (9);
// let hArray;

// let letterH;


function preload () {

    letterH = loadImage ('../assets/letterH02.png')

    Lobster = loadFont ('../assets/Lobster.ttf');
}

function setup () {

    createCanvas (1000, 1000);
    background (0);

    textFont (Lobster);
    textSize (fontSize);

    noStroke ();

    hArray = Lobster.textToPoints ("H", width / 40, height / 40, fontSize, {
        sampleFactor: 0.02
    });


    unitSize = 100;

    for (i=0; i<height; i=i+unitSize) {
        for (j=0; j<width; j=j+unitSize) {
            pixelColor = letterH.get (j, i);

            // fill (pixelColor);
            // randomSize = random (10, 20);
            // rect (j, i, randomSize, randomSize);
        }
    }


//     frameRate (40);
//     createLoop ({
//     duration: 3, gif: true
//   });
}

function draw () {

    for (let i = 0; i < hArray.length; i++) {

        stroke (255);
        
        push ();

        translate (hArray [i].x, hArray [i].y);

        strokeWeight (3);

        unitSize = 50;

        for (i=0; i<height; i=i+unitSize) {
            for (j=0; j<width; j=j+unitSize) {
                pixelColor = letterH.get (j, i);
    
                fill (pixelColor);
                randomSize = random (15, 70);
                ellipse (j, i, randomSize, randomSize);
            }
        }

        pop ();
    }
}





function mousePressed () {
    saveCanvas ("sketch-01", "png");
}
