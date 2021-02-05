
function createCanvas(settings) {
  var canvas = document.createElement('canvas');
  canvas.width = settings.width;
  canvas.height = settings.height;
  document.body.appendChild(canvas);
  window.addEventListener("resize", () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  });
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  return canvas;
}
