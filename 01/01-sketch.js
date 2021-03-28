
function setup () {
    var c = createCanvas (900, 900)
    background (255)

    fill (0)
    noStroke (255)

    rect (100, 100, 100, 500)

    rect (200, 280, 300, 100)
    
    rect (400, 100, 100, 500)

    fill (255)
    noStroke (0)

    rect (125, 145, 50, 400)

    rect (425, 145, 50, 400)

    rect (140, 305, 320, 45)

}









function mousePressed () {
    saveCanvas ("sketch-01", "png");
}