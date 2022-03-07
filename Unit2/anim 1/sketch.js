<<<<<<< HEAD
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
=======
let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadsound("assets/mp1.mp3")
  song2 = loadsound("assets/mp2.mp3")
  song3 = loadsound("assets/mp3.mp3")
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  switch (state) {
    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      background("red");
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      background("blue")
      break;

    case 4:
      song3.play();
      break;

    case 5;
    background("yellow")
    break;

    case 6:
      break;
  }
}

function mouseReleased() {
  state++;
  song1.pause()
  song2.pause()
  song3.pause()
  if (state > 5)(
    state = 0;
  )
>>>>>>> 9684136a48059b08f6a3201c7edafa9dede400cb
}
