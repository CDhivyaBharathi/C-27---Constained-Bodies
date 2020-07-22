class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1.5,
            length : 6

        }
        this.Chain = Constraint.create(options);
        World .add(world,this.Chain);

    }
    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}