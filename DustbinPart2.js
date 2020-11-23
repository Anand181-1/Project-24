class Boundries {
    constructor(x,y) {
        var options = {
           isStatic:true 
        }
        this.box = Bodies.rectangle(x, y, 15, 85, options);
        this.width = 15;
        this.height = 85;

        World.add(world, this.box);
    }
    display() {
        var pos = this.box.position;
        fill("white")
        rect(pos.x,pos.y,this.width,this.height); 
        noFill();
    }
}