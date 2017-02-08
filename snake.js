function Snake() {
  this.x = scl*3;
  this.y = scl*3;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.score = 0;
  this.totalScore = 0;
  this.lives = 3;
  this.alive = true;

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
	  this.score+=1;
	  this.totalScore+=1;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
		if(this.score >0)
		{
			this.lives -=1;
			this.score = 0;
		}
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, scl, width - scl*2);
    this.y = constrain(this.y, scl*3, height - scl*2);
  }

  this.show = function() {
	noStroke();
    fill(0,255,0);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl, 5);
    }
    ellipse(this.x + scl/2, this.y + scl/2, scl, scl);
	
  }
}
