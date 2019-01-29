module.exports = {
  notify: true,
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"],
  setupFilesAfterEnv: ["./testconfigfiles/jest.setup.js"],
  setupFiles: ["raf/polyfill", "./testconfigfiles/enzyme.config.js"]
};
