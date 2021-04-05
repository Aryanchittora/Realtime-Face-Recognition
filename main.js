function preload() {}

function setup() {
    canvas = createCanvas(250, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    // ML5 Code
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/34Zuqj6e8/model.json", ModelLoaded); 
}
function ModelLoaded() {
    console.log("Model Loaded")
}

function draw() {
    image(video, 0, 0, 250, 250);
    //ML5 Code
    classifier.classify(video, gotresult);
}
function gotresult(error, result) {
    if (error) {
        console.error(error);
        window.alert("Error Identifiying Image, Try Reloading The Page");
    }
    else {
        console.log(result);
        document.getElementById("ans_object").innerHTML = result[0].label;
        document.getElementById("ans_accuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}