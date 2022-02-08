function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(100);

  if (mouseIsPressed) {
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
    let s = 'when Bep enters battle, the seals placed on him by his "protectors" start to weaken due to his overflow of emotion, this manifests first in his left eye, this "true" eye grants him many ocular abilities, heightening all of his senses. it also gives him access to ancient powers, these include the ability to put visions and hallucinations into the heads of those he targets, manifest weapons around him, and swap places with others, allthough these all come at the cost of his own stamina. additionally he can use his ancient eye to call an uber to him without needing his phone.    ';
fill(10);
text(s, 110, 600, 200, 270);


  } else {
    // when the mouse isn't pressed!
    fill("pink");
    ellipse(457, 387, 500, 500);
    ellipse(290, 305, 270, 270);
    fill ("white")
     ellipse(457, 337, 220, 220);
    ellipse(290, 305, 270, 270);
    fill ("black")
     ellipse(457, 337, 120, 120);
    ellipse(290, 305, 170, 170);
   line(30, 20, 85, 75);
    let s = 'bep is a silly goofy man. born from the ashes of the old world ,brought back by a single ember, he enjoys giggling and dancing. from a young age he has taken on the weight of the world, stuck inside the strict confines of his native village, he seeks to understand what he really means, and why those around them are so invested in his security and safety';
fill(10);
text(s, 110, 600, 200, 200);
  }
  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
