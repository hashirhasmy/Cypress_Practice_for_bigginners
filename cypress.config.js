const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //video: false,
  e2e: {
    //excludeSpecPattern: "**/videos/**",
    

    setupNodeEvents(on, config) {

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
