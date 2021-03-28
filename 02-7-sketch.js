
let Youandi;
let fontSize = (200);
let HArray;
let hArray;
let yArray;
let uArray;
let nArray;

function preload () {

    Youandi = loadFont ('../assets/YouandiModern.ttf');
}

function setup () {

    createCanvas (600, 600);
    background (225);

    textFont (Youandi);
    textSize (fontSize);

    HArray = Youandi.textToPoints ("H", width / 6, height / 1.2, fontSize, {
        sampleFactor: 0.07
    });

    hArray = Youandi.textToPoints ("H", width / 6, height / 1.7, fontSize, {
        sampleFactor: 0.07
    });

    yArray = Youandi.textToPoints ("H", width / 6, height / 2.8, fontSize, {
        sampleFactor: 0.07
    });

    uArray = Youandi.textToPoints ("H", width / 6, height / 9, fontSize, {
        sampleFactor: 0.07
    });

    nArray = Youandi.textToPoints ("H", width / 6, height / 1, fontSize, {
        sampleFactor: 0.07
    });
}

function draw () {

    noStroke ();

    for (i = 0; i < 50; i ++) {

        for (j = 0; j < 25; j ++) {
            
            fill (i * 5, 255 - j * 10, 400)

            rect (i * 25, j * 25, 25)
        }
    }

    for (let i = 0; i < HArray.length; i++) {

        stroke (255);

        fill (i * 5, 400 - j * 10, 400)
        
        push ();

        translate (HArray [i].x, HArray [i].y);

        strokeWeight (0);

        rect (-10, -20, 25, 25)

        pop ();
    }

    for (let i = 0; i < hArray.length; i++) {

        stroke (255);

        fill (i * 5, 400 - j * 10, 400)
        
        push ();

        translate (hArray [i].x, hArray [i].y);

        strokeWeight (0);

        rect (-10, -20, 25, 25)

        pop ();
    }

    for (let i = 0; i < yArray.length; i++) {

        stroke (255);

        fill (i * 5, 400 - j * 10, 400)
        
        push ();

        translate (yArray [i].x, yArray [i].y);

        strokeWeight (0);

        rect (-10, -20, 25, 25)

        pop ();
    }

    for (let i = 0; i < uArray.length; i++) {

        stroke (255);

        fill (i * 5, 400 - j * 10, 400)
        
        push ();

        translate (uArray [i].x, uArray [i].y);

        strokeWeight (0);

        rect (-10, -20, 25, 25)

        pop ();
    }

    for (let i = 0; i < nArray.length; i++) {

        stroke (255);

        fill (i * 5, 400 - j * 10, 400)
        
        push ();

        translate (nArray [i].x, nArray [i].y);

        strokeWeight (0);

        rect (-10, -20, 25, 25)

        pop ();
    }
}



function mousePressed () {
    saveCanvas ("sketch-01", "png");
}