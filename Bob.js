class Bob {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 0.5,
          friction: 0.5,
          density: 1
      }
      this.body = Bodies.circle(x, y, 16, options);
      
      World.add(world, this.body);
    }
    display(){

      fill("purple");
      ellipse(this.body.position.x, this.body.position.y, 32, 32);

    }
  }
  