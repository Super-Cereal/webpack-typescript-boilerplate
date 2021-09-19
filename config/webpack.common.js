const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const path = require('path');

const paths = require('./paths');

module.exports = {
  entry: {
    main: path.resolve(paths.src),
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      { test: /\.jsx?$/i, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/i, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|svg)$/i, type: 'asset' },
      { test: /\.(woff2?|ttf|eot|otf)$/i, type: 'asset/inline' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('config', 'template.html'),
      filename: 'index.html',
    }),
  ],

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.tsx', '.jsx', '.ts', '.js', '...'],
    alias: {
      '@': paths.src,
    },
  },
};
