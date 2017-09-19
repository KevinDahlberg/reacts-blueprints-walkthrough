var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/assets',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: __dirname + '/public',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    ]
  }
};
