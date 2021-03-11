class Bob {
    constructor(x, y, radius) {
      var options={
        'density':1.5,
        'friction': 2.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    };
    display(){
      strokeWeight(3);
      stroke('white');
      fill('white');
      ellipse(this.body.position.x, this.body.position.y, 60);
     
    };
  };