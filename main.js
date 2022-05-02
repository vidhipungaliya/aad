var Perfect_song = "";
var Alone_song = "";


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Perfect_song = loadSound("perfect.mp3");
    Alone_song = loadSound("alone.mp3");
}

function draw(){
    image(video , 0 , 0 , 600 , 530);
}