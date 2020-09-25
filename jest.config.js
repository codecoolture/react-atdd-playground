module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "cypress"],
  transform: {
    "^.+\\.tsx$": "<rootDir>/node_modules/babel-jest",
  },
};
