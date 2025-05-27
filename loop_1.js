let rate = 75
setcpm(rate)

// Loop notes in C minor scale (I think)
$: note(`
[f2@2 f2 - g#2 g#2 a#2 g#2 - f2!2 - g#2 f2 a#2 g#2]
`).sound("gm_synth_bass_2")
  .lpf(400)
  .room(.5)
  .gain(1)
  .cpm(rate/4)
  .color("cyan magenta")
  ._pianoroll()


// Drums
$: s("<hh*2>").bank("RolandTR909").gain(.1).room(.3)._pianoroll({labels:1})
$: s("<- sd>").bank("RolandTR909").gain(.1).room(.3)._pianoroll({labels:1})
$: s("<- bd>").bank("RolandTR909").gain(.5).room(.3)._pianoroll({labels:1})
