let Lobster;
let fontSize = (500);
let hArray;
let r = 0;

function preload () {

    Lobster = loadFont ('../assets/Lobster.ttf');
}

function setup () {
    
    createCanvas (600, 600);

    angleMode (DEGREES);
    rectMode (CENTER);

    textFont (Lobster);
    textSize (fontSize);

    hArray = Lobster.textToPoints ("h", width / -5, height / 4, fontSize, {
        sampleFactor: 0.05
    });

    frameRate (40);
    createLoop ({
        duration: 8, gif: true
    });
}

function draw () {

    background ('white');
    noFill ();
    translate (width / 2, height / 2);

    for (var i = 0; i < 200; i++) {

        push ();

        rotate (sin (frameCount + i) * 100);

        var r = map (sin (frameCount), -1, 1, 50, 255);
        var g = map (sin (frameCount / 2), -1, 1, 50, 255);
        var b = map (sin (frameCount / 4), -1, 1, 50, 255);

        stroke (r, g, b);

        rect (0, 0, 100 - i * 3, 100 - i * 3, 200 - i);

        pop ();
    }

    for (let i = 0; i < hArray.length; i++) {

        stroke (r, g, b);
        
        push ();

        translate (hArray [i].x, hArray [i].y);

        rotate (r);
        r++;

        strokeWeight (38);

        line (-10, -10, 5, 5);

        pop ();
    }
}