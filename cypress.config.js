const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    excludeSpecPattern: "**/videos/**",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
