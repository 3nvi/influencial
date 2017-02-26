const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtraxtTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ExtraxtTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        }),
        test: /\.css$/
      },
      {
        use: ExtraxtTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
        test: /\.s(a|c)ss$/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    }),
    new ExtraxtTextPlugin('bundle.[hash].css')
  ]
};
