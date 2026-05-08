const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    //defaultCommandTimeout: 10000 time implicito
    video:false,
    baseUrl: 'http://localhost:3000',
  },
});
