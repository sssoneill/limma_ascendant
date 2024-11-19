var img;
var img2;
var sound;
var button;
var time2;
var totaltime;
var p2;
var p3;
var p4;
var p5;


 
function setup() {

  createCanvas(windowWidth, windowHeight);
  img = loadImage("230410_Limma_accendant3_redux.jpg");
 // img2 = loadImage("FM_module_redux2.jpg");
  sound = createAudio("LIMMA_ASCENDANT_Radio_section2.mp3");
  

  // button = createButton("play");
  // button.size(50, 30);
  // button.position(-100, 750);
  // button.mousePressed(togglePlaying);

 // p0 = createP("LIMMA_ASCENDANT")
 // p0.position(55, 650);
  
 // p1 = createP("FM radio module / Teensy mirco-controller sound sample - Austin TX");
 // p1.position(320, 741);
  
  p3 = createP("Limma_ascendant cuts up real-time radio content from any number of local radio stations. The selection is indeterminate, and influenced by the project’s location, time of day of the performance, and program scheduling. As the audio get fragmented, reassembled, and interspersed throughout the performance space, it gives way to ever-changing reinterpretations of sonic texture, spatialization and context. <br> <br> &nbsp&nbsp&nbsp&nbsp Weather reports, traffic updates, local news, advertisements, music channels, all serve as sound sources. Instead of manually turning the dial to access various broadcasts, this project is based around a digital FM radio module programmed to scan FM stations and store their associated broadcast frequencies. The radio module is controlled via a Teensy microcontroller, which algorithmically switches / or glitches between stations at changing rates, creating anything from shifting nonsensical sequences to barely perceivable compositional sections. The microcontroller is also processing the audio, using spatial and time-based effects such as panning, delays, and reverbs, adding an extra layer of displacement to the original audio. This method of accessing and sequencing material from the radio, allows for evolving perceptions of cohesion, whether its moments of sparse, static bursts or more dense, immersive sound collage. <br> <br> &nbsp&nbsp&nbsp&nbsp Limma_ascendant takes note of the historical significance of radio for experimentation in sound art and composition, acknowledging elements of collage, aleatoric, and stochastic techniques by means of cheap electronic microcontrollers. The project is suited for a variety of spaces and environments and can utilize for 2 or more audio channels. <br> <br> <br> <br>");
  
  //creating breaks with <br>
  //creating space with &nbsp
  
  p3.style('textIndent','20px');
  p3.style('max-width', '864px');
  p3.style('text-align', 'justify');
  p3.style('letter-spacing', '0.08em');
//  p3.position(10, 595);
  
  
  // p2 = createP(time);
  // p2.position(10, 770);

}


function draw() {

  if (sound.duration() > 0) {
    sound.showControls();
  }
  
background(255);
  
  // Calculate the size of the image
  const maxSize = min(windowWidth, windowHeight* 0.8);
  const imgSize = min(maxSize, min(img.width, img.height));
  // Draw the image at the center of the canvas
  image(img, (windowWidth - imgSize*1.6) / 2, 50, imgSize*1.6, imgSize);
  
  p3.position((windowWidth - imgSize*1.6) / 2, 640);
  
  sound.position((windowWidth - imgSize*1.6) / 2, 600);
  
  // image(img2, 467, 835);
  // p2.html(time);
  // time = time.toFixed(2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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