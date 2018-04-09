function setup() {
  // Code that runs exactly once!\
  createCanvas(1000,1000);
  // canvas.position(0, 0);
  canvas.style('z-index', '3');
  var input=select('#answerfield');
  console.log(input);
}

function draw() {
  // Code that runs many times per second.
  background(255);
}
