
function GameObject() {
  var self = this || {};

  /* Public */

  self.update = (delta) => { }
  self.draw = (ctx) => { }
  self.event = (e) => { }

  return self;
}
