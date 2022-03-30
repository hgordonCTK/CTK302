let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 5;
let maxTimer = 10;
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
}

function draw() {
  switch (state) {
    case 0:
      background("black");
      text("kill 5 guys", 150, 300);
      fill("white");
      break;

    case 1:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win!
      background("black");
      text("you killed 5 guys!", 100, 100);
      break;

    case 3: // lose
      background("black");
      text("too slow!", 100, 100);
      break;
  }

  fill("white");
  textSize(24);
  text("score = " + score, 30, 30);
}

function game() {
  background("gray");

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      score++;
    }
  }

  if (cars.length == 0) {
    // they won!
    state = 2;
  }

  // frog
  fill("tan");
  ellipse(frogPos.x, frogPos.y - 50, 75, 75);
  ellipse(frogPos.x + 45, frogPos.y - 22, 30, 30)
  ellipse(frogPos.x - 45, frogPos.y - 22, 30, 30)
  fill("black");
  rect(frogPos.x + 35, frogPos.y - 15, 20, 30)
  rect(frogPos.x - 55, frogPos.y - 15, 20, 30)
  fill("grey")
  rect(frogPos.x - 55, frogPos.y - 65, 20, 30)
  rect(frogPos.x + 37, frogPos.y - 65, 20, 30)




  checkForKeys();


}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.v = createVector(random(6), 0);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
  }

  // methods

  display() {
    fill(this.r, this.b, this.g, this);
    ellipse(this.pos.x, this.pos.y, 75, 75);
    ellipse(this.pos.x, this.pos.y + 40, 30, 30);
    fill("gray");
    rect(this.pos.x + 10, this.pos.y + 30, 100, 20);



    // textSize(this.size) ;
    // text("bruh", this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x -= 5;
    if (frogPos.x < 0) frogPos.x = width;
  }

  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // win state
      resetTheGame();
      state = 0;

      break;

    case 3: // lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function resetTheGame() {
  timer = 0;
  cars = [];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}
