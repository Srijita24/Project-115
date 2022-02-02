function preload() {

}

function setup() {
    canvas = createCanvas(300, 300); 
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initiallized!!')
}

function draw() {
    Image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('Lipstick-Filter-Image.png');
}