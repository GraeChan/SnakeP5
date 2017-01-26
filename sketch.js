var s;
var scl = 20;
var scoreVal = 0;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(2, cols-2)), floor(random(3,rows-1)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(0,0,0);
  
  title();
  score();
	
  push();
  noStroke();
  fill(255,255,0);
  rect(0,scl*2,width,scl)
  rect(0,height-scl,width,scl);
  rect(0,scl*3,scl,height-scl)
  rect(width-scl,scl*3,scl,height-scl);
  pop();

  if (s.eat(food)) {
    pickLocation();
  }
  push();
  s.death();
  s.update();
  s.show();
  pop();
  
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(food.x + scl/2, food.y + scl/2, scl, scl);
  pop();
}

function title()
{
	push();
	fill(0, 255, 0);
	textSize(32);
	text("SNAKE", scl, scl*1.75);
	pop();
}

function score()
{
	push();
	fill(255, 0, 0);
	textSize(32);
	text("SCORE: " + scoreVal, width-width/3, scl*1.75);
	pop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
