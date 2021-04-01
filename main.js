function setup (){
    canvas = createCanvas(375,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,375,300)
}