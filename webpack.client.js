const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const clientConfig = {
  // Tell webpack the root file of our
  // server application
  entry: path.resolve(__dirname, "src", "client", "index.js"),
  // Tell webpack where to put output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};

module.exports = merge(baseConfig, clientConfig);
