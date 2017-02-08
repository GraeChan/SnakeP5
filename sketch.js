var s;
var scl = 20;

var food;

function setup() {
  createCanvas(640, 480);
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
  lives();
  
  
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
  
  if(s.lives == 0)
  {
	  s.xspeed = 0;
	  s.yspeed = 0;
	  gameOver();
  }
  
   
}

function title()
{
	push();
	fill(0, 255, 0);
	textSize(32);
	text("SNAKE", scl*2, scl*1.75);
	pop();
}

function score()
{
	push();
	fill(255, 0, 0);
	textSize(32);
	text("SCORE: " + s.totalScore, width-width/3, scl*1.75);
	pop();
}

function gameOver()
{
	push();
	fill(255, 255, 0);
	textSize(64);
	text("GAME OVER", 125, 260);
	pop();
}

function lives()
{
	push();
	noStroke();
	fill(0, 255, 0);
	if(s.lives==3)
	{
		var x = scl*8 + scl/2
		for(var i = 0; i < 3; i++)
		{
			ellipse(x, scl/1.5 + scl/2, scl, scl);
			x+=scl*2;
		}
	}
	if(s.lives==2)
	{
		var x = scl*8 + scl/2
		for(var i = 0; i < 2; i++)
		{
			ellipse(x, scl/1.5 + scl/2, scl, scl);
			x+=scl*2;
		}
	}
	 if(s.lives==1)
	{
		var x = scl*8 + scl/2
		for(var i = 0; i < 1; i++)
		{
			ellipse(x, scl/1.5 + scl/2, scl, scl);
			x+=scl*2;
		}
	}
	 if(s.lives==0)
	{
		var x = scl*8 + scl/2
		for(var i = 0; i < 0; i++)
		{
			ellipse(x, scl/1.5 + scl/2, scl, scl);
			x+=scl*2;
		}
		s.alive = false;
	}
	
	pop();
}

function keyPressed() {
	if(s.alive == true)
	{
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
  
}
