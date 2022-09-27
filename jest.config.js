const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),

  moduleFileExtensions: [
      'js',
      'json',
      'vue'
  ],
  moduleFileExtensions: [
      'js',
      'vue'
  ],
  transform: {
      '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
      'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  setupFiles: [""]
}
