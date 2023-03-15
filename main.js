var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML = content;
    if (content == "abe selfie Le Meri") {
        console.log("selfie lie ja rahi hai ---")
        speak()
    }

}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "Teri selfie le ja rahi hai 5 second mei";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(Camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
   
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});
 
Camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("captured_image").src;
    link.href = image;
    link.click();
}