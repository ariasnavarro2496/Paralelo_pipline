
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ady26i',
  e2e: {
    //baseUrl: "http://localhost:3000",  // Puerto al ingresar
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    //specPattern: "cypress/e2e/features/*.feature",
  }


});

