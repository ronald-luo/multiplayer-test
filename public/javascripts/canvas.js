console.log('canvas script loaded')

// page variables
let canvas = createHiPPICanvas(window.innerWidth, window.innerHeight);
let ctx = canvas.getContext("2d");
let players = [];

// create 100 new boids on page load
(function setup() {
    for (let i = 0; i < 2; i++) {
      players.push(new Player());
    }
})();

// draw boids on inital on page load
(function draw() {
    for (let player of players) {
        // boid.cohesion(flock);
        // boid.align(flock);
        // boid.separation(flock);
        // player.update();
        // player.edges();
        player.show(ctx);
    }
})();

// page functions
// resize the canvas on window resize
function resizeCanvas() {
    const ratio = window.devicePixelRatio;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    canvas.getContext("2d").scale(ratio, ratio);
};
  
// create canvas with the device resolution.
function createHiPPICanvas(width, height) {
    const ratio = window.devicePixelRatio;
    const canvas = document.createElement("canvas");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.getContext("2d").scale(ratio, ratio);
    document.body.appendChild(canvas)
    return canvas;
};