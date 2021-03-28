let Lobster;
let fontSize = (900);
let hArray;


function preload () {

    Lobster = loadFont ('../assets/Lobster.ttf');
}

function setup () {

    createCanvas (700, 700);
    textFont (Lobster);
    textSize (fontSize);

    hArray = Lobster.textToPoints ("h", width / 4, height / 1.05, fontSize, {
        sampleFactor: 0.099
    });
}

function draw () {

    background (0);

    for (let i = 0; i < hArray.length; i++) {

        stroke ('#9FF4E7');

        push ();

        strokeWeight (1);

        line (hArray [i].x, hArray [i].y, 0, 0);

        pop ();
    }
}


function mousePressed () {
    saveCanvas ("sketch-01", "png");
}