require("dotenv").config();

const { resolve } = require("path");

const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");

const { SOCKETS_IO_STATUS } = process.env;

const config = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // выводит css файлы в отдельный файл (3)
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 1,
              sourceMap: true,
            },
          }, // собирает все эти файлы в единые куски (2)
          "postcss-loader",
          "sass-loader", // sass преобразует это в css (1) *!webpack считывает код снизу вверх!
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      exclude: "node_modules",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "public/index.html",
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      SOCKETS_IO_STATUS,
    }),
  ],
};

module.exports = config;
