navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  const video = document.createElement('video');
  video.srcObject = mediaStream;
  video.autoplay = true;
  document.body.appendChild(video);

  // New Code
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  video.addEventListener('play', () => {
    function step() {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  })
  document.body.appendChild(canvas);
})
