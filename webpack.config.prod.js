const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtraxtTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'lodash',
  'redux',
  'react-redux',
  'react-dom',
  'react-router',
  'faker',
  'redux-form',
  'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtraxtTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        use: ExtraxtTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
        test: /\.s(a|c)ss$/
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        use: 'file-loader?name=/images/[name].[ext]?[hash]'
      },
      {
        test: /\.woff(\?.*)?$/,
        use: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
      },
      {
        test: /\.svg(\?.*)?$/,
        use: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.json(\?.*)?$/,
        use: 'file-loader?name=/files/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        minifyJS: true
      }
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),
    new ExtraxtTextPlugin('bundle.[contenthash].css')
  ]
};
