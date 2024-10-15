const track_count = 5;
var angles = [
  0, // Bass
  45, // Drums
  0, // Rythm Center
  0, // Clean
  0, // Lead
  -45, // Rythm Left
  0, // Delay gtr
  -80, // MIDI gtr
  45, // Rythm Right
  0, // Double Drums
  0, // Reverb
];

var context = new AudioContext();
var master_angle_control = document.getElementById("master-angle");

var tracks = [];
var panners = [];
var sources = [];

var master_angle = 0;

for (var i = 0; i < track_count; i++) {
  tracks[i] = document.getElementById("track_" + i.toString());
  sources[i] = context.createMediaElementSource(tracks[i]);
  sources[i].connect(context.destination);

  panners[i] = context.createStereoPanner();
  panners[i].pan.value = 0;
  sources[i].connect(panners[i]);
  panners[i].connect(context.destination);
}

master_angle_control.oninput = function () {
  master_angle = master_angle_control.value;
  update_pannings();
};

function play_all() {
  context.resume();
  for (var i = 0; i < track_count; i++) {
    tracks[i].play();
  }
}

function update_pannings() {
  for (var i = 0; i < track_count; i++) {
    panners[i].pan.value = calculate_panning(angles[i] - master_angle);
  }
}

function calculate_panning(angle) {
  var panning = Math.sin((angle / 180) * Math.PI);
  // console.log(panning);
  return panning;
}
