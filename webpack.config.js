const path = require("path");
const plug = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    filename: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        type: "images/[name][ext]",
      },
    ],
  },
  plugins: [
    new plug({
      title: "work balance",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
      options: {
        concurrency: 100,
      },
    }),
  ],
};
