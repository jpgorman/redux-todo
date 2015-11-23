var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    homepage: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/dist/',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
