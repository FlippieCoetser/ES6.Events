module.exports = function (wallaby) {
<<<<<<< HEAD
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
=======

  return {
    files: [
      'src/*Node.ts'
    ],

    tests: [
      'test/*NodeTest.ts'
    ],

    env: {
      type: 'node'
    }
>>>>>>> 156f9b2147b60d2c595e4ea484c157b0119fa771
  };
};