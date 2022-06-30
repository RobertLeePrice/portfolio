// particle constants
const MIN_DIAMETER = 1;
const MAX_DIAMETER = 6;
const BOARDER_PADDING = 10;
const MIN_SPAWN_WIDTH = BOARDER_PADDING + MAX_DIAMETER;
const MIN_SPAWN_HEIGHT = BOARDER_PADDING + MAX_DIAMETER;
const PAIR_DISTANCE = 70;
const SPEED = 0.2;


export default class Particle {
 
    constructor (p5, width, height) {
        this.p = p5;
        this.x = p5.random(MIN_SPAWN_WIDTH, width - BOARDER_PADDING - MAX_DIAMETER);
        this.y = p5.random(MIN_SPAWN_HEIGHT, height - BOARDER_PADDING + MAX_DIAMETER);
        this.r = p5.random(MIN_DIAMETER, MAX_DIAMETER);
        this.speedX = p5.random(-SPEED, SPEED);
        this.speedY = p5.random(-SPEED, SPEED);
        this.w = width;
        this.h = height
    }

    move() {
        if(this.x < 0 + this.r / 2 || this.x > this.w - this.r / 2 ) {
        this.speedX *= -1;
        }

        if(this.y < 0 + this.r / 2 || this.y > this.h - this.r / 2) {
        this.speedY *= -1;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
    }

    connect(p5, particles) {
        particles.forEach(p => {
        let distance = p5.dist(this.x, this.y, p.x, p.y);
            if (distance < PAIR_DISTANCE) {
                p5.stroke(p5.color(255, 255, 255, 25));
                p5.line(this.x, this.y, p.x, p.y);
            }
        });
    }

    render(p5) {
        p5.noStroke();
        p5.fill(p5.color(255, 255, 255, 70));
        p5.circle(this.x, this.y, this.r);
    }

}