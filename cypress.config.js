const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 120000, // Increased for CI
  requestTimeout: 120000, // Increased for CI
  responseTimeout: 120000, // Added for CI
  pageLoadTimeout: 120000, // Increased for CI
  viewportWidth: 1350,
  viewportHeight: 900,
  videoCompression: 51,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
  retries: {
    runMode: 2,
    openMode: 0
  },
  // Network stability settings
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  // Page load optimization
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      allureWriter(on, config)
    },
    experimentalRunAllSpecs: true,
    baseUrl: 'https://www.autodesk.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // Additional network stability settings
    experimentalModifyObstructiveThirdPartyCode: false,
    experimentalSessionAndOrigin: true,
    // Page load handling
    experimentalRunAllSpecs: true,
    experimentalWebKitSupport: false,
  },
});
