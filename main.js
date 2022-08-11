var SpeechRecognition = window.webkitSpeechRecognition;
var rec = new SpeechRecognition();

rec.onresult=function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("output").innerHTML=content;

    if(content == "Cheese.") {
        console.log(content);
        
        done();
        
    }
}

function start() {
    document.getElementById("output").innerHTML="";
    rec.start();    
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
})

camera=document.getElementById("livecam")

Webcam.attach(camera);

function pic() {
    Webcam.snap(function (data_uri){
        document.getElementById("selfie").innerHTML='<img id="selfie_img" src="'+data_uri+'">'
    })
    save();
}

function save() {
    link=document.getElementById("download");
    img=document.getElementById("selfie_img").src;
    link.href=img;
    link.click();

    window.alert("Photo saved")
}

function done() {
  
    pic();
    
      
}