const clusters = 4;
const balls = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  drawClusters();
  drawSine();
}

function drawSine() {
  noStroke();
  fill(255, 0, 0, 128);
  for (let x = 0; x <= width; x++) {
    let y = sin(x / 100) * 100;
    //console.log(`(${x}, ${y})`);
    for (let offset = -100; offset <= 100; offset += 10) {
      ellipse(x + offset, y + height / 2 + offset, 2);
    }
  }
}

async function drawClusters() {
  for (let i = 0; i < clusters; i++) {
    const x = random(windowWidth);
    const y = random(windowHeight);
    drawBalls(x, y);
    await delay(4000);
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
    await delay(1000);
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
