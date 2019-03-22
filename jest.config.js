module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.html?$": "html-loader-jest"
  },
  globalSetup: "./test/setup.js"
};
