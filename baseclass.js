class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'resitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = body.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("base.png");
        World.add(World, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}

