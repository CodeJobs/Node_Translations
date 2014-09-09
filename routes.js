module.exports = function(app) {
  var languages = global.config.application.languages,
      defaultController = require('./controllers/' + global.config.application.controllers.default);

  // Index:
  app.get('/', defaultController.index);
  app.get('/:lang(' + languages + ')', defaultController.index);
}