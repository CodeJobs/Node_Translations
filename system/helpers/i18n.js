var self = {
  setLanguage: function(language) {
    if (global.config.application.langs.inArray(language)) {
      global.lang = require('../../languages/' + language);
      global.lang.current = language;
    } else {
      global.lang = require('../../languages/' + global.config.site.language);
      global.lang.current = global.config.site.language;
    }
  }
};

module.exports = self;