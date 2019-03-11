const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const serverConfig = {
  // Inform webpack that we're building a bundle
  // for NodeJS, rather than for the browser
  target: "node",
  // Tell webpack the root file of our
  // server application
  entry: path.resolve(__dirname, "src", "index.js"),
  // Tell webpack where to put output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
