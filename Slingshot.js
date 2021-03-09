class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.img1 = loadImage("sprites/sling1.png");
        this.img2 = loadImage("sprites/sling2.png");
        this.img3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.img1, 200, 20);
        image(this.img2, 170, 20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            push();
            stroke(48,22,8);
            if(pointA.x < 220){
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 25, pointB.y - 5);
                image(this.img3, pointA.x - 30 , pointA.y - 13 , 15 , 30);
            }else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x - 20, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 25, pointB.y - 5);
                image(this.img3, pointA.x - 30 , pointA.y - 13 , 15 , 30);
            }
            pop();
        }
    }
    
}