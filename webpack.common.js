const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  entry: './client/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, '.tmp/public'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['.tmp']),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ],
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};
// module.exports = {
//    entry: {
//      app: './src/index.js'
//    },
//    output: {
//      filename: '[name].bundle.js',
//      path: path.resolve(__dirname, '.tmp/public')
//    },
//    plugins: [
//      new CleanWebpackPlugin(['dist']),
//      new HtmlWebpackPlugin({
//        title: 'Production'
//      })
//    ]
//
// };
