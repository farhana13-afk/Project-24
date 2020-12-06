class Paper {
    constructor(x,y,diameter){
   var p_options={
       isStatic:false,
       'restitution':0.8,
       'friction':0.5,
       'density':1.2
   }
this.body = Bodies.circle(x,y,diameter, p_options);
this.d= diameter;
World.add(world, this.body);
    }
display(){
    var pos = this.body.position
    push ();
    translate(pos.x, pos.y);
    strokeWeight(0.3);
    stroke("white");
    fill ("pink");
    rectMode(CENTER);
    ellipse(0,0, this.d);
    pop (); 
} 
}
