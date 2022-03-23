noseX = 0;
noseY = 0;
rightWristx = 0;
leftWristx = 0;
difference = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 600);

    canvas = createCanvas(550, 600);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is ready");
}

function gotPoses(results)
{
   if(results.length > 0)
   {
      console.log(results)
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;

      leftWristx = results[0].pose.leftWrist.x;
      rightWristx = results[0].pose.rightWrist.x;
      
      difference = floor(leftWristx - rightWristx);
   }
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width & Height of the square : " +difference+ "px";
    fill('#F90093') 
    stroke('#F90093')
    square(noseX, noseY, difference);
}