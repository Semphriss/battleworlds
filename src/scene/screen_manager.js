
function ScreenManager(canvas) {
  var self = this || {};

  /* Public */

  self.pushScreen = (screen) => {
    this._stack.push(screen);
    screen.enter();
  }

  self.popScreen = () => {
    if (this._stack.length > 0) {
      this._stack.pop().leave();
    } else {
      log_warning("Called popScreen() on an empty ScreenManager");
    }
  }

  self.run = (on_quit) => {
    var time = new Date();
    this._interval = setInterval(()=>{
      var now = new Date();
      var delta = now - time;
      time = now;

      if (this._stack.length > 0) {
        var screen = this._stack[this._stack.length - 1];
        screen.update(delta / 1000);
        this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height);
        screen.draw(this._canvas.getContext("2d"));
      } else {
        clearInterval(this._interval);
        if (on_quit)
          on_quit();
      }

    }, 1000 / this.fps);
  }

  self.fps = 60;

  /* Private */

  self._stack = [];
  self._canvas = canvas;
  self._interval = null;

  return self;
}
