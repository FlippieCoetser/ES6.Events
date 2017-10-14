module.exports = function (wallaby) {
  return {
    files: [
      'src/events.ts',
      'src/dictionary.ts'
    ],
    tests: [
      'test/bootstrap.test.ts',
      'test/events.test.ts',
      'test/dictionary.test.ts'
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};