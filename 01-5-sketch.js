
function setup() {
  createCanvas(700, 700);
  background('black');
  noStroke();

  let y;
  let num = 100; 
  
  fill(255);
  y = 10;
  
  for (let i = 0; i < num / 3; i++) {
    rect (50, y, 120, 10);
    y += 25;
  }

    y = 10;
  fill(255);
  
  for (let i = 0; i < num / 2; i++) {
    rect (30, y, 60, 5);
    y += 30;
  }

  y = 300;
  fill(255);
  
  for (let i = 0; i < num / 7; i++) {
    rect (160, y, 80, 8);
    y += 20;
  }
  
  y = 260;
  fill(255);
  
  for (let i = 0; i < num / 2; i++) {
    rect (225, y, 40, 5);
    y += 10;
  }
  
  y = 285;
  fill(255);
  
  for (let i = 0; i < num / 25; i++) {
    rect (250, y, 200, 15);
    y += 30;
  }
  
  y = 265;
  fill(255);
  
  for (let i = 0; i < num / 10; i++) {
    rect (320, y, 230, 8);
    y += 15;
  }
  
  y = 295;
  fill(255);
  
  for (let i = 0; i < num / 4; i++) {
    rect (510, y, 130, 6);
    y += 21;
  }
  
  y = 320;
  fill(255);
  
  for (let i = 0; i < num / 4; i++) {
    rect (590, y, 80, 9);
    y += 21;
  }
}




function mousePressed () {
    saveCanvas ("sketch-01", "png");
}