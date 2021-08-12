var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./iq.br.development/TestSteps.js'],
  
    onPrepare: function () {
         browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new HtmlReporter({
          baseDirectory: 'reports'
          , takeScreenShotsOnlyForFailedSpecs: true
          , screenshotsSubfolder: 'screenshots'
          , docTitle: 'HerokuApp Regression Tests'
       }).getJasmine2Reporter());
    } 
  };