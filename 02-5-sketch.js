
let yoff = 0.0;

let img;
let c;


function setup() {

  createCanvas (600, 600);
  background ('white');

  img.loadPixels ();

  c = img.get (img.width / 2, img.height / 2);

  frameRate (40);
    createLoop ({
    duration: 3, gif: true
  });
}

function preload () {
  img = loadImage ('../assets/letterH03.png');
}

function draw () {

  stroke ("#A4A0EA");

  for (let i = 0; i < height + 100; i++) {

  beginShape ();

  let xoff = yoff;


  for (let x = 0; x <= width; x += 100) {

    let y = map (noise (xoff, yoff), 0, 1, i, i + 100);

    vertex (x, y);
    xoff += 0.1;
  }

  yoff += 0.01;

  vertex (width, height);
  vertex (0, height);

  endShape (CLOSE);
}

image (img, -80, -70, 1000, 1000);
}
