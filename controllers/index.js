exports.index = function(req, res) {
  global.i18n.setLanguage(req.params.lang);

  res.render('index', { welcome: global.lang.site.welcome });
};