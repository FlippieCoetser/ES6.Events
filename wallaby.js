module.exports = function (wallaby) {
  return {
    files: [
      'src/Notify.ts'
    ],
    tests: [
      'test/NotifyTest.ts'
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};