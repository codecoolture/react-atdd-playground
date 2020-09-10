module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "cypress"],
  transform: {
    "^.+\\.tsx$": "<rootDir>/node_modules/babel-jest",
  },
};
