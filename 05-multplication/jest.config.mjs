/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest/presets/default-esm",

  // Configure ts-jest to use ESM
  extensionsToTreatAsEsm: [".ts"],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },

  // Permitir que Jest transforme yargs desde node_modules
  transformIgnorePatterns: [
    "node_modules/(?!(yargs|yargs-parser|string-width|strip-ansi|ansi-regex|emoji-regex|is-fullwidth-code-point|ansi-styles|wrap-ansi|cliui)/)",
  ],

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-node",
};

export default config;
