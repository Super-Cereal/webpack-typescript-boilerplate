const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: 'js/[name].[contenthash].bundle.js',
  },

  devtool: false,
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: {
                auto: /\.module\.(s[ac]ss|css)$/i,
                localIdentName: '[hash:base64]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
  },

  performance: {
    hints: false,
  },
});
