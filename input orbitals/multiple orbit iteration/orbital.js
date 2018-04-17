// HEY IAN/JOEL: I cant even get the particles to display

class Particle {
  constructor(value) {
  // DEFINED
    // defines attributes of the particle
    // HEY IAN/JOEL: I originally had all of these variables equal the main value
    // HEY IAN/JOEL: But for some odd reason, nothing is working
    this.value = value;
    this.y = value;
    this.diameter = value;
    // this.fill = value*9.8;
    this.fill = 255;
    this.rotation = value/100;

  // DISPLAY
    // function controlling the display of each particle
    this.display = function(){
      // translates the origin to the center
      translate(width/2, height/2);
      // controls fill color
    // HEY IAN/JOEL: for some reason, none of my map functions seem to work
      // map(this.fill, 1, 26, 30, 255, true);
      fill(255);
      // removes stroke
      noStroke();
      // draws the ellipse
      // map(this.diameter, 30, 255, 3, 15, true);
      ellipse(this.x, this.y, this.diameter);
    }

  // ROTATE
    // function controlling the rotation of each particle
    this.rotation = function(){
      // the rotation itself
      // map(this.rotation, 1, 26, .01, .1, true);
      rotate(0+x);
      x+=this.rotation;
      }

  // MOVE
    // this function controls the overall movement
    this.move = function(){
      this.x = this.x + z;
      this.y = this.y + z;
      z+=1;
    }
  }
}
