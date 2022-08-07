var SpeechRecognition = window.webkitSpeechRecognition;
var rec = new SpeechRecognition();

function start() {
    document.getElementById("output").innerHTML="";
    rec.start();
}
rec.onresult=function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("output").innerHTML=content;
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
})

camera=document.getElementById("livecam")

Webcam.attach(camera)