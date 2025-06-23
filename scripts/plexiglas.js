const clusters = 300;
const balls = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  drawClusters();
}

async function drawClusters() {
  for (let i = 0; i < clusters; i++) {
    const x = random(10, width - 10);
    const y = random(10, height - 10);
    drawBalls(x, y);
    await delay(250);
  }
}

async function drawBalls(x, y) {
  for (let i = 0; i < balls; i++) {
    drawBall(
      random(x - 50, x + 50),
      random(y - 50, y + 50),
      random(1, 200),
      random(1, 200)
    );
    await delay(125);
  }
}

function drawBall(x, y, w, h) {
  stroke(random(255), random(255), random(255), 128);
  fill(random(255), random(255), random(255), 128);
  ellipse(x, y, w, h);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
