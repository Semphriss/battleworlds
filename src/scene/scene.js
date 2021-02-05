
function Scene() {
  var self = this || {};

  GameObject.call(this);

  /* Public */

  self.enter = () => { };

  self.update = (delta) => {
    this.gameObjects.forEach(o => {
      o.update(delta);
    });
  }

  self.draw = (ctx) => {
    // Sort elements by zIndex, then by Y position
    this.gameObjects.sort((o1, o2) => {
      var a = o1.zIndex || 0,
          b = o2.zIndex || 0;
      return a == b ? o1.y - o2.y : a - b;
    });

    this.gameObjects.forEach(o => {
      o.draw(ctx);
    });
  }

  self.leave = () => { };

  self.gameObjects = [];

  return self;
}
