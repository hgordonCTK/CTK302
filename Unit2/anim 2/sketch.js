let x = 0

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

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

   fill("pink");
      ellipse(457, 387, 500, 500);
      fill ("white")
      ellipse(290, 305, 270, 270);
      ellipse(290, 305, 270, 270);
       fill ("white")
       ellipse(457, 337, 220, 220);
      fill ("black")
       ellipse(457, 337, 120, 120);
     ellipse(290, 305, 170, 170);
      fill ("red")
      ellipse(290, 305, 150, 150);
       fill ("black")
      ellipse(290, 305, 70, 70);
       fill ("black")
      ellipse(240, 335, 30, 30);
          fill ("black")
      ellipse(340, 335, 30, 30);
       fill ("black")
      ellipse(290, 250, 30, 30);
