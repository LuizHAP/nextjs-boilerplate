module.exports = {
  testEnvironment: 'jsdom', //ambiente para teste
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignora esses arquivos
  collectCoverage: true, // retorna o coverage
  collectCoverageFrom: ['src/**/*.ts(x)'], //de onde pega o coverage
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] // irá executar antes dos testes
}
