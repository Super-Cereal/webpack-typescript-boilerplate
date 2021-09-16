const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
});
