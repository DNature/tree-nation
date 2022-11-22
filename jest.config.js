/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['**/__tests__/*.{ts,tsx}'],
  moduleFileExtensions: [ 'ts', 'tsx'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};