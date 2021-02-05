
function MovingObject() {
  var self = this || {};

  GameObject.call(this);

  /* Public */

  self.x = 0;
  self.y = 0;

  return self;
}
