noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(570,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('#3446eb');
    fill('#f542e3');
    stroke('#f54242');
    square(noseX, noseY, difference);
    document.getElementById("squareside").innerHTML="width and height of the square will be "+ difference+"px";
}
function modelLoaded() {
console.log('PoseNEt is initialized');
}
function gotPoses(results) {
    if (results.length>0)
     {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX);
        difference= floor(leftWristX-rightWristX);
    }
}