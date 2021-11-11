const path = require("path");
const { BannerPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          process.env.NODE_ENV === "development"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js/i,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        loader: "url-loader",
        options: {
          limit: 20000,
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  plugins: [
    new BannerPlugin({
      banner: () => `빌드날짜: ${new Date().toLocaleString()}`,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
      : []),
  ],
  devServer: {
    hot: true,
  },
  devtool: "source-map",
};
