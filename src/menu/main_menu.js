
function MainMenuScene() {
  var self = this || {};

  Scene.call(self);

  /* Public */
  self.gameObjects.push(new BtnUnit());

  return self;
}
