/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    LoginPage: './acceptance/pages/LoginPage.js',
    CheckoutInfo:'./acceptance/pages/CheckoutInfoPage.js'
  },
  gherkin: {
    features: './acceptance/features/*.feature',
    steps: [
      './acceptance/steps/Login.steps.js',
      './acceptance/steps/Main.steps.js',
      './acceptance/steps/CheckoutInfo.steps.js'
    ]
  },
  name: 'soucedemo'
}