
var GAME_MINIMUM_WIDTH = 320;
var GAME_MINIMUM_HEIGHT = 200;


// Create a canvas for the game
var canvas = document.createElement('canvas');

document.body.appendChild(canvas);

// Make the canvas use the size of its container
function resetCanvasSize() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  canvas._battleworlds_scale = 1; // Custom-defined attribute

  // Minimum size
  if (canvas.width < GAME_MINIMUM_WIDTH) {
    canvas._battleworlds_scale = GAME_MINIMUM_WIDTH / canvas.width;
    canvas.height *= canvas._battleworlds_scale;
    canvas.width = GAME_MINIMUM_WIDTH;
  }
  if (canvas.height < GAME_MINIMUM_HEIGHT) {
    canvas._battleworlds_scale = GAME_MINIMUM_HEIGHT / canvas.height;
    canvas.width *= canvas._battleworlds_scale;
    canvas.height = GAME_MINIMUM_HEIGHT;
  }
}

window.addEventListener("resize", resetCanvasSize);
resetCanvasSize();

// Start the game
var screenManager = new ScreenManager(canvas);
screenManager.pushScreen(new MainMenuScene());
screenManager.run(function() { console.log("Game over"); });
