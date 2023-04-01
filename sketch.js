var img;
var img2;
var sound;
var button;
var time;
var totaltime;
var p2;
var p3;



function setup() {

  createCanvas(992, 1400);
  img = loadImage("LIMMA_ASCENDANT_redux2.jpg");
  img2 = loadImage("FM_module_redux2.jpg");
  sound = createAudio("SONEILL_radio_excerpt.mp3");
  sound.position(10, 750);

  // button = createButton("play");
  // button.size(50, 30);
  // button.position(-100, 750);
  // button.mousePressed(togglePlaying);

  //p0 = createP("LIMMA_ASCENDANT");
  //p0.position(55, 650);
  p1 = createP("FM radio module / Teensy mirco-controller sound sample - Austin TX");
  p1.position(320, 741);
  p3 = createP("Limma_ascendant uses cut-up real-time radio content from up to x-16 local stations — manipulates the fragments of audio and intersperses them throughout the performance space. The juxtaposition of the various stations colliding and being reassembled in different ways creates a constantly evolving reinterpretation of the sonic context of the material. \n Weather reports, traffic updates, local news, advertisements, and music channels are the sound sources for the project. Instead of using traditional radios and manually moving the dial to access channels, this project is based around a digital FM radio module which can access FM channels digitally, by scanning, programming, and storing the channels. The radio module is controlled via a Teensy v4.3 microcontroller, which algorithmically switches / glitches between channels to create anything from shifting nonsensical sequences to barely perceivable compositional sections. The microcontroller is also processing the audio from the radio module, using spatial / time-based effects such as panning, delays and reverbs, for further displacement of the original content.");
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
