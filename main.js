song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
function setup()
{
    canvas=createCanvas(500, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, model_is_loaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0,0,500,500);
}


function preload(){
    song=loadSound("1.mp3");

}

function model_is_loaded(){
    console.log("model is loaded");
}

function gotPoses(result){
    if (result.length > 0) {
        console.log(result);
        leftWristX=result[0].pose.leftWrist.x;
        leftWristY=result[0].pose.leftWrist.y;
console.log("leftWristX= "+leftWristX+", leftWristY= "+leftWristY);        

        rightWristX=result[0].pose.rightWrist.x;
        rightWristY=result[0].pose.rightWrist.y;
        console.log("rightWristX= "+rightWristX+", rightWristY= "+rightWristY);     
    }
}