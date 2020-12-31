class cball
{
constructor(x,y,r)
{
    var options = {
        'isStatic' : false,
        'restitution': 0.4,
        'friction' :0.5,
        'density': 1.2,
    }
 
 this.body= Bodies.circle(x,y,r,options)
 
 this.x = x;
 this.y = y;
 this.r = r;
 
 World.add(world,this.body);
}
display(){
    var pos = this.body.position
    //var angle = this.body.angle
    push()
    //translate(pos.x,pos.y)
    //rotate(angle)
    rectMode(CENTER);
    fill("cyan")
    ellipse(pos.x,pos.y,this.r*2,this.r*2)
    pop()
}
}