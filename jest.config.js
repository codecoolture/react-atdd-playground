/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jest = require("next/jest");

const createJestConfig = jest({});

module.exports = createJestConfig({
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "cypress"],
});
