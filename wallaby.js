module.exports = function (wallaby) {

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
  };
};