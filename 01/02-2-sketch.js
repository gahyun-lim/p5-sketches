let Lobster;
let fontSize = 300;
let firstLetter = [];
let x, y;

let h = 0;
let s = 0;
let b = 0;


function preload () {

  Lobster = loadFont ('../assets/Lobster.ttf');
}
  
function setup () {

  frameRate (40);
  createLoop ({
    duration: 3, gif: true
  })
  
  createCanvas (600, 600)
  textFont (Lobster);
  textSize (fontSize);
  
  noStroke (); 

  colorMode(HSB);
  
  x = width / 5 - 80,
  y = height / 3 + 60
 
  firstLetter = Lobster.textToPoints ('H', x, y, fontSize, {
    sampleFactor: 0.1
  });

  print (firstLetter.length);

}


function draw () {

    background (0);

    fill (h, s, b);
    
    h++;
    
    if (h >= 360) {
      h = 0; 
    }
  
   s = map (mouseX, 0, width, 0, 100);
   b = map (mouseY, 0, height, 0, 100);

  
    beginShape ();
  
    for (let i = 0; i < firstLetter.length; i++) {
  
      push ();
  
      translate (firstLetter [i].x, firstLetter [i].y);
  
      ellipse (firstLetter [i].x, firstLetter [i].y, 22, 22);

      pop ();
  
    }
  
    endShape (CLOSE);
  
}