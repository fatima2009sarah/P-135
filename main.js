img = "";
function preload() {
}

function setup() {
    canvas = createCanvas(390, 320);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(390, 320);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status is detecting the object";

}

function modelLoaded() {
    console.log("model is Loaded");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 390, 320);

}