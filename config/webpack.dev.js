const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                auto: /\.module\.(s[ac]ss|css)$/i,
                localIdentName: '[path]__[local]--[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
});
