class Bob{
    constructor(x,y,r){
      var options = {
       // isStatic:true,
        friction:0.5,
        density:1.2,
        restitution:0.3

      }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    this.image = loadImage("paper.png");

    World.add(world,this.body);
    
     }
    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("cyan")
    ellipse(0,0,this.r);
    pop();
     }
    }