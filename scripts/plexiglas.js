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
    await delay(1000);
  }
}

async function drawBalls(x, y) {
  for (let i = 0; i < balls; i++) {
    drawBall(
      random(x - 100, x + 100),
      random(y - 100, y + 100),
      random(1, 500),
      random(1, 500)
    );
    await delay(1000);
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
