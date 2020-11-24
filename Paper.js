class Paper {
    constructor(x,y,r) {
        var options= {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.paper = Bodies.circle(x, y, r/2, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.paper);
    }
    display() {
        var pos = this.paper.position;
        
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("pink");
        ellipse(0, 0, this.r,this.r);
        noFill();
        pop()
    }
}
