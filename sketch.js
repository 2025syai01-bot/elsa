let bg;
let s;
let v;
let h=[];

function preload(){
  bg=loadImage('city.jpg');
  s=loadSound('betterday.mp3');  
  handpose=ml5.handPose({flipped:true});
}

function setup() {
  createCanvas(600, 500);
  s.play();
  v=createCapture(VIDEO,{flipped:true});
  v.hide();
  handpose.detectStart(v,gotHands);
}

function gotHands(r){
  h=r;
}

function draw() {
  image(bg,0,0,width,height);
  image(v,0,0,150,150);
  
  //console.log(h);
  if(h.length>0){
    noStroke();
    fill('white')
    for(let i=0;i<100;i++){
      circle(random(width),random(height),random(5,10))
    }    
  } 
  
  //textSize(100);
  //text('💃🕺',width/2,height-100);
  
  frameRate(10)
}