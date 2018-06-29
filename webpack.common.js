const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  entry: './client/js/index.js',
  app: './client/js/components/App.js',
  contactus: './client/js/components/views/pages/ContactUs.js',
  customers: './client/js/components/views/pages/Customers.js',
  home: './client/js/components/views/pages/Home.js',
  login: './client/js/components/views/pages/Login.js',
  pricing: './client/js/components/views/pages/Pricing.js',
  products: './client/js/components/views/pages/Products.js',
  support: './client/js/components/views/pages/Support.js',
  usecases: './client/js/components/views/pages/UseCases.js',
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
  },
  optimization: { splitChunks: {chunks: 'all'} }
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
