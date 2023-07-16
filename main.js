noseX = 100;
noseY = 100;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(500,450);
    canvas.position(560,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    text("How are you doing")
    document.getElementById("square_side").innerHTML = "Width and height of the font will be" + difference + "px";
}

function modelLoaded(){
    console.log("Posenet is initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX=" + rightWristX + "leftWristX=" + leftWristX + "difference=" + difference);
    }
}