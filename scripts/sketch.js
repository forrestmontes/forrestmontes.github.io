const lines = 60;
const segments = 5;
const flowers = lines;

function setup() {
  createCanvas(400, 700);
  background(255);
  noLoop();
  drawFlower(width / 2, height / 2, 100);
  drawFlowers();
  drawDottedLines();
}

async function drawDottedLines() {
  strokeWeight(2);
  for (let i = 0; i < lines; i++) {
    drawLine();
    await delay(1000);
  }
}

async function drawLine() {
  const x1 = int(random(10, 390));
  const y1 = int(random(10, 690));
  const x2 = int(random(10, 390));
  const y2 = int(random(10, 690));
  stroke(100, 100, 255, 50);
  line(x1, y1, x2, y2);

  // Draw dots between segments
  for (let i = 0; i <= segments; i++) {
    drawDot(x1, y1, x2, y2, i);
    await delay(250);
  }
}

function drawDot(x1, y1, x2, y2, segment) {
  const x = x1 + (x2 - x1) * (segment / segments);
  const y = y1 + (y2 - y1) * (segment / segments);
  const size = random(1, 50);
  const randNum = int(random(segments));

  noStroke();
  // First dot
  if (randNum == 1) {
    fill(random(1, 255), random(1, 255), random(1, 255), 128);
  } else if (randNum == 2) {
    fill(255, 255, 0, 128);
  } else {
    fill(255, 0, 0, 128);
  }
  ellipse(x, y, size);
  // Second (alpha) dot
  fill(random(1, 255), random(1, 255), random(1, 255), 2000 / size);
  ellipse(x, y, size * 3);
}

async function drawFlowers() {
  for (let i = 0; i < flowers; i++) {
    drawFlower(random(10, 390), random(10, 690), random(1, 50));
    await delay(1000);
  }
}

function drawFlower(x, y, size) {
  const sizeReduced = size * 0.8;
  const shift = size * 0.6;

  noStroke();
  // Flower center
  fill(255, 255, 0, 255);
  ellipse(x, y, size);
  // Flower petals
  fill(255, random(1, 255), 0, 128);
  ellipse(x + shift, y, sizeReduced);
  ellipse(x - shift, y, sizeReduced);
  ellipse(x, y - shift, sizeReduced);
  ellipse(x, y + shift, sizeReduced);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
