var video = document.querySelector("#videoElement");
var wrapper = document.querySelector("#mirror-wrapper");
var audio = new Audio('audio_file.mp3');

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      audio.volume = 0.2;
      audio.play();
      audio.loop = true;
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
document.onkeypress = function (e) {
  if (e.charCode == 102 || e.charCode == 70)
    wrapper.requestFullscreen();
  else if ((e.charCode == 109 || e.charCode == 77) && audio.muted == false)
    audio.muted = true;
  else if ((e.charCode == 109 || e.charCode == 77) && audio.muted == true)
    audio.muted = false;
};

/*video.ondblclick = function ()
{
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;     // Get the vertical coordinate
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor);
}*/