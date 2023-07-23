console.log('player script loaded')

class Player {
    constructor() {
        this.position = new Vector(
            Math.random()*window.innerWidth, 
            Math.random()*window.innerHeight
        );
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);
    }

    // update velocity and position
    update() {
        this.velocity = this.velocity.add(this.acceleration);
        this.position = this.position.add(this.velocity);
    }

    // use canvas context to update position on canvas
    show(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI); 
        ctx.closePath();
        ctx.fill();
    }
}