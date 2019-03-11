const path = require("path");

module.exports = {
  // Tell webpack the root file of our
  // server application
  entry: path.resolve(__dirname, "src", "client", "index.js"),
  // Tell webpack where to put output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  // Tell webpack to run babel for every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
