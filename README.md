# Harmonizer 

I want to regenerate Stephen Malinowski's [Harmonizer](http://www.musanim.com/harmonizer/). 

## Issues
### Hexagonal grid implementation
I think the implementation is ugly. 

References:
* I referred to [this](https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/) i
* Also [this](https://www.redblobgames.com/grids/hexagons/) would be worthy to check. 

### Text aligning 
I think the text alignining is ugly. 

This issue is tangled with the Hex grid issue; flexbox is not possible since it uses `display: inline-block`. (Not sure.) So it was done by absolute positioning. 

## What to do 
* I want to make the sounds better. 
* Colors!
* I want to make some infinite grid of hexagons. 
* I want to serve this service; my tiny EC2 server cannot maintain this app. (I'm not sure.) 

## If you want to download and try it: 
* You might need node.js. 
* run `$npx create-my-app harmonizer` with shell. 
* remove all files in `harmonizer/src` and download the `src` directory in this repository to be your new `harmonizer/src`.
