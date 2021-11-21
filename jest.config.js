module.exports = {
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
  ],
  transform: {
    '^.+\\.(ts|js)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    'jose/jwt/verify': '<rootDir>/node_modules/jose/dist/node/cjs/jwt/verify.js',
    'jose/jwk/from_key_like': '<rootDir>/node_modules/jose/dist/node/cjs/jwk/from_key_like.js',
    'jose/jwk/parse': '<rootDir>/node_modules/jose/dist/node/cjs/jwk/parse.js',
  },
  clearMocks: true,
};
