let rate = 80
setcpm(rate)

// Bass loop notes in C minor scale (I think)
$: note(`
[f2@2 f2 - g#2 g#2 a#2 g#2 - f2!2 - g#2 f2 a#2 g#2]
`).sound("gm_synth_bass_2")
  .lpf(slider(326.4, 200,1000)) //400
  .room(slider(0.494, 0, 1)) //0.6
  .gain(slider(0.227, 0.2, 2)) //0.7
  .cpm(rate/4)
  .color("violet magenta purple hotpink")
  ._punchcard()


// choirs?
$: note(`
[f4@2 g#4@2 a#4@2 f4@2 - - - -]
`).sound("gm_choir_aahs:2, saw").n("<32>").phaser(4).vowel("<i>")
  .lpf(slider(593.6, 200,1000)) //400
  .room(slider(0.598, 0, 1)) //0.6
  // .gain(slider(2, 0.2, 2)) //0.7
  .gain(2)
  .adsr(".1:.5:.8:.1")
  .delay(.5)
  .pan("0 0.3 .6 1")
  .cpm(rate/6)
  .color("violet magenta purple hotpink")
  ._scope()


// Drums
$: s("<hh>").bank("RolandCompurhythm1000").gain(.03).room(.2).cpm(rate*2)._pianoroll({labels:1})
$: s("<oh>").bank("RolandTR909").gain(.03).room(.2).cpm(rate/4)._pianoroll({labels:1})
$: s("<- sd, - sd>").bank("RolandTR909").gain(.08).room(.3).cpm(rate)._pianoroll({labels:1})
$: s("<- bd>").bank("RolandTR909").gain(.25).room(.35).cpm(rate)._pianoroll({labels:1})
