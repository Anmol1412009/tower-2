class Polygon{
    constructor(){
      var options={
          friction:0.7,
          density:1,
          restitution:1
    
    
      }
      this.body=Bodies.circle(330,200,40,options)
     World.add(world,this.body)
    this.image=loadImage("polygon")
    
    
    }
    display()
        {
                    
                push()
                translate(polygonpos.x, polygonpos.y);
                // rectMode(CENTER)
                // rotate(this.body.angle)
                fill(255,0,255)
                imageMode(CENTER);
                ellipseMode(RADIUS)
                image(this.image, 0,0,this.r*2, this.r*2)
                pop()
                
        }
}