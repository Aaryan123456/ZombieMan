class Zombie{
    constructor(x,y,w,h,i){
       var options = {
           friction: 1,
           density: 1,
           restitution: 0.5
       }
       this.body = Bodies.rectangle(x,y,w,h,options);
       this.width = w;
       this.height = h;
       this.image = i;
       World.add(world,this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop();
    }
}