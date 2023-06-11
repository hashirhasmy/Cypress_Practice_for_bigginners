const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  //screenshotOnRunFailure : true,
  reporter: 'cypress-mochawesome-reporter',  // To genarate HTML report
  e2e: {
    //excludeSpecPattern: "**/videos/**",
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on); //for html repoerts

      // Specify the browser to use for running tests
      // config.browser = 'chrome';

      //Added this block of code to get output in console
        on('task', {
            log(message) {
            console.log(message);
            return null;
          },
        });   


    },
  },
});
