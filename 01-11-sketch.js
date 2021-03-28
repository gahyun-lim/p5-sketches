let Lobster;
let fontSize = (600);
let hArray;
let r = 0;

function preload () {

    Lobster = loadFont ('../assets/Lobster.ttf');
}

function setup () {
    createCanvas (700, 700);
    textFont (Lobster);
    textSize (fontSize);
    fill ("#13A4E8");

    rectMode (CENTER);

    hArray = Lobster.textToPoints ("h", width / 3, height / 1.27, fontSize, {
        sampleFactor: 0.05
    });


    frameRate (40);
    createLoop ({
        duration: 3, gif: true
    })
}

function draw () {
    background (0);

    // text ("h", width / 2, height / 2);

    // beginShape ();

    for (let i = 0; i < hArray.length; i++) {

        // vertex (hArray [i].x, hArray [i].y)

        stroke (255);


        // ellipse (hArray [i].x, hArray [i].y, 10, 10)
        
        push ();

        translate (hArray [i].x, hArray [i].y);

        rotate (r);
        r++;

        strokeWeight (3);

        // line (hArray [i].x, hArray [i].y, 0, 0);

        line (-10, -20, 5, 5);

        pop ();
    }

    // endShape (CLOSE);
}


// function mousePressed () {
//     saveCanvas ("sketch-01", "png");
// }