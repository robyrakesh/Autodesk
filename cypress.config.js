const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000, 
  requestTimeout: 60000, 
  responseTimeout: 60000, 
  pageLoadTimeout: 60000, 
  viewportWidth: 1350,
  viewportHeight: 900,
  videoCompression: 51,
  //userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
  retries: {
    runMode: 2,
    openMode: 0
  },
  // Network stability settings
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
    },
    baseUrl: 'https://www.autodesk.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    failOnStatusCode: false,
  },
});
