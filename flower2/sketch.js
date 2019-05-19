var xpos = 450;
var ypos = 450;
var xspeed = 5;
var yspeed = 5;

function preload(){
  pastel = loadImage("assets/Blackdahlia.jpg")
  paint = loadImage("assets/logo.png")
}
function setup() {
  createCanvas(1000,600)
}

function draw() {
  background(pastel)
  image(paint,xpos,ypos)
  
  if (xpos > 1000-300){
    xspeed =-10
  }
  
  if(0 > xpos+100){
    xspeed = 10
  }
  
  if(ypos > 600 - 350){
    yspeed = -4
  }
  
  if(0 > ypos - 2){
    yspeed = 4
  }
  
  xpos = xpos + xspeed
  ypos = ypos + yspeed
}