module.exports = function (wallaby) {

  return {
    files: [
      'src/*Node.ts'
    ],

    tests: [
      'test/*NodeSpec.ts'
    ],

    env: {
      type: 'node'
    },
    
    // you may remove the setting if you have a tsconfig.json file where the same is set
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({module: 'commonjs'})
    }
  };
};