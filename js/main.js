var video = document.querySelector("#videoElement");
var wrapper = document.querySelector("#mirror-wrapper");
var audio = new Audio('audio_file.mp3');
var popup = document.getElementById('popup');
var popupButton = document.getElementById('popup-button');

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      audio.volume = 0.2;
      audio.play();
      audio.muted = false;
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
  else if ((e.charCode == 109 || e.charCode == 77))
    audio.muted = !audio.muted;
};
/*video.ondblclick = function ()
{
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;     // Get the vertical coordinate
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor);
}*/

popup.addEventListener('click', () => {
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  popupButton.style.display = 'block';
});

popupButton.addEventListener('click', () => {
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
  popupButton.style.display = 'none';
});