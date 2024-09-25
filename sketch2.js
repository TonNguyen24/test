let particles = []; // Array of particles

function setup() {
    const canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.7); // Make canvas 80% of window size
    canvas.parent('canvas-container'); // Attach canvas to the #canvas-container div
    background(0); // Set background to black
    frameRate(60);
}

function draw() {
    // Update and show the particles
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update(particles);
        particles[i].show();
        if (particles[i].alpha <= 2) particles.splice(i, 1); // Remove dead particles
    }
}

// Particle class (NO CHANGES)
class Particle {
    constructor(x, y, r, a) {
        this.location = createVector(x, y);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.acceleration = createVector();
        this.alpha = this.palpha = a;
        this.amp = 3; // Size of the particle
        this.rate = r;
    }

    update(p) {
        this.acceleration.add(
            createVector(noise(this.location.x) * 2 - 1, noise(this.location.y) * 2 - 1)
        );
        this.velocity.add(this.acceleration);
        this.acceleration.set(0, 0);
        this.location.add(this.velocity);
        this.alpha -= this.rate;

        // Recursion condition for particle splitting
        if (this.alpha <= this.palpha * 0.25 && this.palpha > 10) {
            p.push(
                new Particle(this.location.x, this.location.y, this.rate * 0.25, this.palpha * 0.5)
            );
        }
    }

    show() {
        noStroke();
        fill(255, this.alpha); // Set particle color to white
        ellipse(this.location.x, this.location.y, this.amp);
    }
}

// Button interaction for particle generation
document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('sendButton');
    
    // When SEND button is pressed, generate particles
    sendButton.addEventListener('click', function () {
        // Generate three particles at random locations
        for (let i = 0; i < 3; i++) {
            let randomX = random(width);
            let randomY = random(height);
            
            // Spawn a new particle at a random position
            particles.push(new Particle(randomX, randomY, 5, 75));
        }
    });
});
