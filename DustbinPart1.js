class Base {
    constructor(x,y) {
        var options = {
          isStatic:true
        }

        this.box = Bodies.rectangle(x, y, 170, 15, options);
        this.width = 170;
        this.height = 15;
        World.add(world, this.box);
    }
  display() {
    var pos = this.box.position;
    fill("white")
    rect(pos.x,pos.y,this.width,this.height); 
    noFill();
  }
}