class Rope{
    constructor(body1, body2, offsetX, offsetY){
       
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: body1,
            bodyB: body2,
            length:200,
            pointB: {x: offsetX, y: offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        
        this.body1 = body1;
        this.body2 = body2;
    }
    
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);

    }
}