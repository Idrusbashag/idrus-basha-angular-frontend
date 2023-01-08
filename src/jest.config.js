module.exports = {
  preset: 'jest-preset-angular',
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  snapshotSerializers: [
  ],
  roots: ['src'],
  moduleNameMapper: {
      '^lodash-es$': '<rootDir>/node_modules/lodash/index.js'
  },
  setupFilesAfterEnv: ['<rootDir>/setup.jest.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
      '^.+\\.ts?$': 'ts-jest',
      '^.+\\.mjs?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))', 'node_modules/(?!.*\\.mjs$)', 'node_modules/(?!\\@angular)'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['json', 'text', 'html', 'cobertura'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'TestResults', outputName: 'jest-junit.xml' }]],
};
module.exports = {
  globalSetup: 'jest-preset-angular/global-setup',
};
