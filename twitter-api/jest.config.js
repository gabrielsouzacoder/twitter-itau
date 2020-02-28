module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/middlewares/*.ts",
    "!src/server.ts",
    "!src/exceptions/*.ts",
    "!src/db/mongo.ts",
    "!src/utils/logger.ts"
  ]
};
