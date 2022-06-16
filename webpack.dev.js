require("dotenv").config();

const { resolve } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const { PORT } = process.env;

const config = {
  mode: "development",
  optimization: {
    usedExports: true,
  },
  devServer: {
    hot: true,
    open: true,
    contentBase: resolve(__dirname, "dist"),
    port: 8081, // client port
    host: "localhost",
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    historyApiFallback: true,
  }
};

module.exports = merge(common, config);
