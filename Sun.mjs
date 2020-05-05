class Sun {
    constructor(x, y, radius, color) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      this.radius = this.radius + 1; 
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0, 0, this.radius + 1, this.radius + 1);
      pop();
    }
  };