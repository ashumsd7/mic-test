window.onload = function() {
    var constraints = { audio: true,};
    navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
       console.log("Device has mic");
       document.getElementById('result').innerText="Device has mic";
    }).catch(function(err){
        console.log("There is an error: " + err.message);
        document.getElementById('result').innerText="There is an Error "+err.message;
    });
}