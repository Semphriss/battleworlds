
function SceneWithCamera() {
  var self = this || {};

  Scene.call(self);

  /* Public */

  self.update = (delta) => {
    var cam = this.camera;
    cam.x = cam.x * cam.weight + cam.target.x * (1 - cam.weight);
    cam.y = cam.y * cam.weight + cam.target.y * (1 - cam.weight);
  }

  self.draw = (ctx) => {
    var cam = this.camera;
    cam.x = Math.max(cam.x, cam.bounds.x1);
    cam.y = Math.max(cam.y, cam.bounds.y1);
    cam.x = Math.min(cam.x, cam.bounds.x2 - ctx.canvas.width);
    cam.y = Math.min(cam.y, cam.bounds.y2 - ctx.canvas.height);
    cam.target.x = Math.max(cam.target.x, cam.bounds.x1);
    cam.target.y = Math.max(cam.target.y, cam.bounds.y1);
    cam.target.x = Math.min(cam.target.x, cam.bounds.x2 - ctx.canvas.width);
    cam.target.y = Math.min(cam.target.y, cam.bounds.y2 - ctx.canvas.height);
  }

  self.camera = {
    // The current position of the camera
    x: 0,
    y: 0,

    // The position the camera should move towards
    target: {x: 0, y: 0},

    // The boundaries of the camera (nothing outside those bounds will ever appear on-screen)
    bounds: {x1: 0, y1: 0, x2: 0, y2: 0},

    // How fast the camera should move to its target (0 = instantly, 1 = don't move)
    weight: 0.5,

    // How big is the camera (big number = cover a larger area)
    zoom: {val: 1, target: 1, min: 0.5, max: 2, weight: 0.5},

    // When zooming, make sure this point stays at the same place on the screen
    focus_point: {x: 0, y: 0},
  };

  return self;
}
