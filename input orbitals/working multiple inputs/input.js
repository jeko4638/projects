class NewInput {
  constructor(posx, posy, diameter, speedx, speedy, colorR, colorG, colorB){
    this.x = posx*10;
    this.y = posy*10;
    this.speedx = speedx/7;
    this.speedy = speedy/7;
    this.diameter = diameter;
    this.history = [];

    // this.fade = fade;
    this.update = function(){
      var v = createVector(this.x, this.y);
      this.history.push(v);

    }

    this.display = function(){
      fill(255);
      noStroke();
      fill(colorR, colorG, colorB);
      ellipse(this.x, this.y, this.diameter);
      // noFill();
      // stroke(255);
      // strokeWeight(3);
      // ellipse(this.x, this.y, this.diameter+100);
      // ellipse(this.x + 20, this.y + 20, this.diameter)
      // ellipse(this.x + 100, this.y + 100, this.diameter)
      for (var i; i < this.history.length; i++){
        var amn = this.history[i];
        // fill(255);
        ellipse(amn.x, amn.y, this.diameter)
      }
    }
    this.move = function(){
      this.x = this.x + this.speedx;
      this.y = this.y + this.speedy;
      var v = createVector(this.x, this.y);
      this.history.push(v);
    }


    // this.rotate = function(){
    //   translate(width*2, height*2)
    //   rotate(rotspeed+.01);
    // }
  }
}
