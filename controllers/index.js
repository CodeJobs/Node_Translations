var express = require('express');
var router = express.Router();
var languages = global.config.application.languages;

router.get('/:lang(' + languages + ')', function(req, res) {
	global.i18n.setLanguage(req.params.lang);
	
  res.render('index', { welcome: global.lang.site.welcome });
});

module.exports = router;
