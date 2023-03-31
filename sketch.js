var img;
var img2;
var sound;
var button;
var time;
var totaltime;
var p2;
var p3;



function setup() {

  createCanvas(877, 1400);
  img = loadImage("LIMMA_ASCENDANT_redux.jpg");
  img2 = loadImage("FM_module_redux2.jpg");
  sound = createAudio("SONEILL_radio_excerpt.mp3");
  sound.position(10, 750);

  // button = createButton("play");
  // button.size(50, 30);
  // button.position(-100, 750);
  // button.mousePressed(togglePlaying);

  p0 = createP("LIMMA_ASCENDANT")
  p0.position(55, 650);
  p1 = createP("FM radio module / Teensy mirco-controller sound sample - Austin TX");
  p1.position(320, 741);
  p3 = createP("This project explores the use of FM radio as a compositional sound source. By scanning local FM stations with the SI 4703 Radio module, a wide variety of content can be accessed including weather reports, traffic updates, local news, advertisements, and many genres of music. This content is somewhat specific to each location, and lends a unique experience with each iteration. The audio library of the Teensy micro-controller provides digital processing to the signal, delays, reverbs and stuttering effects move the content through new spatial-temporalities, further emphasizing the the algorithmic control over FM channel switching. The project works well both as a sound installation or for live performance.");
  p3.position(10, 785);
  // p2 = createP(time);
  // p2.position(10, 770);

}


function draw() {

  if (sound.duration() > 0) {
    sound.showControls();
  }


  image(img, 10, 100);
  // image(img2, 467, 835);
  // p2.html(time);
  // time = time.toFixed(2);
}


// function togglePlaying() {

//   if (sound.isPlaying()) {
//     sound.stop();
//     button.html("play");
//   } else {
//     sound.play();
//     button.html("stop");
//   }
// }
