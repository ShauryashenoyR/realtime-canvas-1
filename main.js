function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    //add the size of the canvas//
    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw(){
    background('#5A5A5A')
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    }
}


