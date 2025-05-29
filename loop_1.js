let rate = 80
setcpm(rate)

const dbank = "RolandTR909"
const hhbank = "RolandCompurhythm1000"
const bassSound = "gm_synth_bass_2"
const choirSounds = "gm_choir_aahs:2, saw"

const colors = "violet magenta purple hotpink"

// Bass loop notes in C minor scale (I think)
$: note(`[f2@2 f2 - g#2!2 a#2 g#2 - f2!2 - g#2 f2 a#2 g#2]`)
  .s(bassSound)
  .lpf(slider(400, 200,1000)) //400
  .room(slider(0.6, 0, 1)) //0.6
  .gain(slider(0.227, 0.2, 2)) //0.2
  .pan(".4")
  .cpm(rate/4)
  .color(colors)
  .punchcard()


// choirs?
$: note(`[-@2 f4@2 g#4@2 a#4@2 f4@2 -@2]`)
  .s(choirSounds)
  .n("<32>")
  .phaser(4)
  .vowel("<i>")
  .lpf(slider(593.6, 200,1000)) //400
  .room(slider(0.598, 0, 1)) //0.6
  .gain(2)
  .adsr(".1:.5:.8:.1")
  .delay(.5)
  .pan(".2 .4 .6 .8 1")
  .cpm(rate/6)


// Drums
$: s("<hh>").bank(hhbank)
  .gain(.03)
  .room(.2)
  .cpm(rate*2)
  ._pianoroll({labels:1})
$: s("<oh>").bank(dbank)
  .gain(.03)
  .room(.2)
  .cpm(rate/4)
  ._pianoroll({labels:1})
$: s("<- sd, - sd>").bank(dbank)
  .gain(.08)
  .room(.3)
  .pan(".6")
  .cpm(rate)
  ._pianoroll({labels:1})
$: s("<- bd>").bank(dbank)
  .gain(.25)
  .room(.35)
  .cpm(rate)
  ._pianoroll({labels:1})
