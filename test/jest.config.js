// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"]
};