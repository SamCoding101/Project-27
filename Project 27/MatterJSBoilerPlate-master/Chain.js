class Chain{
    constructor(constrainBody,ConnectedBody){
        var options = {

            bodyA:constrainBody,
            pointB:ConnectedBody,
            stiffness:0.1,
            lenght:10
      
          }
         this.sling = Constraint.create(options);
         World.add(world,this.sling);

    }

display(){
    var posA = this.sling.bodyA.position;
    var posB = this.sling.pointB;
    stroke(255);
    strokeWeight(3);
    line(posA.x,posA.y,posB.x,posB.y);

    }
}