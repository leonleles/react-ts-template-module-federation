module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/index.ts', '!**/*.d.ts'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
  },
}
