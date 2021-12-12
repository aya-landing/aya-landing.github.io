// Ayahuasca ART
var chromacity;
var colorHue;
var pattern;
var palette;
var strokeLines;
var strokeSpacing;
var strokeColors;
var strokeColorsCounter;

var currentColor;
var initialColor;
var finalColor;
var bgColor;
var voidWidth;
var flow;
var density;
var t;

var renderer;
var metadata;

let palAmazonia = 
[
  [[10,80,90],[35,80,90],[55,80,90],[85,80,90],[115,80,80],[200,80,90]], // Stroke Color Strong
  [[10,15,100],[35,15,100],[55,15,100],[85,15,100],[115,15,100],[200,15,100]], // Stroke Color Light
  [[10,60,10],[35,60,10],[55,60,10],[85,60,10],[115,60,10],[200,60,10]] // Background Color
];

let palPsychedelic = [
  [5,100,100],
  [35,100,100],
  [65,100,100],
  [125,100,100],
  [155,100,100],
  [185,100,100],
  [215,100,100],
  [305,100,100],
  [335,100,100]
];

function setup() {

  colorMode(HSB);
  angleMode(DEGREES);
  strokeCap(ROUND);

  renderer = createCanvas(800, 800);

  var prng = parseInt(new URLSearchParams(location.search).get('seed'), 10);//floor(random(10000000000000000, 99999999999999999));
  noiseSeed(prng);
  randomSeed(prng);
  console.log(prng);

  pattern = random(['Curves','Void']);
  voidWidth = random(['Fixed','Dynamic']);
  strokeColorsCounter = random(['two','three','all']);

  // flow / Pal Attributes
  switch (strokeColorsCounter) {
    case 'two':
      palette = random(['Psychedelic','Amazonia']);
      flow = random(['Regular','Irregular']);
      break;
    case 'three':
      palette = random(['Psychedelic','Amazonia']);
      flow = 'Irregular';
      break;
    case 'all':
      palette = random(['Psychedelic','Spectrum','Amazonia']);
      if (palette == 'Spectrum') {
        flow = random(['Regular','Irregular']);
      } else {
        flow = 'Irregular';
      }
      break;
    default:
  }

  // strokeWidth, strokeSpacing & Density Attribute
  if (pattern == 'Curves') {
    if (flow == 'Regular') {
      strokeWidth = round(random(0.15, 0.25), [3]);
    } else {
      strokeWidth = round(random(0.25, 0.5), [3]);
    }
    strokeSpacing = round(random(0.0015, 0.004), [3]);
    if (strokeSpacing >= 0.0015 && strokeSpacing < 0.002) {
      density = 'High';
      strokeLines = floor(random(1500, 2000));
    } else if (strokeSpacing >= 0.002 && strokeSpacing < 0.003) {
      density = 'Medium';
      strokeLines = floor(random(1000, 1500));
    } else if (strokeSpacing >= 0.003 && strokeSpacing <= 0.004) {
      density = 'Low';
      strokeLines = floor(random(750, 1000));
    }
  } else if (pattern == 'Void') {
    strokeWidth = round(random(0.25, 0.5), [3]); // NFT Attribute
    strokeSpacing = round(random(0.01, 0.02), [3]); // NFT Attribute
 
    if (strokeSpacing >= 0.01 && strokeSpacing < 0.0125) {
      density = 'High';
      strokeLines = floor(random(500, 750)); // NFT Attribute
    } else if (strokeSpacing >= 0.0125 && strokeSpacing < 0.015) {
      density = 'Medium';
      strokeLines = floor(random(350, 500)); // NFT Attribute
    } else if (strokeSpacing >= 0.015 && strokeSpacing <= 0.02) {
      density = 'Low';
      strokeLines = floor(random(200, 350)); // NFT Attribute
    }
  }

  switch (palette) {
    case 'Spectrum':
      bgColor = color(0,0,0);
      colorHue = floor(random(0, 360));
      currentColor = color(colorHue,100,100,1);
      strokeColorsCounter = 'all';
      chromacity = 'Polychrome';
      break;
    case 'Psychedelic':
      bgColor = color(0,0,0);
      if (strokeColorsCounter == 'all') {
        currentColor = random(palPsychedelic);
        chromacity = 'Polychrome';
      } else {
        strokeColors = getStrokeColorsPsychedelic(palPsychedelic);
        initialColor = color(strokeColors[0]);
        finalColor = color(strokeColors[1]);
        currentColor = initialColor;
        chromacity = chromacityChecker(strokeColors,bgColor);
      }
      break;
    case 'Amazonia':
      strokeColors = getStrokeColorsAmazonia(palAmazonia[1],palAmazonia[0]);
      initialColor = color(strokeColors[0]);
      finalColor = color(strokeColors[1]);
      currentColor = initialColor;
      bgColor = random(palAmazonia[2]);
      if (strokeColorsCounter == 'all') {
        chromacity = 'Polychrome';
      } else {
        chromacity = chromacityChecker(strokeColors,bgColor);
      }
      break;
    default:
  }

  background(bgColor);
  frameRate(60);
  noFill();
  t = 0;

  print('Palette: '+ palette + 
  ' | StrokeWidth: ' + strokeWidth + 
  ' | strokeSpacing: ' + strokeSpacing, 
  ' | BaseColor: ' + currentColor, 
  ' | Chromacity: ' + chromacity, 
  ' | Pattern: ' + pattern, 
  ' | StrokeLines: ' + strokeLines,
  ' | Flow: ' + flow,
  ' | StrokeColorCounter: ' + strokeColorsCounter,
  ' | Density: ' + density)

  metadata = {
    Seed: prng,
    Palette: palette,
    Chromacity: chromacity,
    Flow: flow,
    Density: density,
    Pattern: pattern
  }
}

