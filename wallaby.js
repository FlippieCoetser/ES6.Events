module.exports = function (wallaby) {
  return {
    files: [
      'src/typescript.events.ts'
    ],
    tests: [
      'test/typescript.events.test.ts'
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};