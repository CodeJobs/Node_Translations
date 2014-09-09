module.exports = function(app) {
  var languages = global.config.application.languages,
      defaultController = require('./controllers/' + global.config.application.controllers.default);

  app.use('/', defaultController);
  app.get('/:lang(' + languages + ')', defaultController);
}