
let YouandiModern;
let fontSize = (900);
let hArray;

function setup () {
    
    createCanvas (600, 600);

    angleMode (DEGREES);
    rectMode (CENTER);

    textFont (YouandiModern);
    textSize (fontSize);

    hArray = YouandiModern.textToPoints ("H", width / -1.7, height / 2.1, fontSize, {
        sampleFactor: 0.7
    });
}

function preload () {

    YouandiModern = loadFont ('../assets/YouandiModern.ttf');
}


function draw () {

    background (0);
    noFill ();
    translate (width / 2, height / 2);

    for (var i = 0; i < 200; i++) {

        push ();

        rotate (sin (frameCount + i) * 700);

        var r = map (sin (frameCount), -1, 1, 50, 400);
        var g = map (sin (frameCount / 2), -1, 1, 50, 200);
        var b = map (sin (frameCount / 4), -1, 1, 50, 300);

        stroke (r, g, b);

        rect (0, 0, 40 - i * 3, 60 - i * 3, 200 - i);

        pop ();
    }


    for (let i = 0; i < hArray.length; i++) {

        stroke (0);
        
        push ();

        translate (hArray [i].x, hArray [i].y);

        strokeWeight (5);

        line (hArray [i].x, hArray [i].y, 30, 30);

        pop ();
    }
}



function mousePressed () {
    saveCanvas ("sketch-01", "png");
}