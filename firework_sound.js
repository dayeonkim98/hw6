function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
}

var sparkles = [];

var chime;

var sounds = [];

function preload() {
  soundFormats('m4a');
  for (var i = 0; i < 15; i++) {
    let sound = loadSound('glockenspiel.m4a');
    sound.rate(0.5 * pow(2, i / 12)); // 12-semitone exponential scale

    sounds.push(sound);
  }
}

function draw() {
  background(0, 10);
  
  noStroke();
  
  for (var i = 0; i < sparkles.length; i = i + 1) {
    var sparkle = sparkles[i];
    
    fill(sparkle.h, random(10, 100), random(120-sparkle.frames/2, 20-sparkle.frames/4));
    ellipse(sparkle.x, sparkle.y, sparkle.diameter);
    
    sparkle.x = sparkle.x + sparkle.vx;
    sparkle.y = sparkle.y + sparkle.vy;
    
    // add a little friction & gravity
    sparkle.vx = sparkle.vx * 0.99;
    sparkle.vy = sparkle.vy * 0.99 + 0.02;
    
    // count how many frames the sparkle has been visible
    sparkle.frames = sparkle.frames + 1;
    
    sparkle.diameter = sparkle.diameter - 0.05
  }
  
  // remove any sparkles older than 240 frames
  while (sparkles.length > 0 && sparkles[0].frames > 240) {
    sparkles.shift();
  }
}

function mousePressed() {
  for (var i = 0; i < 30; i = i + 1) {
    var angle = random(TWO_PI);
    var distance = random(1.5,2);
    
    sparkles.push({
      h: random(360),
      x: mouseX,
      y: mouseY,
      vx: distance * sin(angle),
      vy: distance * cos(angle),
      frames: 0,
      diameter: random(10)
    });
  }
}

function keyPressed() {
  if (key == 'a') {
    sounds[0].play();
  }
  if (key == 'w') {
    sounds[1].play();
  }
  if (key == 's') {
    sounds[2].play();
  }
  if (key == 'e') {
    sounds[3].play();
  }
  if (key == 'd') {
    sounds[4].play();
  }
  if (key == 'f') {
    sounds[5].play();
  }
  if (key == 't') {
    sounds[6].play();
  }
  if (key == 'g') {
    sounds[7].play();
  }
  if (key == 'y') {
    sounds[8].play();
  }
  if (key == 'h') {
    sounds[9].play();
  }
  if (key == 'u') {
    sounds[10].play();
  }
  if (key == 'j') {
    sounds[11].play();
  }
  if (key == 'k') {
    sounds[12].play();
  }
  if (key == 'o') {
    sounds[13].play();
  }
  if (key == 'l') {
    sounds[14].play();
  }
}
