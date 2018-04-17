class Orbital {
  constructor(xpos, ypos, diameter, rotation) {
    this.x = xpos;
    this.y = ypos;
    this.diameter = diameter;
    this.display = function(col){
      fill(255-col, 0+col, col);
      noStroke();
      ellipse(this.x, this.y, this.diameter);
    }
    this.twist = function(){
      rotate(1+x);
      x+=.01
    }
    this.wander = function(wanderx, wandery){
      translate(width/2 + wanderx, height/2 + wandery)
    }

  }
}
