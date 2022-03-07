let state = 0;
let timer = 0;
let x = 0;
let velor = 3

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
}

function draw() {
  background("white");
  fill('black')
  rect(width / 2, height / 2, 200, 600);
  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 2) {
      state = 0;
    }
  }

  fill("blue");
  rect(x, height - 50, 100, 50)
  x = x + velor
  if (x > width) {
    x = 0;
  }

  switch (state) {
    case 0: //red light
      fill("red");
      velor = 0

      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("gray")
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      text("case 0", 250, 250);
      break;
    case 1:
      fill("gray");

      velor = 10

      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("gray")
      ellipse(width / 2, height / 2, 150, 150);
      fill("green")
      ellipse(width / 2, height / 2 + 170, 150, 150);
      text("case 1", 250, 250);
      break;
    case 2:

      text("case 2", 250, 250);

      velor = 15

      fill("gray");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("yellow")
      ellipse(width / 2, height / 2, 150, 150);
      fill("gray")
      ellipse(width / 2, height / 2 + 170, 150, 150);
      text("case 1", 250, 250);
      break;

  }
}
