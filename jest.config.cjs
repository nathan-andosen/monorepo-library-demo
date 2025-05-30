/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", {diagnostics: {ignoreCodes: ["TS151001"]}}],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/tests/",
    "/tests-examples/",
    "/.rollup.cache/"
  ],
  modulePathIgnorePatterns: [

  ]
};
