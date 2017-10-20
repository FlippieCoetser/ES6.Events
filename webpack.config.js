const path = require('path');
module.exports = {
  devtool: 'inline-source-map',
  entry: './src/events.ts',
  output: {
    filename: 'events.js',
    path: path.resolve(__dirname, 'lib/browser'),
    library: 'Events'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/, 
      loader: 'ts-loader',
      options: {
        configFile: 'typescript.browser.json'
      }
    }]
  },
  target: 'web'
};
