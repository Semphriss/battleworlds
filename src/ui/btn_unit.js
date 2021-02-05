
function BtnUnit() {
  var self = this || {};

  SpriteObject.call(this, "./data/img/btn.png");

  /* Public */

  self._parentUpdate = self.update;
  self.update = (delta) => {
    this._parentUpdate(delta);
    this._angle += delta;
    this._angle %= Math.PI * 2;
  }

  self._parentDraw = self.draw;
  self.draw = (ctx) => {
    ctx.save();
    ctx.fillStyle = "#acf";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this._parentDraw(ctx);

    ctx.fillStyle = "#f007";
    ctx.beginPath();
    ctx.moveTo(this.x + this.w / 2, this.y + this.h / 2);
    ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w, Math.PI * 3 / 2, Math.PI * 3 / 2 + this._angle);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

  }

  self.x = 30;
  self.y = 30;
  self.w = 30;
  self.h = 30;

  /* Private */
  self._angle = 0;

  return self;
}
