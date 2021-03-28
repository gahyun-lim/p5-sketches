let YouandiModern;
let fontSize = (500);
let hArray;
let r = 0;

function preload () {

    YouandiModern = loadFont ('../assets/YouandiModern.ttf');
}

function setup () {

    createCanvas (600, 600);
    textFont (YouandiModern);
    textSize (fontSize);
    // fill ("#13A4E8");

    colorMode(HSB, 120);

    for (let i = 0; i < 60; i++) {
        for (let j = 0; j < 100; j++) {
          fill (i, j, 70);
          point (i, j);
        }
    }


    rectMode (CENTER);

    hArray = YouandiModern.textToPoints ("h", width / 3.8, height / 1.27, fontSize, {
        sampleFactor: 0.05
    });


    // frameRate (40);
    // createLoop ({
    //     duration: 3, gif: true
    // })
}

function draw () {

    background (0);

    // text ("h", width / 2, height / 2);

    // beginShape ();

    for (let i = 0; i < hArray.length; i++) {

        // vertex (hArray [i].x, hArray [i].y)

        // stroke (255);

        rect (hArray [i].x, hArray [i].y, 7, 7)
        
        push ();

        translate (hArray [i].x, hArray [i].y);

        rotate (r);
        r++;

        strokeWeight (3);

        // line (hArray [i].x, hArray [i].y, 0, 0);

        // line (-10, -10, 5, 5);

        pop ();
    }

    // endShape (CLOSE);
}