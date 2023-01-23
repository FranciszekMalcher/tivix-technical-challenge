const { defineConfig } = require("cypress");

const preprocessor = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on('file:preprocessor', preprocessor());
    },

    specPattern: "**/*.feature",
    baseUrl: 'http://qalab.pl.tivixlabs.com/',
  },
});
