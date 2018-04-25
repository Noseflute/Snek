function Snake() {
  //"this" is the snake
  this.x = 0; //sets the default x
  this.y = 0; //sets the default y
  this.xspeed = 1; //sets the initial direction when starting
  this.yspeed = 0; //sets the initial direction when starting
  this.total = 0;
  this.tail = [];
  
  this.dir = function(x,y) { //This moves the snake
    this.xspeed = x;
    this.yspeed = y;
  };
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y); //setting d to equal a distance in pixels
    if (d < 1) {
      this.total++; //++ is used to add things
      fRate++;
      document.getElementById('yourScore').innerHTML = this.total;
      return true;
    }
    else {
      return false;
    }
  }

  
  this.death = function() {
    if ((this.tail.length===0)&&(this.x<0||this.x>w-scl||this.y>h-scl||this.y<0)) { //if the tail is zero AND you touch the wall
      document.getElementById('yourScore').innerHTML = "Touched wall, Dead";
      this.total = 0;
      noLoop();
    }
      for(var i=1;i<this.tail.length;i++){
        var pos = this.tail[i];
        var d = dist(this.x, this.y, pos.x, pos.y); //If the distance between the head and its tail...
      }
      if ((d<1)||(this.x<0||this.x>w-scl||this.y<0||this.y>h-scl)) { //is less than 1 pixel
        this.total = 0; // clear the total
        this.tail =[];  //clear the array
        document.getElementById('yourScore').innerHTML = "Dead";
        noLoop(); //Stop the draw function
      }
      
    
  }
  
  this.update = function() {
    for (var i = 0; i < this.tail.length -1; i++) {
      this.tail[i] = this.tail[i + 1]; // Add one to the tall of the snake
    }
    if (this.total >= 1) {
      this.tail[this.total -1] = createVector(this.x, this.y); //Makes the next box follow
    }
    this.x = this.x + this.xspeed * scl; //Moves snake by 20
    this.y = this.y + this.yspeed * scl; //Moves snake by 20
//    this.x = constrain(this.x, 0, width - scl); //if the current x position is touching the width
//    this.y = constrain(this.y, 0, height - scl); // if the current x position is touching the width
  }
  
  this.show = function() {
    fill(255,0,0); // This is our snake color
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}