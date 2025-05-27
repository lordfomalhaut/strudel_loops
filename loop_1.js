let rate = 75
setcpm(rate)

// Loop notes in C minor scale (I think)
$: note(`
[f2@2 f2 - g#2 g#2 a#2 g#2 - f2!2 - g#2 f2 a#2 g#2]
`).sound("gm_synth_bass_2")
  .lpf(slider(393.6, 200,1000)) //400
  .room(slider(0.6, 0, 1)) //0.6
  .gain(slider(0.7, 0.2, 2)) //0.7
  .cpm(rate/4)
  .color("violet magenta purple hotpink")
  ._punchcard()


// Drums
$: s("<hh>").bank("RolandCompurhythm1000").gain(.03).room(.2).cpm(rate*2)._pianoroll({labels:1})
$: s("<oh>").bank("RolandTR909").gain(.03).room(.2).cpm(rate/4)._pianoroll({labels:1})
$: s("<- sd, - sd>").bank("RolandTR909").gain(.15).room(.3).cpm(rate)._pianoroll({labels:1})
$: s("<- bd>").bank("RolandTR909").gain(.5).room(.35).cpm(rate)._pianoroll({labels:1})
