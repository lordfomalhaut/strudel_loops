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
$: s("<hh*2>").bank("RolandCompurhythm1000").gain(.03).room(.2)._pianoroll({labels:1})
$: s("<oh>/4").bank("RolandTR909").gain(.03).room(.2)._pianoroll({labels:1})
$: s("<- sd>").bank("RolandTR909").gain(.15).room(.3)._pianoroll({labels:1})
$: s("<- bd>").bank("RolandTR909").gain(.5).room(.35)._pianoroll({labels:1})
