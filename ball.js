class Ball
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,25,options)
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(255);
        imageMode(RADIUS)
        image(this.image, 0,0,25,25)
        pop();
    }
}