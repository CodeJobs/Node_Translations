module.exports = function(app) {
  var defaultController = require('./controllers/' + global.config.application.controllers.default);

  app.use('/', defaultController);
}