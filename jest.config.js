module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx$": "<rootDir>/node_modules/babel-jest",
  },
};