function draw() {
  strokeWeight(strokeWidth);
  stroke(currentColor);

  // Shape Color
  if (palette == 'Spectrum') {
    if (flow == 'Regular') {
      colorHue += 1;
      currentColor = color(colorHue,100,100);
      if (colorHue == 360) {
        colorHue = 1;  // Reset on 360 hue color space
      }
    } else if (flow == 'Irregular') {
      colorHue = floor(random(0, 360)); // Adds a new random flow
      currentColor = color(colorHue,100,100);
    }
  }
  if (palette != 'Spectrum') {
    if (strokeColorsCounter != 'all') {
      if (flow == 'Regular') {
        if (frameCount > strokeLines/3 && frameCount <= (strokeLines/1.5) ) {
          // enable color interpolation
          var currentLocalCount = frameCount - (strokeLines/3);
          var relativeLocalCount = (currentLocalCount)/(strokeLines/3); // 0.0 - 1.0
          print(frameCount);
          print(currentLocalCount);
          print(relativeLocalCount);
          colorMode(RGB);
          currentColor =  lerpColor(initialColor, finalColor, relativeLocalCount);
          colorMode(HSB);
        }
        if (frameCount > (strokeLines/1.5)) {
          currentColor = finalColor;
        }
      }
      if (flow == 'Irregular') {
        currentColor = random(strokeColors);
      }
    }
    if (strokeColorsCounter == 'all'){
      if (flow == 'Irregular') {
        if (palette == 'Amazonia') {
          currentColor = random([random(palAmazonia[0]),random(palAmazonia[1])]);
        }
        if (palette == 'Psychedelic') { 
          currentColor = random(palPsychedelic); // Adds a new random flow
        }
      }
    }
  }
  // Shape Pattern
  switch (pattern) {
    case 'Curves':
      if (frameCount > 1) {
        var x1 = width * noise(t + 0);
        var y1 = height * noise(t + 10);
        var x2 = width * noise(t + 20);
        var y2 = height * noise(t + 30);
        var x3 = width * noise(t + 40);
        var y3 = height * noise(t + 50);
        var x4 = width * noise(t + 60);
        var y4 = height * noise(t + 70);
        bezier(x1, y1, x2, y2, x3, y3, x4, y4);
      }
      break;
    case 'Void':
      if (frameCount > 1) {
        beginShape();
        translate(width/2, height/2);
        for (let a = 0; a < 360; a += 0.02) {
          let xoff = map(cos(a), -1, 1, 0, 2);
          let yoff = map(sin(a+t), -1, 1, 0, 2);
          const r = map(noise(xoff, yoff,t), 0, 1, 100, 300);
          let x;
          if (voidWidth == 'Fixed') {
            x = width/4 * cos(a);
          } else {
            x = r * cos(a); // from center to x axis
          }
          let y = r * sin(a);// from center to y axis
          curveVertex(x, y);
        }
        endShape(CLOSE);
      }
      break;
    default:
  }
  t += strokeSpacing;
  if (frameCount % strokeLines == 0) {
    if (window.savePicture) {
      window.savePicture({
        base64: renderer.canvas.toDataURL(),
        metadata,
      });
    }
    noLoop();
  }
}

function getStrokeColorsAmazonia(arraySoft,arrayStrong){
  var initialColorStyle = random(['soft','strong']);
  var strokeColors = [];
  if (initialColorStyle == 'soft') {
    append(strokeColors,random(arraySoft)); // Append first value
    append(strokeColors,random(arrayStrong)); // Append second value
  } else {
    append(strokeColors,random(arrayStrong));
    append(strokeColors,random(random([arraySoft,arrayStrong])));
  }
  if (strokeColorsCounter == 'three') {
    append(strokeColors,random(arrayStrong));
  }
  return strokeColors
}

function getStrokeColorsPsychedelic(array){
  var strokeColors = [];
  if (strokeColorsCounter == 'two') {
    append(strokeColors,random(array));
    append(strokeColors,random(array));
  } else if (strokeColorsCounter == 'three') {
    append(strokeColors,random(array));
    append(strokeColors,random(array));
    append(strokeColors,random(array));
  }
  return strokeColors
}

function chromacityChecker(strokeColors, backgroundColor){
  var chromacity;
  var arrHue = [];
  for (let i = 0; i < strokeColors.length; i++) {
    append(arrHue,round(hue(strokeColors[i]))); // Don't append bg if it's black
  }
  if (round(hue(backgroundColor)) != 0) {
    append(arrHue,round(hue(backgroundColor))); // Append background if it's not black
  }
  const counts = {};
  for (const num of arrHue) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  print(arrHue);
  console.log('Frequency: '+ Object.keys(counts).length);
  if (Object.keys(counts).length == 1) {
    chromacity = "Monochrome";
  } else if (Object.keys(counts).length == 2) {
    chromacity = "Duochrome";
  } else if (Object.keys(counts).length == 3) {
    chromacity = "Trichrome";
  } else if (Object.keys(counts).length >= 4) {
    chromacity = "Polychrome";
  }
  return chromacity;
}