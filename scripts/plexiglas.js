const clusters = 4;
const balls = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  drawRectSine();
  drawClusters();
  drawSine();
}

function drawRectSine() {
  for (let x = 0; x <= width; x += 20) {
    strokeWeight(1);
    stroke(255, 165, 0, 128);
    const r = 255;
    const g = (sin(x / 100) + 1) * 127.5;
    const b = (sin(x / 100) + 1) * 127.5;
    fill(r, g, b);
    rect(x, height / 3, 20, 20);
  }
}

async function drawSine() {
  for (let x = 0; x <= width; x++) {
    const y = sin(x / 100) * 100;

    for (let offset = -100; offset <= 100; offset += 20) {
      drawOffest(x, y, offset);
      //await delay(1);
    }
  }
}

function drawOffest(x, y, offset) {
  noStroke();
  fill(255, 255, 128, 16);
  ellipse(x + offset, y + height / 2 + offset, 15);
}

async function drawClusters() {
  for (let i = 0; i < clusters; i++) {
    const x = random(windowWidth);
    const y = random(windowHeight);
    drawBalls(x, y);
    //await delay(4000);
  }
}

async function drawBalls(x, y) {
  for (let i = 0; i < balls; i++) {
    drawBall(
      random(x - 100, x + 100),
      random(y - 100, y + 100),
      random(1, 200),
      random(1, 200)
    );
    //await delay(1000);
  }
}

function drawBall(x, y, w, h) {
  noStroke();
  fill(random(255), random(255), random(255), 128);
  ellipse(x, y, w, h);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
