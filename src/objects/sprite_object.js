
function SpriteObject(sprite) {
  var self = this || {};

  MovingObject.call(this);

  /* Public */

  self.draw = (ctx) => {
    if (this._sprite.complete === true)
      ctx.drawImage(this._sprite, this.x, this.y, this.w, this.h);
  }

  self.w = 0;
  self.h = 0;

  self.zIndex = 1;

  /* Private */

  self._sprite = new Image();
  self._sprite.src = sprite;

  return self;
}
