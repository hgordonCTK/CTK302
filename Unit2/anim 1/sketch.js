let x=0;

function setup() {
  createCanvas(500, 500);
}



function draw() {
  background('black');
  //rect(x, width/2. 50, 50);
  fill ('white') ;
  push() ;
  translate(x, 0) ;
  avatar() ;
  x += 5 ;
  if (x> width) {
    x = -400 ;
  }
  pop() ;


}

function avatar() {
textFont("monospace", 18);
  text("realistically there are only two really great star wars movies", 0, 250) ;
  x += 10;
 if (x > width) {
   x=0


}
}
