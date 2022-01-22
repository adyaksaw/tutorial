navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  const video = document.createElement('video');
  video.srcObject = mediaStream;
  video.autoplay = true;
  document.body.appendChild(video);
})
